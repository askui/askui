import { AskuiClient, AskuiControlServer } from 'askui';

// Server for controlling the operating system
let askuiServer: AskuiControlServer;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: AskuiClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  askuiServer = new AskuiControlServer({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });

  await askuiServer.start();

  aui = new AskuiClient();

  await aui.connect();
});

afterAll(async () => {
  await askuiServer.stop();

  aui.close();
});

export { aui };
