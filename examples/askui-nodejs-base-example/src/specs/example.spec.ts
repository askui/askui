import * as askui from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('Jasmine demo with askui', () => {
  let newClient: askui.Client;
  const controluiServerUrl = process.env.CI_JOB_ID ? 'chrome-runner' : 'localhost';
  beforeAll(async () => {
    await askui.startAskuiServer();

    newClient = new askui.Client({
      controlServerUrl: `http://${controluiServerUrl}:6769`,
      controlYourUiApi: 'https://controlui-api-dev.askui.com',
      annotationLevel: 'onFailure',
    });
    await newClient.start();
  });

  it('Should click on text', async () => {
    const result = await newClient
      .click()
      .text()
      .exec();
    expect(result.state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await newClient
      .expect()
      .text()
      .withText('No such text exits')
      .exists()
      .exec();
    expect(result.state).toBe('FAILED');
  });

  afterAll(async () => {
    await newClient.stop();
  });
});
