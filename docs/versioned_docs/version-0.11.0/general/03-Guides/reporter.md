---
sidebar_position: 8
---

# AskUI Reporter
We provide a package `askui-reporters` with reporters ready-to-use to create reports for your AskUI runs.

On this page you will learn how to use the Allure-reporter from this package and how you can implement your own reporter for your reporting tool.

Also [check out the repository](https://github.com/askui/askui-reporters) for more details.

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
  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter({
      withScreenshots: 'always' as const, // See below for possible values
      withDetectedElements: 'always' as const, // See below for possible values
    })
  });
...
```

You can pass a `ReporterConfig` object to the reporter to configure the level of detail for screenshots and detected elements. The default values are `'onFailure'` for both:

```typescript
/**
 * SnapshotDetailLevel represents various levels of detail for the snapshot.
 * There are four possible values for this type.
 *
 * @typedef {'required'|'onFailure'|'begin'|'always'} SnapshotDetailLevel
 *
 * @property {'required'} required - Snapshot details, like screenshots or detected elements, may be available if required by the step. However, their presence is not guaranteed.
 * @property {'onFailure'} onFailure - Snapshot details are available when the step fails, primarily for debugging purposes. This level includes everything provided by 'required'.
 * @property {'begin'} begin - Snapshot details are available when the command starts, useful for determining why certain elements were interacted with. This level includes everything provided by 'onFailure'.
 * @property {'always'} always - Snapshot details are consistently available, irrespective of whether a step has failed or not, aiding in debugging. 
 */

/**
 * The ReporterConfig interface encapsulates the configuration options for the reporter.
 *
 * @interface ReporterConfig
 *
 * @property {SnapshotDetailLevel} [withScreenshots='onFailure'] - Defines the detail level for screenshots. Acceptable values: 'required', 'onFailure', 'begin', 'always'. Note: Higher levels of detail may impede step execution speed.
 * @property {SnapshotDetailLevel} [withDetectedElements='onFailure'] - Defines the detail level for detecting elements. Acceptable values: 'required', 'onFailure', 'begin', 'always'. Note: Higher levels of detail may impede step execution speed and incur additional costs.
 */
```

#### Configure `beforeEach()` and `afterEach()` in `jest.setup.ts`
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

#### Enable the Test Environment `@askui/jest-allure-circus` in `jest.config.ts`

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
  testEnvironment: '@askui/jest-allure-circus',
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
