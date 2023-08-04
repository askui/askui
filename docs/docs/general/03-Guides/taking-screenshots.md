---
sidebar_position: 5
---

# Taking Screenshots
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
