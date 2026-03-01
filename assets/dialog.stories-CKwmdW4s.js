import{j as t,r as a}from"./iframe-BOp0KoHw.js";import{B as s}from"./button-CULGPqEQ.js";import{D as m}from"./dialog-CjoYfbVC.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CeFxFZak.js";import"./index-Bnpl_KYd.js";import"./utils-BFne8Zvq.js";import"./useRenderElement-Bx6ca6GP.js";import"./x-C2irfWeI.js";import"./createLucideIcon-DZ32gi55.js";import"./DialogTitle-B9dNSudn.js";import"./composite-D-UgRGj8.js";import"./index-9QzqYQcq.js";import"./index-C7szOnQe.js";import"./index-CpQ-kypr.js";const i=e=>{const[n,r]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),t.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},E={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>t.jsx(i,{...e})},o={args:{title:"Dialog title",description:"Short description for the dialog.",children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:t.jsx(s,{children:"Confirm"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...o.parameters?.docs?.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,E as default};
