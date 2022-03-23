import { InputEvent } from './input-event';

export class Action {
  constructor(
    public inputEvent: InputEvent,
    public position: { x: number, y: number },
    public text: string,
  ) {}

  static fromJson(action: Action) {
    return new Action(
      InputEvent[action.inputEvent],
      action.position,
      action.text,
    );
  }
}
