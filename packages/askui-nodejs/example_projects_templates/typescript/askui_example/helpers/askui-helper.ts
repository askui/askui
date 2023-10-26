import { UiControlClient, UiController } from 'askui';
// allure_stepreporter_import

// Server for controlling the operating system
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

// timeout_placeholder

beforeAll(async () => {
  // uicontroller_init_placeholder

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
    // reporter_placeholder
  });

  await aui.connect();
});

beforeEach(async () => {
  await aui.startVideoRecording();
});

afterEach(async () => {
  await aui.stopVideoRecording();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const video = await aui.readVideoRecording();
  // allure_stepreporter_attach_video
});

afterAll(async () => {
  aui.disconnect();

  // uicontroller_stop_placeholder
});

export { aui };
