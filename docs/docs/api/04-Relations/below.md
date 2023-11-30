---
displayed_sidebar: apiSidebar
---
# below
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element below another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------
|    text    |
--------------
--------------
|   button0  |
--------------
--------------
|   button1  |
--------------

// Returns button0 because button0 is the first button below text
...button().below().text()
...button().below(0).text()
// Returns button1 because button1  is the second button below text
...button().below(1).text()
// Returns no element because text is above button
...text().below().button()
```
![](/img/gif/below.gif)

   * @param \{number} [optionalIndex=0] - element index
