import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as R}from"./storybook-Bd8TPGPp.js";import{L as $}from"./loading-area-Chx2DQW3.js";import{A as f,a as p}from"./notification-center.provider-BNDZvRPM.js";import{B as k}from"./Box-TC8t5Mes.js";import{L as G}from"./LinearProgress-CSLDo6xt.js";import{T as H}from"./Typography-BHoRv_UT.js";function h({fetching:r=!1,loading:l=!1,error:m,success:g,children:z}){const N=Array.isArray(r)?r.some(u=>u):r;return(Array.isArray(l)?l.some(u=>u):l)?e.jsx($,{}):m?e.jsxs(f,{severity:"error",role:"alert","aria-describedby":"error",children:[m.name&&e.jsx(p,{role:"heading",children:m.name}),m.message]}):e.jsxs(k,{children:[g&&e.jsxs(f,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[g.name&&e.jsx(p,{role:"heading",children:g.name}),g.message]}),N&&e.jsx(G,{sx:{width:1,mb:1}}),z]})}h.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const J={title:"Components/Feedback/QueryContainer",component:h,decorators:[R()],parameters:{layout:"fullscreen"},render:r=>e.jsx(k,{height:300,children:e.jsx(h,{...r,children:e.jsx(H,{children:"Children content"})})})},s={args:{loading:!0}},a={args:{fetching:!0}},n={args:{loading:!0,fetching:!0}},t={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},o={args:{fetching:!1,error:{message:"Internal error"}}},c={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},i={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},d={args:{fetching:!1}};var y,x,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,j,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,C,_;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...(_=(C=n.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var T,O,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...(q=(O=t.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var E,L,v;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      message: "Internal error"
    }
  }
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var F,I,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var Q,W,D;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...(D=(W=i.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var B,U,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const K=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"],ne=Object.freeze(Object.defineProperty({__proto__:null,Content:d,Default:s,Error:t,ErrorWithOnlyMessage:o,Fetching:a,FetchingAndLoading:n,Success:c,SuccessWithOnlyMessage:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{s as D,h as Q,ne as q};
