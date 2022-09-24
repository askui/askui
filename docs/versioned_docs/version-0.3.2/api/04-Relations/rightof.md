---
displayed_sidebar: apiSidebar
---
# rightOf

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

