---
sidebar_position: 4
---

# Recommended Practices

This page will give you examples of how to use askui efficiently and effectively. 

## General Considerations on Speed of Inference for Different Element-Descriptions

| Submodel | Tasks   | Speed  |
| -------- | ------- | -------|
| Object Detector | Common elements, e.g. a button or textfield | fast :rocket: |
| Icon Classifier | Predict the class of an icon, e.g., a user icon  | fast :rocket: |
| Optical Character Recognition (OCR) | Recognize text | fast :rocket: |
| Custom Element Detector | Search via an image inside the screen | slow :snail: |

### Avoid Optical Character Recognition (OCR) on Too Many Element

If you use `containsText()`, `withText()`, `withExactText()` or `withTextRegex()` **OCR** is applied to all elements detected on your screen. This can slow down askui. It is more efficient to narrow down the elements first. For example, if you want to click a `button` with a specific text you should select all buttons first.

```javascript
// Do this
await aui.click().button().withText('See here').exec();
await aui.click().text().withText('Sign in').exec();

// And NOT this
await aui.click().withText('See here').exec();
await aui.click().withText('Sign in').exec();
```

### Avoid Custom Element Detection if Possible

If you use `customElement()` you are doing an image-in-image search. Use this sparingly only for specific custom elements as the execution time is slow!

```javascript
// Do this
await aui.click().button().withText('Login').exec();
await aui.click().text().withText('Overview').exec();

// And NOT this
await aui.click().customElement({
  customImage: '.../login_button.png', 
  name: 'login button',
}).exec();
await aui.click().customElement({
  customImage: '.../text_overview.png', 
  name: 'overview button',
}).exec();
```

## Scrolling
When you use askui you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements.

### Scrolling on Touch Displays
On touch displays you have to recreate the swipe gesture:

```javascript
// Touch the display with your finger, move finger to the left, release
await aui.mouseToggleDown().exec()
await aui.moveMouseRelatively(-1500, 0).exec()
await aui.mouseToggleUp().exec()
```

### Scrolling With Mouse Wheel
If you want to scroll with your mouse wheel you can use the `scroll()` action:

```javascript
// Scroll 10 down in y direction<>
await aui.scroll(0, -10).exec()
```

### Scrolling With Key Press
If you want to scroll with a key press you could use your arrow keys (`up`, `down`, `left`, `right` ) or the `pagedown`-key.

```javascript
// Press down arrow key
await aui.pressKey('down').exec()

// Press up arrow key
await aui.pressKey('up').exec()

// Scroll down a page
await aui.pressKey('pagedown').exec()

// Scroll up a page
await aui.pressKey('pageup').exec()
```

## Wait for an Element to Appear
askui implements a conservative retry strategy to wait for an element to appear. But sometimes this is not long enough.
You can wait for an element to appear with the following helper function:

```javascript
// Retry the command 5 times with a
// wait time of 2 seconds between each try
async function waitUntil(askuiCommand: () => Promise<void>, maxTry = 5) {
  try {
    await askuiCommand();
  }
  catch (error) {
    if (maxTry == 0) {
      throw error
    }
    console.log(`Retry predicting command, ${maxTry} tries left`)
    await aui.waitFor(2000).exec();
    await waitUntil(askuiCommand, maxTry - 1)
  }
}

// Wait for the text 'Github' to be displayed
await waitUntil(
  async () => 
    aui.expect().text().withText('Github').exists().exec()
  );
```
