import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CFahbR6w.js";import{c as H,T as xt,a as St,u as Y}from"./Typography-BHoRv_UT.js";import{e as tt}from"./resolveComponentProps-hmdrCTBm.js";import{u as At}from"./useTheme-4gy_rbmZ.js";import{s as S,a as W,m as F}from"./memoTheme-CBZDwJAx.js";import{g as U,a as D,c as J}from"./generateUtilityClasses-DuX1QiOS.js";import{u as x}from"./useSlot-nPjAgQtl.js";import{u as V}from"./DefaultPropsProvider-CoDhPOBZ.js";import{C as wt}from"./ClickAwayListener-DudWtlIt.js";import{P as st}from"./Paper-CjO-mYoO.js";import{c as M,b as ot,l as et,y as kt}from"./identifier-BgYKR63G.js";import{G as ht}from"./Grow-lPLudiBQ.js";import{c as X}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{C as bt}from"./Close-Ciaj37At.js";import{I as Pt}from"./IconButton-BsiGod7k.js";function Mt(t){return D("MuiAlert",t)}const nt=U("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Tt=H(r.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Rt=H(r.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),jt=H(r.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Lt=H(r.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Et=t=>{const{variant:o,color:n,severity:e,classes:a}=t,c={root:["root",`color${M(n||e)}`,`${o}${M(n||e)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return W(c,Mt,a)},It=S(st,{name:"MuiAlert",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`${n.variant}${M(n.color||n.severity)}`]]}})(F(({theme:t})=>{const o=t.palette.mode==="light"?ot:et,n=t.palette.mode==="light"?et:ot;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(X(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${e}Color`]:o(t.palette[e].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${e}StandardBg`]:n(t.palette[e].light,.9),[`& .${nt.icon}`]:t.vars?{color:t.vars.palette.Alert[`${e}IconColor`]}:{color:t.palette[e].main}}})),...Object.entries(t.palette).filter(X(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${e}Color`]:o(t.palette[e].light,.6),border:`1px solid ${(t.vars||t).palette[e].light}`,[`& .${nt.icon}`]:t.vars?{color:t.vars.palette.Alert[`${e}IconColor`]}:{color:t.palette[e].main}}})),...Object.entries(t.palette).filter(X(["dark"])).map(([e])=>({props:{colorSeverity:e,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${e}FilledColor`],backgroundColor:t.vars.palette.Alert[`${e}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[e].dark:t.palette[e].main,color:t.palette.getContrastText(t.palette[e].main)}}}))]}})),Ot=S("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),zt=S("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),$t=S("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),rt={success:r.jsx(Tt,{fontSize:"inherit"}),warning:r.jsx(Rt,{fontSize:"inherit"}),error:r.jsx(jt,{fontSize:"inherit"}),info:r.jsx(Lt,{fontSize:"inherit"})},Nt=m.forwardRef(function(o,n){const e=V({props:o,name:"MuiAlert"}),{action:a,children:c,className:p,closeText:u="Close",color:g,components:v={},componentsProps:f={},icon:C,iconMapping:R=rt,onClose:T,role:j="alert",severity:A="success",slotProps:G={},slots:s={},variant:i="standard",...l}=e,w={...e,color:g,severity:A,variant:i,colorSeverity:g||A},b=Et(w),P={slots:{closeButton:v.CloseButton,closeIcon:v.CloseIcon,...s},slotProps:{...f,...G}},[L,q]=x("root",{ref:n,shouldForwardComponentProp:!0,className:J(b.root,p),elementType:It,externalForwardedProps:{...P,...l},ownerState:w,additionalProps:{role:j,elevation:0}}),[E,I]=x("icon",{className:b.icon,elementType:Ot,externalForwardedProps:P,ownerState:w}),[O,z]=x("message",{className:b.message,elementType:zt,externalForwardedProps:P,ownerState:w}),[$,N]=x("action",{className:b.action,elementType:$t,externalForwardedProps:P,ownerState:w}),[k,K]=x("closeButton",{elementType:Pt,externalForwardedProps:P,ownerState:w}),[Z,_]=x("closeIcon",{elementType:bt,externalForwardedProps:P,ownerState:w});return r.jsxs(L,{...q,children:[C!==!1?r.jsx(E,{...I,children:C||R[A]||rt[A]}):null,r.jsx(O,{...z,children:c}),a!=null?r.jsx($,{...N,children:a}):null,a==null&&T?r.jsx($,{...N,children:r.jsx(k,{size:"small","aria-label":u,title:u,color:"inherit",onClick:T,...K,children:r.jsx(Z,{fontSize:"small",..._})})}):null]})});function Bt(t){return D("MuiAlertTitle",t)}U("MuiAlertTitle",["root"]);const Ht=t=>{const{classes:o}=t;return W({root:["root"]},Bt,o)},Wt=S(xt,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,o)=>o.root})(F(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2}))),Ft=m.forwardRef(function(o,n){const e=V({props:o,name:"MuiAlertTitle"}),{className:a,...c}=e,p=e,u=Ht(p);return r.jsx(Wt,{gutterBottom:!0,component:"div",ownerState:p,ref:n,className:J(u.root,a),...c})});function Ut(t={}){const{autoHideDuration:o=null,disableWindowBlurListener:n=!1,onClose:e,open:a,resumeHideDuration:c}=t,p=St();m.useEffect(()=>{if(!a)return;function s(i){i.defaultPrevented||i.key==="Escape"&&(e==null||e(i,"escapeKeyDown"))}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[a,e]);const u=Y((s,i)=>{e==null||e(s,i)}),g=Y(s=>{!e||s==null||p.start(s,()=>{u(null,"timeout")})});m.useEffect(()=>(a&&g(o),p.clear),[a,o,g,p]);const v=s=>{e==null||e(s,"clickaway")},f=p.clear,C=m.useCallback(()=>{o!=null&&g(c??o*.5)},[o,c,g]),R=s=>i=>{const l=s.onBlur;l==null||l(i),C()},T=s=>i=>{const l=s.onFocus;l==null||l(i),f()},j=s=>i=>{const l=s.onMouseEnter;l==null||l(i),f()},A=s=>i=>{const l=s.onMouseLeave;l==null||l(i),C()};return m.useEffect(()=>{if(!n&&a)return window.addEventListener("focus",C),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",f)}},[n,a,C,f]),{getRootProps:(s={})=>{const i={...tt(t),...tt(s)};return{role:"presentation",...s,...i,onBlur:R(i),onFocus:T(i),onMouseEnter:j(i),onMouseLeave:A(i)}},onClickAway:v}}function Dt(t){return D("MuiSnackbarContent",t)}U("MuiSnackbarContent",["root","message","action"]);const Vt=t=>{const{classes:o}=t;return W({root:["root"],action:["action"],message:["message"]},Dt,o)},Gt=S(st,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,o)=>o.root})(F(({theme:t})=>{const o=t.palette.mode==="light"?.8:.98,n=kt(t.palette.background.default,o);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(n),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),qt=S("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,o)=>o.message})({padding:"8px 0"}),Kt=S("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Zt=m.forwardRef(function(o,n){const e=V({props:o,name:"MuiSnackbarContent"}),{action:a,className:c,message:p,role:u="alert",...g}=e,v=e,f=Vt(v);return r.jsxs(Gt,{role:u,square:!0,elevation:6,className:J(f.root,c),ownerState:v,ref:n,...g,children:[r.jsx(qt,{className:f.message,ownerState:v,children:p}),a?r.jsx(Kt,{className:f.action,ownerState:v,children:a}):null]})});function _t(t){return D("MuiSnackbar",t)}U("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Xt=t=>{const{classes:o,anchorOrigin:n}=t,e={root:["root",`anchorOrigin${M(n.vertical)}${M(n.horizontal)}`]};return W(e,_t,o)},Jt=S("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[`anchorOrigin${M(n.anchorOrigin.vertical)}${M(n.anchorOrigin.horizontal)}`]]}})(F(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:o})=>o.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:o})=>o.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Qt=m.forwardRef(function(o,n){const e=V({props:o,name:"MuiSnackbar"}),a=At(),c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:u,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:f,className:C,ClickAwayListenerProps:R,ContentProps:T,disableWindowBlurListener:j=!1,message:A,onBlur:G,onClose:s,onFocus:i,onMouseEnter:l,onMouseLeave:w,open:b,resumeHideDuration:P,slots:L={},slotProps:q={},TransitionComponent:E,transitionDuration:I=c,TransitionProps:{onEnter:O,onExited:z,...$}={},...N}=e,k={...e,anchorOrigin:{vertical:u,horizontal:g},autoHideDuration:v,disableWindowBlurListener:j,TransitionComponent:E,transitionDuration:I},K=Xt(k),{getRootProps:Z,onClickAway:_}=Ut({...k}),[it,Q]=m.useState(!0),lt=d=>{Q(!0),z&&z(d)},ct=(d,y)=>{Q(!1),O&&O(d,y)},B={slots:{transition:E,...L},slotProps:{content:T,clickAwayListener:R,transition:$,...q}},[pt,ut]=x("root",{ref:n,className:[K.root,C],elementType:Jt,getSlotProps:Z,externalForwardedProps:{...B,...N},ownerState:k}),[dt,{ownerState:gt,...ft}]=x("clickAwayListener",{elementType:wt,externalForwardedProps:B,getSlotProps:d=>({onClickAway:(...y)=>{var h;(h=d.onClickAway)==null||h.call(d,...y),_(...y)}}),ownerState:k}),[mt,vt]=x("content",{elementType:Zt,shouldForwardComponentProp:!0,externalForwardedProps:B,additionalProps:{message:A,action:p},ownerState:k}),[Ct,yt]=x("transition",{elementType:ht,externalForwardedProps:B,getSlotProps:d=>({onEnter:(...y)=>{var h;(h=d.onEnter)==null||h.call(d,...y),ct(...y)},onExited:(...y)=>{var h;(h=d.onExited)==null||h.call(d,...y),lt(...y)}}),additionalProps:{appear:!0,in:b,timeout:I,direction:u==="top"?"down":"up"},ownerState:k});return!b&&it?null:r.jsx(dt,{...ft,...L.clickAwayListener&&{ownerState:gt},children:r.jsx(pt,{...ut,children:r.jsx(Ct,{...yt,children:f||r.jsx(mt,{...vt})})})})}),Yt=new Error("NotificationCenterContext.Provider is required and was undefined"),at=m.createContext(void 0),yo=()=>{const t=m.useContext(at);if(t===void 0)throw Yt;return t},to=({children:t,autoHideDuration:o=6e3})=>{const[n,e]=m.useState(void 0),[a,c]=m.useState(!1),p=g=>{e(g),c(!0)},u=()=>{c(!1)};return r.jsxs(at.Provider,{value:{show:p,hide:u},children:[r.jsx(Qt,{open:a,autoHideDuration:o,onClose:u,anchorOrigin:{vertical:"top",horizontal:"right"},children:r.jsxs(Nt,{onClose:u,severity:n==null?void 0:n.severity,"aria-label":n==null?void 0:n.severity,sx:{width:"100%"},children:[(n==null?void 0:n.title)&&r.jsx(Ft,{children:n==null?void 0:n.title}),n==null?void 0:n.message]})}),t]})};to.__docgenInfo={description:"",methods:[],displayName:"NotificationCenterProvider",props:{autoHideDuration:{defaultValue:{value:"6000",computed:!1},required:!1}}};export{Nt as A,to as N,Qt as S,Ft as a,nt as b,yo as u};
