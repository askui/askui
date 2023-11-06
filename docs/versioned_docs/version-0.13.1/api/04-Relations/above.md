---
displayed_sidebar: apiSidebar
---
# above
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element above another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------
|   text1    |
--------------
--------------
|   text0    |
--------------
--------------
|   button   |
--------------

// Returns text0 because text0 is the first element above button
...text().above().button()
...text().above(0).button()
// Returns text1 because text1 is the second element above button
...text().above(1).button()
// Returns no element because button is below text
...button().above().text()
```
![](/img/gif/above.gif)

   * @param {number} [optionalIndex=0] - element index
