---
displayed_sidebar: apiSidebar
---
# dragTo
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Drags element1 to element2.

Both must be a `moveMouse()` or `moveMouseTo()` instruction as in the example below.

**Examples:** 
```typescript
await aui.dragTo(
   aui.moveMouseTo().text('AskUI'),
   aui.moveMouseTo().text('UI Automation')
);
```

   * @param \{Executable} element1
   * @param \{Executable} element2
