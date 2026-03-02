import{j as i}from"./jsx-runtime-u17CrQMm.js";import{T as m}from"./text-field-Gb7x7-iK.js";import{S as c}from"./storybook-Bq401jfZ.js";import{F as l}from"./form-dialog-DY_hBDtj.js";import"./field-DmIwZ6U1.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./sidebar-DJjs4gpy.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./x-DFJcBLed.js";import"./createLucideIcon-b2KNZfrT.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";import"./loader-circle-DX3r9wpe.js";import"./notification-center-provider-DvEgKYF6.js";import"./triangle-alert-n8kWsz47.js";import"./dialog-bVVOtBvD.js";import"./button-DtRrBNQM.js";const R={title:"Dialogs/FormDialog",component:l,parameters:{layout:"centered",docs:{source:{transform:(n,d)=>{const{args:p}=d;return`<FormDialog
  ${Object.entries(p).filter(([r])=>r!=="children").map(([r,t])=>typeof t=="boolean"&&t===!0?r:typeof t=="string"?`${r}="${t}"`:typeof t=="function"?`${r}={${r}}`:`${r}={${JSON.stringify(t)}}`).filter(Boolean).join(`
  `)}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
  {children}
</FormDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:n=>i.jsx(c,{component:l,args:n})},e={args:{open:!0,title:"Lorem ipsum",children:i.jsxs("div",{className:"grid gap-3",children:[i.jsx(m,{name:"message",label:"Message",fullWidth:!0,required:!0}),i.jsx(m,{name:"amount",label:"Amount",fullWidth:!0,required:!0})]})}};e.parameters={docs:{source:{code:`import { useState } from 'react';
import { FormDialog } from '@pautena/react-design-system';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Form Dialog</button>
      <FormDialog
        open={open}
        title="Create Item"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      >
        <div className="grid gap-3">
          <TextField name="message" label="Message" fullWidth required />
          <TextField name="amount" label="Amount" fullWidth required />
        </div>
      </FormDialog>
    </>
  );
}`}}};const o={args:{...e.args,loading:!0}},a={args:{...e.args,disabled:!0}},s={args:{...e.args,submitText:"Create token",cancelText:"Don't create a token"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <div className="grid gap-3">
        <TextField name="message" label="Message" fullWidth required />
        <TextField name="amount" label="Amount" fullWidth required />
      </div>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...s.parameters?.docs?.source}}};const v=["Default","Loading","Disabled","CustomButtonText"];export{s as CustomButtonText,e as Default,a as Disabled,o as Loading,v as __namedExportsOrder,R as default};
