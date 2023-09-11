---
sidebar_position: 4
---

# Framework Configuration

Basically, you can run `askui` instructions with every popular JavaScript/TypeScript test framework, e.g., [Jest](https://jestjs.io/) or [Jasmine](https://jasmine.github.io/).

## Jest

You can configure Jest with the `jest.config.ts`. It should look something like this: 

```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: ['Math']
};
```

In case your Jest tests are executed slowly, make sure you have added `'Math'` to `sandboxInjectedGlobals`.

:::caution
The option `sandboxInjectedGlobals` was named `extraGlobals` in Jest v27 and lower.
:::
