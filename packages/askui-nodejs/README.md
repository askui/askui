# askui-nodejs-lib

The askui-nodejs-lib allows users to control the operating system with natural language commands as an fluent api. This brings UI automation on a newer level and humanize UI Testing at all.

## Installation

To download the package, you need to copy the .npmrc file and replace ${GITLAB_AUTH_TOKEN} with your token and then run  the command : 


### Precondition

Setup private npm repository:
1. Create auth token with `read_api` under [your gitlab profile](https://gitlab.com/-/profile/personal_access_tokens)
2. Set your auth token with: 
```bash
npm config set -- '//gitlab.com/api/v4/projects/34584527/packages/npm/:_authToken' "<your_token>"
```
3. Set
```bash
npm config set @vqa4gui:registry https://gitlab.example.com/api/v4/projects/34584527/packages/npm/
```

### Install

```bash
npm i @vqa4gui/askui
```

## Usage

### Example usage of the client with jasmine.

```typescript
import * as askui from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('Jasmine demo with askui', () => {
  let newClient: askui.Client;

  beforeAll(async () => {
    await askui.startAskuiServer({
      display: 0,
      minimize: true,
      binaryVersion: 'latest',
    });
    newClient = new askui.Client(
      'http://0.0.0.0:6769',
      'https://controlui-api-dev.askui.com',
    );
    await newClient.start();
  });

  it('Should click on button', async () => {
    const result = await newClient.exec(
      newClient.click().button().exec(),
    );
    expect(result.state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await newClient.exec('Not valid command');
    expect(result.state).toBe('FAILED');
  });
});
```
### Example usage of the client with jasmine with the help of the test containers
1- To get access to the chrome-runner docker image located in our Gitlab registry, you need first to execute this command:

<a href="https://docs.gitlab.com/ee/user/packages/container_registry/" target="_blank">How to use GitLab Container Registry</a>

```bash
docker login registry.gitlab.com -u <username> -p <token>
```
The chrome-runner is a docker image contains Askui-Server and chrome browser. It gives the user, the abiablity to excute the tests inside it.
 <a href="https://github.com/testcontainers/testcontainers-node" target="_blank">Testcontainers</a> was used to integrate the starting process in jasmine. This library will ensure that no port expose conflict will accrue, this means you can start as many chrome-runners simultaneity as the user needs. 


```typescript
import * as askui from '@vqa4gui/askui';

/************
 Testcontainers is a NodeJS library that supports tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container
************/
import { StartedTestContainer, GenericContainer } from 'testcontainers';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('jasmine demo with askui', () => {
  let newClient: askui.Client;

  beforeAll(async () => {
    const container: StartedTestContainer = await new GenericContainer('registry.gitlab.com/vqa4gui/mvp/control-your-ui/browser/chrome:v0.8.0-100.0.4896.60-amd64')
      .withEnv('WAIT_AFTER_EXECUTION', 'true')
      .withEnv('ENABLE_VNC', 'true')
      .withExposedPorts(6769, 5900)
      .start();
    console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}, Password: selenoid`);
    newClient = new askui.Client(
      `http://${container.getHost()}:${container.getMappedPort(6769)}`,
      'https://controlui-api.askui.com',
    );
    await newClient.start();
  });
  it('Click on Button', async () => {
    const result = await newClient.exec(newClient.click().button().exec());
    expect(result.state).toBe('PASSED');
  });
  it('Not valid command ', async () => {
    const result = await newClient.exec('Not valid command');
    expect(result.state).toBe('FAILED');
  });
});
```

# Development

The development section describes everthing related to setup the project for development. 


## Setup Dev Env

Project can be installed by: 
```bash
npm install
```
To exectute all tests use following command:
```bash
npm test
```


## Contributing

TODO

## License

TODO
