import { Action } from './action';
import { ControlCommandCode } from './control-command-code';
import { InputEvent } from './input-event';

export class ControlCommand {
  constructor(
    public code: ControlCommandCode,
    public actions: Action[],
    public tryToRepeat: boolean = false,
  ) { }

  static fromJson(json:unknown, resizeRatio = 1): ControlCommand {
    const controlCommand = json as ControlCommand;
    return new ControlCommand(
      ControlCommandCode[controlCommand.code],
      controlCommand.actions.map((action) => Action.fromJson(action, resizeRatio)),
      controlCommand.tryToRepeat,
    );
  }

  setTextToBeTyped(text: string) {
    this.actions = this.actions.map((action) => (
      [InputEvent.TYPE, InputEvent.TYPE_TEXT].includes(action.inputEvent)
        ? new Action(action.inputEvent, action.position, text, action.parameters) : action
    ));
  }
}
