"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18719],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(25773),o=(t(27378),t(35318));const a={sidebar_position:3},i="Linux",l={unversionedId:"general/Troubleshooting/linux",id:"version-0.11.0/general/Troubleshooting/linux",title:"Linux",description:"Wayland",source:"@site/versioned_docs/version-0.11.0/general/07-Troubleshooting/linux.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/linux",permalink:"/docs/0.11.0/general/Troubleshooting/linux",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.0/general/07-Troubleshooting/linux.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Jest",permalink:"/docs/0.11.0/general/Troubleshooting/jest"},next:{title:"Windows",permalink:"/docs/0.11.0/general/Troubleshooting/windows"}},s={},u=[{value:"Wayland",id:"wayland",level:2},{value:"libfuse2",id:"libfuse2",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linux"},"Linux"),(0,o.kt)("h2",{id:"wayland"},"Wayland"),(0,o.kt)("p",null,"We do not yet support the windowing system Wayland for any Linux distribution. So you\nare going to see multiple errors when trying to run askui instructions or may not even be able to\nstart the UI Controller. "),(0,o.kt)("p",null,"You can check if you are running on Wayland with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo $XDG_SESSION_TYPE\n")),(0,o.kt)("p",null,'If it says "wayland", you guessed it, you are running on Wayland.'),(0,o.kt)("p",null,"As a solution, you can switch to Xorg instead of Wayland\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/"},"how to switch to Xorg"),"). "),(0,o.kt)("h2",{id:"libfuse2"},"libfuse2"),(0,o.kt)("p",null,"If you are using Ubuntu 22.04 or later, you need to install libfuse before using askui lib\nsince it's no longer installed by default."),(0,o.kt)("p",null,"libfuse2 can be installed with: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install libfuse2\n")))}p.isMDXComponent=!0}}]);