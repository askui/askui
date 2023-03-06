---
displayed_sidebar: apiSidebar
---
# customElement

Defines a 'custom element'. This is a UI element which is defined by providing an image and other parameters such as degree of rotation. It allows filtering for a UI element that is not recognized by our machine learning models by default. It can also be used for pixel assertions of elements using classical [template matching](https://en.wikipedia.org/wiki/Template_matching).

**Example**

```ts
await aui
    .click()
    .customElement({
        customImage: './logo.png', // required
        name: 'myLogo', // optional
        threshold: 0.9, // optional, defaults to 0.9
        rotationDegreePerStep: 0, // optional, defaults to 0
        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'
    })
    .exec();
```
 
**Arguments**

- **customImage** (*`string`, required*):
    - A cropped image in the form of a base64 string or file path.
- **name** (*`string`, optional*):
    - A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR.
- **threshold** (*`number`, optional*):
    - A threshold for how much a UI element needs to be similar to the custom element as defined. Takes values between `0.0` (== all elements are recognized as the custom element which is probably not what you want) and `1.0` (== elements need to look exactly like the `customImage` which is unlikely to be achieved as even minor differences count). Defaults to `0.9`.
- **rotationDegreePerStep** (*`number`, optional*):
    - Step size in rotation degree. Rotates the custom image by this step size until 360° is exceeded. The range is from `0` to `360`. Defaults to `0`.
- **imageCompareFormat** (*`'RGB' | 'grayscale'`, optional*):
    - The color compare style. 'greyscale' compares the brightness of each pixel whereas 'RGB' compares all three color. Defaults to 'grayscale'.