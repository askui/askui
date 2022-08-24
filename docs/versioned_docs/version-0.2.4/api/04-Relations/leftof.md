---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# leftOf

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

