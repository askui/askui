---
displayed_sidebar: apiSidebar
---
# matching
<span class="theme-doc-version-badge badge badge--secondary">experimental</span><br/><br/>

Filters elements based on a textual description.

## What Should I Write as Matching Text
The text description inside the `matching()` should describe the element visually.
It understands color, some famous company/product names, general descriptions.

It sometimes requires a bit of playing around to find a matching description:
E.g. `puzzle piece` can fail while `an icon showing a puzzle piece` might work.
Generally the more detail the better.

**Examples:** 
```typescript
await aui.click().matching('a mask on purple background and a firefox logo').exec()
```

   * @param \{string} text - A description of the target element.
