import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

let askuiServer: AskuiControlServer;
const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';
let aui: AskuiClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    askuiServer = new AskuiControlServer();
    await askuiServer.start();
  }

  aui = new AskuiClient({
    controlServerUrl: `http://${controluiServerUrl}:6769`,
  });

  await aui.connect();
});

afterAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    await askuiServer.stop();
  }

  aui.close();
});

/* eslint-disable import/prefer-default-export */
/* eslint-disable  import/no-mutable-exports */

export { aui };
