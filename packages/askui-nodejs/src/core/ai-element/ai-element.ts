import { CustomElementJson } from '../model/custom-element-json';
import { logger } from '../../lib';
import { AIElementError } from './ai-element-error';

interface AIElementJson {
  version: number;
  name: string;
  image?: { mask?: { x: number; y: number }[] };
}

class AIElement {
  constructor(
    public name: string,
    public imagePath: string,
    public mask?: { x: number; y: number }[],
  ) {}

  static fromJson(json: AIElementJson, imagePath: string): AIElement {
    if (json.version === 1) {
      return new AIElement(json.name, imagePath, json.image?.mask);
    }
    throw new AIElementError(`unsupported AIElement version '${json.version}'.`);
  }

  toCustomElement(): CustomElementJson {
    logger.debug('Converting AIElement to CustomElementJson.');
    return {
      customImage: this.imagePath,
      mask: this.mask,
      name: this.name,
    };
  }

  hasName(name: string): boolean {
    return this.name === name;
  }
}

export { AIElement, AIElementJson };
