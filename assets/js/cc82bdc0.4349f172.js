"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10322],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(25773),a=(n(27378),n(35318));const i={custom_edit_url:null,sidebar_position:2},o="Installing askui",s={unversionedId:"general/Getting Started/getting-started",id:"general/Getting Started/getting-started",title:"Installing askui",description:"Requirements",source:"@site/docs/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/next/general/Getting Started/getting-started",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Why askui?",permalink:"/docs/next/general/Introduction/why-askui"},next:{title:"Writing Your First Test",permalink:"/docs/next/general/Getting Started/writing-your-first-test"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-askui"},"Installing askui"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js version 16 or above"),(0,a.kt)("li",{parentName:"ul"},"npm version 7.10 or above"),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/general/Troubleshooting/linux###wayland"},"Information for Wayland"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"If you have not yet set up a project using npm as your package manager, you can easily do so by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init -y")," inside the directory that you want your project to be in. This is going to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file with a description of your project, all your dependencies etc. If you already have a project that you would like to include the askui library in for writing up tests, simply navigate to that project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D askui\n")),(0,a.kt)("p",null,"While the askui library provides you with a way of controlling your OS, it does not yet provide everything you need for writing and executing a test. You also need a way of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"writing up the actual test,"),(0,a.kt)("li",{parentName:"ul"},"writing up assertions to test wether an expectation holds true and, last but not least,"),(0,a.kt)("li",{parentName:"ul"},"a way to execute the tests, i.e., a test runner.")),(0,a.kt)("p",null,"One framework which provides all of this out of the box is ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," which we are going to use in this example as it is quite easy to get started with and well-known. But feel free to use another test framework, such as ",(0,a.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),". How you use the askui library should be pretty much the same across these frameworks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D jest\n")),(0,a.kt)("p",null,"We are going to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," for writing the test instead of plain JavaScript. Run the following command to install Typescript, TS-Node for using Typescript together with Node.js and the types of Jest and Node.js."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D @types/jest ts-jest ts-node typescript\n")),(0,a.kt)("p",null,"Now, we are ready to write our first test."))}c.isMDXComponent=!0}}]);