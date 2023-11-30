---
displayed_sidebar: apiSidebar
---
# leftOf
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element left of another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------  --------------  --------------
|  leftEl1   |  |  leftEl0   |  |  rightEl   |
--------------  --------------  --------------

// Returns leftEl0 because leftEl0 is the first element left of rightEl
...leftEl().leftOf().rightEl()
...leftEl().leftOf(0).rightEl()
// Returns leftEl1 because leftEl1 is the second element left of rightEl
...leftEl().leftOf(1).rightEl()
// Returns no element because rightEl is left of leftEl
...rightEl().leftOf().leftEl()
```
![](/img/gif/leftOf.gif)

   * @param \{number} [optionalIndex=0] - element index
