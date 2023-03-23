---
displayed_sidebar: apiSidebar
---
# mouseRightClick

<span class="theme-doc-version-badge badge badge--secondary"></span>

Clicks with right mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript 
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseRightClick().exec();
```

