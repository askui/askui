"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44840],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={sidebar_position:1},i="How askui Works",l={unversionedId:"general/Guides/guide-how-askui-works",id:"version-0.11.2/general/Guides/guide-how-askui-works",title:"How askui Works",description:"Overview",source:"@site/versioned_docs/version-0.11.2/general/03-Guides/guide-how-askui-works.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/guide-how-askui-works",permalink:"/docs/0.11.2/general/Guides/guide-how-askui-works",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.2/general/03-Guides/guide-how-askui-works.md",tags:[],version:"0.11.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Write Your First Instruction",permalink:"/docs/0.11.2/general/Getting Started/write-your-first-instruction"},next:{title:"Relational Element-Descriptions",permalink:"/docs/0.11.2/general/Guides/guide-relational-element-descriptions"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Glossary",id:"glossary",level:2},{value:"askui Control Client",id:"askui-control-client",level:2},{value:"askui UI Controller",id:"askui-ui-controller",level:2},{value:"askui Inference Server",id:"askui-inference-server",level:2},{value:"Them All in Action",id:"them-all-in-action",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-askui-works"},"How askui Works"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this article, we will give a detailed overview of askui`s architecture and how it works under the hood."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(15291).Z,width:"1920",height:"1784"})),(0,r.kt)("p",null,"askui is built on top of a number of components. We will cover what these components are and how they work together to provide a flexible and reliable way to automate interactions with UI elements of any operating system or platform."),(0,r.kt)("p",null,"By the end of this article, whether you're a software developer, QA engineer, or automation specialist, you'll have a solid understanding of how askui works, and be able to use this knowledge to build more efficient automation for your project."),(0,r.kt)("p",null,"askui consists of three building blocks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"askui Control Client"),(0,r.kt)("li",{parentName:"ul"},"askui UI Controller"),(0,r.kt)("li",{parentName:"ul"},"askui Inference Server")),(0,r.kt)("p",null,"We will step through each of them and see how they work together to perform UI automation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,"Throughout this article, we will use some terms that describe certain parts of askui. Some of them are used only internally and not exposed by the askui Control Client API, but are important for understanding how askui works and what it can do. Please refer to this table while reading."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Term")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Element-description")),(0,r.kt)("td",{parentName:"tr",align:null},"A description for a UI element. In the askui Control Client API, for example, it is the coded description like ",(0,r.kt)("inlineCode",{parentName:"td"},"button()")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"textfield().contains().text('Email')"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Action")),(0,r.kt)("td",{parentName:"tr",align:null},"A method in the askui Control Client API that describes an action to be taken against the operating system. For example ",(0,r.kt)("inlineCode",{parentName:"td"},"click()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"type()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"InputEvent")," (internal)"),(0,r.kt)("td",{parentName:"tr",align:null},"A specific type of action to be taken against the operating system. For example ",(0,r.kt)("em",{parentName:"td"},"MouseInputEvent")," or ",(0,r.kt)("em",{parentName:"td"},"KeyboardInputEvent"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"ControlCommand")," (internal)"),(0,r.kt)("td",{parentName:"tr",align:null},"A command sent to the UI controller telling what to perform on the operating system. It consists of one or more ",(0,r.kt)("em",{parentName:"td"},"InputEvents"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"askui-control-client"},"askui Control Client"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"control-client",src:n(56534).Z,width:"1920",height:"1514"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," provides the API that tells askui what/how to automate. Once you start using askui, you will mostly interact with askui via the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client"),". In most of our tutorials and demonstrations, you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"let aui: UIControlClient")," is declared and combined with an ",(0,r.kt)("em",{parentName:"p"},"Action")," and ",(0,r.kt)("em",{parentName:"p"},"Element-descriptions")," which ends up forming an instruction, e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.click().button().withText('login').exec();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As shown above, you form an instruction by chaining an ",(0,r.kt)("em",{parentName:"p"},"Action")," with ",(0,r.kt)("em",{parentName:"p"},"Element-descriptions")," using the Fluent API of the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client"),". It is designed as a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Fluent_interface"},"fluent interface"))," to increase readability and make it more understandable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," sends a request to the ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"to take a screenshot."),(0,r.kt)("li",{parentName:"ul"},"with a ",(0,r.kt)("em",{parentName:"li"},"ControlCommand")," that tells what ",(0,r.kt)("em",{parentName:"li"},"InputEvent")," to perform on the operating system."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," communicates with the ",(0,r.kt)("strong",{parentName:"p"},"askui Inference Server"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"to send a screenshot to be annotated with the instruction."),(0,r.kt)("li",{parentName:"ul"},"to receive the annotation, e.g. detected elements.")))),(0,r.kt)("p",null,"To use the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client"),", user credentials are required. User credentials can be obtained via our ",(0,r.kt)("a",{parentName:"p",href:"https://app.v2.askui.com/"},"User Portal"),"."),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.2/api/Configuration/askui-ui-control-client"},"API documentation")," for more information on this component."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"askui-ui-controller"},"askui UI Controller"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"controller",src:n(67051).Z,width:"1920",height:"1514"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller")," is a binary that controls the operating system. This binary gets automatically downloaded when the ",(0,r.kt)("inlineCode",{parentName:"p"},"UiController")," is initialized by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"UiController.start()"),". Once executed, it stays in the background and communicates with the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," on a specific port to receive the ",(0,r.kt)("em",{parentName:"p"},"ControlCommand"),". Based on the given ",(0,r.kt)("em",{parentName:"p"},"ControlCommand"),", it triggers ",(0,r.kt)("em",{parentName:"p"},"InputEvents")," respectively."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"askui UI Controller")," is responsible for:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Taking a screenshot."),(0,r.kt)("li",{parentName:"ul"},"Triggering the ",(0,r.kt)("em",{parentName:"li"},"InputEvent"),", i.e MouseInputEvent, KeyboardInputEvent, or shell execution."),(0,r.kt)("li",{parentName:"ul"},"Running the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.2/general/Tooling/annotation#interactive-annotation"},"interactive annotation"),".")))),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.2/api/Configuration/askui-ui-controller"},"API documentation")," for more information on this component."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"askui-inference-server"},"askui Inference Server"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"server",src:n(22074).Z,width:"1920",height:"934"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"askui Inference Server")," is responsible for the prediction of UI elements within the given screenshot. As soon as it receives a request from the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client"),", it performs the prediction on the given image and returns the annotation to the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client"),". "),(0,r.kt)("p",null,"For the inference, we use a machine-learning model that consists of several submodels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object Detector"),": Detects UI elements (e.g button, textfield)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icon Classifier"),": Predicts the class of an icon based on the detected objects (e.g. a user icon \ud83d\udc64)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optical Character Recognition (OCR)"),": Converts the image of a text into text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Element Detector"),": Searches for an area in the given screenshot that matches the image given by the ",(0,r.kt)("em",{parentName:"li"},"Element-description")," ",(0,r.kt)("inlineCode",{parentName:"li"},".customElement()"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"them-all-in-action"},"Them All in Action"),(0,r.kt)("p",null,"Assuming that we run askui on the same device we want to automate, the simplest synopsis can be described as such:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image description",src:n(15291).Z,width:"1920",height:"1784"})),(0,r.kt)("p",null,"When running askui, "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," checks whether it is needed to be processed by the ",(0,r.kt)("strong",{parentName:"p"},"Inference Server"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the code ",(0,r.kt)("strong",{parentName:"p"},"contains any of the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/0.11.2/api/API/table-of-contents#element-descriptions"},"Element-description")," or ",(0,r.kt)("a",{parentName:"strong",href:"/docs/0.11.2/api/API/table-of-contents#getters"},"Getters")),", then the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," tells the ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller")," to take a screenshot of the given screen and sends it to the ",(0,r.kt)("strong",{parentName:"p"},"Inference Server"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," has retrieved the annotation back from the server, it sends a ",(0,r.kt)("em",{parentName:"p"},"ControlCommand")," to the ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller"),". Afterwards, the ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller")," triggers the ",(0,r.kt)("em",{parentName:"p"},"InputEvent")," on the operating system."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// an example of askui code containing an element-identifier\nawait aui.click().button().withText('Confirm').exec();\n// Here, the element-description 'button()' is used together,\n// so the client will fire a request to the server.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the code ",(0,r.kt)("strong",{parentName:"p"},"contains an ",(0,r.kt)("a",{parentName:"strong",href:"/docs/0.11.2/api/API/table-of-contents#actions"},"Action")," but no Element-description"),", then the ",(0,r.kt)("strong",{parentName:"p"},"askui Control Client")," sends the ",(0,r.kt)("em",{parentName:"p"},"ControlCommand")," to the ",(0,r.kt)("strong",{parentName:"p"},"askui UI Controller")," to trigger the ",(0,r.kt)("em",{parentName:"p"},"InputEvent")," directly."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// an example of askui code containing only a command\nawait aui.pressThreeKeys('control','alt','del').exec();\n// It uses only a command 'pressThreeKeys()',\n// so it will be executed by the UI Controller directly.\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("strong",{parentName:"p"},"Element-description")," represents a specific type of UI element that can be recognized by inference. Most of the commonly used UI elements such as ",(0,r.kt)("em",{parentName:"p"},"button"),", ",(0,r.kt)("em",{parentName:"p"},"textfield")," are supported and can be used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("strong",{parentName:"p"},"Action")," represents a specific type of action to be performed, i.e ",(0,r.kt)("em",{parentName:"p"},"Mouse/Keyboard Input Event")," or ",(0,r.kt)("em",{parentName:"p"},"Shell Command"),". This action can be performed on a specific element when combined with ",(0,r.kt)("strong",{parentName:"p"},"Element-descriptions")," or can be performed on its own as shown in the example right above."))),(0,r.kt)("p",null,"Please visit our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.2/api/API/table-of-contents"},"API Docs"),", if you want to learn more about different types of ",(0,r.kt)("em",{parentName:"p"},"Element-description")," and ",(0,r.kt)("em",{parentName:"p"},"Action"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Here we have seen the three core components of askui. If you aim to use askui in a more advanced way, e.g. integrating it into your CI/CD pipeline, it may be worthwhile to get an overview of how it is composed. For more practical examples, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.2/general/Tutorials/"},"Tutorials")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.2/api/API/table-of-contents"},"API docs"),". And don't forget to come over to our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Gu35zMGxbx"},"Discord community"),", if you have any questions about askui!"))}u.isMDXComponent=!0},15291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_askui_works_architecture-363bc8be35bd228e884c83d15acd19f7.png"},56534:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_askui_works_client-199c26dea4aff2f367d5613c26f0d49e.png"},67051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_askui_works_controller-af934960f33fe0533a313024389f7bcb.png"},22074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_askui_works_server-e9bf3ca73649aceaafcf33355fdca09b.png"}}]);