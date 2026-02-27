import{r as v,o as tt,j as a,c as D,E as Fe,F as we,G as nt,D as at,H as rt,z as it,I as Pe,u as H,i as C,k as ot,q as lt,x as Re,w as st}from"./iframe-VMkoG4ZL.js";import{u as ut,d as dt}from"./storybook-BmI9ftC1.js";import{d as X,T as ct,a as pt,b as mt,c as ye,e as gt}from"./TableRow-C2jLXwo6.js";import{f as K,d as N,b as We,B as fe,k as O,s as B,m as W,t as pe,i as ft,I as oe,C as yt,h as xe,P as vt}from"./NotificationCenter.provider-Csm6e6JQ.js";import{g as _,a as V}from"./generateUtilityClasses-DGi4yQgU.js";import{B as me}from"./Box-JY1TTY9I.js";import{I as bt,S as ht,T as ie,P as xt}from"./TextField-CErgvfdJ.js";import{a as je}from"./List-W7dz8ZzU.js";import{l as Be}from"./listItemTextClasses-CbyehWdQ.js";import{C as Ct}from"./Close-D-jp9D9h.js";import{I as De}from"./InputAdornment-DWJH5O52.js";import{s as St}from"./styled-Dk0MiWt-.js";import{B as wt}from"./Button-BbnIsc5V.js";import"./preload-helper-PPVm8Dsz.js";import"./sidebar-DueH6Hjh.js";import"./index-Bo7bF0-3.js";import"./button-BA4CVbS1.js";import"./utils-n6qbTURJ.js";import"./useRenderElement-CHfU-5zq.js";import"./DirectionContext-DiP8kbVn.js";import"./index-6A0628O0.js";import"./index-BgY_nV53.js";import"./x-Df1iV-Zj.js";import"./createLucideIcon-BzgSrC6K.js";import"./index-B3Z8Ou6R.js";import"./useRender-CNg8ByML.js";import"./Modal-B9HQzpS5.js";import"./Portal-BMeIPGhO.js";import"./Fade-Du0QGdTH.js";import"./useSlotProps-DQo5DINc.js";const kt=it(),qt=St("div",{name:"MuiStack",slot:"Root"});function Tt(e){return ut({props:e,name:"MuiStack",defaultTheme:kt})}function It(e,t){const n=v.Children.toArray(e).filter(Boolean);return n.reduce((r,i,o)=>(r.push(i),o<n.length-1&&r.push(v.cloneElement(t,{key:`separator-${o}`})),r),[])}const $t=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ft=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...Fe({theme:t},we({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r}))};if(e.spacing){const r=nt(t),i=Object.keys(t.breakpoints.values).reduce((l,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(l[p]=!0),l),{}),o=we({values:e.direction,base:i}),s=we({values:e.spacing,base:i});typeof o=="object"&&Object.keys(o).forEach((l,p,g)=>{if(!o[l]){const x=p>0?o[g[p-1]]:"column";o[l]=x}}),n=at(n,Fe({theme:t},s,(l,p)=>e.useFlexGap?{gap:Pe(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${$t(p?o[p]:e.direction)}`]:Pe(r,l)}}))}return n=rt(t.breakpoints,n),n};function Pt(e={}){const{createStyledComponent:t=qt,useThemeProps:n=Tt,componentName:r="MuiStack"}=e,i=()=>K({root:["root"]},l=>_(r,l),{}),o=t(Ft);return v.forwardRef(function(l,p){const g=n(l),f=tt(g),{component:x="div",direction:c="column",spacing:y=0,divider:d,children:m,className:T,useFlexGap:b=!1,...S}=f,k={direction:c,spacing:y,useFlexGap:b},w=i();return a.jsx(o,{as:x,ownerState:k,ref:p,className:D(w.root,T),...S,children:d?It(m,d):m})})}const Rt=N(a.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function jt(e){return _("MuiChip",e)}const h=V("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Bt=e=>{const{classes:t,disabled:n,size:r,color:i,iconColor:o,onDelete:s,clickable:u,variant:l}=e,p={root:["root",l,n&&"disabled",`size${C(r)}`,`color${C(i)}`,u&&"clickable",u&&`clickableColor${C(i)}`,s&&"deletable",s&&`deletableColor${C(i)}`,`${l}${C(i)}`],label:["label",`label${C(r)}`],avatar:["avatar",`avatar${C(r)}`,`avatarColor${C(i)}`],icon:["icon",`icon${C(r)}`,`iconColor${C(o)}`],deleteIcon:["deleteIcon",`deleteIcon${C(r)}`,`deleteIconColor${C(i)}`,`deleteIcon${C(l)}Color${C(i)}`]};return K(p,jt,t)},Dt=B("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:r,iconColor:i,clickable:o,onDelete:s,size:u,variant:l}=n;return[{[`& .${h.avatar}`]:t.avatar},{[`& .${h.avatar}`]:t[`avatar${C(u)}`]},{[`& .${h.avatar}`]:t[`avatarColor${C(r)}`]},{[`& .${h.icon}`]:t.icon},{[`& .${h.icon}`]:t[`icon${C(u)}`]},{[`& .${h.icon}`]:t[`iconColor${C(i)}`]},{[`& .${h.deleteIcon}`]:t.deleteIcon},{[`& .${h.deleteIcon}`]:t[`deleteIcon${C(u)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIconColor${C(r)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIcon${C(l)}Color${C(r)}`]},t.root,t[`size${C(u)}`],t[`color${C(r)}`],o&&t.clickable,o&&r!=="default"&&t[`clickableColor${C(r)}`],s&&t.deletable,s&&r!=="default"&&t[`deletableColor${C(r)}`],t[l],t[`${l}${C(r)}`]]}})(W(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${h.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${h.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${h.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${h.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${h.icon}`]:{marginLeft:5,marginRight:-6},[`& .${h.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.alpha((e.vars||e).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.alpha((e.vars||e).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${h.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${h.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(pe(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(e.vars||e).palette[n].main,color:(e.vars||e).palette[n].contrastText,[`& .${h.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${h.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${h.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}}},...Object.entries(e.palette).filter(pe(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${h.focusVisible}`]:{background:(e.vars||e).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)},[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(pe(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${h.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${h.avatar}`]:{marginLeft:4},[`& .${h.avatarSmall}`]:{marginLeft:2},[`& .${h.icon}`]:{marginLeft:4},[`& .${h.iconSmall}`]:{marginLeft:2},[`& .${h.deleteIcon}`]:{marginRight:5},[`& .${h.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter(pe()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(e.vars||e).palette[n].main,border:`1px solid ${e.alpha((e.vars||e).palette[n].main,.7)}`,[`&.${h.clickable}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.focusOpacity)},[`& .${h.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].main}}}}))]}})),zt=B("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:r}=n;return[t.label,t[`label${C(r)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function ze(e){return e.key==="Backspace"||e.key==="Delete"}const Mt=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiChip"}),{avatar:i,className:o,clickable:s,color:u="default",component:l,deleteIcon:p,disabled:g=!1,icon:f,label:x,onClick:c,onDelete:y,onKeyDown:d,onKeyUp:m,size:T="medium",variant:b="filled",tabIndex:S,skipFocusWhenDisabled:k=!1,slots:w={},slotProps:j={},...q}=r,I=v.useRef(null),P=We(I,n),F=R=>{R.stopPropagation(),y(R)},z=R=>{R.currentTarget===R.target&&ze(R)&&R.preventDefault(),d&&d(R)},ee=R=>{R.currentTarget===R.target&&y&&ze(R)&&y(R),m&&m(R)},U=s!==!1&&c?!0:s,Y=U||y?fe:l||"div",G={...r,component:Y,disabled:g,size:T,color:u,iconColor:v.isValidElement(f)&&f.props.color||u,onDelete:!!y,clickable:U,variant:b},M=Bt(G),L=Y===fe?{component:l||"div",focusVisibleClassName:M.focusVisible,...y&&{disableRipple:!0}}:{};let te=null;y&&(te=p&&v.isValidElement(p)?v.cloneElement(p,{className:D(p.props.className,M.deleteIcon),onClick:F}):a.jsx(Rt,{className:M.deleteIcon,onClick:F}));let ne=null;i&&v.isValidElement(i)&&(ne=v.cloneElement(i,{className:D(M.avatar,i.props.className)}));let ae=null;f&&v.isValidElement(f)&&(ae=v.cloneElement(f,{className:D(M.icon,f.props.className)}));const re={slots:w,slotProps:j},[le,se]=O("root",{elementType:Dt,externalForwardedProps:{...re,...q},ownerState:G,shouldForwardComponentProp:!0,ref:P,className:D(M.root,o),additionalProps:{disabled:U&&g?!0:void 0,tabIndex:k&&g?-1:S,...L},getSlotProps:R=>({...R,onClick:Q=>{R.onClick?.(Q),c?.(Q)},onKeyDown:Q=>{R.onKeyDown?.(Q),z(Q)},onKeyUp:Q=>{R.onKeyUp?.(Q),ee(Q)}})}),[ue,A]=O("label",{elementType:zt,externalForwardedProps:re,ownerState:G,className:M.label});return a.jsxs(le,{as:Y,...se,children:[ne||ae,a.jsx(ue,{...A,children:x}),te]})});function Lt(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}const Me=V("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Le=V("MuiListItemIcon",["root","alignItemsFlexStart"]);function At(e){return _("MuiMenuItem",e)}const de=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Ot=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Nt=e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:o,classes:s}=e,l=K({root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},At,s);return{...s,...l}},Wt=B(fe,{shouldForwardProp:e=>ft(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Ot})(W(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${de.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${de.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${de.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${de.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${de.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Me.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Me.inset}`]:{marginLeft:52},[`& .${Be.root}`]:{marginTop:0,marginBottom:0},[`& .${Be.inset}`]:{paddingLeft:36},[`& .${Le.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${Le.root} svg`]:{fontSize:"1.25rem"}}}]}))),J=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:o="li",dense:s=!1,divider:u=!1,disableGutters:l=!1,focusVisibleClassName:p,role:g="menuitem",tabIndex:f,className:x,...c}=r,y=v.useContext(je),d=v.useMemo(()=>({dense:s||y.dense||!1,disableGutters:l}),[y.dense,s,l]),m=v.useRef(null);ot(()=>{i&&m.current&&m.current.focus()},[i]);const T={...r,dense:d.dense,divider:u,disableGutters:l},b=Nt(r),S=We(m,n);let k;return r.disabled||(k=f!==void 0?f:-1),a.jsx(je.Provider,{value:d,children:a.jsx(Wt,{ref:S,role:g,tabIndex:k,component:o,focusVisibleClassName:D(b.focusVisible,p),className:D(b.root,x),...c,ownerState:T,classes:b})})}),Qt=N(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),Vt=N(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),Te=Pt({createStyledComponent:B("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>H({props:e,name:"MuiStack"})});function Ut(e){return _("MuiToolbar",e)}V("MuiToolbar",["root","gutters","regular","dense"]);const Gt=e=>{const{classes:t,disableGutters:n,variant:r}=e;return K({root:["root",!n&&"gutters",r]},Ut,t)},Et=B("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})(W(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]}))),Ht=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiToolbar"}),{className:i,component:o="div",disableGutters:s=!1,variant:u="regular",...l}=r,p={...r,component:o,disableGutters:s,variant:u},g=Gt(p);return a.jsx(Et,{as:o,className:D(g.root,i),ref:n,ownerState:p,...l})}),Kt=N(a.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),_t=N(a.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function Yt(e){return _("MuiTablePaginationActions",e)}V("MuiTablePaginationActions",["root"]);const Jt=e=>{const{classes:t}=e;return K({root:["root"]},Yt,t)},Xt=B("div",{name:"MuiTablePaginationActions",slot:"Root"})({}),Zt=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTablePaginationActions"}),{backIconButtonProps:i,className:o,count:s,disabled:u=!1,getItemAriaLabel:l,nextIconButtonProps:p,onPageChange:g,page:f,rowsPerPage:x,showFirstButton:c,showLastButton:y,slots:d={},slotProps:m={},...T}=r,b=lt(),k=Jt(r),w=A=>{g(A,0)},j=A=>{g(A,f-1)},q=A=>{g(A,f+1)},I=A=>{g(A,Math.max(0,Math.ceil(s/x)-1))},P=d.firstButton??oe,F=d.lastButton??oe,z=d.nextButton??oe,ee=d.previousButton??oe,U=d.firstButtonIcon??Qt,Y=d.lastButtonIcon??Vt,G=d.nextButtonIcon??_t,M=d.previousButtonIcon??Kt,L=b?F:P,te=b?z:ee,ne=b?ee:z,ae=b?P:F,re=b?m.lastButton:m.firstButton,le=b?m.nextButton:m.previousButton,se=b?m.previousButton:m.nextButton,ue=b?m.firstButton:m.lastButton;return a.jsxs(Xt,{ref:n,className:D(k.root,o),...T,children:[c&&a.jsx(L,{onClick:w,disabled:u||f===0,"aria-label":l("first",f),title:l("first",f),...re,children:b?a.jsx(Y,{...m.lastButtonIcon}):a.jsx(U,{...m.firstButtonIcon})}),a.jsx(te,{onClick:j,disabled:u||f===0,color:"inherit","aria-label":l("previous",f),title:l("previous",f),...le??i,children:b?a.jsx(G,{...m.nextButtonIcon}):a.jsx(M,{...m.previousButtonIcon})}),a.jsx(ne,{onClick:q,disabled:u||(s!==-1?f>=Math.ceil(s/x)-1:!1),color:"inherit","aria-label":l("next",f),title:l("next",f),...se??p,children:b?a.jsx(M,{...m.previousButtonIcon}):a.jsx(G,{...m.nextButtonIcon})}),y&&a.jsx(ae,{onClick:I,disabled:u||f>=Math.ceil(s/x)-1,"aria-label":l("last",f),title:l("last",f),...ue,children:b?a.jsx(U,{...m.firstButtonIcon}):a.jsx(Y,{...m.lastButtonIcon})})]})});function en(e){return _("MuiTablePagination",e)}const ge=V("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Ae;const tn=B(X,{name:"MuiTablePagination",slot:"Root"})(W(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}}))),nn=B(Ht,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>({[`& .${ge.actions}`]:t.actions,...t.toolbar})})(W(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${ge.actions}`]:{flexShrink:0,marginLeft:20}}))),an=B("div",{name:"MuiTablePagination",slot:"Spacer"})({flex:"1 1 100%"}),rn=B("p",{name:"MuiTablePagination",slot:"SelectLabel"})(W(({theme:e})=>({...e.typography.body2,flexShrink:0}))),on=B(ht,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>({[`& .${ge.selectIcon}`]:t.selectIcon,[`& .${ge.select}`]:t.select,...t.input,...t.selectRoot})})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${ge.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),ln=B(J,{name:"MuiTablePagination",slot:"MenuItem"})({}),sn=B("p",{name:"MuiTablePagination",slot:"DisplayedRows"})(W(({theme:e})=>({...e.typography.body2,flexShrink:0})));function un({from:e,to:t,count:n}){return`${e}–${t} of ${n!==-1?n:`more than ${t}`}`}function dn(e){return`Go to ${e} page`}const cn=e=>{const{classes:t}=e;return K({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},en,t)},pn=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTablePagination"}),{ActionsComponent:i=Zt,backIconButtonProps:o,colSpan:s,component:u=X,count:l,disabled:p=!1,getItemAriaLabel:g=dn,labelDisplayedRows:f=un,labelRowsPerPage:x="Rows per page:",nextIconButtonProps:c,onPageChange:y,onRowsPerPageChange:d,page:m,rowsPerPage:T,rowsPerPageOptions:b=[10,25,50,100],SelectProps:S={},showFirstButton:k=!1,showLastButton:w=!1,slotProps:j={},slots:q={},...I}=r,P=r,F=cn(P),z=j?.select??S,ee=z.native?"option":ln;let U;(u===X||u==="td")&&(U=s||1e3);const Y=Re(z.id),G=Re(z.labelId),M=()=>l===-1?(m+1)*T:T===-1?l:Math.min(l,(m+1)*T),L={slots:q,slotProps:j},[te,ne]=O("root",{ref:n,className:F.root,elementType:tn,externalForwardedProps:{...L,component:u,...I},ownerState:P,additionalProps:{colSpan:U}}),[ae,re]=O("toolbar",{className:F.toolbar,elementType:nn,externalForwardedProps:L,ownerState:P}),[le,se]=O("spacer",{className:F.spacer,elementType:an,externalForwardedProps:L,ownerState:P}),[ue,A]=O("selectLabel",{className:F.selectLabel,elementType:rn,externalForwardedProps:L,ownerState:P,additionalProps:{id:G}}),[R,Q]=O("select",{className:F.select,elementType:on,externalForwardedProps:L,ownerState:P}),[Je,Xe]=O("menuItem",{className:F.menuItem,elementType:ee,externalForwardedProps:L,ownerState:P}),[Ze,et]=O("displayedRows",{className:F.displayedRows,elementType:sn,externalForwardedProps:L,ownerState:P});return a.jsx(te,{...ne,children:a.jsxs(ae,{...re,children:[a.jsx(le,{...se}),b.length>1&&a.jsx(ue,{...A,children:x}),b.length>1&&a.jsx(R,{variant:"standard",...!z.variant&&{input:Ae||(Ae=a.jsx(bt,{}))},value:T,onChange:d,id:Y,labelId:G,...z,classes:{...z.classes,root:D(F.input,F.selectRoot,(z.classes||{}).root),select:D(F.select,(z.classes||{}).select),icon:D(F.selectIcon,(z.classes||{}).icon)},disabled:p,...Q,children:b.map(E=>v.createElement(Je,{...Xe,key:E.label?E.label:E,value:E.value?E.value:E},E.label?E.label:E))}),a.jsx(Ze,{...et,children:f({from:l===0?0:m*T+1,to:M(),count:l===-1?-1:l,page:m})}),a.jsx(i,{className:F.actions,backIconButtonProps:o,count:l,nextIconButtonProps:c,onPageChange:y,page:m,rowsPerPage:T,showFirstButton:k,showLastButton:w,slotProps:j.actions,slots:q.actions,getItemAriaLabel:g,disabled:p})]})})}),mn=N(a.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}));function gn(e){return _("MuiTableSortLabel",e)}const ke=V("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),fn=e=>{const{classes:t,direction:n,active:r}=e,i={root:["root",r&&"active",`direction${C(n)}`],icon:["icon",`iconDirection${C(n)}`]};return K(i,gn,t)},yn=B(fe,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})(W(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${ke.icon}`]:{opacity:.5}},[`&.${ke.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${ke.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}}))),vn=B("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${C(n.direction)}`]]}})(W(({theme:e})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),bn=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTableSortLabel"}),{active:i=!1,children:o,className:s,direction:u="asc",hideSortIcon:l=!1,IconComponent:p=mn,slots:g={},slotProps:f={},...x}=r,c={...r,active:i,direction:u,hideSortIcon:l,IconComponent:p},y=fn(c),d={slots:g,slotProps:f},[m,T]=O("root",{elementType:yn,externalForwardedProps:d,ownerState:c,className:D(y.root,s),ref:n}),[b,S]=O("icon",{elementType:vn,externalForwardedProps:d,ownerState:c,className:y.icon});return a.jsxs(m,{disableRipple:!0,component:"span",...T,...x,children:[o,l&&!i?null:a.jsx(b,{as:p,...S})]})});function hn(e){return _("MuiToggleButton",e)}const Z=V("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Qe=v.createContext({}),Ve=v.createContext(void 0);function xn(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const Cn=e=>{const{classes:t,fullWidth:n,selected:r,disabled:i,size:o,color:s}=e,u={root:["root",r&&"selected",i&&"disabled",n&&"fullWidth",`size${C(o)}`,s]};return K(u,hn,t)},Sn=B(fe,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`size${C(n.size)}`]]}})(W(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${Z.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(pe()).map(([t])=>({props:{color:t},style:{[`&.${Z.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),wn=v.forwardRef(function(t,n){const{value:r,...i}=v.useContext(Qe),o=v.useContext(Ve),s=st({...i,selected:xn(t.value,r)},t),u=H({props:s,name:"MuiToggleButton"}),{children:l,className:p,color:g="standard",disabled:f=!1,disableFocusRipple:x=!1,fullWidth:c=!1,onChange:y,onClick:d,selected:m,size:T="medium",value:b,...S}=u,k={...u,color:g,disabled:f,disableFocusRipple:x,fullWidth:c,size:T},w=Cn(k),j=I=>{d&&(d(I,b),I.defaultPrevented)||y&&y(I,b)},q=o||"";return a.jsx(Sn,{className:D(i.className,w.root,p,q),disabled:f,focusRipple:!x,ref:n,onClick:j,onChange:y,value:b,ownerState:k,"aria-pressed":m,...S,children:l})});function kn(e){return _("MuiToggleButtonGroup",e)}const $=V("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),qn=e=>{const{classes:t,orientation:n,fullWidth:r,disabled:i}=e,o={root:["root",n,r&&"fullWidth"],grouped:["grouped",`grouped${C(n)}`,i&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return K(o,kn,t)},Tn=B("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${$.grouped}`]:t.grouped},{[`& .${$.grouped}`]:t[`grouped${C(n.orientation)}`]},{[`& .${$.firstButton}`]:t.firstButton},{[`& .${$.lastButton}`]:t.lastButton},{[`& .${$.middleButton}`]:t.middleButton},t.root,n.orientation==="vertical"&&t.vertical,n.fullWidth&&t.fullWidth]}})(W(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderTop:0,marginTop:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${$.lastButton}.${Z.disabled},& .${$.middleButton}.${Z.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${$.lastButton}.${Z.disabled},& .${$.middleButton}.${Z.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),In=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiToggleButtonGroup"}),{children:i,className:o,color:s="standard",disabled:u=!1,exclusive:l=!1,fullWidth:p=!1,onChange:g,orientation:f="horizontal",size:x="medium",value:c,...y}=r,d={...r,disabled:u,fullWidth:p,orientation:f,size:x},m=qn(d),T=v.useCallback((q,I)=>{if(!g)return;const P=c&&c.indexOf(I);let F;c&&P>=0?(F=c.slice(),F.splice(P,1)):F=c?c.concat(I):[I],g(q,F)},[g,c]),b=v.useCallback((q,I)=>{g&&g(q,c===I?null:I)},[g,c]),S=v.useMemo(()=>({className:m.grouped,onChange:l?b:T,value:c,size:x,fullWidth:p,color:s,disabled:u}),[m.grouped,l,b,T,c,x,p,s,u]),k=Lt(i),w=k.length,j=q=>{const I=q===0,P=q===w-1;return I&&P?"":I?m.firstButton:P?m.lastButton:m.middleButton};return a.jsx(Tn,{role:"group",className:D(m.root,o),ref:n,ownerState:d,...y,children:a.jsx(Qe.Provider,{value:S,children:k.map((q,I)=>a.jsx(Ve.Provider,{value:j(I),children:q},I))})})}),Ue=({data:e,columns:t,loading:n,emptyMessage:r,sorting:i=[],onSortingChange:o,onRowClick:s,getRowId:u})=>{const l=Math.max(t.length,1),p=!n&&e.length===0,g=!!s,f=c=>{if(!o)return;const y=i.find(d=>d.id===c);y?y.desc?o([]):o([{id:c,desc:!0}]):o([{id:c,desc:!1}])},x=c=>{const y=i.find(d=>d.id===c);return y?y.desc?"desc":"asc":!1};return a.jsx(ct,{children:a.jsxs(pt,{size:"small","aria-busy":n,children:[a.jsx(mt,{sx:{backgroundColor:"grey.50"},children:a.jsx(ye,{children:t.map(c=>{const y=x(c.id),d=c.enableSorting&&o;return a.jsx(X,{align:c.meta?.align,sortDirection:y,sx:{fontWeight:600,color:"text.secondary",width:c.meta?.width,minWidth:c.meta?.minWidth,maxWidth:c.meta?.maxWidth},children:d?a.jsx(bn,{active:y!==!1,direction:y===!1?"asc":y,onClick:()=>f(c.id),children:c.header}):c.header},c.id)})})}),a.jsx(gt,{children:n?a.jsx(ye,{children:a.jsx(X,{colSpan:l,children:a.jsxs(me,{display:"flex",alignItems:"center",gap:1,py:2,children:[a.jsx(yt,{size:20}),a.jsx(xe,{variant:"body2",children:"Loading"})]})})}):p?a.jsx(ye,{children:a.jsx(X,{colSpan:l,children:a.jsx(xe,{variant:"body2",color:"text.secondary",py:2,children:r})})}):e.map((c,y)=>{const d=u?u(c,y):String(y);return a.jsx(ye,{hover:g,onClick:s?()=>s(c):void 0,sx:g?{cursor:"pointer"}:void 0,children:t.map(m=>{const T=m.accessorKey?c[m.accessorKey]:void 0,b=m.cell?m.cell(c):String(T??"");return a.jsx(X,{align:m.meta?.align,sx:{width:m.meta?.width,minWidth:m.meta?.minWidth,maxWidth:m.meta?.maxWidth},children:b},m.id)})},d)})})]})})};Ue.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Header content to display
   */
  header: ReactNode;
  /**
   * Key to access data from the row object
   */
  accessorKey?: keyof TData;
  /**
   * Custom cell renderer function
   * @param row - The data row
   */
  cell?: (row: TData) => ReactNode;
  /**
   * Whether sorting is enabled for this column
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Column metadata for styling and layout
   */
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the column"},{key:"header",value:{name:"ReactNode",required:!0},description:"Header content to display"},{key:"accessorKey",value:{name:"TData",required:!1},description:"Key to access data from the row object"},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1},description:`Custom cell renderer function
@param row - The data row`},{key:"enableSorting",value:{name:"boolean",required:!1},description:`Whether sorting is enabled for this column
@default true`},{key:"meta",value:{name:"signature",type:"object",raw:`{
  /**
   * Horizontal alignment of cell content
   */
  align?: TableCellProps["align"];
  /**
   * Fixed width of the column
   */
  width?: number | string;
  /**
   * Minimum width of the column
   */
  minWidth?: number | string;
  /**
   * Maximum width of the column
   */
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:'TableCellProps["align"]',raw:'TableCellProps["align"]',required:!1},description:"Horizontal alignment of cell content"},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Fixed width of the column"},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Minimum width of the column"},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Maximum width of the column"}]},required:!1},description:"Column metadata for styling and layout"}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},emptyMessage:{required:!0,tsType:{name:"string"},description:""},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},description:"",defaultValue:{value:"[]",computed:!1}},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(sorting: SortingState) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},name:"sorting"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:""},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""}}};const Ge=({pagination:e,onPaginationChange:t,rowCount:n,pageSizeOptions:r})=>a.jsx(pn,{component:"div",count:n,page:e.pageIndex,onPageChange:(i,o)=>t(s=>({...s,pageIndex:o})),rowsPerPage:e.pageSize,onRowsPerPageChange:i=>{t(o=>({...o,pageIndex:0,pageSize:Number(i.target.value)}))},rowsPerPageOptions:r,labelDisplayedRows:({from:i,to:o,count:s,page:u})=>s===-1?`Page ${u+1}`:`${i}-${o} of ${s}`});Ge.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},description:""},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const $n=N(a.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),Fn=N(a.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),Pn=N(a.jsx("path",{d:"M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"})),Rn=N(a.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),jn=N(a.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),Bn=["eq"],Ee={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},Dn=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,zn=(e,t)=>e.find(n=>n.name===t),Ie=e=>e?.ops?.length?e.ops:Bn,qe=(e,t,n)=>t==="isnull"||e?.type==="boolean"?n==="false"?"false":"true":n??"",Oe=(e,t)=>t?.options?.length?t.options.find(n=>n.value===e)?.label??e:e,Mn=(e,t)=>{const n=t?.label??e.field,r=(e.value??"").trim();if(e.op==="isnull")return`${n} ${r!=="false"?"is null":"is not null"}`;if(!r)return"";const i=Ee[e.op]??e.op;if(e.op==="in"){const l=r.split(",").map(p=>p.trim()).filter(Boolean).map(p=>Oe(p,t)).join(", ");return`${n} ${i} (${l})`}const o=Oe(r,t),u=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${o}"`:o;return`${n} ${i} ${u}`},Ln=(e,t)=>{if(!e.length)return"";const n=new Map(t.map(r=>[r.name,r]));return e.map(r=>Mn(r,n.get(r.field))).filter(Boolean).join(" AND ")},An=({filter:e,fields:t,fieldMap:n,onFieldChange:r,onOpChange:i,onValueChange:o,onRemove:s})=>{const u=n.get(e.field),l=Ie(u),p=e.op==="in"?"Values":"Value",g=u?.type==="number"?"number":u?.type==="date"?"date":u?.type==="datetime"?"datetime-local":"text",f=u?.type==="date"||u?.type==="datetime",x=u?.placeholder??(e.op==="in"?"Comma-separated values":void 0),c=u?.options??[],y=c.length>0&&(e.op==="eq"||e.op==="neq");return a.jsxs(Te,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"stretch",sm:"center"},children:[a.jsx(ie,{select:!0,size:"small",label:"Field",value:e.field,onChange:d=>r(e.id,d.target.value),sx:{minWidth:160},children:t.map(d=>a.jsx(J,{value:d.name,children:d.label},d.name))}),a.jsx(In,{exclusive:!0,size:"small",color:"primary",value:e.op,onChange:(d,m)=>{m!==null&&i(e.id,m)},sx:{minWidth:150,alignSelf:"center"},children:l.map(d=>a.jsx(wn,{value:d,children:Ee[d]??d},d))}),e.op==="isnull"?a.jsxs(ie,{select:!0,size:"small",label:"Null state",value:e.value??"true",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(J,{value:"true",children:"Is null"}),a.jsx(J,{value:"false",children:"Is not null"})]}):y?a.jsx(ie,{select:!0,size:"small",label:p,value:e.value??"",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:c.map(d=>a.jsx(J,{value:d.value,children:d.label},d.value))}):u?.type==="boolean"?a.jsxs(ie,{select:!0,size:"small",label:p,value:e.value??"true",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(J,{value:"true",children:"True"}),a.jsx(J,{value:"false",children:"False"})]}):a.jsx(ie,{size:"small",type:g,label:p,value:e.value??"",onChange:d=>o(e.id,d.target.value),placeholder:x,InputLabelProps:f?{shrink:!0}:void 0,sx:{minWidth:160,flex:1}}),a.jsx(oe,{size:"small","aria-label":"Remove filter",onClick:()=>s(e.id),children:a.jsx(Fn,{fontSize:"small"})})]})},He=({queryBuilder:e})=>{const[t,n]=v.useState(null),r=!!t,i=t?.clientWidth??560,{fields:o,filters:s,onFiltersChange:u,placeholder:l,summaryFormatter:p}=e,g=v.useMemo(()=>new Map(o.map(S=>[S.name,S])),[o]),f=v.useMemo(()=>s.length?p?p(s,o):Ln(s,o):"",[s,o,p]),x=S=>{n(S.currentTarget)},c=()=>{n(null)},y=()=>{if(o.length===0)return;const S=o[0],w=Ie(S)[0]??"eq",j=qe(S,w);u([...s,{id:Dn(),field:S.name,op:w,value:j}])},d=S=>{u(s.filter(k=>k.id!==S))},m=(S,k)=>{const w=zn(o,k);if(!w)return;const j=Ie(w);u(s.map(q=>{if(q.id!==S)return q;const I=j.includes(q.op)?q.op:j[0]??"eq",P=qe(w,I,q.value);return{...q,field:w.name,op:I,value:P}}))},T=(S,k)=>{u(s.map(w=>{if(w.id!==S)return w;const j=g.get(w.field),q=qe(j,k,w.value);return{...w,op:k,value:q}}))},b=(S,k)=>{u(s.map(w=>w.id===S?{...w,value:k}:w))};return a.jsxs(a.Fragment,{children:[a.jsx(me,{sx:{borderBottom:"1px solid",borderColor:"divider",px:2,py:1.5},children:a.jsx(ie,{fullWidth:!0,size:"small",placeholder:l??"Add filters",value:f,onClick:x,onFocus:x,InputProps:{readOnly:!0,startAdornment:a.jsx(De,{position:"start",children:a.jsx(Pn,{fontSize:"small"})}),endAdornment:a.jsx(De,{position:"end",children:r?a.jsx(jn,{}):a.jsx(Rn,{})})},inputProps:{"aria-label":"Filter query"},sx:{"& .MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{cursor:"pointer",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})}),a.jsx(xt,{open:r,anchorEl:t,onClose:c,disableRestoreFocus:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:i,maxWidth:"calc(100vw - 32px)",p:2}}},children:a.jsx(me,{sx:{maxHeight:"60vh",overflowY:"auto"},children:a.jsxs(Te,{spacing:2,children:[a.jsxs(me,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,children:[a.jsx(xe,{variant:"subtitle2",children:"Filters"}),a.jsxs(me,{display:"flex",alignItems:"center",gap:1,children:[a.jsx(wt,{size:"small",startIcon:a.jsx($n,{fontSize:"small"}),onClick:y,disabled:o.length===0,children:"Add filter"}),a.jsx(oe,{size:"small","aria-label":"Close filters",onClick:c,children:a.jsx(Ct,{fontSize:"small"})})]})]}),s.length===0?a.jsx(xe,{variant:"body2",color:"text.secondary",children:"No filters yet."}):a.jsx(Te,{spacing:1.5,children:s.map(S=>a.jsx(An,{filter:S,fields:o,fieldMap:g,onFieldChange:m,onOpChange:T,onValueChange:b,onRemove:d},S.id))})]})})})]})};He.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Available fields for filtering
   */
  fields: QuerySpecField[];
  /**
   * Current active filters
   */
  filters: QuerySpecFilter[];
  /**
   * Callback when filters change
   * @param filters - Updated filters
   */
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  /**
   * Placeholder text for the query input
   */
  placeholder?: string;
  /**
   * Custom formatter for filter summary display
   * @param filters - Current filters
   * @param fields - Available fields
   */
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]",required:!0},description:"Available fields for filtering"},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]",required:!0},description:"Current active filters"},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0},description:`Callback when filters change
@param filters - Updated filters`},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for the query input"},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1},description:`Custom formatter for filter summary display
@param filters - Current filters
@param fields - Available fields`}]}},description:""}}};const Ne=[10,25,50];function Se({data:e,columns:t,getRowId:n,pagination:r,onPaginationChange:i,sorting:o,onSortingChange:s,rowCount:u,loading:l=!1,emptyMessage:p="No data available",pageSizeOptions:g=Ne,onRowClick:f,query:x}){const c=v.useMemo(()=>g.length?g:Ne,[g]),y=u??e.length;return a.jsxs(vt,{variant:"outlined",children:[x?a.jsx(He,{queryBuilder:x}):null,a.jsx(Ue,{data:e,columns:t,loading:l,emptyMessage:p,sorting:o,onSortingChange:s,onRowClick:f,getRowId:n}),a.jsx(Ge,{pagination:r,onPaginationChange:i,rowCount:y,pageSizeOptions:c})]})}Se.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
pagination, sorting, and filtering capabilities.

This component is fully controlled - all state (pagination, sorting, filters) must be
managed by the parent component. For convenience, use the \`useRemoteDataTable\` hook
to manage this state.

@example
\`\`\`tsx
const tableState = useRemoteDataTable({
  initialPagination: { pageSize: 25 }
});

<RemoteDataTable
  data={items}
  columns={columns}
  {...tableState}
  query={{
    fields: queryFields,
    filters: tableState.filters,
    onFiltersChange: tableState.onFiltersChange
  }}
/>
\`\`\``,methods:[],displayName:"RemoteDataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:"Array of data items to display in the table"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Header content to display
   */
  header: ReactNode;
  /**
   * Key to access data from the row object
   */
  accessorKey?: keyof TData;
  /**
   * Custom cell renderer function
   * @param row - The data row
   */
  cell?: (row: TData) => ReactNode;
  /**
   * Whether sorting is enabled for this column
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Column metadata for styling and layout
   */
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the column"},{key:"header",value:{name:"ReactNode",required:!0},description:"Header content to display"},{key:"accessorKey",value:{name:"TData",required:!1},description:"Key to access data from the row object"},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1},description:`Custom cell renderer function
@param row - The data row`},{key:"enableSorting",value:{name:"boolean",required:!1},description:`Whether sorting is enabled for this column
@default true`},{key:"meta",value:{name:"signature",type:"object",raw:`{
  /**
   * Horizontal alignment of cell content
   */
  align?: TableCellProps["align"];
  /**
   * Fixed width of the column
   */
  width?: number | string;
  /**
   * Minimum width of the column
   */
  minWidth?: number | string;
  /**
   * Maximum width of the column
   */
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:'TableCellProps["align"]',raw:'TableCellProps["align"]',required:!1},description:"Horizontal alignment of cell content"},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Fixed width of the column"},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Minimum width of the column"},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Maximum width of the column"}]},required:!1},description:"Column metadata for styling and layout"}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:"Column definitions for the table"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs. If not provided, uses array index"},pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},description:"Current pagination state (pageIndex and pageSize)"},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},description:"Current sorting state"},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},rowCount:{required:!1,tsType:{name:"number"},description:"Total number of rows available (for server-side pagination). If not provided, uses data.length"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether data is currently loading",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message to display when there is no data
@default "No data available"`,defaultValue:{value:'"No data available"',computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Available page size options for the pagination dropdown
@default [10, 25, 50]`,defaultValue:{value:"[10, 25, 50]",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},query:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Available fields for filtering
   */
  fields: QuerySpecField[];
  /**
   * Current active filters
   */
  filters: QuerySpecFilter[];
  /**
   * Callback when filters change
   * @param filters - Updated filters
   */
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  /**
   * Placeholder text for the query input
   */
  placeholder?: string;
  /**
   * Custom formatter for filter summary display
   * @param filters - Current filters
   * @param fields - Available fields
   */
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]",required:!0},description:"Available fields for filtering"},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]",required:!0},description:"Current active filters"},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0},description:`Callback when filters change
@param filters - Updated filters`},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for the query input"},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1},description:`Custom formatter for filter summary display
@param filters - Current filters
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"}}};const Ke=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>a.jsx(Mt,{label:e.status,color:e.status==="Active"?"success":"default",size:"small"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],_e=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],On=e=>Array.from({length:e}).map((t,n)=>({id:String(n+1),name:`Item ${n+1}`,status:n%3===0?"Archived":n%2===0?"Active":"Inactive",createdAt:new Date(2024,0,n+1).toISOString()})),Ce=On(48),Nn={pageIndex:0,pageSize:10},Wn=(e={})=>{const{initialPagination:t={},initialSorting:n=[],initialFilters:r=[]}=e,i={...Nn,...t},[o,s]=v.useState(i),[u,l]=v.useState(n),[p,g]=v.useState(r),f=()=>{s(i)},x=()=>{l(n)},c=()=>{g(r)};return{pagination:o,onPaginationChange:s,sorting:u,onSortingChange:l,filters:p,onFiltersChange:g,resetPagination:f,resetSorting:x,resetFilters:c,resetAll:()=>{f(),x(),c()}}},Ye=(e,t)=>t.length?[...e].sort((n,r)=>{for(const i of t){const o=i.id,s=n[o],u=r[o];if(s===u)continue;const l=i.desc?-1:1,p=typeof s=="string"?s.toLowerCase():s,g=typeof u=="string"?u.toLowerCase():u;return p==null?1*l:g==null?-1*l:p>g?l:-l}return 0}):e,$e=(e=[],t=!1)=>(n,r)=>{const[i,o]=v.useState({pageIndex:0,pageSize:10}),[s,u]=v.useState(e),[l,p]=v.useState([]),g=v.useMemo(()=>Ye(Ce,s),[s]),f=v.useMemo(()=>g.slice(i.pageIndex*i.pageSize,i.pageIndex*i.pageSize+i.pageSize),[i.pageIndex,i.pageSize,g]);return a.jsx(Se,{...r.args,data:f,columns:Ke,rowCount:Ce.length,pagination:i,onPaginationChange:o,sorting:s,onSortingChange:u,query:t?{fields:_e,filters:l,onFiltersChange:p,placeholder:"Filter items..."}:void 0})},ba={title:"Tables/RemoteDataTable",component:Se,decorators:[dt()],parameters:{layout:"fullscreen"}},ve={args:{pageSizeOptions:[5,10,25]},decorators:[$e()]},be={args:{pageSizeOptions:[5,10,25]},decorators:[$e([{id:"createdAt",desc:!0}])]},he={args:{pageSizeOptions:[5,10,25]},decorators:[$e([],!0)]},ce={render:()=>{const e=Wn({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),t=v.useMemo(()=>Ye(Ce,e.sorting),[e.sorting]),n=v.useMemo(()=>t.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,t]);return a.jsx(Se,{data:n,columns:Ke,rowCount:Ce.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:_e,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState()]
}`,...ve.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([{
    id: "createdAt",
    desc: true
  }])]
}`,...be.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([], true)]
}`,...he.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tableState = useRemoteDataTable({
      initialPagination: {
        pageSize: 10
      },
      initialSorting: [{
        id: "name",
        desc: false
      }]
    });
    const sortedItems = useMemo(() => sortItems(mockItems, tableState.sorting), [tableState.sorting]);
    const items = useMemo(() => sortedItems.slice(tableState.pagination.pageIndex * tableState.pagination.pageSize, tableState.pagination.pageIndex * tableState.pagination.pageSize + tableState.pagination.pageSize), [tableState.pagination, sortedItems]);
    return <RemoteDataTable data={items} columns={mockColumnsFull} rowCount={mockItems.length} pagination={tableState.pagination} onPaginationChange={tableState.onPaginationChange} sorting={tableState.sorting} onSortingChange={tableState.onSortingChange} pageSizeOptions={[5, 10, 25]} query={{
      fields: mockQueryFields,
      filters: tableState.filters,
      onFiltersChange: tableState.onFiltersChange,
      placeholder: "Filter items..."
    }} />;
  }
}`,...ce.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...ce.parameters?.docs?.description}}};const ha=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{ve as Default,be as SortedByCreatedDate,ce as UsingHook,he as WithQueryBuilder,ha as __namedExportsOrder,ba as default};
