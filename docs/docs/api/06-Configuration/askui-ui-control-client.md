---
custom_edit_url: null
---
# askui UI Control Client

## Log Level

Set the log level of the askui UI Control Client using the `LOG_LEVEL` environment variable.
The following log levels are available:

- `"fatal"`
- `"error"`
- `"warn"`
- `"info"`
- `"debug"`
- `"trace"`
- `"silent"`
- `"verbose"`.

The log level defaults to `"info"`. and it can be changed with the following command:

Bash or similar:

```bash
export LOG_LEVEL=verbose
```

Powershell

 ```powershell
$env:LOG_LEVEL="verbose"
```

## Properties

### uiControllerUrl

- **uiControllerUrl**: `string` - Default: `http://127.0.0.1:6769`

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

#### Example

```typescript
 let aui = await UiControlClient.build({
    annotationLevel: AnnotationLevel.DISABLED
  });
```

___

### credentials

- **credentials**: `Credentials` Your user credentials - Optional.
  - **workspaceId**: `string` Your workspace id
  - **token**: `string` An access token for authentication with the askui Inference Server

Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the workspace Id via setting the `ASKUI_WORKSPACE_ID` environment variable, you need to set token with environment variables as well.

Setting credentials in code:

```typescript
 let aui = await UiControlClient.build({
    credentials: {
      workspaceId: 'workspace_id',
      token: 'userToken',
    }
  });
```

Setting credentials using environment variables (Powershell):

```powershell
$env:ASKUI_WORKSPACE_ID = <workspace_id>
$env:ASKUI_TOKEN = <token>
```

Setting credentials using environment variables (Bash or similar):

```bash
export ASKUI_WORKSPACE_ID=<workspace_id>
export ASKUI_TOKEN=<token>
```

___
