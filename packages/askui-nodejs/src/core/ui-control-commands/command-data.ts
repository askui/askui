import { ControlCommand } from './control-command';

export class CommandData {
  constructor(
    public command: ControlCommand [],
  ) {}

  static fromJson(json: ControlCommand [], resizeRatio = 1) {
    return new CommandData(
      json.map((data) => ControlCommand.fromJson(data, resizeRatio)),
    );
  }
}
