import{j as n}from"./iframe-DsTVfloC.js";import{S as x}from"./storybook-kh97f1Vy.js";import{B as T}from"./BootstrapDialog-DsbxScVH.js";import{G as u}from"./Grid-CHWeI7dt.js";import{T as f}from"./TextField-Btcpooa7.js";const S=o=>{const i=new FormData(o.currentTarget),r={};return i.forEach((c,e)=>{r[e]=c}),r};function m({open:o,title:i,loading:r,disabled:c,submitText:e="Submit",cancelText:a="Cancel",children:b,onSubmit:h,onCancel:p}){const D=g=>{g.preventDefault(),h(S(g))};return n.jsx(T,{component:"form",componentProps:{onSubmit:D},title:i,loading:r,disabled:r||c,open:o,onClose:p,callCloseWhenCancel:!1,cancelable:!0,acceptable:!0,cancelText:a,onCancel:p,acceptText:e,acceptType:"submit",children:b})}m.__docgenInfo={description:`A generic form dialog component that wraps a BootstrapDialog and handles form submission.
Put your form inside and receive the data validated using the input name field.`,methods:[],displayName:"FormDialog",props:{submitText:{required:!1,tsType:{name:"string"},description:`The text to display on the submit button.
@default "Submit"`,defaultValue:{value:'"Submit"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`The text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to be called when the cancel button is clicked."},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:`Callback function to be called when the submit button is clicked.
@param data - The data to be submitted.`}},composes:["Omit"]};const C={title:"Dialogs/FormDialog",component:m,parameters:{layout:"centered",docs:{source:{transform:(o,i)=>{const{args:r}=i;return`<FormDialog
  ${Object.entries(r).filter(([e])=>e!=="children").map(([e,a])=>typeof a=="boolean"&&a===!0?e:typeof a=="string"?`${e}="${a}"`:typeof a=="function"?`${e}={${e}}`:`${e}={${JSON.stringify(a)}}`).filter(Boolean).join(`
  `)}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
  {children}
</FormDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:o=>n.jsx(x,{component:m,args:o})},t={args:{open:!0,title:"Lorem ipsum",children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{size:{xs:12},children:n.jsx(f,{name:"message",label:"Message",fullWidth:!0,required:!0,variant:"outlined"})}),n.jsx(u,{size:{xs:12},children:n.jsx(f,{name:"amount",label:"Amount",fullWidth:!0,required:!0,variant:"outlined"})})]})}};t.parameters={docs:{source:{code:`import { useState } from 'react';
import { FormDialog } from './FormDialog';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Handle form submission
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
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField name="message" label="Message" fullWidth required />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField name="amount" label="Amount" fullWidth required />
          </Grid>
        </Grid>
      </FormDialog>
    </>
  );
}`}}};const s={args:{...t.args,loading:!0}},l={args:{...t.args,disabled:!0}},d={args:{...t.args,submitText:"Create token",cancelText:"Don't create a token"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <Grid container spacing={2}>
        <Grid size={{
        xs: 12
      }}>
          <TextField name="message" label="Message" fullWidth required variant="outlined" />
        </Grid>
        <Grid size={{
        xs: 12
      }}>
          <TextField name="amount" label="Amount" fullWidth required variant="outlined" />
        </Grid>
      </Grid>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...d.parameters?.docs?.source}}};const F=["Default","Loading","Disabled","CustomButtonText"],_=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:d,Default:t,Disabled:l,Loading:s,__namedExportsOrder:F,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,m as F,_ as a};
