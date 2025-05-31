import{j}from"./iframe-DF1-CE8W.js";import{S as q}from"./storybook-BMS3iT1X.js";import{B as c}from"./bootstrap-dialog-BFehHW_r.js";import{D as y}from"./DialogContentText-B1C_1Gvh.js";import"./notification-center.provider-BuC7hSZT.js";import"./Typography-DnRJLN7A.js";import"./generateUtilityClasses-ep8tZ6E9.js";import"./memoTheme-BiQeu4dL.js";import"./capitalize-BXHuhfc0.js";import"./createSimplePaletteValueFilter-DV0SZFES.js";import"./resolveComponentProps-MDGWKvpl.js";import"./useTheme-CzxbhnGL.js";import"./useSlot-DkRJhMCp.js";import"./ClickAwayListener-BngSux_m.js";import"./Grow-VY7noeTZ.js";import"./index-EIGdvPod.js";import"./index-BFIYPmsr.js";import"./Paper-Cf1sSZwi.js";import"./Close-BLGPiyJW.js";import"./IconButton-DVduu1i_.js";import"./CircularProgress-P5Z1KMXE.js";import"./Box-94sBtQLg.js";import"./format-Cc92nd8x.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-Um56U43-.js";import"./Button-Bg4vScNa.js";import"./Close-CO7E9vw3.js";import"./DialogContent-Ch57lDST.js";import"./Fade-fIYqRCib.js";import"./Modal-CYbnaKDf.js";import"./ownerWindow-D0dQqHhA.js";import"./Portal-CgO-uGYL.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,i=M("On click dialog action"),ue={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:B=>j.jsx(q,{component:c,args:B})},e={args:{title:"Lorem ipsum",children:j.jsx(y,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DialogContentText>
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,A;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(A=(x=r.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var D,C,f;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    loading: true
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,T,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var _,h,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...WithExtraActions.args,
    disabled: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var O,E,W;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated"
  }
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const ge=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,ge as __namedExportsOrder,ue as default};
