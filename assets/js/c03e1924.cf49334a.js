"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70199],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={sidebar_position:8},i="AskUI Reporter",s={unversionedId:"general/Guides/reporter",id:"general/Guides/reporter",title:"AskUI Reporter",description:"We provide a package @askui/askui-reporters with third-party integration of reporters ready-to-use into your AskUI runs. Check out the repository for more details.",source:"@site/docs/general/03-Guides/reporter.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/reporter",permalink:"/docs/next/general/Guides/reporter",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/03-Guides/reporter.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Extract Information with get()",permalink:"/docs/next/general/Guides/extract-information"},next:{title:"askui UI Controller Docker Images",permalink:"/docs/next/general/Continuous Integration/askui-ui-controller-docker-images"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage of Allure-Reporter",id:"usage-of-allure-reporter",level:2},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts",level:3},{value:"Enable the Test Environment <code>jest-allure-circus</code> in <code>jest.config.ts</code>",id:"enable-the-test-environment-jest-allure-circus-in-jestconfigts",level:3},{value:"Implement Your Own Reporter",id:"implement-your-own-reporter",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"askui-reporter"},"AskUI Reporter"),(0,o.kt)("p",null,"We provide a package ",(0,o.kt)("inlineCode",{parentName:"p"},"@askui/askui-reporters")," with third-party integration of reporters ready-to-use into your AskUI runs. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters"},"Check out the repository")," for more details."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@askui/askui-reporters")," as a dev-dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @askui/askui-reporters\n")),(0,o.kt)("h2",{id:"usage-of-allure-reporter"},"Usage of Allure-Reporter"),(0,o.kt)("p",null,"Add the reporter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"UiControlClient")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Do not forget this import at the start of the file\nimport { AskUIAllureStepReporter } from \"@askui/askui-reporters\";\n...\n  const reporterConfig: ReporterConfig = {\n    withScreenshots: 'always', // See below for possible values\n    withDetectedElements: 'always', // See below for possible values\n  }\n\n  aui = await UiControlClient.build({\n    reporter: new AskUIAllureStepReporter(\n      reportConfig\n    )\n  });\n...\n")),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReporterConfig")," object to the reporter to configure the level of detail for screenshots and detected elements."),(0,o.kt)("p",null,"There are four possible values (See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters/tree/main#allure-reporter"},"the @askui/askui-reporters README for a detailed explanation"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"onFailure (Default for both)"),(0,o.kt)("li",{parentName:"ul"},"required"),(0,o.kt)("li",{parentName:"ul"},"begin"),(0,o.kt)("li",{parentName:"ul"},"always")),(0,o.kt)("h3",{id:"configure-beforeeach-and-aftereach-in-jestsetupts"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h3"},"beforeEach()")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"afterEach()")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"jest.setup.ts")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UiControlClient")," retrieves the videos and images from your ",(0,o.kt)("inlineCode",{parentName:"p"},"UiController"),". You have to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.setup.ts")," to start the recording and then add it to your report:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allure Reporter")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Do not forget this import at the start of the file\n// as it is needed for the Allure reporting to work\nimport "jest-allure-circus";\n\nbeforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  AskUIAllureStepReporter.attachVideo(video);\n});\n')),(0,o.kt)("h3",{id:"enable-the-test-environment-jest-allure-circus-in-jestconfigts"},"Enable the Test Environment ",(0,o.kt)("inlineCode",{parentName:"h3"},"jest-allure-circus")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"jest.config.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  // highlight-start\n  // Enables the test environment for Allure\n  testEnvironment: 'jest-allure-circus',\n  // highlight-end\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n")),(0,o.kt)("h2",{id:"implement-your-own-reporter"},"Implement Your Own Reporter"),(0,o.kt)("p",null,"To write your own reporter you have to implement AskUI's ",(0,o.kt)("inlineCode",{parentName:"p"},"Reporter")," interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Reporter {\n    config?: ReporterConfig;\n    onStepBegin?(step: Step): Promise<void>;\n    onStepRetry?(step: Step): Promise<void>;\n    onStepEnd?(step: Step): Promise<void>;\n}\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts"},"Example implementation for Allure")," on how that is used to extract the screenshot before/after each step and how to record a video of each step."))}c.isMDXComponent=!0}}]);