---
displayed_sidebar: apiSidebar
---
# pressKeyNTimes
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Press a key multiple times. At least two times.

**Examples:** 
```typescript
await aui.pressKeyNTimes('right');
await aui.pressKeyNTimes('left', 3);
```

   * @param \{PC_AND_MODIFIER_KEY} key
   * @param \{number} times - optional: defaults to 2
