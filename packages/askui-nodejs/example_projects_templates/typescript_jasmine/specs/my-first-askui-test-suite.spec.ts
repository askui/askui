import { AskuiClient } from '@vqa4gui/askui';

describe('jasmine demo with askui', () => {
  let aui : AskuiClient;
  beforeAll(function init() {
    aui = this.askuiClient;
  });

  it('Should click on text', async () => {
    await aui
      .click()
      .text()
      .exec();
  });

  it('Should fail', async () => {
    await aui
      .expect()
      .text()
      .withText('NO such text exits')
      .exists()
      .exec();
  });
});
