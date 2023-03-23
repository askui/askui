---
displayed_sidebar: apiSidebar
---
# below

 <span class="theme-doc-version-badge badge badge--success">production</span> 
Filters for an element below another element.

**Examples:**
```typescript 
--------------
|    text    |
--------------
--------------
|   button   |
--------------

// Returns button because button is below text
...button().below().text()
// Returns no element because text is above button
...text().below().button()
```
![](/img/gif/below.gif)

