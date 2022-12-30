import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should click on text', async () => {
    // Run this to see what askui annotates
    await aui.annotateInteractively();

    await aui.moveMouse(0, 0).exec();

    await aui
      .click()
      .text()
      .withText('Click on this text right here!')
      .exec();
  });
});
