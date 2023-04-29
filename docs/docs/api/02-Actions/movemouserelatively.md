---
displayed_sidebar: apiSidebar
---
# moveMouseRelatively
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Moves the mouse from the current position (relative) in x and y direction.

**Example:**
```typescript
await aui.moveMouseRelatively(0, 50).exec();
```

![](/img/gif/moveMouseRelatively.gif)

   * @param {number} x_offset - A (positive/negative) x direction.
   * @param {number} y_offset - A (positive/negative) y direction.
