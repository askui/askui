---
sidebar_position: 3
---

# Writing Your First Test

## Quickstart

To create your first test suite, enter

```shell
npx askui init
```

This is going to create

- a `tsconfig.json`: [a json file specifying the root files and the compiler options required to compile the project](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
- a folder called `test` which includes:
  - `test/my-first-askui-test-suite.test.ts`: an example test with askui,
  - a folder `helper` which contains `jest.setup.ts` file: this file is setting up the test environment for all tests
  - a `jest.config.ts`: file for configuration of Jest,

### Configuration

We need you to create some credentials through our [askui user portal](https://app.askui.com/) (usage is free!).
Please see <a href="../askui%20User%20Portal/signup" target="_blank">our documentation on how to signup and create the credentials</a>.

Then, go to your `helper/jest.setup.ts` and add the configuration for your `workspace id` and your `access token` to the _UiControlClient_.

```typescript
 aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    }
  });
```

### Run

To execute the test suite, enter

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. :tada: Congratulations! You just executed your first test suite using askui.

### Troubleshooting

If you are having problems with the test execution, [have a look at our Troubleshooting page](../07-Troubleshooting/index.md)

### Where to Go Next?
Writing powerful UI automations with askui needs some practice. We recommend you head over to the [Selecting UI Elements page](../03-Best%20Practice/selecting_ui_elements.mdx) to learn more about how to select elements based on visual properties.

If you are looking for inspiration, the **Tutorials** section will provide you with food for thought. Why not [Search for a Cat Image](../06-Tutorials/google-cat-search.md) as a start?

Also our [Discord-Community](https://discord.gg/KFYJ5xuyBA) is there to help you out!
