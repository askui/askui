"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73739],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(n),f=i,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const s={sidebar_position:6},o="Assertions",a={unversionedId:"general/Guides/assertions",id:"version-v0.10.1/general/Guides/assertions",title:"Assertions",description:"In this guide we will first show you how to assert if an element is there or not.",source:"@site/versioned_docs/version-v0.10.1/general/03-Guides/assertions.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/assertions",permalink:"/docs/general/Guides/assertions",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-v0.10.1/general/03-Guides/assertions.md",tags:[],version:"v0.10.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Taking Screenshots",permalink:"/docs/general/Guides/taking-screenshots"},next:{title:"askui UI Controller Docker Images",permalink:"/docs/general/Continuous Integration/askui-ui-controller-docker-images"}},l={},c=[{value:"Assert the (non) Existence of Elements",id:"assert-the-non-existence-of-elements",level:2},{value:"Assert the Correctness of Values",id:"assert-the-correctness-of-values",level:2},{value:"1. Use expect() to check if the text in the textfield matches",id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",level:3},{value:"2. Retrieve the element with get() and use an assertions library",id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"In this guide we will first show you how to assert if an element is there or not."),(0,i.kt)("p",null,"Then we will"),(0,i.kt)("h2",{id:"assert-the-non-existence-of-elements"},"Assert the (non) Existence of Elements"),(0,i.kt)("p",null,"To validate if an element exists or not we use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Actions/expect"},"expect()")," in combination with ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Checks/exists"},"exists()")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Checks/notexists"},"notExists"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Expect that a button with text 'Go for it' exists\nawait aui.expect().text().withText('Login').exists().exec();\n\n// Expect that a text 'Do not go for it' not exists\nawait aui.expect().text().withText('Login').notExists().exec();\n")),(0,i.kt)("h2",{id:"assert-the-correctness-of-values"},"Assert the Correctness of Values"),(0,i.kt)("p",null,"Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:"),(0,i.kt)("h3",{id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches"},"1. Use expect() to check if the text in the textfield matches"),(0,i.kt)("p",null,"This technique is useful if the text you entered is unique on the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text().withText("Enter email").exec();\n\n// Assert if the textfield contains the value\nawait aui.expect().textfield().contains().text().withText(\'Please find me\').exists().exec();\n')),(0,i.kt)("h3",{id:"2-retrieve-the-element-with-get-and-use-an-assertions-library"},"2. Retrieve the element with ",(0,i.kt)("a",{parentName:"h3",href:"/docs/api/Getters/get"},"get()")," and use an assertions library"),(0,i.kt)("p",null,"If your value is not unique on your screen you can retrieve the element with ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Getters/get"},"get()")," and a different selector. For example with a relational selector like ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Relations/below"},"below()"),". With an assertion library you can assert if the value is correct."),(0,i.kt)("p",null,"Jest comes with assertions. You only have to import them into your askui-file."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Do not forget the import mentioned at the start of the snippet!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Add this to the start of your askui-file containing your workflows/instructions\nimport {expect, jest, test} from \'@jest/globals\';\n\n// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text().withText("Enter email").exec();\n\n// You have to retrieve the text you wrote inside the textfield here\n// If you retrieve the textfield it does not contain the text inside of it\nconst textfield = await aui.get().text().below().text().withText("User email").exec();\n\n// below() returns an array. We want the first element of that array!\nexpect(textfield[0].text).toBe("Please find me");\n')))}p.isMDXComponent=!0}}]);