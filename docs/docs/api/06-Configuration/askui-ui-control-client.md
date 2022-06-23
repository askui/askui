---
custom_edit_url: null
---
# askui UI Control Client

## Table of Contents

  - [Properties](#properties)
    - [uiControllerUrl](#uiControllerUrl)
    - [inferenceClientUrl](#inferenceClientUrl)
    - [annotationLevel](#annotationLevel)
    - [credentials](#credentials)
  - [Set Log Level](#set-log-level)  
  - [Example](#example)  
## Properties

### uiControllerUrl

• **uiControllerUrl**: `string` - Default: `http://localhost:6769`

The url of the askui UI Controller controlling the OS.
___

### inferenceClientUrl

• **inferenceClientUrl**: `string` - Default: `https://inference.askui.com`

The address of the askui Inference server.
___

### annotationLevel

• **annotationLevel**: `AnnotationLevel` - Default: `AnnotationLevel.DISABLED`

AnnotationLevel is implemented as an enum. You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.

`ALL`:  Runs the [annotate](../../general/05-Tooling/annotate-image.md) command after the execution of each test step.


`ON_FAILURE`: Runs the annotate command if the test step fails 


`DISABLED`: Never runs the annotate command after test steps
___

### credentials

• **credentials**: {Credentials.<`tenant`: string, `email`: string, `token`: string>} - 

We need to provide credentials for the authentication of the askui Inferrence Server. If you want to set your own credentials you need to provide the following arguments `tenant`, `email`, `token`. We read the environment variables:

- `tenant`: 'ASKUI_TENANT'
- `email`:  'ASKUI_EMAIL'
- `token`:  'ASKUI_TOKEN'
___

## Set Log Level

Starting the askui library the askui UI Controller will write [logs](../06-Configuration/askui-ui-controller.md#loglevel) in a default/passed path. ([logfile path](../06-Configuration/askui-ui-controller.md#logfilepath)).
Only the askui Client can write logs to the stdout while using the askui library.
You can set all log levels(`"fatal"`, `"error"`, `"warn"`, `"info"`, `"debug"`, `"trace"`, `"silent"`, `"verbose"`) for the client.

On Linux and MacOS use this command:
```shell
export LOG_LEVEL=verbose
```

For Windows you need this command:
 ```shell
$env:LOG_LEVEL="verbose"
```
## Example

```typescript
 let aui = await UiControlClient.build({
    annotationLevel: AnnotationLevel.DISABLED,
    credentials: {
      tenant: 'user',
      email: 'user@mail.com',
      token: 'userToken',
    }
  });
```
