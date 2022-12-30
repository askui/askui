import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

// timeout_placeholder

beforeAll(async () => {
  uiController = new UiController({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });

  await uiController.start();

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
  });

  await aui.connect();
});

afterAll(async () => {
  aui.close();

  await uiController.stop();
});

export { aui };
