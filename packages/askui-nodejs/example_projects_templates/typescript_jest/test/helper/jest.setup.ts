import { UiControlClient, UiControlServer } from 'askui';

// Server for controlling the operating system
let askuiUiControllerServer: UiControlServer;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  askuiUiControllerServer = new UiControlServer({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });

  await askuiUiControllerServer.start();

  aui = new UiControlClient();

  await aui.connect();
});

afterAll(async () => {
  await askuiUiControllerServer.stop();

  aui.close();
});

export { aui };
