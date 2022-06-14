---
custom_edit_url: null
---

# askui UI Controller

## Table of Contents

### Properties

 [askui UI Controller](#askui-ui-controller)
  - [Table of Contents](#table-of-contents)
    - [Properties](#properties)
  - [Properties](#properties-1)
    - [binaryVersion](#binaryversion)
    - [display](#display)
    - [host](#host)
    - [logFilePath](#logfilepath)
    - [logLevel](#loglevel)
    - [minimize](#minimize)
    - [overWriteBinary](#overwritebinary)
    - [port](#port)
  - [Example](#example)

## Properties

### binaryVersion

• **binaryVersion**: `string` - Default: `latest`

There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.
You can specify which binary version of server you want to download and use. The default value is `latest` which will
download the newest version.

| | v0.8.0 | v0.9.0 | v0.9.1 | v0.10.0 |
| - | ------ | ------ | ------ | ------- |
| **linux x64** | ✓ | ✓ | ✓ | ✓ |
| **darwin arm64** | ✓ | ✓ | ✓ | ✓ |
| **darwin x64** | ✓ | ✓ | ✓ | ✓ |
| **win32 x64** | ✕ | ✓ | ✕ | ✓ |
| **win32 ia32** | ✕ | ✕ | ✕ | ✓ |
Availability of binary version by OS and CPU architecture.
___

### display

• **display**: `number` - Default: `0`


You can choose on which display you want to excecute all
tests. You can only perform all tests on one display.
The application which you want to test should be open and selected on your chosen display.

The default value of display is `0` which is your main monitor. If you want to use your
second monitor you can change the value to `1` (`2` for your third monitor etc.).

There is also a possibility to detect the value of your monitors.
After the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option `Show`.
You will see the same window as the following image.

![Select Monitor Option](./select-monitor.png)

 Now you can identify the order of your monitors and you can also select the monitor in this configuration.

___

### host

• **host**: `string` - Default: `127.0.0.1`


The host the askui UI Controller is running on.

### logFilePath

• **logFilePath**: `string` - Default: `stdout`

It is possible to specify a path for your log files. Logs are written to the stdout per default.
___

### logLevel

• **logLevel**: `LogLevels` - Default: `debug`

You can use different types of Log Level. We provide this options: `"fatal"`, `"error"`, `"warn"`, `"info"`, `"debug"`, `"trace"`, `"silent"`, `"verbose"`. All loglevel are defined in an `LogLevels` enum.
___

### minimize

• **minimize**: `boolean` - Default: `true`

The default value of this property is `true`. This means that
askui UI Controller will be started as minimized window. 
___

### overWriteBinary

• **overWriteBinary**: `boolean` - Default: `false`


Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten.
___

### port

• **port**: `number` - Default: `6769`

The port the askui UI Controller is running on.

## Example

```typescript
import { AskuiClient, AskuiControlServer, LogLevels } from 'askui';

describe('jest with askui', () => {
  
  // Server for controlling the operating system
  let askuiControlServer: AskuiControlServer;
  
  beforeAll(async () => {
    askuiControlServer = new AskuiControlServer({
    
    // choosing the second monitor 
    display: 1,

    // download the latest version of the server
    binaryVersion: 'latest',

    // start askui UI Controller as minimized application
    minimize: true,

    // using error loglevel
    logLevel: LogLevels.ERROR,

    });
  })
})
```