---
custom_edit_url: null
---
# Configuration

## AskuiControlServer

### Display

The file `specs/helpers/askui-helper.ts` helps to initialize the enviroment of all test suites.
This sets up the AskuiControlserver.
As mentioned in the chapter [Writing Your First Test](../general/02-Getting%20Started/writing-your-first-test.md) you can choose on which display you want to excecute all
tests. You can only perform all tests on one display.
The application which you want to test should be open and selected on your chosen display.

The default value of display is `0` which is your main monitor. If you want to use your
second monitor you can change the value to `1` (`2` for your third monitor etc.).

### Coming Soon

- AskuiClient
- Other configuration