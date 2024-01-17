"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5525],{89723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),s=t(11151);const i={},o="AskUI Runner",a={id:"api/AskUI-Runner",title:"AskUI Runner",description:"If you want to execute your workflows defined in AskUI Studio in your own environment instead of with AskUI self-hosted runners, this page will help you to set it up.",source:"@site/versioned_docs/version-0.13.1/api/11-AskUI-Runner.md",sourceDirName:"api",slug:"/api/AskUI-Runner",permalink:"/docs/api/AskUI-Runner",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/11-AskUI-Runner.md",tags:[],version:"0.13.1",sidebarPosition:11,frontMatter:{},sidebar:"apiSidebar",previous:{title:"Supported Keys",permalink:"/docs/api/Supported-Keys"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Start UiController",id:"start-uicontroller",level:2},{value:"Execute Workflows on a Remote System: Change UiController URL",id:"execute-workflows-on-a-remote-system-change-uicontroller-url",level:3},{value:"Generating up-to-date Configuration Schema",id:"generating-up-to-date-configuration-schema",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"askui-runner",children:"AskUI Runner"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to execute your workflows defined in ",(0,r.jsx)(n.strong,{children:"AskUI Studio"})," in your own environment instead of with AskUI self-hosted runners, this page will help you to set it up."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Architecture drawing how the AskUI-Runner fits into AskUI Studio, AskUI SDK and AskUI Remote Device Controller. The AskUI-Runner fetches Workflows from AskUI Studio and uploads the results back to it. The Runner uses the AskUI SDK which passes the instructions from the workflow steps to the AskUI Remote Device Controller.",src:t(83856).Z+"",width:"1437",height:"622"})}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Python 3.10 or higher"}),"\n",(0,r.jsx)(n.li,{children:"Node.js 16 or higher"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend using a virtual environment for Python. Make sure ",(0,r.jsx)(n.code,{children:"python --version"})," returns 3.10 or higher:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We have not yet published the ",(0,r.jsx)(n.strong,{children:"AskUI Runner"})," to PyPI. For now, you can install it directly from GitHub:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/askui/askui-runner.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the standard logging output of the ",(0,r.jsx)(n.strong,{children:"AskUI runner"})," is minimal - we are soon going to change that. But you should see the runner starting the running of workflows as soon as you schedule some runs through the AskUI Studio."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Create a configuration file (",(0,r.jsx)(n.code,{children:".y{a}ml"})," or ",(0,r.jsx)(n.code,{children:".json"}),") in a directory of your choosing. The configuration file should contain at least some credentials and the command with which you start the runner without the config file flag:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"credentials:\n  workspace_id: <workspace id> # replace with your workspace id\n  access_token: <access token> # replace with your access token\nrunner:\n  exec: python -m askui_runner # update if your command is different\n  tags: [<tag 1>, <tag 2>, ..] # replace with your own runner tags\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"#generating-up-to-date-configuration-schema",children:"Generating up-to-date Configuration Schema"})]}),"\n",(0,r.jsx)(n.p,{children:"Start the runner using"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python -m askui_runner -c <path to your config file, e.g., askui-runner.config.yaml>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"start-uicontroller",children:"Start UiController"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to run your workflows on the same system as the runner you need to start an UiController that listens on port ",(0,r.jsx)(n.code,{children:"6769"}),". Please download the one for your operating system and start it:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe",children:"Windows"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe",children:"Windows (new version - beta release)"})," ",(0,r.jsx)(n.a,{href:"/docs/api/Remote-Device-Controller",children:"More about the new version"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage",children:"Linux"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macOS"})," After installation to ",(0,r.jsx)(n.code,{children:"Applications"})," remove the quarantine flag with the following command run from a terminal: ",(0,r.jsx)(n.code,{children:"xattr -d com.apple.quarantine /Applications/askui-ui-controller.app"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg",children:"macOS(Intel)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg",children:"macOS(Apple silicon)"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"execute-workflows-on-a-remote-system-change-uicontroller-url",children:"Execute Workflows on a Remote System: Change UiController URL"}),"\n",(0,r.jsx)(n.p,{children:"You can change the UiController-URL so the runner can talk to a UiController that runs on a remote machine or on a different port:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'...\nrunner:\n  ...\n  controller:\n    host: "127.0.0.1"\n    port: 7000\n'})}),"\n",(0,r.jsx)(n.h2,{id:"generating-up-to-date-configuration-schema",children:"Generating up-to-date Configuration Schema"}),"\n",(0,r.jsx)(n.p,{children:"Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://pdm.fming.dev/latest/",children:"PDM"})," 2.8 or higher for contributing and creating the JSON schema of the config"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Find out about all configuration options by taking a look at the JSON schema of the configuration. You can generate an up-to-date JSON schema by cloning this repository and running the following commands."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"## Install and initialize pdm\npip install pdm\npdm install\n\npdm run python -m scripts.generate_config_schema_json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},83856:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/askui-runner-simple-architecture-dc23fef52d5b5b87d2339b90a0a4aeb9.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);