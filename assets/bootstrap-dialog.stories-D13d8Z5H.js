import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a as y}from"./index-B-lxVbXh.js";import{B as c}from"./bootstrap-dialog-BmxVeOVu.js";import{S as O}from"./storybook-DrBBwMIu.js";import{D as M}from"./DialogContentText-DV1AxxpQ.js";import"./v4-CtRu48qb.js";import"./Close-CnC4TRgS.js";import"./Typography-kEBT9KOp.js";import"./index-CFahbR6w.js";import"./generateUtilityClasses-D-SxHVPw.js";import"./identifier-BgYKR63G.js";import"./memoTheme-DMhdsnBH.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./DialogContent-BKMVU8oF.js";import"./useTheme-4gy_rbmZ.js";import"./useSlot-CxWRxdBG.js";import"./resolveComponentProps-Cr8BEufl.js";import"./Paper-CKIh7Zii.js";import"./Fade-0Uqiz_Oq.js";import"./Grow-n1DXLUVe.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./CircularProgress-DZYD8Un3.js";import"./Modal-CIPqqYkl.js";import"./ownerWindow-DTHMI0Ng.js";import"./Portal-CHQUlWfp.js";import"./IconButton-DAJ6x1dW.js";import"./Box-GFssEyp-.js";import"./Button-BDSDs9oN.js";import"./notification-center.provider-C48dG42O.js";import"./ClickAwayListener-D1omqgxK.js";import"./Close-vvyBwv4a.js";import"./format-Ldt95C1h.js";import"./useThemeProps-BhaBqnWn.js";const i=y("On click dialog action"),Ce={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:q=>_.jsx(O,{component:c,args:q})},e={args:{title:"Lorem ipsum",children:_.jsx(M,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DialogContentText>
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,T,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var k,L,E;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...WithExtraActions.args,
    disabled: true
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,j,B;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated"
  }
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const fe=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,fe as __namedExportsOrder,Ce as default};
