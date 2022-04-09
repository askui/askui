import { AskuiClient } from '@vqa4gui/askui';

describe('jasmine demo with askui', () => {
  let aui : AskuiClient;
  beforeAll(function init() {
    aui = this.askuiClient;
  });

  it('Should click on text', async () => {
    const result = await aui
      .click()
      .text()
      .exec();
    expect(result.state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await aui
      .expect()
      .text()
      .withText('NO such text exits')
      .exists()
      .exec();
    expect(result.state).toBe('FAILED');
  });
});
