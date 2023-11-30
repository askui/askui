---
sidebar_position: 2
title: Docker
---


# Docker

## AskUI UI Controller Docker Images

We maintain Docker images for running instructions with AskUI inside a Docker Container, e.g., locally or in a CI/CD pipeline. The images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the *UiController*) and a browser. The AskUI SDK connects to the UI Controller inside the Docker container to execute workflows inside it.

You can find our images on [DockerHub](https://hub.docker.com/r/askuigmbh/askui-ui-controller).

:::caution
If you are on an ARM architecture such as Apple Silicon, you can _NOT_ run the images at the moment!
:::

### Configuration

The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:

| Variable | Default Value | Description |
|---|---|---|
| SE_SCREEN_WIDTH | 1360 | Sets the screen width |
| SE_SCREEN_HEIGHT | 1020 | Sets the screen height |
| SE_SCREEN_DEPTH | 24| |
| GOOGLE_CHROME_ARGS | empty | |
| ASKUI_CONTROLLER_ARGS | empty ||
| VERBOSE | empty | |

### Usage

### Starting Container *Manually*
You can pull an image using `docker pull`, e.g.,

```shell
docker pull askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64
```

and, then, start the corresponding container using:

```shell
docker run -p 6769:6769 -p 7900:7900 askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64
```

Ports:

* AskUI UI Controller: `6769`
* No_VNC: `7900`

> Password for No_VNC is `secret`.

### Starting Container from Within `beforeAll()` Using Testcontainers

[Testcontainers](https://github.com/testcontainers/testcontainers-node) is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards.

To use it, first install it:

```shell
npm i -D testcontainers
```

After that, you can adjust the `askui-helper.ts` that is created when running `npx askui init` like in the following example starting the AskUI container just before all instructions are run and connecting to it:

```typescript
import { UiControlClient } from 'askui';
import { GenericContainer, StartedTestContainer } from 'testcontainers';

jest.setTimeout(60 * 1000 * 60);

function getDockerImageName(): string {
  const askuiUiControllerVersion = 'v0.11.2';
  const browser = 'chrome';
  const browserVersion = '119.0';
  const osArch = 'amd64';
  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;
}

async function startTestContainer(): Promise<StartedTestContainer> {
  const container = await new GenericContainer(getDockerImageName())
    .withEnv('SE_SCREEN_WIDTH', '1920')
    .withEnv('SE_SCREEN_HEIGHT', '1080')
    .withExposedPorts(6769, 7900)
    .start();

  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(7900)}`);

  return container;
}

let testContainer: StartedTestContainer;

// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

beforeAll(async () => {
  testContainer = await startTestContainer();

  aui = await UiControlClient.build({
    uiControllerUrl: `http://127.0.0.1:${testContainer.getMappedPort(6769)}`,
  });

  await aui.connect();
});

afterAll(async () => {
  aui.disconnect();

  await testContainer.stop();
});

export { aui };

```

## Tag Naming Schema
We use the following tag schema:

```
<controller-version>-<browser-name>-<browser-version>-amd64

# browser-name: chrome only for now

# Example
0.11.2-chrome-119.0.6045.123-amd64
```

> ❗️ `<controller-version>` is _NOT_ the AskUI version ❗️

## Connect via VNC

To check what is happening inside a running container, you can connect via VNC. For this, you need to open a browser and navigate to `http://localhost:7900`. When [using the testcontainers example code](#starting-container-from-within-beforeall-using-testcontainers), the VNC port to connect to is logged to the console.

When connecting, enter the password `secret` when asked.

Example of a VNC connection with a Chrome browser running inside a container:

![VNC Example](./images/vnc-example.png)
