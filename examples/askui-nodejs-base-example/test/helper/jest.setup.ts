import { AskuiClient, AskuiUiControllerServer } from 'askui';

// Server for controlling the operating system
let askuiUiControllerServer: AskuiUiControllerServer;

const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: AskuiClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    askuiUiControllerServer = new AskuiUiControllerServer();
    await askuiUiControllerServer.start();
  }

  aui = new AskuiClient({
    askuiUiControllerServerUrl: `http://${controluiServerUrl}:6769`,
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
