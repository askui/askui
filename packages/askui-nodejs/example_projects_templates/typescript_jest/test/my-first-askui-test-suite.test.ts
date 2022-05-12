import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

describe('jest with askui', () => {
  // Server for controlling the operating system
  let askuiControlServer: AskuiControlServer;

  // Client is necessary to use the askui API
  let askuiClient: AskuiClient;

  jest.setTimeout(60 * 1000 * 60);

  beforeEach(async () => {
    askuiControlServer = new AskuiControlServer({
      /**
       * Select the display you want to run your tests on, display 0 is your main display;
       * ignore if you have only one display
       */
      display: 0,
    });

    await askuiControlServer.start();

    askuiClient = new AskuiClient();

    await askuiClient.connect();
  });

  it('should click on text', async () => {
    await askuiClient
      .click()
      .text()
      .exec();
  });

  afterEach(async () => {
    askuiClient.close();
    await askuiControlServer.stop();
  });
});
