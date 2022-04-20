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
- a folder called `specs` which includes:
  - `specs/my-first-askui-test-suite.spec.ts`: an example test with askui,
  - `specs/support/jasmine.json`: configuration of Jasmine,
  - `specs/helpers/askui-helper.ts`: initializes the environment of all test suites, e.g, on which display the tests are executed (tests can only be run on one display meaning everything you want to test needs to be opened on that display, the default is `0` which is your main display).

To execute the test suite, enter

```shell
npx jasmine --config=specs/support/jasmine.json
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.

## Manual
Create a spec file inside the `spec_dir` you specified inside your `jasmine.json` and make sure it matches up with the pattern you specified under `spec_files`, e.g., `specs/my-first-askui-test-suite.spec.ts`.

Copy the following over into that file:

```typescript
import { AskuiClient, AskuiControlServer } from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;


describe('jasmine demo with askui', () => {
  let askuiServer : AskuiControlServer;
  let aui : AskuiClient;

  beforeAll(async function init() {
    askuiServer = new AskuiControlServer({
      /**
       * Select the display you want to run your tests on, display 0 is your main display;
       * ignore if you have only one display
       */
      display: 0,
    });
    /**
    * Starts the askui controlui-server
    */
    await askuiServer.start();

    aui = new AskuiClient();
    /**
     * Starts the connection to the askui controlui-server
     */
    await aui.connect();
  });


  it('Should click on text', async () => {
    await aui
      .click()
      .text()
      .exec();
  });

  afterAll(async function clean() {
    /**
    * Closes the connection to the askui controlui-server
    */
    aui.close();

    /**
    * Stops the askui controlui-server
    */
    await askuiServer.stop();
  });
});

```

Now, just execute the following command in order to run the test suite:

```shell
npx jasmine --config=jasmine.json
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.
