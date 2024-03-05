---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# MongoDB
In this guide you will learn how to integrate data from a MongoDB database into your AskUI workflow.

We will use the *Jest-MongoDB* integration to connect to the database in a convenient way.

## Prerequisites

- AskUI - Follow the Getting Started Guide for your operating system: [Windows](../../general/01-Getting%20Started/Installing%20AskUI/getting-started.md) | [Linux](../../general/01-Getting%20Started/Installing%20AskUI/getting-started-linux.md) | [macOS](../../general/01-Getting%20Started/Installing%20AskUI/getting-started-macos.md)
- Web browser

## Setup

1. Install the required dependencies for MongoDB

```bash
npm install --save-dev @shelf/jest-mongodb @types/mongodb mongodb merge
```

2. Create `test/jest-preset.js` for the database integration

```typescript
const merge = require('merge');
const { defaults: tsJestPreset } = require('ts-jest/presets');
const jestMongodbPreset = require('@shelf/jest-mongodb/jest-preset');

module.exports = merge.recursive(tsJestPreset, jestMongodbPreset);
```

3. Add `test/jest-preset.js` as preset in `test/jest.config.ts`

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  **preset: './jest-preset.js',**
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
```

4. Add environment variables for connection to AskUI backend and MongoDB database

```bash
export ASKUI_WORKSPACE_ID=
export ASKUI_TOKEN=
export MONGO_URI=
export MONGO_DB_NAME=
```

5. Modify `test/helper/jest.setup.ts` to use the environment variables ASKUI_WORKSPACE_ID and ASKUI_TOKEN

```typescript
...
const askuiConfig = {
  workspaceId: process.env.ASKUI_WORKSPACE_ID,
  token: process.env.ASKUI_TOKEN,
} as const;
...
  aui = await UiControlClient.build({
    credentials: {
      workspaceId: config.workspaceId,
      token: config.token,
    },
  });
...
```

6. Import the required dependencies in your workflow file (i.e. `test/my-first-askui-test-suite.test.ts`)

```typescript
import { Collection, Document } from 'mongodb';
import { aui, mongodb } from './helper/jest.setup';
```

## Usage Example

First we want to insert some testdata into our database. In this example just two labels for buttons. But it can be anything you would normally store in a MongoDB.

:::note
> 💡If you already have testdata in your database you can skip this step.
:::

```typescript
describe('jest with askui', () => {
  let buttons: Collection<Document>;

  beforeAll(async () => {
    // (Re-)Setting up db (may not be necessary
    // if the data in the db does not change and
    // is set up beforehand)
    buttons = mongodb.collection('buttons');
    await buttons.insertOne({ label: 'CHECK OUT THE DOCS' });
    await buttons.insertOne({ label: 'CONTACT SUPPORT' });
  });
});
```

You can now use the testdata in any subsequent test. Let us try to click the buttons with the labels we just stored before.

```typescript
it('should click on buttons with a label', async () => {
    const buttonsCursor = buttons.find();
    let nextButton = await buttonsCursor.next();
    while (nextButton !== null) {
      await aui.click().button().withText(nextButton.label).exec();
      nextButton = await buttonsCursor.next();
    }
  });
```

## Example Repository

We also provide an [example repository on Github](https://github.com/askui/askui-mongodb-example) where you can check out the full setup described here 🙂.
