import { ControlCommand } from '../ui-control-commands/control-command';
import { Annotation } from '../annotation/annotation';
import { ModelType } from './model-type';
import { InvalidModelTypeError } from './invalid-model-type-error';

export interface InferenceResponseBody {
  type: ModelType;
  data: ModelType extends 'COMMANDS' ? ControlCommand : Annotation;
}

export interface VQAInferenceResponseBody {
  data: {
    response: string;
  };
}

export class InferenceResponse {
  static fromJson(
    json: InferenceResponseBody,
    resizeRatio = 1,
    image?: string,
  ): ControlCommand | Annotation {
    return this.createModels(json.type, json.data, resizeRatio, image);
  }

  static createModels(
    type: ModelType,
    data: ModelType extends 'COMMANDS' ? ControlCommand : Annotation,
    resizeRatio: number,
    image?: string,
  ): ControlCommand | Annotation {
    if (type === 'COMMANDS') return ControlCommand.fromJson(data, resizeRatio);
    if (type === 'DETECTED_ELEMENTS') {
      return Annotation.fromJson(
        { image, detected_elements: data.detected_elements },
        resizeRatio,
      );
    }
    throw new InvalidModelTypeError(type);
  }
}
