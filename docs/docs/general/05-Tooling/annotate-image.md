# Annotate Image

The askui client offers an annotation tool which helps with the test creation and debugging of failed tests.

## How It Works

The annotation command annotates an image with our AI model producing a single report as an HTML file. This file can easily be shared.

This command takes as optional input:

- `imagePath`:
  - If this argument is defined, the image at the path is loaded and annotated
  - If this argument is not defined, a screenshot of your specified screen is taken and annotated
- `outputPath`: This is the output folder path in which the HTML reports are going to be saved. If it's not defined then a folder called `report` will be created.
- `customElements`: A list of custom elements. The AI model will use them to detect elements similar to them.

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
* Takes a screenshot of your selected display and produces an HTML report file inside the default output path <project_root>/report.
*/
await newClient.annotate();

/**
* Loads the image from <image_path> and produces an HTML report file inside the default output path <output_path>
*/
await newClient.annotate(
    {
    imagePath: '<image_path>',
    outputPath: '<output_path>'
    });

/**
* Loads the image from <image_path> and the custom elements and produces an HTML report file inside the default output path <output_path>
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
