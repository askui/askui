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

- **uiControllerUrl**: `string` - Default: `http://localhost:6769`

The url of the askui UI Controller controlling the OS.
___

### inferenceClientUrl

- **inferenceClientUrl**: `string` - Default: `https://inference.askui.com`

The address of the askui Inference server.
___

### annotationLevel

- **annotationLevel**: `AnnotationLevel` - Default: `AnnotationLevel.DISABLED`

AnnotationLevel is implemented as an enum. You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.

`ALL`:  Runs the [annotate](../../general/05-Tooling/annotate-image.md) command after the execution of each test step.

`ON_FAILURE`: Runs the annotate command if the test step fails 

`DISABLED`: Never runs the annotate command after test steps
___

### credentials

- **credentials**: `Credentials` Your user credentials - Optional.
  - **tenant**: `string` Your tenant
  - **email**: `string` Your e-mail address
  - **token**: `string` An access token for authentication with the askui Inference Server

Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables `ASKUI_TENANT`, `ASKUI_EMAIL` and `ASKUI_TOKEN` but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the tenant via setting the `ASKUI_TENANT` environment variable, you need to set email and token with environment variables as well.

Setting credentials in code:
```typescript
 let aui = await UiControlClient.build({
    credentials: {
      tenant: 'user',
      email: 'user@mail.com',
      token: 'userToken',
    }
  });
```

Setting credentials using environment variables (Powershell):
```powershell
$env:ASKUI_TENANT = <tenat>
$env:ASKUI_TOKEN = <token>
$env:ASKUI_EMAIL = <email>
```

Setting credentials using environment variables (Bash or similar):
```bash
export ASKUI_TENANT=<tenat>
export ASKUI_TOKEN=<token>
export ASKUI_EMAIL=<email>
```
___

## Set Log Level

Set the log level of the askui UI Control Client using the `LOG_LEVEL` environment variable. 
The following log levels are available:
- `"fatal"`, 
- `"error"`,
- `"warn"`,
- `"info"`,
- `"debug"`,
- `"trace"`,
- `"silent"` and 
- `"verbose"`.
The log level defaults to `info`.

On Linux and MacOS use this command:
```shell
export LOG_LEVEL=verbose
```

Windows
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
