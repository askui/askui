"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76521],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const o={},i="Annotate Interactively",l={unversionedId:"general/Tooling/annotate-interactively",id:"general/Tooling/annotate-interactively",title:"Annotate Interactively",description:"Similar to annotate image, the askui client offers an interactive annotation tool which helps with the test creation and debugging of failed tests.",source:"@site/docs/general/05-Tooling/annotate-interactively.md",sourceDirName:"general/05-Tooling",slug:"/general/Tooling/annotate-interactively",permalink:"/docs/next/general/Tooling/annotate-interactively",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/05-Tooling/annotate-interactively.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Annotate Image",permalink:"/docs/next/general/Tooling/annotate-image"},next:{title:"Google Cat Search Tutorial",permalink:"/docs/next/general/Tutorials/google-cat-search"}},c={},s=[{value:"How It Works",id:"how-it-works",level:2},{value:"How to Use",id:"how-to-use",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotate-interactively"},"Annotate Interactively"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/general/Tooling/annotate-image"},"annotate image"),", the askui client offers an interactive annotation tool which helps with the test creation and debugging of failed tests."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"The interactive annotation command requests the askui server to take a screenshot of the specified screen. Then, an AI model is used to annotate the image. After that, a full-screen window appears. Inside this window, boundary boxes enclosing the UI elements detected are going to appear. You can hover over the boxes to see the boxes' specifications, e.g., text detected, element type etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interactive Annotation",src:n(46014).Z,width:"2560",height:"1080"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/**\n * Starts the interactive annotation. A window appears shortly afterwards showing the result \n * of the annotation. Press "Esc" to close this window again.\n */\nawait aui.annotateInteractively();\n')))}u.isMDXComponent=!0},46014:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"}}]);