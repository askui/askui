"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51495],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const a={sidebar_position:3,pagination_next:"general/Getting Started/write-your-first-instruction"},o="Android",d={unversionedId:"general/Getting Started/getting-started-android",id:"version-0.10.1/general/Getting Started/getting-started-android",title:"Android",description:"Your Android device gets controlled over your local device.",source:"@site/versioned_docs/version-0.10.1/general/02-Getting Started/getting-started-android.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started-android",permalink:"/docs/0.10.1/general/Getting Started/getting-started-android",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.1/general/02-Getting Started/getting-started-android.md",tags:[],version:"0.10.1",sidebarPosition:3,frontMatter:{sidebar_position:3,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"Installing askui",permalink:"/docs/0.10.1/general/Getting Started/getting-started"},next:{title:"Write Your First Instruction",permalink:"/docs/0.10.1/general/Getting Started/write-your-first-instruction"}},l={},s=[{value:"Requirements Android Device",id:"requirements-android-device",level:2},{value:"Access Token",id:"access-token",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android"},"Android"),(0,i.kt)("p",null,"Your Android device gets controlled over your local device."),(0,i.kt)("p",null,"Please follow the ",(0,i.kt)("em",{parentName:"p"},"Getting Started")," of your respective operating system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Getting%20Started/getting-started-windows"},"Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Getting%20Started/getting-started-macos"},"macOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Getting%20Started/getting-started-linux"},"Linux"))),(0,i.kt)("h2",{id:"requirements-android-device"},"Requirements Android Device"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setup SDK Command Line Tools with one of these tutorials:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Tutorials/setup-android"},"with Android Studio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Tutorials/setup-android#set-up-sdk-command-line-tools-without-android-studio"},"without Android Studio"))))),(0,i.kt)("h2",{id:"access-token"},"Access Token"),(0,i.kt)("p",null,"As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,i.kt)("a",{parentName:"p",href:"https://app.v2.askui.com/"},"askui user portal")," (while still free) and ",(0,i.kt)("a",{parentName:"p",href:"../../api/Configuration/askui-ui-control-client#credentials"},"configure our library to use these credentials")," for authenticating and authorizing with our API."))}u.isMDXComponent=!0}}]);