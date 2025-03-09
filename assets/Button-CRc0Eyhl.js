import{r as x}from"./index-CFahbR6w.js";import{g as D,a as H,c as W}from"./generateUtilityClasses-F-VSJTCv.js";import{s as y,a as A,r as q,m as J}from"./memoTheme-DEu9pJpV.js";import{c as K}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q,u as X}from"./DefaultPropsProvider-CoDhPOBZ.js";import{u as Y,C as Z}from"./CircularProgress-8aVj90tP.js";import{c as i,a as v}from"./identifier-CAo-jtr-.js";import{B as _}from"./Typography-ByJtF3w8.js";function oo(o){return H("MuiButton",o)}const d=D("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),ao=x.createContext({}),to=x.createContext(void 0),no=o=>{const{color:a,disableElevation:t,fullWidth:n,size:p,variant:c,loading:u,loadingPosition:S,classes:b}=o,f={root:["root",u&&"loading",c,`${c}${i(a)}`,`size${i(p)}`,`${c}Size${i(p)}`,`color${i(a)}`,t&&"disableElevation",n&&"fullWidth",u&&`loadingPosition${i(S)}`],startIcon:["icon","startIcon",`iconSize${i(p)}`],endIcon:["icon","endIcon",`iconSize${i(p)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},z=A(f,oo,b);return{...b,...z}},L=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],io=y(_,{shouldForwardProp:o=>q(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`${t.variant}${i(t.color)}`],a[`size${i(t.size)}`],a[`${t.variant}Size${i(t.size)}`],t.color==="inherit"&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth,t.loading&&a.loading]}})(J(({theme:o})=>{const a=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],t=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${d.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${d.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${d.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${d.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter(K()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(o.vars||o).palette[n].main,"--variant-outlinedColor":(o.vars||o).palette[n].main,"--variant-outlinedBorder":o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:v(o.palette[n].main,.5),"--variant-containedColor":(o.vars||o).palette[n].contrastText,"--variant-containedBg":(o.vars||o).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[n].dark,"--variant-textBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[n].main,o.palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[n].main,"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[n].main,o.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:a,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity),"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${d.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${d.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${d.loading}`]:{color:"transparent"}}}]}})),ro=y("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.startIcon,t.loading&&a.startIconLoadingStart,a[`iconSize${i(t.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...L]})),eo=y("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.endIcon,t.loading&&a.endIconLoadingEnd,a[`iconSize${i(t.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...L]})),so=y("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(o,a)=>a.loadingIndicator})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),E=y("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(o,a)=>a.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),fo=x.forwardRef(function(a,t){const n=x.useContext(ao),p=x.useContext(to),c=Q(n,a),u=X({props:c,name:"MuiButton"}),{children:S,color:b="primary",component:f="button",className:z,disabled:I=!1,disableElevation:M=!1,disableFocusRipple:C=!1,endIcon:B,focusVisibleClassName:N,fullWidth:k=!1,id:P,loading:s=null,loadingIndicator:j,loadingPosition:g="center",size:O="medium",startIcon:h,type:$,variant:T="text",...V}=u,m=Y(P),w=j??e.jsx(Z,{"aria-labelledby":m,color:"inherit",size:16}),l={...u,color:b,component:f,disabled:I,disableElevation:M,disableFocusRipple:C,fullWidth:k,loading:s,loadingIndicator:w,loadingPosition:g,size:O,type:$,variant:T},r=no(l),F=(h||s&&g==="start")&&e.jsx(ro,{className:r.startIcon,ownerState:l,children:h||e.jsx(E,{className:r.loadingIconPlaceholder,ownerState:l})}),U=(B||s&&g==="end")&&e.jsx(eo,{className:r.endIcon,ownerState:l,children:B||e.jsx(E,{className:r.loadingIconPlaceholder,ownerState:l})}),G=p||"",R=typeof s=="boolean"?e.jsx("span",{className:r.loadingWrapper,style:{display:"contents"},children:s&&e.jsx(so,{className:r.loadingIndicator,ownerState:l,children:w})}):null;return e.jsxs(io,{ownerState:l,className:W(n.className,r.root,z,G),component:f,disabled:I||s,focusRipple:!C,focusVisibleClassName:W(r.focusVisible,N),ref:t,type:$,id:s?m:P,...V,classes:r,children:[F,g!=="end"&&R,S,g==="end"&&R,U]})});export{fo as B};
