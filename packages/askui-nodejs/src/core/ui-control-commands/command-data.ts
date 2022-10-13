import { ControlCommand } from './control-command';
import { ControlCommandCode } from './control-command-code';

export class CommandData {
  constructor(
    public type:string,
    public data: ControlCommand [] = [],
  ) {}

  static getControlCommandFromJson(json:CommandData, resizeRatio = 1) {
    return ControlCommand
      .fromJson(json.data[0]
            ?? new ControlCommand(ControlCommandCode.ERROR, []), resizeRatio);
  }
}
