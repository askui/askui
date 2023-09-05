"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55124],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(25773),i=(n(27378),n(35318));const r={sidebar_position:4},o="Recommended Practices",l={unversionedId:"general/Guides/recommended-practices",id:"version-0.11.3/general/Guides/recommended-practices",title:"Recommended Practices",description:"This page will give you examples of how to use askui efficiently and effectively.",source:"@site/versioned_docs/version-0.11.3/general/03-Guides/recommended-practices.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/recommended-practices",permalink:"/docs/0.11.3/general/Guides/recommended-practices",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.3/general/03-Guides/recommended-practices.md",tags:[],version:"0.11.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Text Element-Descriptions",permalink:"/docs/0.11.3/general/Guides/guide-text-element-descriptions"},next:{title:"Taking Screenshots",permalink:"/docs/0.11.3/general/Guides/taking-screenshots"}},s={},c=[{value:"General Considerations on Speed of Inference for Different Element-Descriptions",id:"general-considerations-on-speed-of-inference-for-different-element-descriptions",level:2},{value:"Avoid Optical Character Recognition (OCR) on Too Many Element",id:"avoid-optical-character-recognition-ocr-on-too-many-element",level:3},{value:"Avoid Custom Element Detection if Possible",id:"avoid-custom-element-detection-if-possible",level:3},{value:"Scrolling",id:"scrolling",level:2},{value:"Scrolling on Touch Displays",id:"scrolling-on-touch-displays",level:3},{value:"Scrolling With Mouse Wheel",id:"scrolling-with-mouse-wheel",level:3},{value:"Scrolling With Key Press",id:"scrolling-with-key-press",level:3},{value:"Wait for an Element to Appear",id:"wait-for-an-element-to-appear",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recommended-practices"},"Recommended Practices"),(0,i.kt)("p",null,"This page will give you examples of how to use askui efficiently and effectively. "),(0,i.kt)("h2",{id:"general-considerations-on-speed-of-inference-for-different-element-descriptions"},"General Considerations on Speed of Inference for Different Element-Descriptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Submodel"),(0,i.kt)("th",{parentName:"tr",align:null},"Tasks"),(0,i.kt)("th",{parentName:"tr",align:null},"Speed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Object Detector"),(0,i.kt)("td",{parentName:"tr",align:null},"Common elements, e.g. a button or textfield"),(0,i.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Icon Classifier"),(0,i.kt)("td",{parentName:"tr",align:null},"Predict the class of an icon, e.g., a user icon"),(0,i.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optical Character Recognition (OCR)"),(0,i.kt)("td",{parentName:"tr",align:null},"Recognize text"),(0,i.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Custom Element Detector"),(0,i.kt)("td",{parentName:"tr",align:null},"Search via an image inside the screen"),(0,i.kt)("td",{parentName:"tr",align:null},"slow \ud83d\udc0c")))),(0,i.kt)("h3",{id:"avoid-optical-character-recognition-ocr-on-too-many-element"},"Avoid Optical Character Recognition (OCR) on Too Many Element"),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," ",(0,i.kt)("strong",{parentName:"p"},"OCR")," is applied to all elements detected on your screen. This can slow down askui. It is more efficient to narrow down the elements first. For example, if you want to click a ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," with a specific text you should select all buttons first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Do this\nawait aui.click().button('See here').exec();\nawait aui.click().text('Sign in').exec();\n\n// And NOT this\nawait aui.click('See here').exec();\nawait aui.click('Sign in').exec();\n")),(0,i.kt)("h3",{id:"avoid-custom-element-detection-if-possible"},"Avoid Custom Element Detection if Possible"),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"customElement()")," you are doing an image-in-image search. Use this sparingly only for specific custom elements as the execution time is slow!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Do this\nawait aui.click().button().withText('Login').exec();\nawait aui.click().text('Overview').exec();\n\n// And NOT this\nawait aui.click().customElement({\n  customImage: '.../login_button.png', \n  name: 'login button',\n}).exec();\nawait aui.click().customElement({\n  customImage: '.../text_overview.png', \n  name: 'overview button',\n}).exec();\n")),(0,i.kt)("h2",{id:"scrolling"},"Scrolling"),(0,i.kt)("p",null,"When you use askui you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements."),(0,i.kt)("h3",{id:"scrolling-on-touch-displays"},"Scrolling on Touch Displays"),(0,i.kt)("p",null,"On touch displays you have to recreate the swipe gesture:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Touch the display with your finger, move finger to the left, release\nawait aui.mouseToggleDown().exec()\nawait aui.moveMouseRelatively(-1500, 0).exec()\nawait aui.mouseToggleUp().exec()\n")),(0,i.kt)("h3",{id:"scrolling-with-mouse-wheel"},"Scrolling With Mouse Wheel"),(0,i.kt)("p",null,"If you want to scroll with your mouse wheel you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"scroll()")," action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Scroll 10 down in y direction<>\nawait aui.scroll(0, -10).exec()\n")),(0,i.kt)("h3",{id:"scrolling-with-key-press"},"Scrolling With Key Press"),(0,i.kt)("p",null,"If you want to scroll with a key press you could use your arrow keys (",(0,i.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"down"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," ) or the ",(0,i.kt)("inlineCode",{parentName:"p"},"pagedown"),"-key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Press down arrow key\nawait aui.pressKey('down').exec()\n\n// Press up arrow key\nawait aui.pressKey('up').exec()\n\n// Scroll down a page\nawait aui.pressKey('pagedown').exec()\n\n// Scroll up a page\nawait aui.pressKey('pageup').exec()\n")),(0,i.kt)("h2",{id:"wait-for-an-element-to-appear"},"Wait for an Element to Appear"),(0,i.kt)("p",null,"askui implements a conservative retry strategy to wait for an element to appear. But sometimes this is not long enough.\nYou can wait for an element to appear with the following helper function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Retry the command 5 times with a\n// wait time of 2 seconds between each try\nasync function waitUntil(askuiCommand: () => Promise<void>, maxTry = 5) {\n  try {\n    await askuiCommand();\n  }\n  catch (error) {\n    if (maxTry == 0) {\n      throw error\n    }\n    console.log(`Retry predicting command, ${maxTry} tries left`)\n    await aui.waitFor(2000).exec();\n    await waitUntil(askuiCommand, maxTry - 1)\n  }\n}\n\n// Wait for the text 'Github' to be displayed\nawait waitUntil(\n  async () => \n    aui.expect().text('Github').exists().exec()\n  );\n")))}u.isMDXComponent=!0}}]);