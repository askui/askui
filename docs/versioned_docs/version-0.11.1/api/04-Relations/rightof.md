---
displayed_sidebar: apiSidebar
---
# rightOf
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element right of another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------  --------------  --------------
|  leftEl    |  |  rightEl0  |  |  rightEl1  |
--------------  --------------  --------------

// Returns rightEl0 because rightEl0 is the first element right of leftEl
...rightEl().rightOf().leftEl()
...rightEl().rightOf(0).leftEl()
// Returns rightEl1 because rightEl1 is the second element right of leftEl
...rightEl().rightOf(1).leftEl()
// Returns no element because leftEl is left of rightEl
...leftEl().rightOf().rightEl()
```
![](/img/gif/rightOf.gif)

   * @param {number} [optionalIndex=0] - element index
