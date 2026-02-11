import{j as p}from"./iframe-B6ohfiup.js";import{S as m}from"./storybook-CKEMMUzk.js";import{B as c}from"./bootstrap-dialog-tSAR5wJ1.js";import{D as d}from"./DialogContentText-BtVAky3c.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center.provider-DDdDN_Mx.js";import"./Typography-DaaAGHYc.js";import"./memoTheme-CC-1Q7gO.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-C0yhpO25.js";import"./useSlot-QV38wpNi.js";import"./useTheme-DsWhHYnr.js";import"./ClickAwayListener-CQoOqBrP.js";import"./Grow-B2B6SMAZ.js";import"./index-DXCvjZCK.js";import"./index-Cn8b4sBC.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CU8usuf0.js";import"./Close-BkjWXVCk.js";import"./IconButton-Cwope62c.js";import"./CircularProgress-DNnVD90t.js";import"./Box-CXgehUqD.js";import"./format-CTA_fYyr.js";import"./useThemeProps-BwjGz0Xf.js";import"./Button-B9lAKHiE.js";import"./Close-5qubss2w.js";import"./DialogContent-B7h1j0Z6.js";import"./Fade-CEZAeMps.js";import"./Modal--ZvLHipi.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-CqKG5-4Z.js";import"./getActiveElement-BQgAPKnO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i=u("On click dialog action"),H={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:l=>p.jsx(m,{component:c,args:l})},e={args:{title:"Lorem ipsum",children:p.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DialogContentText>
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    loading: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithExtraActions.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated"
  }
}`,...s.parameters?.docs?.source}}};const J=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,J as __namedExportsOrder,H as default};
