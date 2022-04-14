
# Annotate Interactively

Similar to [annotate image](annotate-image.md), the askui client offers an interactive annotation tool which helps with the test creation and debugging of failed tests.

## How It Works

The interactive annotation command requests the askui server to take a screenshot of the specified screen. Then, an AI model is used to annotate the image. After that, a full-screen window appears. Inside this window, boundary boxes enclosing the UI elements detected are going to appear. You can hover over the boxes to see the boxes' specifications, e.g., text detected, element type etc.

![Interactive Annotation](./interactive-annotate.gif)

## How to Use

```typescript
import * as askui from "@vqa4gui/askui";

await askui.startAskuiServer({
      port: 6769,
      minimize: true
    });

const newClient = new askui.Client();

await newClient.start();

/**
 * Starts the interactive annotation. A window appears shortly afterwards showing the result 
 * of the annotation. Press "Esc" to close this window again.
 */
await newClient.annotateInteractively();

/**
 * Stops the controlui-server and closes the connection to the controlui-server.
 */
newClient.stop();
```
