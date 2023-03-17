"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82211],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(g,p(p({ref:t},l),{},{components:r})):n.createElement(g,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},p="mouseToggleUp",s={unversionedId:"api/Commands/mousetoggleup",id:"version-0.7.2/api/Commands/mousetoggleup",title:"mouseToggleUp",description:"Toggles mouse up (Left mouse key).",source:"@site/versioned_docs/version-0.7.2/api/02-Commands/mousetoggleup.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/mousetoggleup",permalink:"/docs/api/Commands/mousetoggleup",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/02-Commands/mousetoggleup.md",tags:[],version:"0.7.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},i={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mousetoggleup"},"mouseToggleUp"),(0,o.kt)("p",null,"Toggles mouse up (Left mouse key)."),(0,o.kt)("p",null,"Toggles mouse up (Left mouse key/tap)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.mouseToggleUp().exec();\n")))}c.isMDXComponent=!0}}]);