import { InputEvent } from './input-event';

export type ActionParameters = {
  [key: string]: string | number | boolean | string[] | ActionParameters;
};

export class Action {
  constructor(
    public inputEvent: InputEvent,
    public position: { x: number, y: number },
    public text: string,
    public parameters: ActionParameters = {},
  ) { }

  static fromJson(action: Action, resizeRatio = 1) {
    return new Action(
      InputEvent[action.inputEvent],
      {
        x: action.position.x * resizeRatio,
        y: action.position.y * resizeRatio,
      },
      action.text,
      action.parameters ? action.parameters : {},
    );
  }

  toJson(): object {
    return {
      inputEvent: this.inputEvent,
      parameters: this.parameters,
      position: this.position,
      text: this.text,
    };
  }
}
