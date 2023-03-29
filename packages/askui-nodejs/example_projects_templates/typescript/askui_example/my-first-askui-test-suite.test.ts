import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click();
    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS LINE>.exec();
  });
});
