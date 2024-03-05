---
displayed_sidebar: apiSidebar
---
# moveMouseRelatively
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Moves the mouse from the current position (relative) in x and y direction.

:::caution

**macOS only**: Due to the higher pixel density of the **retina display**, the input coordinates must be **doubled** in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200.

:::

**Example:**
```typescript
await aui.moveMouseRelatively(0, 50).exec();
```

![](/img/gif/moveMouseRelatively.gif)

   * @param {"number"} x_offset - A (positive/negative) x direction.
   * @param {"number"} y_offset - A (positive/negative) y direction.
