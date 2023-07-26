"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11467],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(25773),r=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},i="mouseToggleDown",s={unversionedId:"api/Actions/mousetoggledown",id:"version-0.11.1/api/Actions/mousetoggledown",title:"mouseToggleDown",description:"production",source:"@site/versioned_docs/version-0.11.1/api/02-Actions/mousetoggledown.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/mousetoggledown",permalink:"/docs/0.11.1/api/Actions/mousetoggledown",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.1/api/02-Actions/mousetoggledown.md",tags:[],version:"0.11.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mousetoggledown"},"mouseToggleDown"),(0,r.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Toggles mouse down (Left mouse key/tap). This is equivalent to ",(0,r.kt)("strong",{parentName:"p"},"mouse-left-press-and-hold"),". It holds the mouse button until the ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseToggleUp()")," is called. Often combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseToggleUp()"),"to automate ",(0,r.kt)("strong",{parentName:"p"},"drag-and-drop"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.mouseToggleDown().exec();\nawait aui.moveMouseRelatively(-400,0).exec();\nawait aui.mouseToggleUp().exec();\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79082).Z,width:"800",height:"578"})))}u.isMDXComponent=!0},79082:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mouseToggleDownUp-622571a352b861a299999c85b0d91bbf.gif"}}]);