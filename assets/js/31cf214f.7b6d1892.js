"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16021],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const i={custom_edit_url:null},a="Configure Test Frameworks",s={unversionedId:"general/Best Practice/configure_test_framework",id:"version-0.2.3/general/Best Practice/configure_test_framework",title:"Configure Test Frameworks",description:"You can run askui test from different test frameworks like Jest or Jasmine. Depending on which framework you use, you might need some extra configurations to ensure an efficient execution of your tests.",source:"@site/versioned_docs/version-0.2.3/general/03-Best Practice/configure_test_framework.md",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/configure_test_framework",permalink:"/docs/0.2.3/general/Best Practice/configure_test_framework",draft:!1,editUrl:null,tags:[],version:"0.2.3",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Writing Your First Test",permalink:"/docs/0.2.3/general/Getting Started/writing-your-first-test"},next:{title:"Selecting UI Elements",permalink:"/docs/0.2.3/general/Best Practice/selecting_ui_elements"}},c={},l=[{value:"Jest",id:"jest",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-test-frameworks"},"Configure Test Frameworks"),(0,o.kt)("p",null,"You can run askui test from different test frameworks like Jest or Jasmine. Depending on which framework you use, you might need some extra configurations to ensure an efficient execution of your tests."),(0,o.kt)("h2",{id:"jest"},"Jest"),(0,o.kt)("p",null,"When running askui tests in Jest, you can configure your Jest environment with the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file. When you start the example project, it should look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math'\n  ]\n  \n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n")),(0,o.kt)("p",null,"In case your Jest tests are executed slowly, make sure you have added the ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," configuration for ",(0,o.kt)("inlineCode",{parentName:"p"},"Math"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The option ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," was named ",(0,o.kt)("inlineCode",{parentName:"p"},"extraGlobals")," in Jest v27 and lower.")))}p.isMDXComponent=!0}}]);