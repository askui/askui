import { InputEvent } from './input-event';

export class Action {
  constructor(
    public inputEvent: InputEvent,
    public position: { x: number, y: number },
    public text: string,
  ) { }

  static fromJson(action: Action, resizeRatio = 1) {
    return new Action(
      InputEvent[action.inputEvent],
      {
        x: action.position.x * resizeRatio,
        y: action.position.y * resizeRatio,
      },
      action.text,
    );
  }
}
