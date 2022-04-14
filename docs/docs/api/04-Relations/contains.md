---
displayed_sidebar: apiSidebar
custom_edit_url: null
---

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

