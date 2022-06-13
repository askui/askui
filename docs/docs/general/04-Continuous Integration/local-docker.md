---
custom_edit_url: null
---
import ClipboardButton from '@site/src/components/ClipboardButton';

# Local Docker

We maintain Docker Images for running askui tests locally and in CI pipelines. The images contain the askui UI Controller and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library can connect to the controller inside the Docker container to execute the test steps inside it.

## Authentication & Authorization

Currently, the images are hosted on a private registry. You need to authenticate and authorize yourself in order a to access them. The username and token are going to be provided by your contact person at askui. The token is the one you also use for downloading the library.

```shell
docker login registry.gitlab.com -u <username> -p <token>
```

## Available Images

The images can be downloaded from

`registry.gitlab.com/vqa4gui/mvp/askui/browser/<browser>:v0.9.1-<browser_version>-<platform>`

whereby `<browser>`, `<browser_version>` and `<platform>` need to be replaced with concrete values.

The following list shows the images we currently provide:

| Browser | Browser Version | Release Version | Platform| |
|---|---|---|---|---|
| chrome | 100.0.4896.60 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/chrome:v0.9.1-100.0.4896.60-amd64"></ClipboardButton> |
| chrome | 99.0.4844.51 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/chrome:v0.9.1-99.0.4844.51-amd64"></ClipboardButton> |
| chrome | 97.0.4692.71 |  v0.9.1 | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/chrome:v0.9.1-97.0.4692.71-amd64"></ClipboardButton> |
| chrome | 90.0.4430.212 |  v0.9.1 | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/chrome:v0.9.1-90.0.4430.212-amd64"></ClipboardButton> |
| firefox | 98.0.2 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/firefox:v0.9.1-98.0.2-amd64"></ClipboardButton> |
| firefox | 97.0.2 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/firefox:v0.9.1-97.0.2-amd64"></ClipboardButton> |
| firefox | 96.0.3 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/firefox:v0.9.1-96.0.3-amd64"></ClipboardButton> |
| firefox | 82.0.3 | v0.9.1  | amd64 | <ClipboardButton link="registry.gitlab.com/vqa4gui/mvp/askui/browser/firefox:v0.9.1-82.0.3-amd64"></ClipboardButton> |


:::caution

Currently, we do not offer images for **ARM**.

:::

Pull the image using

```shell
docker pull registry.gitlab.com/vqa4gui/mvp/askui/browser/<browser>:<releaseVersion>-<browserVersion>-amd64
```

or use something like [Testcontainers](https://www.npmjs.com/package/testcontainers) (see [Start Container in Jasmine Test Suite](#start-container-in-jasmin-test-suite) as an example) to pull the image from inside your test suite.

## Configure a Container

When starting a container, the following environment variables can be used to configure it:

| Variable | Default Value | Description |
|---|---|---|
| ENABLE_VNC | false | `true` if VNC is enabled so that you can connect and observe whats happening inside the container. |
| SCREEN_RESOLUTION | 1920x1080 | The screen resolution used inside the container in the format `<width>x<height>`. |


## Start a Container from Inside a Jasmine Test Suite

The following example shows how to use the containers inside a Jasmine test suite without needing to pull and start the container beforehand.

First, install [Testcontainers](https://github.com/testcontainers/testcontainers-node), a Node.js library that supports tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.

```shell
npm i -D testcontainers
```

Then, to run your tests inside a container, include a `beforeAll` setup function like in the following example. It is going to pull and start the container with the askui UI Controller and browser mapping the ports exposed by the container to free ports on your machine (randomly chose out of the free ports available at runtime to prevent collision) which you and the askui library can use to connect to the container.

```typescript
import { AskuiClient } from 'askui';
import { GenericContainer, StartedTestContainer } from 'testcontainers';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;


describe('jasmine demo with askui', () => {
  let aui : AskuiClient;
  let container: StartedTestContainer

  beforeAll(async () => {
    const browser = 'chrome';
    const releaseVersion = 'v0.9.1';
    const browserVersion = '99.0.4844.51';
    const containerPath = `registry.gitlab.com/vqa4gui/mvp/askui/browser/${browser}:${releaseVersion}-${browserVersion}-amd64`;
    
    container = await new GenericContainer(containerPath)
      .withEnv('ENABLE_VNC', 'true')
      .withEnv('SCREEN_RESOLUTION', '1920x1080')
      .withExposedPorts(6769, 5900)
      .start();

    console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);
    aui = new AskuiClient({
      askuiUiControllerUrl: `http://${container.getHost()}:${container.getMappedPort(6769)}`,
    });
    await aui.connect();;
  });

  it('Should click on text', async () => {    
    await aui.click().text().exec()
  });

  afterAll(async function clean() {
    /**
    * Closes the connection to the askui UI Controller
    */
    aui.close();

    /**
    * Stops the container
    */
    await container.stop();
  });
});
```

## Connect via VNC

To check what is happening inside a running test container, you can connect via VNC. For this, you need a VNC client like [Remmina](https://remmina.org/). When running the example code from the previous chapter, the container's VNC port will be logged to the console. Use this port to connect. When connecting, enter the password `askui` when asked.

Example of a VNC connection with a Chrome browser running inside a container:

![VNC Example](./vnc-example.png)
