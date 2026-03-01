import{j as i}from"./iframe-lRwKKAeA.js";import{S as l}from"./storybook-COLW6OeD.js";import{C as p}from"./confirm-dialog-BP5waegU.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-CDSuuxjR.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./loader-circle-D9QnFWM9.js";import"./createLucideIcon-CW1mXz6K.js";import"./triangle-alert-xAnxLRrM.js";import"./sidebar-2ulj49hr.js";import"./index-BZl2Gm-o.js";import"./button-h5PM8KId.js";import"./utils-wLV4pmrJ.js";import"./useRenderElement-DXpJT6eM.js";import"./DirectionContext-D015V4zZ.js";import"./composite-CvqMpLXs.js";import"./x-Dvkqv4wB.js";import"./DialogTitle-DczUCJzh.js";import"./index-Ozf5NBs-.js";import"./useRender-BYihtJcv.js";import"./isSameDay-BaBEc9bM.js";import"./text-field-BTrCTHhR.js";import"./field-8vjn_5zm.js";const A={title:"Dialogs/ConfirmDialog",component:p,parameters:{layout:"centered",docs:{source:{transform:(m,c)=>{const{args:d}=c;return`<ConfirmDialog
  ${Object.entries(d).filter(([r])=>r!=="children").map(([r,t])=>typeof t=="boolean"&&t===!0?r:typeof t=="string"?`${r}="${t}"`:typeof t=="function"?`${r}={${r}}`:`${r}={${JSON.stringify(t)}}`).filter(Boolean).join(`
  `)}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  {children}
</ConfirmDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:m=>i.jsx(l,{component:p,args:m})},e={args:{open:!0,title:"Lorem ipsum",children:i.jsx("span",{className:"text-sm text-muted-foreground",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}};e.parameters={docs:{source:{code:`import { useState } from 'react';
import { ConfirmDialog } from '@pautena/react-design-system';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Confirm Dialog</button>
      <ConfirmDialog
        open={open}
        title="Lorem ipsum"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to proceed?</p>
      </ConfirmDialog>
    </>
  );
}`}}};const o={args:{...e.args,loading:!0}},n={args:{...e.args,disabled:!0}},s={args:{...e.args,confirmText:"Create token",cancelText:"Don't create a token"}},a={args:{title:"Lorem ipsum",children:i.jsx("span",{className:"text-sm text-muted-foreground",children:"Write the passphrase to confirm your action"}),passphrase:"delete permanently"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <span className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <span className="text-sm text-muted-foreground">
        Write the passphrase to confirm your action
      </span>,
    passphrase: "delete permanently"
  }
}`,...a.parameters?.docs?.source}}};const J=["Default","Loading","Disabled","CustomButtonText","Passphrase"];export{s as CustomButtonText,e as Default,n as Disabled,o as Loading,a as Passphrase,J as __namedExportsOrder,A as default};
