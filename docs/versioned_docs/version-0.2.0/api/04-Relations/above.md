---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# above

Filters for an element above another element.

**Examples:**
```typescript 
--------------
|    text    |
--------------
--------------
|   button   |
--------------

// Returns text because text is above button
...text().above().button()
// Returns no element because button is below text
...button().above().text()
```

