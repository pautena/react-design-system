import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-C_7bLouK.js";import{B as s}from"./button-yGNfiGto.js";import{D as m}from"./dialog-B6-y6BLX.js";import"./preload-helper-PPVm8Dsz.js";import"./button-q2sCJWC4.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./useRenderElement-Bt1an2v0.js";import"./x-D8wlzAR-.js";import"./createLucideIcon-CMKN0kEv.js";import"./DialogTitle-DmEkRuXH.js";import"./composite-DdXnjXQf.js";import"./index-CvzTXi8f.js";import"./index-ChAihCM8.js";import"./index-DnbYxgfW.js";const i=e=>{const[n,r]=a.useState(!1);return o.jsxs("div",{children:[o.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),o.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},O={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>o.jsx(i,{...e})},t={args:{title:"Dialog title",description:"Short description for the dialog.",children:o.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:o.jsx(s,{children:"Confirm"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,O as default};
