---
custom_edit_url: null
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
- a `jest.config.js`: file for configuration of Jest,
- a folder called `test` which includes:
  - `test/my-first-askui-test-suite.test.ts`: an example test with askui,
  - a folder `helper` which contain `askui-helper.ts` file: this helper file is setting up the test enviroment for all tests
  

To execute the test suite, enter

```shell
npx jest test/my-first-askui-test-suite.test.ts
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.

## Manual
You can create a test file in the test folder. It is also possible to create test files in other folders and with other names.You can specify your own structure with the command line `npx jest <path-to-your-test.ts-file>`. For our example we create the `my-first-askui-test-suite.test.ts` file
in our `test` folder.

Copy the following over into that file:

```typescript
import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

describe('jest with askui', () => {
  
  // Server for controlling the operating system
  let askuiControlServer: AskuiControlServer;
  
  // Client is necessary to use the askui API
  let askuiClient: AskuiClient;
  
  jest.setTimeout(60 * 1000 * 60);
  
  beforeEach(async () => {
    askuiControlServer = new AskuiControlServer({
      /**
       * Select the display you want to run your tests on, display 0 is your main display;
       * ignore if you have only one display
       */
      display: 0,
    });
    
    await askuiControlServer.start();

    askuiClient  = new AskuiClient();
    
    await askuiClient.connect();
  });

  it('should click on text', async () => {
    await askuiClient 
      .click()
      .text()
      .exec();
  });

  afterEach(async () => {
     askuiClient.close();
     await askuiControlServer.stop();
  });
});
```

Now, just execute the following command in order to run the test suite:

```shell
npx jest test/my-first-askui-test-suite.test.ts
```

You can use `npx jest` to test all your Jest test files and `npx jest <folder name>/` to test all files in a certain folder.
If your jest config file e.g. `jest.config.js` in this case ist not in your root folder you can use `--config` to specify the location of your config file.
For example:

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.json
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.
