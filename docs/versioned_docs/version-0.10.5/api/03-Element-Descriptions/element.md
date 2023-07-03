---
displayed_sidebar: apiSidebar
---
# element
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for any UI element on the screen. Since the `element()` itself doesn't describe any particular property of the element, in most cases, it must be used in combination with [relational descriptions](../04-Relations/above.md) such as `above()`, `below()` or `nearestTo()` etc.

**Examples:** 
```typescript
await aui.moveMouseTo().element().below().text('Layers').exec();
```
![](/img/gif/element.gif)

