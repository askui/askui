"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97327],{7056:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),n=t(11151);const s={displayed_sidebar:"apiSidebar"},r="moveMouseRelativelyTo",a={id:"api/Actions/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"production",source:"@site/versioned_docs/version-0.10.5/api/02-Actions/movemouserelativelyto.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouserelativelyto",permalink:"/docs/0.10.5/api/Actions/movemouserelativelyto",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/api/02-Actions/movemouserelativelyto.md",tags:[],version:"0.10.5",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"moveMouseRelatively",permalink:"/docs/0.10.5/api/Actions/movemouserelatively"},next:{title:"moveMouseTo",permalink:"/docs/0.10.5/api/Actions/movemouseto"}},c={},l=[];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"movemouserelativelyto",children:"moveMouseRelativelyTo"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.p,{children:"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over an element anymore."}),"\n",(0,i.jsx)(o.admonition,{type:"caution",children:(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"macOS only"}),": Due to the higher pixel density of the ",(0,i.jsx)(o.strong,{children:"retina display"}),", the input coordinates must be ",(0,i.jsx)(o.strong,{children:"doubled"})," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200."]})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-typescript",children:"// Move mouse 30 pixels below button\nawait aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()\n"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:t(32523).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"@param {number} x_offset - A (positive/negative) x direction."}),"\n",(0,i.jsx)(o.li,{children:"@param {number} y_offset - A (positive/negative) y direction."}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},32523:(e,o,t)=>{t.d(o,{Z:()=>i});const i=t.p+"assets/images/moveMouseRelativelyTo-8b410256841490fe7c1a0d454702cd63.gif"},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var i=t(67294);const n={},s=i.createContext(n);function r(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);