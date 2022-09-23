---
sidebar_position: 3
---

# Writing Your First Test

## Quickstart

To create your first test suite, enter

```shell
npx askui init
```

This is going to create

- a `tsconfig.json`: [a json file specifying the root files and the compiler options required to compile the project](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
- a folder called `test` which includes:
  - `test/my-first-askui-test-suite.test.ts`: an example test with askui,
  - a folder `helper` which contains `jest.setup.ts` file: this file is setting up the test environment for all tests
  - a `jest.config.ts`: file for configuration of Jest,
  
To execute the test suite, enter

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.

## Manual

At the beginning we create a new folder with the name `test`. For the next step we create the `my-first-askui-test-suite.test.ts` file in our `test` folder. It is also possible to create test files in other folders and with other names.

Copy the following over into that file:

```typescript
import { UiControlClient, UiController } from 'askui';

describe('jest with askui', () => {
  
  // Server for controlling the operating system
  let uiController: UiController;
  
  // Client is necessary to use the askui API
  let aui: UiControlClient;
  
  jest.setTimeout(60 * 1000 * 60);
  
  beforeAll(async () => {
    uiController = new UiController({
      /**
       * Select the display you want to run your tests on, display 0 is your main display;
       * ignore if you have only one display
       */
      display: 0,
    });
    
    await uiController.start();

    aui = await UiControlClient.build();
    
    await aui.connect();
  });

  it('should click on text', async () => {
    await aui 
      .click()
      .text()
      .exec();
  });

  afterAll(async () => {
     aui.close();
     await uiController.stop();
  });
});
```

You also need to create a configuration file for Jest. Therefore you can create a file with the name `jest.config.ts`
in the `test` folder of your project and copy the following content in this file

```typescript

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math'
  ]
};

```

You should also add a configuration file for Typescript in your project root folder.
Create a file with the name `tsconfig.json` and fill in this code:

```json
{
    "compilerOptions": {
      "module": "CommonJS",
      "esModuleInterop": true,
      "moduleResolution": "node"
    }
  }

```

Now, just execute the following command in order to run the test suite:

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

You can also use `npx jest` to test all your Jest test files and `npx jest <folder name>/` to test all files in a certain folder.
If your jest config file e.g. `jest.config.ts` is not in your root folder you can use `--config` to specify the location of your config file. In this example the config file is in the `test` folder, that's why we need to provide the location our config file.

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.
