import { ControlCommand } from '../ui-control-commands/control-command';
import { CommandData } from '../ui-control-commands/command-data';
import { AnnotationJson } from '../annotation/annotation-json';
import { AnnotationData } from '../annotation/annotation-data';

export class InferenceResponse {
  constructor(
    public type: string,
    public data: ControlCommand[] | AnnotationJson[],
  ) {}

  static fromJson(json:InferenceResponse, resizeRatio = 1, image?: string):
  CommandData | AnnotationData {
    return this.createModels(json.type, json.data, resizeRatio, image);
  }

  static createModels(
    type: string,
    data: ControlCommand[] | AnnotationJson[],
    resizeRatio: number,
    image?: string,
  ):
    CommandData | AnnotationData {
    return this.models[type as keyof Models](data, resizeRatio, image);
  }

  static models: Models = {
    DETECTED_ELEMENTS: (
      data: AnnotationJson[],
      resizeRatio: number,
      image: string,
    ) => AnnotationData
      .fromJson(data, resizeRatio, image),
    COMMANDS: (data: ControlCommand[], resizeRatio: number) => CommandData
      .fromJson(data, resizeRatio),
  };
}

interface Models {
  DETECTED_ELEMENTS: CallableFunction
  COMMANDS: CallableFunction
}
