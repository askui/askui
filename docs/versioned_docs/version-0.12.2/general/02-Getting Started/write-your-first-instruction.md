---
sidebar_position: 7
---

# Write Your First Instruction

:::tip
What you will learn

- Initialize your first AskUI suite
- Configure your credentials (workspace id and access token)
- Run your first instruction
- Troubleshooting any issues
- Where to go next
:::

## Initialization

To create your first AskUI suite, enter into your terminal

```shell
npx askui init
```

<details>
  <summary>This will create</summary>

-   a `tsconfig.json`: [a json file specifying the root files and the compiler options required to compile the project](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
-   a folder called `test` which includes:
    -   `test/my-first-askui-test-suite.test.ts`: an example workflow with AskUI,
    -   a folder called `helper` which contains the `jest.setup.ts` file for setting up the test environment
    -   a `jest.config.ts` configuration file

</details>

## Configuration

Generate credentials through the __AskUI Studio__ (usage is free!). Please [fill out this form](https://xa5a040gvfz.typeform.com/to/Ndh2NkV6) to schedule a demonstration or [request a trial](https://xa5a040gvfz.typeform.com/to/IHdr0qY5) to obtain access to __AskUI Studio__.

Then, go to your `helper/jest.setup.ts` and add the configuration for your `workspace id` and your `access token` to the `UiControlClient`.

```typescript
 aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    }
  });
```

## Run Your First Instruction
Writing and executing an instruction in AskUI can be done in three steps:

1. Execute an (interactive) annotation.
2. Extract from the (interactive) annotation the element-description which identifies target element.
3. Execute an instruction to control the keyboard and mouse to take action on target element.

### Step 1: Execute an (Interactive) Annotation

:::info
Before executing the instructions, open `test/my-first-askui-test-suite.test.ts` on your main display. The code in this file is shown below.

**Windows Users**

Please use `annotate()` as outlined in the code below. The interactive annotation `aui.annotateInteractively()` currently leads to an error on Windows.

**macOS Users**

Some users have reported instability running AskUI on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops, or see [documentation on running AskUI in Docker](../05-Integrations/containers.md).
:::

```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should generate an (interactive) annotation', async () => {

    // For Windows users:
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    await aui.annotate();

    // Uncomment for macOS and Linux
    // Delete the lines above to not trigger annotate()
    // await aui.annotateInteractively();
  });
});
```

To execute the instructions, enter into your terminal

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts --runInBand
```

:::info
We use the `--runInBand` CLI option here to run the workflows from the `it`-code blocks sequentially and not in parallel. This is usually what you want on your local machine without isolated environments like containers or VMs.
:::

A few seconds later an (interactive) annotation will be generated.

If you’d like a longer explanation as to what an (interactive) annotation is, read about it here. [Explanation of (Interactive) Annotations](../03-Element%20Selection/annotations-and-screenshots.md)

### Step 2: Extract the Element-Description
Extract from the (interactive) annotation the element-description which identifies target element.
Locate any element you’d like the mouse to move to and copy the element-description by clicking on it:
Clicking an element will copy this element-description, which we can then use in the step 3.

To close out the interactive annotation, use `CMD/CTRL + W` or `ESC`.

### Step 3: Execute an Instruction

Add this instruction code block to the describe block in your test file just under your (interactive) annotation instruction, taking note to also add your copied element-description from the annotation:


```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click()
    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>
    // .exec();
});
```

Be sure to `xit` out the (interactive) annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever element-description text you chose:

```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
describe('jest with askui', () => {

  xit('should generate an (interactive) annotation', async () => {
    // For Windows users:
    // Use annotate() to create an annotated HTML file
    // of your screen that is saved under <project_root>/report
    await aui.annotate();

    // Uncomment for macOS and Linux
    // Delete the lines above to not trigger annotate()
    // await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click()
      .text("node_nodu")
      .exec();
  });
});
````

As before, run your code with `npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts --runInBand`

You should see AskUI take over your mouse, mouse over the element you chose and click.

Congratulations! You’ve just built your first instruction using AskUI. :tada:

### What other instructions are available?

* [Actions API](../../api/01-API/table-of-contents.md#actions)
* [Element-Descriptions API](../../api/01-API/table-of-contents.md#element-descriptions)
* [Relations API](../../api/01-API/table-of-contents.md#relations)
* [Checks API](../../api/01-API/table-of-contents.md#checks)
* [Getters API](../../api/01-API/table-of-contents.md#getters)

## Troubleshooting

### AskUI moves to the wrong element?
Have a look at [Relational Selectors](../03-Element%20Selection/relational-selectors.md) to select elements via a visual relation instead.

### Technical
For technical problems with the execution, take a look at our [Troubleshooting page](../07-Troubleshooting/index.md)

## Where to Go Next?

Our [Outverse-Community](https://app.outverse.com/askui/community/home) is there to help you out!

### Tutorials
If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of use cases of AskUI in depth:

* [Search Image in Google](../06-Tutorials/google-cat-search.md)
* [Login at an Online Shop](../06-Tutorials/shop-demo.md)
* [Automate Spotify on Desktop](../06-Tutorials/spotify-tutorial.md)
* [Automate an Android App](../06-Tutorials/android-search-in-browser.md)

### Annotation
* Read [Debug with Annotation](../03-Element%20Selection/annotations-and-screenshots.md) to learn how to use the **Image Annotation Feature**.
