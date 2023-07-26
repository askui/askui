"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40163],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,d=g["".concat(p,".").concat(m)]||g[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="mouseToggleUp",s={unversionedId:"api/Actions/mousetoggleup",id:"version-0.11.1/api/Actions/mousetoggleup",title:"mouseToggleUp",description:"production",source:"@site/versioned_docs/version-0.11.1/api/02-Actions/mousetoggleup.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/mousetoggleup",permalink:"/docs/0.11.1/api/Actions/mousetoggleup",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.1/api/02-Actions/mousetoggleup.md",tags:[],version:"0.11.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},c=[],u={toc:c};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mousetoggleup"},"mouseToggleUp"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Toggles mouse up (Left mouse key/tap).This is equivalent to releasing the pressing mouse left button. Often combined with ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseToggleDown()"),"to automate ",(0,o.kt)("strong",{parentName:"p"},"drag-and-drop"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.mouseToggleDown().exec();\nawait aui.moveMouseRelatively(-400,0).exec();\nawait aui.mouseToggleUp().exec();\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(79082).Z,width:"800",height:"578"})))}l.isMDXComponent=!0},79082:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mouseToggleDownUp-622571a352b861a299999c85b0d91bbf.gif"}}]);