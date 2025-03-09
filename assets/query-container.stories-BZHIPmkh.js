import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as z}from"./storybook-neFVUtWe.js";import{L as G}from"./loading-area-Bz7QugPc.js";import{A as h}from"./Alert-BP5pwJe5.js";import{A as f}from"./notification-center.provider-BTkGblW5.js";import{B as k}from"./Box-CohR-H6x.js";import{L as H}from"./LinearProgress-8-13sGHv.js";import{T as J}from"./Typography-ByJtF3w8.js";import"./index-CFahbR6w.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./format-CSyhA0QZ.js";import"./generateUtilityClasses-F-VSJTCv.js";import"./identifier-CAo-jtr-.js";import"./useThemeProps-DgFt-1LU.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./extendSxProp-BvoZt83L.js";import"./Button-CRc0Eyhl.js";import"./memoTheme-DEu9pJpV.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./CircularProgress-8aVj90tP.js";import"./emotion-react.browser.esm-3FlxQS88.js";import"./useSlot-N3pciUg7.js";import"./resolveComponentProps-C6NMVkEU.js";import"./Close-CgV9NucM.js";import"./IconButton-ez-CP-G1.js";import"./Paper-F-UPHvIG.js";import"./useTheme-BLxwKqlM.js";import"./ClickAwayListener-BKgkYejO.js";import"./Grow-2Tfe9bro.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./index-DDS9h_yT.js";import"./index-CGHpqm4L.js";function u({fetching:r=!1,loading:g=!1,error:s,success:a,children:N}){const R=Array.isArray(r)?r.some(l=>l):r;return(Array.isArray(g)?g.some(l=>l):g)?e.jsx(G,{}):s?e.jsxs(h,{severity:"error",role:"alert","aria-describedby":"error",children:[s.name&&e.jsx(f,{role:"heading",children:s.name}),s.message]}):e.jsxs(k,{children:[a&&e.jsxs(h,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[a.name&&e.jsx(f,{role:"heading",children:a.name}),a.message]}),R&&e.jsx(H,{sx:{width:1,mb:1}}),N]})}u.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ie={title:"Components/Feedback/QueryContainer",component:u,decorators:[z()],parameters:{layout:"fullscreen"},render:r=>e.jsx(k,{height:300,children:e.jsx(u,{...r,children:e.jsx(J,{children:"Children content"})})})},t={args:{loading:!0}},o={args:{fetching:!0}},n={args:{loading:!0,fetching:!0}},i={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},c={args:{fetching:!1,error:{message:"Internal error"}}},m={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},d={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},p={args:{fetching:!1}};var y,x,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,b,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var A,C,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,L,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,O,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      message: "Internal error"
    }
  }
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var q,v,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...(M=(v=m.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var W,Q,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...(B=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};var D,U,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Oe=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"];export{p as Content,t as Default,i as Error,c as ErrorWithOnlyMessage,o as Fetching,n as FetchingAndLoading,m as Success,d as SuccessWithOnlyMessage,Oe as __namedExportsOrder,Ie as default};
