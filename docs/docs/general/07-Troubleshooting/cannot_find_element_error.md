---
sidebar_position: 1
---

# Cannot Find Element Error

If you see this error message when you run askui you have a few different options you can try to resolve it. We will go over all of them on this page:

```bash
# Executed instruction:
await aui.click().button().withText("I feel happy!").exec();

# Error message
A problem occurred while executing the instruction: 
Click on button with text "I feel happy!".
Reason ControlCommandError: Cannot find "button contains with text 'I feel happy!'"
```

## Use Interactive Annotation to Debug
When you develop an automation you can use interactive annotation to extract filters as described on our [interactive annotation page](../05-Tooling/annotation.md).

This gif illustrates the process:
![Interactive Annotation in action](/img/gif/interactive-annotate.gif)

If an element-description derived through this method does not work you may run the interactive annotation again and check if askui gives you the same element-description. Sometimes elements are hard to identify correctly, like icons or specific fonts. Read the next sections on how to tackle this 🙂

## Selecting Icons
There are millions of different icon sets out there. Detecting them all reliable is nearly impossible.

You can use three strategies to make your instructions more stable.

### 1. Use Relative Element-Descriptors
Often there is text near a specific icon. You can use this to your advantage, like in the following example, where the icon below a specific text is clicked. See our [guide about relational element-descriptors](../03-Guides/guide-relational-element-descriptions.md) to understand how those work:

```javascript
await aui
  .click()
  .icon()
  .below()
  .text() 
  .withText('Please Enter your Name').exec();
```

### 2. Use Generic Element-Descriptor
It could be the case that the target element is not detected correctly, e.g, an icon could possibly be detected as a toggle or checkbox and vice versa. In such cases, the generic element-descriptor `element()` could be a good option.

Be aware that `element()` alone specifies no particular property. It is recommended to be used in conjunction with a [relational element descriptor](../../api/04-Relations/above.md):

```javascript
await aui
  .click()
  .element()
  .below()
  .text()
  .withText('Please Enter your Name').exec();
```
This method is not restricted to icon elements, but can also be used for a wide range of elements.


### 3. Use Custom Element Selection
Custom element selection is your last resort because it is slow as it uses image-in-image search. Check out our [Google Street View Tutorial](../06-Tutorials/custom-element.md) to see how you can make use of it.

## Selecting Image
Images are supposed to have a very certain visual property.

- An image is expected to have a color contrasting against the background.
- An image is expected to have a rectangular shape. (rounded corner in a certain degree can be accepted)

Generally speaking, everything on the screen can be an image. For example, icons on a website are actually images. But in terms of visual semantics, we don't deal with the notion of image in general. So it is worth knowing that the above two conditions are critical when using the `image()` descriptor.

## Selecting Text
OCR is tricky and we are working hard to improve it. But you will encounter cases where some text may not be recognized reliably depending on the font size, style or typeface:

### 1. Missing Whitespaces Between Words
You can guard against missing whitespaces with `withTextRegex()`:

```javascript
// Use [\\s]{0,1} as a replacement for whitespace
await aui
  .click()
  .text()
  .withTextRegex('your[\\s]{0,1}name').exec();
```

### 2. Cut off characters at the start/end
For cut-off characters you can omit the first/last character:

```javascript
// Omit first and last character of 'your name'
await aui
  .click()
  .text()
  .withText('your name').exec();
```

## Missing Permissions for UiController on macOS
askui controls your operating system and macOS is very restrictive in giving access to third-party applications (which is a good thing actually!). The askui UiController needs to be given access for _Screen Recording_ and _Accessibility_. See our [troubleshooting macOS page](mac-os.md).
