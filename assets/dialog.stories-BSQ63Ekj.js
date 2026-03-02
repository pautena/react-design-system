import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-BUoLcRFZ.js";import{B as s}from"./button-CNNT9c9F.js";import{D as m}from"./dialog-CvGG1eyT.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CgCp4AR3.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRenderElement-C_oI-Jrc.js";import"./x-B87yB-Eo.js";import"./createLucideIcon-jdL4qkm0.js";import"./DialogTitle-DC96w9zJ.js";import"./inertValue-Dy29vbmF.js";import"./index-Czfq41qP.js";import"./index-Dn6J4qQc.js";import"./index-BvTyi-sf.js";const i=e=>{const[n,r]=a.useState(!1);return o.jsxs("div",{children:[o.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),o.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},O={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>o.jsx(i,{...e})},t={args:{title:"Dialog title",description:"Short description for the dialog.",children:o.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:o.jsx(s,{children:"Confirm"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,O as default};
