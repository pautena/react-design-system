import{j as p}from"./iframe-Bf5-ajDf.js";import{S as f}from"./storybook-DuV2iONK.js";import{B as m}from"./BootstrapDialog-DFn9MyOC.js";import{D as g}from"./DialogContentText-BeRDLzzi.js";import"./preload-helper-PPVm8Dsz.js";import"./NotificationCenter.provider-C1YuFE5z.js";import"./Typography-CAHfUSwG.js";import"./memoTheme-rYOwdVL2.js";import"./useSlot-CEvqNXnJ.js";import"./useTheme-BkpYa0dr.js";import"./Grow-CgZOrNOu.js";import"./index-VU6iQnRk.js";import"./index-BTGEyl45.js";import"./Paper--4xR-YH7.js";import"./createSvgIcon-BTC8lzaD.js";import"./IconButton-CT7WGyXl.js";import"./ButtonBase-DOY-mQq5.js";import"./CircularProgress-CAtrJVii.js";import"./useThemeProps-BjHCCwio.js";import"./Box-Dh__eHRG.js";import"./Button-n-T55MPp.js";import"./Close-BMUt6zOc.js";import"./Fade-CQ7yzzaD.js";import"./Modal-CQhoc_ZP.js";import"./ownerWindow-BqUriyN6.js";import"./Portal-CnCl8hpK.js";import"./getActiveElement-BQgAPKnO.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,d=C("On click dialog action"),G={title:"Dialogs/BootstrapDialog",component:m,parameters:{layout:"centered",docs:{source:{transform:(u,b)=>{const{args:D}=b;return`<BootstrapDialog
  ${Object.entries(D).filter(([e])=>e!=="children").map(([e,o])=>typeof o=="boolean"&&o===!0?e:typeof o=="string"?`${e}="${o}"`:typeof o=="function"?`${e}={${e}}`:Array.isArray(o)?`${e}={${JSON.stringify(o,null,2).replace(/"(\w+)":/g,"$1:")}}`:`${e}={${JSON.stringify(o)}}`).filter(Boolean).join(`
  `)}
  onClose={handleClose}
>
  {children}
</BootstrapDialog>`}}}},render:u=>p.jsx(f,{component:m,args:u})},t={args:{title:"Lorem ipsum",children:p.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}};t.parameters={docs:{source:{code:`import { useState } from 'react';
import { BootstrapDialog } from './BootstrapDialog';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <BootstrapDialog
        open={open}
        title="Lorem ipsum"
        onClose={() => setOpen(false)}
      >
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DialogContentText>
      </BootstrapDialog>
    </>
  );
}`}}};const a={args:{...t.args,acceptable:!0,cancelable:!0}},r={args:{...t.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:d},{id:"action2",text:"Action 2",onClick:d}]}},n={args:{...t.args,acceptable:!0,loading:!0}},s={args:{...t.args,loading:!0}},c={args:{...r.args,disabled:!0}},i={args:{...t.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}},l={args:{title:"Slot Props Demo",acceptable:!0,cancelable:!0,loading:!0,children:p.jsx(g,{children:"Customized dialog with larger buttons and custom close button color."}),slotProps:{closeButton:{color:"error"},acceptButton:{size:"large",variant:"contained"},cancelButton:{size:"large"},loadingIndicator:{size:24}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DialogContentText>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    cancelable: true,
    actions: [{
      id: "action1",
      text: "Action 1",
      color: "error",
      onClick: onClickAction
    }, {
      id: "action2",
      text: "Action 2",
      onClick: onClickAction
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    loading: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithExtraActions.args,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Slot Props Demo",
    acceptable: true,
    cancelable: true,
    loading: true,
    children: <DialogContentText>
        Customized dialog with larger buttons and custom close button color.
      </DialogContentText>,
    slotProps: {
      closeButton: {
        color: "error"
      },
      acceptButton: {
        size: "large",
        variant: "contained"
      },
      cancelButton: {
        size: "large"
      },
      loadingIndicator: {
        size: 24
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const H=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts","WithSlotPropsCustomization"];export{a as AcceptableAndCancelable,i as CustomTexts,t as Default,c as Disabled,s as Loading,n as LoadingWithAcceptable,r as WithExtraActions,l as WithSlotPropsCustomization,H as __namedExportsOrder,G as default};
