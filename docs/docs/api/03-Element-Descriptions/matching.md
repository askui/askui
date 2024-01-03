---
displayed_sidebar: apiSidebar
---
# matching
<span class="theme-doc-version-badge badge badge--secondary">experimental</span><br/><br/>

Filters elements based on a textual description.

## What Should I Write as Matching Text
The text description inside the `matching()` should describe the element visually.
It understands color, some famous company/product names, general descriptions.

**Important: _Matching only returns the best matching element when you use it with `get()`_**

A bit of playing around to find a matching description is sometimes needed:
E.g., `puzzle piece` can fail while `an icon showing a puzzle piece` might work.
Generally, the more detail the better.

We also recommend to not restrict the type of element by using the general
selector `element()` as shown in the examples below.

**Examples:** 
```typescript
// Select the black sneaker from a bunch of sneakers
await aui.click().element().matching('a black sneaker shoe').exec();

// Select an image that has text in it
await aui.click().element().matching('has Burger King in it').exec();
await aui.click().element().matching('has adidas in it').exec();

// Target a logo/image by describing it
await aui.click().element().matching('a mask on purple background and a firefox logo').exec();
await aui.click().element().matching('logo looking like an apple with one bite bitten off').exec();
await aui.click().element().matching('logo looking like a seashell').exec();
```

   * @param \{string} text - A description of the target element.
