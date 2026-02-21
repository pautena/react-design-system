import{r as h,A as Ee,j as n,i as L,P as we,Q as he,S as He,I as Ke,U as _e,v as Ye,V as Ce,f as G,x as Je,m as ke,k as W,t as Xe}from"./iframe-DoHxLgiQ.js";import{b as Ze}from"./storybook-DGVocXMz.js";import{d as O,T as et,a as tt,b as nt,c as ae,e as at}from"./TableRow-DOHDh3Mz.js";import{c as M,g as Z,m as $,B as Ie,b as rt,T as le}from"./Typography-CCBxMdr1.js";import{a as E,g as H,s as I}from"./styled-CxtL0g1W.js";import{u as z}from"./useSlot-DB0NX2DN.js";import{B as J}from"./Box-DeYITPa_.js";import{C as it}from"./CircularProgress-i2TneyIi.js";import{a as ot,K as lt}from"./KeyboardArrowRight-xYBhAxFV.js";import{I as V}from"./IconButton-B0-Pj2Aa.js";import{c as st}from"./OutlinedInput-BMSBcagh.js";import{M as N}from"./MenuItem-DaKgdrmq.js";import{T as ut}from"./Toolbar-CUSfDf9i.js";import{S as dt}from"./Select-DoIcFD0R.js";import{C as ct}from"./Close-D2YMgNeB.js";import{T as U}from"./TextField-BhZ53PAg.js";import{I as Te}from"./InputAdornment-DykIHgDK.js";import{a as pt}from"./Popover-DJv9YPkp.js";import{s as mt}from"./styled-CrWtcJlt.js";import{u as gt}from"./useThemeProps-CnABTLmb.js";import{B as ft}from"./Button-B2xgUCVd.js";import{P as yt}from"./Paper-CAEioaFg.js";import{C as ht}from"./Chip-C0PqPN6r.js";import"./preload-helper-PPVm8Dsz.js";import"./NotificationCenter.provider-BPzvgZ7t.js";import"./useTheme-ydX2sAJM.js";import"./Grow-MYIRJLP-.js";import"./index-Bo9E3z2s.js";import"./index-BpLgNbkB.js";import"./isMuiElement-BuNBpJbu.js";import"./ownerWindow-BkcPlWvC.js";import"./debounce-Be36O1Ab.js";import"./List-86bk7WH3.js";import"./listItemIconClasses-BI8jhfnF.js";import"./listItemTextClasses-DcZqL5dc.js";import"./dividerClasses-BYOM_NOd.js";import"./useSlotProps-UeKhi40w.js";import"./Modal-C246L5VF.js";import"./Portal-CWQuSn0Q.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-BQHmylbG.js";import"./useControlled-CiU39CtI.js";import"./ArrowDropDown-BmyWtaG-.js";import"./FormHelperText-B4tTEN4S.js";const vt=Ye(),bt=mt("div",{name:"MuiStack",slot:"Root"});function xt(e){return gt({props:e,name:"MuiStack",defaultTheme:vt})}function qt(e,t){const a=h.Children.toArray(e).filter(Boolean);return a.reduce((i,l,r)=>(i.push(l),r<a.length-1&&i.push(h.cloneElement(t,{key:`separator-${r}`})),i),[])}const St=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],wt=({ownerState:e,theme:t})=>{let a={display:"flex",flexDirection:"column",...we({theme:t},he({values:e.direction,breakpoints:t.breakpoints.values}),i=>({flexDirection:i}))};if(e.spacing){const i=He(t),l=Object.keys(t.breakpoints.values).reduce((o,m)=>((typeof e.spacing=="object"&&e.spacing[m]!=null||typeof e.direction=="object"&&e.direction[m]!=null)&&(o[m]=!0),o),{}),r=he({values:e.direction,base:l}),s=he({values:e.spacing,base:l});typeof r=="object"&&Object.keys(r).forEach((o,m,g)=>{if(!r[o]){const v=m>0?r[g[m-1]]:"column";r[o]=v}}),a=Ke(a,we({theme:t},s,(o,m)=>e.useFlexGap?{gap:Ce(i,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${St(m?r[m]:e.direction)}`]:Ce(i,o)}}))}return a=_e(t.breakpoints,a),a};function Ct(e={}){const{createStyledComponent:t=bt,useThemeProps:a=xt,componentName:i="MuiStack"}=e,l=()=>E({root:["root"]},o=>H(i,o),{}),r=t(wt);return h.forwardRef(function(o,m){const g=a(o),f=Ee(g),{component:v="div",direction:d="column",spacing:y=0,divider:c,children:p,className:k,useFlexGap:b=!1,...x}=f,T={direction:d,spacing:y,useFlexGap:b},q=l();return n.jsx(r,{as:v,ownerState:T,ref:m,className:L(q.root,k),...x,children:c?qt(p,c):p})})}function kt(e){return h.Children.toArray(e).filter(t=>h.isValidElement(t))}const Tt=M(n.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),Ft=M(n.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),xe=Ct({createStyledComponent:I("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>G({props:e,name:"MuiStack"})});function Bt(e){return H("MuiTablePaginationActions",e)}Z("MuiTablePaginationActions",["root"]);const jt=e=>{const{classes:t}=e;return E({root:["root"]},Bt,t)},It=I("div",{name:"MuiTablePaginationActions",slot:"Root"})({}),Pt=h.forwardRef(function(t,a){const i=G({props:t,name:"MuiTablePaginationActions"}),{backIconButtonProps:l,className:r,count:s,disabled:u=!1,getItemAriaLabel:o,nextIconButtonProps:m,onPageChange:g,page:f,rowsPerPage:v,showFirstButton:d,showLastButton:y,slots:c={},slotProps:p={},...k}=i,b=Je(),T=jt(i),q=D=>{g(D,0)},j=D=>{g(D,f-1)},w=D=>{g(D,f+1)},C=D=>{g(D,Math.max(0,Math.ceil(s/v)-1))},B=c.firstButton??V,F=c.lastButton??V,P=c.nextButton??V,ee=c.previousButton??V,K=c.firstButtonIcon??Tt,te=c.lastButtonIcon??Ft,_=c.nextButtonIcon??ot,ne=c.previousButtonIcon??lt,R=b?F:B,de=b?P:ee,ce=b?ee:P,pe=b?B:F,me=b?p.lastButton:p.firstButton,ge=b?p.nextButton:p.previousButton,fe=b?p.previousButton:p.nextButton,ye=b?p.firstButton:p.lastButton;return n.jsxs(It,{ref:a,className:L(T.root,r),...k,children:[d&&n.jsx(R,{onClick:q,disabled:u||f===0,"aria-label":o("first",f),title:o("first",f),...me,children:b?n.jsx(te,{...p.lastButtonIcon}):n.jsx(K,{...p.firstButtonIcon})}),n.jsx(de,{onClick:j,disabled:u||f===0,color:"inherit","aria-label":o("previous",f),title:o("previous",f),...ge??l,children:b?n.jsx(_,{...p.nextButtonIcon}):n.jsx(ne,{...p.previousButtonIcon})}),n.jsx(ce,{onClick:w,disabled:u||(s!==-1?f>=Math.ceil(s/v)-1:!1),color:"inherit","aria-label":o("next",f),title:o("next",f),...fe??m,children:b?n.jsx(ne,{...p.previousButtonIcon}):n.jsx(_,{...p.nextButtonIcon})}),y&&n.jsx(pe,{onClick:C,disabled:u||f>=Math.ceil(s/v)-1,"aria-label":o("last",f),title:o("last",f),...ye,children:b?n.jsx(K,{...p.firstButtonIcon}):n.jsx(te,{...p.lastButtonIcon})})]})});function Rt(e){return H("MuiTablePagination",e)}const X=Z("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Fe;const Dt=I(O,{name:"MuiTablePagination",slot:"Root"})($(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}}))),At=I(ut,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>({[`& .${X.actions}`]:t.actions,...t.toolbar})})($(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${X.actions}`]:{flexShrink:0,marginLeft:20}}))),zt=I("div",{name:"MuiTablePagination",slot:"Spacer"})({flex:"1 1 100%"}),Lt=I("p",{name:"MuiTablePagination",slot:"SelectLabel"})($(({theme:e})=>({...e.typography.body2,flexShrink:0}))),Mt=I(dt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>({[`& .${X.selectIcon}`]:t.selectIcon,[`& .${X.select}`]:t.select,...t.input,...t.selectRoot})})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${X.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),$t=I(N,{name:"MuiTablePagination",slot:"MenuItem"})({}),Nt=I("p",{name:"MuiTablePagination",slot:"DisplayedRows"})($(({theme:e})=>({...e.typography.body2,flexShrink:0})));function Ot({from:e,to:t,count:a}){return`${e}–${t} of ${a!==-1?a:`more than ${t}`}`}function Qt(e){return`Go to ${e} page`}const Wt=e=>{const{classes:t}=e;return E({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},Rt,t)},Ut=h.forwardRef(function(t,a){const i=G({props:t,name:"MuiTablePagination"}),{ActionsComponent:l=Pt,backIconButtonProps:r,colSpan:s,component:u=O,count:o,disabled:m=!1,getItemAriaLabel:g=Qt,labelDisplayedRows:f=Ot,labelRowsPerPage:v="Rows per page:",nextIconButtonProps:d,onPageChange:y,onRowsPerPageChange:c,page:p,rowsPerPage:k,rowsPerPageOptions:b=[10,25,50,100],SelectProps:x={},showFirstButton:T=!1,showLastButton:q=!1,slotProps:j={},slots:w={},...C}=i,B=i,F=Wt(B),P=j?.select??x,ee=P.native?"option":$t;let K;(u===O||u==="td")&&(K=s||1e3);const te=ke(P.id),_=ke(P.labelId),ne=()=>o===-1?(p+1)*k:k===-1?o:Math.min(o,(p+1)*k),R={slots:w,slotProps:j},[de,ce]=z("root",{ref:a,className:F.root,elementType:Dt,externalForwardedProps:{...R,component:u,...C},ownerState:B,additionalProps:{colSpan:K}}),[pe,me]=z("toolbar",{className:F.toolbar,elementType:At,externalForwardedProps:R,ownerState:B}),[ge,fe]=z("spacer",{className:F.spacer,elementType:zt,externalForwardedProps:R,ownerState:B}),[ye,D]=z("selectLabel",{className:F.selectLabel,elementType:Lt,externalForwardedProps:R,ownerState:B,additionalProps:{id:_}}),[Oe,Qe]=z("select",{className:F.select,elementType:Mt,externalForwardedProps:R,ownerState:B}),[We,Ue]=z("menuItem",{className:F.menuItem,elementType:ee,externalForwardedProps:R,ownerState:B}),[Ve,Ge]=z("displayedRows",{className:F.displayedRows,elementType:Nt,externalForwardedProps:R,ownerState:B});return n.jsx(de,{...ce,children:n.jsxs(pe,{...me,children:[n.jsx(ge,{...fe}),b.length>1&&n.jsx(ye,{...D,children:v}),b.length>1&&n.jsx(Oe,{variant:"standard",...!P.variant&&{input:Fe||(Fe=n.jsx(st,{}))},value:k,onChange:c,id:te,labelId:_,...P,classes:{...P.classes,root:L(F.input,F.selectRoot,(P.classes||{}).root),select:L(F.select,(P.classes||{}).select),icon:L(F.selectIcon,(P.classes||{}).icon)},disabled:m,...Qe,children:b.map(A=>h.createElement(We,{...Ue,key:A.label?A.label:A,value:A.value?A.value:A},A.label?A.label:A))}),n.jsx(Ve,{...Ge,children:f({from:o===0?0:p*k+1,to:ne(),count:o===-1?-1:o,page:p})}),n.jsx(l,{className:F.actions,backIconButtonProps:r,count:o,nextIconButtonProps:d,onPageChange:y,page:p,rowsPerPage:k,showFirstButton:T,showLastButton:q,slotProps:j.actions,slots:w.actions,getItemAriaLabel:g,disabled:m})]})})}),Vt=M(n.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}));function Gt(e){return H("MuiTableSortLabel",e)}const ve=Z("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),Et=e=>{const{classes:t,direction:a,active:i}=e,l={root:["root",i&&"active",`direction${W(a)}`],icon:["icon",`iconDirection${W(a)}`]};return E(l,Gt,t)},Ht=I(Ie,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.active&&t.active]}})($(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${ve.icon}`]:{opacity:.5}},[`&.${ve.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${ve.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}}))),Kt=I("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.icon,t[`iconDirection${W(a.direction)}`]]}})($(({theme:e})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),_t=h.forwardRef(function(t,a){const i=G({props:t,name:"MuiTableSortLabel"}),{active:l=!1,children:r,className:s,direction:u="asc",hideSortIcon:o=!1,IconComponent:m=Vt,slots:g={},slotProps:f={},...v}=i,d={...i,active:l,direction:u,hideSortIcon:o,IconComponent:m},y=Et(d),c={slots:g,slotProps:f},[p,k]=z("root",{elementType:Ht,externalForwardedProps:c,ownerState:d,className:L(y.root,s),ref:a}),[b,x]=z("icon",{elementType:Kt,externalForwardedProps:c,ownerState:d,className:y.icon});return n.jsxs(p,{disableRipple:!0,component:"span",...k,...v,children:[r,o&&!l?null:n.jsx(b,{as:m,...x})]})});function Yt(e){return H("MuiToggleButton",e)}const Q=Z("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Pe=h.createContext({}),Re=h.createContext(void 0);function Jt(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const Xt=e=>{const{classes:t,fullWidth:a,selected:i,disabled:l,size:r,color:s}=e,u={root:["root",i&&"selected",l&&"disabled",a&&"fullWidth",`size${W(r)}`,s]};return E(u,Yt,t)},Zt=I(Ie,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`size${W(a.size)}`]]}})($(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${Q.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${Q.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(rt()).map(([t])=>({props:{color:t},style:{[`&.${Q.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),en=h.forwardRef(function(t,a){const{value:i,...l}=h.useContext(Pe),r=h.useContext(Re),s=Xe({...l,selected:Jt(t.value,i)},t),u=G({props:s,name:"MuiToggleButton"}),{children:o,className:m,color:g="standard",disabled:f=!1,disableFocusRipple:v=!1,fullWidth:d=!1,onChange:y,onClick:c,selected:p,size:k="medium",value:b,...x}=u,T={...u,color:g,disabled:f,disableFocusRipple:v,fullWidth:d,size:k},q=Xt(T),j=C=>{c&&(c(C,b),C.defaultPrevented)||y&&y(C,b)},w=r||"";return n.jsx(Zt,{className:L(l.className,q.root,m,w),disabled:f,focusRipple:!v,ref:a,onClick:j,onChange:y,value:b,ownerState:T,"aria-pressed":p,...x,children:o})});function tn(e){return H("MuiToggleButtonGroup",e)}const S=Z("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),nn=e=>{const{classes:t,orientation:a,fullWidth:i,disabled:l}=e,r={root:["root",a,i&&"fullWidth"],grouped:["grouped",`grouped${W(a)}`,l&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return E(r,tn,t)},an=I("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${S.grouped}`]:t.grouped},{[`& .${S.grouped}`]:t[`grouped${W(a.orientation)}`]},{[`& .${S.firstButton}`]:t.firstButton},{[`& .${S.lastButton}`]:t.lastButton},{[`& .${S.middleButton}`]:t.middleButton},t.root,a.orientation==="vertical"&&t.vertical,a.fullWidth&&t.fullWidth]}})($(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${S.grouped}`]:{[`&.${S.selected} + .${S.grouped}.${S.selected}`]:{borderTop:0,marginTop:0}},[`& .${S.firstButton},& .${S.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${S.lastButton},& .${S.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${S.lastButton}.${Q.disabled},& .${S.middleButton}.${Q.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${S.grouped}`]:{[`&.${S.selected} + .${S.grouped}.${S.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${S.firstButton},& .${S.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${S.lastButton},& .${S.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${S.lastButton}.${Q.disabled},& .${S.middleButton}.${Q.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),rn=h.forwardRef(function(t,a){const i=G({props:t,name:"MuiToggleButtonGroup"}),{children:l,className:r,color:s="standard",disabled:u=!1,exclusive:o=!1,fullWidth:m=!1,onChange:g,orientation:f="horizontal",size:v="medium",value:d,...y}=i,c={...i,disabled:u,fullWidth:m,orientation:f,size:v},p=nn(c),k=h.useCallback((w,C)=>{if(!g)return;const B=d&&d.indexOf(C);let F;d&&B>=0?(F=d.slice(),F.splice(B,1)):F=d?d.concat(C):[C],g(w,F)},[g,d]),b=h.useCallback((w,C)=>{g&&g(w,d===C?null:C)},[g,d]),x=h.useMemo(()=>({className:p.grouped,onChange:o?b:k,value:d,size:v,fullWidth:m,color:s,disabled:u}),[p.grouped,o,b,k,d,v,m,s,u]),T=kt(l),q=T.length,j=w=>{const C=w===0,B=w===q-1;return C&&B?"":C?p.firstButton:B?p.lastButton:p.middleButton};return n.jsx(an,{role:"group",className:L(p.root,r),ref:a,ownerState:c,...y,children:n.jsx(Pe.Provider,{value:x,children:T.map((w,C)=>n.jsx(Re.Provider,{value:j(C),children:w},C))})})}),De=({data:e,columns:t,loading:a,emptyMessage:i,sorting:l=[],onSortingChange:r,onRowClick:s,getRowId:u})=>{const o=Math.max(t.length,1),m=!a&&e.length===0,g=!!s,f=d=>{if(!r)return;const y=l.find(c=>c.id===d);y?y.desc?r([]):r([{id:d,desc:!0}]):r([{id:d,desc:!1}])},v=d=>{const y=l.find(c=>c.id===d);return y?y.desc?"desc":"asc":!1};return n.jsx(et,{children:n.jsxs(tt,{size:"small","aria-busy":a,children:[n.jsx(nt,{sx:{backgroundColor:"grey.50"},children:n.jsx(ae,{children:t.map(d=>{const y=v(d.id),c=d.enableSorting&&r;return n.jsx(O,{align:d.meta?.align,sortDirection:y,sx:{fontWeight:600,color:"text.secondary",width:d.meta?.width,minWidth:d.meta?.minWidth,maxWidth:d.meta?.maxWidth},children:c?n.jsx(_t,{active:y!==!1,direction:y===!1?"asc":y,onClick:()=>f(d.id),children:d.header}):d.header},d.id)})})}),n.jsx(at,{children:a?n.jsx(ae,{children:n.jsx(O,{colSpan:o,children:n.jsxs(J,{display:"flex",alignItems:"center",gap:1,py:2,children:[n.jsx(it,{size:20}),n.jsx(le,{variant:"body2",children:"Loading"})]})})}):m?n.jsx(ae,{children:n.jsx(O,{colSpan:o,children:n.jsx(le,{variant:"body2",color:"text.secondary",py:2,children:i})})}):e.map((d,y)=>{const c=u?u(d,y):String(y);return n.jsx(ae,{hover:g,onClick:s?()=>s(d):void 0,sx:g?{cursor:"pointer"}:void 0,children:t.map(p=>{const k=p.accessorKey?d[p.accessorKey]:void 0,b=p.cell?p.cell(d):String(k??"");return n.jsx(O,{align:p.meta?.align,sx:{width:p.meta?.width,minWidth:p.meta?.minWidth,maxWidth:p.meta?.maxWidth},children:b},p.id)})},c)})})]})})};De.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"sorting"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:""},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""}}};const Ae=({pagination:e,onPaginationChange:t,rowCount:a,pageSizeOptions:i})=>n.jsx(Ut,{component:"div",count:a,page:e.pageIndex,onPageChange:(l,r)=>t(s=>({...s,pageIndex:r})),rowsPerPage:e.pageSize,onRowsPerPageChange:l=>{t(r=>({...r,pageIndex:0,pageSize:Number(l.target.value)}))},rowsPerPageOptions:i,labelDisplayedRows:({from:l,to:r,count:s,page:u})=>s===-1?`Page ${u+1}`:`${l}-${r} of ${s}`});Ae.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const on=M(n.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),ln=M(n.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),sn=M(n.jsx("path",{d:"M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"})),un=M(n.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),dn=M(n.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),cn=["eq"],ze={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},pn=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,mn=(e,t)=>e.find(a=>a.name===t),qe=e=>e?.ops?.length?e.ops:cn,be=(e,t,a)=>t==="isnull"||e?.type==="boolean"?a==="false"?"false":"true":a??"",Be=(e,t)=>t?.options?.length?t.options.find(a=>a.value===e)?.label??e:e,gn=(e,t)=>{const a=t?.label??e.field,i=(e.value??"").trim();if(e.op==="isnull")return`${a} ${i!=="false"?"is null":"is not null"}`;if(!i)return"";const l=ze[e.op]??e.op;if(e.op==="in"){const o=i.split(",").map(m=>m.trim()).filter(Boolean).map(m=>Be(m,t)).join(", ");return`${a} ${l} (${o})`}const r=Be(i,t),u=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${r}"`:r;return`${a} ${l} ${u}`},fn=(e,t)=>{if(!e.length)return"";const a=new Map(t.map(i=>[i.name,i]));return e.map(i=>gn(i,a.get(i.field))).filter(Boolean).join(" AND ")},yn=({filter:e,fields:t,fieldMap:a,onFieldChange:i,onOpChange:l,onValueChange:r,onRemove:s})=>{const u=a.get(e.field),o=qe(u),m=e.op==="in"?"Values":"Value",g=u?.type==="number"?"number":u?.type==="date"?"date":u?.type==="datetime"?"datetime-local":"text",f=u?.type==="date"||u?.type==="datetime",v=u?.placeholder??(e.op==="in"?"Comma-separated values":void 0),d=u?.options??[],y=d.length>0&&(e.op==="eq"||e.op==="neq");return n.jsxs(xe,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"stretch",sm:"center"},children:[n.jsx(U,{select:!0,size:"small",label:"Field",value:e.field,onChange:c=>i(e.id,c.target.value),sx:{minWidth:160},children:t.map(c=>n.jsx(N,{value:c.name,children:c.label},c.name))}),n.jsx(rn,{exclusive:!0,size:"small",color:"primary",value:e.op,onChange:(c,p)=>{p!==null&&l(e.id,p)},sx:{minWidth:150,alignSelf:"center"},children:o.map(c=>n.jsx(en,{value:c,children:ze[c]??c},c))}),e.op==="isnull"?n.jsxs(U,{select:!0,size:"small",label:"Null state",value:e.value??"true",onChange:c=>r(e.id,c.target.value),sx:{minWidth:160,flex:1},children:[n.jsx(N,{value:"true",children:"Is null"}),n.jsx(N,{value:"false",children:"Is not null"})]}):y?n.jsx(U,{select:!0,size:"small",label:m,value:e.value??"",onChange:c=>r(e.id,c.target.value),sx:{minWidth:160,flex:1},children:d.map(c=>n.jsx(N,{value:c.value,children:c.label},c.value))}):u?.type==="boolean"?n.jsxs(U,{select:!0,size:"small",label:m,value:e.value??"true",onChange:c=>r(e.id,c.target.value),sx:{minWidth:160,flex:1},children:[n.jsx(N,{value:"true",children:"True"}),n.jsx(N,{value:"false",children:"False"})]}):n.jsx(U,{size:"small",type:g,label:m,value:e.value??"",onChange:c=>r(e.id,c.target.value),placeholder:v,InputLabelProps:f?{shrink:!0}:void 0,sx:{minWidth:160,flex:1}}),n.jsx(V,{size:"small","aria-label":"Remove filter",onClick:()=>s(e.id),children:n.jsx(ln,{fontSize:"small"})})]})},Le=({queryBuilder:e})=>{const[t,a]=h.useState(null),i=!!t,l=t?.clientWidth??560,{fields:r,filters:s,onFiltersChange:u,placeholder:o,summaryFormatter:m}=e,g=h.useMemo(()=>new Map(r.map(x=>[x.name,x])),[r]),f=h.useMemo(()=>s.length?m?m(s,r):fn(s,r):"",[s,r,m]),v=x=>{a(x.currentTarget)},d=()=>{a(null)},y=()=>{if(r.length===0)return;const x=r[0],q=qe(x)[0]??"eq",j=be(x,q);u([...s,{id:pn(),field:x.name,op:q,value:j}])},c=x=>{u(s.filter(T=>T.id!==x))},p=(x,T)=>{const q=mn(r,T);if(!q)return;const j=qe(q);u(s.map(w=>{if(w.id!==x)return w;const C=j.includes(w.op)?w.op:j[0]??"eq",B=be(q,C,w.value);return{...w,field:q.name,op:C,value:B}}))},k=(x,T)=>{u(s.map(q=>{if(q.id!==x)return q;const j=g.get(q.field),w=be(j,T,q.value);return{...q,op:T,value:w}}))},b=(x,T)=>{u(s.map(q=>q.id===x?{...q,value:T}:q))};return n.jsxs(n.Fragment,{children:[n.jsx(J,{sx:{borderBottom:"1px solid",borderColor:"divider",px:2,py:1.5},children:n.jsx(U,{fullWidth:!0,size:"small",placeholder:o??"Add filters",value:f,onClick:v,onFocus:v,InputProps:{readOnly:!0,startAdornment:n.jsx(Te,{position:"start",children:n.jsx(sn,{fontSize:"small"})}),endAdornment:n.jsx(Te,{position:"end",children:i?n.jsx(dn,{}):n.jsx(un,{})})},inputProps:{"aria-label":"Filter query"},sx:{"& .MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{cursor:"pointer",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})}),n.jsx(pt,{open:i,anchorEl:t,onClose:d,disableRestoreFocus:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:l,maxWidth:"calc(100vw - 32px)",p:2}}},children:n.jsx(J,{sx:{maxHeight:"60vh",overflowY:"auto"},children:n.jsxs(xe,{spacing:2,children:[n.jsxs(J,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,children:[n.jsx(le,{variant:"subtitle2",children:"Filters"}),n.jsxs(J,{display:"flex",alignItems:"center",gap:1,children:[n.jsx(ft,{size:"small",startIcon:n.jsx(on,{fontSize:"small"}),onClick:y,disabled:r.length===0,children:"Add filter"}),n.jsx(V,{size:"small","aria-label":"Close filters",onClick:d,children:n.jsx(ct,{fontSize:"small"})})]})]}),s.length===0?n.jsx(le,{variant:"body2",color:"text.secondary",children:"No filters yet."}):n.jsx(xe,{spacing:1.5,children:s.map(x=>n.jsx(yn,{filter:x,fields:r,fieldMap:g,onFieldChange:p,onOpChange:k,onValueChange:b,onRemove:c},x.id))})]})})})]})};Le.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
@param fields - Available fields`}]}},description:""}}};const je=[10,25,50];function ue({data:e,columns:t,getRowId:a,pagination:i,onPaginationChange:l,sorting:r,onSortingChange:s,rowCount:u,loading:o=!1,emptyMessage:m="No data available",pageSizeOptions:g=je,onRowClick:f,query:v}){const d=h.useMemo(()=>g.length?g:je,[g]),y=u??e.length;return n.jsxs(yt,{variant:"outlined",children:[v?n.jsx(Le,{queryBuilder:v}):null,n.jsx(De,{data:e,columns:t,loading:o,emptyMessage:m,sorting:r,onSortingChange:s,onRowClick:f,getRowId:a}),n.jsx(Ae,{pagination:i,onPaginationChange:l,rowCount:y,pageSizeOptions:d})]})}ue.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"}}};const Me=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>n.jsx(ht,{label:e.status,color:e.status==="Active"?"success":"default",size:"small"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],$e=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],hn=e=>Array.from({length:e}).map((t,a)=>({id:String(a+1),name:`Item ${a+1}`,status:a%3===0?"Archived":a%2===0?"Active":"Inactive",createdAt:new Date(2024,0,a+1).toISOString()})),se=hn(48),vn={pageIndex:0,pageSize:10},bn=(e={})=>{const{initialPagination:t={},initialSorting:a=[],initialFilters:i=[]}=e,l={...vn,...t},[r,s]=h.useState(l),[u,o]=h.useState(a),[m,g]=h.useState(i),f=()=>{s(l)},v=()=>{o(a)},d=()=>{g(i)};return{pagination:r,onPaginationChange:s,sorting:u,onSortingChange:o,filters:m,onFiltersChange:g,resetPagination:f,resetSorting:v,resetFilters:d,resetAll:()=>{f(),v(),d()}}},Ne=(e,t)=>t.length?[...e].sort((a,i)=>{for(const l of t){const r=l.id,s=a[r],u=i[r];if(s===u)continue;const o=l.desc?-1:1,m=typeof s=="string"?s.toLowerCase():s,g=typeof u=="string"?u.toLowerCase():u;return m==null?1*o:g==null?-1*o:m>g?o:-o}return 0}):e,Se=(e=[],t=!1)=>(a,i)=>{const[l,r]=h.useState({pageIndex:0,pageSize:10}),[s,u]=h.useState(e),[o,m]=h.useState([]),g=h.useMemo(()=>Ne(se,s),[s]),f=h.useMemo(()=>g.slice(l.pageIndex*l.pageSize,l.pageIndex*l.pageSize+l.pageSize),[l.pageIndex,l.pageSize,g]);return n.jsx(ue,{...i.args,data:f,columns:Me,rowCount:se.length,pagination:l,onPaginationChange:r,sorting:s,onSortingChange:u,query:t?{fields:$e,filters:o,onFiltersChange:m,placeholder:"Filter items..."}:void 0})},da={title:"Tables/RemoteDataTable",component:ue,decorators:[Ze()],parameters:{layout:"fullscreen"}},re={args:{pageSizeOptions:[5,10,25]},decorators:[Se()]},ie={args:{pageSizeOptions:[5,10,25]},decorators:[Se([{id:"createdAt",desc:!0}])]},oe={args:{pageSizeOptions:[5,10,25]},decorators:[Se([],!0)]},Y={render:()=>{const e=bn({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),t=h.useMemo(()=>Ne(se,e.sorting),[e.sorting]),a=h.useMemo(()=>t.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,t]);return n.jsx(ue,{data:a,columns:Me,rowCount:se.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:$e,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState()]
}`,...re.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([{
    id: "createdAt",
    desc: true
  }])]
}`,...ie.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([], true)]
}`,...oe.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...Y.parameters?.docs?.description}}};const ca=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{re as Default,ie as SortedByCreatedDate,Y as UsingHook,oe as WithQueryBuilder,ca as __namedExportsOrder,da as default};
