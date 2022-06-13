---
custom_edit_url: null
---

# Annotate Interactively

Similar to [annotate image](annotate-image.md), the askui client offers an interactive annotation tool which helps with the test creation and debugging of failed tests.

## How It Works

The interactive annotation command requests the askui server to take a screenshot of the specified screen. Then, an AI model is used to annotate the image. After that, a full-screen window appears. Inside this window, boundary boxes enclosing the UI elements detected are going to appear. You can hover over the boxes to see the boxes' specifications, e.g., text detected, element type etc.

![Interactive Annotation](./interactive-annotate.gif)

## How to Use

```typescript
/**
 * Starts the interactive annotation. A window appears shortly afterwards showing the result 
 * of the annotation. Press "Esc" to close this window again.
 */
await aui.annotateInteractively();
```
