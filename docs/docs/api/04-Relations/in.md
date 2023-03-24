---
displayed_sidebar: apiSidebar
---
# in
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element inside another element.

**Examples:** 
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns innerEl because innerEl is inside outerEl
...innerEl().in().outerEl()
// Returns nothing because innerEl is not inside outerEl
...outerEl().in().innerEl()
```
![](/img/gif/in.gif)

