import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as D}from"./storybook-BExNV_A2.js";import{L as G}from"./loading-area-c9evx6OZ.js";import{A as h}from"./Alert-CoN8pKaz.js";import{A as f}from"./notification-center.provider-DGQlM2s5.js";import{B as N}from"./Box-CLV6Ujku.js";import{L as H}from"./LinearProgress-D3nS1kGu.js";import{T as J}from"./Typography-BXSoh8s2.js";import"./index-CFahbR6w.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./identifier-ChVxdG4r.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";import"./memoTheme-kZCwlU27.js";import"./extendSxProp-C7aHAb1N.js";import"./Button-C1N17xc9.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./CircularProgress-5NeNm8J5.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./useSlot-HZ3RMWsh.js";import"./resolveComponentProps-BnY4DdR-.js";import"./Close-D7PaC3tu.js";import"./IconButton-X2xkCwyW.js";import"./Paper-0PE78at3.js";import"./useTheme-CfVHYLf1.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./index-n2pnZwpZ.js";function u({fetching:r=!1,loading:p=!1,error:s,success:a,children:R}){const z=Array.isArray(r)?r.some(l=>l):r;return(Array.isArray(p)?p.some(l=>l):p)?e.jsx(G,{}):s?e.jsxs(h,{severity:"error",role:"alert","aria-describedby":"error",children:[s.name&&e.jsx(f,{role:"heading",children:s.name}),s.message]}):e.jsxs(N,{children:[a&&e.jsxs(h,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[a.name&&e.jsx(f,{role:"heading",children:a.name}),a.message]}),z&&e.jsx(H,{sx:{width:1,mb:1}}),R]})}u.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const Te={title:"Components/Feedback/QueryContainer",component:u,decorators:[D()],parameters:{layout:"fullscreen"},render:r=>e.jsx(N,{height:300,children:e.jsx(u,{...r,children:e.jsx(J,{children:"Children content"})})})},t={args:{fetching:!0}},n={args:{loading:!0}},o={args:{loading:!0,fetching:!0}},i={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},c={args:{fetching:!1,error:{message:"Internal error"}}},m={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},d={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},g={args:{fetching:!1}};var y,x,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,b,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var A,C,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var T,E,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,O,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};var U,V,k;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...(k=(V=g.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const Ee=["Fetching","Loading","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"];export{g as Content,i as Error,c as ErrorWithOnlyMessage,t as Fetching,o as FetchingAndLoading,n as Loading,m as Success,d as SuccessWithOnlyMessage,Ee as __namedExportsOrder,Te as default};
