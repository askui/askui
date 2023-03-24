---
displayed_sidebar: apiSidebar
---
# annotate
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>


Creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image.

The annotated image is saved to `<project_root>/report`.

See also [the detailed explanation](../../general/05-Tooling/annotation.md#static-annotation).

**Examples:**
```typescript 
// The annoted image is saved to `<project_root>/report`.
await aui.annotate();

// or

UiControlClient.annotate({
    imagePath: '<your-image-path>',
    outputPath: '<path-of-the-generated-html>',
    fileNamePrefix: '<prefix-of-the-output-file>',
    customElements: CustomElementJson[] // A list of custom elements. The AI model will use them to detect elements similar to them.
});
```

