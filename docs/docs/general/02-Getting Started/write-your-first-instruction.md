---
sidebar_position: 3
---

# Write Your First Instruction

:::tip
What you will learn

- Initialize your first askui suite
- Configure your credentials (workspace id and access token)
- Run your first instruction
- Troubleshooting any issues
- Where to go next
:::

## Initialization

To create your first askui suite, enter into your terminal

```shell
npx askui init
```

<details>
  <summary>This will create</summary>

-   a `tsconfig.json`: [a json file specifying the root files and the compiler options required to compile the project](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
-   a folder called `test` which includes:
    -   `test/my-first-askui-test-suite.test.ts`: an example test with askui,
    -   a folder called `helper` which contains the `jest.setup.ts` file for setting up the test environment
    -   a `jest.config.ts` configuration file

</details>

## Configuration

Generate credentials through the [user portal](https://app.v2.askui.com/) (usage is free!).

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
Writing and executing an instruction in askui can be done in three steps:

1. Execute an interactive annotation.
2. Extract from the interactive annotation the filter which identifies target element.
3. Execute an instruction to control the keyboard and mouse to take action on target element.

### Step 1: Execute an Interactive Annotation

:::info
Before executing the instructions, open `test/my-first-askui-test-suite.test.ts` on your main display. The code in this file is shown below.

Some users have reported instability running askui on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops, or see [documentation on running askui in Docker](../04-Continuous%20Integration/askui-ui-controller-docker-images.md).
:::

```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });
});
```

To execute the instructions, enter into your terminal

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

A few seconds later an interactive annotation will be generated.

If you’d like a longer explanation as to what an interactive annotation is, read about here.

[Explanation of Interactive Annotations](../05-Tooling/annotation.md)

### Step 2: Extract the filter
Extract from the interactive annotation the filter which identifies target element.
Locate any element you’d like the mouse to move to and copy the filter by clicking on it:
Clicking an element will copy this filter, which we can then use in the step 3.

To close out the interactive annotation, use `CMD/CTRL + W` or `ESC`.

### Step 3: Execute an Instruction

Add this instruction code block to the describe block in your test file just under your interactive annotation instruction, taking note to also add your copied filter from the annotation:


```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click()
    // <INSERT YOUR COPIED FILTER HERE AND UNCOMMENT THIS LINE>.exec();
});
```

Be sure to `xit` out the interactive annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever filter text you chose:

```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
describe('jest with askui', () => {

  xit('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });

  it('should click on my element', async () => {
    await aui
      .click()
      .text().withText("node_nodu")
      .exec();
  });
});
````

As before, run your code with `npx jest --config ./test/jest.config.ts`

You should see askui take over your mouse, mouse over the element you chose and click.

Congratulations! You’ve just built your first instruction using askui. :tada:

### What other instructions are available?

* [Commands API](../../api/01-API/table-of-contents.md#commands)
* [Filters API](../../api/01-API/table-of-contents.md#filters)
* [Relations API](../../api/01-API/table-of-contents.md#relations)
* [Checks API](../../api/01-API/table-of-contents.md#checks)
* [Getters API](../../api/01-API/table-of-contents.md#getters)

## Troubleshooting

### askui moves to the wrong element?
Have a look at [Relational Selectors](../03-Guides/guide-relational-selectors.md) to select elements via a visual relation instead.

### Technical
For technical problems with the execution, take a look at our [Troubleshooting page](https://docs.askui.com/docs/general/Troubleshooting/)

You will find the following pages there:

* [Linux Wayland window manager and libfuse2](../07-Troubleshooting/linux.md)
* [askui behind a corporate proxy](../07-Troubleshooting/proxy.md)
* [macOS missing permissions for UiController](../07-Troubleshooting/mac-os.md)

## Where to Go Next?

Also our [Discord-Community](https://discord.gg/KFYJ5xuyBA) is there to help you out!

### Tutorials
If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of the typical use cases of askui in depth:

* [Search Image in Google](../06-Tutorials/google-cat-search.md)
* [Login at an Online Shop](../06-Tutorials/shop-demo.md)
* [Automate Spotify on Desktop](../06-Tutorials/spotify-tutorial.md)
* [Upload a Zip File to Google Drive](../06-Tutorials/zip-images-upload-googledrive-windows.md)
* [Automate an Android App](../06-Tutorials/android-search-in-browser.md)

### Best Practice
* Read [Selecting an Element by Visual Relation](../03-Guides/guide-relational-selectors.md) to understand the *Relational Selectors* in askui.
* Read [Selecting an Element with Text](../03-Guides/guide-text-selectors.md) to learn about *Text Selectors* in askui.
* Read [Speed Up Execution](../03-Guides/speed_up_execution.md) to understand more about the inference's performance.

### Annotation
* Read [Debug with Annotation](../05-Tooling/annotation.md) to learn how to use the **Image Annotation Feature**.

### Continuous Integration
- Read the [askui UI Controller Docker Images](../04-Continuous%20Integration/askui-ui-controller-docker-images.md) to learn more about running askui inside a Docker container.
- Read the [Gitlab CI/CD](../04-Continuous%20Integration/gitlab-ci.md) to learn about integrating askui into your Gitlab CI/CD.
