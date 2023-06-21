"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74817],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const s={sidebar_position:2},i="Jest",a={unversionedId:"general/Troubleshooting/jest",id:"version-0.10.4/general/Troubleshooting/jest",title:"Jest",description:"Termination Error",source:"@site/versioned_docs/version-0.10.4/general/07-Troubleshooting/jest.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/jest",permalink:"/docs/0.10.4/general/Troubleshooting/jest",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.4/general/07-Troubleshooting/jest.md",tags:[],version:"0.10.4",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Cannot Find Element Error",permalink:"/docs/0.10.4/general/Troubleshooting/cannot_find_element_error"},next:{title:"Linux",permalink:"/docs/0.10.4/general/Troubleshooting/linux"}},l={},c=[{value:"Termination Error",id:"termination-error",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jest"},"Jest"),(0,o.kt)("h2",{id:"termination-error"},"Termination Error"),(0,o.kt)("p",null,"Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Jest did not exit one second after the test run has completed.\n\nThis usually means that there are asynchronous operations \nthat weren't stopped in your tests. \nConsider running Jest with `--detectOpenHandles` to troubleshoot this issue.\n")),(0,o.kt)("p",null,"As described in the error message Jest has problems stopping because of some processes which are still running.\nThis can cause problems in your CI/CD pipeline because your pipeline can't continue after\ngetting this error."),(0,o.kt)("p",null,"A solution is to force Jest to stop. For this case Jest provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"--forceExit")," flag: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx jest --config ./test/jest.config.ts --forceExit\n")))}u.isMDXComponent=!0}}]);