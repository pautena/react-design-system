import{j as t,r as a}from"./iframe-lRwKKAeA.js";import{B as s}from"./button-OsMYNPhM.js";import{D as m}from"./dialog-BCByD35M.js";import"./preload-helper-PPVm8Dsz.js";import"./button-h5PM8KId.js";import"./index-BZl2Gm-o.js";import"./utils-wLV4pmrJ.js";import"./useRenderElement-DXpJT6eM.js";import"./x-Dvkqv4wB.js";import"./createLucideIcon-CW1mXz6K.js";import"./DialogTitle-DczUCJzh.js";import"./composite-CvqMpLXs.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./index-Ozf5NBs-.js";const i=e=>{const[n,r]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),t.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},E={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>t.jsx(i,{...e})},o={args:{title:"Dialog title",description:"Short description for the dialog.",children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:t.jsx(s,{children:"Confirm"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...o.parameters?.docs?.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,E as default};
