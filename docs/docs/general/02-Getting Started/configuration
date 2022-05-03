custom_edit_url: null
sidebar_position: 3
---

# Configuration

## Display

The file `specs/helpers/askui-helper.ts` helps to initialize the enviroment of all test suites.
As mentioned in the subchapter Quickstart you can choose on which display you want to excecute all
tests. You can only perform all tests on one display.
The apllication which you want to test should be open and selected on your chosen display.

The default value for display is `0` which is your main monitor. If you want to use your
second monitor you can change the value to `1` (`2` for yout third monitor etc.).


Display default Value is 0 and can be changed:

```typescript

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