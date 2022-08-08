"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29107],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={custom_edit_url:null},i="askui UI Controller Docker Images",l={unversionedId:"general/Continuous Integration/askui-ui-controller-docker-images",id:"version-0.2.2/general/Continuous Integration/askui-ui-controller-docker-images",title:"askui UI Controller Docker Images",description:"We maintain Docker Images for running tests with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The Images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the UiController) and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the test steps inside it.",source:"@site/versioned_docs/version-0.2.2/general/04-Continuous Integration/askui-ui-controller-docker-images.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/askui-ui-controller-docker-images",permalink:"/docs/general/Continuous Integration/askui-ui-controller-docker-images",draft:!1,editUrl:null,tags:[],version:"0.2.2",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Speed Up Execution",permalink:"/docs/general/Best Practice/speed_up_execution"},next:{title:"Gitlab CI/CD",permalink:"/docs/general/Continuous Integration/gitlab-ci"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Starting Container <em>Manually</em>",id:"starting-container-manually",level:3},{value:"Starting Container from Within <code>beforeAll()</code> Using Testcontainers",id:"starting-container-from-within-beforeall-using-testcontainers",level:3},{value:"Connect via VNC",id:"connect-via-vnc",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"askui-ui-controller-docker-images"},"askui UI Controller Docker Images"),(0,a.kt)("p",null,"We maintain Docker Images for running tests with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The Images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the ",(0,a.kt)("em",{parentName:"p"},"UiController"),") and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the test steps inside it."),(0,a.kt)("p",null,"You can find our images on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/askuigmbh/askui-ui-controller"},"DockerHub"),"."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"ARM CPUs"),": are currently not supported"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ENABLE_VNC"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," to enable VNC so that you can connect and observe whats happening inside the container. The VNC server is bound to port ",(0,a.kt)("inlineCode",{parentName:"td"},"5900")," of the container.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCREEN_RESOLUTION"),(0,a.kt)("td",{parentName:"tr",align:null},"1920x1080"),(0,a.kt)("td",{parentName:"tr",align:null},"The screen resolution used inside the container in the format ",(0,a.kt)("inlineCode",{parentName:"td"},"<width>x<height>"),".")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The askui UI Controller is bound to port ",(0,a.kt)("inlineCode",{parentName:"p"},"6769")," of the container so this needs to be exposed."),(0,a.kt)("h3",{id:"starting-container-manually"},"Starting Container ",(0,a.kt)("em",{parentName:"h3"},"Manually")),(0,a.kt)("p",null,"You can pull an Image using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull"),", e.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull askuigmbh/askui-ui-controller:v0.10.0-firefox-82.0.3-amd64\n")),(0,a.kt)("p",null,"and, then, start the corresponding Container using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -e ENABLE_VNC=true -p 6769:6769 -p 5900:5900 askuigmbh/askui-ui-controller:v0.10.0-firefox-82.0.3-amd64\n")),(0,a.kt)("h3",{id:"starting-container-from-within-beforeall-using-testcontainers"},"Starting Container from Within ",(0,a.kt)("inlineCode",{parentName:"h3"},"beforeAll()")," Using Testcontainers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-node"},"Testcontainers")," is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards."),(0,a.kt)("p",null,"To use it, first install it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D testcontainers\n")),(0,a.kt)("p",null,"After that, you can adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts")," that is created when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx askui init")," like in the following example starting the askui UI Controller container just before all tests are run and connecting to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UiControlClient } from 'askui';\nimport { GenericContainer, StartedTestContainer } from 'testcontainers';\n\njest.setTimeout(60 * 1000 * 60);\n\nfunction getDockerImageName(): string {\n  const askuiUiControllerVersion = 'v0.10.0';\n  const browser = 'firefox';\n  const browserVersion = '82.0.3';\n  const osArch = 'amd64';\n  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;\n}\n\nasync function startTestContainer(): Promise<StartedTestContainer> {\n  const container = await new GenericContainer(getDockerImageName())\n    .withEnv('ENABLE_VNC', 'true')\n    .withEnv('SCREEN_RESOLUTION', '1920x1080')\n    .withExposedPorts(6769, 5900)\n    .start();\n\n  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);\n\n  return container;\n}\n\nlet testContainer: StartedTestContainer;\n\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\nbeforeAll(async () => {\n  testContainer = await startTestContainer();\n\n  aui = await UiControlClient.build({\n    uiControllerUrl: `http://localhost:${testContainer.getMappedPort(6769)}`,\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n  aui.close();\n\n  await testContainer.stop();\n});\n\nexport { aui };\n\n")),(0,a.kt)("h2",{id:"connect-via-vnc"},"Connect via VNC"),(0,a.kt)("p",null,"To check what is happening inside a running test container, you can connect via VNC. For this, you need a VNC client like ",(0,a.kt)("a",{parentName:"p",href:"https://remmina.org/"},"Remmina"),". When starting the ",(0,a.kt)("a",{parentName:"p",href:"#starting-container-manually"},"Docker Container manually"),", you have to map the interal port ",(0,a.kt)("inlineCode",{parentName:"p"},"5900")," to a free port on your machine that you, then, can connect to. When ",(0,a.kt)("a",{parentName:"p",href:"#starting-container-from-within-beforeall-using-testcontainers"},"using the testcontainers example code"),", the VNC port to connect to is logged to the console."),(0,a.kt)("p",null,"When connecting, enter the password ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," when asked."),(0,a.kt)("p",null,"Example of a VNC connection with a Chrome browser running inside a container:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VNC Example",src:n(51915).Z,width:"2562",height:"1415"})))}p.isMDXComponent=!0},51915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vnc-example-9077144d46d3f03f74248609d25a18a5.png"}}]);