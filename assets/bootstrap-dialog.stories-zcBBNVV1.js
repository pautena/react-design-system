import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a as y}from"./index-B-lxVbXh.js";import{B as c}from"./bootstrap-dialog-CHXvsdsz.js";import{S as O}from"./storybook-DatfEc6m.js";import{D as M}from"./DialogContentText-3pBygd-q.js";import"./v4-CtRu48qb.js";import"./Close-C6g3WkM_.js";import"./Typography-CyG_osfu.js";import"./index-MPVjHJeJ.js";import"./generateUtilityClasses-BktTZPgl.js";import"./identifier-DNvq2pxS.js";import"./memoTheme-BcQRFLl-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./capitalize-BAmrW1px.js";import"./emotion-react.browser.esm-By2wk1sz.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./index-CfQGRItp.js";import"./extendSxProp-Bje7bXD4.js";import"./DialogContent-C6FYydKa.js";import"./useTheme-CPdeOTZ4.js";import"./useSlot-DotCfz4C.js";import"./resolveComponentProps-DoQ0TnDj.js";import"./Paper-FGekKhYT.js";import"./Fade-B0UTdfkE.js";import"./Grow-CR1pdftr.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./CircularProgress--HHt6BCj.js";import"./Modal-BJw4-95A.js";import"./ownerWindow-BVEGGE4i.js";import"./Portal-BS2hKWpK.js";import"./IconButton-iRnWSj6z.js";import"./Box-0-Tyqcm1.js";import"./Button-DIAwl1fo.js";import"./notification-center.provider-zQQfevSj.js";import"./ClickAwayListener-CeZGyw_Z.js";import"./Close-Bp27t3Dr.js";import"./format-CF0r9H4i.js";import"./useThemeProps-DHy3-fAy.js";const i=y("On click dialog action"),fe={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:q=>_.jsx(O,{component:c,args:q})},e={args:{title:"Lorem ipsum",children:_.jsx(M,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Se=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,Se as __namedExportsOrder,fe as default};
