import { UiControlClient, UiController } from 'askui';
// Uncomment following the line for proxy support and install hpagent with  `npm i --save hpagent`
// import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent';

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  const proxyAgents = {};
  /*
  // Proxy configuration
  // Uncomment this block for proxy support.
  const proxyUrl = "http://<your-proxy-url>"
  proxyAgents = {
    proxyAgents: {
      http: new HttpProxyAgent({
          proxy: proxyUrl
        }),
      https: new HttpsProxyAgent({
          proxy: proxyUrl
        }),
  }}
  */

  uiController = new UiController({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
    ...proxyAgents,
  });

  await uiController.start();

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
    ...proxyAgents,
  });

  await aui.connect();
});

afterAll(async () => {
  await uiController.stop();

  aui.close();
});

export { aui };
