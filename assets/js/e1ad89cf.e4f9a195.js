"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1016],{75144:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(85893),i=t(11151);const s={sidebar_position:2,title:"Docker"},o="Docker",a={id:"general/Integrations/containers",title:"Docker",description:"AskUI UI Controller Docker Images",source:"@site/docs/general/05-Integrations/containers.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/containers",permalink:"/docs/next/general/Integrations/containers",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/05-Integrations/containers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Docker"},sidebar:"docsSidebar",previous:{title:"Continuous Integration",permalink:"/docs/next/general/Integrations/continuous-integration copy"},next:{title:"Reporting",permalink:"/docs/next/general/Integrations/reporting"}},c={},l=[{value:"AskUI UI Controller Docker Images",id:"askui-ui-controller-docker-images",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Usage",id:"usage",level:3},{value:"Starting Container <em>Manually</em>",id:"starting-container-manually",level:3},{value:"Starting Container from Within <code>beforeAll()</code> Using Testcontainers",id:"starting-container-from-within-beforeall-using-testcontainers",level:3},{value:"Tag Naming Schema",id:"tag-naming-schema",level:2},{value:"Connect via VNC",id:"connect-via-vnc",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(e.h2,{id:"askui-ui-controller-docker-images",children:"AskUI UI Controller Docker Images"}),"\n",(0,r.jsxs)(e.p,{children:["We maintain Docker images for running instructions with AskUI inside a Docker Container, e.g., locally or in a CI/CD pipeline. The images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the ",(0,r.jsx)(e.em,{children:"UiController"}),") and a browser. The AskUI SDK connects to the UI Controller inside the Docker container to execute workflows inside it."]}),"\n",(0,r.jsxs)(e.p,{children:["You can find our images on ",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/askuigmbh/askui-ui-controller",children:"DockerHub"}),"."]}),"\n",(0,r.jsx)(e.admonition,{type:"caution",children:(0,r.jsxs)(e.p,{children:["If you are on an ARM architecture such as Apple Silicon, you can ",(0,r.jsx)(e.em,{children:"NOT"})," run the images at the moment!"]})}),"\n",(0,r.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(e.p,{children:"The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Variable"}),(0,r.jsx)(e.th,{children:"Default Value"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SE_SCREEN_WIDTH"}),(0,r.jsx)(e.td,{children:"1360"}),(0,r.jsx)(e.td,{children:"Sets the screen width"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SE_SCREEN_HEIGHT"}),(0,r.jsx)(e.td,{children:"1020"}),(0,r.jsx)(e.td,{children:"Sets the screen height"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SE_SCREEN_DEPTH"}),(0,r.jsx)(e.td,{children:"24"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GOOGLE_CHROME_ARGS"}),(0,r.jsx)(e.td,{children:"empty"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ASKUI_CONTROLLER_ARGS"}),(0,r.jsx)(e.td,{children:"empty"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VERBOSE"}),(0,r.jsx)(e.td,{children:"empty"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(e.h3,{id:"starting-container-manually",children:["Starting Container ",(0,r.jsx)(e.em,{children:"Manually"})]}),"\n",(0,r.jsxs)(e.p,{children:["You can pull an image using ",(0,r.jsx)(e.code,{children:"docker pull"}),", e.g.,"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"docker pull askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64\n"})}),"\n",(0,r.jsx)(e.p,{children:"and, then, start the corresponding container using:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"docker run -p 6769:6769 -p 7900:7900 askuigmbh/askui-ui-controller:0.11.2-chrome-119.0-amd64\n"})}),"\n",(0,r.jsx)(e.p,{children:"Ports:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["AskUI UI Controller: ",(0,r.jsx)(e.code,{children:"6769"})]}),"\n",(0,r.jsxs)(e.li,{children:["No_VNC: ",(0,r.jsx)(e.code,{children:"7900"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Password for No_VNC is ",(0,r.jsx)(e.code,{children:"secret"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"starting-container-from-within-beforeall-using-testcontainers",children:["Starting Container from Within ",(0,r.jsx)(e.code,{children:"beforeAll()"})," Using Testcontainers"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/testcontainers/testcontainers-node",children:"Testcontainers"})," is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards."]}),"\n",(0,r.jsx)(e.p,{children:"To use it, first install it:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"npm i -D testcontainers\n"})}),"\n",(0,r.jsxs)(e.p,{children:["After that, you can adjust the ",(0,r.jsx)(e.code,{children:"askui-helper.ts"})," that is created when running ",(0,r.jsx)(e.code,{children:"npx askui init"})," like in the following example starting the AskUI container just before all instructions are run and connecting to it:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { UiControlClient } from 'askui';\nimport { GenericContainer, StartedTestContainer } from 'testcontainers';\n\njest.setTimeout(60 * 1000 * 60);\n\nfunction getDockerImageName(): string {\n  const askuiUiControllerVersion = 'v0.11.2';\n  const browser = 'chrome';\n  const browserVersion = '119.0';\n  const osArch = 'amd64';\n  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;\n}\n\nasync function startTestContainer(): Promise<StartedTestContainer> {\n  const container = await new GenericContainer(getDockerImageName())\n    .withEnv('SE_SCREEN_WIDTH', '1920')\n    .withEnv('SE_SCREEN_HEIGHT', '1080')\n    .withExposedPorts(6769, 7900)\n    .start();\n\n  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(7900)}`);\n\n  return container;\n}\n\nlet testContainer: StartedTestContainer;\n\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\nbeforeAll(async () => {\n  testContainer = await startTestContainer();\n\n  aui = await UiControlClient.build({\n    uiControllerUrl: `http://127.0.0.1:${testContainer.getMappedPort(6769)}`,\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n  aui.disconnect();\n\n  await testContainer.stop();\n});\n\nexport { aui };\n\n"})}),"\n",(0,r.jsx)(e.h2,{id:"tag-naming-schema",children:"Tag Naming Schema"}),"\n",(0,r.jsx)(e.p,{children:"We use the following tag schema:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<controller-version>-<browser-name>-<browser-version>-amd64\n\n# browser-name: chrome only for now\n\n# Example\n0.11.2-chrome-119.0.6045.123-amd64\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2757\ufe0f ",(0,r.jsx)(e.code,{children:"<controller-version>"})," is ",(0,r.jsx)(e.em,{children:"NOT"})," the ",(0,r.jsx)(e.code,{children:"AskUI SDK"})," version \u2757\ufe0f"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"connect-via-vnc",children:"Connect via VNC"}),"\n",(0,r.jsxs)(e.p,{children:["To check what is happening inside a running container, you can connect via VNC. For this, you need to open a browser and navigate to ",(0,r.jsx)(e.code,{children:"http://localhost:7900"}),". When ",(0,r.jsx)(e.a,{href:"#starting-container-from-within-beforeall-using-testcontainers",children:"using the testcontainers example code"}),", the VNC port to connect to is logged to the console."]}),"\n",(0,r.jsxs)(e.p,{children:["When connecting, enter the password ",(0,r.jsx)(e.code,{children:"secret"})," when asked."]}),"\n",(0,r.jsx)(e.p,{children:"Example of a VNC connection with a Chrome browser running inside a container:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"VNC Example",src:t(29396).Z+"",width:"2562",height:"1415"})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},29396:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/vnc-example-9077144d46d3f03f74248609d25a18a5.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);