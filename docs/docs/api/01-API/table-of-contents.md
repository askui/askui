---
displayed_sidebar: apiSidebar
custom_edit_url: null
---

# Table of Contents

:::tip

Use your browser search: `CMD/CTRL + f`

:::

## Actions

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '100%', textAlign: "left"}}>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <details>
                    <summary>click()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Mouse left-clicks/taps on the filtered element by moving the mouse cursor to the filtered element first.

If you need a simple mouseleftclick/tap only, use `mouseLeftClick`.

**Example:**
```typescript 
await aui.click().button().withText('Submit').exec()
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>execOnShell()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Executes a shell command on the device your UiController is connected to.

**Example:**
```typescript 
// Open the lastpass app
await aui.execOnShell('monkey -p com.lastpass.authenticator 1').exec();

// Open Google Chrome on Windows
await aui.execOnShell("start chrome").exec()

;// Open Google Chrome on macOS
await aui.execOnShell("open -a 'Google Chrome'").exec();

// Open Google Chrome on Linux
await aui.execOnShell("chrome").exec();
```  

</md-block>
<md-block>

* @param \{string} shell_command - A shell command which is executed.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>expect()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Expects a condition, e.g., `exists()` or `notExits()`.

Use the structure `expect().<your filter>.(exists()|notExists())` as shown in the examples below.

**Examples:**
```typescript 
await aui.expect().text('Login').exists().exec()
await aui.expect().text('Login').notExists().exec()
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseDoubleLeftClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Double-clicks with left mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleLeftClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseDoubleMiddleClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Double-clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleMiddleClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseDoubleRightClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Double-clicks with right mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleRightClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseLeftClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Clicks with left mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseLeftClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseMiddleClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseMiddleClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseRightClick()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Clicks with right mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseRightClick().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseToggleDown()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Toggles mouse down (Left mouse key/tap).

**Example:**
```typescript
await aui.mouseToggleDown().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>mouseToggleUp()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Toggles mouse up (Left mouse key/tap).

**Example:**
```typescript
await aui.mouseToggleUp().exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>moveMouse()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Moves the mouse to the absolute x and y coordinates.

If you want to move your mouse cursor to an element, use `moveMouseTo()`.

**Example:**
```typescript
await aui.moveMouse(500, 500).exec();
```  

</md-block>
<md-block>

* @param \{number} x_coordinate - A (positive/negative) x coordinate.
* @param \{number} y_coordinate - A (positive/negative) y coordinate.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>moveMouseRelatively()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Moves the mouse from the current position (relative) in x and y direction.

**Example:**
```typescript
await aui.moveMouseRelatively(20, 20).exec();
```  

</md-block>
<md-block>

* @param \{number} x_offset - A (positive/negative) x direction.
* @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>moveMouseRelativelyTo()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Moves the mouse relatively to an element in the direction.
This can be used when the mouse should not hover over an element anymore.

**Examples:**
```typescript 
// Move mouse 30 pixels below button
await aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()
```
![](/img/gif/moveMouseRelativelyTo.gif)  

</md-block>
<md-block>

* @param \{number} x_offset - A (positive/negative) x direction.
* @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>moveMouseTo()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Move mouse over the filtered element.

**Example:**
```typescript 
await aui.moveMouseTo().button().withText('Submit').exec()
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressAndroidKey()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press one Android key like `DEL`  

</md-block>
<md-block>

* @param \{ANDROID_KEY} key - A Android key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressAndroidThirdKey()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press three Android keys like `CTRL+ALT+DEL`  

</md-block>
<md-block>

* @param \{ANDROID_KEY} first_key - A Android key
* @param \{ANDROID_KEY} second_key - A Android key
* @param \{ANDROID_KEY} third_key - A Android key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressAndroidTwoKey()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press two Android keys like `ALT+F4`  

</md-block>
<md-block>

* @param \{ANDROID_KEY} first_key - A Android key
* @param \{ANDROID_KEY} second_key - A Android key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressKey()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press one keys like `DEL`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key
---
  

</md-block>
<md-block>

* @param \{PC_AND_MODIFIER_KEY} key - A key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressThreeKeys()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press three keys like `CTRL+ALT+DEL`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key
---
  

</md-block>
<md-block>

* @param \{MODIFIER_KEY} first_key - A modifier key
* @param \{MODIFIER_KEY} second_key - A modifier key
* @param \{PC_KEY} third_key - A key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>pressTwoKeys()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Press two keys like `ALT+F4`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key
---
  

</md-block>
<md-block>

* @param \{MODIFIER_KEY} first_key - A modifier key
* @param \{PC_KEY} second_key - A key

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>scroll()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Scrolls based on the current mouse position in the x and y direction.

**Important**: Mouse must be positioned in a scrollable area.

**macOS**: May not work as expected!

**Example:**
```typescript 
// Scroll 10 up in y direction
await aui.scroll(0, 10).exec()
```  

</md-block>
<md-block>

* @param \{number} x_offset - A (positive/negative) x direction.
* @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>scrollInside()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Moves mouse to the filtered element and scrolls in the x and y direction.

**macOS**: May not work as expected!

**Example:**
```typescript 
await aui.scroll(0, 10).textarea().exec()
```  

</md-block>
<md-block>

* @param \{number} x_offset - A (positive/negative) x direction.
* @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>swipe()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Swipe an element in the x and y direction.
Holds the left mouse button down on Windows, Linux and macOS and drags the element.
On touch devices it taps the element and then drags it.

**Example:**
```typescript 
// Swipe the element 500 to the right
await aui.swipe(500, 0).image().exec()
```
![](/img/gif/swipe.gif)  

</md-block>
<md-block>

* @param \{number} x_offset - A x direction. positive and negative values are accepted
* @param \{number} y_offset - A y direction. positive and negative values are accepted

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>type()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Types a text at the current position.
If you need to focus the element first, use typeIn()

**Note:** In the current version it copies the text and pastes it.

**Examples:**
```typescript 
await aui.type('Type some text').exec()

