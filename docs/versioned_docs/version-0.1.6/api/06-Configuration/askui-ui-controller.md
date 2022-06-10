---
custom_edit_url: null
---

# askui UI Controller

## Table of Contents

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

• **binaryVersion**: `string` - Default: `latest`

There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.
You can specify which binary version of server you want to download and use. The default value is `latest` which will
download the newest version.

<table>
  <tr>
    <td></td>
    <th scope="col">v0.8.0</th>
    <th scope="col">v0.9.0</th>
    <th scope="col">v0.9.1</th>
    <th scope="col">v0.10.0</th>
  </tr>
  <tr>
    <th scope="row">linux x64</th>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
   <tr>
    <th scope="row">darwin arm64</th>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
   <tr>
    <th scope="row">darwin x64</th>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
   <tr>
    <th scope="row">win32 x64</th>
    <td>&#10005;</td>
    <td>&#10003;</td>
    <td>&#10005;</td>
    <td>&#10003;</td>
  </tr>
   <tr>
    <th scope="row">win32 ia32</th>
    <td>&#10005;</td>
    <td>&#10005;</td>
    <td>&#10005;</td>
    <td>&#10003;</td>
  </tr>
   <tr>
    <td colspan="3" class="cap foot">
        Availability of binary version for diffrent operating systems
    </td>
  </tr>
</table>


___

### display

• **display**: `number` - Default: `0`


You can choose on which display you want to excecute all
tests. You can only perform all tests on one display.
The application which you want to test should be open and selected on your chosen display.

The default value of display is `0` which is your main monitor. If you want to use your
second monitor you can change the value to `1` (`2` for your third monitor etc.).

If you start the askui Ui Controller you will see a small GUI where you can also select the monitor and identify the order
of your monitors.
___

### host

• **host**: `string` - Default: `127.0.0.1`


The host the askui UI Controller is running on. This websocket server can be connected with the runner protocol.

### logFilePath

• **logFilePath**: `string` - Default: `stdout`

It is possible to specify a path for your log files. Log files are written to the console per default.
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

The port the askui UI Controller is running on.  The connection to this port is enabled with our runner protocol. The client can also connect to this port with the runner protocol.

## Example

```typescript
import { AskuiClient, AskuiControlServer, LogLevels } from 'askui';

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
