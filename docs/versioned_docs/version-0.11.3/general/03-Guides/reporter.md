---
sidebar_position: 8
---

# AskUI Reporter
We provide a package `@askui/askui-reporters` with third-party integration of reporters ready-to-use into your AskUI runs. [Check out the repository](https://github.com/askui/askui-reporters) for more details.

## Installation
Install `@askui/askui-reporters` as a dev-dependency:

```bash
npm install --save-dev @askui/askui-reporters
```

## Usage of Allure-Reporter
Add the reporter to the `UiControlClient` in `jest.setup.ts`:

```typescript
import { AskUIAllureStepReporter } from "@askui/askui-reporters";
...
  const reporterConfig: ReporterConfig = {
    withScreenshots: 'always', // See below for possible values
    withDetectedElements: 'always', // See below for possible values
  }

  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter(
      reportConfig
    )
  });
...
```

You can pass a `ReporterConfig` object to the reporter to configure the level of detail for screenshots and detected elements.

There are four possible values (See [the @askui/askui-reporters README for a detailed explanation](https://github.com/askui/askui-reporters/tree/main#allure-reporter)):

* onFailure (Default for both)
* required
* begin
* always

### Configure `beforeEach()` and `afterEach()` in `jest.setup.ts`
The `UiControlClient` retrieves the videos and images from your `UiController`. You have to implement `beforeEach()` and `afterEach()` in `jest.setup.ts` to start the recording and then add it to your report:

1. Allure Reporter
```typescript
beforeEach(async () => {
  await aui.startVideoRecording();
});

afterEach(async () => {
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  AskUIAllureStepReporter.attachVideo(video);
});
```

### Enable the Test Environment `@askui/jest-allure-circus` in `jest.config.ts`

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
  // highlight-start
  // Enables the test environment for Allure
  testEnvironment: '@askui/jest-allure-circus',
  // highlight-end
};

// eslint-disable-next-line import/no-default-export
export default config;
```

## Implement Your Own Reporter
To write your own reporter you have to implement AskUI's `Reporter` interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:

```typescript
export interface Reporter {
    config?: ReporterConfig;
    onStepBegin?(step: Step): Promise<void>;
    onStepRetry?(step: Step): Promise<void>;
    onStepEnd?(step: Step): Promise<void>;
}
```

See the [Example implementation for Allure](https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts) on how that is used to extract the screenshot before/after each step and how to record a video of each step.
