---
displayed_sidebar: apiSidebar
---
# getAll

Returns an array with all detected elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const detectedElements = await aui.getAll().exec();
console.log(detectedElements);
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
     },
  DetectedElement {
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 250.8204241071428,
        ymin: 300.21332310267857,
        xmax: 450.6304241071428,
        ymax: 950.47812834821428
     },
     ... 381 more items
   }
 ]
```

