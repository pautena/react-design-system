import{r as O,j as e}from"./iframe-BOp0KoHw.js";import{T as b}from"./text-field-eAVdC3Vq.js";import{S as _}from"./storybook-Do16VOkD.js";import{B as m}from"./button-CULGPqEQ.js";import{D as $}from"./dialog-CjoYfbVC.js";import{L as x}from"./loader-circle-qQxEsC5F.js";import{X as k}from"./x-C2irfWeI.js";const V=n=>{const i=new FormData(n.currentTarget),o={};return i.forEach((a,t)=>{o[t]=a}),o};function p({open:n,title:i,description:o,loading:a=!1,disabled:t=!1,disableAccept:r=!1,disableCancel:T=!1,submitText:f="Submit",cancelText:y="Cancel",size:D="md",className:j,children:C,onSubmit:S,onCancel:u}){const g=O.useId(),q=t||a,F=t||a,v=t||a,N=h=>{h.preventDefault(),S(V(h))},W=e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:i}),a?e.jsx(x,{role:"progressbar","aria-label":"loading",className:"h-4 w-4 animate-spin text-muted-foreground"}):null]}),e.jsx(m,{type:"button",variant:"ghost",size:"icon-sm","aria-label":"close",disabled:q,onClick:u,children:e.jsx(k,{className:"h-4 w-4","aria-hidden":"true"})})]}),w=e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"button",variant:"outline",disabled:F||T,onClick:u,children:y}),e.jsx(m,{type:"submit",form:g,disabled:v||r,children:a?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 animate-spin","aria-hidden":"true"}),f]}):f})]});return e.jsx($,{open:n,title:W,description:o,size:D,className:j,showCloseButton:!1,footer:w,onClose:u,children:e.jsx("form",{id:g,onSubmit:N,className:"space-y-4",children:e.jsx("fieldset",{disabled:a||t,className:"space-y-4",children:C})})})}p.__docgenInfo={description:"Form dialog wrapper with submit handling.",methods:[],displayName:"FormDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the dialog is open."},title:{required:!0,tsType:{name:"ReactNode"},description:"The title of the dialog."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description rendered under the title."},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disableAccept:{required:!1,tsType:{name:"boolean"},description:`Whether the submit button is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disableCancel:{required:!1,tsType:{name:"boolean"},description:`Whether the cancel button is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},submitText:{required:!1,tsType:{name:"string"},description:`The text to display on the submit button.
@default "Submit"`,defaultValue:{value:'"Submit"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`The text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},size:{required:!1,tsType:{name:"DialogSize"},description:`Size variant for the dialog content.
@default "md"`,defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names for the dialog content."},children:{required:!1,tsType:{name:"ReactNode"},description:"Content rendered inside the form."},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to be called when the cancel button is clicked."},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:`Callback function to be called when the submit button is clicked.
@param data - The data to be submitted.`}}};const B={title:"Dialogs/FormDialog",component:p,parameters:{layout:"centered",docs:{source:{transform:(n,i)=>{const{args:o}=i;return`<FormDialog
  ${Object.entries(o).filter(([t])=>t!=="children").map(([t,r])=>typeof r=="boolean"&&r===!0?t:typeof r=="string"?`${t}="${r}"`:typeof r=="function"?`${t}={${t}}`:`${t}={${JSON.stringify(r)}}`).filter(Boolean).join(`
  `)}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
  {children}
</FormDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:n=>e.jsx(_,{component:p,args:n})},s={args:{open:!0,title:"Lorem ipsum",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(b,{name:"message",label:"Message",fullWidth:!0,required:!0}),e.jsx(b,{name:"amount",label:"Amount",fullWidth:!0,required:!0})]})}};s.parameters={docs:{source:{code:`import { useState } from 'react';
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
}`}}};const l={args:{...s.args,loading:!0}},d={args:{...s.args,disabled:!0}},c={args:{...s.args,submitText:"Create token",cancelText:"Don't create a token"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <div className="grid gap-3">
        <TextField name="message" label="Message" fullWidth required />
        <TextField name="amount" label="Amount" fullWidth required />
      </div>
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...c.parameters?.docs?.source}}};const L=["Default","Loading","Disabled","CustomButtonText"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:c,Default:s,Disabled:d,Loading:l,__namedExportsOrder:L,default:B},Symbol.toStringTag,{value:"Module"}));export{s as D,p as F,P as f};
