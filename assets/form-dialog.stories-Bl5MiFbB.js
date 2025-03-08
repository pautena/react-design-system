import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as k}from"./storybook-BExNV_A2.js";import{B as w}from"./bootstrap-dialog-DaNZ6JFy.js";import{G as u}from"./Grid-CKxAJcKv.js";import{T as g}from"./TextField-DDZmRnk7.js";import"./index-CFahbR6w.js";import"./notification-center.provider-DGQlM2s5.js";import"./Typography-BXSoh8s2.js";import"./identifier-ChVxdG4r.js";import"./memoTheme-kZCwlU27.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useTheme-CfVHYLf1.js";import"./useSlot-HZ3RMWsh.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Paper-0PE78at3.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./IconButton-X2xkCwyW.js";import"./CircularProgress-5NeNm8J5.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Box-CLV6Ujku.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";import"./Button-C1N17xc9.js";import"./Close-B1NBuOka.js";import"./DialogContent-NSAkYDAV.js";import"./Fade-WD5A-epX.js";import"./Modal-QJZQr9Mv.js";import"./ownerWindow-DJIq4c2v.js";import"./Portal-Bjszn9Vx.js";import"./FormControl-BBCSTdi-.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Select-Bsr0nPNC.js";import"./index-n2pnZwpZ.js";import"./useSlotProps-BuS7XknB.js";import"./Popover-BrIlDozf.js";import"./List-BUK6or8F.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-BgdWXRS5.js";import"./FormHelperText-DAqACIH9.js";const B=t=>{const n=new FormData(t.currentTarget),o={};return n.forEach((m,p)=>{o[p]=m}),o},c=({open:t,title:n,loading:o,disabled:m,submitText:p="Submit",cancelText:F="Cancel",children:G,onSubmit:W,onCancel:l})=>{const _=d=>{d.preventDefault(),W(B(d))};return e.jsx(w,{component:"form",componentProps:{onSubmit:_},title:n,loading:o,disabled:o||m,open:t,onClose:l,callCloseWhenCancel:!1,cancelable:!0,acceptable:!0,cancelText:F,onCancel:l,acceptText:p,acceptType:"submit",children:G})};c.__docgenInfo={description:"",methods:[],displayName:"FormDialog",props:{submitText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Submit"',computed:!1}},canceText:{required:!1,tsType:{name:"string"},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""},cancelText:{defaultValue:{value:'"Cancel"',computed:!1},required:!1}},composes:["Omit"]};const We={title:"Components/Dialogs/FormDialog",component:c,parameters:{layout:"centered"},render:t=>e.jsx(k,{component:c,args:t})},r={args:{open:!0,title:"Lorem ipsum",children:e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:12,children:e.jsx(g,{name:"message",label:"Message",fullWidth:!0,required:!0,variant:"outlined"})}),e.jsx(u,{item:!0,xs:12,children:e.jsx(g,{name:"amount",label:"Amount",fullWidth:!0,required:!0,variant:"outlined"})})]})}},a={args:{...r.args,loading:!0}},i={args:{...r.args,disabled:!0}},s={args:{...r.args,submitText:"Create token",cancelText:"Don't create a token"}};var f,x,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var b,D,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(h=(D=a.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,y,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,j,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const _e=["Default","Loading","Disabled","CustomButtonText"];export{s as CustomButtonText,r as Default,i as Disabled,a as Loading,_e as __namedExportsOrder,We as default};
