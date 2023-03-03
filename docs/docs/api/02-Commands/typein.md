---
displayed_sidebar: apiSidebar
---
# typeIn

<span class="theme-doc-version-badge badge badge--secondary"></span>

Puts the focus on the filtered element and types in the text.

**Examples:**
```typescript 
await aui.typeIn('Type some text').textfield().exec()

// mask the text so it is not send to the askui-inference server
await aui.typeIn('Type some text', { isSecret: true, secretMask: '**' }).textfield().exec()
```
![](/img/gif/typeIn.gif)

   * @param {string} text - A text to type
