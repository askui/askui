---
sidebar_position: 2
title: Docker
---


# Docker

## AskUI Device Controller Docker Images

We maintain Docker Images for running instructions with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the *UiController*) and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the instructions inside it.
You can find our images on [DockerHub](https://hub.docker.com/r/askuigmbh/askui-ui-controller).

:::caution
If you are on an ARM architecture such as Apple Silicon, you have to install an [Emulator like Rosetta](https://support.apple.com/en-us/HT211861).
:::

### Configuration

The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:

| Variable | Default Value | Description |
|---|---|---|
| ENABLE_VNC | false | `true` to enable VNC so that you can connect and observe whats happening inside the container. The VNC server is bound to port `5900` of the container. |
| SCREEN_RESOLUTION | 1920x1080 | The screen resolution used inside the container in the format `<width>x<height>`. |

### Usage

The AskUI UI Controller is bound to port `6769` of the container so this needs to be exposed.

### Starting Container *Manually*
You can pull an image using `docker pull`, e.g.,

```shell
docker pull askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64
```

and, then, start the corresponding container using:

```shell
docker run -e ENABLE_VNC=true -p 6769:6769 -p 5900:5900 askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64
```

### Starting Container from Within `beforeAll()` Using Testcontainers

[Testcontainers](https://github.com/testcontainers/testcontainers-node) is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards.

To use it, first install it:

```shell
npm i -D testcontainers
```

After that, you can adjust the `jest.setup.ts` that is created when running `npx askui init` like in the following example starting the AskUI UI Controller container just before all instructions are run and connecting to it:

```typescript
import { UiControlClient } from 'askui';
import { GenericContainer, StartedTestContainer } from 'testcontainers';

jest.setTimeout(60 * 1000 * 60);

function getDockerImageName(): string {
  const askuiUiControllerVersion = 'v0.10.0';
  const browser = 'firefox';
  const browserVersion = '82.0.3';
  const osArch = 'amd64';
  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;
}

async function startTestContainer(): Promise<StartedTestContainer> {
  const container = await new GenericContainer(getDockerImageName())
    .withEnv('ENABLE_VNC', 'true')
    .withEnv('SCREEN_RESOLUTION', '1920x1080')
    .withExposedPorts(6769, 5900)
    .start();

  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);

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

## Connect via VNC

To check what is happening inside a running container, you can connect via VNC. For this, you need a VNC client like [Remmina](https://remmina.org/). When starting the [Docker Container manually](#starting-container-manually), you have to map the internal port `5900` to a free port on your machine that you, then, can connect to. When [using the testcontainers example code](#starting-container-from-within-beforeall-using-testcontainers), the VNC port to connect to is logged to the console.

When connecting, enter the password `askui` when asked.

Example of a VNC connection with a Chrome browser running inside a container:

![VNC Example](./images/vnc-example.png)




