---
custom_edit_url: null
---

# askui UI Controller Client

## Table of Contents

### Properties

 [askui UI Controller Client](#askui-ui-controller-client)
  - [Table of Contents](#table-of-contents)
    - [Properties](#properties)
  - [Properties](#properties-1)
    - [askuiUiControllerServerUrl](#askuiUiControllerServerUrl)
    - [inferenceServerUrl](#inferenceServerUrl)
    - [annotationLevel](#annotationLevel)
    - [credentials](#credentials)
  - [Example](#example)  

## Properties

### askuiUiControllerServerUrl

• **askuiUiControllerServerUrl**: `string` - Default: `http://localhost:6769`

This provides the address where the askui UI Controller runs. The Client is also connecting
to this address.

___


### inferenceServerUrl

• **inferenceServerUrl**: `string` - Default: `https://inference.askui.com`

The address of the askui Inferrence server.
___


### annotationLevel

• **annotationLevel**: `AnnotationLevel` - Default: `AnnotationLevel.DISABLED`

AnnotationLevel is implemented as an enum. You have three options: `DISABLED`, `ON_FAILURE` , `ALL`

`ALL`:  We run the [annotate](../../general/05-Tooling/annotate-image.md) command after the execution of each test step.


`ON_FAILURE`: Runs the annotate command if the test step fails 


`DISABLED`: Never runs the annotate command after test steps

___



### credentials

• **credentials**: `string` - Default: `envCredentials`

We need to provide this credenetials for the http client. AS Default we use the credentials from the user environment.
___


## Example


```typescript
 aui = new AskuiClient({
    askuiUiControllerServerUrl: 'http://localhost:6769',
    inferenceServerUrl: 'https://inference.askui.com',
    annotationLevel: AnnotationLevel.DISABLED,
  });
```



