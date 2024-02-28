---
displayed_sidebar: apiSidebar
---
# annotate
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>


Creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image.

The annotated image is saved to `<project_root>/report`.

See also [the detailed explanation](../../general/03-Element%20Selection/annotations-and-screenshots.md#static-annotation).

**Examples:**
```typescript 
// The annoted image is saved to `<project_root>/report`.
await aui.annotate();

// or

UiControlClient.annotate({
    imagePath: '<your-image-path>',
    outputPath: '<path-of-the-generated-html>',
    fileNamePrefix: '<prefix-of-the-output-file>',
    customElements: CustomElementJson[], // A list of custom elements. The AI model will use them to detect elements similar to them.
    elements: DetectedElement[] // A list of detected elements obtained with get()
});
```

## Annotate `DetectedElements` from `get()`
The method also accepts an optional parameter of type `AnnotationRequest`. You can use this to annotate only the elements that where returned with a `get()`.

**Example:**
```typescript
const detectedElements = await aui.get().text().withText("User Interfaces?").exec();
await aui.annotate({ elements: detectedElements });
```

Resulting annotation from a screen displaying the website [askui.com](https://www.askui.com/) where only the text `User Interfaces?` has a bounding box:

![Screenshot of askui.com website with a bounding box around the detected element User Interfaces?](annotate_with_detected_elements.png)
