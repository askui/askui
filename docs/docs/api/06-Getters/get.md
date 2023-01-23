---
displayed_sidebar: apiSidebar
---
# get

Returns an array with all filtered elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const text = await aui.get().text().withText('Sign').exec();
console.log(text);
```
```text 
 console output: [
  DetectedElement {
     name: 'TEXT',
     text: 'Sign In',
     bndbox: BoundingBox {
        xmin: 1128.2720982142857,
        ymin: 160.21332310267857,
        xmax: 1178.8204241071428,
        ymax: 180.83512834821428
     }
 }
 ]
```

