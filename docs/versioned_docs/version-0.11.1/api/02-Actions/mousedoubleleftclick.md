---
displayed_sidebar: apiSidebar
---
# mouseDoubleLeftClick

<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Double-clicks with left mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouse(500,500).exec();

await aui.mouseDoubleLeftClick().exec();
```
![](/img/gif/mouseDoubleLeftClick.gif)
