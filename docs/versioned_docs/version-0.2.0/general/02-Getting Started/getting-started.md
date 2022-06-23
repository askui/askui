---
custom_edit_url: null
sidebar_position: 2
---

# Installing askui

## Requirements

- Node.js version 16 or above
- npm version 7.10 or above
- :warning: **Linux**: [Information for Wayland](../07-Troubleshooting/askui-ui-controller-starting-problems.md#wayland).

## Installation

If you have not yet set up a project using npm as your package manager, you can easily do so by running `npm init -y` inside the directory that you want your project to be in. This is going to create a `package.json` file with a description of your project, all your dependencies etc. If you already have a project that you would like to include the askui library in for writing up tests, simply navigate to that project.

```shell
npm i -D askui
```

While the askui library provides you with a way of controlling your OS, it does not yet provide everything you need for writing and executing a test. You also need a way of:

- writing up the actual test,
- writing up assertions to test wether an expectation holds true and, last but not least,
- a way to execute the tests, i.e., a test runner.

One framework which provides all of this out of the box is [Jest](https://jestjs.io/) which we are going to use in this example as it is quite easy to get started with and well-known. But feel free to use another test framework, such as [Jasmine](https://jasmine.github.io/) or [Mocha](https://mochajs.org/). How you use the askui library should be pretty much the same across these frameworks.

```shell
npm i -D jest
```

We are going to use [TypeScript](https://www.typescriptlang.org/) for writing the test instead of plain JavaScript. Run the following command to install Typescript, TS-Node for using Typescript together with Node.js and the types of Jest and Node.js.

```shell
npm i -D @types/jest ts-jest ts-node typescript
```

Now, we are ready to write our first test.
