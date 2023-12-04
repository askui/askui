"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39198],{19407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(85893),s=t(11151);const r={},i="Configure Test Frameworks",a={id:"general/Tooling/configure_test_framework",title:"Configure Test Frameworks",description:"Basically, you can run askui instructions with every popular JavaScript/TypeScript test framework, e.g., Jest or Jasmine.",source:"@site/versioned_docs/version-0.8.0/general/05-Tooling/configure_test_framework.md",sourceDirName:"general/05-Tooling",slug:"/general/Tooling/configure_test_framework",permalink:"/docs/0.8.0/general/Tooling/configure_test_framework",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/general/05-Tooling/configure_test_framework.md",tags:[],version:"0.8.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Annotation",permalink:"/docs/0.8.0/general/Tooling/annotation"},next:{title:"Tutorials",permalink:"/docs/0.8.0/general/Tutorials/"}},c={},l=[{value:"Jest",id:"jest",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-test-frameworks",children:"Configure Test Frameworks"}),"\n",(0,o.jsxs)(n.p,{children:["Basically, you can run ",(0,o.jsx)(n.code,{children:"askui"})," instructions with every popular JavaScript/TypeScript test framework, e.g., ",(0,o.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," or ",(0,o.jsx)(n.a,{href:"https://jasmine.github.io/",children:"Jasmine"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"jest",children:"Jest"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure Jest with the ",(0,o.jsx)(n.code,{children:"jest.config.ts"}),". It should look something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export default {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: ['Math']\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In case your Jest tests are executed slowly, make sure you have added ",(0,o.jsx)(n.code,{children:"'Math'"})," to ",(0,o.jsx)(n.code,{children:"sandboxInjectedGlobals"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The option ",(0,o.jsx)(n.code,{children:"sandboxInjectedGlobals"})," was named ",(0,o.jsx)(n.code,{children:"extraGlobals"})," in Jest v27 and lower."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);