---
displayed_sidebar: apiSidebar
---
# mouseToggleDown
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Toggles mouse down (Left mouse key/tap). This is equivalent to **mouse-left-press-and-hold**. It holds the mouse button until the `mouseToggleUp()` is called. Often combined with `mouseToggleUp()`to automate **drag-and-drop**.

**Example:**
```typescript
await aui.mouseToggleDown().exec();
await aui.moveMouseRelatively(-400,0).exec();
await aui.mouseToggleUp().exec();
```
![](/img/gif/mouseToggleDownUp.gif)