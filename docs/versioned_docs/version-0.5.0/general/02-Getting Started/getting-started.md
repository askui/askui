---
sidebar_position: 2
---

# Installing askui

## Requirements

:::info

- [Node.js](https://nodejs.org/) version 16 or above
- [npm.js](https://www.npmjs.com/) version 7.10 or above
- :warning: **Linux**: [Information for Wayland](../07-Troubleshooting/linux.md###wayland).

:::

## macOS

:::danger

Some users have reported instability running automation on macOS with external displays and/or virtual desktops. If you experience similar issues, please disconnect external displays and close virtual desktops, or see documentation on running tests in Docker here.

:::

## Installation

Open a directory where you would like to place the automation. If you haven’t already, set up an NPM project by running:

```shell
npm init -y
```

This will create a `package.json` file inside your present working directory which contains the configuration of your project including a description of its dependencies.

Install `askui` and other dependencies for writing and executing tests:

```shell
npm i -D askui typescript ts-node @types/jest ts-jest jest
```

<details>
  <summary>Quick explanation of all the dependencies</summary>

- [askui](https://www.npmjs.com/package/askui): Controlling a multitude of operating systems with commands based on automatically detected screen elements, colors etc.
- [typescript](https://www.npmjs.com/package/typescript): Allowing you to write your tests in [TypeScript](https://www.typescriptlang.org/) instead of JavaScript
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
- [jest](https://www.npmjs.com/package/jest): Allowing you to write and run tests (`describe`, `it`, assertions, mocking etc.)
- [ts-jest](https://www.npmjs.com/package/ts-jest): A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript
- [@types/jest](https://www.npmjs.com/package/@types/jest): Types for Jest

</details>

## Access Token

Currently, you can use our lib without any configuration. In the future, as we need to prevent misuse of our API, we may need you to create some credentials through our [askui user portal](https://app.v2.askui.com/) (while still free) and [configure our library to use these credentials](https://docs.askui.com/docs/api/Configuration/askui-ui-control-client#credentials) for authenticating and authorizing with our API.

Please see [our documentation on how to signup and create the credentials](https://docs.askui.com/docs/general/askui%20User%20Portal/signup).
