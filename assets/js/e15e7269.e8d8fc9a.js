"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15480],{29735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),o=t(11151);const r={sidebar_position:2},i="Jest",a={id:"general/Troubleshooting/jest",title:"Jest",description:"Termination Error",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/jest.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/jest",permalink:"/docs/general/Troubleshooting/jest",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/jest.md",tags:[],version:"0.13.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Cannot Find Element Error",permalink:"/docs/general/Troubleshooting/cannot_find_element_error"},next:{title:"Linux",permalink:"/docs/general/Troubleshooting/linux"}},c={},l=[{value:"Termination Error",id:"termination-error",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"jest",children:"Jest"}),"\n",(0,s.jsx)(n.h2,{id:"termination-error",children:"Termination Error"}),"\n",(0,s.jsx)(n.p,{children:"Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Jest did not exit one second after the test run has completed.\n\nThis usually means that there are asynchronous operations \nthat weren't stopped in your tests. \nConsider running Jest with `--detectOpenHandles` to troubleshoot this issue.\n"})}),"\n",(0,s.jsx)(n.p,{children:"As described in the error message Jest has problems stopping because of some processes which are still running.\nThis can cause problems in your CI/CD pipeline because your pipeline can't continue after\ngetting this error."}),"\n",(0,s.jsxs)(n.p,{children:["A solution is to force Jest to stop. For this case Jest provides the ",(0,s.jsx)(n.code,{children:"--forceExit"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx jest --config ./test/jest.config.ts --forceExit\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);