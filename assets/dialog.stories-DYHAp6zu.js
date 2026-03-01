import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-CDZYyCF6.js";import{B as s}from"./button-CuQDWgJe.js";import{D as m}from"./dialog-xofLFeER.js";import"./preload-helper-PPVm8Dsz.js";import"./button-eeTNg45r.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRenderElement-SFrVg9J2.js";import"./x-By124X4E.js";import"./createLucideIcon-_Y0M2pCR.js";import"./DialogTitle-hlYW2CVd.js";import"./inertValue-Dp8Qzihs.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./index-DXENcVt8.js";const i=e=>{const[n,r]=a.useState(!1);return o.jsxs("div",{children:[o.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),o.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},O={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>o.jsx(i,{...e})},t={args:{title:"Dialog title",description:"Short description for the dialog.",children:o.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:o.jsx(s,{children:"Confirm"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,O as default};
