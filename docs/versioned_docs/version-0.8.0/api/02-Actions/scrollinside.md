---
displayed_sidebar: apiSidebar
---
# scrollInside
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Moves mouse to the filtered element and scrolls in the x and y direction.

**macOS**: May not work as expected!

**Example:**
```typescript 
await aui.scroll(0, 10).textarea().exec()
```

   * @param \{number} x_offset - A (positive/negative) x direction.
   * @param \{number} y_offset - A (positive/negative) y direction.
