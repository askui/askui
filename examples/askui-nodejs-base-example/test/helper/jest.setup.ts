import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
let uiController: UiController;

const uiControllerUrlHost = process.env.CI_JOB_ID ? 'askui-runner' : '127.0.0.1';

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  if (!(process.env.CI_JOB_ID)) {
    uiController = new UiController();
    await uiController.start();
  }

  aui = await UiControlClient.build({
    uiControllerUrl: `http://${uiControllerUrlHost}:6769`,
  });

  await aui.connect();
});

afterAll(async () => {
  aui.close();

  if (!(process.env.CI_JOB_ID)) {
    await uiController.stop();
  }
});

export { aui };
