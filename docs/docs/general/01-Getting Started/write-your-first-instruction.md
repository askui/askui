---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Write Your First Instruction

:::tip
What you will learn

- Run your first instruction
- Troubleshoot any issues
- Where to go next
:::

Writing and executing an instruction in AskUI can be done in three steps:

1. Execute an (interactive) annotation.
2. Extract from the (interactive) annotation the element-description which identifies target element.
3. Execute an instruction to control the keyboard and mouse to take action on target element.

### Step 1: Execute an (Interactive) Annotation
Before executing the instructions, open `askui_example/my-first-askui-test-suite.test.ts` on your main display in the directory you initialized your AskUI-Project before. The code in this file is shown below.

:::info

**Windows Users**  
Please use `annotate()` as outlined in the code below. The interactive annotation `aui.annotateInteractively()` currently leads to an error on Windows.

**macOS Users**  
Some users have reported instability running AskUI on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops, or see [documentation on running AskUI in Docker](../05-Integrations/containers.md).
:::

<Tabs>
  <TabItem value="windows" label="Windows" default>

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should generate an (interactive) annotation', async () => {
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    await aui.annotate();
  });
});
```
  </TabItem>
  <TabItem value="macos" label="macOS">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should generate an (interactive) annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
  <TabItem value="linux" label="Linux">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
  it('should generate an (interactive) annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
</Tabs>

To execute the instructions, enter into your terminal (Windows: [AskUI Development Environment (ADE)](#annotation)).

<Tabs>
  <TabItem value="windows" label="Windows" default>
  Switch into ADE by running `askui` in a Command Prompt first.
  ```shell
  Askui-RunProject
  ```
  </TabItem>
  <TabItem value="macOS" label="macOS" default>
  ```shell
  npm run askui
  ```
  </TabItem>
  <TabItem value="linux" label="Linux" default>
  ```shell
  npm run askui
  ```
  </TabItem>
</Tabs>

A few seconds later an (interactive) annotation will be generated.

If you’d like a longer explanation as to what an (interactive) annotation is, read about it here. [Explanation of (Interactive) Annotations](../03-Element%20Selection/annotations-and-screenshots.md)

### Step 2: Extract the Element-Description
Extract from the (interactive) annotation the element-description which identifies target element.
Locate any element you’d like the mouse to move to and copy the element-description by clicking on it:
Clicking an element will copy this element-description, which we can then use in the step 3.

To close out the interactive annotation, use `CMD/CTRL + W` or `ESC`.

### Step 3: Execute an Instruction
Add this instruction code block to the describe block in your test file just under your (interactive) annotation instruction, taking note to also add your copied element-description from the annotation:

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click()
    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>
    // .exec();
});
```

Be sure to `xit` out the (interactive) annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever element-description text you chose:

<Tabs>
  <TabItem value="windows" label="Windows" default>
  ```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
  describe('jest with askui', () => {

    xit('should generate an (interactive) annotation', async () => {
      // Use annotate() to create an annotated HTML file
      // of your screen that is saved under <project_root>/report
      await aui.annotate();
    });

    it('should click on my element', async () => {
      await aui
        .click()
        .text("node_nodu")
        .exec();
    });
  });
  ```

As before, run your code with `Askui-RunProject`.
  </TabItem>
  <TabItem value="macos" label="macOS">
```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
describe('jest with askui', () => {

  xit('should generate an (interactive) annotation', async () => {
    await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click()
      .text("node_nodu")
      .exec();
  });
});
```
As before, run your code with `npm run askui`.
  </TabItem>
  <TabItem value="linux" label="Linux">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
describe('jest with askui', () => {

  xit('should generate an (interactive) annotation', async () => {
    await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click()
      .text("node_nodu")
      .exec();
  });
});
```
As before, run your code with `npm run askui`.
  </TabItem>
</Tabs>

You should see AskUI take over your mouse, mouse over the element you chose and click.

Congratulations! You’ve just built your first instruction using AskUI. :tada:

### Tutorials
If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of use cases of AskUI in depth:

* [Search Image in Google](../06-Tutorials/google-cat-search.md)
* [Login at an Online Shop](../06-Tutorials/shop-demo.md)
* [Automate Spotify on Desktop](../06-Tutorials/spotify-tutorial.md)
* [Automate an Android App](../06-Tutorials/android-search-in-browser.md)

## Where to Go Next?
Our [Outverse-Community](https://app.outverse.com/askui/community/home) is there to help you out!

## Troubleshooting

### AskUI moves to the wrong element?
Have a look at [Relational Selectors](../03-Element%20Selection/relational-selectors.md) to select elements via a visual relation instead.

### Technical
For technical problems with the execution, take a look at our [Troubleshooting pages](../Troubleshooting)
