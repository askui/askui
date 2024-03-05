"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34604],{44556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(17624),r=t(4552);const i={},o=void 0,d={id:"general/Terminology",title:"Terminology",description:"| Term                                | Meaning     |",source:"@site/versioned_docs/version-0.16.0/general/12-Terminology.md",sourceDirName:"general",slug:"/general/Terminology",permalink:"/docs/general/Terminology",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.16.0/general/12-Terminology.md",tags:[],version:"0.16.0",sidebarPosition:12,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Windows",permalink:"/docs/general/Troubleshooting/windows"}},c={},l=[];function a(e){const n={a:"a",code:"code",em:"em",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Term"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"access token"}),(0,s.jsxs)(n.td,{children:["Gives you access to the AskUI inference in combination with your ",(0,s.jsx)(n.code,{children:"workspace id"}),". Every ",(0,s.jsx)(n.code,{children:"access token"})," has an expiry date and is assigned to exactly one workspace."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"action"}),(0,s.jsx)(n.td,{children:"A method in the AskUI Control Client API that describes an action to be taken against the operating system. For example click(), type()."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"annotation"}),(0,s.jsx)(n.td,{children:"Marked area around an element with metadata name, text, and bounding box coordinates."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"automation"}),(0,s.jsx)(n.td,{children:"A system of multiple connected workflows."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bounding box"}),(0,s.jsx)(n.td,{children:"Rectangle described by coordinates that describe an element's location. Displayed visually as red rectangle."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"credentials"}),(0,s.jsxs)(n.td,{children:["Combination of ",(0,s.jsx)(n.code,{children:"workspace id"})," and ",(0,s.jsx)(n.code,{children:"access token"})," living in the same workspace."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"element"}),(0,s.jsx)(n.td,{children:"A user interface component which websites and blocks are build from."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"element-description"}),(0,s.jsxs)(n.td,{children:["A description for a UI element. In the AskUI Control Client API, for example, it is the coded description like ",(0,s.jsx)(n.code,{children:"button()"})," or ",(0,s.jsx)(n.code,{children:"textfield().contains().text('Email')"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inference"}),(0,s.jsx)(n.td,{children:"The process of annotating a user interface."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inference server"}),(0,s.jsx)(n.td,{children:"Backend which performs the inference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"instruction"}),(0,s.jsxs)(n.td,{children:["Single AskUI directive which usually has following parts: ",(0,s.jsx)(n.em,{children:"action"})," + (optional)",(0,s.jsx)(n.em,{children:"element-description"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"interactive annotation"}),(0,s.jsx)(n.td,{children:"Exploring the annotations of a user interface through an annotated screenshot."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UI Controller (legacy)"}),(0,s.jsx)(n.td,{children:"Service to control inputs and observe the visuals on the operating system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AskUI Controller"}),(0,s.jsx)(n.td,{children:"Service to control inputs and observe the visuals on the operating system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UI Control Client"}),(0,s.jsx)(n.td,{children:"Retrieves the annotations from the inference server and uses the given instructions to execute inputs on the operating system through the AskUI Controller."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AskUI Studio (former User Portal)"}),(0,s.jsxs)(n.td,{children:["In ",(0,s.jsx)(n.a,{href:"https://app.askui.com/",children:"AskUI Studio"})," you can create ",(0,s.jsx)(n.code,{children:"access tokens"})," for your workspace."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AskUI-Installer"}),(0,s.jsx)(n.td,{children:"Installer that sets up AskUI components on a machine."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AskUI Development Environment (ADE)"}),(0,s.jsx)(n.td,{children:"Terminal environment to setup and manage AskUI components and projects."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AskUI Runner"}),(0,s.jsx)(n.td,{children:"Self-hosted component that downloads and runs workflows from AskUI Studio."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"workflow"}),(0,s.jsx)(n.td,{children:"A set of instructions to complete a single task."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"workspace"}),(0,s.jsx)(n.td,{children:"Every registered user has exactly one workspace. Every workspace can contain multiple access tokens."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"workspace id"}),(0,s.jsxs)(n.td,{children:["The id of your workspace. Gives you access to the AskUI inference in combination with your ",(0,s.jsx)(n.code,{children:"access token"}),"."]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);