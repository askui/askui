---
displayed_sidebar: apiSidebar
---
# type

<span class="theme-doc-version-badge badge badge--secondary"></span>

Types a text at the current position.
If you need to focus the element first, use typeIn()

**Examples:**
```typescript 
await aui.type('Type some text').exec()

// mask the text so it is not send to the askui-inference serverawait aui.type('Type some text', { isSecret: true, secretMask: '**' }).exec()
```

   * @param {string} text - A text to type
