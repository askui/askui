---
sidebar_position: 3
---

# Installing AskUI

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- [npm.js](https://www.npmjs.com/) version 7.10 or above
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- :warning: **Linux**: [Information for Wayland](../07-Troubleshooting/linux.md#wayland).


## macOS

:::danger

Some users have reported instability running AskUI on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops, or see [documentation on running AskUI in Docker](../05-Integrations/containers.md).

:::

## Installation

Open a directory where you would like to place the AskUI setup. If you haven’t already, set up an NPM project by running:

```shell
npm init -y
```

This will create a `package.json` file inside your present working directory which contains the configuration of your project including a description of its dependencies.

Install `askui` and other dependencies for writing and executing tests:

```shell
npm i -D askui @askui/askui-reporters typescript ts-node @types/jest ts-jest jest
```

<details>
  <summary>Quick explanation of all the dependencies</summary>

- [AskUI](https://www.npmjs.com/package/askui): Controlling a multitude of operating systems with commands based on automatically detected screen elements etc.
- [@askui/askui-reporters](https://www.npmjs.com/package/askui-reporters): AskUI reporters for nice looking reports.
- [typescript](https://www.npmjs.com/package/typescript): Allowing you to write your tests in [TypeScript](https://www.typescriptlang.org/) instead of JavaScript
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
- [jest](https://www.npmjs.com/package/jest): Allowing you to write and run tests (`describe`, `it`, assertions, mocking etc.)
- [ts-jest](https://www.npmjs.com/package/ts-jest): A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript
- [@types/jest](https://www.npmjs.com/package/@types/jest): Types for Jest

</details>

:::note

To create and serve a static HTML-Report you have to install [Allure](https://github.com/allure-framework/allure2#download) and then call `allure serve ./allure-results` from your root-directory.

:::

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our [AskUI Studio](https://app.askui.com/) (while still free) and [configure our library to use these credentials](../../api/Configuration/askui-ui-control-client#credentials) for authenticating and authorizing with our API.
