import{j}from"./iframe-CyC2w49y.js";import{S as q}from"./storybook-CDs3mFlN.js";import{B as c}from"./bootstrap-dialog-DoDJgQZh.js";import{D as y}from"./DialogContentText-CW4aAqrw.js";import"./notification-center.provider-hMjTnbFV.js";import"./Typography-CyoT5iG8.js";import"./generateUtilityClasses-DiH4kTrr.js";import"./memoTheme-D8ZqR_KA.js";import"./createSimplePaletteValueFilter-DpK-1nce.js";import"./useSlot-Cmez1d-s.js";import"./useTheme-Ds7l_2HV.js";import"./ClickAwayListener-DqyQjJ40.js";import"./Grow--wL55YRT.js";import"./index-B5T9s_eP.js";import"./index-CFgBVtQr.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-VpekSNGd.js";import"./Close-C358guxW.js";import"./IconButton-G5bFnDkw.js";import"./CircularProgress-DDQh3gzr.js";import"./Box-Bu5_Wahq.js";import"./format-CHl7z0wk.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-Bdhk1Fnw.js";import"./Button-BsHUy8NG.js";import"./Close-CsC_HgED.js";import"./DialogContent-DIKNx1au.js";import"./Fade-CgEVAOb-.js";import"./Modal-BG7KvuJi.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-rUAWzwmj.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,i=M("On click dialog action"),de={title:"Components/Dialogs/BootstrapDialog",component:c,parameters:{layout:"centered"},render:B=>j.jsx(q,{component:c,args:B})},e={args:{title:"Lorem ipsum",children:j.jsx(y,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},t={args:{...e.args,acceptable:!0,cancelable:!0}},r={args:{...e.args,cancelable:!0,actions:[{id:"action1",text:"Action 1",color:"error",onClick:i},{id:"action2",text:"Action 2",onClick:i}]}},a={args:{...e.args,acceptable:!0,loading:!0}},o={args:{...e.args,loading:!0}},n={args:{...r.args,disabled:!0}},s={args:{...e.args,acceptable:!0,cancelable:!0,cancelText:"Cancel updated",acceptText:"Accept updated"}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const ue=["Default","AcceptableAndCancelable","WithExtraActions","LoadingWithAcceptable","Loading","Disabled","CustomTexts"];export{t as AcceptableAndCancelable,s as CustomTexts,e as Default,n as Disabled,o as Loading,a as LoadingWithAcceptable,r as WithExtraActions,ue as __namedExportsOrder,de as default};
