import{j as p}from"./iframe-D9_KR-Vm.js";import{S as f}from"./storybook-BiVruKJY.js";import{B as u}from"./BootstrapDialog-CCF0DiAf.js";import{D as g}from"./DialogContentText-DT7FJwwz.js";import"./preload-helper-PPVm8Dsz.js";import"./NotificationCenter.provider-DmDmO-iN.js";import"./Typography-2wT6CWDx.js";import"./memoTheme-CqkFtSQ1.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-6wxtO0wC.js";import"./useSlot-i-Ylfmke.js";import"./useTheme-I0hne2ge.js";import"./Grow-Cifmxdwe.js";import"./index-DC4ANDc3.js";import"./index-DJQ4Myga.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-VO7GYAI2.js";import"./IconButton-B1MZngJm.js";import"./CircularProgress-DXln3DRW.js";import"./Box-Be92HNMn.js";import"./useThemeProps-DEraMp6x.js";import"./Button-23wGEqNA.js";import"./Close-Dc_IoJrS.js";import"./DialogContent-BnPfe-VZ.js";import"./Fade-Z_2TPi3i.js";import"./Modal-Dk1urp-s.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-CiO3u9yz.js";import"./getActiveElement-BQgAPKnO.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,d=C("On click dialog action"),Q={title:"Dialogs/BootstrapDialog",component:u,parameters:{layout:"centered",docs:{source:{transform:(m,b)=>{const{args:D}=b;return`<BootstrapDialog
  ${Object.entries(D).filter(([e])=>e!=="children").map(([e,o])=>typeof o=="boolean"&&o===!0?e:typeof o=="string"?`${e}="${o}"`:typeof o=="function"?`${e}={${e}}`:Array.isArray(o)?`${e}={${JSON.stringify(o,null,2).replace(/"(\w+)":/g,"$1:")}}`:`${e}={${JSON.stringify(o)}}`).filter(Boolean).join(`
  `)}
  onClose={handleClose}
>
  {children}
</BootstrapDialog>`}}}},render:m=>p.jsx(f,{component:u,args:m})},t={args:{title:"Lorem ipsum",children:p.jsx(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}};t.parameters={docs:{source:{code:`import { useState } from 'react';
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
}`}}};const a={args:{...t.args,acceptable:!0,cancelable:!0}},r={args:{...t.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:d},{id:"action2",text:"Action 2",onClick:d}]}},n={args:{...t.args,acceptable:!0,loading:!0}},s={args:{...t.args,loading:!0}},i={args:{...r.args,disabled:!0}},c={args:{...t.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}},l={args:{title:"Slot Props Demo",acceptable:!0,cancelable:!0,loading:!0,children:p.jsx(g,{children:"Customized dialog with larger buttons and custom close button color."}),slotProps:{closeButton:{color:"error"},acceptButton:{size:"large",variant:"contained"},cancelButton:{size:"large"},loadingIndicator:{size:24}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithExtraActions.args,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const V=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts","WithSlotPropsCustomization"];export{a as AcceptableAndCancelable,c as CustomTexts,t as Default,i as Disabled,s as Loading,n as LoadingWithAcceptable,r as WithExtraActions,l as WithSlotPropsCustomization,V as __namedExportsOrder,Q as default};
