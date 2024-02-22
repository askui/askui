"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33092],{56956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(17624),r=t(4552);const i={sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},o="AskUI on Windows",l={id:"general/Getting Started/Installing AskUI/getting-started",title:"AskUI on Windows",description:"Prerequisites",source:"@site/docs/general/01-Getting Started/Installing AskUI/getting-started.md",sourceDirName:"general/01-Getting Started/Installing AskUI",slug:"/general/Getting Started/Installing AskUI/getting-started",permalink:"/docs/next/general/Getting Started/Installing AskUI/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/01-Getting Started/Installing AskUI/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"How AskUI Works",permalink:"/docs/next/general/Getting Started/guide-how-askui-works"},next:{title:"Create Your First Instruction",permalink:"/docs/next/general/Getting Started/write-your-first-instruction"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 1: Download Installer",id:"step-1-download-installer",level:3},{value:"Step 2: Setup AskUI on Your Computer",id:"step-2-setup-askui-on-your-computer",level:3},{value:"Alternative: Installation via Terminal (Silent Mode)",id:"alternative-installation-via-terminal-silent-mode",level:4},{value:"Options:",id:"options",level:4},{value:"Example:",id:"example",level:4},{value:"Step 3: Activate the AskUI Development Environment (ADE)",id:"step-3-activate-the-askui-development-environment-ade",level:3},{value:"Step 4: Connect Your AskUI Account",id:"step-4-connect-your-askui-account",level:3},{value:"Step 5: (Optional) Configure Proxy",id:"step-5-optional-configure-proxy",level:3},{value:"Step 6: Start the Controller",id:"step-6-start-the-controller",level:3},{value:"Step 7: Create a New Project",id:"step-7-create-a-new-project",level:3},{value:"Step 8: Open Your Project",id:"step-8-open-your-project",level:3},{value:"Step 9: Open a Workflow File",id:"step-9-open-a-workflow-file",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"askui-on-windows",children:"AskUI on Windows"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Check if you have the following requirements, before you start the process."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You need an AskUI account. Don't have one? Register for a free trial ",(0,s.jsx)(n.a,{href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5",children:"here"}),"!"]}),"\n",(0,s.jsx)(n.li,{children:"Make sure you have Administrator privileges on the computer, where you want to use AskUI."}),"\n",(0,s.jsxs)(n.li,{children:["Consider using an IDE. We recommend ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-download-installer",children:"Step 1: Download Installer"}),"\n",(0,s.jsxs)(n.p,{children:["Download the AskUI Installer ",(0,s.jsx)(n.a,{href:"https://files.askui.com/releases/Installer/24.2.2/AskUI-Suite-24.2.2-System-Installer-Win-AMD64-Full.exe",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It will install the following components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/general/Components/AskUI-Controller",children:"AskUI Controller"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})}),"\n",(0,s.jsx)(n.li,{children:"AskUI Development Kit (SDK)"}),"\n",(0,s.jsxs)(n.li,{children:["(optional) ",(0,s.jsx)(n.a,{href:"/docs/next/general/Components/AskUI-Runner",children:"AskUI Runner (Executing workflows from AskUI Studio)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-setup-askui-on-your-computer",children:"Step 2: Setup AskUI on Your Computer"}),"\n",(0,s.jsxs)(n.p,{children:["Run the downloaded installer as ",(0,s.jsx)(n.strong,{children:"Administrator"})," (Rightclick the installer and select ",(0,s.jsx)(n.strong,{children:"Run as administrator"}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The installer prompts Windows to display a security alert. Click on ",(0,s.jsx)(n.code,{children:"More Info"})," in the top left and then on ",(0,s.jsx)(n.code,{children:"Run Anyway"})," in the bottom right corner of the dialog to proceed with the installation."]})}),"\n",(0,s.jsx)(n.p,{children:"Next, follow the instructions in the setup wizard until the end."}),"\n",(0,s.jsx)(n.h4,{id:"alternative-installation-via-terminal-silent-mode",children:"Alternative: Installation via Terminal (Silent Mode)"}),"\n",(0,s.jsxs)(n.p,{children:["Use the downloaded executable file (",(0,s.jsx)(n.strong,{children:".exe"}),") for silent installation, which allows you to choose the installation directory and components. To install silently, run the following command terminal (Application ",(0,s.jsx)(n.strong,{children:"CMD"}),") with Administrator privileges:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'"<installer_path>" /qn\n'})}),"\n",(0,s.jsx)(n.h4,{id:"options",children:"Options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'/l*v "<log_file_path>"'}),": Set the installer log file path."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'APPDIR="<installation_directory>"'}),": Specify the installation directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'INSTALL_ADK="NO"'}),": Skip AskUI Development Environment installation.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'INSTALL_NODE="NO"'}),": Skip Isolated Node environment installation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'INSTALL_ASKUI_RUNNER="NO"'}),": Skip AskUI Runner installation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'HTTP_PROXY="<http_proxy_address>"'}),": Set the HTTP proxy address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'HTTPS_PROXY="<https_proxy_address>"'}),": Set the HTTPS proxy address."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'CONFIGURE_WINDOWS_FIREWALL="NO"'}),": Skip Windows Firewall configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsxs)(n.p,{children:["This command installs all components silently and sets the HTTP proxy address to ",(0,s.jsx)(n.a,{href:"http://proxy.example.com",children:"http://proxy.example.com"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'"<installer_path>" /qn HTTP_PROXY="http://proxy.example.com"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-activate-the-askui-development-environment-ade",children:"Step 3: Activate the AskUI Development Environment (ADE)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open a terminal. We recommend using ",(0,s.jsx)(n.em,{children:"PowerShell"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Run the command ",(0,s.jsx)(n.code,{children:"askui-shell"})," (type it and press ",(0,s.jsx)(n.em,{children:"Enter"}),"). This brings you into the AskUI Development Environment (short ADE) where you can configure your installation, start the AskUI Controller, create new AskUI-Projects and run workflows."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Activating the ADE may take a few seconds."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you are not what an ADE command does, you can run ",(0,s.jsx)(n.code,{children:"Get-Help <command>"})," to get more information about it."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-4-connect-your-askui-account",children:"Step 4: Connect Your AskUI Account"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,s.jsx)(n.strong,{children:"AskUI Studio"})," (for free)."]}),(0,s.jsxs)(n.p,{children:["Please ",(0,s.jsx)(n.a,{href:"https://xa5a040gvfz.typeform.com/to/Ndh2NkV6",children:"fill out this form"})," to schedule a demonstration or ",(0,s.jsx)(n.a,{href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5",children:"request a trial"})," to obtain access to ",(0,s.jsx)(n.strong,{children:"AskUI Studio"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command to authenticate and connect your ADE to your AskUI account. Replace ",(0,s.jsx)(n.code,{children:"<access token>"})," and ",(0,s.jsx)(n.code,{children:"<workspace id>"})," with your real credentials."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Token"})," You can create a new access token inside our web app. Go to any Workspace and navigate to ",(0,s.jsx)(n.em,{children:"Access Tokens"})," in the left sidebar."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Workspace ID"})," Navigate to your workspace's settings. You can find the workspace ID under ",(0,s.jsx)(n.em,{children:"General"})," below the workspace's name."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-SetSettings -WorkspaceId <workspace id> -Token <access token>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Validate the settings with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-ShowSettings\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-5-optional-configure-proxy",children:"Step 5: (Optional) Configure Proxy"}),"\n",(0,s.jsxs)(n.p,{children:["If you are behind a proxy you have to set the proxy address. Replace ",(0,s.jsx)(n.code,{children:"<http_proxy_address>"})," and ",(0,s.jsx)(n.code,{children:"<https_proxy_address>"})," with the ones for your proxy:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-SetSettings -HttpProxy <http_proxy_address> -HttpsProxy <https_proxy_address>\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you have already configured your proxy settings in the setup wizard, you can skip this step."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Configuring proxy or firewall settings can be a challenge. If you need assistance with this task, feel free to schedule a call with our enterprise support team ",(0,s.jsx)(n.a,{href:"https://calendly.com/d/3m3-myw-9z7/askui-enterprise-onboarding-assistance",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-6-start-the-controller",children:"Step 6: Start the Controller"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You have to disable mouse acceleration for the AskUI Controller to work properly!"})}),"\n",(0,s.jsx)(n.p,{children:"Start the AskUI Controller with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-StartController\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open another command prompt and ",(0,s.jsxs)(n.a,{href:"#step-3-activate-the-askui-development-environment-ade",children:["activate the ",(0,s.jsx)(n.em,{children:"ADE"})]})," there again."]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively start the AskUI Controller in the background to keep using the same command prompt:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-StartController -RunInBackground\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Press ",(0,s.jsx)(n.em,{children:"Enter"})," to return to the ",(0,s.jsx)(n.em,{children:"ADE"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"step-7-create-a-new-project",children:"Step 7: Create a New Project"}),"\n",(0,s.jsx)(n.p,{children:"Switch to a directory where you want to create the new AskUI project and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-NewProject -ProjectName askui_first -TestFramework jest -TypeScriptConfig true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-8-open-your-project",children:"Step 8: Open Your Project"}),"\n",(0,s.jsxs)(n.p,{children:["Your new AskUI project has now been created inside the folder you specified and it's path is set as your current working directory: ",(0,s.jsx)(n.code,{children:"<path you ran AskUI-NewProject>/<your_askui_project_name>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now open this folder with your IDE of choice."}),"\n",(0,s.jsx)(n.p,{children:"If you are using Visual Studio Code, you can run the following command in the same command prompt:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"code .\n"})}),"\n",(0,s.jsx)(n.p,{children:"On the left, in your file explorer, you should see the files that make up your AskUI project."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".askui\\Settings"})," - Global Project Settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allure-results"})," - AskUI reporter files will be generated here"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"askui_example"})," - Workflow Files\na. ",(0,s.jsx)(n.code,{children:"helpers"})," - Helper functions for your project\nb. ",(0,s.jsx)(n.code,{children:"jest.config.ts"})," - Jest Automation Framework Settings\nc. ",(0,s.jsx)(n.code,{children:"my-first-askui-test-suite.ts"})," - An example workflow file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_modules"})," - Packages needed to make AskUI work"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"report"})," - Annotations will be generated here"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:".."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"AskUI Project Visual Studio Code",src:t(84640).c+"",width:"1330",height:"1020"})}),"\n",(0,s.jsx)(n.h3,{id:"step-9-open-a-workflow-file",children:"Step 9: Open a Workflow File"}),"\n",(0,s.jsxs)(n.p,{children:["The workflow files are where you will write your automations scripts.\nTo find them, navigate to the ",(0,s.jsx)(n.code,{children:"askui_example"})," folder. This is the place, where you can store your workflow files."]}),"\n",(0,s.jsxs)(n.p,{children:["To add a new workflow, create a file in this folder, ending in ",(0,s.jsx)(n.code,{children:".test.ts"})]}),"\n",(0,s.jsxs)(n.p,{children:["The project comes with one ",(0,s.jsx)(n.strong,{children:"template workflow"}),", which is called ",(0,s.jsx)(n.code,{children:"my-first-askui-test-suite.ts"}),".\nOn the next page, you will dive deeper on how to write instructions in the AskUI automation framework."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["You are now ready to create your first workflow with AskUI! Please go to the next page ",(0,s.jsx)(n.a,{href:"/docs/next/general/Getting%20Started/write-your-first-instruction",children:"Write Your First Instruction"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},84640:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Visual_Studio_Code-abe00683d7a490bed702c7c67c6c5b0e.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);