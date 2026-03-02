import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DjNR3noO.js";import{B as s}from"./button-D4VIYb2m.js";import{D as m}from"./dialog-D6GSnV8r.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CVa2x62j.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRenderElement-BfrHwLfV.js";import"./x-B9eiKsOU.js";import"./createLucideIcon-bDYX1VuN.js";import"./DialogTitle-CqVhzr_H.js";import"./inertValue-BmGVNhPt.js";import"./index-DGu2xCH2.js";import"./index-1dl8K88b.js";import"./index-H7cNYfax.js";const i=e=>{const[n,r]=a.useState(!1);return o.jsxs("div",{children:[o.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),o.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},O={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>o.jsx(i,{...e})},t={args:{title:"Dialog title",description:"Short description for the dialog.",children:o.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:o.jsx(s,{children:"Confirm"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,O as default};
