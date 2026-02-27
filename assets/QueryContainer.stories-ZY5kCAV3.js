import{r as z,u as E,q as Q,j as t,c as U,i as s,t as B,v as O}from"./iframe-VMkoG4ZL.js";import{d as F}from"./storybook-BmI9ftC1.js";import{B as q}from"./Box-JY1TTY9I.js";import{f as W,s as $,m as P,t as v,C as K,A as N,p as _,h as V}from"./NotificationCenter.provider-Csm6e6JQ.js";import{g as X,a as G}from"./generateUtilityClasses-DGi4yQgU.js";function H(r){return X("MuiLinearProgress",r)}G("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const T=4,k=O`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,J=typeof k!="string"?B`
        animation: ${k} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,I=O`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,Y=typeof I!="string"?B`
        animation: ${I} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,L=O`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,Z=typeof L!="string"?B`
        animation: ${L} 3s infinite linear;
      `:null,ee=r=>{const{classes:e,variant:a,color:n}=r,c={root:["root",`color${s(n)}`,a],dashed:["dashed",`dashedColor${s(n)}`],bar1:["bar","bar1",`barColor${s(n)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",a!=="buffer"&&`barColor${s(n)}`,a==="buffer"&&`color${s(n)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return W(c,H,e)},R=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),re=$("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${s(a.color)}`],e[a.variant]]}})(P(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(v()).map(([e])=>({props:{color:e},style:{backgroundColor:R(r,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),ae=$("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${s(a.color)}`]]}})(P(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(v()).map(([e])=>{const a=R(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),Z||{animation:`${L} 3s infinite linear`}),te=$("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar1,e[`barColor${s(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(P(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(v()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${T}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${T}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:J||{animation:`${k} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),ne=$("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar2,e[`barColor${s(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(P(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(v()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(v()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:R(r,e),transition:`transform .${T}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:Y||{animation:`${I} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),se=z.forwardRef(function(e,a){const n=E({props:e,name:"MuiLinearProgress"}),{className:c,color:S="primary",value:C,valueBuffer:i,variant:l="indeterminate",...D}=n,d={...n,color:S,variant:l},x=ee(d),M=Q(),w={},j={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&C!==void 0){w["aria-valuenow"]=Math.round(C),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let o=C-100;M&&(o=-o),j.bar1.transform=`translateX(${o}%)`}if(l==="buffer"&&i!==void 0){let o=(i||0)-100;M&&(o=-o),j.bar2.transform=`translateX(${o}%)`}return t.jsxs(re,{className:U(x.root,c),ownerState:d,role:"progressbar",...w,ref:a,...D,children:[l==="buffer"?t.jsx(ae,{className:x.dashed,ownerState:d}):null,t.jsx(te,{className:x.bar1,ownerState:d,style:j.bar1}),l==="determinate"?null:t.jsx(ne,{className:x.bar2,ownerState:d,style:j.bar2})]})});function A({fetching:r=!1,loading:e=!1,error:a,success:n,children:c}){const S=Array.isArray(r)?r.some(i=>i):r;return(Array.isArray(e)?e.some(i=>i):e)?t.jsx(q,{width:1,height:1,display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(K,{})}):a?t.jsxs(N,{severity:"error",role:"alert","aria-describedby":"error",children:[a.name&&t.jsx(_,{role:"heading",children:a.name}),a.message]}):t.jsxs(q,{children:[n&&t.jsxs(N,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[n.name&&t.jsx(_,{role:"heading",children:n.name}),n.message]}),S&&t.jsx(se,{sx:{width:1,mb:1}}),c]})}A.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we have available data",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we don't have available data",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"QueryContainerError"},description:"The query has returned an error"},success:{required:!1,tsType:{name:"QueryContainerSuccess"},description:"The query has finished successfully"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display when not in loading/error/success state"}}};const oe={title:"Feedback/QueryContainer",component:A,decorators:[F()],parameters:{layout:"fullscreen"},render:r=>t.jsx(q,{height:300,children:t.jsx(A,{...r,children:t.jsx(V,{children:"Children content"})})})},u={args:{loading:!0}},m={args:{fetching:!0}},p={args:{loading:!0,fetching:!0}},f={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},g={args:{fetching:!1,error:{message:"Internal error"}}},b={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},h={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},y={args:{fetching:!1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      message: "Internal error"
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...y.parameters?.docs?.source}}};const ie=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"],pe=Object.freeze(Object.defineProperty({__proto__:null,Content:y,Default:u,Error:f,ErrorWithOnlyMessage:g,Fetching:m,FetchingAndLoading:p,Success:b,SuccessWithOnlyMessage:h,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{u as D,A as Q,pe as a};
