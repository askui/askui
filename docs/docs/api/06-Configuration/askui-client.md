---
custom_edit_url: null
---
# askui Client

## Table of Contents

  - [Properties](#properties)
    - [uiControllerUrl](#uiControllerUrl)
    - [inferenceClientUrl](#inferenceClientUrl)
    - [annotationLevel](#annotationLevel)
    - [credentials](#credentials)
  - [Example](#example)  
## Properties

### uiControllerUrl

• **uiControllerUrl**: `string` - Default: `http://localhost:6769`

This provides the url where the askui UI Controller runs. The Client is also connecting
to this address.

___

### inferenceClientUrl

• **inferenceClientUrl**: `string` - Default: `https://inference.askui.com`

The address of the askui Inference server.
___

### annotationLevel

• **annotationLevel**: `AnnotationLevel` - Default: `AnnotationLevel.DISABLED`

AnnotationLevel is implemented as an enum. You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.

`ALL`:  We run the [annotate](../../general/05-Tooling/annotate-image.md) command after the execution of each test step.


`ON_FAILURE`: Runs the annotate command if the test step fails 


`DISABLED`: Never runs the annotate command after test steps

___

### credentials

• **credentials**: `string` - Default: `environment-tenant`, `environment-token`, `environment-email`

We need to provide credentials for the authentication of the askui Inferrence Server. If you want to set your own credentials you need to provide the following arguments `tenant`, `token`, `email`. Per default we read the environment variables.
___

## Example

```typescript
 let aui = new AskuiClient({
    askuiUiControllerServerUrl: 'http://localhost:6769',
    inferenceServerUrl: 'https://inference.askui.com',
    annotationLevel: AnnotationLevel.DISABLED,
    credentials: {
      tenant: 'user',
      email: 'user@mail.com',
      token: 'userToken',
    }
  });
```
