"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7970],{2868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(85893),s=r(11151);const t={},o="AskUI UI Control Client",l={id:"api/Configuration/askui-ui-control-client",title:"AskUI UI Control Client",description:"Log Level",source:"@site/versioned_docs/version-0.13.1/api/08-Configuration/askui-ui-control-client.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/api/Configuration/askui-ui-control-client",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/08-Configuration/askui-ui-control-client.md",tags:[],version:"0.13.1",frontMatter:{},sidebar:"apiSidebar",previous:{title:"annotateInteractively",permalink:"/docs/api/Annotation/annotateInteractively"},next:{title:"askui UI Controller",permalink:"/docs/api/Configuration/askui-ui-controller"}},c={},d=[{value:"Log Level",id:"log-level",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceServerUrl",id:"inferenceserverurl",level:3},{value:"resize",id:"resize",level:3},{value:"credentials",id:"credentials",level:3},{value:"reporter",id:"reporter",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"askui-ui-control-client",children:"AskUI UI Control Client"}),"\n",(0,i.jsx)(n.h2,{id:"log-level",children:"Log Level"}),"\n",(0,i.jsxs)(n.p,{children:["Set the log level of the AskUI UI Control Client using the ",(0,i.jsx)(n.code,{children:"LOG_LEVEL"})," environment variable.\nThe following log levels are available:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"fatal"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"error"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"warn"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"info"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"debug"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"trace"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"silent"'})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"verbose"'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The log level defaults to ",(0,i.jsx)(n.code,{children:'"info"'}),". and it can be changed with the following command:"]}),"\n",(0,i.jsx)(n.p,{children:"Bash or similar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export LOG_LEVEL=verbose\n"})}),"\n",(0,i.jsx)(n.p,{children:"Powershell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'$env:LOG_LEVEL="verbose"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"uicontrollerurl",children:"uiControllerUrl"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"uiControllerUrl"}),": ",(0,i.jsx)(n.code,{children:"string"})," - Default: ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:6769"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The url of the AskUI UI Controller controlling the OS."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"inferenceserverurl",children:"inferenceServerUrl"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"inferenceServerUrl"}),": ",(0,i.jsx)(n.code,{children:"string"})," - Default: ",(0,i.jsx)(n.code,{children:"https://inference.askui.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The address of the AskUI Inference server."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resize",children:"resize"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"resize"}),": ",(0,i.jsx)(n.code,{children:"number?"})," - Default: ",(0,i.jsx)(n.code,{children:"undefined"}),"\nThe side length of the target image to resize to in px. Your screenshot image will be resized with the original aspect ratio, and the lengths image side will be equal to this number. This can be used to reduce the inference time by reducing the request size in case of a bad internet connection. But it can cause a decrease in the prediction quality.\nThe resizing will be skipped if it's undefined."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"credentials",children:"credentials"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"credentials"}),": ",(0,i.jsx)(n.code,{children:"Credentials"})," Your user credentials - Optional.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"workspaceId"}),": ",(0,i.jsx)(n.code,{children:"string"})," Your workspace id"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"token"}),": ",(0,i.jsx)(n.code,{children:"string"})," An access token for authentication with the AskUI Inference Server"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Provide credentials for authentication with the AskUI Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables ",(0,i.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})," and ",(0,i.jsx)(n.code,{children:"ASKUI_TOKEN"})," but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the ",(0,i.jsx)(n.code,{children:"workspace id"})," via setting the ",(0,i.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})," environment variable, you need to set token with environment variables as well."]}),"\n",(0,i.jsx)(n.p,{children:"Setting credentials in code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:" let aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n"})}),"\n",(0,i.jsx)(n.p,{children:"Setting credentials using environment variables (Powershell):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"$env:ASKUI_WORKSPACE_ID = <your workspace id>\n$env:ASKUI_TOKEN = <your access token>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Setting credentials using environment variables (Bash or similar):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export ASKUI_WORKSPACE_ID=<your workspace id>\nexport ASKUI_TOKEN=<your access token>\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"reporter",children:"reporter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"reporter"}),": ",(0,i.jsx)(n.code,{children:"Reporter"})," or ",(0,i.jsx)(n.code,{children:"Reporter[]"})," the reporter(s) to report on step runs/executions - optional."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set one or multiple AskUI step reporters that implement AskUI's ",(0,i.jsx)(n.code,{children:"Reporter"})," interface. We provide step reporters through the ",(0,i.jsx)(n.a,{href:"https://github.com/askui/askui-reporters",children:(0,i.jsx)(n.code,{children:"askui-reporters"})})," package. See ",(0,i.jsx)(n.a,{href:"/docs/general/Integrations/reporting#implement-your-own-reporter",children:"our reporting page"})," for instructions on how to implement your own reporter."]}),"\n",(0,i.jsx)(n.p,{children:"Setting multiple reporters in code (example):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"aui = await UiControlClient.build({\n    reporter: [\n        new AskUIAnnotationStepReporter(\n          AnnotationLevel.ALL,\n          \"annotation_report\",\n          \"_annotation\"\n        ),\n        new AskUIJestHtmlStepReporter({\n          withScreenshots: 'always' as const,\n          withDetectedElements: 'always' as const,\n        })\n      ],\n  });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/general/Integrations/reporting",children:"our reporting page"})," for a comprehensive overview."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var i=r(67294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);