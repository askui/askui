---
displayed_sidebar: apiSidebar
---
# annotateInteractively
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

:::caution
There is a known bug that can cause a crash when calling `annotateInteractively()` on **Windows**.
Please use [annotate()](annotate.md) as a workaround.
:::

Creates an annotated version of your screen and shows it to you so you can explore the annotated image.
Recognized elements are annotated with a red bounding box.  You can copy the filter needed to select the element by left-clicking on the bounding box.

See also [the detailed explanation](../../general/03-Element%20Selection/annotations-and-screenshots.md#interactive-annotation) to see how you can use it to create instructions.

**Examples:**
```typescript 
await aui.annotateInteractively();
```

