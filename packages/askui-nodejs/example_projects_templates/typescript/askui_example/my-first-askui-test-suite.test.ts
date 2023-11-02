import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should generate an (interactive) annotation', async () => {
    // For Windows users:
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    await aui.annotate();

    // Uncomment for macOS and Linux
    // Delete the lines above to not trigger annotate()
    // await aui.annotateInteractively();
  });

  xit('should click on my element', async () => {
    await aui
      .click();
    // <INSERT YOUR COPIED ELEMENT DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>
    // .exec();
  });
});
