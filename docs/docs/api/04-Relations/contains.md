---
displayed_sidebar: apiSidebar
---
# contains
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element containing another element.

**Example:**
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns outerEl because outerEl contains innerEl
...outerEl().contains().innerEl()
//  Returns no element because innerEl contains no outerEl
...innerEl().contains().outerEl()
```
![](/img/gif/contains.gif)

