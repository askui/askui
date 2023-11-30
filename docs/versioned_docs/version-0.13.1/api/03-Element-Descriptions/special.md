---
displayed_sidebar: apiSidebar
---
# special
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters special elements defined over a specifically trained custom element descriptor.

Custom element descriptors are trained on your elements that were not detected with our 
default models. Please contact us for further details on how to do this. We are working on 
a solution to provide this in our User Portal. 

In the example below circle refers to a circle shaped icon with specific properties.

**Examples:** 
```typescript
await aui.moveMouseTo().element().special("circle").exec()
```

   * @param \{string} text - A text to be matched.
