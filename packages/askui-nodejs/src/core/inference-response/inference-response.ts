import { ControlCommand } from '../ui-control-commands/control-command';
import { AnnotationJson } from '../annotation/annotation-json';
import { Annotation } from '../annotation/annotation';

export class InferenceResponse {
  constructor(
    public type: string,
    public data: ControlCommand | AnnotationJson,
  ) { }

  static fromJson(json: InferenceResponse, resizeRatio = 1, image?: string):
  ControlCommand | Annotation {
    return this.createModels(json.type, json.data, resizeRatio, image);
  }

  static createModels(
    type: string,
    data: ControlCommand | AnnotationJson,
    resizeRatio: number,
    image?: string,
  ):
    ControlCommand | Annotation {
    return this.models[type as keyof Models](data, resizeRatio, image);
  }

  static models: Models = {
    DETECTED_ELEMENTS: (
      data: AnnotationJson,
      resizeRatio: number,
      image: string,
    ) => Annotation
      .fromJson({ image, detected_elements: data.detected_elements }, resizeRatio),
    COMMANDS: (data: ControlCommand, resizeRatio: number) => ControlCommand
      .fromJson(data, resizeRatio),
  };
}

interface Models {
  DETECTED_ELEMENTS: CallableFunction
  COMMANDS: CallableFunction
}
