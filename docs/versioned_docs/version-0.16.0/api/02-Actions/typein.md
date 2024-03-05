---
displayed_sidebar: apiSidebar
---
# typeIn
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Puts the focus on the filtered element and types in the text.

**Note:** In the current version it copies the text and pastes it.

By default, the `text` is included in the logs and sent over to the askui Inference server to
predict in which context the typing has to occur. You can exclude the `text` from the logs
and the request to the askui Inference server setting `options.isSecret` to `true`.
This should not change the quality of the prediction of the askui Inference server. In this 
case, `options.secretMask` is included in logs and sent over instead of the `text`.  

**Examples:**
```typescript 
await aui.typeIn('Type some text').textfield().exec()

// mask the text so it is not send to the askui-inference server
await aui.typeIn('Type some text', { isSecret: true, secretMask: '**' }).textfield().exec()
```
![](/img/gif/typeIn.gif)

   * @param \{string} text - A text to type
   * @param \{Object} [options]
   * @param \{boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
       logs of askui nor sent over to askui Inference for prediction.
   * @param \{string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this 
       is included in logs and sent over to askui Inference for prediction instead of the `text`.
