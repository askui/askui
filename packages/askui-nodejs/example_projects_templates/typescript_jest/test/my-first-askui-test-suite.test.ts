import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click();
    // <INSERT YOUR COPIED ELEMENT DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>
    // .exec();
  });
});
