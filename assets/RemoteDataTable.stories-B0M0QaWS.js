import{r as v,p as lt,j as a,c as L,I as Re,J as ke,K as st,L as dt,M as ut,C as ct,N as ze,u as K,t as b,O as Qe,x as Ie,y as pt,F as gt}from"./iframe-pW5QL-bD.js";import{u as mt,d as ft}from"./storybook-Cgqq7mV2.js";import{d as ee,T as vt,a as yt,b as bt,c as ye,e as ht}from"./TableRow-DfcJCl21.js";import{c as O,C as Ue,I as le}from"./IconButton-_qVtYsnW.js";import{a as _,s as R,m as W,r as Ge}from"./memoTheme-HUfg-dMU.js";import{g as J,a as G,B as fe}from"./Box-DsJTfv6x.js";import{u as U}from"./useSlot-BAaV_uZw.js";import{u as Ee,B as de,c as se,d as Se}from"./Typography-CJ5PGsY1.js";import{a as xt,S as St,T as ie,I as Fe,P as Ct}from"./TextField-DpnCKnSY.js";import{L as je}from"./List-CKqwr_zG.js";import{s as wt,l as De}from"./listItemTextClasses-DIbJmjLR.js";import{P as kt}from"./Paper-Bc1D1BeZ.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-BXe9WKY8.js";import"./index-TlASSgMk.js";import"./index-DfVoCZUp.js";import"./loader-circle-CjX3rdDU.js";import"./createLucideIcon-FVDiqrjk.js";import"./triangle-alert-BtbPem2_.js";import"./sidebar-Dl8gHgQ3.js";import"./index-C7NSALCi.js";import"./button-D2Ijx_X0.js";import"./utils-BUhL_YVU.js";import"./useRenderElement-CVdh77Wx.js";import"./DirectionContext-BxUIMOF1.js";import"./composite-cFlvVe3B.js";import"./x-DzjZg6q4.js";import"./DialogTitle-BmELqlVB.js";import"./index-CqolCm2N.js";import"./useRender-WM4sSGP3.js";import"./getReactElementRef-eZVkb4FP.js";import"./Fade-DvdN2fOO.js";const qt=ct(),Tt=wt("div",{name:"MuiStack",slot:"Root"});function It(e){return mt({props:e,name:"MuiStack",defaultTheme:qt})}function Pt(e,t){const n=v.Children.toArray(e).filter(Boolean);return n.reduce((r,o,i)=>(r.push(o),i<n.length-1&&r.push(v.cloneElement(t,{key:`separator-${i}`})),r),[])}const $t=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Bt=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...Re({theme:t},ke({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r}))};if(e.spacing){const r=st(t),o=Object.keys(t.breakpoints.values).reduce((l,u)=>((typeof e.spacing=="object"&&e.spacing[u]!=null||typeof e.direction=="object"&&e.direction[u]!=null)&&(l[u]=!0),l),{}),i=ke({values:e.direction,base:o}),s=ke({values:e.spacing,base:o});typeof i=="object"&&Object.keys(i).forEach((l,u,m)=>{if(!i[l]){const x=u>0?i[m[u-1]]:"column";i[l]=x}}),n=dt(n,Re({theme:t},s,(l,u)=>e.useFlexGap?{gap:ze(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${$t(u?i[u]:e.direction)}`]:ze(r,l)}}))}return n=ut(t.breakpoints,n),n};function Rt(e={}){const{createStyledComponent:t=Tt,useThemeProps:n=It,componentName:r="MuiStack"}=e,o=()=>_({root:["root"]},l=>J(r,l),{}),i=t(Bt);return v.forwardRef(function(l,u){const m=n(l),f=lt(m),{component:x="div",direction:c="column",spacing:y=0,divider:p,children:g,className:T,useFlexGap:h=!1,...C}=f,w={direction:c,spacing:y,useFlexGap:h},k=o();return a.jsx(i,{as:x,ownerState:w,ref:u,className:L(k.root,T),...C,children:p?Pt(g,p):g})})}const zt=O(a.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function Ft(e){return J("MuiChip",e)}const S=G("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),jt=e=>{const{classes:t,disabled:n,size:r,color:o,iconColor:i,onDelete:s,clickable:d,variant:l}=e,u={root:["root",l,n&&"disabled",`size${b(r)}`,`color${b(o)}`,d&&"clickable",d&&`clickableColor${b(o)}`,s&&"deletable",s&&`deletableColor${b(o)}`,`${l}${b(o)}`],label:["label",`label${b(r)}`],avatar:["avatar",`avatar${b(r)}`,`avatarColor${b(o)}`],icon:["icon",`icon${b(r)}`,`iconColor${b(i)}`],deleteIcon:["deleteIcon",`deleteIcon${b(r)}`,`deleteIconColor${b(o)}`,`deleteIcon${b(l)}Color${b(o)}`]};return _(u,Ft,t)},Dt=R("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:r,iconColor:o,clickable:i,onDelete:s,size:d,variant:l}=n;return[{[`& .${S.avatar}`]:t.avatar},{[`& .${S.avatar}`]:t[`avatar${b(d)}`]},{[`& .${S.avatar}`]:t[`avatarColor${b(r)}`]},{[`& .${S.icon}`]:t.icon},{[`& .${S.icon}`]:t[`icon${b(d)}`]},{[`& .${S.icon}`]:t[`iconColor${b(o)}`]},{[`& .${S.deleteIcon}`]:t.deleteIcon},{[`& .${S.deleteIcon}`]:t[`deleteIcon${b(d)}`]},{[`& .${S.deleteIcon}`]:t[`deleteIconColor${b(r)}`]},{[`& .${S.deleteIcon}`]:t[`deleteIcon${b(l)}Color${b(r)}`]},t.root,t[`size${b(d)}`],t[`color${b(r)}`],i&&t.clickable,i&&r!=="default"&&t[`clickableColor${b(r)}`],s&&t.deletable,s&&r!=="default"&&t[`deletableColor${b(r)}`],t[l],t[`${l}${b(r)}`]]}})(W(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${S.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${S.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${S.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${S.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${S.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${S.icon}`]:{marginLeft:5,marginRight:-6},[`& .${S.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.alpha((e.vars||e).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.alpha((e.vars||e).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${S.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${S.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(se(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(e.vars||e).palette[n].main,color:(e.vars||e).palette[n].contrastText,[`& .${S.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${S.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${S.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${S.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}}},...Object.entries(e.palette).filter(se(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${S.focusVisible}`]:{background:(e.vars||e).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)},[`&.${S.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(se(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${S.focusVisible}`]:{backgroundColor:(e.vars||e).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${S.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${S.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${S.avatar}`]:{marginLeft:4},[`& .${S.avatarSmall}`]:{marginLeft:2},[`& .${S.icon}`]:{marginLeft:4},[`& .${S.iconSmall}`]:{marginLeft:2},[`& .${S.deleteIcon}`]:{marginRight:5},[`& .${S.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter(se()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(e.vars||e).palette[n].main,border:`1px solid ${e.alpha((e.vars||e).palette[n].main,.7)}`,[`&.${S.clickable}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.hoverOpacity)},[`&.${S.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette[n].main,(e.vars||e).palette.action.focusOpacity)},[`& .${S.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[n].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].main}}}}))]}})),Lt=R("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:r}=n;return[t.label,t[`label${b(r)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Le(e){return e.key==="Backspace"||e.key==="Delete"}const Mt=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiChip"}),{avatar:o,className:i,clickable:s,color:d="default",component:l,deleteIcon:u,disabled:m=!1,icon:f,label:x,onClick:c,onDelete:y,onKeyDown:p,onKeyUp:g,size:T="medium",variant:h="filled",tabIndex:C,skipFocusWhenDisabled:w=!1,slots:k={},slotProps:z={},...q}=r,I=v.useRef(null),B=Ee(I,n),P=F=>{F.stopPropagation(),y(F)},D=F=>{F.currentTarget===F.target&&Le(F)&&F.preventDefault(),p&&p(F)},M=F=>{F.currentTarget===F.target&&y&&Le(F)&&y(F),g&&g(F)},j=s!==!1&&c?!0:s,E=j||y?de:l||"div",V={...r,component:E,disabled:m,size:T,color:d,iconColor:v.isValidElement(f)&&f.props.color||d,onDelete:!!y,clickable:j,variant:h},A=jt(V),N=E===de?{component:l||"div",focusVisibleClassName:A.focusVisible,...y&&{disableRipple:!0}}:{};let ne=null;y&&(ne=u&&v.isValidElement(u)?v.cloneElement(u,{className:L(u.props.className,A.deleteIcon),onClick:P}):a.jsx(zt,{className:A.deleteIcon,onClick:P}));let ae=null;o&&v.isValidElement(o)&&(ae=v.cloneElement(o,{className:L(A.avatar,o.props.className)}));let re=null;f&&v.isValidElement(f)&&(re=v.cloneElement(f,{className:L(A.icon,f.props.className)}));const oe={slots:k,slotProps:z},[ue,ce]=U("root",{elementType:Dt,externalForwardedProps:{...oe,...q},ownerState:V,shouldForwardComponentProp:!0,ref:B,className:L(A.root,i),additionalProps:{disabled:j&&m?!0:void 0,tabIndex:w&&m?-1:C,...N},getSlotProps:F=>({...F,onClick:H=>{F.onClick?.(H),c?.(H)},onKeyDown:H=>{F.onKeyDown?.(H),D(H)},onKeyUp:H=>{F.onKeyUp?.(H),M(H)}})}),[pe,Q]=U("label",{elementType:Lt,externalForwardedProps:oe,ownerState:V,className:A.label});return a.jsxs(ue,{as:E,...ce,children:[ae||re,a.jsx(pe,{...Q,children:x}),ne]})});function At(e){return J("MuiButton",e)}const X=G("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),Nt=v.createContext({}),Ot=v.createContext(void 0),Wt=e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:i,loading:s,loadingPosition:d,classes:l}=e,u={root:["root",s&&"loading",i,`${i}${b(t)}`,`size${b(o)}`,`${i}Size${b(o)}`,`color${b(t)}`,n&&"disableElevation",r&&"fullWidth",s&&`loadingPosition${b(d)}`],startIcon:["icon","startIcon",`iconSize${b(o)}`],endIcon:["icon","endIcon",`iconSize${b(o)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},m=_(u,At,l);return{...l,...m}},He=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Vt=R(de,{shouldForwardProp:e=>Ge(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${b(n.color)}`],t[`size${b(n.size)}`],t[`${n.variant}Size${b(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(W(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${X.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${X.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${X.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${X.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter(se()).map(([r])=>({props:{color:r},style:{"--variant-textColor":(e.vars||e).palette[r].main,"--variant-outlinedColor":(e.vars||e).palette[r].main,"--variant-outlinedBorder":e.alpha((e.vars||e).palette[r].main,.5),"--variant-containedColor":(e.vars||e).palette[r].contrastText,"--variant-containedBg":(e.vars||e).palette[r].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[r].dark,"--variant-textBg":e.alpha((e.vars||e).palette[r].main,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[r].main,"--variant-outlinedBg":e.alpha((e.vars||e).palette[r].main,(e.vars||e).palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${X.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${X.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${X.loading}`]:{color:"transparent"}}}]}})),Qt=R("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,n.loading&&t.startIconLoadingStart,t[`iconSize${b(n.size)}`]]}})(({theme:e})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...He]})),Ut=R("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,n.loading&&t.endIconLoadingEnd,t[`iconSize${b(n.size)}`]]}})(({theme:e})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...He]})),Gt=R("span",{name:"MuiButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),Me=R("span",{name:"MuiButton",slot:"LoadingIconPlaceholder"})({display:"inline-block",width:"1em",height:"1em"}),Et=v.forwardRef(function(t,n){const r=v.useContext(Nt),o=v.useContext(Ot),i=Qe(r,t),s=K({props:i,name:"MuiButton"}),{children:d,color:l="primary",component:u="button",className:m,disabled:f=!1,disableElevation:x=!1,disableFocusRipple:c=!1,endIcon:y,focusVisibleClassName:p,fullWidth:g=!1,id:T,loading:h=null,loadingIndicator:C,loadingPosition:w="center",size:k="medium",startIcon:z,type:q,variant:I="text",...B}=s,P=Ie(T),D=C??a.jsx(Ue,{"aria-labelledby":P,color:"inherit",size:16}),M={...s,color:l,component:u,disabled:f,disableElevation:x,disableFocusRipple:c,fullWidth:g,loading:h,loadingIndicator:D,loadingPosition:w,size:k,type:q,variant:I},j=Wt(M),E=(z||h&&w==="start")&&a.jsx(Qt,{className:j.startIcon,ownerState:M,children:z||a.jsx(Me,{className:j.loadingIconPlaceholder,ownerState:M})}),V=(y||h&&w==="end")&&a.jsx(Ut,{className:j.endIcon,ownerState:M,children:y||a.jsx(Me,{className:j.loadingIconPlaceholder,ownerState:M})}),A=o||"",N=typeof h=="boolean"?a.jsx("span",{className:j.loadingWrapper,style:{display:"contents"},children:h&&a.jsx(Gt,{className:j.loadingIndicator,ownerState:M,children:D})}):null;return a.jsxs(Vt,{ownerState:M,className:L(r.className,j.root,m,A),component:u,disabled:f||h,focusRipple:!c,focusVisibleClassName:L(j.focusVisible,p),ref:n,type:q,id:h?P:T,...B,classes:j,children:[E,w!=="end"&&N,d,w==="end"&&N,V]})});function Ht(e){return v.Children.toArray(e).filter(t=>v.isValidElement(t))}const Ae=G("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Ne=G("MuiListItemIcon",["root","alignItemsFlexStart"]);function Kt(e){return J("MuiMenuItem",e)}const ge=G("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),_t=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Jt=e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:i,classes:s}=e,l=_({root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},Kt,s);return{...s,...l}},Yt=R(de,{shouldForwardProp:e=>Ge(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:_t})(W(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ge.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${ge.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${ge.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${ge.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${ge.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Ae.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Ae.inset}`]:{marginLeft:52},[`& .${De.root}`]:{marginTop:0,marginBottom:0},[`& .${De.inset}`]:{paddingLeft:36},[`& .${Ne.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${Ne.root} svg`]:{fontSize:"1.25rem"}}}]}))),Z=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:i="li",dense:s=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:u,role:m="menuitem",tabIndex:f,className:x,...c}=r,y=v.useContext(je),p=v.useMemo(()=>({dense:s||y.dense||!1,disableGutters:l}),[y.dense,s,l]),g=v.useRef(null);pt(()=>{o&&g.current&&g.current.focus()},[o]);const T={...r,dense:p.dense,divider:d,disableGutters:l},h=Jt(r),C=Ee(g,n);let w;return r.disabled||(w=f!==void 0?f:-1),a.jsx(je.Provider,{value:p,children:a.jsx(Yt,{ref:C,role:m,tabIndex:w,component:i,focusVisibleClassName:L(h.focusVisible,u),className:L(h.root,x),...c,ownerState:T,classes:h})})}),Xt=O(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),Zt=O(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),Pe=Rt({createStyledComponent:R("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>K({props:e,name:"MuiStack"})});function en(e){return J("MuiToolbar",e)}G("MuiToolbar",["root","gutters","regular","dense"]);const tn=e=>{const{classes:t,disableGutters:n,variant:r}=e;return _({root:["root",!n&&"gutters",r]},en,t)},nn=R("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})(W(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]}))),an=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiToolbar"}),{className:o,component:i="div",disableGutters:s=!1,variant:d="regular",...l}=r,u={...r,component:i,disableGutters:s,variant:d},m=tn(u);return a.jsx(nn,{as:i,className:L(m.root,o),ref:n,ownerState:u,...l})}),rn=O(a.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),on=O(a.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function ln(e){return J("MuiTablePaginationActions",e)}G("MuiTablePaginationActions",["root"]);const sn=e=>{const{classes:t}=e;return _({root:["root"]},ln,t)},dn=R("div",{name:"MuiTablePaginationActions",slot:"Root"})({}),un=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiTablePaginationActions"}),{backIconButtonProps:o,className:i,count:s,disabled:d=!1,getItemAriaLabel:l,nextIconButtonProps:u,onPageChange:m,page:f,rowsPerPage:x,showFirstButton:c,showLastButton:y,slots:p={},slotProps:g={},...T}=r,h=gt(),w=sn(r),k=Q=>{m(Q,0)},z=Q=>{m(Q,f-1)},q=Q=>{m(Q,f+1)},I=Q=>{m(Q,Math.max(0,Math.ceil(s/x)-1))},B=p.firstButton??le,P=p.lastButton??le,D=p.nextButton??le,M=p.previousButton??le,j=p.firstButtonIcon??Xt,E=p.lastButtonIcon??Zt,V=p.nextButtonIcon??on,A=p.previousButtonIcon??rn,N=h?P:B,ne=h?D:M,ae=h?M:D,re=h?B:P,oe=h?g.lastButton:g.firstButton,ue=h?g.nextButton:g.previousButton,ce=h?g.previousButton:g.nextButton,pe=h?g.firstButton:g.lastButton;return a.jsxs(dn,{ref:n,className:L(w.root,i),...T,children:[c&&a.jsx(N,{onClick:k,disabled:d||f===0,"aria-label":l("first",f),title:l("first",f),...oe,children:h?a.jsx(E,{...g.lastButtonIcon}):a.jsx(j,{...g.firstButtonIcon})}),a.jsx(ne,{onClick:z,disabled:d||f===0,color:"inherit","aria-label":l("previous",f),title:l("previous",f),...ue??o,children:h?a.jsx(V,{...g.nextButtonIcon}):a.jsx(A,{...g.previousButtonIcon})}),a.jsx(ae,{onClick:q,disabled:d||(s!==-1?f>=Math.ceil(s/x)-1:!1),color:"inherit","aria-label":l("next",f),title:l("next",f),...ce??u,children:h?a.jsx(A,{...g.previousButtonIcon}):a.jsx(V,{...g.nextButtonIcon})}),y&&a.jsx(re,{onClick:I,disabled:d||f>=Math.ceil(s/x)-1,"aria-label":l("last",f),title:l("last",f),...pe,children:h?a.jsx(j,{...g.firstButtonIcon}):a.jsx(E,{...g.lastButtonIcon})})]})});function cn(e){return J("MuiTablePagination",e)}const ve=G("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Oe;const pn=R(ee,{name:"MuiTablePagination",slot:"Root"})(W(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}}))),gn=R(an,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>({[`& .${ve.actions}`]:t.actions,...t.toolbar})})(W(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${ve.actions}`]:{flexShrink:0,marginLeft:20}}))),mn=R("div",{name:"MuiTablePagination",slot:"Spacer"})({flex:"1 1 100%"}),fn=R("p",{name:"MuiTablePagination",slot:"SelectLabel"})(W(({theme:e})=>({...e.typography.body2,flexShrink:0}))),vn=R(St,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>({[`& .${ve.selectIcon}`]:t.selectIcon,[`& .${ve.select}`]:t.select,...t.input,...t.selectRoot})})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${ve.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),yn=R(Z,{name:"MuiTablePagination",slot:"MenuItem"})({}),bn=R("p",{name:"MuiTablePagination",slot:"DisplayedRows"})(W(({theme:e})=>({...e.typography.body2,flexShrink:0})));function hn({from:e,to:t,count:n}){return`${e}–${t} of ${n!==-1?n:`more than ${t}`}`}function xn(e){return`Go to ${e} page`}const Sn=e=>{const{classes:t}=e;return _({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},cn,t)},Cn=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiTablePagination"}),{ActionsComponent:o=un,backIconButtonProps:i,colSpan:s,component:d=ee,count:l,disabled:u=!1,getItemAriaLabel:m=xn,labelDisplayedRows:f=hn,labelRowsPerPage:x="Rows per page:",nextIconButtonProps:c,onPageChange:y,onRowsPerPageChange:p,page:g,rowsPerPage:T,rowsPerPageOptions:h=[10,25,50,100],SelectProps:C={},showFirstButton:w=!1,showLastButton:k=!1,slotProps:z={},slots:q={},...I}=r,B=r,P=Sn(B),D=z?.select??C,M=D.native?"option":yn;let j;(d===ee||d==="td")&&(j=s||1e3);const E=Ie(D.id),V=Ie(D.labelId),A=()=>l===-1?(g+1)*T:T===-1?l:Math.min(l,(g+1)*T),N={slots:q,slotProps:z},[ne,ae]=U("root",{ref:n,className:P.root,elementType:pn,externalForwardedProps:{...N,component:d,...I},ownerState:B,additionalProps:{colSpan:j}}),[re,oe]=U("toolbar",{className:P.toolbar,elementType:gn,externalForwardedProps:N,ownerState:B}),[ue,ce]=U("spacer",{className:P.spacer,elementType:mn,externalForwardedProps:N,ownerState:B}),[pe,Q]=U("selectLabel",{className:P.selectLabel,elementType:fn,externalForwardedProps:N,ownerState:B,additionalProps:{id:V}}),[F,H]=U("select",{className:P.select,elementType:vn,externalForwardedProps:N,ownerState:B}),[at,rt]=U("menuItem",{className:P.menuItem,elementType:M,externalForwardedProps:N,ownerState:B}),[ot,it]=U("displayedRows",{className:P.displayedRows,elementType:bn,externalForwardedProps:N,ownerState:B});return a.jsx(ne,{...ae,children:a.jsxs(re,{...oe,children:[a.jsx(ue,{...ce}),h.length>1&&a.jsx(pe,{...Q,children:x}),h.length>1&&a.jsx(F,{variant:"standard",...!D.variant&&{input:Oe||(Oe=a.jsx(xt,{}))},value:T,onChange:p,id:E,labelId:V,...D,classes:{...D.classes,root:L(P.input,P.selectRoot,(D.classes||{}).root),select:L(P.select,(D.classes||{}).select),icon:L(P.selectIcon,(D.classes||{}).icon)},disabled:u,...H,children:h.map(Y=>v.createElement(at,{...rt,key:Y.label?Y.label:Y,value:Y.value?Y.value:Y},Y.label?Y.label:Y))}),a.jsx(ot,{...it,children:f({from:l===0?0:g*T+1,to:A(),count:l===-1?-1:l,page:g})}),a.jsx(o,{className:P.actions,backIconButtonProps:i,count:l,nextIconButtonProps:c,onPageChange:y,page:g,rowsPerPage:T,showFirstButton:w,showLastButton:k,slotProps:z.actions,slots:q.actions,getItemAriaLabel:m,disabled:u})]})})}),wn=O(a.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}));function kn(e){return J("MuiTableSortLabel",e)}const qe=G("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),qn=e=>{const{classes:t,direction:n,active:r}=e,o={root:["root",r&&"active",`direction${b(n)}`],icon:["icon",`iconDirection${b(n)}`]};return _(o,kn,t)},Tn=R(de,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})(W(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${qe.icon}`]:{opacity:.5}},[`&.${qe.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${qe.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}}))),In=R("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${b(n.direction)}`]]}})(W(({theme:e})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),Pn=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiTableSortLabel"}),{active:o=!1,children:i,className:s,direction:d="asc",hideSortIcon:l=!1,IconComponent:u=wn,slots:m={},slotProps:f={},...x}=r,c={...r,active:o,direction:d,hideSortIcon:l,IconComponent:u},y=qn(c),p={slots:m,slotProps:f},[g,T]=U("root",{elementType:Tn,externalForwardedProps:p,ownerState:c,className:L(y.root,s),ref:n}),[h,C]=U("icon",{elementType:In,externalForwardedProps:p,ownerState:c,className:y.icon});return a.jsxs(g,{disableRipple:!0,component:"span",...T,...x,children:[i,l&&!o?null:a.jsx(h,{as:u,...C})]})});function $n(e){return J("MuiToggleButton",e)}const te=G("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Ke=v.createContext({}),_e=v.createContext(void 0);function Bn(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const Rn=e=>{const{classes:t,fullWidth:n,selected:r,disabled:o,size:i,color:s}=e,d={root:["root",r&&"selected",o&&"disabled",n&&"fullWidth",`size${b(i)}`,s]};return _(d,$n,t)},zn=R(de,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`size${b(n.size)}`]]}})(W(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${te.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${te.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(se()).map(([t])=>({props:{color:t},style:{[`&.${te.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),Fn=v.forwardRef(function(t,n){const{value:r,...o}=v.useContext(Ke),i=v.useContext(_e),s=Qe({...o,selected:Bn(t.value,r)},t),d=K({props:s,name:"MuiToggleButton"}),{children:l,className:u,color:m="standard",disabled:f=!1,disableFocusRipple:x=!1,fullWidth:c=!1,onChange:y,onClick:p,selected:g,size:T="medium",value:h,...C}=d,w={...d,color:m,disabled:f,disableFocusRipple:x,fullWidth:c,size:T},k=Rn(w),z=I=>{p&&(p(I,h),I.defaultPrevented)||y&&y(I,h)},q=i||"";return a.jsx(zn,{className:L(o.className,k.root,u,q),disabled:f,focusRipple:!x,ref:n,onClick:z,onChange:y,value:h,ownerState:w,"aria-pressed":g,...C,children:l})});function jn(e){return J("MuiToggleButtonGroup",e)}const $=G("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Dn=e=>{const{classes:t,orientation:n,fullWidth:r,disabled:o}=e,i={root:["root",n,r&&"fullWidth"],grouped:["grouped",`grouped${b(n)}`,o&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return _(i,jn,t)},Ln=R("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${$.grouped}`]:t.grouped},{[`& .${$.grouped}`]:t[`grouped${b(n.orientation)}`]},{[`& .${$.firstButton}`]:t.firstButton},{[`& .${$.lastButton}`]:t.lastButton},{[`& .${$.middleButton}`]:t.middleButton},t.root,n.orientation==="vertical"&&t.vertical,n.fullWidth&&t.fullWidth]}})(W(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderTop:0,marginTop:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${$.lastButton}.${te.disabled},& .${$.middleButton}.${te.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${$.grouped}`]:{[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${$.firstButton},& .${$.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${$.lastButton},& .${$.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${$.lastButton}.${te.disabled},& .${$.middleButton}.${te.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),Mn=v.forwardRef(function(t,n){const r=K({props:t,name:"MuiToggleButtonGroup"}),{children:o,className:i,color:s="standard",disabled:d=!1,exclusive:l=!1,fullWidth:u=!1,onChange:m,orientation:f="horizontal",size:x="medium",value:c,...y}=r,p={...r,disabled:d,fullWidth:u,orientation:f,size:x},g=Dn(p),T=v.useCallback((q,I)=>{if(!m)return;const B=c&&c.indexOf(I);let P;c&&B>=0?(P=c.slice(),P.splice(B,1)):P=c?c.concat(I):[I],m(q,P)},[m,c]),h=v.useCallback((q,I)=>{m&&m(q,c===I?null:I)},[m,c]),C=v.useMemo(()=>({className:g.grouped,onChange:l?h:T,value:c,size:x,fullWidth:u,color:s,disabled:d}),[g.grouped,l,h,T,c,x,u,s,d]),w=Ht(o),k=w.length,z=q=>{const I=q===0,B=q===k-1;return I&&B?"":I?g.firstButton:B?g.lastButton:g.middleButton};return a.jsx(Ln,{role:"group",className:L(g.root,i),ref:n,ownerState:p,...y,children:a.jsx(Ke.Provider,{value:C,children:w.map((q,I)=>a.jsx(_e.Provider,{value:z(I),children:q},I))})})}),Je=({data:e,columns:t,loading:n,emptyMessage:r,sorting:o=[],onSortingChange:i,onRowClick:s,getRowId:d})=>{const l=Math.max(t.length,1),u=!n&&e.length===0,m=!!s,f=c=>{if(!i)return;const y=o.find(p=>p.id===c);y?y.desc?i([]):i([{id:c,desc:!0}]):i([{id:c,desc:!1}])},x=c=>{const y=o.find(p=>p.id===c);return y?y.desc?"desc":"asc":!1};return a.jsx(vt,{children:a.jsxs(yt,{size:"small","aria-busy":n,children:[a.jsx(bt,{sx:{backgroundColor:"grey.50"},children:a.jsx(ye,{children:t.map(c=>{const y=x(c.id),p=c.enableSorting&&i;return a.jsx(ee,{align:c.meta?.align,sortDirection:y,sx:{fontWeight:600,color:"text.secondary",width:c.meta?.width,minWidth:c.meta?.minWidth,maxWidth:c.meta?.maxWidth},children:p?a.jsx(Pn,{active:y!==!1,direction:y===!1?"asc":y,onClick:()=>f(c.id),children:c.header}):c.header},c.id)})})}),a.jsx(ht,{children:n?a.jsx(ye,{children:a.jsx(ee,{colSpan:l,children:a.jsxs(fe,{display:"flex",alignItems:"center",gap:1,py:2,children:[a.jsx(Ue,{size:20}),a.jsx(Se,{variant:"body2",children:"Loading"})]})})}):u?a.jsx(ye,{children:a.jsx(ee,{colSpan:l,children:a.jsx(Se,{variant:"body2",color:"text.secondary",py:2,children:r})})}):e.map((c,y)=>{const p=d?d(c,y):String(y);return a.jsx(ye,{hover:m,onClick:s?()=>s(c):void 0,sx:m?{cursor:"pointer"}:void 0,children:t.map(g=>{const T=g.accessorKey?c[g.accessorKey]:void 0,h=g.cell?g.cell(c):String(T??"");return a.jsx(ee,{align:g.meta?.align,sx:{width:g.meta?.width,minWidth:g.meta?.minWidth,maxWidth:g.meta?.maxWidth},children:h},g.id)})},p)})})]})})};Je.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"sorting"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:""},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""}}};const Ye=({pagination:e,onPaginationChange:t,rowCount:n,pageSizeOptions:r})=>a.jsx(Cn,{component:"div",count:n,page:e.pageIndex,onPageChange:(o,i)=>t(s=>({...s,pageIndex:i})),rowsPerPage:e.pageSize,onRowsPerPageChange:o=>{t(i=>({...i,pageIndex:0,pageSize:Number(o.target.value)}))},rowsPerPageOptions:r,labelDisplayedRows:({from:o,to:i,count:s,page:d})=>s===-1?`Page ${d+1}`:`${o}-${i} of ${s}`});Ye.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const An=O(a.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),Nn=O(a.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),On=O(a.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),Wn=O(a.jsx("path",{d:"M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"})),Vn=O(a.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Qn=O(a.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),Un=["eq"],Xe={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},Gn=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,En=(e,t)=>e.find(n=>n.name===t),$e=e=>e?.ops?.length?e.ops:Un,Te=(e,t,n)=>t==="isnull"||e?.type==="boolean"?n==="false"?"false":"true":n??"",We=(e,t)=>t?.options?.length?t.options.find(n=>n.value===e)?.label??e:e,Hn=(e,t)=>{const n=t?.label??e.field,r=(e.value??"").trim();if(e.op==="isnull")return`${n} ${r!=="false"?"is null":"is not null"}`;if(!r)return"";const o=Xe[e.op]??e.op;if(e.op==="in"){const l=r.split(",").map(u=>u.trim()).filter(Boolean).map(u=>We(u,t)).join(", ");return`${n} ${o} (${l})`}const i=We(r,t),d=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${i}"`:i;return`${n} ${o} ${d}`},Kn=(e,t)=>{if(!e.length)return"";const n=new Map(t.map(r=>[r.name,r]));return e.map(r=>Hn(r,n.get(r.field))).filter(Boolean).join(" AND ")},_n=({filter:e,fields:t,fieldMap:n,onFieldChange:r,onOpChange:o,onValueChange:i,onRemove:s})=>{const d=n.get(e.field),l=$e(d),u=e.op==="in"?"Values":"Value",m=d?.type==="number"?"number":d?.type==="date"?"date":d?.type==="datetime"?"datetime-local":"text",f=d?.type==="date"||d?.type==="datetime",x=d?.placeholder??(e.op==="in"?"Comma-separated values":void 0),c=d?.options??[],y=c.length>0&&(e.op==="eq"||e.op==="neq");return a.jsxs(Pe,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"stretch",sm:"center"},children:[a.jsx(ie,{select:!0,size:"small",label:"Field",value:e.field,onChange:p=>r(e.id,p.target.value),sx:{minWidth:160},children:t.map(p=>a.jsx(Z,{value:p.name,children:p.label},p.name))}),a.jsx(Mn,{exclusive:!0,size:"small",color:"primary",value:e.op,onChange:(p,g)=>{g!==null&&o(e.id,g)},sx:{minWidth:150,alignSelf:"center"},children:l.map(p=>a.jsx(Fn,{value:p,children:Xe[p]??p},p))}),e.op==="isnull"?a.jsxs(ie,{select:!0,size:"small",label:"Null state",value:e.value??"true",onChange:p=>i(e.id,p.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(Z,{value:"true",children:"Is null"}),a.jsx(Z,{value:"false",children:"Is not null"})]}):y?a.jsx(ie,{select:!0,size:"small",label:u,value:e.value??"",onChange:p=>i(e.id,p.target.value),sx:{minWidth:160,flex:1},children:c.map(p=>a.jsx(Z,{value:p.value,children:p.label},p.value))}):d?.type==="boolean"?a.jsxs(ie,{select:!0,size:"small",label:u,value:e.value??"true",onChange:p=>i(e.id,p.target.value),sx:{minWidth:160,flex:1},children:[a.jsx(Z,{value:"true",children:"True"}),a.jsx(Z,{value:"false",children:"False"})]}):a.jsx(ie,{size:"small",type:m,label:u,value:e.value??"",onChange:p=>i(e.id,p.target.value),placeholder:x,InputLabelProps:f?{shrink:!0}:void 0,sx:{minWidth:160,flex:1}}),a.jsx(le,{size:"small","aria-label":"Remove filter",onClick:()=>s(e.id),children:a.jsx(On,{fontSize:"small"})})]})},Ze=({queryBuilder:e})=>{const[t,n]=v.useState(null),r=!!t,o=t?.clientWidth??560,{fields:i,filters:s,onFiltersChange:d,placeholder:l,summaryFormatter:u}=e,m=v.useMemo(()=>new Map(i.map(C=>[C.name,C])),[i]),f=v.useMemo(()=>s.length?u?u(s,i):Kn(s,i):"",[s,i,u]),x=C=>{n(C.currentTarget)},c=()=>{n(null)},y=()=>{if(i.length===0)return;const C=i[0],k=$e(C)[0]??"eq",z=Te(C,k);d([...s,{id:Gn(),field:C.name,op:k,value:z}])},p=C=>{d(s.filter(w=>w.id!==C))},g=(C,w)=>{const k=En(i,w);if(!k)return;const z=$e(k);d(s.map(q=>{if(q.id!==C)return q;const I=z.includes(q.op)?q.op:z[0]??"eq",B=Te(k,I,q.value);return{...q,field:k.name,op:I,value:B}}))},T=(C,w)=>{d(s.map(k=>{if(k.id!==C)return k;const z=m.get(k.field),q=Te(z,w,k.value);return{...k,op:w,value:q}}))},h=(C,w)=>{d(s.map(k=>k.id===C?{...k,value:w}:k))};return a.jsxs(a.Fragment,{children:[a.jsx(fe,{sx:{borderBottom:"1px solid",borderColor:"divider",px:2,py:1.5},children:a.jsx(ie,{fullWidth:!0,size:"small",placeholder:l??"Add filters",value:f,onClick:x,onFocus:x,InputProps:{readOnly:!0,startAdornment:a.jsx(Fe,{position:"start",children:a.jsx(Wn,{fontSize:"small"})}),endAdornment:a.jsx(Fe,{position:"end",children:r?a.jsx(Qn,{}):a.jsx(Vn,{})})},inputProps:{"aria-label":"Filter query"},sx:{"& .MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{cursor:"pointer",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})}),a.jsx(Ct,{open:r,anchorEl:t,onClose:c,disableRestoreFocus:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:o,maxWidth:"calc(100vw - 32px)",p:2}}},children:a.jsx(fe,{sx:{maxHeight:"60vh",overflowY:"auto"},children:a.jsxs(Pe,{spacing:2,children:[a.jsxs(fe,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,children:[a.jsx(Se,{variant:"subtitle2",children:"Filters"}),a.jsxs(fe,{display:"flex",alignItems:"center",gap:1,children:[a.jsx(Et,{size:"small",startIcon:a.jsx(An,{fontSize:"small"}),onClick:y,disabled:i.length===0,children:"Add filter"}),a.jsx(le,{size:"small","aria-label":"Close filters",onClick:c,children:a.jsx(Nn,{fontSize:"small"})})]})]}),s.length===0?a.jsx(Se,{variant:"body2",color:"text.secondary",children:"No filters yet."}):a.jsx(Pe,{spacing:1.5,children:s.map(C=>a.jsx(_n,{filter:C,fields:i,fieldMap:m,onFieldChange:g,onOpChange:T,onValueChange:h,onRemove:p},C.id))})]})})})]})};Ze.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
@param fields - Available fields`}]}},description:""}}};const Ve=[10,25,50];function we({data:e,columns:t,getRowId:n,pagination:r,onPaginationChange:o,sorting:i,onSortingChange:s,rowCount:d,loading:l=!1,emptyMessage:u="No data available",pageSizeOptions:m=Ve,onRowClick:f,query:x}){const c=v.useMemo(()=>m.length?m:Ve,[m]),y=d??e.length;return a.jsxs(kt,{variant:"outlined",children:[x?a.jsx(Ze,{queryBuilder:x}):null,a.jsx(Je,{data:e,columns:t,loading:l,emptyMessage:u,sorting:i,onSortingChange:s,onRowClick:f,getRowId:n}),a.jsx(Ye,{pagination:r,onPaginationChange:o,rowCount:y,pageSizeOptions:c})]})}we.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"}}};const et=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>a.jsx(Mt,{label:e.status,color:e.status==="Active"?"success":"default",size:"small"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],tt=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],Jn=e=>Array.from({length:e}).map((t,n)=>({id:String(n+1),name:`Item ${n+1}`,status:n%3===0?"Archived":n%2===0?"Active":"Inactive",createdAt:new Date(2024,0,n+1).toISOString()})),Ce=Jn(48),Yn={pageIndex:0,pageSize:10},Xn=(e={})=>{const{initialPagination:t={},initialSorting:n=[],initialFilters:r=[]}=e,o={...Yn,...t},[i,s]=v.useState(o),[d,l]=v.useState(n),[u,m]=v.useState(r),f=()=>{s(o)},x=()=>{l(n)},c=()=>{m(r)};return{pagination:i,onPaginationChange:s,sorting:d,onSortingChange:l,filters:u,onFiltersChange:m,resetPagination:f,resetSorting:x,resetFilters:c,resetAll:()=>{f(),x(),c()}}},nt=(e,t)=>t.length?[...e].sort((n,r)=>{for(const o of t){const i=o.id,s=n[i],d=r[i];if(s===d)continue;const l=o.desc?-1:1,u=typeof s=="string"?s.toLowerCase():s,m=typeof d=="string"?d.toLowerCase():d;return u==null?1*l:m==null?-1*l:u>m?l:-l}return 0}):e,Be=(e=[],t=!1)=>(n,r)=>{const[o,i]=v.useState({pageIndex:0,pageSize:10}),[s,d]=v.useState(e),[l,u]=v.useState([]),m=v.useMemo(()=>nt(Ce,s),[s]),f=v.useMemo(()=>m.slice(o.pageIndex*o.pageSize,o.pageIndex*o.pageSize+o.pageSize),[o.pageIndex,o.pageSize,m]);return a.jsx(we,{...r.args,data:f,columns:et,rowCount:Ce.length,pagination:o,onPaginationChange:i,sorting:s,onSortingChange:d,query:t?{fields:tt,filters:l,onFiltersChange:u,placeholder:"Filter items..."}:void 0})},Ra={title:"Tables/RemoteDataTable",component:we,decorators:[ft()],parameters:{layout:"fullscreen"}},be={args:{pageSizeOptions:[5,10,25]},decorators:[Be()]},he={args:{pageSizeOptions:[5,10,25]},decorators:[Be([{id:"createdAt",desc:!0}])]},xe={args:{pageSizeOptions:[5,10,25]},decorators:[Be([],!0)]},me={render:()=>{const e=Xn({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),t=v.useMemo(()=>nt(Ce,e.sorting),[e.sorting]),n=v.useMemo(()=>t.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,t]);return a.jsx(we,{data:n,columns:et,rowCount:Ce.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:tt,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState()]
}`,...be.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([{
    id: "createdAt",
    desc: true
  }])]
}`,...he.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([], true)]
}`,...xe.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
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
}`,...me.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...me.parameters?.docs?.description}}};const za=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{be as Default,he as SortedByCreatedDate,me as UsingHook,xe as WithQueryBuilder,za as __namedExportsOrder,Ra as default};
