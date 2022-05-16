import { AskuiControlServer } from '@vqa4gui/askui';

function setupBeforeAndAfter() {
// Server for controlling the operating system
  let askuiServer : AskuiControlServer;

  jest.setTimeout(60 * 1000 * 60);

  beforeAll(async () => {
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
  });

  afterAll(async () => {
    /**
    * Stops the askui controlui-server
    */
    await askuiServer.stop();
  });
}

export = { setupBeforeAndAfter };
