---
displayed_sidebar: apiSidebar
---
# nearestTo
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element nearest to another element.

**Examples:**
```typescript 
--------------
|  button 1  |
--------------
--------------
|   text     |
--------------
              
              
              
--------------
|  button 2  |
--------------

// Returns button 1 because button 1 is nearer to the text than button 2
...button().nearestTo().text()
```
![](/img/gif/nearestTo.gif)

