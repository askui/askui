"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3331],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="annotateInteractively",c={unversionedId:"api/Annotation/annotateInteractively",id:"api/Annotation/annotateInteractively",title:"annotateInteractively",description:"production",source:"@site/docs/api/07-Annotation/annotateInteractively.md",sourceDirName:"api/07-Annotation",slug:"/api/Annotation/annotateInteractively",permalink:"/docs/next/api/Annotation/annotateInteractively",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/07-Annotation/annotateInteractively.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"annotate",permalink:"/docs/next/api/Annotation/annotate"},next:{title:"askui UI Control Client",permalink:"/docs/next/api/Configuration/askui-ui-control-client"}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotateinteractively"},"annotateInteractively"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Creates an annotated version of your screen and shows it to you so you can explore the annotated image.\nRecognized elements are annotated with a red bounding box.  You can copy the filter needed to select the element by left-clicking on the bounding box."),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/general/Tooling/annotation#interactive-annotation"},"the detailed explanation")," to see how you can use it to create instructions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.annotateInteractively();\n")))}u.isMDXComponent=!0}}]);