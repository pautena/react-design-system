import{r as P}from"./index-CFahbR6w.js";import{g as y,a as g,c as x}from"./generateUtilityClasses-F-VSJTCv.js";import{u as b}from"./useTheme-BLxwKqlM.js";import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{s as C,a as R,m as h}from"./memoTheme-DEu9pJpV.js";import{a as u,g as c}from"./identifier-CAo-jtr-.js";import{u as $}from"./DefaultPropsProvider-CoDhPOBZ.js";function k(e){return g("MuiPaper",e)}const D=y("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]),q=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return R(n,k,t)},M=C("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(h(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),I=P.forwardRef(function(a,o){var d;const r=$({props:a,name:"MuiPaper"}),t=b(),{className:n,component:i="div",elevation:s=1,square:m=!1,variant:l="elevation",...v}=r,p={...r,component:i,elevation:s,square:m,variant:l},f=q(p);return w.jsx(M,{as:i,ownerState:p,className:x(f.root,n),ref:o,...v,style:{...l==="elevation"&&{"--Paper-shadow":(t.vars||t).shadows[s],...t.vars&&{"--Paper-overlay":(d=t.vars.overlays)==null?void 0:d[s]},...!t.vars&&t.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${u("#fff",c(s))}, ${u("#fff",c(s))})`}},...v.style}})});export{I as P,D as p};
