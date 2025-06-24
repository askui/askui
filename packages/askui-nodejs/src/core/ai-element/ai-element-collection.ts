import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { AIElement, AIElementJson } from './ai-element';
import { CustomElementJson } from '../model/custom-element-json';
import { logger } from '../../lib';
import { AIElementError } from './ai-element-error';
import { AIElementArgs } from './ai-elements-args';

export class AIElementCollection {
  static AI_ELEMENT_FOLDER = path.join(
    os.homedir(),
    '.askui',
    'SnippingTool',
    'AIElement',
  );

  constructor(private elements: AIElement[]) { }

  static async collectAIElements(
    workspaceId: string | undefined,
    aiElementArgs: AIElementArgs,
  ): Promise<AIElementCollection> {
    if (!workspaceId) {
      throw new AIElementError("Value of 'workspaceId' must be defined.");
    }

    const workspaceAIElementFolder = path.join(
      AIElementCollection.AI_ELEMENT_FOLDER,
      workspaceId,
    );

    const aiElementsLocations = [
      workspaceAIElementFolder,
      ...aiElementArgs.additionalLocations.map((userPath) => path.resolve(userPath)),
    ];

    const aiElements: AIElement[] = [];

    await Promise.all(
      aiElementsLocations.map(async (aiElementLocation) => {
        if (await fs.pathExists(aiElementLocation)) {
          aiElements.push(
            ...AIElementCollection.CollectAiElementsFromLocation(aiElementLocation),
          );
        } else {
          const errorMessage = `AIElements location '${aiElementLocation}' does not exist.`;
          if (aiElementArgs.onLocationNotExist === 'error') {
            throw new AIElementError(errorMessage);
          } else if (aiElementArgs.onLocationNotExist === 'warn') {
            logger.warn(errorMessage);
          }
        }
      }),
    );

    if (aiElements.length === 0) {
      const formattedLocations = aiElementsLocations.map((aiElementsLocation) => `"${aiElementsLocation}"`).join(', ');
      const errorMessage = `No AIElements found in the following location${aiElementsLocations.length > 1 ? 's' : ''}: [${formattedLocations}].`;
      throw new AIElementError(errorMessage);
    }

    return new AIElementCollection(aiElements);
  }

  getByName(name: string): CustomElementJson[] {
    if (name === '') {
      throw new AIElementError("Parameter 'name' must be non-empty. This might be due to corrupted metadata.");
    }

    logger.debug(`Getting all CustomElementJson with the name '${name}' ...`);

    const elements = this.elements.filter((element) => element.hasName(name));
    if (elements.length === 0) {
      throw new AIElementError(`No AIElement with the name '${name}' was found.`);
    }

    return elements.map((element) => element.toCustomElement());
  }

  getByNames(names: string[]): CustomElementJson[] {
    if (names.length === 0) {
      return [];
    }
    return names.flatMap((name) => this.getByName(name));
  }

  getNames(): string[] {
    return [...new Set(this.elements.map((element) => element.name))];
  }

  private static CollectAiElementsFromLocation(aiElementLocation: string): AIElement[] {
    const files = fs.readdirSync(aiElementLocation);
    if (files.length === 0) {
      return [];
    }
    const aiElements = files
      .filter((file) => path.extname(file) === '.json')
      .map((file) => {
        const jsonFile = path.join(aiElementLocation, file);
        const baseName = path.basename(jsonFile, '.json');
        const pngFile = path.join(aiElementLocation, `${baseName}.png`);
        if (fs.existsSync(pngFile)) {
          const metadata: AIElementJson = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
          return AIElement.fromJson(metadata, pngFile);
        }
        return null;
      });

    const validAIElements = aiElements.filter((element): element is AIElement => element !== null);

    if (validAIElements.length === 0) {
      logger.debug(`No valid AIElements found in '${aiElementLocation}'.`);
    }

    return validAIElements;
  }
}
