import { aui } from './helpers/askui-helper';

describe('AskUI Demo: Basic Mouse Movement', () => {
  it('should move mouse in a rectangle shape', async () => {
    // The act() command instructs the agent to achieve a specified goal through autonomous actions
    // The agent will analyze the screen and perform necessary actions to accomplish the goal
    // This can include clicking, typing, scrolling, and other interface interactions
    // In this case, it will move the mouse in a rectangular pattern on the screen
    await aui.act('Move mouse in a rectangle');
  });
});
