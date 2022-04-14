# Annotate image

the askui client offers an annotation tool, which helps with the test creation and debugging failed tests.

## How it works

The annotation command annotates an image with our AI model. And it produces a single HTML report file, which contains the model results. This file can be easily shared.

This command takes as optional input:

- imagePath:
  - If this argument is defined, then the image will be loaded, annotated
  - If this argument is not defined, then a screenshot of your specified screen will be taken and annotated
- outputPath: This is the output folder path. In which the HTML reports will be saved. If it's not defined then a folder called report will be created.
- customElements: A list of custom eLements that when defined, the AI model will use them to detect similar elements to them.

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
* Takes a screenshot of your selected display and produces an HTML report file inside the default output path ~/report
*/
await newClient.annotate();

/**
* Loads the image from <image_path>  and produces an HTML report file inside the default output path  <output_path>
*/
await newClient.annotate(
    {
    imagePath: '<image_path>',
    outputPath: '<output_path>'
    });

/**
* Loads the image from <image_path>  and the customelemts and produces an HTML report file inside the default output path  <output_path>
*/
await newClient.annotate(
    {
    imagePath: '<image_path>',
    outputPath: '<output_path>',
    customElements: [
        {
        customImage: '<custom_image_path|base64Image>',
        imageCompareFormat: 'grayscale',
        name: 'custom element 1'
        },
        {
        // for this custom element the OCR AI model will be used to extract text from the image, since no name was givin  
        customImage: '<custom_image2_path|base64Image>',
        imageCompareFormat: 'RGB',
        }
    ]
    });

/**
* Stops the controlui-server and closes the connection to the controlui-server
*/
newClient.stop();
```
