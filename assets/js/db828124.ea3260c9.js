"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57048],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={sidebar_position:5},l="Scraping and Storing Elements",i={unversionedId:"general/Element Selection/scraping-and-storing-lements",id:"version-0.13.0/general/Element Selection/scraping-and-storing-lements",title:"Scraping and Storing Elements",description:"In this guide you will learn how to extract elements and their values out of your User Interface.",source:"@site/versioned_docs/version-0.13.0/general/03-Element Selection/scraping-and-storing-lements.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/scraping-and-storing-lements",permalink:"/docs/0.13.0/general/Element Selection/scraping-and-storing-lements",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.0/general/03-Element Selection/scraping-and-storing-lements.md",tags:[],version:"0.13.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Prompt Selectors",permalink:"/docs/0.13.0/general/Element Selection/prompt-selectors"},next:{title:"Tables",permalink:"/docs/0.13.0/general/Element Selection/tables"}},s={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Extract the Value",id:"extract-the-value",level:2},{value:"Use Extracted Value as Input",id:"use-extracted-value-as-input",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scraping-and-storing-elements"},"Scraping and Storing Elements"),(0,a.kt)("p",null,"In this guide you will learn how to extract elements and their values out of your User Interface."),(0,a.kt)("p",null,"We will also cover on how to use the extracted information in your code, so you can introduce real interactivity into your workflow."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.13.0/api/Getters/get"},"get()"),"-Instruction returns an array of all the elements it found. It looks like this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"}," console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     }\n   },\n   ...\n ]\n")),(0,a.kt)("p",null,"Usually you do not want every element from your UI returned. So you pair it with an element-selector:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const textFieldText = \n  await aui\n    .get()\n    .text()\n    .in()\n    .textfield()\n    .exec();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[\n  DetectedElement {\n    name: 'text',\n    text: 'Search',\n    bndbox: BoundingBox { xmin: 488, ymin: 138, xmax: 548, ymax: 164 },\n    colors: [ '', '', '' ]\n  }\n]\n")),(0,a.kt)("h2",{id:"extract-the-value"},"Extract the Value"),(0,a.kt)("p",null,"You can extract the value by reading the ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),"-property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DetectedElement"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice: ",(0,a.kt)("inlineCode",{parentName:"strong"},"textFieldText")," is an array. You have to iterate over it or use an index to access the ",(0,a.kt)("inlineCode",{parentName:"strong"},"DetectedElement"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Access by index\n// textFieldTextValue gets the value 'Search'\nconst textFieldTextValue = textFieldText?.[0]?.text;\n")),(0,a.kt)("h2",{id:"use-extracted-value-as-input"},"Use Extracted Value as Input"),(0,a.kt)("p",null,"You can use the extracted value as input for another textfield for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'await aui\n  .typeIn(textFieldTextValue)\n  .textfield()\n  .contains()\n  .text()\n  .withText("AskUI")\n  .exec();\n')))}p.isMDXComponent=!0}}]);