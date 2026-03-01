import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-8bOXTxPH.js";import{B as s}from"./button-BN0p3BKv.js";import{D as m}from"./dialog-Bg8NVg4n.js";import"./preload-helper-PPVm8Dsz.js";import"./button-BR1Q4a2d.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./useRenderElement-CRmWNaDK.js";import"./x-BwdVUwc8.js";import"./createLucideIcon-DgNhUQau.js";import"./DialogTitle-hz5S8b6j.js";import"./inertValue-DJ3PUikA.js";import"./index-BJYu0083.js";import"./index-DFQHTOpI.js";import"./index-D1T7PVUv.js";const i=e=>{const[n,r]=a.useState(!1);return o.jsxs("div",{children:[o.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),o.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},O={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>o.jsx(i,{...e})},t={args:{title:"Dialog title",description:"Short description for the dialog.",children:o.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:o.jsx(s,{children:"Confirm"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,O as default};
