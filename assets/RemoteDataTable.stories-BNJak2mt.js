import{r as v,A as tt,j as a,c as z,O as Fe,P as we,Q as nt,N as at,S as rt,v as it,U as Pe,i as H,m as C,w as ot,x as lt,l as Re,t as st}from"./iframe-OKrkvHog.js";import{b as ut}from"./storybook-D1oaJzNH.js";import{d as J,T as dt,a as ct,b as pt,c as ye,e as mt}from"./TableRow-D3nxMLtj.js";import{c as G,g as Z,u as Qe,B as fe,m as Q,b as pe,T as xe}from"./Typography-Dj8pBh4O.js";import{a as K,g as _,s as B,r as gt}from"./styled-DS6LlOMU.js";import{u as O}from"./useSlot-EiJaCkM0.js";import{B as me}from"./Box-DdvrumJ4.js";import{C as ft}from"./CircularProgress-lc5GuTxj.js";import{a as yt,K as vt}from"./KeyboardArrowRight-BhWlgIZ3.js";import{I as oe}from"./IconButton-pTNTveEx.js";import{I as bt,S as ht,T as ie}from"./TextField-NkFzLAue.js";import{a as je}from"./List-DxUAfoP3.js";import{l as Be}from"./listItemIconClasses-Cu56In81.js";import{l as De}from"./listItemTextClasses-DQcPpdz3.js";import{d as ze}from"./dividerClasses-Mhxu5R6y.js";import{T as xt}from"./Toolbar-BdcCqn1A.js";import{C as Ct}from"./Close-CDFdUyaJ.js";import{I as Ae}from"./InputAdornment-DCAK-EZl.js";import{P as St}from"./Popover-D2sghiN6.js";import{s as wt}from"./styled-BW8sm9vC.js";import{u as kt}from"./useThemeProps-thKpCK-a.js";import{B as qt}from"./Button-CNKKXh8l.js";import{P as Tt}from"./Paper-ChCS8O8h.js";import"./preload-helper-PPVm8Dsz.js";import"./NotificationCenter.provider-CXoiJd3C.js";import"./useTheme-RQYRicNz.js";import"./Grow-CTMKRTGh.js";import"./index-DeODwBsH.js";import"./index-CjliXV4g.js";import"./getActiveElement-C_USMO5I.js";import"./debounce-Be36O1Ab.js";import"./useSlotProps-91TjKlWU.js";import"./Modal-C2sgsJOr.js";import"./Portal-Bfw5mgK6.js";import"./Fade-Byt6wAFd.js";import"./useControlled-y5y6T2Ku.js";import"./isMuiElement-CqNh-hgo.js";const It=it(),$t=wt("div",{name:"MuiStack",slot:"Root"});function Ft(e){return kt({props:e,name:"MuiStack",defaultTheme:It})}function Pt(e,t){const n=v.Children.toArray(e).filter(Boolean);return n.reduce((r,i,o)=>(r.push(i),o<n.length-1&&r.push(v.cloneElement(t,{key:`separator-${o}`})),r),[])}const Rt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],jt=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...Fe({theme:t},we({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r}))};if(e.spacing){const r=nt(t),i=Object.keys(t.breakpoints.values).reduce((l,m)=>((typeof e.spacing=="object"&&e.spacing[m]!=null||typeof e.direction=="object"&&e.direction[m]!=null)&&(l[m]=!0),l),{}),o=we({values:e.direction,base:i}),s=we({values:e.spacing,base:i});typeof o=="object"&&Object.keys(o).forEach((l,m,f)=>{if(!o[l]){const x=m>0?o[f[m-1]]:"column";o[l]=x}}),n=at(n,Fe({theme:t},s,(l,m)=>e.useFlexGap?{gap:Pe(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Rt(m?o[m]:e.direction)}`]:Pe(r,l)}}))}return n=rt(t.breakpoints,n),n};function Bt(e={}){const{createStyledComponent:t=$t,useThemeProps:n=Ft,componentName:r="MuiStack"}=e,i=()=>K({root:["root"]},l=>_(r,l),{}),o=t(jt);return v.forwardRef(function(l,m){const f=n(l),g=tt(f),{component:x="div",direction:c="column",spacing:y=0,divider:d,children:p,className:T,useFlexGap:b=!1,...S}=g,k={direction:c,spacing:y,useFlexGap:b},w=i();return a.jsx(o,{as:x,ownerState:k,ref:m,className:z(w.root,T),...S,children:d?Pt(p,d):p})})}const Dt=G(a.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function zt(e){return _("MuiChip",e)}const h=Z("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),At=e=>{const{classes:t,disabled:n,size:r,color:i,iconColor:o,onDelete:s,clickable:u,variant:l}=e,m={root:["root",l,n&&"disabled",`size${C(r)}`,`color${C(i)}`,u&&"clickable",u&&`clickableColor${C(i)}`,s&&"deletable",s&&`deletableColor${C(i)}`,`${l}${C(i)}`],label:["label",`label${C(r)}`],avatar:["avatar",`avatar${C(r)}`,`avatarColor${C(i)}`],icon:["icon",`icon${C(r)}`,`iconColor${C(o)}`],deleteIcon:["deleteIcon",`deleteIcon${C(r)}`,`deleteIconColor${C(i)}`,`deleteIcon${C(l)}Color${C(i)}`]};return K(m,zt,t)},Lt=B("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:r,iconColor:i,clickable:o,onDelete:s,size:u,variant:l}=n;return[{[`& .${h.avatar}`]:t.avatar},{[`& .${h.avatar}`]:t[`avatar${C(u)}`]},{[`& .${h.avatar}`]:t[`avatarColor${C(r)}`]},{[`& .${h.icon}`]:t.icon},{[`& .${h.icon}`]:t[`icon${C(u)}`]},{[`& .${h.icon}`]:t[`iconColor${C(i)}`]},{[`& .${h.deleteIcon}`]:t.deleteIcon},{[`& .${h.deleteIcon}`]:t[`deleteIcon${C(u)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIconColor${C(r)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIcon${C(l)}Color${C(r)}`]},t.root,t[`size${C(u)}`],t[`color${C(r)}`],o&&t.clickable,o&&r!=="default"&&t[`clickableColor${C(r)}`],s&&t.deletable,s&&r!=="default"&&t[`deletableColor${C(r)}`],t[l],t[`${l}${C(r)}`]]}})(Q(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${h.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${h.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${h.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${h.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${h.icon}`]:{marginLeft:5,marginRight:-6},[`& .${h.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.alpha((e.vars||e).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.alpha((e.vars||e).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${h.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${h.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(pe(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(e.vars||e).palette[n].main,color:(e.vars||e).palette[n].contrastText,[`& .${h.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${h.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${h.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}}},...Object.entries(e.palette).filter(pe(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${h.focusVisible}`]:{background:(e.vars||e).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)},[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(pe(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${h.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${h.avatar}`]:{marginLeft:4},[`& .${h.avatarSmall}`]:{marginLeft:2},[`& .${h.icon}`]:{marginLeft:4},[`& .${h.iconSmall}`]:{marginLeft:2},[`& .${h.deleteIcon}`]:{marginRight:5},[`& .${h.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter(pe()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(e.vars||e).palette[n].main,border:`1px solid ${e.alpha((e.vars||e).palette[n].main,.7)}`,[`&.${h.clickable}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.focusOpacity)},[`& .${h.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].main}}}}))]}})),Mt=B("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:r}=n;return[t.label,t[`label${C(r)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Le(e){return e.key==="Backspace"||e.key==="Delete"}const Ot=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiChip"}),{avatar:i,className:o,clickable:s,color:u="default",component:l,deleteIcon:m,disabled:f=!1,icon:g,label:x,onClick:c,onDelete:y,onKeyDown:d,onKeyUp:p,size:T="medium",variant:b="filled",tabIndex:S,skipFocusWhenDisabled:k=!1,slots:w={},slotProps:j={},...q}=r,I=v.useRef(null),P=Qe(I,n),F=R=>{R.stopPropagation(),y(R)},D=R=>{R.currentTarget===R.target&&Le(R)&&R.preventDefault(),d&&d(R)},ee=R=>{R.currentTarget===R.target&&y&&Le(R)&&y(R),p&&p(R)},W=s!==!1&&c?!0:s,E=W||y?fe:l||"div",V={...r,component:E,disabled:f,size:T,color:u,iconColor:v.isValidElement(g)&&g.props.color||u,onDelete:!!y,clickable:W,variant:b},A=At(V),L=E===fe?{component:l||"div",focusVisibleClassName:A.focusVisible,...y&&{disableRipple:!0}}:{};let te=null;y&&(te=m&&v.isValidElement(m)?v.cloneElement(m,{className:z(m.props.className,A.deleteIcon),onClick:F}):a.jsx(Dt,{className:A.deleteIcon,onClick:F}));let ne=null;i&&v.isValidElement(i)&&(ne=v.cloneElement(i,{className:z(A.avatar,i.props.className)}));let ae=null;g&&v.isValidElement(g)&&(ae=v.cloneElement(g,{className:z(A.icon,g.props.className)}));const re={slots:w,slotProps:j},[le,se]=O("root",{elementType:Lt,externalForwardedProps:{...re,...q},ownerState:V,shouldForwardComponentProp:!0,ref:P,className:z(A.root,o),additionalProps:{disabled:W&&f?!0:void 0,tabIndex:k&&f?-1:S,...L},getSlotProps:R=>({...R,onClick:N=>{R.onClick?.(N),c?.(N)},onKeyDown:N=>{R.onKeyDown?.(N),D(N)},onKeyUp:N=>{R.onKeyUp?.(N),ee(N)}})}),[ue,M]=O("label",{elementType:Mt,externalForwardedProps:re,ownerState:V,className:A.label});return a.jsxs(le,{as:E,...se,children:[ne||ae,a.jsx(ue,{...M,children:x}),te]})});function Nt(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}function Qt(e){return _("MuiMenuItem",e)}const de=Z("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Wt=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Vt=e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:o,classes:s}=e,l=K({root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},Qt,s);return{...s,...l}},Ut=B(fe,{shouldForwardProp:e=>gt(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Wt})(Q(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${de.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${de.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${de.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${de.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${de.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${ze.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${ze.inset}`]:{marginLeft:52},[`& .${De.root}`]:{marginTop:0,marginBottom:0},[`& .${De.inset}`]:{paddingLeft:36},[`& .${Be.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${Be.root} svg`]:{fontSize:"1.25rem"}}}]}))),Y=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:o="li",dense:s=!1,divider:u=!1,disableGutters:l=!1,focusVisibleClassName:m,role:f="menuitem",tabIndex:g,className:x,...c}=r,y=v.useContext(je),d=v.useMemo(()=>({dense:s||y.dense||!1,disableGutters:l}),[y.dense,s,l]),p=v.useRef(null);ot(()=>{i&&p.current&&p.current.focus()},[i]);const T={...r,dense:d.dense,divider:u,disableGutters:l},b=Vt(r),S=Qe(p,n);let k;return r.disabled||(k=g!==void 0?g:-1),a.jsx(je.Provider,{value:d,children:a.jsx(Ut,{ref:S,role:f,tabIndex:k,component:o,focusVisibleClassName:z(b.focusVisible,m),className:z(b.root,x),...c,ownerState:T,classes:b})})}),Gt=G(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),Et=G(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),Te=Bt({createStyledComponent:B("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>H({props:e,name:"MuiStack"})});function Ht(e){return _("MuiTablePaginationActions",e)}Z("MuiTablePaginationActions",["root"]);const Kt=e=>{const{classes:t}=e;return K({root:["root"]},Ht,t)},_t=B("div",{name:"MuiTablePaginationActions",slot:"Root"})({}),Yt=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTablePaginationActions"}),{backIconButtonProps:i,className:o,count:s,disabled:u=!1,getItemAriaLabel:l,nextIconButtonProps:m,onPageChange:f,page:g,rowsPerPage:x,showFirstButton:c,showLastButton:y,slots:d={},slotProps:p={},...T}=r,b=lt(),k=Kt(r),w=M=>{f(M,0)},j=M=>{f(M,g-1)},q=M=>{f(M,g+1)},I=M=>{f(M,Math.max(0,Math.ceil(s/x)-1))},P=d.firstButton??oe,F=d.lastButton??oe,D=d.nextButton??oe,ee=d.previousButton??oe,W=d.firstButtonIcon??Gt,E=d.lastButtonIcon??Et,V=d.nextButtonIcon??yt,A=d.previousButtonIcon??vt,L=b?F:P,te=b?D:ee,ne=b?ee:D,ae=b?P:F,re=b?p.lastButton:p.firstButton,le=b?p.nextButton:p.previousButton,se=b?p.previousButton:p.nextButton,ue=b?p.firstButton:p.lastButton;return a.jsxs(_t,{ref:n,className:z(k.root,o),...T,children:[c&&a.jsx(L,{onClick:w,disabled:u||g===0,"aria-label":l("first",g),title:l("first",g),...re,children:b?a.jsx(E,{...p.lastButtonIcon}):a.jsx(W,{...p.firstButtonIcon})}),a.jsx(te,{onClick:j,disabled:u||g===0,color:"inherit","aria-label":l("previous",g),title:l("previous",g),...le??i,children:b?a.jsx(V,{...p.nextButtonIcon}):a.jsx(A,{...p.previousButtonIcon})}),a.jsx(ne,{onClick:q,disabled:u||(s!==-1?g>=Math.ceil(s/x)-1:!1),color:"inherit","aria-label":l("next",g),title:l("next",g),...se??m,children:b?a.jsx(A,{...p.previousButtonIcon}):a.jsx(V,{...p.nextButtonIcon})}),y&&a.jsx(ae,{onClick:I,disabled:u||g>=Math.ceil(s/x)-1,"aria-label":l("last",g),title:l("last",g),...ue,children:b?a.jsx(W,{...p.firstButtonIcon}):a.jsx(E,{...p.lastButtonIcon})})]})});function Jt(e){return _("MuiTablePagination",e)}const ge=Z("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Me;const Xt=B(J,{name:"MuiTablePagination",slot:"Root"})(Q(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}}))),Zt=B(xt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>({[`& .${ge.actions}`]:t.actions,...t.toolbar})})(Q(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${ge.actions}`]:{flexShrink:0,marginLeft:20}}))),en=B("div",{name:"MuiTablePagination",slot:"Spacer"})({flex:"1 1 100%"}),tn=B("p",{name:"MuiTablePagination",slot:"SelectLabel"})(Q(({theme:e})=>({...e.typography.body2,flexShrink:0}))),nn=B(ht,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>({[`& .${ge.selectIcon}`]:t.selectIcon,[`& .${ge.select}`]:t.select,...t.input,...t.selectRoot})})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${ge.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),an=B(Y,{name:"MuiTablePagination",slot:"MenuItem"})({}),rn=B("p",{name:"MuiTablePagination",slot:"DisplayedRows"})(Q(({theme:e})=>({...e.typography.body2,flexShrink:0})));function on({from:e,to:t,count:n}){return`${e}–${t} of ${n!==-1?n:`more than ${t}`}`}function ln(e){return`Go to ${e} page`}const sn=e=>{const{classes:t}=e;return K({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},Jt,t)},un=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTablePagination"}),{ActionsComponent:i=Yt,backIconButtonProps:o,colSpan:s,component:u=J,count:l,disabled:m=!1,getItemAriaLabel:f=ln,labelDisplayedRows:g=on,labelRowsPerPage:x="Rows per page:",nextIconButtonProps:c,onPageChange:y,onRowsPerPageChange:d,page:p,rowsPerPage:T,rowsPerPageOptions:b=[10,25,50,100],SelectProps:S={},showFirstButton:k=!1,showLastButton:w=!1,slotProps:j={},slots:q={},...I}=r,P=r,F=sn(P),D=j?.select??S,ee=D.native?"option":an;let W;(u===J||u==="td")&&(W=s||1e3);const E=Re(D.id),V=Re(D.labelId),A=()=>l===-1?(p+1)*T:T===-1?l:Math.min(l,(p+1)*T),L={slots:q,slotProps:j},[te,ne]=O("root",{ref:n,className:F.root,elementType:Xt,externalForwardedProps:{...L,component:u,...I},ownerState:P,additionalProps:{colSpan:W}}),[ae,re]=O("toolbar",{className:F.toolbar,elementType:Zt,externalForwardedProps:L,ownerState:P}),[le,se]=O("spacer",{className:F.spacer,elementType:en,externalForwardedProps:L,ownerState:P}),[ue,M]=O("selectLabel",{className:F.selectLabel,elementType:tn,externalForwardedProps:L,ownerState:P,additionalProps:{id:V}}),[R,N]=O("select",{className:F.select,elementType:nn,externalForwardedProps:L,ownerState:P}),[Je,Xe]=O("menuItem",{className:F.menuItem,elementType:ee,externalForwardedProps:L,ownerState:P}),[Ze,et]=O("displayedRows",{className:F.displayedRows,elementType:rn,externalForwardedProps:L,ownerState:P});return a.jsx(te,{...ne,children:a.jsxs(ae,{...re,children:[a.jsx(le,{...se}),b.length>1&&a.jsx(ue,{...M,children:x}),b.length>1&&a.jsx(R,{variant:"standard",...!D.variant&&{input:Me||(Me=a.jsx(bt,{}))},value:T,onChange:d,id:E,labelId:V,...D,classes:{...D.classes,root:z(F.input,F.selectRoot,(D.classes||{}).root),select:z(F.select,(D.classes||{}).select),icon:z(F.selectIcon,(D.classes||{}).icon)},disabled:m,...N,children:b.map(U=>v.createElement(Je,{...Xe,key:U.label?U.label:U,value:U.value?U.value:U},U.label?U.label:U))}),a.jsx(Ze,{...et,children:g({from:l===0?0:p*T+1,to:A(),count:l===-1?-1:l,page:p})}),a.jsx(i,{className:F.actions,backIconButtonProps:o,count:l,nextIconButtonProps:c,onPageChange:y,page:p,rowsPerPage:T,showFirstButton:k,showLastButton:w,slotProps:j.actions,slots:q.actions,getItemAriaLabel:f,disabled:m})]})})}),dn=G(a.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}));function cn(e){return _("MuiTableSortLabel",e)}const ke=Z("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),pn=e=>{const{classes:t,direction:n,active:r}=e,i={root:["root",r&&"active",`direction${C(n)}`],icon:["icon",`iconDirection${C(n)}`]};return K(i,cn,t)},mn=B(fe,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})(Q(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${ke.icon}`]:{opacity:.5}},[`&.${ke.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${ke.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}}))),gn=B("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${C(n.direction)}`]]}})(Q(({theme:e})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),fn=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiTableSortLabel"}),{active:i=!1,children:o,className:s,direction:u="asc",hideSortIcon:l=!1,IconComponent:m=dn,slots:f={},slotProps:g={},...x}=r,c={...r,active:i,direction:u,hideSortIcon:l,IconComponent:m},y=pn(c),d={slots:f,slotProps:g},[p,T]=O("root",{elementType:mn,externalForwardedProps:d,ownerState:c,className:z(y.root,s),ref:n}),[b,S]=O("icon",{elementType:gn,externalForwardedProps:d,ownerState:c,className:y.icon});return a.jsxs(p,{disableRipple:!0,component:"span",...T,...x,children:[o,l&&!i?null:a.jsx(b,{as:m,...S})]})});function yn(e){return _("MuiToggleButton",e)}const X=Z("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),We=v.createContext({}),Ve=v.createContext(void 0);function vn(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const bn=e=>{const{classes:t,fullWidth:n,selected:r,disabled:i,size:o,color:s}=e,u={root:["root",r&&"selected",i&&"disabled",n&&"fullWidth",`size${C(o)}`,s]};return K(u,yn,t)},hn=B(fe,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`size${C(n.size)}`]]}})(Q(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${X.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${X.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(pe()).map(([t])=>({props:{color:t},style:{[`&.${X.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),xn=v.forwardRef(function(t,n){const{value:r,...i}=v.useContext(We),o=v.useContext(Ve),s=st({...i,selected:vn(t.value,r)},t),u=H({props:s,name:"MuiToggleButton"}),{children:l,className:m,color:f="standard",disabled:g=!1,disableFocusRipple:x=!1,fullWidth:c=!1,onChange:y,onClick:d,selected:p,size:T="medium",value:b,...S}=u,k={...u,color:f,disabled:g,disableFocusRipple:x,fullWidth:c,size:T},w=bn(k),j=I=>{d&&(d(I,b),I.defaultPrevented)||y&&y(I,b)},q=o||"";return a.jsx(hn,{className:z(i.className,w.root,m,q),disabled:g,focusRipple:!x,ref:n,onClick:j,onChange:y,value:b,ownerState:k,"aria-pressed":p,...S,children:l})});function Cn(e){return _("MuiToggleButtonGroup",e)}const $=Z("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Sn=e=>{const{classes:t,orientation:n,fullWidth:r,disabled:i}=e,o={root:["root",n,r&&"fullWidth"],grouped:["grouped",`grouped${C(n)}`,i&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return K(o,Cn,t)},wn=B("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${$.grouped}`]:t.grouped},{[`& .${$.grouped}`]:t[`grouped${C(n.orientation)}`]},{[`& .${$.firstButton}`]:t.firstButton},{[`& .${$.lastButton}`]:t.lastButton},{[`& .${$.middleButton}`]:t.middleButton},t.root,n.orientation==="vertical"&&t.vertical,n.fullWidth&&t.fullWidth]}})(Q(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderTop:0,marginTop:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${$.lastButton}.${X.disabled},& .${$.middleButton}.${X.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${$.lastButton}.${X.disabled},& .${$.middleButton}.${X.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),kn=v.forwardRef(function(t,n){const r=H({props:t,name:"MuiToggleButtonGroup"}),{children:i,className:o,color:s="standard",disabled:u=!1,exclusive:l=!1,fullWidth:m=!1,onChange:f,orientation:g="horizontal",size:x="medium",value:c,...y}=r,d={...r,disabled:u,fullWidth:m,orientation:g,size:x},p=Sn(d),T=v.useCallback((q,I)=>{if(!f)return;const P=c&&c.indexOf(I);let F;c&&P>=0?(F=c.slice(),F.splice(P,1)):F=c?c.concat(I):[I],f(q,F)},[f,c]),b=v.useCallback((q,I)=>{f&&f(q,c===I?null:I)},[f,c]),S=v.useMemo(()=>({className:p.grouped,onChange:l?b:T,value:c,size:x,fullWidth:m,color:s,disabled:u}),[p.grouped,l,b,T,c,x,m,s,u]),k=Nt(i),w=k.length,j=q=>{const I=q===0,P=q===w-1;return I&&P?"":I?p.firstButton:P?p.lastButton:p.middleButton};return a.jsx(wn,{role:"group",className:z(p.root,o),ref:n,ownerState:d,...y,children:a.jsx(We.Provider,{value:S,children:k.map((q,I)=>a.jsx(Ve.Provider,{value:j(I),children:q},I))})})}),Ue=({data:e,columns:t,loading:n,emptyMessage:r,sorting:i=[],onSortingChange:o,onRowClick:s,getRowId:u})=>{const l=Math.max(t.length,1),m=!n&&e.length===0,f=!!s,g=c=>{if(!o)return;const y=i.find(d=>d.id===c);y?y.desc?o([]):o([{id:c,desc:!0}]):o([{id:c,desc:!1}])},x=c=>{const y=i.find(d=>d.id===c);return y?y.desc?"desc":"asc":!1};return a.jsx(dt,{children:a.jsxs(ct,{size:"small","aria-busy":n,children:[a.jsx(pt,{sx:{backgroundColor:"grey.50"},children:a.jsx(ye,{children:t.map(c=>{const y=x(c.id),d=c.enableSorting&&o;return a.jsx(J,{align:c.meta?.align,sortDirection:y,sx:{fontWeight:600,color:"text.secondary",width:c.meta?.width,minWidth:c.meta?.minWidth,maxWidth:c.meta?.maxWidth},children:d?a.jsx(fn,{active:y!==!1,direction:y===!1?"asc":y,onClick:()=>g(c.id),children:c.header}):c.header},c.id)})})}),a.jsx(mt,{children:n?a.jsx(ye,{children:a.jsx(J,{colSpan:l,children:a.jsxs(me,{display:"flex",alignItems:"center",gap:1,py:2,children:[a.jsx(ft,{size:20}),a.jsx(xe,{variant:"body2",children:"Loading"})]})})}):m?a.jsx(ye,{children:a.jsx(J,{colSpan:l,children:a.jsx(xe,{variant:"body2",color:"text.secondary",py:2,children:r})})}):e.map((c,y)=>{const d=u?u(c,y):String(y);return a.jsx(ye,{hover:f,onClick:s?()=>s(c):void 0,sx:f?{cursor:"pointer"}:void 0,children:t.map(p=>{const T=p.accessorKey?c[p.accessorKey]:void 0,b=p.cell?p.cell(c):String(T??"");return a.jsx(J,{align:p.meta?.align,sx:{width:p.meta?.width,minWidth:p.meta?.minWidth,maxWidth:p.meta?.maxWidth},children:b},p.id)})},d)})})]})})};Ue.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"sorting"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:""},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""}}};const Ge=({pagination:e,onPaginationChange:t,rowCount:n,pageSizeOptions:r})=>a.jsx(un,{component:"div",count:n,page:e.pageIndex,onPageChange:(i,o)=>t(s=>({...s,pageIndex:o})),rowsPerPage:e.pageSize,onRowsPerPageChange:i=>{t(o=>({...o,pageIndex:0,pageSize:Number(i.target.value)}))},rowsPerPageOptions:r,labelDisplayedRows:({from:i,to:o,count:s,page:u})=>s===-1?`Page ${u+1}`:`${i}-${o} of ${s}`});Ge.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const qn=G(a.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),Tn=G(a.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),In=G(a.jsx("path",{d:"M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"})),$n=G(a.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Fn=G(a.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),Pn=["eq"],Ee={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},Rn=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,jn=(e,t)=>e.find(n=>n.name===t),Ie=e=>e?.ops?.length?e.ops:Pn,qe=(e,t,n)=>t==="isnull"||e?.type==="boolean"?n==="false"?"false":"true":n??"",Oe=(e,t)=>t?.options?.length?t.options.find(n=>n.value===e)?.label??e:e,Bn=(e,t)=>{const n=t?.label??e.field,r=(e.value??"").trim();if(e.op==="isnull")return`${n} ${r!=="false"?"is null":"is not null"}`;if(!r)return"";const i=Ee[e.op]??e.op;if(e.op==="in"){const l=r.split(",").map(m=>m.trim()).filter(Boolean).map(m=>Oe(m,t)).join(", ");return`${n} ${i} (${l})`}const o=Oe(r,t),u=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${o}"`:o;return`${n} ${i} ${u}`},Dn=(e,t)=>{if(!e.length)return"";const n=new Map(t.map(r=>[r.name,r]));return e.map(r=>Bn(r,n.get(r.field))).filter(Boolean).join(" AND ")},zn=({filter:e,fields:t,fieldMap:n,onFieldChange:r,onOpChange:i,onValueChange:o,onRemove:s})=>{const u=n.get(e.field),l=Ie(u),m=e.op==="in"?"Values":"Value",f=u?.type==="number"?"number":u?.type==="date"?"date":u?.type==="datetime"?"datetime-local":"text",g=u?.type==="date"||u?.type==="datetime",x=u?.placeholder??(e.op==="in"?"Comma-separated values":void 0),c=u?.options??[],y=c.length>0&&(e.op==="eq"||e.op==="neq");return a.jsxs(Te,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"stretch",sm:"center"},children:[a.jsx(ie,{select:!0,size:"small",label:"Field",value:e.field,onChange:d=>r(e.id,d.target.value),sx:{minWidth:160},children:t.map(d=>a.jsx(Y,{value:d.name,children:d.label},d.name))}),a.jsx(kn,{exclusive:!0,size:"small",color:"primary",value:e.op,onChange:(d,p)=>{p!==null&&i(e.id,p)},sx:{minWidth:150,alignSelf:"center"},children:l.map(d=>a.jsx(xn,{value:d,children:Ee[d]??d},d))}),e.op==="isnull"?a.jsxs(ie,{select:!0,size:"small",label:"Null state",value:e.value??"true",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(Y,{value:"true",children:"Is null"}),a.jsx(Y,{value:"false",children:"Is not null"})]}):y?a.jsx(ie,{select:!0,size:"small",label:m,value:e.value??"",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:c.map(d=>a.jsx(Y,{value:d.value,children:d.label},d.value))}):u?.type==="boolean"?a.jsxs(ie,{select:!0,size:"small",label:m,value:e.value??"true",onChange:d=>o(e.id,d.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(Y,{value:"true",children:"True"}),a.jsx(Y,{value:"false",children:"False"})]}):a.jsx(ie,{size:"small",type:f,label:m,value:e.value??"",onChange:d=>o(e.id,d.target.value),placeholder:x,InputLabelProps:g?{shrink:!0}:void 0,sx:{minWidth:160,flex:1}}),a.jsx(oe,{size:"small","aria-label":"Remove filter",onClick:()=>s(e.id),children:a.jsx(Tn,{fontSize:"small"})})]})},He=({queryBuilder:e})=>{const[t,n]=v.useState(null),r=!!t,i=t?.clientWidth??560,{fields:o,filters:s,onFiltersChange:u,placeholder:l,summaryFormatter:m}=e,f=v.useMemo(()=>new Map(o.map(S=>[S.name,S])),[o]),g=v.useMemo(()=>s.length?m?m(s,o):Dn(s,o):"",[s,o,m]),x=S=>{n(S.currentTarget)},c=()=>{n(null)},y=()=>{if(o.length===0)return;const S=o[0],w=Ie(S)[0]??"eq",j=qe(S,w);u([...s,{id:Rn(),field:S.name,op:w,value:j}])},d=S=>{u(s.filter(k=>k.id!==S))},p=(S,k)=>{const w=jn(o,k);if(!w)return;const j=Ie(w);u(s.map(q=>{if(q.id!==S)return q;const I=j.includes(q.op)?q.op:j[0]??"eq",P=qe(w,I,q.value);return{...q,field:w.name,op:I,value:P}}))},T=(S,k)=>{u(s.map(w=>{if(w.id!==S)return w;const j=f.get(w.field),q=qe(j,k,w.value);return{...w,op:k,value:q}}))},b=(S,k)=>{u(s.map(w=>w.id===S?{...w,value:k}:w))};return a.jsxs(a.Fragment,{children:[a.jsx(me,{sx:{borderBottom:"1px solid",borderColor:"divider",px:2,py:1.5},children:a.jsx(ie,{fullWidth:!0,size:"small",placeholder:l??"Add filters",value:g,onClick:x,onFocus:x,InputProps:{readOnly:!0,startAdornment:a.jsx(Ae,{position:"start",children:a.jsx(In,{fontSize:"small"})}),endAdornment:a.jsx(Ae,{position:"end",children:r?a.jsx(Fn,{}):a.jsx($n,{})})},inputProps:{"aria-label":"Filter query"},sx:{"& .MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{cursor:"pointer",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})}),a.jsx(St,{open:r,anchorEl:t,onClose:c,disableRestoreFocus:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:i,maxWidth:"calc(100vw - 32px)",p:2}}},children:a.jsx(me,{sx:{maxHeight:"60vh",overflowY:"auto"},children:a.jsxs(Te,{spacing:2,children:[a.jsxs(me,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,children:[a.jsx(xe,{variant:"subtitle2",children:"Filters"}),a.jsxs(me,{display:"flex",alignItems:"center",gap:1,children:[a.jsx(qt,{size:"small",startIcon:a.jsx(qn,{fontSize:"small"}),onClick:y,disabled:o.length===0,children:"Add filter"}),a.jsx(oe,{size:"small","aria-label":"Close filters",onClick:c,children:a.jsx(Ct,{fontSize:"small"})})]})]}),s.length===0?a.jsx(xe,{variant:"body2",color:"text.secondary",children:"No filters yet."}):a.jsx(Te,{spacing:1.5,children:s.map(S=>a.jsx(zn,{filter:S,fields:o,fieldMap:f,onFieldChange:p,onOpChange:T,onValueChange:b,onRemove:d},S.id))})]})})})]})};He.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
@param fields - Available fields`}]}},description:""}}};const Ne=[10,25,50];function Se({data:e,columns:t,getRowId:n,pagination:r,onPaginationChange:i,sorting:o,onSortingChange:s,rowCount:u,loading:l=!1,emptyMessage:m="No data available",pageSizeOptions:f=Ne,onRowClick:g,query:x}){const c=v.useMemo(()=>f.length?f:Ne,[f]),y=u??e.length;return a.jsxs(Tt,{variant:"outlined",children:[x?a.jsx(He,{queryBuilder:x}):null,a.jsx(Ue,{data:e,columns:t,loading:l,emptyMessage:m,sorting:o,onSortingChange:s,onRowClick:g,getRowId:n}),a.jsx(Ge,{pagination:r,onPaginationChange:i,rowCount:y,pageSizeOptions:c})]})}Se.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"}}};const Ke=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>a.jsx(Ot,{label:e.status,color:e.status==="Active"?"success":"default",size:"small"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],_e=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],An=e=>Array.from({length:e}).map((t,n)=>({id:String(n+1),name:`Item ${n+1}`,status:n%3===0?"Archived":n%2===0?"Active":"Inactive",createdAt:new Date(2024,0,n+1).toISOString()})),Ce=An(48),Ln={pageIndex:0,pageSize:10},Mn=(e={})=>{const{initialPagination:t={},initialSorting:n=[],initialFilters:r=[]}=e,i={...Ln,...t},[o,s]=v.useState(i),[u,l]=v.useState(n),[m,f]=v.useState(r),g=()=>{s(i)},x=()=>{l(n)},c=()=>{f(r)};return{pagination:o,onPaginationChange:s,sorting:u,onSortingChange:l,filters:m,onFiltersChange:f,resetPagination:g,resetSorting:x,resetFilters:c,resetAll:()=>{g(),x(),c()}}},Ye=(e,t)=>t.length?[...e].sort((n,r)=>{for(const i of t){const o=i.id,s=n[o],u=r[o];if(s===u)continue;const l=i.desc?-1:1,m=typeof s=="string"?s.toLowerCase():s,f=typeof u=="string"?u.toLowerCase():u;return m==null?1*l:f==null?-1*l:m>f?l:-l}return 0}):e,$e=(e=[],t=!1)=>(n,r)=>{const[i,o]=v.useState({pageIndex:0,pageSize:10}),[s,u]=v.useState(e),[l,m]=v.useState([]),f=v.useMemo(()=>Ye(Ce,s),[s]),g=v.useMemo(()=>f.slice(i.pageIndex*i.pageSize,i.pageIndex*i.pageSize+i.pageSize),[i.pageIndex,i.pageSize,f]);return a.jsx(Se,{...r.args,data:g,columns:Ke,rowCount:Ce.length,pagination:i,onPaginationChange:o,sorting:s,onSortingChange:u,query:t?{fields:_e,filters:l,onFiltersChange:m,placeholder:"Filter items..."}:void 0})},Sa={title:"Tables/RemoteDataTable",component:Se,decorators:[ut()],parameters:{layout:"fullscreen"}},ve={args:{pageSizeOptions:[5,10,25]},decorators:[$e()]},be={args:{pageSizeOptions:[5,10,25]},decorators:[$e([{id:"createdAt",desc:!0}])]},he={args:{pageSizeOptions:[5,10,25]},decorators:[$e([],!0)]},ce={render:()=>{const e=Mn({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),t=v.useMemo(()=>Ye(Ce,e.sorting),[e.sorting]),n=v.useMemo(()=>t.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,t]);return a.jsx(Se,{data:n,columns:Ke,rowCount:Ce.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:_e,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
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
This hook aggregates pagination, sorting, and filters state.`,...ce.parameters?.docs?.description}}};const wa=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{ve as Default,be as SortedByCreatedDate,ce as UsingHook,he as WithQueryBuilder,wa as __namedExportsOrder,Sa as default};
