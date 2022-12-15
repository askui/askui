---
displayed_sidebar: apiSidebar
---
# moveMouseRelativelyTo

Moves the mouse relatively to an element in the direction.
This can be used when the mouse should not hover over an element anymore.

**Examples:**
```typescript 
// Move mouse 30 pixels below button
await aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()
```
![](/img/gif/moveMouseRelativelyTo.gif)

   * @param {number} x_offset - A (positive/negative) x direction.
   * @param {number} y_offset - A (positive/negative) y direction.
