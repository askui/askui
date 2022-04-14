import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

beforeAll(async function init() {
  this.askuiServer = new AskuiControlServer({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });
  /**
  * Starts the askui controlui-server
  */
  await this.askuiServer.start();

  this.askuiClient = new AskuiClient();
  /**
   * Starts the connection to the askui controlui-server
   */
  await this.askuiClient.connect();
});

afterAll(async function clean() {
  /**
  * Stops the askui controlui-server
  */
  await this.askuiServer.stop();

  /**
  * Closes the connection to the askui controlui-server
  */
  this.askuiClient.close();
});
