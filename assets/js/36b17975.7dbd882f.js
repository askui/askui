"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75294],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(25773),o=(t(27378),t(35318));const a={displayed_sidebar:"apiSidebar"},l="execOnShell",c={unversionedId:"api/Commands/execonshell",id:"version-0.7.2/api/Commands/execonshell",title:"execOnShell",description:"Executes a shell command on the device your UiController is connected to.",source:"@site/versioned_docs/version-0.7.2/api/02-Commands/execonshell.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/execonshell",permalink:"/docs/0.7.2/api/Commands/execonshell",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/02-Commands/execonshell.md",tags:[],version:"0.7.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},i={},s=[],p={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execonshell"},"execOnShell"),(0,o.kt)("p",null,"Executes a shell command on the device your UiController is connected to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\n// Open the lastpass app on Android\nawait aui.execOnShell(\'monkey -p com.lastpass.authenticator 1\').exec()\n// Open Google Chrome on Windows\nawait aui.execOnShell("start chrome").exec();\n// Open Google Chrome on macOS\nawait aui.execOnShell("open -a \'Google Chrome\'").exec();\n// Open Google Chrome on Linux\nawait aui.execOnShell("chrome").exec();\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {string} shell_command - A shell command which is executed.")))}m.isMDXComponent=!0}}]);