---
custom_edit_url: null
---

# Askui-UI-Controller-Server


Before running your tests you have start the Askui-UI-Controll-Server.
There are multiple arguments which can be modified und provided to configure the Ask-UI-Contoller-Server. 
In our implementation we use an interface which define all properties which can be provided to the Ask-UI-Contoller-Server.
In the following we present you a short explanation for all properties.
We also have an example to setup an controll server with specific values at the end of this page.

## Table of contents

### Properties

- [binaryVersion](#binaryversion)
- [display](#display)
- [host](#host)
- [logFilePath](#logfilepath)
- [logLevel](#loglevel)
- [minimize](#minimize)
- [overWriteBinary](#overwritebinary)
- [port](#port)

## Properties

### binaryVersion

• **binaryVersion**: `string`

There are different versions of The Askui-UI-Controller-Server.
You can specify which binary version of server you want to download and use. The default value is 'latest' which will
download the newest version.
___

### display

• **display**: `number`


You can choose on which display you want to excecute all
tests. You can only perform all tests on one display.
The application which you want to test should be open and selected on your chosen display.

The default value of display is `0` which is your main monitor. If you want to use your
second monitor you can change the value to `1` (`2` for your third monitor etc.).
___

### host

• **host**: `string`


The Host of the websocket server to connect via the runner-protocol. The default server is 127.0.0.1.
___

### logFilePath

• **logFilePath**: `string`

It is possible to specify a path for your log files. Log files are written to the console per default.
___

### logLevel

• **logLevel**: `LogLevels`

You can use different ways of Log Level. We provide this options: `"fatal"`, `"error"`, `"warn"`, `"info"`, `"debug"`, `"trace"`, `"silent"`, `"verbose"`. `"debug"` is the default value for loglevel.
All loglevel are defined in an `LogLevels` enum.
___

### minimize

• **minimize**: `boolean`

The default value of this property is `true`. This means that
Askui-UI-Controller will be started as minimized window. 
___

### overWriteBinary

• **overWriteBinary**: `boolean`


Download the provided Version of Askui-UI-Controll-Server. If a version is already downloaded. This version will be overwritten. The default value is false.
___

### port

• **port**: `number`

Port of the websocket port server to connect via the runner-protocol. The default port is 6769.

## Example

```typescript
import { AskuiClient, AskuiControlServer } from 'askui';
import { LogLevels } from '@vqa4gui/askui-dev/dist/cjs/shared/log-levels';

describe('jest with askui', () => {
  
  // Server for controlling the operating system
  let askuiControlServer: AskuiControlServer;
  
  
  beforeAll(async () => {
    askuiControlServer = new AskuiControlServer({
      
    // choosing the second montor 
    display: 1,

    // download the latest version of the server
    binaryVersion: 'latest',

    // start ask ui controller as minimized application
    minimize: true,

    // using error loglevel
    logLevel: LogLevels.ERROR,


    });
  })
})
```

In this example you can see how we define four possible arguments.
You don't need to define a parameter if you want to use the default value.
