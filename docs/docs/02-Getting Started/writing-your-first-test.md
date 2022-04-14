---
custom_edit_url: null
sidebar_position: 3
---

# Writing Your First Test

## Quickstart

To create your first test suite, enter

```bash
npx askui init
```

This is going to create

- a `tsconfig.json`: [a json file specifying the root files and the compiler options required to compile the project](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
- a folder called `specs` which includes:
  - `specs/my-first-askui-test-suite.spec.ts`: an example test with askui,
  - `specs/support/jasmine.json`: configuration of Jasmine,
  - `specs/helpers/askui-helper.ts`: initializes the environment of all test suites, e.g, on which display the tests are executed (tests can only be run on one display meaning everything you want to test needs to be opened on that display, the default is `0` which is your main display).

To execute the test suite, enter

```bash
npx jasmine --config=specs/support/jasmine.json
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.

## Manual
Create a spec file inside the `spec_dir` you specified inside your `jasmine.json` and make sure it matches up with the pattern you specified under `spec_files`, e.g., `specs/my-first-askui-test-suite.spec.ts`.

Copy the following over into that file:

```typescript
import * as askui from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('Jasmine demo with askui', () => {
  let newClient: askui.Client;

  beforeAll(async () => {
    await askui.startAskuiServer({});

    newClient = new askui.Client({
      controlServerUrl: 'http://localhost:6769',
      controlYourUiApi: 'https://controlui-api-dev.askui.com',
      annotationLevel: 'onFailure',
    });
    await newClient.start();
  });

  it('Should click on text', async () => {
    const result = await newClient
      .click()
      .text()
      .exec();
    expect(result.state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await newClient
      .expect()
      .text()
      .withText('No such text exits')
      .exists()
      .exec();
    expect(result.state).toBe('FAILED');
  });

  afterAll(async () => {
    await newClient.stop();
  });
});

```

Now, just execute the following command in order to run the test suite:

```bash
npx jasmine --config=jasmine.json
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.
