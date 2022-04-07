import * as askui from '@vqa4gui/askui';

describe('jasmine demo with askui', () => {
  let newClient : askui.Client;
  beforeAll(function init() {
    newClient = this.askuiClient;
  });

  it('Should click on text', async () => {
    const result = await newClient
      .click()
      .text()
      .exec();
    expect(result.state).toBe('PASSED');
  });

  xit('Should fail', async () => {
    const result = await newClient
      .expect()
      .text()
      .withText('NO such text exits')
      .exists()
      .exec();
    expect(result.state).toBe('FAILED');
  });
});