// mask the text so it is not send to the askui-inference server
await aui.type('Type some text', \{ isSecret: true, secretMask: '**' }).exec()
```  

</md-block>
<md-block>

* @param \{string} text - A text to type

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>typeIn()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Puts the focus on the filtered element and types in the text.

**Note:** In the current version it copies the text and pastes it.

**Examples:**
```typescript 
await aui.typeIn('Type some text').textfield().exec()

// mask the text so it is not send to the askui-inference server
await aui.typeIn('Type some text', \{ isSecret: true, secretMask: '**' }).textfield().exec()
```
![](/img/gif/typeIn.gif)  

</md-block>
<md-block>

* @param \{string} text - A text to type

</md-block>
                </details>
            </td>
        </tr>
    </tbody>
</table>

## Element-descriptions

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '100%', textAlign: "left"}}>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <details>
                    <summary>button()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'button'.

**Examples:** 
```typescript
await aui.moveMouseTo().button().exec()
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>checkbox()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'checkbox'.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>container()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'container'.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>containsText()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for text containing the text provided as an argument.

**Examples:** 
```typescript
'This is a text' === containsText('text') => true
'This is a text' === containsText('other text') => false
'This is a text' === containsText('other') => false
```
![](/img/gif/containsText.gif)  

</md-block>
<md-block>

