import { AskuiClient } from '@vqa4gui/askui';

describe('jest with askui', () => {
  // Client is necessary to use the askui API
  let askuiClient: AskuiClient;
  const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';

  beforeAll(async () => {
    askuiClient = new AskuiClient({
      controlServerUrl: `http://${controluiServerUrl}:6769`,
    });

    await askuiClient.connect();
  });

  it('should click on text', async () => {
    await askuiClient
      .click()
      .text()
      .exec();
  });
});
