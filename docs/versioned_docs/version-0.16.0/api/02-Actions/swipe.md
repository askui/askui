---
displayed_sidebar: apiSidebar
---
# swipe
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Swipe an element in the x and y direction.
Holds the left mouse button down on Windows, Linux and macOS and drags the element.
On touch devices it taps the element and then drags it.

**Example:**
```typescript 
// Swipe the element 500 to the right
await aui.swipe(500, 0).image().exec()
```
![](/img/gif/swipe.gif)

   * @param \{number} x_offset - A x direction. positive and negative values are accepted
   * @param \{number} y_offset - A y direction. positive and negative values are accepted
