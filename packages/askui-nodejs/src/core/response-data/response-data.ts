import { Annotation } from '../annotation/annotation';
import { DetectedElement } from '../model/annotation-result/detected-element';
import { ControlCommand } from '../ui-control-commands/control-command';
import { CommandData } from '../ui-control-commands/command-data';

export class ResponseData {
  constructor(
    public type: string,
    public data: ControlCommand [] | DetectedElement [],
  ) {}

  static fromJson(json:ResponseData, resizeRatio = 1, image?: string): CommandData | Annotation {
    return this.getJsonOfType[json.type](json.data, resizeRatio, image);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getJsonOfType : { [key: string]: any } = {
    DETECTED_ELEMENTS: (data: DetectedElement[], resizeRatio: number, image: string) => Annotation
      .fromJson({ image, data }, resizeRatio),
    COMMANDS: (data: ControlCommand[], resizeRatio: number) => CommandData
      .fromJson(data, resizeRatio),
  };
}
