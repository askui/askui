---
displayed_sidebar: apiSidebar
---
# rightOf

 <span class="theme-doc-version-badge badge badge--success">production</span> 
Filters for an element right of another element.

**Examples:**
```typescript 
--------------  --------------
|  leftEl    |  |  rightEl   |
--------------  --------------

// Returns rightEl because rightEl is right of leftEl
...rightEl().rightOf().leftEl()
// Returns no element because leftEl is left of rightEl
...leftEl().rightOf().rightEl()
```
![](/img/gif/rightOf.gif)

