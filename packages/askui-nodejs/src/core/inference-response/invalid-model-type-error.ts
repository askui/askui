import { ModelType } from './model-type';

export class InvalidModelTypeError extends Error {
  constructor(type: ModelType) {
    super(`Invalid model type: ${type}`);
  }
}
