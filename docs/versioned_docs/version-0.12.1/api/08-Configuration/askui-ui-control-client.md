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

### inferenceServerUrl

- **inferenceServerUrl**: `string` - Default: `https://inference.askui.com`

The address of the askui Inference server.
___

### resize

- **resize**: `number?` - Default: `undefined`
  The side length of the target image to resize to in px. Your screenshot image will be resized with the original aspect ratio, and the lengths image side will be equal to this number. This can be used to reduce the inference time by reducing the request size in case of a bad internet connection. But it can cause a decrease in the prediction quality.
  The resizing will be skipped if it's undefined.

___

### credentials

- **credentials**: `Credentials` Your user credentials - Optional.
  - **workspaceId**: `string` Your workspace id
  - **token**: `string` An access token for authentication with the askui Inference Server

Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the `workspace id` via setting the `ASKUI_WORKSPACE_ID` environment variable, you need to set token with environment variables as well.

Setting credentials in code:

```typescript
 let aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    }
  });
```

Setting credentials using environment variables (Powershell):

```powershell
$env:ASKUI_WORKSPACE_ID = <your workspace id>
$env:ASKUI_TOKEN = <your access token>
```

Setting credentials using environment variables (Bash or similar):

```bash
export ASKUI_WORKSPACE_ID=<your workspace id>
export ASKUI_TOKEN=<your access token>
```

___
