---
displayed_sidebar: apiSidebar
---
# mouseMiddleClick

Clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript 
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseMiddleClick().exec();
```

