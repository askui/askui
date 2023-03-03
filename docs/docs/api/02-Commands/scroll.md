---
displayed_sidebar: apiSidebar
---
# scroll

<span class="theme-doc-version-badge badge badge--secondary"></span>

Scrolls based on the current mouse position in the x and y direction.

**Important**: Mouse must be positioned in a scrollable area.

**macOS**: May not work as expected!

**Example:**
```typescript 
// Scroll 10 up in y direction
await aui.scroll(0, 10).exec()
```

   * @param {number} x_offset - A (positive/negative) x direction.
   * @param {number} y_offset - A (positive/negative) y direction.
