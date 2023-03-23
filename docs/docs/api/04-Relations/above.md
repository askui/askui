---
displayed_sidebar: apiSidebar
---
# above

 <span class="theme-doc-version-badge badge badge--success">production</span> 
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
![](/img/gif/above.gif)

