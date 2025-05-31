import{j as t}from"./iframe-DF1-CE8W.js";import{S as w}from"./storybook-BMS3iT1X.js";import{B}from"./bootstrap-dialog-BFehHW_r.js";import{G as c}from"./Grid-DccweqVM.js";import{T as g}from"./TextField-DUxwMMoe.js";const W=a=>{const i=new FormData(a.currentTarget),r={};return i.forEach((u,l)=>{r[l]=u}),r},d=({open:a,title:i,loading:r,disabled:u,submitText:l="Submit",cancelText:F="Cancel",children:k,onSubmit:q,onCancel:m})=>{const G=p=>{p.preventDefault(),q(W(p))};return t.jsx(B,{component:"form",componentProps:{onSubmit:G},title:i,loading:r,disabled:r||u,open:a,onClose:m,callCloseWhenCancel:!1,cancelable:!0,acceptable:!0,cancelText:F,onCancel:m,acceptText:l,acceptType:"submit",children:k})};d.__docgenInfo={description:`A generic form dialog component that wraps a BootstrapDialog and handles form submission.
Put your form inside and receive the data validated using the input name field.`,methods:[],displayName:"FormDialog",props:{submitText:{required:!1,tsType:{name:"string"},description:`The text to display on the submit button.
@default "Submit"`,defaultValue:{value:'"Submit"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`The text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to be called when the cancel button is clicked."},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:`Callback function to be called when the submit button is clicked.
@param data - The data to be submitted.`}},composes:["Omit"]};const L={title:"Components/Dialogs/FormDialog",component:d,parameters:{layout:"centered"},render:a=>t.jsx(w,{component:d,args:a})},e={args:{open:!0,title:"Lorem ipsum",children:t.jsxs(c,{container:!0,spacing:2,children:[t.jsx(c,{item:!0,xs:12,children:t.jsx(g,{name:"message",label:"Message",fullWidth:!0,required:!0,variant:"outlined"})}),t.jsx(c,{item:!0,xs:12,children:t.jsx(g,{name:"amount",label:"Amount",fullWidth:!0,required:!0,variant:"outlined"})})]})}},n={args:{...e.args,loading:!0}},o={args:{...e.args,disabled:!0}},s={args:{...e.args,submitText:"Create token",cancelText:"Don't create a token"}};var f,b,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="message" label="Message" fullWidth required variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="amount" label="Amount" fullWidth required variant="outlined" />
        </Grid>
      </Grid>
  }
}`,...(x=(b=e.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,T,D;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var y,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,j,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const M=["Default","Loading","Disabled","CustomButtonText"],z=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:s,Default:e,Disabled:o,Loading:n,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{e as D,d as F,z as f};
