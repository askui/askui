---
custom_edit_url: null
---

# Speed Up Execution

Lazy inference is a transitive feature to speed up the execution of instructions. Following the principle: <i>Only execute that what needs to be executed</i>. To benefit from this feature, you have to write the commands in a certain way.

Our AI model consists of the following submodels:

| Model | Tasks | Speed |
|-------|-------|-------|
| Object Detector | Detect all UI elements | fast :rocket: |
| Custom Element Detector | Search via [template matching](https://en.wikipedia.org/wiki/Template_matching) for a cropped image inside the screenshot | slow :snail: |
| Icon Classifier | Predict the class of an icon, e.g., a user icon  | fast :rocket: |
| Optical Character Recognition (OCR) | Convert the image of a text into text | fast :rocket: |
| Color Classifier | Detect the colors of all elements | slow :snail: |

The submodels have different execution times. It depends on wether they are executable and, therefore, executed on a GPU or a CPU. The fast models are executed on a GPU and the slow ones on a CPU.

During the execution of an instruction, the lazy inference can deactivate submodels to speed up execution. What can be deactivated can be derived from the instruction, e.g.:
- `await aui.click().text().withText('Login').exec()` only needs the <b>Object Detector</b> and the <b>OCR</b> but not the <b>Icon Classifier</b>, <b>Color Classifier</b> or the <b>Custom Element Detector</b>.
- `await aui.pressKey('enter').exec()` is not relying on any of the models at all as no classification is necessary. In this case. no submodel is executed. 

## 1. Avoid CPU Inference

The submodels <b>Custom Element Detector</b> and <b>Color Classifier</b> are executed on the CPU and are slow. Theses submodels should therefore be avoided.

<b>Don't:</b>

```javascript
await aui.click().customElement({
  customImage: '.../login_button.png', 
  name: 'login button',
}).exec();
await aui.click().customElement({
  customImage: '.../text_overview.png', 
  name: 'overview button',
}).exec();
await aui.click().text().withText('Best Practice').withColor('green').exec();
```

<b>Do:</b>

```javascript
await aui.click().button().withText('Login').exec();
await aui.click().text().withText('Overview').exec();
await aui.click().text().withText('Best Practice').exec();
```

## 2. Combine a Text Filter with an Element Filter

The <b>OCR</b> model is applied to multiple UI elements to extract the text, e.g., links, text etc. The text filters `withText()`, `withExactText()` or `containsText()` are applied to all UI elements containing text. To avoid that <b>OCR</b> is applied on all elements you should use it in combination with an element filter. 

<b>Don't:</b>

```javascript
await aui.click().withText('See here').exec();
await aui.click().withText('Sign in').exec();
```

<b>Do:</b>

```javascript
await aui.click().link().withText('See here').exec();
await aui.click().text().withText('Sign in').exec();
```
