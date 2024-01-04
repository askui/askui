"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1770],{33938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),i=t(11151);const s={sidebar_position:2,title:"Docker"},o="Docker",a={id:"general/Integrations/containers",title:"Docker",description:"AskUI UI Controller Docker Images",source:"@site/versioned_docs/version-0.13.1/general/05-Integrations/containers.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/containers",permalink:"/docs/general/Integrations/containers",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/05-Integrations/containers.md",tags:[],version:"0.13.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Docker"},sidebar:"docsSidebar",previous:{title:"Continuous Integration",permalink:"/docs/general/Integrations/continuous-integration copy"},next:{title:"Reporting",permalink:"/docs/general/Integrations/reporting"}},l={},c=[{value:"AskUI UI Controller Docker Images",id:"askui-ui-controller-docker-images",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Tag Naming Schema",id:"tag-naming-schema",level:3},{value:"Usage",id:"usage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Starting Container <em>Manually</em>",id:"starting-container-manually",level:3},{value:"Connect to the Container with AskUI SDK",id:"connect-to-the-container-with-askui-sdk",level:3},{value:"Connect via VNC",id:"connect-via-vnc",level:3},{value:"Starting Container from Within <code>beforeAll()</code> Using Testcontainers",id:"starting-container-from-within-beforeall-using-testcontainers",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.h2,{id:"askui-ui-controller-docker-images",children:"AskUI UI Controller Docker Images"}),"\n",(0,r.jsxs)(n.p,{children:["We maintain Docker images for running instructions with AskUI inside a Docker Container, e.g., locally or in a CI/CD pipeline. The images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the ",(0,r.jsx)(n.em,{children:"UiController"}),") and a browser. The AskUI SDK connects to the UI Controller inside the Docker container to execute workflows inside it."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find our images on ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/askuigmbh/askui-ui-controller",children:"DockerHub"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If you are on an ARM architecture such as Apple Silicon, you can ",(0,r.jsx)(n.em,{children:"NOT"})," run the images at the moment!"]})}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SE_SCREEN_WIDTH"}),(0,r.jsx)(n.td,{children:"1360"}),(0,r.jsx)(n.td,{children:"Sets the screen width"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SE_SCREEN_HEIGHT"}),(0,r.jsx)(n.td,{children:"1020"}),(0,r.jsx)(n.td,{children:"Sets the screen height"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SE_SCREEN_DEPTH"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GOOGLE_CHROME_ARGS"}),(0,r.jsx)(n.td,{children:"empty"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ASKUI_CONTROLLER_ARGS"}),(0,r.jsx)(n.td,{children:"empty"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VERBOSE"}),(0,r.jsx)(n.td,{children:"empty"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"tag-naming-schema",children:"Tag Naming Schema"}),"\n",(0,r.jsx)(n.p,{children:"We use the following tag schema:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<controller-version>-<browser-name>-<browser-version>-amd64\n\n# browser-name: chrome only for now\n\n# Example\n0.11.2-chrome-119.0.6045.123-amd64\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2757\ufe0f ",(0,r.jsx)(n.code,{children:"<controller-version>"})," is ",(0,r.jsx)(n.em,{children:"NOT"})," the ",(0,r.jsx)(n.code,{children:"AskUI SDK"})," version \u2757\ufe0f"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Docker (",(0,r.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Download here"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["AskUI Development Environment (",(0,r.jsx)(n.a,{href:"/docs/general/Getting%20Started/getting-started",children:"Windows"}),", ",(0,r.jsx)(n.a,{href:"/docs/general/Getting%20Started/getting-started-linux",children:"Linux"}),", ",(0,r.jsx)(n.a,{href:"/docs/general/Getting%20Started/getting-started-macos",children:"macOS"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You will only need the Docker CLI but you can install Docker Desktop, too if you want."}),"\n",(0,r.jsxs)(n.h3,{id:"starting-container-manually",children:["Starting Container ",(0,r.jsx)(n.em,{children:"Manually"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can pull an image using ",(0,r.jsx)(n.code,{children:"docker pull"}),", e.g.,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker pull askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64\n"})}),"\n",(0,r.jsx)(n.p,{children:"and, then, start the corresponding container using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -p 6769:6769 -p 7900:7900 askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["AskUI UI Controller: ",(0,r.jsx)(n.code,{children:"6769"})]}),"\n",(0,r.jsxs)(n.li,{children:["No_VNC: ",(0,r.jsx)(n.code,{children:"7900"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Password for No_VNC is ",(0,r.jsx)(n.code,{children:"secret"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"connect-to-the-container-with-askui-sdk",children:"Connect to the Container with AskUI SDK"}),"\n",(0,r.jsxs)(n.p,{children:["You have to adjust the ",(0,r.jsx)(n.code,{children:"askui_example/helpers/askui-helper.ts"})," that is created when running ",(0,r.jsx)(n.code,{children:"npx askui@latest init"}),", because the ",(0,r.jsx)(n.code,{children:"UiControlClient"})," connects to the ",(0,r.jsx)(n.code,{children:"UiController"})," running inside the Docker container:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove everything related to ",(0,r.jsx)(n.code,{children:"uiController"})]}),"\n",(0,r.jsx)(n.li,{children:"Check your credentials"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.em,{children:["Optional: Set the ",(0,r.jsx)(n.code,{children:"uiControllerUrl"})," in ",(0,r.jsx)(n.code,{children:"UiControlClient"})," if you exposed the UI Controller on a different port (see ",(0,r.jsx)(n.a,{href:"/docs/api/Configuration/askui-ui-control-client",children:"UI Control Client API Docs"})," for more information"]})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"It should look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/helper/askui-helper.ts" showLineNumbers',children:"import { UiControlClient, UiController } from 'askui';\nimport { AskUIAllureStepReporter } from '@askui/askui-reporters';\n\n// Client is necessary to use the askui API\nlet aui: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n\n  aui = await UiControlClient.build({\n    // Uncomment next line when you did NOT expose the AskUI UI Controller on port 6769\n    // uiControllerUrl: http://127.0.0.1:<Insert your port here>',\n    credentials: {\n      workspaceId: '<Insert your workspace id here>',\n      token: '<Insert your access token here>',\n    },\n    reporter: new AskUIAllureStepReporter(),\n  });\n\n  await aui.connect();\n});\n\nbeforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIAllureStepReporter.attachVideo(video);\n});\n\nafterAll(async () => {\n  aui.disconnect();\n});\n\nexport { aui };\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you initialized your AskUI project with an older version of AskUI or upgraded from an older version you may not have a ",(0,r.jsx)(n.code,{children:"askui_example/helpers/askui-helper.ts"})," file. Please apply the changes in ",(0,r.jsx)(n.code,{children:"test/helpers/jest.setup.ts"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"connect-via-vnc",children:"Connect via VNC"}),"\n",(0,r.jsxs)(n.p,{children:["To check what is happening inside a running container, you can connect via VNC. For this, you need to open a browser and navigate to ",(0,r.jsx)(n.code,{children:"http://localhost:7900"}),". When ",(0,r.jsx)(n.a,{href:"#starting-container-from-within-beforeall-using-testcontainers",children:"using the testcontainers example code"}),", the VNC port to connect to is logged to the console."]}),"\n",(0,r.jsxs)(n.p,{children:["When connecting, enter the password ",(0,r.jsx)(n.code,{children:"secret"})," when asked."]}),"\n",(0,r.jsx)(n.p,{children:"Example of a VNC connection with a Chrome browser running inside a container:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VNC Example",src:t(16220).Z+"",width:"2562",height:"1415"})}),"\n",(0,r.jsxs)(n.h2,{id:"starting-container-from-within-beforeall-using-testcontainers",children:["Starting Container from Within ",(0,r.jsx)(n.code,{children:"beforeAll()"})," Using Testcontainers"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/testcontainers/testcontainers-node",children:"Testcontainers"})," is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards."]}),"\n",(0,r.jsx)(n.p,{children:"To use it, first install it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm i -D testcontainers\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After that, you can adjust the ",(0,r.jsx)(n.code,{children:"askui_example/helpers/askui-helper.ts"})," that is created when running ",(0,r.jsx)(n.code,{children:"npx askui@latest init"})," The following example starts the AskUI container and connects to it just before all instructions are run:"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you initialized your AskUI project with an older version of AskUI or upgraded from an older version you may not have a ",(0,r.jsx)(n.code,{children:"test/helpers/askui-helper.ts"})," file. Please apply the changes in ",(0,r.jsx)(n.code,{children:"test/helpers/jest.setup.ts"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { UiControlClient } from 'askui';\nimport { GenericContainer, StartedTestContainer } from 'testcontainers';\n\njest.setTimeout(60 * 1000 * 60);\n\nfunction getDockerImageName(): string {\n  const askuiUiControllerVersion = '0.11.2';\n  const browser = 'chrome';\n  const browserVersion = '119.0';\n  const osArch = 'amd64';\n  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;\n}\n\nasync function startTestContainer(): Promise<StartedTestContainer> {\n  const container = await new GenericContainer(getDockerImageName())\n    .withEnvironment({\n      'SE_SCREEN_WIDTH': '1920',\n      'SE_SCREEN_HEIGHT': '1080',\n    })\n    .withExposedPorts(6769, 7900)\n    .start();\n\n  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(7900)}`);\n\n  return container;\n}\n\nlet testContainer: StartedTestContainer;\n\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\nbeforeAll(async () => {\n  testContainer = await startTestContainer();\n\n  aui = await UiControlClient.build({\n    uiControllerUrl: `http://127.0.0.1:${testContainer.getMappedPort(6769)}`,\n    credentials: {\n      workspaceId: '<Insert your workspace id here>',\n      token: '<Insert your access token here>',\n    },\n    reporter: new AskUIAllureStepReporter(),\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n  aui.disconnect();\n\n  await testContainer.stop();\n});\n\nexport { aui };\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},16220:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vnc-example-9077144d46d3f03f74248609d25a18a5.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);