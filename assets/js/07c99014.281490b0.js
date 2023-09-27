"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11461],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={},l=void 0,i={unversionedId:"general/Terminology",id:"version-0.12.1/general/Terminology",title:"Terminology",description:"| Term                   | Meaning     |",source:"@site/versioned_docs/version-0.12.1/general/12-Terminology.md",sourceDirName:"general",slug:"/general/Terminology",permalink:"/docs/general/Terminology",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.1/general/12-Terminology.md",tags:[],version:"0.12.1",sidebarPosition:12,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Deprecated Endpoints",permalink:"/docs/general/Troubleshooting/deprecated-endpoints"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"access token"),(0,a.kt)("td",{parentName:"tr",align:null},"Gives you access to the AskUI inference in combination with your ",(0,a.kt)("inlineCode",{parentName:"td"},"workspace id"),". Every ",(0,a.kt)("inlineCode",{parentName:"td"},"access token")," has an expiry date and is assigned to exactly one workspace.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},"A method in the AskUI Control Client API that describes an action to be taken against the operating system. For example click(), type().")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"annotation"),(0,a.kt)("td",{parentName:"tr",align:null},"Marked area around an element with metadata name, text, and bounding box coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"automation"),(0,a.kt)("td",{parentName:"tr",align:null},"A system of multiple connected workflows.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bounding box"),(0,a.kt)("td",{parentName:"tr",align:null},"Rectangle described by coordinates that describe an element's location. Displayed visually as red rectangle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"credentials"),(0,a.kt)("td",{parentName:"tr",align:null},"Combination of ",(0,a.kt)("inlineCode",{parentName:"td"},"workspace id")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"access token")," living in the same workspace.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"element"),(0,a.kt)("td",{parentName:"tr",align:null},"A user interface component which websites and blocks are build from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"element-description"),(0,a.kt)("td",{parentName:"tr",align:null},"A description for a UI element. In the AskUI Control Client API, for example, it is the coded description like ",(0,a.kt)("inlineCode",{parentName:"td"},"button()")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"textfield().contains().text('Email')"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inference"),(0,a.kt)("td",{parentName:"tr",align:null},"The process of annotating a user interface.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inference server"),(0,a.kt)("td",{parentName:"tr",align:null},"Backend which performs the inference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instruction"),(0,a.kt)("td",{parentName:"tr",align:null},"Single AskUI directive which usually has following parts: ",(0,a.kt)("em",{parentName:"td"},"action")," + (optional)",(0,a.kt)("em",{parentName:"td"},"element-description"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interactive annotation"),(0,a.kt)("td",{parentName:"tr",align:null},"Exploring the annotations of a user interface through an annotated screenshot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UI Controller"),(0,a.kt)("td",{parentName:"tr",align:null},"Service to control inputs and observe the visuals on the operating system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UI Control Client"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieves the annotations from the inference server and uses the given instructions to execute inputs on the operating system through the UI Controller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Portal"),(0,a.kt)("td",{parentName:"tr",align:null},"In the ",(0,a.kt)("a",{parentName:"td",href:"https://app.askui.com/"},"AskUI User Portal")," you can create ",(0,a.kt)("inlineCode",{parentName:"td"},"access tokens")," for your workspace.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workflow"),(0,a.kt)("td",{parentName:"tr",align:null},"A set of instructions to complete a single task")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workspace"),(0,a.kt)("td",{parentName:"tr",align:null},"Every registered user has exactly one workspace. Every workspace can contain multiple access tokens.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workspace id"),(0,a.kt)("td",{parentName:"tr",align:null},"The id of your workspace. Gives you access to the AskUI inference in combination with your ",(0,a.kt)("inlineCode",{parentName:"td"},"access token"),".")))))}d.isMDXComponent=!0}}]);