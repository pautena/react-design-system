import{j as p}from"./iframe-EZlCblT_.js";import{S as m}from"./storybook-CoqJfa05.js";import{B as c}from"./bootstrap-dialog-eoxQL4tA.js";import{D as d}from"./DialogContentText-BocM32se.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center.provider-4_hiLkGe.js";import"./Typography-vAnbId3H.js";import"./memoTheme-CjfLGB6G.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-BROrGcBZ.js";import"./useSlot-JprQW5-3.js";import"./useTheme-BkEo2tXZ.js";import"./ClickAwayListener-N12zeSeK.js";import"./Grow-CXlVsDrX.js";import"./index-Bw2dNR8W.js";import"./index-BKuDT_6P.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-C0CMzwYM.js";import"./Close-BKTzgdKH.js";import"./IconButton-CoVD8RR9.js";import"./CircularProgress-CWLujbj3.js";import"./Box-C0oK-ZD8.js";import"./format-DwlqC9k_.js";import"./useThemeProps-DymWMTR7.js";import"./Button-fNy9YLcp.js";import"./Close-D-xHuLnO.js";import"./DialogContent-CxerUOEE.js";import"./Fade-0A1TFkgc.js";import"./Modal-DotIMusy.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BsEwugbi.js";import"./getActiveElement-BQgAPKnO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i=u("On click dialog action"),H={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:l=>p.jsx(m,{component:c,args:l})},e={args:{title:"Lorem ipsum",children:p.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
