---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# XRAY
The integration with XRAY is best done over their API. We will show you how to create a report compatible with XRay (Unit-XML-Standard and proprietary XRAY JSON). Then we describe how to transfer the report to XRAY.

## Generate Unit-XML With Your AskUI Workflow Run

Unit-XML is a de-facto standard for test reports and XRAY supports it.

In your AskUI-node-project install the package **jest-junit** which will install a reporter that creates Unit-XML reports when you run workflows:

```bash
npm install --save-dev jest-junit
```

Then you need to activate it in `askui_example/jest.config.ts` by adding it to the config-object:

```typescript
...

const config: Config.InitialOptions = {
  ...
  **reporters: [ "default", "jest-junit" ],
  ...**
};

...
```

When you run your workflow(s) the XML-Reports are created in the root folder of your project. Please check the [homepage of jest-junit](https://github.com/jest-community/jest-junit#readme) for more configuration options.

## Generate XRAY-JSON With Your AskUI Workflow  Run

If you need reporting on a step-level you need a report in XRAY-JSON format. We provide a custom step reporter `AskUIXRayStepReporter` that creates the JSON for you.

### Installation

Install `@askui/askui-reporters` as a dev-dependency in your AskUI project:

```bash
npm install --save-dev @askui/askui-reporters
```

### Enable and Configure the AskUIXRayStepReporter in `askui-helper.ts`

You have to do a few things in your `askui-helper.ts` to enable the `AskUIXRayStepReporter`:

ℹ️ INFO: We will try to move this into the custom `testEnvironment` we provide.

1. Import the reporter
2. Initialize the reporter
3. Add it to the `UiControlClient`
4. Modify before `beforeEach()` and `afterEach()` hook to create/finish `TestEntries`
5. Add writing the report to `afterAll()` hook

```typescript
import { UiControlClient, UiController } from 'askui';

/* 1 Import the reporter */
import { AskUIXRayStepReporter } from '@askui/askui-reporters';

...

/* 2 Initialize the reporter */
let xRayReporter = new AskUIXRayStepReporter({
    withScreenshots: 'always',
  });

beforeAll(async () => {
  ...
  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
    /* 3 Enable reporter */
    reporter: xRayReporter,
  });

  await aui.connect();
});

/* 4 Create TestEntry with name of test from it-block */
beforeEach(async () => {
  xRayReporter.createNewTestEntry(global.testName);
});

/* 4 Finish TestEntry with the test status */
afterEach(async () => {
  xRayReporter.finishTestEntry(global.testStatus);
});

afterAll(async () => {
  /* 5 Writing the report */
  await xRayReporter.writeReport();
  aui.disconnect();
  await uiController.stop();
});

export { aui };
```

### Configure `jest-xray-environment` in `jest.config.ts`

For the `AskUIXRayStepReporter` step reporter to work properly you need a special `testEnvironment` that provides the names from the `it`-blocks used to create the JSON-Objects for each test. Configure the `testEnvironment` in your `jest.config.ts` as shown in the code below:

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  // This uses cjs module system
  // Replace cjs with esm if your project uses esm
  testEnvironment: '@askui/askui-reporters/dist/cjs/xray/jest-xray-environment.js',
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
  reporters: [ "default", "jest-junit" ]
};

// eslint-disable-next-line import/no-default-export
export default config;
```

## Upload over XRay-API in your CI-Pipeline

Following we describe how to transfer the created XRAY-JSON/XML-Report(s) to XRay in your continuous integration pipeline. For the sake of simplicity we assume there is no special configuration and the XRAY-JSON/XML-Report is saved to the file `xray-report/report.json` / `junit.xml`.

Please consult the [official XRAY-Docs](https://docs.getxray.app/display/XRAYCLOUD/Import+Execution+Results+-+REST+v2#ImportExecutionResultsRESTv2-XrayJSONresults) for more information about the import endpoint for XRAY-JSON (for XML: [official XRAY-Docs](https://docs.getxray.app/display/XRAYCLOUD/Import+Execution+Results+-+REST+v2#ImportExecutionResultsRESTv2-JUnitXMLresults)). You also need a `client_id` and a `client_secret` so you can request a `bearer-token` ([See official docs](https://docs.getxray.app/display/XRAYCLOUD/Authentication+-+REST+v2)).

If you need help with setting up your CI-Pipeline in the first place, please consult [our continuous integration docs](../../general/05-Integrations/continuous-integration.md).

## Github

Below you find the step you need to transfer the report file `junit.xml` to XRAY. Do not forget to set the variables ([See also official docs](https://docs.getxray.app/display/XRAY740/Integration+with+GitHub)):

```yaml
- name: Submit results to Xray
  env:
    CLIENT_ID: ${{ secrets.client_id }}
    CLIENT_SECRET: ${{ secrets.client_secret }}
    JIRA_SERVER_URL: ${{ secrets.jira_server_url }}
    PROJECT_KEY: ${{ secrets.project_key }}
  run: |
    token=$(curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "$CLIENT_ID","client_secret": "$CLIENT_SECRET" }' $JIRA_SERVER_URL/api/v2/authenticate)
    
    # XRAY-JSON
    curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"

    # XML
    curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "$JIRA_SERVER_URL/api/v2/import/execution/junit?projectKey=$PROJECT_KEY"
```

## Gitlab

Below you find the step you need to transfer the report file `junit.xml` to XRAY. Do not forget to set the variables ([See also official docs](https://docs.getxray.app/display/XRAY740/Integration+with+GitLab)):

```yaml
# Example how to make junit.xml available
run-askui-job:
  script:
    - npm run askui
  artifacts:
    paths:
    - junit.xml
    expire_in: 1 week

# Expects the file junit.xml to be
# made available through another step
transfer-report-to-xray-job:
  script:
    - echo "Transfer report to XRAY"
    - token=$(curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "${CLIENT_ID}","client_secret": "${CLIENT_SECRET}" }' $JIRA_SERVER_URL/api/v2/authenticate)
    
    - # XRAY-JSON
    - curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"

    - # XML
    - curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "${JIRA_SERVER_URL}/api/v2/import/execution/junit?projectKey=${PROJECT_KEY}"
    
    - echo "done"
  variables:
    CLIENT_ID: $CLIENT_ID
    CLIENT_SECRET: $CLIENT_SECRET
    JIRA_SERVER_URL: $JIRA_SERVER_URL
    PROJECT_KEY: $PROJECT_KEY
  needs:
    - run-askui-job
```

## Azure DevOps

Below you find the step you need to transfer the report file `junit.xml` to XRAY. Do not forget to set the variables ([See also official docs](https://docs.getxray.app/display/XRAY740/Integration+with+Azure+DevOps)):

```yaml
steps:
- bash: |
    ...
    npm run askui
- bash: |
    token=$(curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "${CLIENT_ID}","client_secret": "${CLIENT_SECRET}" }' $JIRA_SERVER_URL/api/v2/authenticate)
    
    # XRAY-JSON
    curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"

    # XML
    curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "${JIRA_SERVER_URL}/api/v2/import/execution/junit?projectKey=${PROJECT_KEY}"
```
