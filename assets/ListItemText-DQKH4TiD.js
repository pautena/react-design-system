import{r as h}from"./index-CFahbR6w.js";import{c as N}from"./identifier-ChVxdG4r.js";import{a as k}from"./List-BUK6or8F.js";import{g as B,l as m}from"./listItemTextClasses-Bv6UoQn1.js";import{u as g}from"./useSlot-HZ3RMWsh.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{u as E,s as M,a as U}from"./memoTheme-kZCwlU27.js";import{T as y,t as L}from"./Typography-BXSoh8s2.js";const D=s=>{const{classes:r,inset:o,primary:a,secondary:l,dense:c}=s;return U({root:["root",o&&"inset",c&&"dense",a&&l&&"multiline"],primary:["primary"],secondary:["secondary"]},B,r)},F=M("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[{[`& .${m.primary}`]:r.primary},{[`& .${m.secondary}`]:r.secondary},r.root,o.inset&&r.inset,o.primary&&o.secondary&&r.multiline,o.dense&&r.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${L.root}:where(& .${m.primary})`]:{display:"block"},[`.${L.root}:where(& .${m.secondary})`]:{display:"block"},variants:[{props:({ownerState:s})=>s.primary&&s.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:s})=>s.inset,style:{paddingLeft:56}}]}),O=h.forwardRef(function(r,o){const a=E({props:r,name:"MuiListItemText"}),{children:l,className:c,disableTypography:n=!1,inset:P=!1,primary:x,primaryTypographyProps:v,secondary:C,secondaryTypographyProps:I,slots:b={},slotProps:S={},...$}=a,{dense:f}=h.useContext(k);let e=x??l,t=C;const i={...a,disableTypography:n,inset:P,primary:!!e,secondary:!!t,dense:f},d=D(i),T={slots:b,slotProps:{primary:v,secondary:I,...S}},[j,p]=g("primary",{className:d.primary,elementType:y,externalForwardedProps:T,ownerState:i}),[w,R]=g("secondary",{className:d.secondary,elementType:y,externalForwardedProps:T,ownerState:i});return e!=null&&e.type!==y&&!n&&(e=u.jsx(j,{variant:f?"body2":"body1",component:p!=null&&p.variant?void 0:"span",...p,children:e})),t!=null&&t.type!==y&&!n&&(t=u.jsx(w,{variant:"body2",color:"textSecondary",...R,children:t})),u.jsxs(F,{className:N(d.root,c),ownerState:i,ref:o,...$,children:[e,t]})});export{O as L};