* @param \{string} text - A text to be matched.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>customElement()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a 'custom element', that is a UI element which is defined by providing an image and other parameters such as degree of rotation. It allows filtering for a UI element that is not recognized by our machine learning models by default. It can also be used for pixel assertions of elements using classical [template matching](https://en.wikipedia.org/wiki/Template_matching).

**Example**
```typescript
await aui
    .click()
    .customElement({
        customImage: './logo.png', // required
        name: 'myLogo', // optional
        threshold: 0.9, // optional, defaults to 0.9
        rotationDegreePerStep: 0, // optional, defaults to 0
        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'
        // mask:{x:0, y:0}[] // optional, a polygon to match only a certain area of the custom element
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
of the given custom image.
  

</md-block>
<md-block>

* @param \{CustomElementJson} customElement - The custom element to filter for.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>element()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for any UI element on the screen.

**Examples:** 
```typescript
await aui.moveMouseTo().element().exec()
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>icon()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'icon'.

You can combine it with the element-description 'withText()' to look for a specific icon.

**Examples:** 
```typescript
icon().withText('plus')
```

**Note:** This is an alpha feature. The prediction of the icon name is sometimes unstable. Use custom elements as an alternative.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>image()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'image'.

**Examples:**
```typescript
// Works if there is only one image visible on the screen
await aui.click().image().exec();

// Works if you have an image with
// a caption text below
await aui.click().image().above().text('The caption').exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>matching()  <span class="theme-doc-version-badge badge badge--secondary">experimental</span> </summary>
<md-block>

Filters elements based on a textual description.

**What Should I Write as Matching Text**

The text description inside the `matching()` should describe the element visually.
It understands color, some famous company/product names, general descriptions.

It sometimes requires a bit of playing to find a matching description:
E.g. `puzzle piece` can fail here while `an icon showing a puzzle piece` might work.
Generally the more detail the better.

**Examples:** 
```typescript
await aui.click().matching('a mask on purple background and a firefox logo').exec()
```  

</md-block>
<md-block>

* @param \{string} text - A description of the target element.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>otherElement()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'other element'.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>special()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters special elements defined over a specifically trained custom element descriptor.

Custom element descriptors are trained on your elements that were not detected with our 
default models. Please contact us for further details on how to do this. We are working on 
a solution to provide this in our User Portal. 

In the example below circle refers to a circle shaped icon with specific properties.

**Examples:** 
```typescript
await aui.moveMouseTo().element().special("circle").exec()
```  

</md-block>
<md-block>

* @param \{string} text - A text to be matched.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>switch()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'switch'.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>table()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'table'.  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>text()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an UI element 'text'.

Takes an optional parameter to filter for a specific text.
See the examples below.

See also the filters `withTextRegex()` and `withExactText()`

**Examples:**
```typescript
await aui.click().text().exec();
await aui.click().text('Username').exec();
await aui.click().text().withTextRegex('\b[Ss]\w+').exec();
```  

</md-block>
<md-block>

* @param \{string} [text] - A text to be matched.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>textfield()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for a UI element 'textfield'.

**Examples:**
```typescript
// Works if there is only one textfield visible on the screen
await aui.typeIn('Oh yeah').textfield().exec();

// Works if you have a labeled textfield
// Label is above the textfield
await aui.typeIn('Oh yeah').textfield().below().text('E-Mail Address').exec();
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>withExactText()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for equal text.

**Note:** This should be only used in cases where the similarity
 comparison of \{@link FluentFilters.withText()} allows not for
 specific enough filtering (too many elements).

**Examples:** 
```typescript
'text' === withExactText('text') => true
'test' === withExactText('text') => false
'other' === withExactText('text') => false

await aui.moveMouseTo().text().withExactText('Password').exec()
```  

</md-block>
<md-block>

* @param \{string} text - A text to be matched.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>withText()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for similar (doesn't need to be a 100% equal) text.

**Examples:** 
```typescript
'text' === withText('text') => true
'test' === withText('text') => true
'Test' === withText('text') => true
'Text' === withText('text') => true
'TEXT' === withText('text') => true
'texst' === withText('text') => true
'texts' === withText('text') => true

// usually false
'atebxtc' === withText('text') => false
'other' === withText('text') => false
```
![](/img/gif/withText.gif)  

</md-block>
<md-block>

* @param \{string} text - A text to be matched.

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>withTextRegex()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for texts, which match the regex pattern.

**Examples:**

```typescript
'The rain in Spain' === withTextRegex('\b[Ss]\w+') => true
'The rain in Portugal' === withTextRegex('\b[Ss]\w+') => false
'The rain in switzerland' === withTextRegex('\b[Ss]\w+') => true

await aui.get().text().withTextRegex('\b[Ss]\w+').exec()
```  

</md-block>
<md-block>

* @param \{string} regex_pattern - A regex pattern

</md-block>
                </details>
            </td>
        </tr>
    </tbody>
</table>

## Relations

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '100%', textAlign: "left"}}>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <details>
                    <summary>above()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element above another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------
|   text1    |
--------------
--------------
|   text0    |
--------------
--------------
|   button   |
--------------

// Returns text0 because text0 is the first element above button
...text().above().button()
...text().above(0).button()
// Returns text1 because text1 is the second element above button
...text().above(1).button()
// Returns no element because button is below text
...button().above().text()
```
![](/img/gif/above.gif)  

</md-block>
<md-block>

* @param \{number} [optionalIndex=0] - element index

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>and()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Logic and operator

**Examples:**
```text 
example scene: 
 ---------------   ----------------
 |  icon user  |   |  icon search |
 ---------------   ----------------
