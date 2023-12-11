---
sidebar_position: 1
title: Annotations, Screenshots and Videos
---

**Index**

[Interactive Annotation](#interactive-annotation)

[Static Annotation](#static-annotation)

[Taking Screenshots](#taking-screenshots)

[Recording Videos](#recording-videos)


## Interactive Annotation

:::info
**Windows Users**

Please use `annotate()` as explained [in the section below](#static-annotation). The interactive annotation `aui.annotateInteractively()` currently leads to an error on Windows.
:::

An interactive annotation is in essence three components:

1. A screenshot of whatever the AskUI controller is told to see, as defined in the config file:

![Screenshot of Visual Studio Code without annotations.](images/interactive_annotation1.png)

2. Annotations, marked by the red boxes you see, which are added by the machine learning model.

![Screenshot of Visual Studio Code with annotations as red bounding boxes.](images/interactive_annotation2.png)

3. Element-Descriptions, which are labels applied to the annotations of the screenshot.

Clicking an element will copy this element-description, which we can then use in the [step 3 of Write Your First Instruction](../02-Getting%20Started/write-your-first-instruction.md), which is actually using that run instructions.

![Interactive Annotation in action](/img/gif/interactive-annotate.gif)

## Static Annotation

The helper function `annotate()` creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image.

<details>
<summary>Synopsis and Arguments</summary>

**Synopsis**
```ts
UiControlClient.annotate();

// or

UiControlClient.annotate({
    imagePath: '<your-image-path>',
    outputPath: '<path-of-the-generated-html>',
    fileNamePrefix: '<prefix-of-the-output-file>',
    customElements: CustomElementJson[] // more details in the example below
});
```

**Arguments**
- If no argument is given, 
    - A screenshot of your specified screen will be taken, and annotated. Thereafter, it will be saved as an interactive HTML file into the `report/` folder.

- `imagePath`:
  - If defined, the image at the path is loaded and annotated.
  - If not defined, a screenshot of your specified screen is taken and annotated.

- `outputPath`:
    - If defined, the generated HTML report will be saved in this path.
    - If not defined, a folder `report/` will be created in the project root.

- `fileNamePrefix`: The prefix for the resulting HTML report. 

- `customElements`: A *list* of custom elements. The AI model will use them to detect elements similar to them.

- `elements`: A *list* of detected elements obtained with `get()`. Only the bounding boxes for those elements will be rendered.

</details>


**Example**

```ts
/*
Takes a screenshot of your selected display,
and produces an HTML report file inside the
default output path <project_root>/report.
*/
await aui.annotate();


/*
Loads the image 'my-screenshot.png'
and produces an HTML report file inside
the output path 'annotation-reports/'
*/
await aui.annotate(
    {
        imagePath: 'my-screenshot.png',
        outputPath: 'annotation-reports/'
    });


/*
Loads the image 'my-screenshot.png' together with
the custom elements and produces an HTML report file
inside the output path 'annotation-reports/'
*/
await aui.annotate(
    {
    imagePath: 'my-screenshot.png',
    outputPath: 'annotaion-reports/',
    customElements: [
        {
            customImage: '<custom_image_path|base64Image>',
            imageCompareFormat: 'grayscale',
            name: 'custom element 1'
        },
        {
            /*
            for this custom element the OCR AI model
            will be used to extract text from the image,
            since no name was given.
            */
            customImage: '<custom_image2_path|base64Image>',
            imageCompareFormat: 'RGB',
        }
    ]
    });

/*
Annotates only the text elements with the text 'User Interfaces?'
*/
const detectedElements = await aui.get().text().withText("User Interfaces?").exec();
await aui.annotate(
    { 
        elements: detectedElements
    });
```

## Taking Screenshots
If you want to see what AskUI sees at a specific point in the execution you can use TypeScript to create a screenshot. Here is a code-snippet you can copy and paste into your code that saves an image with the name **screenshot.png** to the root-folder of your project.

:::info
Do not forget the import mentioned at the start of the snippet!
:::

```typescript
// Add this to the start of your AskUI-file containing your workflows/instructions
import * as fs from 'fs';

// First, get all the information from the annotation
// This will also save an interactive HTML file to the 'report/' folder
const annotation = await aui.annotate();

// The screenshot is contained as a string in 'base64' format
// Create a buffer with the base64 image
let buf = Buffer.from(annotation.image.split('base64,')[1], 'base64');

// Write the file 
fs.writeFileSync("./test.png", buf);
```

## Recording Videos

:::caution

This page is currently under construction. If you have any questions, please feel free to reach out to info@askui.com or book a meeting with Jonas [over Calendly](https://calendly.com/jonas-menesklou/digital-get-to-know).

:::