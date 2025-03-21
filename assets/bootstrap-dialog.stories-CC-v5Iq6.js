import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a as y}from"./index-B-lxVbXh.js";import{B as c}from"./bootstrap-dialog-BZM4wJLL.js";import{S as O}from"./storybook-Bd8TPGPp.js";import{D as M}from"./DialogContentText-CGKxB15D.js";import"./v4-CtRu48qb.js";import"./Close-CrIduU8l.js";import"./Typography-BHoRv_UT.js";import"./index-CFahbR6w.js";import"./generateUtilityClasses-DuX1QiOS.js";import"./identifier-BgYKR63G.js";import"./memoTheme-CBZDwJAx.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./DialogContent-CZDfVksC.js";import"./useTheme-4gy_rbmZ.js";import"./useSlot-nPjAgQtl.js";import"./resolveComponentProps-hmdrCTBm.js";import"./Paper-CjO-mYoO.js";import"./Fade-Bdw3YQIz.js";import"./Grow-lPLudiBQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./CircularProgress-CfAkpgYB.js";import"./Modal-D3Ofnbsy.js";import"./ownerWindow-B7hwhpfS.js";import"./Portal-efJ7cP4U.js";import"./IconButton-BsiGod7k.js";import"./Box-TC8t5Mes.js";import"./Button-DXBGL2Bf.js";import"./notification-center.provider-BNDZvRPM.js";import"./ClickAwayListener-DudWtlIt.js";import"./Close-Ciaj37At.js";import"./format-Beoo3kG1.js";import"./useThemeProps-BhaBqnWn.js";const i=y("On click dialog action"),Ce={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:q=>_.jsx(O,{component:c,args:q})},e={args:{title:"Lorem ipsum",children:_.jsx(M,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
