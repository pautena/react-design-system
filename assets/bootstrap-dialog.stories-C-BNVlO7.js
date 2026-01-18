import{j as p}from"./iframe-BupHDtd1.js";import{S as m}from"./storybook-Br2qlmUO.js";import{B as c}from"./bootstrap-dialog-CJ0srh6N.js";import{D as d}from"./DialogContentText-B7dwVXQB.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center.provider-D6bLtnLQ.js";import"./Typography-BHekySi3.js";import"./memoTheme-uoO9vclW.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-LbGOAHYa.js";import"./useSlot-CDAVMGN6.js";import"./useTheme-Big8xsoA.js";import"./ClickAwayListener-HtsNmCH7.js";import"./Grow-CP6B5ywO.js";import"./index-DGx7bEnB.js";import"./index-dSTdg89Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-ZM7KCuNl.js";import"./Close-Dc-soyav.js";import"./IconButton-CYN55AKW.js";import"./CircularProgress-CA-yQluH.js";import"./Box-BZzEFwUz.js";import"./format-D0iY8g2F.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-B7SWTtEU.js";import"./Button-orM3su5N.js";import"./Close-BaYMS0Mx.js";import"./DialogContent-CVx2Em_y.js";import"./Fade-DI5ShsIQ.js";import"./Modal-cEtTgi0S.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DP_lpGU5.js";import"./getActiveElement-BQgAPKnO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i=u("On click dialog action"),J={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:l=>p.jsx(m,{component:c,args:l})},e={args:{title:"Lorem ipsum",children:p.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
