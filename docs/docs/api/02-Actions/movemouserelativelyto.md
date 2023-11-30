---
displayed_sidebar: apiSidebar
---
# moveMouseRelativelyTo
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Moves the mouse relatively to an element in the direction.
This can be used when the mouse should not hover over an element anymore.

:::caution

**macOS only**: Due to the higher pixel density of the **retina display**, the input coordinates must be **doubled** in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200.

:::

**Examples:**
```typescript 
// Move mouse 30 pixels below button
await aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()
```
![](/img/gif/moveMouseRelativelyTo.gif)

   * @param {"number"} x_offset - A (positive/negative) x direction.
   * @param {"number"} y_offset - A (positive/negative) y direction.
