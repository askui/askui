---
sidebar_position: 3
---

# Write Your First Automation

:::tip
What you will learn

- Initialize your first automation suite
- Configure your credentials (workspace id and access token)
- Understand the generated automation case
- Run your first automation
- Troubleshooting any issues
- Where to go next
:::

## Quickstart

## Initialization

To create your first automation suite, enter

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

### Configuration

Generate credentials through the [user portal](https://app.v2.askui.com/) (usage is free!). Please see the [documentation](../08-askui%20User%20Portal/signup.md) on signing up and generating credentials.

Then, go to your `helper/jest.setup.ts` and add the configuration for your `workspace id` and your `access token` to the `UiControlClient`.

```typescript
 aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    }
  });
```

### Understand the Generated Code

#### Run

:::info
Before executing the automation, open `test/my-first-askui-test-suite.test.ts` on your main display. The code in this file is shown below. It contains the text on **line 12** for which the AI will search.

Some users have reported instability running automation on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops, or see [documentation on running automation in Docker](../04-Continuous%20Integration/askui-ui-controller-docker-images.md).
:::

```typescript title="test/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {
    // Run this to see what askui annotates
    await aui.annotateInteractively();

    await aui.moveMouse(0, 0).exec();
    await aui
      .click()
      .text()
      .withText('Click on this text right here!')
      .exec();
  });
});
```

To execute the automation suite, enter

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

You should now see the automation suite being executed inside the shell and the following things happening on your main display:

1. **Line 6**: Show an interactively annotated version of your main display with red bounding boxes around the annotated elements. When you press `ESC` on your keyboard the automation will resume.

<details>
  <summary>What is Interactive Annotation?</summary>
The interactive annotation command requests the askui server to take a screenshot of the specified screen. Then, an AI model is used to annotate the image. After that, a full-screen window appears. Inside this window, boundary boxes enclosing the UI elements detected are going to appear. You can hover over the boxes to see the boxes' specifications, e.g., text detected, element type etc.
</details>

2. **Line 8**: Your mouse pointer moves to the upper left corner of your main display.
3. **Line 12**: Your mouse pointer comes back to click on the text `Click on this text right here!` in your automation file.

This is what it should look like on your display:

![Gif showing first test execution with Visual Studio Code on display.](/img/gif/first_test_execution.gif)

:tada: Congratulations! You just executed your first automation suite using askui.

### Troubleshooting

For problems with the execution, take a look at our [Troubleshooting page](https://docs.askui.com/docs/general/Troubleshooting/)

You will find the following pages there:

* [Linux Wayland window manager and libfuse2](../07-Troubleshooting/linux.md)
* [macOS missing permissions for UiController](../07-Troubleshooting/mac-os.md)

### Where to Go Next?

Writing powerful UI automations with askui needs some practice. We recommend you head over to the [Selecting UI Elements page](../03-Best%20Practice/selecting_ui_elements.mdx) to learn more about how to select elements based on visual properties.

If you are looking for inspiration, the **Tutorials** section will provide you with food for thought. Why not [Search for a Cat Image](../06-Tutorials/google-cat-search.md) as a start?

Also our [Discord-Community](https://discord.gg/KFYJ5xuyBA) is there to help you out!
