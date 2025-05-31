import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a as y}from"./index-B-lxVbXh.js";import{S as O}from"./storybook-BhLlBB8C.js";import{B as c}from"./bootstrap-dialog-B-wtO0Ca.js";import{D as M}from"./DialogContentText-CDofzzMI.js";import"./v4-CtRu48qb.js";import"./index-MPVjHJeJ.js";import"./notification-center.provider-NRwxa4Yv.js";import"./ButtonBase-BNEyy1UI.js";import"./generateUtilityClasses-C0mA1QAX.js";import"./defaultTheme-D1CkU4eW.js";import"./index-RWZtYoiK.js";import"./extendSxProp-CacC3vWi.js";import"./emotion-react.browser.esm-B1ab5vTn.js";import"./memoTheme-L0vtuW4h.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./capitalize-BKnSthTY.js";import"./resolveComponentProps-D7k8s6fM.js";import"./useTheme-CkEAvl6p.js";import"./useSlot-D_Ed8wEH.js";import"./ClickAwayListener-CSxt-yVS.js";import"./Grow-CF5vml_o.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Paper-DuuDja31.js";import"./Close-Bd7fRRpH.js";import"./IconButton-poK4IEU9.js";import"./CircularProgress-D3NUXaEm.js";import"./Box-CzrcP6gm.js";import"./format-CAAd5Y45.js";import"./useThemeProps-BbkvGCaA.js";import"./Button-Dyh-ErXE.js";import"./Close-9QyOEW-j.js";import"./DialogContent-CdRmrlJR.js";import"./Fade-DZMeUxL7.js";import"./Modal-B5E3roGC.js";import"./ownerWindow-BRjH2MYD.js";import"./Portal-DImdN-2c.js";const i=y("On click dialog action"),fe={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:q=>_.jsx(O,{component:c,args:q})},e={args:{title:"Lorem ipsum",children:_.jsx(M,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    children: <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
