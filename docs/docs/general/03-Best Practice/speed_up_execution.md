# Speed up Execution

The lazy inference is a transitive feature to speed up the execution of instructions. Following the principle: <i>Don't execute what isn't needed</i>. To benefit from this feature you have to write the commands in a special way.

Our AI model consists of multiple following sub models:

| Model | Tasks | Speed |
|-------|-------|-------|
| Object Detector | Detect all UI elements | fast :rocket: |
| Custom Element Detector | Search via [template matching](https://en.wikipedia.org/wiki/Template_matching) for a cropped image inside the screenshot | slow :snail: |
| Icon Classifier | Predict a class for an icon e.g. user icon  | fast :rocket: |
| Optical Character Recognition (OCR) | Convert the image of a text into text | fast :rocket: |
| Color Classifier | Detect the colors of all elements | slow :snail: |

The sub-models have a different execution time. This differs whether they are executable via GPU or CPU. The fast models are executed on the GPU and the slow ones on the CPU.

During the execution of an instruction, the lazy inference can deactivate sub-models to speed it up. This is derived from the instruction, e.g. `await aui.click().text().withText('Login').exec()` needs only the <b>Object Detector</b> and the <b>OCR</b> and not the <b>Icon Classifier</b>, <b>Color Classifier</b> or the <b>Custom Element Detector</b>. 
Or `await aui.pressKey('enter').exec()` is not relaying on the current screenshot. In this case no sub-model is executed. 

## 1. Avoid CPU inference

The sub-models <b>Custom Element Detector</b> and <b>Color Classifier</b> are executed on the CPU and are slow. Theses sub-models should therefore be avoided.

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

The <b>OCR</b> model is applied to multiple UI elements to extract the text, e.g. links, text and so on. The text filters, <i>withText</i>, <i>withExactText</i> or <i>containsText</i>, are applied to all UI elements containing text. To avoid that <b>OCR</b> is applied on all elements you should use it in combination with an element filter. 

<b>Don't:</b>

```javascript
await aui.click().withText('See here').exec();
await aui.click().withText('Sign in').exec();
```

<b>Do's:</b>

```javascript
await aui.click().link().withText('See here').exec();
await aui.click().text().withText('Sign in').exec();
```





