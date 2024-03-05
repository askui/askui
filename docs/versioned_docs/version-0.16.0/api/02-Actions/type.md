---
displayed_sidebar: apiSidebar
---
# type
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Types a text at the current position.
If you need to focus the element first, use typeIn()

**Note:** In the current version it copies the text and pastes it.

By default, the `text` is included in the logs and sent over to the askui Inference server to
predict in which context the typing has to occur. You can exclude the `text` from the logs
and the request to the askui Inference server setting `options.isSecret` to `true`.
This should not change the quality of the prediction of the askui Inference server. In this 
case, `options.secretMask` is included in logs and sent over instead of the `text`. 

**Examples:**
```typescript 
await aui.type('askui@askui.com').exec()

// mask the text so it is not send to the askui-inference server
await aui.type('Type some text', { isSecret: true, secretMask: '**' }).exec()
```
![](/img/gif/type.gif)

   * @param \{string} text - A text to type
   * @param \{Object} [options]
   * @param \{boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
       logs of askui nor sent over to askui Inference for prediction.
   * @param \{string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this 
       is included in logs and sent over to askui Inference for prediction instead of the `text`.
