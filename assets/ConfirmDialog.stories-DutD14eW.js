import{r as y,j as s}from"./iframe-D9_KR-Vm.js";import{S}from"./storybook-BiVruKJY.js";import{B as O}from"./BootstrapDialog-CCF0DiAf.js";import{T as j}from"./TextField-Bwf3Tkxh.js";import{D as h}from"./DialogContentText-DT7FJwwz.js";function p({open:l,title:m,loading:c,disabled:u,confirmText:e="Confirm",cancelText:o="Cancel",passphrase:d,children:C,onConfirm:D,onCancel:f}){const[g,x]=y.useState(""),b=!d||g===d;return s.jsxs(O,{title:m,loading:c,disabled:c||u,disableAccept:!b,open:l,onClose:f,acceptable:!0,cancelable:!0,callCloseWhenCancel:!1,acceptText:e,cancelText:o,onCancel:f,onAccept:D,children:[C,d&&s.jsx(j,{size:"small",fullWidth:!0,value:g,onChange:T=>x(T.target.value),placeholder:d})]})}p.__docgenInfo={description:`ConfirmDialog component renders a dialog to ask a user to confirm an action
with customizable title, confirmation and cancellation actions.
It optionally requires a passphrase to enable the confirmation action.`,methods:[],displayName:"ConfirmDialog",props:{confirmText:{required:!1,tsType:{name:"string"},description:`Text to display on the confirm button.
@default "Confirm"`,defaultValue:{value:'"Confirm"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:`Text to display on the cancel button.
@default "Cancel"`,defaultValue:{value:'"Cancel"',computed:!1}},passphrase:{required:!1,tsType:{name:"string"},description:"Optional passphrase for additional confirmation."},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to handle cancel action."},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to handle confirm action."}},composes:["Omit"]};const _={title:"Dialogs/ConfirmDialog",component:p,parameters:{layout:"centered",docs:{source:{transform:(l,m)=>{const{args:c}=m;return`<ConfirmDialog
  ${Object.entries(c).filter(([e])=>e!=="children").map(([e,o])=>typeof o=="boolean"&&o===!0?e:typeof o=="string"?`${e}="${o}"`:typeof o=="function"?`${e}={${e}}`:`${e}={${JSON.stringify(o)}}`).filter(Boolean).join(`
  `)}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  {children}
</ConfirmDialog>`}}}},argTypes:{open:{description:"Whether the dialog is open."},title:{description:"The title of the dialog."},loading:{description:"Whether the dialog is in a loading state."},disabled:{description:"Whether the dialog is disabled."},children:{description:"Children to be rendered inside the dialog."}},render:l=>s.jsx(S,{component:p,args:l})},t={args:{open:!0,title:"Lorem ipsum",children:s.jsx(h,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}};t.parameters={docs:{source:{code:`import { useState } from 'react';
import { ConfirmDialog } from './ConfirmDialog';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    // Handle confirmation
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
        <DialogContentText>
          Are you sure you want to proceed?
        </DialogContentText>
      </ConfirmDialog>
    </>
  );
}`}}};const n={args:{...t.args,loading:!0}},r={args:{...t.args,disabled:!0}},a={args:{...t.args,confirmText:"Create token",cancelText:"Don't create a token"}},i={args:{title:"Lorem ipsum",children:s.jsx(h,{sx:{mb:1},children:"Write the passphrase to confirm your action"}),passphrase:"delete permanently"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DialogContentText>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmText: "Create token",
    cancelText: "Don't create a token"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText sx={{
      mb: 1
    }}>
        Write the passphrase to confirm your action
      </DialogContentText>,
    passphrase: "delete permanently"
  }
}`,...i.parameters?.docs?.source}}};const L=["Default","Loading","Disabled","CustomButtonText","Passphrase"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonText:a,Default:t,Disabled:r,Loading:n,Passphrase:i,__namedExportsOrder:L,default:_},Symbol.toStringTag,{value:"Module"}));export{p as C,t as D,B as a};
