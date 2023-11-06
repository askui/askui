"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50963],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={sidebar_position:1,title:"Annotations, Screenshots and Videos"},r=void 0,s={unversionedId:"general/Element Selection/annotations-and-screenshots",id:"version-0.12.2/general/Element Selection/annotations-and-screenshots",title:"Annotations, Screenshots and Videos",description:"Index",source:"@site/versioned_docs/version-0.12.2/general/03-Element Selection/annotations-and-screenshots.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/annotations-and-screenshots",permalink:"/docs/0.12.2/general/Element Selection/annotations-and-screenshots",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/03-Element Selection/annotations-and-screenshots.md",tags:[],version:"0.12.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Annotations, Screenshots and Videos"},sidebar:"docsSidebar",previous:{title:"Framework Configuration",permalink:"/docs/0.12.2/general/Getting Started/configure_test_framework"},next:{title:"Text and Element Selectors",permalink:"/docs/0.12.2/general/Element Selection/text-and-element-selectors"}},l={},p=[{value:"Interactive Annotation",id:"interactive-annotation",level:2},{value:"Static Annotation",id:"static-annotation",level:2},{value:"Taking Screenshots",id:"taking-screenshots",level:2},{value:"Recording Videos",id:"recording-videos",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Index")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#interactive-annotation"},"Interactive Annotation")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#static-annotation"},"Static Annotation")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#taking-screenshots"},"Taking Screenshots")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#recording-videos"},"Recording Videos")),(0,o.kt)("h2",{id:"interactive-annotation"},"Interactive Annotation"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Windows Users")),(0,o.kt)("p",{parentName:"admonition"},"Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"annotate()")," as explained ",(0,o.kt)("a",{parentName:"p",href:"#static-annotation"},"in the section below"),". The interactive annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"aui.annotateInteractively()")," currently leads to an error on Windows.")),(0,o.kt)("p",null,"An interactive annotation is in essence three components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A screenshot of whatever the AskUI controller is told to see, as defined in the config file:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Visual Studio Code without annotations.",src:n(31911).Z,width:"1937",height:"914"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Annotations, marked by the red boxes you see, which are added by the machine learning model.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Visual Studio Code with annotations as red bounding boxes.",src:n(71066).Z,width:"1266",height:"949"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Element-Descriptions, which are labels applied to the annotations of the screenshot.")),(0,o.kt)("p",null,"Clicking an element will copy this element-description, which we can then use in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.2/general/Getting%20Started/write-your-first-instruction"},"step 3 of Write Your First Instruction"),", which is actually using that run instructions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Interactive Annotation in action",src:n(44754).Z,width:"2560",height:"1080"})),(0,o.kt)("h2",{id:"static-annotation"},"Static Annotation"),(0,o.kt)("p",null,"The helper function ",(0,o.kt)("inlineCode",{parentName:"p"},"annotate()")," creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Synopsis and Arguments"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Synopsis")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"UiControlClient.annotate();\n\n// or\n\nUiControlClient.annotate({\n    imagePath: '<your-image-path>',\n    outputPath: '<path-of-the-generated-html>',\n    fileNamePrefix: '<prefix-of-the-output-file>',\n    customElements: CustomElementJson[] // more details in the example below\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If no argument is given, "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A screenshot of your specified screen will be taken, and annotated. Thereafter, it will be saved as an interactive HTML file into the ",(0,o.kt)("inlineCode",{parentName:"li"},"report/")," folder."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"imagePath"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If defined, the image at the path is loaded and annotated."),(0,o.kt)("li",{parentName:"ul"},"If not defined, a screenshot of your specified screen is taken and annotated."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"outputPath"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If defined, the generated HTML report will be saved in this path."),(0,o.kt)("li",{parentName:"ul"},"If not defined, a folder ",(0,o.kt)("inlineCode",{parentName:"li"},"report/")," will be created in the project root."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fileNamePrefix"),": The prefix for the resulting HTML report. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"customElements"),": A ",(0,o.kt)("em",{parentName:"p"},"list")," of custom elements. The AI model will use them to detect elements similar to them.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nTakes a screenshot of your selected display,\nand produces an HTML report file inside the\ndefault output path <project_root>/report.\n*/\nawait aui.annotate();\n\n\n/*\nLoads the image 'my-screenshot.png'\nand produces an HTML report file inside\nthe output path 'annotation-reports/'\n*/\nawait aui.annotate(\n    {\n    imagePath: 'my-screenshot.png',\n    outputPath: 'annotation-reports/'\n    });\n\n\n/*\nLoads the image 'my-screenshot.png' together with\nthe custom elements and produces an HTML report file\ninside the output path 'annotation-reports/'\n*/\nawait aui.annotate(\n    {\n    imagePath: 'my-screenshot.png',\n    outputPath: 'annotaion-reports/',\n    customElements: [\n        {\n        customImage: '<custom_image_path|base64Image>',\n        imageCompareFormat: 'grayscale',\n        name: 'custom element 1'\n        },\n        {\n        /*\n        for this custom element the OCR AI model\n        will be used to extract text from the image,\n        since no name was given.\n        */\n        customImage: '<custom_image2_path|base64Image>',\n        imageCompareFormat: 'RGB',\n        }\n    ]\n    });\n")),(0,o.kt)("h2",{id:"taking-screenshots"},"Taking Screenshots"),(0,o.kt)("p",null,"If you want to see what AskUI sees at a specific point in the execution you can use TypeScript to create a screenshot. Here is a code-snippet you can copy and paste into your code that saves an image with the name ",(0,o.kt)("strong",{parentName:"p"},"screenshot.png")," to the root-folder of your project."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Do not forget the import mentioned at the start of the snippet!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Add this to the start of your AskUI-file containing your workflows/instructions\nimport * as fs from 'fs';\n\n// First, get all the information from the annotation\n// This will also save an interactive HTML file to the 'report/' folder\nconst annotation = await aui.annotate();\n\n// The screenshot is contained as a string in 'base64' format\n// Create a buffer with the base64 image\nlet buf = Buffer.from(annotation.image.split('base64,')[1], 'base64');\n\n// Write the file \nfs.writeFileSync(\"./test.png\", buf);\n")),(0,o.kt)("h2",{id:"recording-videos"},"Recording Videos"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is currently under construction. If you have any questions, please feel free to reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@askui.com"},"info@askui.com")," or book a meeting with Jonas ",(0,o.kt)("a",{parentName:"p",href:"https://calendly.com/jonas-menesklou/digital-get-to-know"},"over Calendly"),".")))}m.isMDXComponent=!0},44754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"},31911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interactive_annotation1-d1f890769c71495de9e9dd06f2878d60.png"},71066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interactive_annotation2-d508cb51bc1046981cf7dd6377e73993.png"}}]);