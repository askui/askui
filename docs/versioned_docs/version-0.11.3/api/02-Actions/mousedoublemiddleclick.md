---
displayed_sidebar: apiSidebar
---
# mouseDoubleMiddleClick
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Double-clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleMiddleClick().exec();
```

