---
sidebar_position: 2
---

# Installing askui

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- [npm.js](https://www.npmjs.com/) version 7.10 or above
- :warning: **Linux**: [Information for Wayland](../07-Troubleshooting/linux.md###wayland).

## Installation

Open a directory where you would like to place the tests. If you have no npm project set up inside that directory, you can set one up by running:

```shell
npm init
```

This is going to create a `package.json` file inside your present working directory which contains the configuration of your project including a description of its dependencies.

Install `askui` and other dependencies for writing and executing tests:

```shell
npm i -D askui typescript ts-node @types/jest ts-jest jest
```

Quick explanation of all the dependencies:
- [askui](https://www.npmjs.com/package/askui): Controlling a multitude of operating systems with commands based on automatically detected screen elements, colors etc.
- [typescript](https://www.npmjs.com/package/typescript): Allowing you to write your tests in [TypeScript](https://www.typescriptlang.org/) instead of JavaScript
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
- [jest](https://www.npmjs.com/package/jest): Allowing you to write and run tests (`describe`, `it`, assertions, mocking etc.)
- [ts-jest](https://www.npmjs.com/package/ts-jest): A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript
- [@types/jest](https://www.npmjs.com/package/@types/jest): Types for Jest

If you don't like Jest, feel free to use another test framework, e.g., [Jasmine](https://jasmine.github.io/) or [Mocha](https://mochajs.org/).

Now, we are ready to write our first test.
