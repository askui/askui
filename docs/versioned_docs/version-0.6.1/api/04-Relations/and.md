---
displayed_sidebar: apiSidebar
---
# and

Logic and operator

**Examples:**
```text 
example scene: 
 --------------------------   --------------------------
 |  icon user colored black | |  icon  user colored red |
 --------------------------   --------------------------
```
```typescript 
const icons = await aui.get().icon().withText('user').exec();
console.log(icons);
```
Using only the filter withText, the get command will return both icons because they share the same text 
```text 
console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     colors: [ 'black', 'black', 'black' ],
     bndbox: BoundingBox {
        xmin: 1000,
        ymin: 1010,
        xmax: 1020,
        ymax: 1030
     }
  },
  DetectedElement {
     name: 'ICON',
     text: 'user',
     colors: [ 'red', 'red', 'red' ],
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```
You can combine filters with **the `and()` relation** and specify exactly which icon you want
```typescript 
const icons = await aui.get().icon().withText('user').and().colored('red').exec()
console.log(icons)
```
The get command returns only the red icon although both icons have the same text
```text 
 console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     colors: [ 'red', 'red', 'red' ],
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```

