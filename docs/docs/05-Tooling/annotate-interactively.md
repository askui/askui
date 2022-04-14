
# Annotate Interactively

Similar to [annotate image](annotate-image.md), the askui client offers an interactive annotate tool, which helps with the test creation and debugging failed tests.

## How it works

The interactive annotation command requests the askui server to take a screenshot of the specified screen, then an AI model will be used to annotate this image. Once the image is annotated, A full-screen window will appear. Inside this window, boundary boxes over the detected UI elements will appear. You can hover over the boxes to see the boxes' specifications e.g detected text, element type, etc...

![Interactive Annotation](./interactive-annotate.gif)

## How to use

```typescript
import * as askui from "@vqa4gui/askui";

await askui.startAskuiServer({
      port: 6769,
      minimize: true
    });

const newClient = new askui.Client();

await newClient.start();

/**
* Starts the interactive annotation window.
* Press "Esc" to close this window.
*/
await newClient.annotateInteractively();

/**
* Stops the controlui-server and closes the connection to the controlui-server
*/

newClient.stop();
```
