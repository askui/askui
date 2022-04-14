# Speed up Execution

The lazy inference is an transitiv feature to speed up the test execution. Following the principle: <i>Don't execute what isn't needed</i>. To benefit from this feature you've to write the commands in a special way.

Our AI model consits of multiple following sub models:

| Model | Tasks | Speed |
|-------|-------|-------|
| Object Detector | Detect all UI elements | fast :rocket: |
| Custom Element Detector | Search via [template matching](https://en.wikipedia.org/wiki/Template_matching) the croped image inside the screenshot | slow :snail: |
| Icon Classifier | Predict for an icon an class e.g. user icon  | fast :rocket: |
| Optical Character Recognition (OCR) | Convert the image of text in text | fast :rocket: |
| Color Classifier | detect all elements| slow :snail: |

The sub-models have a different execution time. This differs whether they are executable via GPU or CPU. The fast models are executed on the GPU and the slow ones on the CPU.

During the a test step execution the lazy inference can deactivate sub-models and avoid the inference of them. This is derived from the instruction. E.g. `await aui.click().text().withText('Login').exec()` needs only the <b>Object Detector</b> and the <b>OCR</b> and not the <b>Icon Classifier</b>, <b>Color Classifier</b> or the <b>Custom Element Detector</b>. 
Or `await aui.pressKey('enter').exec()` is not relaing on the current screenhot. In this case no sub-model is executed. 

## 1. Avoid CPU inference

The sub-models <b>Custom Element Detector</b> and <b>Color Classifier</b> are executed on the CPU and are slow. Theses sub-models should you avoided.

<b>Don't:</b>

```javascript
await aui.click().customElement({customImage: '.../login_button.png', 
                                 name: 'login button'}).exec();
await aui.click().customElement({customImage: '.../text_overview.png', 
                                 name: 'overview button'}).exec();
await aui.click().text().withText('Best Practice').withColor('green').exec();
```

<b>Do's</b>

```javascript
await aui.click().button().withText('Login').exec();
await aui.click().text().withText('Overview').exec();
await aui.click().text().withText('Best Practice').exec();
```

## 2. Combine a Text Filter with an Element Filter

The <b>OCR</b> model is applied on multiple UI elements to extract the text, e.g. links, text and so on. The text filters, <i>withText</i>, <i>withExactText</i> or <i>containsText</i>, are applied on all UI elements containing text. To avoid that <b>OCR</b> is applied on all elements you should use it in combination with an element filter. 

<b>Don't:</b>

```javascript
await aui.click().withText('See here').exec();
await aui.click().withText('Sign in').exec();
```

<b>Do's:</b>

```javascript
await aui.click().link().withText('See here').exec();
await aui.click().withText().withText('Sign in').exec();
```





