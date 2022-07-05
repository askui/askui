"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34575],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const a={custom_edit_url:null},i="Configure Test Frameworks",s={unversionedId:"general/Best Practice/configure_test_framework",id:"version-0.2.1/general/Best Practice/configure_test_framework",title:"Configure Test Frameworks",description:"You can run askui test from different test frameworks like Jest or Jasmine. Depending on which framework you use, you might need some extra configurations to ensure an efficient execution of your tests.",source:"@site/versioned_docs/version-0.2.1/general/03-Best Practice/configure_test_framework.md",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/configure_test_framework",permalink:"/docs/0.2.1/general/Best Practice/configure_test_framework",draft:!1,editUrl:null,tags:[],version:"0.2.1",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Writing Your First Test",permalink:"/docs/0.2.1/general/Getting Started/writing-your-first-test"},next:{title:"Selecting UI Elements",permalink:"/docs/0.2.1/general/Best Practice/selecting_ui_elements"}},c={},l=[{value:"Jest",id:"jest",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-test-frameworks"},"Configure Test Frameworks"),(0,o.kt)("p",null,"You can run askui test from different test frameworks like Jest or Jasmine. Depending on which framework you use, you might need some extra configurations to ensure an efficient execution of your tests."),(0,o.kt)("h2",{id:"jest"},"Jest"),(0,o.kt)("p",null,"When running askui tests in Jest, you can configure your Jest environment with the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file. When you start the example project, it should look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math'\n  ]\n  \n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n")),(0,o.kt)("p",null,"In case your Jest tests are executed slowly, make sure you have added the ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," configuration for ",(0,o.kt)("inlineCode",{parentName:"p"},"Math"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The option ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," was named ",(0,o.kt)("inlineCode",{parentName:"p"},"extraGlobals")," in Jest v27 and lower."))))}p.isMDXComponent=!0}}]);