```
```typescript 
const icons = await aui.get().icon().exec();
console.log(icons);
```
Using only the element-description icon, the get will return both icons 
```text 
console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 1000,
        ymin: 1010,
        xmax: 1020,
        ymax: 1030
     }
  },
  DetectedElement {
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```
You can combine element-descriptions with **the `and()` relation** and specify exactly which icon you want.
```typescript 
const icons = await aui.get().icon().and().withText('user').exec()
console.log(icons)
```
The get returns only the user icon although both elements are icons.
```text 
 console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>below()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element below another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------
|    text    |
--------------
--------------
|   button0  |
--------------
--------------
|   button1  |
--------------

// Returns button0 because button0 is the first button below text
...button().below().text()
...button().below(0).text()
// Returns button1 because button1  is the second button below text
...button().below(1).text()
// Returns no element because text is above button
...text().below().button()
```
![](/img/gif/below.gif)  

</md-block>
<md-block>

* @param \{number} [optionalIndex=0] - element index

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>contains()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element containing another element.

**Example:**
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns outerEl because outerEl contains innerEl
...outerEl().contains().innerEl()
//  Returns no element because innerEl contains no outerEl
...innerEl().contains().outerEl()
```
![](/img/gif/contains.gif)  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>in()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element inside another element.

**Examples:** 
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns innerEl because innerEl is inside outerEl
...innerEl().in().outerEl()
// Returns nothing because innerEl is not inside outerEl
...outerEl().in().innerEl()
```
![](/img/gif/in.gif)  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>leftOf()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element left of another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------  --------------  --------------
|  leftEl1   |  |  leftEl0   |  |  rightEl   |
--------------  --------------  --------------

// Returns leftEl0 because leftEl0 is the first element left of rightEl
...leftEl().leftOf().rightEl()
...leftEl().leftOf(0).rightEl()
// Returns leftEl1 because leftEl1 is the second element left of rightEl
...leftEl().leftOf(1).rightEl()
// Returns no element because rightEl is left of leftEl
...rightEl().leftOf().leftEl()
```
![](/img/gif/leftOf.gif)  

</md-block>
<md-block>

* @param \{number} [optionalIndex=0] - element index

</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>nearestTo()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element nearest to another element.

**Examples:**
```typescript 
--------------
|  button 1  |
--------------
--------------
|   text     |
--------------
              
              
              
--------------
|  button 2  |
--------------

// Returns button 1 because button 1 is nearer to the text than button 2
...button().nearestTo().text()
```
![](/img/gif/nearestTo.gif)  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>or()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Logic or operator

**Examples:**
```text 
scene 1
--------------  ---------------
|  button    |  |  icon       |
--------------  ---------------

scene 2
--------------  ---------------
|  button    |  |  text       |
--------------  ---------------

```
In case, that your reference element can have multiple values, in the following example, the element right of the button can be either icon or text.
You can use **the `or()` relation**, so your instruction is valid for both scenes
```typescript 
const button = await aui.get().button().rightOf().icon().or().text().exec();
console.log(button);
```
Returns the same button for both cases
```text 
 console output: [
  DetectedElement {
     name: 'BUTTON',
     text: 'button',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>rightOf()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Filters for an element right of another element.

Takes an optional parameter `index` to select the `nth` element (starting with 0)

**Examples:**
```typescript 
--------------  --------------  --------------
|  leftEl    |  |  rightEl0  |  |  rightEl1  |
--------------  --------------  --------------

// Returns rightEl0 because rightEl0 is the first element right of leftEl
...rightEl().rightOf().leftEl()
...rightEl().rightOf(0).leftEl()
// Returns rightEl1 because rightEl1 is the second element right of leftEl
...rightEl().rightOf(1).leftEl()
// Returns no element because leftEl is left of rightEl
...leftEl().rightOf().rightEl()
```
![](/img/gif/rightOf.gif)  

</md-block>
<md-block>

* @param \{number} [optionalIndex=0] - element index

</md-block>
                </details>
            </td>
        </tr>
    </tbody>
</table>

## Checks

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '100%', textAlign: "left"}}>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <details>
                    <summary>exists()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Expects that filtered element exists.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is not found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element does not exist.
await aui.expect().text('Login').exists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text('Login').exists().exec()
} catch (error) {
    console.log('Too bad we could not find the element!');
}
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>notExists()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Expects that filtered element not exists.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element does exist.
await aui.expect().text('Login').notExists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text('Login').notExists().exec()
} catch (error) {
    console.log('Too bad we could find the element!');
}
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
    </tbody>
</table>

## Getters

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '100%', textAlign: "left"}}>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <details>
                    <summary>get()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Returns an array with all filtered elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const text = await aui.get().text('Sign').exec();
console.log(text);
```
```text 
 console output: [
  DetectedElement {
     name: 'TEXT',
     text: 'Sign In',
     bndbox: BoundingBox {
        xmin: 1128.2720982142857,
        ymin: 160.21332310267857,
        xmax: 1178.8204241071428,
        ymax: 180.83512834821428
     }
   }
 ]
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
        <tr>
            <td>
                <details>
                    <summary>getAll()  <span class="theme-doc-version-badge badge badge--success">production</span> </summary>
<md-block>

Returns an array with all detected elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const detectedElements = await aui.getAll().exec();
console.log(detectedElements);
```
```text 
 console output: [
  DetectedElement {
     name: 'TEXT',
     text: 'Sign In',
     bndbox: BoundingBox {
        xmin: 1128.2720982142857,
        ymin: 160.21332310267857,
        xmax: 1178.8204241071428,
        ymax: 180.83512834821428
     },
  DetectedElement {
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 250.8204241071428,
        ymin: 300.21332310267857,
        xmax: 450.6304241071428,
        ymax: 950.47812834821428
     },
     ... 381 more items
   }
 ]
```  

</md-block>
<md-block>


</md-block>
                </details>
            </td>
        </tr>
    </tbody>
</table>

