import{j as t}from"./iframe-EZlCblT_.js";import{S as T}from"./storybook-CoqJfa05.js";import{B as D}from"./bootstrap-dialog-eoxQL4tA.js";import{G as c}from"./Grid-eQci8erC.js";import{T as g}from"./TextField-BKM0WcM0.js";const y=a=>{const i=new FormData(a.currentTarget),r={};return i.forEach((u,l)=>{r[l]=u}),r},d=({open:a,title:i,loading:r,disabled:u,submitText:l="Submit",cancelText:f="Cancel",children:b,onSubmit:x,onCancel:m})=>{const h=p=>{p.preventDefault(),x(y(p))};return t.jsx(D,{component:"form",componentProps:{onSubmit:h},title:i,loading:r,disabled:r||u,open:a,onClose:m,callCloseWhenCancel:!1,cancelable:!0,acceptable:!0,cancelText:f,onCancel:m,acceptText:l,acceptType:"submit",children:b})};d.__docgenInfo={description:`A generic form dialog component that wraps a BootstrapDialog and handles form submission.
Put your form inside and receive the data validated using the input name field.`,methods:[],displayName:"FormDialog",props:{submitText:{required:!1,tsType:{name:"string"},description:`The text to display on the submit button.
@default "Submit"`,defaultValue:{value:'"Submit"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`The text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to be called when the cancel button is clicked."},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:`Callback function to be called when the submit button is clicked.
@param data - The data to be submitted.`}},composes:["Omit"]};const v={title:"Components/Dialogs/FormDialog",component:d,parameters:{layout:"centered"},render:a=>t.jsx(T,{component:d,args:a})},e={args:{open:!0,title:"Lorem ipsum",children:t.jsxs(c,{container:!0,spacing:2,children:[t.jsx(c,{size:{xs:12},children:t.jsx(g,{name:"message",label:"Message",fullWidth:!0,required:!0,variant:"outlined"})}),t.jsx(c,{size:{xs:12},children:t.jsx(g,{name:"amount",label:"Amount",fullWidth:!0,required:!0,variant:"outlined"})})]})}},n={args:{...e.args,loading:!0}},o={args:{...e.args,disabled:!0}},s={args:{...e.args,submitText:"Create token",cancelText:"Don't create a token"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","Loading","Disabled","CustomButtonText"],q=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:s,Default:e,Disabled:o,Loading:n,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{e as D,d as F,q as f};
