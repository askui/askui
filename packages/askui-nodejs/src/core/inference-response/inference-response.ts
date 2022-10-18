import { Annotation } from '../annotation/annotation';
import { DetectedElement } from '../model/annotation-result/detected-element';
import { ControlCommand } from '../ui-control-commands/control-command';
import { CommandData } from '../ui-control-commands/command-data';

export class InferenceResponse {
  constructor(
    public type: string,
    public data: ControlCommand[] | DetectedElement[],
  ) {}

  static fromJson(json:InferenceResponse, resizeRatio = 1, image?: string):
  CommandData | Annotation {
    return this.createModels(json.type, json.data, resizeRatio, image);
  }

  static createModels(
    type: string,
    data: ControlCommand[] | DetectedElement[],
    resizeRatio: number,
    image?: string,
  ):
    CommandData | Annotation {
    return this.models[type as keyof Models](data, resizeRatio, image);
  }

  static models: Models = {
    DETECTED_ELEMENTS: (data: DetectedElement[], resizeRatio: number, image: string) => Annotation
      .fromJson({ image, data }, resizeRatio),
    COMMANDS: (data: ControlCommand[], resizeRatio: number) => CommandData
      .fromJson(data, resizeRatio),
  };
}

interface Models {
  DETECTED_ELEMENTS:(data: DetectedElement[], resizeRatio: number, image: string) => Annotation
  COMMANDS: (data: ControlCommand[], resizeRatio: number) => CommandData
}
