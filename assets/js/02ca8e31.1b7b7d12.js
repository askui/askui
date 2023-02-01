"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64959],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const a={},l="Linux",i={unversionedId:"general/Troubleshooting/linux",id:"general/Troubleshooting/linux",title:"Linux",description:"Wayland",source:"@site/docs/general/07-Troubleshooting/linux.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/linux",permalink:"/docs/next/general/Troubleshooting/linux",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Jest",permalink:"/docs/next/general/Troubleshooting/jest"},next:{title:"macOS",permalink:"/docs/next/general/Troubleshooting/mac-os"}},u={},s=[{value:"Wayland",id:"wayland",level:2},{value:"libfuse2",id:"libfuse2",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linux"},"Linux"),(0,o.kt)("h2",{id:"wayland"},"Wayland"),(0,o.kt)("p",null,"We do not yet support the windowing system Wayland for any Linux distribution. So you\nare going to see multiple errors when trying to run tests or may not even be able to\nstart the UI Controller. "),(0,o.kt)("p",null,"You can check if you are running on Wayland with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo $XDG_SESSION_TYPE\n")),(0,o.kt)("p",null,'If it says "wayland", you guessed it, you are running on Wayland.'),(0,o.kt)("p",null,"As a solution, you can switch to Xorg instead of Wayland\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/"},"how to switch to Xorg"),"). "),(0,o.kt)("h2",{id:"libfuse2"},"libfuse2"),(0,o.kt)("p",null,"If you are using Ubuntu 22.04 or later, you need to install libfuse before using askui lib\nsince it's no longer installed per default."),(0,o.kt)("p",null,"libfuse2 can be installed with: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install libfuse2\n")))}p.isMDXComponent=!0}}]);