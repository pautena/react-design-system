import{j as p}from"./iframe-u8LB376j.js";import{S as m}from"./storybook-gYjJ4lHD.js";import{B as c}from"./bootstrap-dialog-BqHZWuIw.js";import{D as d}from"./DialogContentText-1ekpPNwG.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center.provider-CR_O05N3.js";import"./Typography-yXzabRJh.js";import"./memoTheme-V5gp6nHU.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-BA1C3KMz.js";import"./useSlot-C0yEUZxy.js";import"./useTheme-DuCPUz7t.js";import"./ClickAwayListener-WJK6T669.js";import"./Grow-C0Me-irx.js";import"./index-aSWeh4o7.js";import"./index-CQl9WEtC.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-ufo0IKvl.js";import"./Close-DCdKt3RS.js";import"./IconButton-DfMYPZbC.js";import"./CircularProgress-DnZ0hM6Q.js";import"./Box-r6KuYIW2.js";import"./format-Df_VsWsY.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-CoUj8Mfc.js";import"./Button-B1FhpMe7.js";import"./Close-BiXZ-HyV.js";import"./DialogContent-BV8s4dyq.js";import"./Fade-Bjv-lycE.js";import"./Modal-PS6z-5gu.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-Dozv2roy.js";import"./getActiveElement-BQgAPKnO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i=u("On click dialog action"),J={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:l=>p.jsx(m,{component:c,args:l})},e={args:{title:"Lorem ipsum",children:p.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,P as __namedExportsOrder,J as default};
