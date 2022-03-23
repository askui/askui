import * as askui from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

beforeAll(async function init() {

  /**
  * this function will start the askui controlui-server before all the test suites
  * and select screen 0, on which the test will be executed
  */
  await askui.startAskuiServer({
    display: 0,
    minimize: true,
  });

  this.askuiClient = new askui.Client();
  /**
  * this function will start the connection to the askui controlui-server
  */
  await this.askuiClient.start();
});

afterAll(function clean() {
  /**
  * Stops the askui controlui-server and closes the connection to the askui controlui-server
  */
  this.askuiClient.stop();
});
