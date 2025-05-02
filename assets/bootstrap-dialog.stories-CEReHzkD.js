import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a as y}from"./index-B-lxVbXh.js";import{B as c}from"./bootstrap-dialog-DNSCIplW.js";import{S as O}from"./storybook-mUOLdmZO.js";import{D as M}from"./DialogContentText-B7490chU.js";import"./v4-CtRu48qb.js";import"./Close-Ca-FjG9u.js";import"./Typography-onhS7x9v.js";import"./index-MPVjHJeJ.js";import"./generateUtilityClasses-DLmekfm-.js";import"./identifier-AWcriSoQ.js";import"./memoTheme-DlVnEjn-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-BfpurQfk.js";import"./createSimplePaletteValueFilter-DPgxyE5U.js";import"./index-C40_slqU.js";import"./extendSxProp-BeG7G82_.js";import"./DialogContent-Dlq1vWfR.js";import"./useTheme-DGVEPoVB.js";import"./useSlot-BtCt5ImH.js";import"./resolveComponentProps-C6ngqkZn.js";import"./Paper-C5PX7apq.js";import"./Fade-BtPeSCYp.js";import"./Grow-C1jt-nhT.js";import"./index-CY-aScCg.js";import"./index-Bzm33-PM.js";import"./CircularProgress-DQ5TipBg.js";import"./Modal-CvM5GC-o.js";import"./ownerWindow-DdUEwRQR.js";import"./Portal-DnP5YhFq.js";import"./IconButton-Ozf8R3HC.js";import"./Box-qtFv-FAL.js";import"./Button-CuyBN5Mz.js";import"./notification-center.provider-BELCKNoI.js";import"./ClickAwayListener-DBe_3dQ_.js";import"./Close-D2L7LIV6.js";import"./format-DPw7y7Hi.js";import"./useThemeProps-mN8LFFEn.js";const i=y("On click dialog action"),Ce={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:q=>_.jsx(O,{component:c,args:q})},e={args:{title:"Lorem ipsum",children:_.jsx(M,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
