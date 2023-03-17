"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67079],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=i,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(25773),i=(n(27378),n(35318));const a={},l="askui UI Control Client",o={unversionedId:"api/Configuration/askui-ui-control-client",id:"version-0.7.2/api/Configuration/askui-ui-control-client",title:"askui UI Control Client",description:"Log Level",source:"@site/versioned_docs/version-0.7.2/api/08-Configuration/askui-ui-control-client.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/api/Configuration/askui-ui-control-client",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/08-Configuration/askui-ui-control-client.md",tags:[],version:"0.7.2",frontMatter:{},sidebar:"apiSidebar",previous:{title:"annotateInteractively",permalink:"/docs/api/Annotation/annotateInteractively"},next:{title:"askui UI Controller",permalink:"/docs/api/Configuration/askui-ui-controller"}},s={},u=[{value:"Log Level",id:"log-level",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceServerUrl",id:"inferenceserverurl",level:3},{value:"resize",id:"resize",level:3},{value:"annotationLevel",id:"annotationlevel",level:3},{value:"Example",id:"example",level:4},{value:"credentials",id:"credentials",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"askui-ui-control-client"},"askui UI Control Client"),(0,i.kt)("h2",{id:"log-level"},"Log Level"),(0,i.kt)("p",null,"Set the log level of the askui UI Control Client using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable.\nThe following log levels are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"fatal"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"error"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"warn"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"info"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"debug"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"trace"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"silent"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"verbose"'),".")),(0,i.kt)("p",null,"The log level defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},'"info"'),". and it can be changed with the following command:"),(0,i.kt)("p",null,"Bash or similar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export LOG_LEVEL=verbose\n")),(0,i.kt)("p",null,"Powershell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:LOG_LEVEL="verbose"\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"uicontrollerurl"},"uiControllerUrl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"uiControllerUrl"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:6769"))),(0,i.kt)("p",null,"The url of the askui UI Controller controlling the OS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inferenceserverurl"},"inferenceServerUrl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inferenceServerUrl"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://inference.askui.com"))),(0,i.kt)("p",null,"The address of the askui Inference server."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resize"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"number?")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\nThe side length of the target image to resize to in px. Your screenshot image will be resized with the original aspect ratio, and the lengths image side will be equal to this number. This can be used to reduce the inference time by reducing the request size in case of a bad internet connection. But it can cause a decrease in the prediction quality.\nThe resizing will be skipped if it's undefined.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"annotationlevel"},"annotationLevel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"annotationLevel"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"AnnotationLevel")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"AnnotationLevel.DISABLED"))),(0,i.kt)("p",null,"AnnotationLevel is implemented as an enum. You have three options: ",(0,i.kt)("inlineCode",{parentName:"p"},"DISABLED"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ALL"),":  Runs the ",(0,i.kt)("a",{target:"_blank",href:n(59268).Z},"annotate")," command after the execution of each test step."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),": Runs the annotate command if the test step fails"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DISABLED"),": Never runs the annotate command after test steps"),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    annotationLevel: AnnotationLevel.DISABLED\n  });\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"credentials"},"credentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"credentials"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Credentials")," Your user credentials - Optional.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"workspaceId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Your workspace id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"token"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," An access token for authentication with the askui Inference Server")))),(0,i.kt)("p",null,"Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ASKUI_TOKEN")," but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace id")," via setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID")," environment variable, you need to set token with environment variables as well."),(0,i.kt)("p",null,"Setting credentials in code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n")),(0,i.kt)("p",null,"Setting credentials using environment variables (Powershell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:ASKUI_WORKSPACE_ID = <your workspace id>\n$env:ASKUI_TOKEN = <your access token>\n")),(0,i.kt)("p",null,"Setting credentials using environment variables (Bash or similar):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export ASKUI_WORKSPACE_ID=<your workspace id>\nexport ASKUI_TOKEN=<your access token>\n")),(0,i.kt)("hr",null))}c.isMDXComponent=!0},59268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"}}]);