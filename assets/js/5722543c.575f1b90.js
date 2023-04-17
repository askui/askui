"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19911],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const i={},l="Speed Up Execution",o={unversionedId:"general/Best Practice/speed_up_execution",id:"version-0.3.1/general/Best Practice/speed_up_execution",title:"Speed Up Execution",description:"Lazy inference is a transitive feature to speed up the execution of instructions. Following the principle: Only execute that what needs to be executed. To benefit from this feature, you have to write the commands in a certain way.",source:"@site/versioned_docs/version-0.3.1/general/03-Best Practice/speed_up_execution.md",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/speed_up_execution",permalink:"/docs/0.3.1/general/Best Practice/speed_up_execution",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.3.1/general/03-Best Practice/speed_up_execution.md",tags:[],version:"0.3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Selecting UI Elements",permalink:"/docs/0.3.1/general/Best Practice/selecting_ui_elements"},next:{title:"askui UI Controller Docker Images",permalink:"/docs/0.3.1/general/Continuous Integration/askui-ui-controller-docker-images"}},c={},s=[{value:"1. Avoid CPU Inference",id:"1-avoid-cpu-inference",level:2},{value:"2. Combine a Text Filter with an Element Filter",id:"2-combine-a-text-filter-with-an-element-filter",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"speed-up-execution"},"Speed Up Execution"),(0,r.kt)("p",null,"Lazy inference is a transitive feature to speed up the execution of instructions. Following the principle: ",(0,r.kt)("i",null,"Only execute that what needs to be executed"),". To benefit from this feature, you have to write the commands in a certain way."),(0,r.kt)("p",null,"Our AI model consists of the following submodels:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Tasks"),(0,r.kt)("th",{parentName:"tr",align:null},"Speed"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Detect all UI elements"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Element Detector"),(0,r.kt)("td",{parentName:"tr",align:null},"Search via ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Template_matching"},"template matching")," for a cropped image inside the screenshot"),(0,r.kt)("td",{parentName:"tr",align:null},"slow \ud83d\udc0c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon Classifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Predict the class of an icon, e.g., a user icon"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optical Character Recognition (OCR)"),(0,r.kt)("td",{parentName:"tr",align:null},"Convert the image of a text into text"),(0,r.kt)("td",{parentName:"tr",align:null},"fast \ud83d\ude80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color Classifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Detect the colors of all elements"),(0,r.kt)("td",{parentName:"tr",align:null},"slow \ud83d\udc0c")))),(0,r.kt)("p",null,"The submodels have different execution times. It depends on wether they are executable and, therefore, executed on a GPU or a CPU. The fast models are executed on a GPU and the slow ones on a CPU."),(0,r.kt)("p",null,"During the execution of an instruction, the lazy inference can deactivate submodels to speed up execution. What can be deactivated can be derived from the instruction, e.g.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"await aui.click().text().withText('Login').exec()")," only needs the ",(0,r.kt)("b",null,"Object Detector")," and the ",(0,r.kt)("b",null,"OCR")," but not the ",(0,r.kt)("b",null,"Icon Classifier"),", ",(0,r.kt)("b",null,"Color Classifier")," or the ",(0,r.kt)("b",null,"Custom Element Detector"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"await aui.pressKey('enter').exec()")," is not relying on any of the models at all as no classification is necessary. In this case. no submodel is executed. ")),(0,r.kt)("h2",{id:"1-avoid-cpu-inference"},"1. Avoid CPU Inference"),(0,r.kt)("p",null,"The submodels ",(0,r.kt)("b",null,"Custom Element Detector")," and ",(0,r.kt)("b",null,"Color Classifier")," are executed on the CPU and are slow. Theses submodels should therefore be avoided."),(0,r.kt)("b",null,"Don't:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().customElement({\n  customImage: '.../login_button.png', \n  name: 'login button',\n}).exec();\nawait aui.click().customElement({\n  customImage: '.../text_overview.png', \n  name: 'overview button',\n}).exec();\nawait aui.click().text().withText('Best Practice').withColor('green').exec();\n")),(0,r.kt)("b",null,"Do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().button().withText('Login').exec();\nawait aui.click().text().withText('Overview').exec();\nawait aui.click().text().withText('Best Practice').exec();\n")),(0,r.kt)("h2",{id:"2-combine-a-text-filter-with-an-element-filter"},"2. Combine a Text Filter with an Element Filter"),(0,r.kt)("p",null,"The ",(0,r.kt)("b",null,"OCR")," model is applied to multiple UI elements to extract the text, e.g., links, text etc. The text filters ",(0,r.kt)("inlineCode",{parentName:"p"},"withText()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withExactText()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"containsText()")," are applied to all UI elements containing text. To avoid that ",(0,r.kt)("b",null,"OCR")," is applied on all elements you should use it in combination with an element filter. "),(0,r.kt)("b",null,"Don't:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().withText('See here').exec();\nawait aui.click().withText('Sign in').exec();\n")),(0,r.kt)("b",null,"Do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.click().link().withText('See here').exec();\nawait aui.click().text().withText('Sign in').exec();\n")))}p.isMDXComponent=!0}}]);