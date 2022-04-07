import * as askui from '@vqa4gui/askui';
import { AnnotationLevel } from '@vqa4gui/askui/dist/cjs/execution/annotation-level'; 

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

const controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';

beforeAll(async function init() {
  this.askuiClient = new askui.Client({
    controlServerUrl: `http://${controluiServerUrl}:6769`,
    annotationLevel: AnnotationLevel.ON_FAILURE,
  });
  /**
  * this function will start the connection to the askui controlui-server
  */
  await this.askuiClient.start();
});

afterAll(function clean() {
  /**
  * closes the connection to the askui controlui-server
  */
  this.askuiClient.closeConnectionToServer();
});
