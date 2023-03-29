---
displayed_sidebar: apiSidebar
---
# and
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Logic and operator

**Examples:**
```text 
example scene: 
 ---------------   ----------------
 |  icon user  |   |  icon search |
 ---------------   ----------------
```
```typescript 
const icons = await aui.get().icon().exec();
console.log(icons);
```
Using only the element-description icon, the get will return both icons 
```text 
console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 1000,
        ymin: 1010,
        xmax: 1020,
        ymax: 1030
     }
  },
  DetectedElement {
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```
You can combine element-descriptions with **the `and()` relation** and specify exactly which icon you want.
```typescript 
const icons = await aui.get().icon().and().withText('user').exec()
console.log(icons)
```
The get returns only the user icon although both elements are icons.
```text 
 console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```

