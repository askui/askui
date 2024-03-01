"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71292],{40620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(17624),o=n(4552);const i={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},s="XRAY",a={id:"askui-studio/All-Integrations/xray",title:"XRAY",description:"The integration with XRAY is best done over their API. We will show you how to create a report compatible with XRay (Unit-XML-Standard and proprietary XRAY JSON). Then we describe how to transfer the report to XRAY.",source:"@site/versioned_docs/version-0.14.0/askui-studio/03-All-Integrations/05-xray.md",sourceDirName:"askui-studio/03-All-Integrations",slug:"/askui-studio/All-Integrations/xray",permalink:"/docs/askui-studio/All-Integrations/xray",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.14.0",sidebarPosition:5,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"MongoDB",permalink:"/docs/askui-studio/All-Integrations/mongodb"},next:{title:"Webhook / API Call (coming soon)",permalink:"/docs/askui-studio/All-Integrations/webhook-api-call"}},l={},c=[{value:"Generate Unit-XML With Your AskUI Workflow Run",id:"generate-unit-xml-with-your-askui-workflow-run",level:2},{value:"Generate XRAY-JSON With Your AskUI Workflow  Run",id:"generate-xray-json-with-your-askui-workflow--run",level:2},{value:"Installation",id:"installation",level:3},{value:"Enable and Configure the AskUIXRayStepReporter in\xa0<code>askui-helper.ts</code>",id:"enable-and-configure-the-askuixraystepreporter-inaskui-helperts",level:3},{value:"Configure\xa0<code>jest-xray-environment</code>\xa0in\xa0<code>jest.config.ts</code>",id:"configurejest-xray-environmentinjestconfigts",level:3},{value:"Upload over XRay-API in your CI-Pipeline",id:"upload-over-xray-api-in-your-ci-pipeline",level:2},{value:"Github",id:"github",level:2},{value:"Gitlab",id:"gitlab",level:2},{value:"Azure DevOps",id:"azure-devops",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"xray",children:"XRAY"}),"\n",(0,r.jsx)(t.p,{children:"The integration with XRAY is best done over their API. We will show you how to create a report compatible with XRay (Unit-XML-Standard and proprietary XRAY JSON). Then we describe how to transfer the report to XRAY."}),"\n",(0,r.jsx)(t.h2,{id:"generate-unit-xml-with-your-askui-workflow-run",children:"Generate Unit-XML With Your AskUI Workflow Run"}),"\n",(0,r.jsx)(t.p,{children:"Unit-XML is a de-facto standard for test reports and XRAY supports it."}),"\n",(0,r.jsxs)(t.p,{children:["In your AskUI-node-project install the package ",(0,r.jsx)(t.strong,{children:"jest-junit"})," which will install a reporter that creates Unit-XML reports when you run workflows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-junit\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then you need to activate it in ",(0,r.jsx)(t.code,{children:"askui_example/jest.config.ts"})," by adding it to the config-object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'...\n\nconst config: Config.InitialOptions = {\n  ...\n  **reporters: [ "default", "jest-junit" ],\n  ...**\n};\n\n...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you run your workflow(s) the XML-Reports are created in the root folder of your project. Please check the ",(0,r.jsx)(t.a,{href:"https://github.com/jest-community/jest-junit#readme",children:"homepage of jest-junit"})," for more configuration options."]}),"\n",(0,r.jsx)(t.h2,{id:"generate-xray-json-with-your-askui-workflow--run",children:"Generate XRAY-JSON With Your AskUI Workflow  Run"}),"\n",(0,r.jsxs)(t.p,{children:["If you need reporting on a step-level you need a report in XRAY-JSON format. We provide a custom step reporter ",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"})," that creates the JSON for you."]}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Install\xa0",(0,r.jsx)(t.code,{children:"@askui/askui-reporters"}),"\xa0as a dev-dependency in your AskUI project:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @askui/askui-reporters\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"enable-and-configure-the-askuixraystepreporter-inaskui-helperts",children:["Enable and Configure the AskUIXRayStepReporter in\xa0",(0,r.jsx)(t.code,{children:"askui-helper.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["You have to do a few things in your\xa0",(0,r.jsx)(t.code,{children:"askui-helper.ts"}),"\xa0to enable the\xa0",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"}),":"]}),"\n",(0,r.jsxs)(t.p,{children:["\u2139\ufe0f\xa0INFO: We will try to move this into the custom\xa0",(0,r.jsx)(t.code,{children:"testEnvironment"}),"\xa0we provide."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Import the reporter"}),"\n",(0,r.jsx)(t.li,{children:"Initialize the reporter"}),"\n",(0,r.jsxs)(t.li,{children:["Add it to the\xa0",(0,r.jsx)(t.code,{children:"UiControlClient"})]}),"\n",(0,r.jsxs)(t.li,{children:["Modify before\xa0",(0,r.jsx)(t.code,{children:"beforeEach()"}),"\xa0and\xa0",(0,r.jsx)(t.code,{children:"afterEach()"}),"\xa0hook to create/finish\xa0",(0,r.jsx)(t.code,{children:"TestEntries"})]}),"\n",(0,r.jsxs)(t.li,{children:["Add writing the report to\xa0",(0,r.jsx)(t.code,{children:"afterAll()"}),"\xa0hook"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { UiControlClient, UiController } from 'askui';\n\n/* 1 Import the reporter */\nimport { AskUIXRayStepReporter } from '@askui/askui-reporters';\n\n...\n\n/* 2 Initialize the reporter */\nlet xRayReporter = new AskUIXRayStepReporter({\n    withScreenshots: 'always',\n  });\n\nbeforeAll(async () => {\n  ...\n  aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    },\n    /* 3 Enable reporter */\n    reporter: xRayReporter,\n  });\n\n  await aui.connect();\n});\n\n/* 4 Create TestEntry with name of test from it-block */\nbeforeEach(async () => {\n  xRayReporter.createNewTestEntry(global.testName);\n});\n\n/* 4 Finish TestEntry with the test status */\nafterEach(async () => {\n  xRayReporter.finishTestEntry(global.testStatus);\n});\n\nafterAll(async () => {\n  /* 5 Writing the report */\n  await xRayReporter.writeReport();\n  aui.disconnect();\n  await uiController.stop();\n});\n\nexport { aui };\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"configurejest-xray-environmentinjestconfigts",children:["Configure\xa0",(0,r.jsx)(t.code,{children:"jest-xray-environment"}),"\xa0in\xa0",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["For the\xa0",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"}),"\xa0step reporter to work properly you need a special\xa0",(0,r.jsx)(t.code,{children:"testEnvironment"}),"\xa0that provides the names from the\xa0",(0,r.jsx)(t.code,{children:"it"}),"-blocks used to create the JSON-Objects for each test. Configure the\xa0",(0,r.jsx)(t.code,{children:"testEnvironment"}),"\xa0in your\xa0",(0,r.jsx)(t.code,{children:"jest.config.ts"}),"\xa0as shown in the code below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  // This uses cjs module system\n  // Replace cjs with esm if your project uses esm\n  testEnvironment: '@askui/askui-reporters/dist/cjs/xray/jest-xray-environment.js',\n  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  reporters: [ \"default\", \"jest-junit\" ]\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"upload-over-xray-api-in-your-ci-pipeline",children:"Upload over XRay-API in your CI-Pipeline"}),"\n",(0,r.jsxs)(t.p,{children:["Following we describe how to transfer the created XRAY-JSON/XML-Report(s) to XRay in your continuous integration pipeline. For the sake of simplicity we assume there is no special configuration and the XRAY-JSON/XML-Report is saved to the file ",(0,r.jsx)(t.code,{children:"xray-report/report.json"})," / ",(0,r.jsx)(t.code,{children:"junit.xml"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Please consult the ",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAYCLOUD/Import+Execution+Results+-+REST+v2#ImportExecutionResultsRESTv2-XrayJSONresults",children:"official XRAY-Docs"})," for more information about the import endpoint for XRAY-JSON (for XML: ",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAYCLOUD/Import+Execution+Results+-+REST+v2#ImportExecutionResultsRESTv2-JUnitXMLresults",children:"official XRAY-Docs"}),"). You also need a ",(0,r.jsx)(t.code,{children:"client_id"})," and a ",(0,r.jsx)(t.code,{children:"client_secret"})," so you can request a ",(0,r.jsx)(t.code,{children:"bearer-token"})," (",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAYCLOUD/Authentication+-+REST+v2",children:"See official docs"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["If you need help with setting up your CI-Pipeline in the first place, please consult ",(0,r.jsx)(t.a,{href:"/docs/general/Integrations/continuous-integration",children:"our continuous integration docs"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"github",children:"Github"}),"\n",(0,r.jsxs)(t.p,{children:["Below you find the step you need to transfer the report file ",(0,r.jsx)(t.code,{children:"junit.xml"})," to XRAY. Do not forget to set the variables (",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAY740/Integration+with+GitHub",children:"See also official docs"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'- name: Submit results to Xray\n  env:\n    CLIENT_ID: ${{ secrets.client_id }}\n    CLIENT_SECRET: ${{ secrets.client_secret }}\n    JIRA_SERVER_URL: ${{ secrets.jira_server_url }}\n    PROJECT_KEY: ${{ secrets.project_key }}\n  run: |\n    token=$(curl -H "Content-Type: application/json" -X POST --data \'{ "client_id": "$CLIENT_ID","client_secret": "$CLIENT_SECRET" }\' $JIRA_SERVER_URL/api/v2/authenticate)\n    \n    # XRAY-JSON\n    curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"\n\n    # XML\n    curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "$JIRA_SERVER_URL/api/v2/import/execution/junit?projectKey=$PROJECT_KEY"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"gitlab",children:"Gitlab"}),"\n",(0,r.jsxs)(t.p,{children:["Below you find the step you need to transfer the report file ",(0,r.jsx)(t.code,{children:"junit.xml"})," to XRAY. Do not forget to set the variables (",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAY740/Integration+with+GitLab",children:"See also official docs"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'# Example how to make junit.xml available\nrun-askui-job:\n  script:\n    - npm run askui\n  artifacts:\n    paths:\n    - junit.xml\n    expire_in: 1 week\n\n# Expects the file junit.xml to be\n# made available through another step\ntransfer-report-to-xray-job:\n  script:\n    - echo "Transfer report to XRAY"\n    - token=$(curl -H "Content-Type: application/json" -X POST --data \'{ "client_id": "${CLIENT_ID}","client_secret": "${CLIENT_SECRET}" }\' $JIRA_SERVER_URL/api/v2/authenticate)\n    \n    - # XRAY-JSON\n    - curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"\n\n    - # XML\n    - curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "${JIRA_SERVER_URL}/api/v2/import/execution/junit?projectKey=${PROJECT_KEY}"\n    \n    - echo "done"\n  variables:\n    CLIENT_ID: $CLIENT_ID\n    CLIENT_SECRET: $CLIENT_SECRET\n    JIRA_SERVER_URL: $JIRA_SERVER_URL\n    PROJECT_KEY: $PROJECT_KEY\n  needs:\n    - run-askui-job\n'})}),"\n",(0,r.jsx)(t.h2,{id:"azure-devops",children:"Azure DevOps"}),"\n",(0,r.jsxs)(t.p,{children:["Below you find the step you need to transfer the report file ",(0,r.jsx)(t.code,{children:"junit.xml"})," to XRAY. Do not forget to set the variables (",(0,r.jsx)(t.a,{href:"https://docs.getxray.app/display/XRAY740/Integration+with+Azure+DevOps",children:"See also official docs"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'steps:\n- bash: |\n    ...\n    npm run askui\n- bash: |\n    token=$(curl -H "Content-Type: application/json" -X POST --data \'{ "client_id": "${CLIENT_ID}","client_secret": "${CLIENT_SECRET}" }\' $JIRA_SERVER_URL/api/v2/authenticate)\n    \n    # XRAY-JSON\n    curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer $token"  --data @"xray-report/report.json" "${JIRA_SERVER_URL}/api/v2/import/execution"\n\n    # XML\n    curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" "${JIRA_SERVER_URL}/api/v2/import/execution/junit?projectKey=${PROJECT_KEY}"\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var r=n(11504);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);