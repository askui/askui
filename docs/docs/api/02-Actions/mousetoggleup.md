---
displayed_sidebar: apiSidebar
---
# mouseToggleUp
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Toggles mouse up (Left mouse key/tap).This is equivalent to releasing the pressing mouse left button. Often combined with `mouseToggleDown()`to automate **drag-and-drop**.

**Example:**
```typescript
await aui.mouseToggleDown().exec();
await aui.moveMouseRelatively(-400,0).exec();
await aui.mouseToggleUp().exec();
```
![](/img/gif/mouseToggleDownUp.gif)