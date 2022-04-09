import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

beforeAll(async function init() {
  this.askuiServer = new AskuiControlServer();
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
