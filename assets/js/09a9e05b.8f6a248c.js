"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49289],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={sidebar_position:7},i="IPv6",l={unversionedId:"general/Troubleshooting/ipv6",id:"version-0.13.1/general/Troubleshooting/ipv6",title:"IPv6",description:"By default, the UI Controller which the AskUI lib starts and interacts with (you can also start it manually) is started at IP address 127.0.0.1 (IPv4 IP address that localhost normally resolves to).",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/ipv6.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/ipv6",permalink:"/docs/general/Troubleshooting/ipv6",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/ipv6.md",tags:[],version:"0.13.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Proxy",permalink:"/docs/general/Troubleshooting/proxy"},next:{title:"Deprecated Endpoints",permalink:"/docs/general/Troubleshooting/deprecated-endpoints"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ipv6"},"IPv6"),(0,o.kt)("p",null,"By default, the UI Controller which the AskUI lib starts and interacts with (you can also start it manually) is started at IP address ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (IPv4 IP address that ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," normally resolves to)."),(0,o.kt)("p",null,"To use IPv6, e.g., because you disabled IPv4, you need to start the UI Controller manually from the command line providing ",(0,o.kt)("inlineCode",{parentName:"p"},"--host ::1")," (assuming you want to use IP address ",(0,o.kt)("inlineCode",{parentName:"p"},"::1"),", otherwise provide a different address) and provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"uiControllerUrl")," when constructing the ",(0,o.kt)("inlineCode",{parentName:"p"},"UiControlClient")," (by default, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<project_dir>/test/helpers/askui-helper.ts"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"aui = await UiControlClient.build({\n    uiControllerUrl: 'http://[::1]:6769',\n    // other client args...\n});\n")),(0,o.kt)("p",null,"For example, starting the UI Controller (version ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),", for other versions replace the respective part of the path) on macOS from your project's root directory is done like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app --args --host ::1\n")),(0,o.kt)("p",null,"On other operating systems the path is different:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Windows\nstart ./node_modules/askui/dist/release/latest/win32/askui-ui-controller.exe --args --host ::1\n\n# Linux\n./node_modules/askui/dist/release/latest/linux/askui-ui-controller --args --host ::1\n")))}c.isMDXComponent=!0}}]);