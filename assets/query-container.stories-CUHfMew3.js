import{j as e}from"./iframe-BupHDtd1.js";import{b as S}from"./storybook-Br2qlmUO.js";import{L as j}from"./loading-area-B-mDhtEC.js";import{A as p,a as f}from"./notification-center.provider-D6bLtnLQ.js";import{B as y}from"./Box-BZzEFwUz.js";import{L as w}from"./LinearProgress-CyLca1m8.js";import{T as A}from"./Typography-BHekySi3.js";function h({fetching:r=!1,loading:l=!1,error:m,success:g,children:x}){const b=Array.isArray(r)?r.some(u=>u):r;return(Array.isArray(l)?l.some(u=>u):l)?e.jsx(j,{}):m?e.jsxs(p,{severity:"error",role:"alert","aria-describedby":"error",children:[m.name&&e.jsx(f,{role:"heading",children:m.name}),m.message]}):e.jsxs(y,{children:[g&&e.jsxs(p,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[g.name&&e.jsx(f,{role:"heading",children:g.name}),g.message]}),b&&e.jsx(w,{sx:{width:1,mb:1}}),x]})}h.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const C={title:"Components/Feedback/QueryContainer",component:h,decorators:[S()],parameters:{layout:"fullscreen"},render:r=>e.jsx(y,{height:300,children:e.jsx(h,{...r,children:e.jsx(A,{children:"Children content"})})})},s={args:{loading:!0}},a={args:{fetching:!0}},n={args:{loading:!0,fetching:!0}},t={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},o={args:{fetching:!1,error:{message:"Internal error"}}},c={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},i={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},d={args:{fetching:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      message: "Internal error"
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...d.parameters?.docs?.source}}};const _=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"],M=Object.freeze(Object.defineProperty({__proto__:null,Content:d,Default:s,Error:t,ErrorWithOnlyMessage:o,Fetching:a,FetchingAndLoading:n,Success:c,SuccessWithOnlyMessage:i,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{s as D,h as Q,M as q};
