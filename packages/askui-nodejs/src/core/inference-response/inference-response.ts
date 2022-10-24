import { ControlCommand } from '../ui-control-commands/control-command';
import { Annotation } from '../annotation/annotation';

export class InferenceResponse {
  constructor(
    public type: string,
    public data: ControlCommand | Annotation,
  ) {}

  static fromJson(json: unknown, resizeRatio = 1, image?: string):
  ControlCommand | Annotation {
    const inferenceResponse = json as InferenceResponse;
    return this.createModels(inferenceResponse.type, inferenceResponse.data, resizeRatio, image);
  }

  static createModels(
    type: string,
    data: ControlCommand | Annotation,
    resizeRatio: number,
    image?: string,
  ):
    ControlCommand | Annotation {
    return this.models[type as keyof Models](data, resizeRatio, image);
  }

  static models: Models = {
    DETECTED_ELEMENTS: (
      data: Annotation,
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
