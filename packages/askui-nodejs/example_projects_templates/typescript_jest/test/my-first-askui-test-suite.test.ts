import { AskuiClient } from '@vqa4gui/askui';

describe('jest with askui', () => {
  // Client is necessary to use the askui API
  let askuiClient: AskuiClient;

  beforeAll(async () => {
    askuiClient = new AskuiClient();

    await askuiClient.connect();
  });

  it('should click on text', async () => {
    await askuiClient
      .click()
      .text()
      .exec();
  });
});
