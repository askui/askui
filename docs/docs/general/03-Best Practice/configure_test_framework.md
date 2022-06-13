---
custom_edit_url: null
---

# Configure Test Frameworks

You can run askui test from different test frameworks like Jest or Jasmine. Depending on which framework you use, you might need some extra configurations to ensure an efficient execution of your tests.

## Jest

When running askui tests in Jest, you can configure your Jest environment with the `jest.config.ts` file. When you start the example project, it should look like this: 

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math'
  ]
  
};

// eslint-disable-next-line import/no-default-export
export default config;
```

In case your Jest tests are executed slowly, make sure you have added the `sandboxInjectedGlobals` configuration for `Math`.

:::caution

The option `sandboxInjectedGlobals` was named `extraGlobals` in Jest v27 and lower.
:::
