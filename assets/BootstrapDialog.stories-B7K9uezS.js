import{j as p}from"./iframe-VMkoG4ZL.js";import{S as f}from"./storybook-BmI9ftC1.js";import{B as m}from"./BootstrapDialog-BvZkoOT1.js";import{D as g}from"./DialogContentText-sdDayNIp.js";import"./preload-helper-PPVm8Dsz.js";import"./sidebar-DueH6Hjh.js";import"./index-Bo7bF0-3.js";import"./button-BA4CVbS1.js";import"./utils-n6qbTURJ.js";import"./useRenderElement-CHfU-5zq.js";import"./DirectionContext-DiP8kbVn.js";import"./index-6A0628O0.js";import"./index-BgY_nV53.js";import"./x-Df1iV-Zj.js";import"./createLucideIcon-BzgSrC6K.js";import"./index-B3Z8Ou6R.js";import"./useRender-CNg8ByML.js";import"./NotificationCenter.provider-Csm6e6JQ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Close-D-jp9D9h.js";import"./Fade-Du0QGdTH.js";import"./Modal-B9HQzpS5.js";import"./Portal-BMeIPGhO.js";import"./Box-JY1TTY9I.js";import"./Button-BbnIsc5V.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,d=C("On click dialog action"),Y={title:"Dialogs/BootstrapDialog",component:m,parameters:{layout:"centered",docs:{source:{transform:(u,b)=>{const{args:D}=b;return`<BootstrapDialog
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
}`,...l.parameters?.docs?.source}}};const F=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts","WithSlotPropsCustomization"];export{a as AcceptableAndCancelable,i as CustomTexts,t as Default,c as Disabled,s as Loading,n as LoadingWithAcceptable,r as WithExtraActions,l as WithSlotPropsCustomization,F as __namedExportsOrder,Y as default};
