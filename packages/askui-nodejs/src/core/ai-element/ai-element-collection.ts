import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { AIElement, AIElementJson } from './ai-element';
import { CustomElementJson } from '../model/custom-element-json';
import { logger } from '../../lib';
import { AIElementError } from './ai-element-error';

export class AIElementCollection {
  static AI_ELEMENT_FOLDER = path.join(
    os.homedir(),
    '.askui',
    'SnippingTool',
    'AIElement',
  );

  constructor(private elements: AIElement[]) {}

  static async collectForWorkspaceId(
    workspaceId: string | undefined,
  ): Promise<AIElementCollection> {
    logger.debug(`Collecting AIElements for workspace '${workspaceId}' ...`);

    if (workspaceId === undefined) {
      throw new AIElementError('workspaceId is undefined.');
    }

    const workspaceAIElementFolder = path.join(
      AIElementCollection.AI_ELEMENT_FOLDER,
      workspaceId,
    );

    if (!(await fs.pathExists(workspaceAIElementFolder))) {
      throw new AIElementError(
        `Missing AIElement folder for workspace '${workspaceId}' at '${workspaceAIElementFolder}'.`,
      );
    }

    const files = await fs.readdir(workspaceAIElementFolder);

    if (files.length === 0) {
      throw new AIElementError(
        `'${workspaceAIElementFolder}' is empty. No AIElement files found for workspace '${workspaceId}'.`,
      );
    }

    const aiElements = await Promise.all(files
      .filter((file) => path.extname(file) === '.json')
      .map(async (file) => {
        const jsonFile = path.join(workspaceAIElementFolder, file);
        const baseName = path.basename(jsonFile, '.json');
        const pngFile = path.join(workspaceAIElementFolder, `${baseName}.png`);
        if (await fs.pathExists(pngFile)) {
          const metadata: AIElementJson = JSON.parse(await fs.readFile(jsonFile, 'utf-8'));
          return AIElement.fromJson(metadata, pngFile);
        }
        return null;
      }));

    const validAIElements = aiElements.filter((element): element is AIElement => element !== null);

    if (validAIElements.length === 0) {
      throw new AIElementError(
        `No AIElement files found for workspace '${workspaceId}' at '${workspaceAIElementFolder}'.`,
      );
    }

    return new AIElementCollection(validAIElements);
  }

  getByName(name: string): CustomElementJson[] {
    if (name === '') {
      throw new AIElementError('AIElement cannot have an empty name.');
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
}
