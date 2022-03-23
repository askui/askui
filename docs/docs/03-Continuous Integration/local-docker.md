---
custom_edit_url: null
sidebar_position: 2
---

# Local Docker

We maintain Docker Images for running askui tests locally and in CI piplines. The images contain the askui-Server and a specified browser with a specified browser version. The askui library can connect to the docker container and execute the defined test steps inside it.

## Authentication

Currently the images are not public so you need to authenticate to access them. The username and token will be provided by your contact person at askui. The token is the one you also use for downloading the library.

```shell
docker login registry.gitlab.com -u <username> -p <token>
```

## Available Images

The images can be downloaded from

`registry.gitlab.com/vqa4gui/mvp/control-your-ui/browser/<browser>:<release_version>-<browser_version>-<plattform>`

The following list shows the prebuild images we currently provide:

| browser | browser version | release version | platform|
|---|---|---|---|
| chrome | 99.0.4844.51 |   | amd64 |
| chrome | 97.0.4692.71 |   | amd64 |
| chrome | 90.0.4430.212 |   | amd64 |
| chrome | 80.0.3987.116 |   | amd64 |
| chrome | 75.0.3770.100 |   | amd64 |
| firefox | 97.0.1 |   | amd64 |
| firefox | 96.0.3 |   | amd64 |
| firefox | 82.0.3 |   | amd64 |

:::caution

We do not currently offer images for **ARM**.

:::

You can either use testcontainers to download an image as shown in the next chapter or download a container manually with the following command:

```shell
docker pull registry.gitlab.com/vqa4gui/mvp/control-your-ui/browser/<browser>:<releaseVersion>-<browserVersion>-amd64
```

## Configure a Container

When starting a container the following environment variables can be used to configure it:

| Env | type | default value | description |
|---|---|---|---|
| ENABLE_VNC | boolean | false | Start VNC so that you can connect and observe whats happening in the container. |
| SCREEN_RESOLUTION | string | 1920x1080x24 | Define the screen resolution of the testcontainer in the format *width* x *height* x *color depth* |
| WAIT_AFTER_EXECUTION | boolean | false | Keeps the container running after execution. |


## Start Container in Jasmin Test Suite

The following example shows how to use the containers locally in a jasmine test suite.

First install [testcontainers](https://github.com/testcontainers/testcontainers-node), a NodeJS library that supports tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.

```shell
npm i testcontainers
```

Then to run your tests inside one of the prebuild containers, use the following example of the `beforeAll` function:

```js
import * as askui from '@vqa4gui/askui';
import { StartedTestContainer, GenericContainer } from 'testcontainers';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('jasmine demo with askui', () => {
  let newClient: askui.Client;

  beforeAll(async () => {
    const browser = 'chrome';
    const releaseVersion = '<TODO>';
    const browserVersion = '97.0.4692.71';
    const containerPath = `registry.gitlab.com/vqa4gui/mvp/control-your-ui/browser/${browser}:${releaseVersion}-${browserVersion}-amd64`;

    const container: StartedTestContainer = await new GenericContainer(containerPath)
      .withEnv('WAIT_AFTER_EXECUTION', 'true')
      .withEnv('ENABLE_VNC', 'true')
      .withEnv('SCREEN_RESOLUTION', '1920x1080x24')
      .withExposedPorts(6769, 5900)
      .start();

    console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);
    newClient = new askui.Client({
      controlServerUrl: `http://${container.getHost()}:${container.getMappedPort(6769)}`,
    });
    await newClient.start();
  });
});
```

:::caution

Testcontainers maps the specified ports to some random available ports to prevent collision of ports. Therefore to connect via VNC you need to connect to the port logged to the console and not to port 5900.

:::