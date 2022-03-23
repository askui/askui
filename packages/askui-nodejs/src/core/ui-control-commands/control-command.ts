import { Action } from './action';
import { ControlCommandCode } from './control-command-code';

export class ControlCommand {
  constructor(
    public code: ControlCommandCode,
    public actions: Action[],
    public tryToRepeat: boolean = false,
  ) {}

  static fromJson(json: ControlCommand): ControlCommand {
    return new ControlCommand(
      ControlCommandCode[json.code],
      json.actions.map((action) => Action.fromJson(action)),
      json.tryToRepeat,
    );
  }
}
