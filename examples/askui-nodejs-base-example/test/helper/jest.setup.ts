import { UiControlClient, UiControlServer } from 'askui';

// Server for controlling the operating system
let askuiUiControllerServer: UiControlServer;

const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    askuiUiControllerServer = new UiControlServer();
    await askuiUiControllerServer.start();
  }

  aui = new UiControlClient({
    uiControlServerUrl: `http://${controluiServerUrl}:6769`,
  });

  await aui.connect();
});

afterAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    await askuiUiControllerServer.stop();
  }

  aui.close();
});

export { aui };
