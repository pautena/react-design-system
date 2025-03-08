import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{C as nt}from"./ChevronLeft-Bjo8ybzH.js";import{u as st,c as q,o as O}from"./drawer.provider-ILxWYOR7.js";import{u as H}from"./useTheme-CfVHYLf1.js";import{g as at,a as it,c as Y,e as S}from"./identifier-ChVxdG4r.js";import{r as x}from"./index-CFahbR6w.js";import{u as pt}from"./index-n2pnZwpZ.js";import{u as lt,s as M,a as ct,m as Q,r as dt}from"./memoTheme-kZCwlU27.js";import{u as z}from"./useSlot-HZ3RMWsh.js";import{m as mt}from"./Popover-BrIlDozf.js";import{T as ft,g as ut,a as G,r as ht}from"./Grow-DSkAUVrm.js";import{u as xt}from"./createSimplePaletteValueFilter-BX9OVMun.js";import{d as gt}from"./debounce-Be36O1Ab.js";import{o as Z}from"./ownerWindow-DJIq4c2v.js";import{M as wt}from"./Modal-QJZQr9Mv.js";import{P as yt,p as vt}from"./Paper-0PE78at3.js";import{I as Pt}from"./IconButton-X2xkCwyW.js";import{D as kt}from"./Divider-NmFzzByE.js";function Dt(t,r,n){const e=r.getBoundingClientRect(),s=n&&n.getBoundingClientRect(),u=Z(r);let l;if(r.fakeTransform)l=r.fakeTransform;else{const a=u.getComputedStyle(r);l=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}let d=0,p=0;if(l&&l!=="none"&&typeof l=="string"){const a=l.split("(")[1].split(")")[0].split(",");d=parseInt(a[4],10),p=parseInt(a[5],10)}return t==="left"?s?`translateX(${s.right+d-e.left}px)`:`translateX(${u.innerWidth+d-e.left}px)`:t==="right"?s?`translateX(-${e.right-s.left-d}px)`:`translateX(-${e.left+e.width-d}px)`:t==="up"?s?`translateY(${s.bottom+p-e.top}px)`:`translateY(${u.innerHeight+p-e.top}px)`:s?`translateY(-${e.top-s.top+e.height-p}px)`:`translateY(-${e.top+e.height-p}px)`}function Et(t){return typeof t=="function"?t():t}function A(t,r,n){const e=Et(n),s=Dt(t,r,e);s&&(r.style.webkitTransform=s,r.style.transform=s)}const Ct=x.forwardRef(function(r,n){const e=H(),s={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},u={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:d=!0,children:p,container:a,direction:m="down",easing:C=s,in:g,onEnter:$,onEntered:B,onEntering:j,onExit:k,onExited:b,onExiting:L,style:R,timeout:D=u,TransitionComponent:E=ft,...F}=r,c=x.useRef(null),T=xt(ut(p),c,n),h=o=>i=>{o&&(i===void 0?o(c.current):o(c.current,i))},N=h((o,i)=>{A(m,o,a),ht(o),$&&$(o,i)}),X=h((o,i)=>{const P=G({timeout:D,style:R,easing:C},{mode:"enter"});o.style.webkitTransition=e.transitions.create("-webkit-transform",{...P}),o.style.transition=e.transitions.create("transform",{...P}),o.style.webkitTransform="none",o.style.transform="none",j&&j(o,i)}),y=h(B),v=h(L),w=h(o=>{const i=G({timeout:D,style:R,easing:C},{mode:"exit"});o.style.webkitTransition=e.transitions.create("-webkit-transform",i),o.style.transition=e.transitions.create("transform",i),A(m,o,a),k&&k(o)}),V=h(o=>{o.style.webkitTransition="",o.style.transition="",b&&b(o)}),W=o=>{l&&l(c.current,o)},I=x.useCallback(()=>{c.current&&A(m,c.current,a)},[m,a]);return x.useEffect(()=>{if(g||m==="down"||m==="right")return;const o=gt(()=>{c.current&&A(m,c.current,a)}),i=Z(c.current);return i.addEventListener("resize",o),()=>{o.clear(),i.removeEventListener("resize",o)}},[m,g,a]),x.useEffect(()=>{g||I()},[g,I]),f.jsx(E,{nodeRef:c,onEnter:N,onEntered:y,onEntering:X,onExit:w,onExited:V,onExiting:v,addEndListener:W,appear:d,in:g,timeout:D,...F,children:(o,{ownerState:i,...P})=>x.cloneElement(p,{ref:T,style:{visibility:o==="exited"&&!g?"hidden":void 0,...R,...p.props.style},...P})})});function bt(t){return it("MuiDrawer",t)}const J=at("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]),tt=(t,r)=>{const{ownerState:n}=t;return[r.root,(n.variant==="permanent"||n.variant==="persistent")&&r.docked,r.modal]},Rt=t=>{const{classes:r,anchor:n,variant:e}=t,s={root:["root",`anchor${S(n)}`],docked:[(e==="permanent"||e==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${S(n)}`,e!=="temporary"&&`paperAnchorDocked${S(n)}`]};return ct(s,bt,r)},Tt=M(wt,{name:"MuiDrawer",slot:"Root",overridesResolver:tt})(Q(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer}))),St=M("div",{shouldForwardProp:dt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:tt})({flex:"0 0 auto"}),$t=M(yt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.paper,r[`paperAnchor${S(n.anchor)}`],n.variant!=="temporary"&&r[`paperAnchorDocked${S(n.anchor)}`]]}})(Q(({theme:t})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:r})=>r.anchor==="left"&&r.variant!=="temporary",style:{borderRight:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="top"&&r.variant!=="temporary",style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="right"&&r.variant!=="temporary",style:{borderLeft:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="bottom"&&r.variant!=="temporary",style:{borderTop:`1px solid ${(t.vars||t).palette.divider}`}}]}))),rt={left:"right",right:"left",top:"down",bottom:"up"};function jt(t){return["left","right"].includes(t)}function It({direction:t},r){return t==="rtl"&&jt(r)?rt[r]:r}const zt=x.forwardRef(function(r,n){const e=lt({props:r,name:"MuiDrawer"}),s=H(),u=pt(),l={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:d="left",BackdropProps:p,children:a,className:m,elevation:C=16,hideBackdrop:g=!1,ModalProps:{BackdropProps:$,...B}={},onClose:j,open:k=!1,PaperProps:b={},SlideProps:L,TransitionComponent:R,transitionDuration:D=l,variant:E="temporary",slots:F={},slotProps:c={},...T}=e,h=x.useRef(!1);x.useEffect(()=>{h.current=!0},[]);const N=It({direction:u?"rtl":"ltr"},d),y={...e,anchor:d,elevation:C,open:k,variant:E,...T},v=Rt(y),w={slots:{transition:R,...F},slotProps:{paper:b,transition:L,...c,backdrop:mt(c.backdrop||{...p,...$},{transitionDuration:D})}},[V,W]=z("root",{ref:n,elementType:Tt,className:Y(v.root,v.modal,m),shouldForwardComponentProp:!0,ownerState:y,externalForwardedProps:{...w,...T,...B},additionalProps:{open:k,onClose:j,hideBackdrop:g,slots:{backdrop:w.slots.backdrop},slotProps:{backdrop:w.slotProps.backdrop}}}),[I,o]=z("paper",{elementType:$t,shouldForwardComponentProp:!0,className:Y(v.paper,b.className),ownerState:y,externalForwardedProps:w,additionalProps:{elevation:E==="temporary"?C:0,square:!0}}),[i,P]=z("docked",{elementType:St,ref:n,className:Y(v.root,v.docked,m),ownerState:y,externalForwardedProps:w,additionalProps:T}),[et,ot]=z("transition",{elementType:Ct,ownerState:y,externalForwardedProps:w,additionalProps:{in:k,direction:rt[N],timeout:D,appear:h.current}}),U=f.jsx(I,{...o,children:a});if(E==="permanent")return f.jsx(i,{...P,children:U});const _=f.jsx(et,{...ot,children:U});return E==="persistent"?f.jsx(i,{...P,children:_}):f.jsx(V,{...W,children:_})}),At=M("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),Mt={temporary:!0,mini:!0,persistent:!0},Bt={temporary:"temporary",mini:"permanent",persistent:"persistent"},K=()=>({}),Lt={mini:(t,r)=>({boxSizing:"border-box",[`& .${vt.root}`]:{zIndex:r.zIndex.drawer-1}}),temporary:K,persistent:K},Ft=({children:t,...r})=>{const n=H(),{state:e,switchState:s,clipped:u,close:l,drawerWidth:d,variant:p}=st(),a={width:d,flexShrink:0,whiteSpace:"nowrap",...e==="open"&&{...O(n),[`& .${J.paper}`]:O(n)},...e!=="open"&&{...q(n),[`& .${J.paper}`]:q(n)},...Lt[p](e,n)};return f.jsxs(zt,{open:e==="open",variant:Bt[p],role:"menu","aria-hidden":e==="close",onClose:l,sx:a,...r,children:[f.jsx(At,{children:!u&&Mt[p]&&f.jsx(Pt,{onClick:s,children:f.jsx(nt,{})})}),f.jsx(kt,{}),t]})};Ft.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"DrawerContentProps"},{name:"FunctionComponent",elements:[{name:"DrawerContentProps"}],raw:"FunctionComponent<DrawerContentProps>"}],raw:"ReactElement<DrawerContentProps, DrawerContentComponent>"},description:""}},composes:["MuiDrawerProps"]};export{Ft as D,At as a};
