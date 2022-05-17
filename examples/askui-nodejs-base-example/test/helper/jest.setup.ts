import { AskuiClient } from '@vqa4gui/askui';

const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';
let aui: AskuiClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  aui = new AskuiClient({
    controlServerUrl: `http://${controluiServerUrl}:6769`,
  });

  await aui.connect();
});

afterAll(async () => {
  aui.close();
});
