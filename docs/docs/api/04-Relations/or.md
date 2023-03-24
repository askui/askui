---
displayed_sidebar: apiSidebar
---
# or
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Logic or operator

**Examples:**
```text 
scene 1
--------------  ---------------
|  button    |  |  icon       |
--------------  ---------------

scene 2
--------------  ---------------
|  button    |  |  text       |
--------------  ---------------

```
In case, that your reference element can have multiple values, in the following example, the element right of the button can be either icon or text.
You can use **the `or()` relation**, so your instruction is valid for both scenes
```typescript 
const button = await aui.get().button().rightOf().icon().or().text().exec();
console.log(button);
```
Returns the same button for both cases
```text 
 console output: [
  DetectedElement {
     name: 'BUTTON',
     text: 'button',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```

