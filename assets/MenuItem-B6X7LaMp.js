import{r as l}from"./index-CFahbR6w.js";import{g as T,a as V,c as y,b as d}from"./identifier-ChVxdG4r.js";import{u as j,s as P,a as E,r as F,m as G}from"./memoTheme-kZCwlU27.js";import{a as C}from"./List-BUK6or8F.js";import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{a as L,B as N}from"./Typography-BXSoh8s2.js";import{u as U}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{l as $}from"./listItemIconClasses-BJTJNZr2.js";import{l as I}from"./listItemTextClasses-Bv6UoQn1.js";import{d as M}from"./dividerClasses-Ubv0-wcR.js";function D(e){return V("MuiMenuItem",e)}const i=T("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},z=e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:c,classes:o}=e,r=E({root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",c&&"selected"]},D,o);return{...o,...r}},W=P(N,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:H})(G(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${I.root}`]:{marginTop:0,marginBottom:0},[`& .${I.inset}`]:{paddingLeft:36},[`& .${$.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${$.root} svg`]:{fontSize:"1.25rem"}}}]}))),ee=l.forwardRef(function(t,a){const s=j({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:c="li",dense:o=!1,divider:m=!1,disableGutters:r=!1,focusVisibleClassName:O,role:k="menuitem",tabIndex:f,className:R,...B}=s,g=l.useContext(C),v=l.useMemo(()=>({dense:o||g.dense||!1,disableGutters:r}),[g.dense,o,r]),p=l.useRef(null);L(()=>{n&&p.current&&p.current.focus()},[n]);const w={...s,dense:v.dense,divider:m,disableGutters:r},u=z(s),S=U(p,a);let b;return s.disabled||(b=f!==void 0?f:-1),x.jsx(C.Provider,{value:v,children:x.jsx(W,{ref:S,role:k,tabIndex:b,component:c,focusVisibleClassName:y(u.focusVisible,O),className:y(u.root,R),...B,ownerState:w,classes:u})})});export{ee as M};
