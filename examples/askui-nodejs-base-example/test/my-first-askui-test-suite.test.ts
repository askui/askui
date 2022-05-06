import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

describe('jest with askui', () => {
  let askuiServer : AskuiControlServer;
  let aui : AskuiClient;
  jest.setTimeout(60 * 1000 * 60);
  beforeEach(async () => {
    askuiServer = new AskuiControlServer({
      /**
       * Select the display you want to run your tests on, display 0 is your main display;
       * ignore if you have only one display
       */
      display: 0,
    });
    /**
    * Starts the askui controlui-server
    */
    await askuiServer.start();

    aui = new AskuiClient();
    /**
     * Starts the connection to the askui controlui-server
     */
    await aui.connect();
  });

  it('Should click on text', async () => {
    await aui
      .click()
      .text()
      .exec();
  });

  afterEach(async () => {
    /**
    * Closes the connection to the askui controlui-server
    */
    aui.close();

    /**
    * Stops the askui controlui-server
    */
    await askuiServer.stop();
  });
});
