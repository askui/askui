"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72262],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(25773),o=(n(27378),n(35318));const r={custom_edit_url:null},i="Annotate Image",l={unversionedId:"general/Tooling/annotate-image",id:"version-0.2.1/general/Tooling/annotate-image",title:"Annotate Image",description:"The askui client offers an annotation tool which helps with the test creation and debugging of failed tests.",source:"@site/versioned_docs/version-0.2.1/general/05-Tooling/annotate-image.md",sourceDirName:"general/05-Tooling",slug:"/general/Tooling/annotate-image",permalink:"/docs/0.2.1/general/Tooling/annotate-image",draft:!1,editUrl:null,tags:[],version:"0.2.1",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Gitlab CI/CD",permalink:"/docs/0.2.1/general/Continuous Integration/gitlab-ci"},next:{title:"Annotate Interactively",permalink:"/docs/0.2.1/general/Tooling/annotate-interactively"}},s={},u=[{value:"How It Works",id:"how-it-works",level:2},{value:"How to Use",id:"how-to-use",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"annotate-image"},"Annotate Image"),(0,o.kt)("p",null,"The askui client offers an annotation tool which helps with the test creation and debugging of failed tests."),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"The annotation command annotates an image with our AI model producing a single report as an HTML file. This file can easily be shared."),(0,o.kt)("p",null,"This command takes as optional input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"imagePath"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If this argument is defined, the image at the path is loaded and annotated"),(0,o.kt)("li",{parentName:"ul"},"If this argument is not defined, a screenshot of your specified screen is taken and annotated"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"outputPath"),": This is the output folder path in which the HTML reports are going to be saved. If it's not defined then a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"report")," will be created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customElements"),": A list of custom elements. The AI model will use them to detect elements similar to them.")),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n* Takes a screenshot of your selected display and produces an HTML report file inside the default output path <project_root>/report.\n*/\nawait aui.annotate();\n\n/**\n* Loads the image from <image_path> and produces an HTML report file inside the default output path <output_path>\n*/\nawait aui.annotate(\n    {\n    imagePath: '<image_path>',\n    outputPath: '<output_path>'\n    });\n\n/**\n* Loads the image from <image_path> and the custom elements and produces an HTML report file inside the default output path <output_path>\n*/\nawait aui.annotate(\n    {\n    imagePath: '<image_path>',\n    outputPath: '<output_path>',\n    customElements: [\n        {\n        customImage: '<custom_image_path|base64Image>',\n        imageCompareFormat: 'grayscale',\n        name: 'custom element 1'\n        },\n        {\n        // for this custom element the OCR AI model will be used to extract text from the image, since no name was givin  \n        customImage: '<custom_image2_path|base64Image>',\n        imageCompareFormat: 'RGB',\n        }\n    ]\n    });\n")))}c.isMDXComponent=!0}}]);