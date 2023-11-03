---
sidebar_position: 3
title: Reporting
---

We provide a package `@askui/askui-reporters` with reporters ready-to-use into your AskUI runs. [Check out the repository](https://github.com/askui/askui-reporters) for more details.

### Installation
Install `@askui/askui-reporters` as a dev-dependency:

```bash
npm install --save-dev @askui/askui-reporters
```

### AskUIAllureStepReporter

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
      reporterConfig
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
  await AskUIAllureStepReporter.attachVideo(video);
});
```

#### Enable the Test Environment `@askui/jest-allure-circus` in `jest.config.ts`
Install `@askui/jest-allure-circus`` environment:

```bash
npm install --save-dev @askui/jest-allure-circus
```

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

## AskUIJestHtmlStepReporter
:::info
Due to restrictions of `jest-html-reporters` you can either have screenshots or video with this reporter but not both at the same time. For screenshots omit the `beforeEach()` and `afterEach()` hooks in `jest.setup.ts`. For video do not configure a `reporter` in your `UiControlClient`.
:::

### Install `ffmpeg` On Your System
To use this reporter you have to have [ffmpeg](http://www.ffmpeg.org/) installed on your system (including all necessary encoding libraries like `libmp3lame` or `libx264`).

Please follow the [installation instructions](http://www.ffmpeg.org/download.html) for your system.

### Enable Reporter in `jest.setup.ts`

Add the reporter to the `UiControlClient` in `jest.setup.ts`:

```typescript
// Do not forget this import at the start of the file!
import { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";
...
  aui = await UiControlClient.build({
    reporter: new AskUIJestHtmlStepReporter({
      withScreenshots: 'always' as const, // See below for possible values
      withDetectedElements: 'always' as const, // See below for possible values
    })
  });
...
```

You can pass a `ReporterConfig` object to the reporter to configure the level of detail for screenshots and detected elements:

* onFailure (Default for both)
* required
* begin
* always

### Configure `beforeEach()` and `afterEach()` in `jest.setup.ts`

```typescript
import path from "path";
import { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";

beforeEach(async () => {
  await aui.startVideoRecording();
});

afterEach(async () => {
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  await AskUIJestHtmlStepReporter.attachVideo(video);
});
```

### Enable the Jest-Html-Reporters in `jest.config.ts`

Install `jest-html-reporters` environment:

```bash
npm install --save-dev jest-html-reporters
```

```typescript
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./helper/jest.setup.ts"],
  sandboxInjectedGlobals: ["Math"],
  reporters: ["default", "jest-html-reporters"],
};

// eslint-disable-next-line import/no-default-export
export default config;
```

## AskUIAnnotationStepReporter

### Enable and Configure the AskUIAnnotationStepReporter in `jest.setup.ts`

```typescript
import { AskUIAnnotationStepReporter, AnnotationLevel } from '@askui/askui-reporters';
...
  aui = await UiControlClient.build({
    ...
    reporter: new AskUIAnnotationStepReporter(
        // AnnotationLevel.ON_FAILURE, /* Uncomment and change to AnnotationLevel.ALL for reporting at every step */
        // folderPath: "report", /* Uncomment and change property for different folder */
        // fileNameSuffix: "_testStep_annotation" /* Uncomment and change property for different file name suffix */
      ),
  });
...
```

`AnnotationLevel` is implemented as an enum. You have two options:

* `ON_FAILURE` (Default Value): After a step failed
* `ALL`: After every step

`folderPath` is the folder name, relative to the root of your project, the report-files will be saved to.

* Default value: `report`

`fileNameSuffix`: The suffix for every report-file.

* The generated report-filename has the following name convention:
** `{YYYYYYMMDDTHHmmsssss}_{passed|failed}{fileNameSuffix}.html`
** Example: 20230922072153421_failed_testStep_annotation.html

## Enable Multiple Reporters
You can enable multiple reporters simultaneously by passing an array of reporters in the `reporter` property like this:

```typescript
aui = await UiControlClient.build({
    reporter: [
        new AskUIAnnotationStepReporter(
          AnnotationLevel.ALL,
          "annotation_report",
          "_annotation"
        ),
        new AskUIJestHtmlStepReporter({
          withScreenshots: 'always' as const, // See below for possible values
          withDetectedElements: 'always' as const, // See below for possible values
        })
      ],
  });
```

:::caution
 The `testEnvironment` setting has to be the __SAME__ for all reporters in the array! The following table shows which reporters can be enabled together.
:::


|                             | AskUIAllureStepReporter | AskUIJestHtmlStepReporter | AskUIAnnotationStepReporter |
| --------------------------- | :---------------------: | :-----------------------: | :-------------------------: |
| AskUIAllureStepReporter     |                         |          ❌               |               ❌             |
| AskUIJestHtmlStepReporter   |         ❌              |                           |               ✅             |
| AskUIAnnotationStepReporter |         ❌              |          ✅                |                             |

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
