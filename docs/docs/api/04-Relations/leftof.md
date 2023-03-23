---
displayed_sidebar: apiSidebar
---
# leftOf

 <span class="theme-doc-version-badge badge badge--success">production</span> 
Filters for an element left of another element.

**Examples:**
```typescript 
--------------  --------------
|  leftEl    |  |  rightEl   |
--------------  --------------

// Returns leftEl because leftEl is left of rightEl
...leftEl().leftOf().rightEl()
// Returns no element because rightEl is left of leftEl
...rightEl().leftOf().leftEl()
```
![](/img/gif/leftOf.gif)

