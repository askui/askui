import { AskuiControlServer } from '@vqa4gui/askui';

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

  await askuiServer.start();
});

afterAll(async () => {
  await askuiServer.stop();
});
