import{j as t,r as a}from"./iframe-pW5QL-bD.js";import{B as s}from"./button-BG0pz-9x.js";import{D as m}from"./dialog-DMY7DRc_.js";import"./preload-helper-PPVm8Dsz.js";import"./button-D2Ijx_X0.js";import"./index-C7NSALCi.js";import"./utils-BUhL_YVU.js";import"./useRenderElement-CVdh77Wx.js";import"./x-DzjZg6q4.js";import"./createLucideIcon-FVDiqrjk.js";import"./DialogTitle-BmELqlVB.js";import"./composite-cFlvVe3B.js";import"./index-TlASSgMk.js";import"./index-DfVoCZUp.js";import"./index-CqolCm2N.js";const i=e=>{const[n,r]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(s,{onClick:()=>r(!0),children:"Open dialog"}),t.jsx(m,{...e,open:n,onClose:()=>r(!1)})]})},E={title:"Dialogs/Dialog",component:i,parameters:{layout:"centered"},render:e=>t.jsx(i,{...e})},o={args:{title:"Dialog title",description:"Short description for the dialog.",children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog body content goes here."}),footer:t.jsx(s,{children:"Confirm"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    description: "Short description for the dialog.",
    children: <p className="text-sm text-muted-foreground">
        Dialog body content goes here.
      </p>,
    footer: <Button>Confirm</Button>
  }
}`,...o.parameters?.docs?.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,E as default};
