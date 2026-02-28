import{j as o,r as W,u as F,c as U,t as i,F as be,w as _,v as D}from"./iframe-pW5QL-bD.js";import{d as ye}from"./storybook-Cgqq7mV2.js";import{g as Q,a as V,B}from"./Box-DsJTfv6x.js";import{c as T,I as he,C as ve}from"./IconButton-_qVtYsnW.js";import{a as H,s as u,m as x}from"./memoTheme-HUfg-dMU.js";import{u as C}from"./useSlot-BAaV_uZw.js";import{c as f,d as re}from"./Typography-CJ5PGsY1.js";import{P as Ce}from"./Paper-Bc1D1BeZ.js";function xe(e){return Q("MuiAlert",e)}const G=V("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ae=T(o.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Se=T(o.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),je=T(o.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Ie=T(o.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Me=T(o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),$e=e=>{const{variant:r,color:t,severity:a,classes:n}=e,c={root:["root",`color${i(t||a)}`,`${r}${i(t||a)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return H(c,xe,n)},we=u(Ce,{name:"MuiAlert",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`${t.variant}${i(t.color||t.severity)}`]]}})(x(({theme:e})=>{const r=e.palette.mode==="light"?e.darken:e.lighten,t=e.palette.mode==="light"?e.lighten:e.darken;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(f(["light"])).map(([a])=>({props:{colorSeverity:a,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:t(e.palette[a].light,.9),[`& .${G.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}}})),...Object.entries(e.palette).filter(f(["light"])).map(([a])=>({props:{colorSeverity:a,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${G.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}}})),...Object.entries(e.palette).filter(f(["dark"])).map(([a])=>({props:{colorSeverity:a,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}}}))]}})),Pe=u("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Te=u("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Le=u("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),J={success:o.jsx(Ae,{fontSize:"inherit"}),warning:o.jsx(Se,{fontSize:"inherit"}),error:o.jsx(je,{fontSize:"inherit"}),info:o.jsx(Ie,{fontSize:"inherit"})},Y=W.forwardRef(function(r,t){const a=F({props:r,name:"MuiAlert"}),{action:n,children:c,className:d,closeText:l="Close",color:p,components:L={},componentsProps:m={},icon:g,iconMapping:k=J,onClose:b,role:h="alert",severity:s="success",slotProps:te={},slots:ae={},variant:oe="standard",...ne}=a,y={...a,color:p,severity:s,variant:oe,colorSeverity:p||s},R=$e(y),v={slots:{closeButton:L.CloseButton,closeIcon:L.CloseIcon,...ae},slotProps:{...m,...te}},[se,ie]=C("root",{ref:t,shouldForwardComponentProp:!0,className:U(R.root,d),elementType:we,externalForwardedProps:{...v,...ne},ownerState:y,additionalProps:{role:h,elevation:0}}),[le,ce]=C("icon",{className:R.icon,elementType:Pe,externalForwardedProps:v,ownerState:y}),[de,pe]=C("message",{className:R.message,elementType:Te,externalForwardedProps:v,ownerState:y}),[X,Z]=C("action",{className:R.action,elementType:Le,externalForwardedProps:v,ownerState:y}),[ue,fe]=C("closeButton",{elementType:he,externalForwardedProps:v,ownerState:y}),[me,ge]=C("closeIcon",{elementType:Me,externalForwardedProps:v,ownerState:y});return o.jsxs(se,{...ie,children:[g!==!1?o.jsx(le,{...ce,children:g||k[s]||J[s]}):null,o.jsx(de,{...pe,children:c}),n!=null?o.jsx(X,{...Z,children:n}):null,n==null&&b?o.jsx(X,{...Z,children:o.jsx(ue,{size:"small","aria-label":l,title:l,color:"inherit",onClick:b,...fe,children:o.jsx(me,{fontSize:"small",...ge})})}):null]})});function ke(e){return Q("MuiAlertTitle",e)}V("MuiAlertTitle",["root"]);const Re=e=>{const{classes:r}=e;return H({root:["root"]},ke,r)},Be=u(re,{name:"MuiAlertTitle",slot:"Root"})(x(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2}))),ee=W.forwardRef(function(r,t){const a=F({props:r,name:"MuiAlertTitle"}),{className:n,...c}=a,d=a,l=Re(d);return o.jsx(Be,{gutterBottom:!0,component:"div",ownerState:d,ref:t,className:U(l.root,n),...c})});function ze(e){return Q("MuiLinearProgress",e)}V("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const z=4,O=D`
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
`,Oe=typeof O!="string"?_`
        animation: ${O} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,q=D`
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
`,qe=typeof q!="string"?_`
        animation: ${q} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,N=D`
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
`,Ne=typeof N!="string"?_`
        animation: ${N} 3s infinite linear;
      `:null,Ee=e=>{const{classes:r,variant:t,color:a}=e,n={root:["root",`color${i(a)}`,t],dashed:["dashed",`dashedColor${i(a)}`],bar1:["bar","bar1",`barColor${i(a)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${i(a)}`,t==="buffer"&&`color${i(a)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return H(n,ze,r)},K=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),We=u("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${i(t.color)}`],r[t.variant]]}})(x(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:K(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),Fe=u("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${i(t.color)}`]]}})(x(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(f()).map(([r])=>{const t=K(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),Ne||{animation:`${N} 3s infinite linear`}),Ue=u("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(x(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${z}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${z}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:Oe||{animation:`${O} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),_e=u("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(x(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:K(e,r),transition:`transform .${z}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:qe||{animation:`${q} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),De=W.forwardRef(function(r,t){const a=F({props:r,name:"MuiLinearProgress"}),{className:n,color:c="primary",value:d,valueBuffer:l,variant:p="indeterminate",...L}=a,m={...a,color:c,variant:p},g=Ee(m),k=be(),b={},h={bar1:{},bar2:{}};if((p==="determinate"||p==="buffer")&&d!==void 0){b["aria-valuenow"]=Math.round(d),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let s=d-100;k&&(s=-s),h.bar1.transform=`translateX(${s}%)`}if(p==="buffer"&&l!==void 0){let s=(l||0)-100;k&&(s=-s),h.bar2.transform=`translateX(${s}%)`}return o.jsxs(We,{className:U(g.root,n),ownerState:m,role:"progressbar",...b,ref:t,...L,children:[p==="buffer"?o.jsx(Fe,{className:g.dashed,ownerState:m}):null,o.jsx(Ue,{className:g.bar1,ownerState:m,style:h.bar1}),p==="determinate"?null:o.jsx(_e,{className:g.bar2,ownerState:m,style:h.bar2})]})});function E({fetching:e=!1,loading:r=!1,error:t,success:a,children:n}){const c=Array.isArray(e)?e.some(l=>l):e;return(Array.isArray(r)?r.some(l=>l):r)?o.jsx(B,{width:1,height:1,display:"flex",justifyContent:"center",alignItems:"center",children:o.jsx(ve,{})}):t?o.jsxs(Y,{severity:"error",role:"alert","aria-describedby":"error",children:[t.name&&o.jsx(ee,{role:"heading",children:t.name}),t.message]}):o.jsxs(B,{children:[a&&o.jsxs(Y,{severity:"success",role:"alert","aria-describedby":"success",sx:{mb:2},children:[a.name&&o.jsx(ee,{role:"heading",children:a.name}),a.message]}),c&&o.jsx(De,{sx:{width:1,mb:1}}),n]})}E.__docgenInfo={description:"Component to show different indicators based on the usual api query statuses",methods:[],displayName:"QueryContainer",props:{fetching:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we have available data",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:"There is a query in progress and we don't have available data",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"QueryContainerError"},description:"The query has returned an error"},success:{required:!1,tsType:{name:"QueryContainerSuccess"},description:"The query has finished successfully"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display when not in loading/error/success state"}}};const Qe={title:"Feedback/QueryContainer",component:E,decorators:[ye()],parameters:{layout:"fullscreen"},render:e=>o.jsx(B,{height:300,children:o.jsx(E,{...e,children:o.jsx(re,{children:"Children content"})})})},A={args:{loading:!0}},S={args:{fetching:!0}},j={args:{loading:!0,fetching:!0}},I={args:{fetching:!1,error:{name:"Sign in error",message:"User and password doesn't match"}}},M={args:{fetching:!1,error:{message:"Internal error"}}},$={args:{fetching:!1,success:{name:"Item added",message:"The new item has been created with id 1"}}},w={args:{fetching:!1,success:{message:"The new item has been created with id 1"}}},P={args:{fetching:!1}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: true
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    fetching: true
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match"
    }
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    error: {
      message: "Internal error"
    }
  }
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1"
    }
  }
}`,...$.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1"
    }
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: false
  }
}`,...P.parameters?.docs?.source}}};const Ve=["Default","Fetching","FetchingAndLoading","Error","ErrorWithOnlyMessage","Success","SuccessWithOnlyMessage","Content"],rr=Object.freeze(Object.defineProperty({__proto__:null,Content:P,Default:A,Error:I,ErrorWithOnlyMessage:M,Fetching:S,FetchingAndLoading:j,Success:$,SuccessWithOnlyMessage:w,__namedExportsOrder:Ve,default:Qe},Symbol.toStringTag,{value:"Module"}));export{A as D,E as Q,rr as a};
