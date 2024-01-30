---
sidebar_position: 7
pagination_next: general/01-Getting Started/whats-next
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Write Your First Instruction

:::tip
What you will learn

- Understanding AskUI Workflow files
- Creating and running your first automation
:::

## Prerequisites
- AskUI is installed on your computer.
- The AskUI Controller is running.
- We recommend using a second monitor to ensure AskUI is not interacting with your code editor.
- You have a workflow file open on your main display e.g. the original template `askui_example/my-first-askui-test-suite.test.ts` in the directory you initialized your AskUI-Project before.

:::info
**For MacOS Users**  
Some users have reported instability running AskUI on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops.
:::

## Anatomy of an AskUI Workflow File
An AskUI Workflow file, using the Jest framework, is a versatile tool for automating user interface (UI) interactions across various applications, extending beyond traditional testing scenarios. It allows users to script complex UI interactions for both automation tasks and testing purposes.

### Key Components
**Import Statements**: Begin by importing necessary AskUI modules and helpers.

**`describe` Block**: Groups related UI automation scenarios or tests.

**`it` Blocks**: Each block defines a specific UI interaction or automation task, such as form submissions, navigation, or simulating user actions.

**AskUI API**: Utilized within it blocks for direct UI interactions, like clicking, typing, or navigating.

**Execution Instructions**: Commands provided for running the automated tasks or tests through the terminal.

### Example

```typescript showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI Automation Scenarios', () => {
  it('executes a specific task', async () => {
    await aui.click().text("Button Name").exec();
    // Additional automation logic
  });

  // More it blocks for different scenarios
});
```

## Step-by-Step Implementation

### Step 1: Annotate Your Screen
The interactive annotation serves as the foundational step in automating UI interactions. It's a process where the tool captures a snapshot of the user interface and identifies all interactive elements like buttons, text fields, and other controls.

By generating an annotated HTML file, you create a 'map' of the UI, which is crucial for accurately targeting and interacting with specific elements in subsequent steps. This ensures that the automation is precise and interacts with the correct elements.

<Tabs>
  <TabItem value="windows" label="Windows" default>

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on Windows', () => {
  it('should generate an HTML annotation', async () => {
    await aui.annotate();
  });
});
```
:::info
**Windows Bug**  
The interactive annotation `aui.annotateInteractively()` currently leads to an error on Windows. Instead use `annotate()` as outlined in the code above.
:::
  </TabItem>
  <TabItem value="macos" label="MacOS">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on MacOS', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
  <TabItem value="linux" label="Linux">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on Linux', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
</Tabs>

#### Run the Annotation

To execute the instructions, enter into your terminal (Windows: [AskUI Development Environment (ADE)](#annotation)).

<Tabs>
  <TabItem value="windows" label="Windows" default>
  Switch into ADE by running `askui activate` in a Command Prompt first.
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

A few seconds later an (interactive) annotation will be generated. If you have used the `annotate()` command, the annotation files are saved under `<project_root>/report`.

If you’d like a deeper explanation as to what an (interactive) annotation is, read about it here. [Explanation of (Interactive) Annotations](../03-Element%20Selection/annotations-and-screenshots.md)

### Step 2: Identifying Your Target Element
This step is about pinpointing the exact UI element (like a button or link) you want to interact with. The element's properties (e.g. element-description) acts like a unique identifier for each UI component.

Understanding and utilizing element targeting techniques is key to creating reliable and repeatable automated tasks. It allows the automation script to be more robust against changes in the UI, such as different screen sizes or resolutions.

With AskUI, there are near-infinite ways to target an element. We outlined the three most common techniques below

#### Approach A: Standard Element-Description Extraction (Recommended)

- **Process**: Click the UI element during annotation to copy its description to your clipboard.
- **Advantages**: Straightforward and quick for easily identifiable elements.
- **Best Used When**: The element is distinctly recognizable and not surrounded by similar elements.

To close out the interactive annotation, use `CMD/CTRL + W` or `ESC`.

#### Approach B: Filtering by Proximity: Using Relational Selectors
- **Process**: Chain multiple element descriptions together using commands like `leftOf()`, `above()`, etc., to create a unique selector based on element relationships. More information can be found in the [AskUI documentation](https://docs.askui.com/docs/0.11.6/general/Element%20Selection/relational-selectors).
- **Advantages**: Increases selector specificity, particularly useful in complex UIs with numerous similar elements.
- **Best Used When**: Targeting elements in a densely populated UI or when elements lack unique identifiers.

    ```typescript
    // Example: Selecting an element to the left of a specific reference
    await aui
      .click()
      .element() // This is your target
      .leftOf()
      .element().withText('Reference Text') // This is your anchor
      .exec();
    ```

#### Approach C: Custom Element-Descriptions: Screenshot-Based Selection (Advanced)
- **Process**: Use a screenshot snippet of the desired element to locate its exact position on the screen. More information can be found in the [AskUI documentation](https://docs.askui.com/docs/0.11.6/general/Element%20Selection/text-and-element-selectors#custom-elements).
- **Advantages**: Highly accurate for unique or custom-designed elements.
- **Best Used When**: The element has a distinct visual appearance.
- **Considerations**: This method is sensitive to screen resolution changes; ensure consistency in the automation/testing environment.

    ```typescript
    // Example: Using a screenshot snippet for element selection
    await aui
      .click()
      .customElement({
        customImage: 'path/to/screenshot_snippet.png',
      })
      .exec();
    ```

Next, add the desired element-description into your workflow file underneath your annotation instruction. In this example we will use `.text('Reference Text')`.

Result:
```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    // your action goes here
    .text('Reference Text') // your element description
    .exec();
});
```

### Step 3: Selecting the Right Action for Your Task
In this step you translate your intention (e.g., click a button, enter text) into a programmable action.
To learn more about the different types of actions, check out our [API Documentation](https://docs.askui.com/docs/0.11.6/api/API/table-of-contents).

In this case, we will use the `click` method, which is great for interacting with buttons, links and checkboxes.

To do this, add the `click` method to your workflow file

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click() // your action
    .text('Reference Text') // your element description
    .exec();
});
```

### Step 4: Execute an Instruction

Comment Out the Annotation Instruction: Use `xit` to ignore the annotation instruction in future runs.
The final version should look like this:

  ```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
  describe('jest with askui', () => {

    xit('should generate an annotation', async () => {
      await aui.annotate(); // your inactive annotation
    });

    it('should click on my element', async () => {
      await aui
        .click() // your action
        .text('Reference Text') // your element description
        .exec();
    });
  });
  ```

As before, run the code in your terminal:
- Windows: Enter ADE and run `Askui-RunProject`.
- MacOS/Linux: Run `npm run askui`.

You should see AskUI take over your mouse, mouse over the element you chose and click.

Congratulations! You’ve just built your first automation using AskUI. :tada:

