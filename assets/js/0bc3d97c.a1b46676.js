"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16998],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const i={displayed_sidebar:"apiSidebar"},a="mouseDoubleLeftClick",c={unversionedId:"api/Actions/mousedoubleleftclick",id:"version-0.11.6/api/Actions/mousedoubleleftclick",title:"mouseDoubleLeftClick",description:"production",source:"@site/versioned_docs/version-0.11.6/api/02-Actions/mousedoubleleftclick.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/mousedoubleleftclick",permalink:"/docs/0.11.6/api/Actions/mousedoubleleftclick",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/api/02-Actions/mousedoubleleftclick.md",tags:[],version:"0.11.6",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},s=[],u={toc:s};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mousedoubleleftclick"},"mouseDoubleLeftClick"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Double-clicks with left mouse key."),(0,o.kt)("p",null,"If you need to move the mouse first, use ",(0,o.kt)("inlineCode",{parentName:"p"},"moveMouseTo()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Optional: Move mouse to an element first\nawait aui.moveMouse(500,500).exec();\n\nawait aui.mouseDoubleLeftClick().exec();\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(24550).Z,width:"800",height:"518"})))}p.isMDXComponent=!0},24550:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mouseDoubleLeftClick-4bcab0ee06707d24be92b22c844ab0e3.gif"}}]);