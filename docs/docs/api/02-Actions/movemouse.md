---
displayed_sidebar: apiSidebar
---
# moveMouse
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Moves the mouse to an arbitrary absolute x and y coordinates.

If you want to move your mouse cursor to an element, use `moveMouseTo()`.

**Example:**
```typescript
await aui.moveMouse(500, 500).exec();
```
![](/img/gif/moveMouse.gif)


   * @param {number} x_coordinate - A (positive/negative) x coordinate.
   * @param {number} y_coordinate - A (positive/negative) y coordinate.
