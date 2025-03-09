import{r as d}from"./index-CFahbR6w.js";import{g as G,a as J,c as $}from"./generateUtilityClasses-F-VSJTCv.js";import{c as Q,B as T}from"./Typography-ByJtF3w8.js";import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{s as j,a as X,m as Y}from"./memoTheme-DEu9pJpV.js";import{u as Z,c as y}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{u as _}from"./DefaultPropsProvider-CoDhPOBZ.js";import{c as r,a as p}from"./identifier-CAo-jtr-.js";const h=Q(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function aa(a){return J("MuiChip",a)}const e=G("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),oa=a=>{const{classes:l,disabled:o,size:t,color:i,iconColor:g,onDelete:v,clickable:c,variant:s}=a,C={root:["root",s,o&&"disabled",`size${r(t)}`,`color${r(i)}`,c&&"clickable",c&&`clickableColor${r(i)}`,v&&"deletable",v&&`deletableColor${r(i)}`,`${s}${r(i)}`],label:["label",`label${r(t)}`],avatar:["avatar",`avatar${r(t)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(t)}`,`iconColor${r(g)}`],deleteIcon:["deleteIcon",`deleteIcon${r(t)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(s)}Color${r(i)}`]};return X(C,aa,l)},ea=j("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,l)=>{const{ownerState:o}=a,{color:t,iconColor:i,clickable:g,onDelete:v,size:c,variant:s}=o;return[{[`& .${e.avatar}`]:l.avatar},{[`& .${e.avatar}`]:l[`avatar${r(c)}`]},{[`& .${e.avatar}`]:l[`avatarColor${r(t)}`]},{[`& .${e.icon}`]:l.icon},{[`& .${e.icon}`]:l[`icon${r(c)}`]},{[`& .${e.icon}`]:l[`iconColor${r(i)}`]},{[`& .${e.deleteIcon}`]:l.deleteIcon},{[`& .${e.deleteIcon}`]:l[`deleteIcon${r(c)}`]},{[`& .${e.deleteIcon}`]:l[`deleteIconColor${r(t)}`]},{[`& .${e.deleteIcon}`]:l[`deleteIcon${r(s)}Color${r(t)}`]},l.root,l[`size${r(c)}`],l[`color${r(t)}`],g&&l.clickable,g&&t!=="default"&&l[`clickableColor${r(t)})`],v&&l.deletable,v&&t!=="default"&&l[`deletableColor${r(t)}`],l[s],l[`${s}${r(t)}`]]}})(Y(({theme:a})=>{const l=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${e.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${e.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:l,fontSize:a.typography.pxToRem(12)},[`& .${e.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${e.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${e.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${e.icon}`]:{marginLeft:5,marginRight:-6},[`& .${e.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:p(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:p(a.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${e.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${e.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(a.palette).filter(y(["contrastText"])).map(([o])=>({props:{color:o},style:{backgroundColor:(a.vars||a).palette[o].main,color:(a.vars||a).palette[o].contrastText,[`& .${e.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o].contrastTextChannel} / 0.7)`:p(a.palette[o].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o].contrastText}}}})),{props:o=>o.iconColor===o.color,style:{[`& .${e.icon}`]:{color:a.vars?a.vars.palette.Chip.defaultIconColor:l}}},{props:o=>o.iconColor===o.color&&o.color!=="default",style:{[`& .${e.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}}},...Object.entries(a.palette).filter(y(["dark"])).map(([o])=>({props:{color:o,onDelete:!0},style:{[`&.${e.focusVisible}`]:{background:(a.vars||a).palette[o].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}}},...Object.entries(a.palette).filter(y(["dark"])).map(([o])=>({props:{color:o,clickable:!0},style:{[`&:hover, &.${e.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${e.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${e.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${e.avatar}`]:{marginLeft:4},[`& .${e.avatarSmall}`]:{marginLeft:2},[`& .${e.icon}`]:{marginLeft:4},[`& .${e.iconSmall}`]:{marginLeft:2},[`& .${e.deleteIcon}`]:{marginRight:5},[`& .${e.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(a.palette).filter(y()).map(([o])=>({props:{variant:"outlined",color:o},style:{color:(a.vars||a).palette[o].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o].mainChannel} / 0.7)`:p(a.palette[o].main,.7)}`,[`&.${e.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[o].main,a.palette.action.hoverOpacity)},[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.focusOpacity})`:p(a.palette[o].main,a.palette.action.focusOpacity)},[`& .${e.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o].mainChannel} / 0.7)`:p(a.palette[o].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o].main}}}}))]}})),la=j("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,l)=>{const{ownerState:o}=a,{size:t}=o;return[l.label,l[`label${r(t)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function V(a){return a.key==="Backspace"||a.key==="Delete"}const va=d.forwardRef(function(l,o){const t=_({props:l,name:"MuiChip"}),{avatar:i,className:g,clickable:v,color:c="default",component:s,deleteIcon:C,disabled:I=!1,icon:f,label:E,onClick:R,onDelete:u,onKeyDown:O,onKeyUp:z,size:M="medium",variant:N="filled",tabIndex:F,skipFocusWhenDisabled:K=!1,...U}=t,B=d.useRef(null),W=Z(B,o),P=n=>{n.stopPropagation(),u&&u(n)},A=n=>{n.currentTarget===n.target&&V(n)&&n.preventDefault(),O&&O(n)},H=n=>{n.currentTarget===n.target&&u&&V(n)&&u(n),z&&z(n)},x=v!==!1&&R?!0:v,S=x||u?T:s||"div",m={...t,component:S,disabled:I,size:M,color:c,iconColor:d.isValidElement(f)&&f.props.color||c,onDelete:!!u,clickable:x,variant:N},b=oa(m),q=S===T?{component:s||"div",focusVisibleClassName:b.focusVisible,...u&&{disableRipple:!0}}:{};let w=null;u&&(w=C&&d.isValidElement(C)?d.cloneElement(C,{className:$(C.props.className,b.deleteIcon),onClick:P}):k.jsx(h,{className:$(b.deleteIcon),onClick:P}));let D=null;i&&d.isValidElement(i)&&(D=d.cloneElement(i,{className:$(b.avatar,i.props.className)}));let L=null;return f&&d.isValidElement(f)&&(L=d.cloneElement(f,{className:$(b.icon,f.props.className)})),k.jsxs(ea,{as:S,className:$(b.root,g),disabled:x&&I?!0:void 0,onClick:R,onKeyDown:A,onKeyUp:H,ref:W,tabIndex:K&&I?-1:F,ownerState:m,...q,...U,children:[D||L,k.jsx(la,{className:$(b.label),ownerState:m,children:E}),w]})});export{va as C};
