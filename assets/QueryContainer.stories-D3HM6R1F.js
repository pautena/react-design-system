import{j as e}from"./iframe-CPJC-7_S.js";import{c as x}from"./storybook-BSQM50tz.js";import{B as h}from"./Box-TJyasLSX.js";import{C as S}from"./CircularProgress-C6ftKUTK.js";import{A as f,a as y}from"./NotificationCenter.provider-u8BAQXhU.js";import{L as T}from"./LinearProgress-CnumdrYr.js";import{T as j}from"./Typography-CLOlFX5y.js";function p({fetching:r=!1,loading:u=!1,error:l,success:m,children:b}){const w=Array.isArray(r)?r.some(g=>g):r;return(Array.isArray(u)?u.some(g=>g):u)?e.jsx(h,{width:1,height:1,display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(S,{})}):l?e.jsxs(f,{severity:"error",role:"alert","aria-describedby":"error",children:[l.name&&e.jsx(y,{role:"heading",children:l.name}),l.message]}):e.jsxs(h,{children:[m&&e.jsxs(f,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[m.name&&e.jsx(y,{role:"heading",children:m.name}),m.message]}),w&&e.jsx(T,{sx:{width:1,mb:1}}),b]})}p.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we have available data",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we don't have available data",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"QueryContainerError"},description:"The query has returned an error"},success:{required:!1,tsType:{name:"QueryContainerSuccess"},description:"The query has finished successfully"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display when not in loading/error/success state"}}};const C={title:"Feedback/QueryContainer",component:p,decorators:[x()],parameters:{layout:"fullscreen"},render:r=>e.jsx(h,{height:300,children:e.jsx(p,{...r,children:e.jsx(j,{children:"Children content"})})})},s={args:{loading:!0}},a={args:{fetching:!0}},n={args:{loading:!0,fetching:!0}},t={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},o={args:{fetching:!1,error:{message:"Internal error"}}},i={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},c={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},d={args:{fetching:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...d.parameters?.docs?.source}}};const A=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"],M=Object.freeze(Object.defineProperty({__proto__:null,Content:d,Default:s,Error:t,ErrorWithOnlyMessage:o,Fetching:a,FetchingAndLoading:n,Success:i,SuccessWithOnlyMessage:c,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{s as D,p as Q,M as a};
