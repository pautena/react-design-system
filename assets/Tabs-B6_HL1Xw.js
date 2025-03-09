import{r as i}from"./index-CFahbR6w.js";import{g as pt,a as ft,c as k}from"./generateUtilityClasses-F-VSJTCv.js";import{s as F,a as bt,m as St}from"./memoTheme-DEu9pJpV.js";import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{u as ht}from"./DefaultPropsProvider-CoDhPOBZ.js";import{c as At}from"./identifier-CAo-jtr-.js";import{B as $t,c as jt,u as dt}from"./Typography-ByJtF3w8.js";import{u as Ft}from"./index-DDS9h_yT.js";import{u as po}from"./useTheme-BLxwKqlM.js";import{u as fo}from"./index-CGHpqm4L.js";import{d as Ht}from"./debounce-Be36O1Ab.js";import{o as Nt}from"./ownerWindow-xIo4Mur8.js";import{u as X,o as bo}from"./useSlot-N3pciUg7.js";import{u as lt}from"./useSlotProps-9PaHgLsM.js";function So(o){return ft("MuiTab",o)}const x=pt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),ho=o=>{const{classes:t,textColor:r,fullWidth:c,wrapped:a,icon:d,label:f,selected:b,disabled:p}=o,m={root:["root",d&&f&&"labelIcon",`textColor${At(r)}`,c&&"fullWidth",a&&"wrapped",b&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return bt(m,So,t)},mo=F($t,{name:"MuiTab",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${At(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped,{[`& .${x.iconWrapper}`]:t.iconWrapper},{[`& .${x.icon}`]:t.icon}]}})(St(({theme:o})=>({...o.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="top",style:{[`& > .${x.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="bottom",style:{[`& > .${x.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="start",style:{[`& > .${x.icon}`]:{marginRight:o.spacing(1)}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="end",style:{[`& > .${x.icon}`]:{marginLeft:o.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${x.selected}`]:{opacity:1},[`&.${x.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${x.selected}`]:{color:(o.vars||o).palette.primary.main},[`&.${x.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${x.selected}`]:{color:(o.vars||o).palette.secondary.main},[`&.${x.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:o.typography.pxToRem(12)}}]}))),Jo=i.forwardRef(function(t,r){const c=ht({props:t,name:"MuiTab"}),{className:a,disabled:d=!1,disableFocusRipple:f=!1,fullWidth:b,icon:p,iconPosition:m="top",indicator:v,label:y,onChange:h,onClick:B,onFocus:z,selected:C,selectionFollowsFocus:g,textColor:G="inherit",value:E,wrapped:rt=!1,...M}=c,H={...c,disabled:d,disableFocusRipple:f,selected:C,icon:!!p,iconPosition:m,label:!!y,fullWidth:b,textColor:G,wrapped:rt},K=ho(H),U=p&&y&&i.isValidElement(p)?i.cloneElement(p,{className:k(K.icon,p.props.className)}):p,J=R=>{!C&&h&&h(R,E),B&&B(R)},N=R=>{g&&!C&&h&&h(R,E),z&&z(R)};return S.jsxs(mo,{focusRipple:!f,className:k(K.root,a),ref:r,role:"tab","aria-selected":C,disabled:d,onClick:J,onFocus:N,ownerState:H,tabIndex:C?0:-1,...M,children:[m==="top"||m==="start"?S.jsxs(i.Fragment,{children:[U,y]}):S.jsxs(i.Fragment,{children:[y,U]}),v]})}),vo=jt(S.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),yo=jt(S.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function xo(o){return(1+Math.sin(Math.PI*o-Math.PI/2))/2}function go(o,t,r,c={},a=()=>{}){const{ease:d=xo,duration:f=300}=c;let b=null;const p=t[o];let m=!1;const v=()=>{m=!0},y=h=>{if(m){a(new Error("Animation cancelled"));return}b===null&&(b=h);const B=Math.min(1,(h-b)/f);if(t[o]=d(B)*(r-p)+p,B>=1){requestAnimationFrame(()=>{a(null)});return}requestAnimationFrame(y)};return p===r?(a(new Error("Element already at target position")),v):(requestAnimationFrame(y),v)}const wo={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Bo(o){const{onChange:t,...r}=o,c=i.useRef(),a=i.useRef(null),d=()=>{c.current=a.current.offsetHeight-a.current.clientHeight};return fo(()=>{const f=Ht(()=>{const p=c.current;d(),p!==c.current&&t(c.current)}),b=Nt(a.current);return b.addEventListener("resize",f),()=>{f.clear(),b.removeEventListener("resize",f)}},[t]),i.useEffect(()=>{d(),t(c.current)},[t]),S.jsx("div",{style:wo,...r,ref:a})}function Co(o){return ft("MuiTabScrollButton",o)}const To=pt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Io=o=>{const{classes:t,orientation:r,disabled:c}=o;return bt({root:["root",r,c&&"disabled"]},Co,t)},Eo=F($t,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.orientation&&t[r.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${To.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),Mo=i.forwardRef(function(t,r){const c=ht({props:t,name:"MuiTabScrollButton"}),{className:a,slots:d={},slotProps:f={},direction:b,orientation:p,disabled:m,...v}=c,y=Ft(),h={isRtl:y,...c},B=Io(h),z=d.StartScrollButtonIcon??vo,C=d.EndScrollButtonIcon??yo,g=lt({elementType:z,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h}),G=lt({elementType:C,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h});return S.jsx(Eo,{component:"div",className:k(B.root,a),ref:r,role:null,ownerState:h,tabIndex:null,...v,style:{...v.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${y?-90:90}deg)`}},children:b==="left"?S.jsx(z,{...g}):S.jsx(C,{...G})})});function Ro(o){return ft("MuiTabs",o)}const ut=pt("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Lt=(o,t)=>o===t?o.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o.firstChild,kt=(o,t)=>o===t?o.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o.lastChild,et=(o,t,r)=>{let c=!1,a=r(o,t);for(;a;){if(a===o.firstChild){if(c)return;c=!0}const d=a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||d)a=r(o,a);else{a.focus();return}}},Po=o=>{const{vertical:t,fixed:r,hideScrollbar:c,scrollableX:a,scrollableY:d,centered:f,scrollButtonsHideMobile:b,classes:p}=o;return bt({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",a&&"scrollableX",d&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[a&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},Ro,p)},Wo=F("div",{name:"MuiTabs",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[{[`& .${ut.scrollButtons}`]:t.scrollButtons},{[`& .${ut.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(St(({theme:o})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${ut.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}}}]}))),Lo=F("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:o})=>o.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:o})=>o.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:o})=>o.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:o})=>o.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),ko=F("div",{name:"MuiTabs",slot:"List",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.list,t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:o})=>o.vertical,style:{flexDirection:"column"}},{props:({ownerState:o})=>o.centered,style:{justifyContent:"center"}}]}),zo=F("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(o,t)=>t.indicator})(St(({theme:o})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(o.vars||o).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(o.vars||o).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),Ao=F(Bo)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),zt={},Qo=i.forwardRef(function(t,r){const c=ht({props:t,name:"MuiTabs"}),a=po(),d=Ft(),{"aria-label":f,"aria-labelledby":b,action:p,centered:m=!1,children:v,className:y,component:h="div",allowScrollButtonsMobile:B=!1,indicatorColor:z="primary",onChange:C,orientation:g="horizontal",ScrollButtonComponent:G,scrollButtons:E="auto",selectionFollowsFocus:rt,slots:M={},slotProps:H={},TabIndicatorProps:K={},TabScrollButtonProps:U={},textColor:J="primary",value:N,variant:R="standard",visibleScrollbar:nt=!1,...Dt}=c,T=R==="scrollable",w=g==="vertical",Y=w?"scrollTop":"scrollLeft",Q=w?"top":"left",Z=w?"bottom":"right",st=w?"clientHeight":"clientWidth",O=w?"height":"width",P={...c,component:h,allowScrollButtonsMobile:B,indicatorColor:z,orientation:g,vertical:w,scrollButtons:E,textColor:J,variant:R,visibleScrollbar:nt,fixed:!T,hideScrollbar:T&&!nt,scrollableX:T&&!w,scrollableY:T&&w,centered:m&&!T,scrollButtonsHideMobile:!B},L=Po(P),Xt=lt({elementType:M.StartScrollButtonIcon,externalSlotProps:H.startScrollButtonIcon,ownerState:P}),Kt=lt({elementType:M.EndScrollButtonIcon,externalSlotProps:H.endScrollButtonIcon,ownerState:P}),[mt,Ut]=i.useState(!1),[A,vt]=i.useState(zt),[yt,Yt]=i.useState(!1),[xt,Ot]=i.useState(!1),[gt,Vt]=i.useState(!1),[wt,qt]=i.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,W=i.useRef(null),$=i.useRef(null),D={slots:M,slotProps:{indicator:K,scrollButton:U,...H}},Ct=()=>{const e=W.current;let l;if(e){const s=e.getBoundingClientRect();l={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:s.top,bottom:s.bottom,left:s.left,right:s.right}}let n;if(e&&N!==!1){const s=$.current.children;if(s.length>0){const u=s[Bt.get(N)];n=u?u.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:n}},V=dt(()=>{const{tabsMeta:e,tabMeta:l}=Ct();let n=0,s;w?(s="top",l&&e&&(n=l.top-e.top+e.scrollTop)):(s=d?"right":"left",l&&e&&(n=(d?-1:1)*(l[s]-e[s]+e.scrollLeft)));const u={[s]:n,[O]:l?l[O]:0};if(typeof A[s]!="number"||typeof A[O]!="number")vt(u);else{const I=Math.abs(A[s]-u[s]),j=Math.abs(A[O]-u[O]);(I>=1||j>=1)&&vt(u)}}),at=(e,{animation:l=!0}={})=>{l?go(Y,W.current,e,{duration:a.transitions.duration.standard}):W.current[Y]=e},Tt=e=>{let l=W.current[Y];w?l+=e:l+=e*(d?-1:1),at(l)},It=()=>{const e=W.current[st];let l=0;const n=Array.from($.current.children);for(let s=0;s<n.length;s+=1){const u=n[s];if(l+u[st]>e){s===0&&(l=e);break}l+=u[st]}return l},Gt=()=>{Tt(-1*It())},Jt=()=>{Tt(It())},[Qt,{onChange:_,...Zt}]=X("scrollbar",{className:k(L.scrollableX,L.hideScrollbar),elementType:Ao,shouldForwardComponentProp:!0,externalForwardedProps:D,ownerState:P}),_t=i.useCallback(e=>{_==null||_(e),qt({overflow:null,scrollbarWidth:e})},[_]),[Et,Mt]=X("scrollButtons",{className:k(L.scrollButtons,U.className),elementType:Mo,externalForwardedProps:D,ownerState:P,additionalProps:{orientation:g,slots:{StartScrollButtonIcon:M.startScrollButtonIcon||M.StartScrollButtonIcon,EndScrollButtonIcon:M.endScrollButtonIcon||M.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:Xt,endScrollButtonIcon:Kt}}}),to=()=>{const e={};e.scrollbarSizeListener=T?S.jsx(Qt,{...Zt,onChange:_t}):null;const n=T&&(E==="auto"&&(yt||xt)||E===!0);return e.scrollButtonStart=n?S.jsx(Et,{direction:d?"right":"left",onClick:Gt,disabled:!yt,...Mt}):null,e.scrollButtonEnd=n?S.jsx(Et,{direction:d?"left":"right",onClick:Jt,disabled:!xt,...Mt}):null,e},Rt=dt(e=>{const{tabsMeta:l,tabMeta:n}=Ct();if(!(!n||!l)){if(n[Q]<l[Q]){const s=l[Y]+(n[Q]-l[Q]);at(s,{animation:e})}else if(n[Z]>l[Z]){const s=l[Y]+(n[Z]-l[Z]);at(s,{animation:e})}}}),tt=dt(()=>{T&&E!==!1&&Vt(!gt)});i.useEffect(()=>{const e=Ht(()=>{W.current&&V()});let l;const n=I=>{I.forEach(j=>{j.removedNodes.forEach(q=>{l==null||l.unobserve(q)}),j.addedNodes.forEach(q=>{l==null||l.observe(q)})}),e(),tt()},s=Nt(W.current);s.addEventListener("resize",e);let u;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(e),Array.from($.current.children).forEach(I=>{l.observe(I)})),typeof MutationObserver<"u"&&(u=new MutationObserver(n),u.observe($.current,{childList:!0})),()=>{e.clear(),s.removeEventListener("resize",e),u==null||u.disconnect(),l==null||l.disconnect()}},[V,tt]),i.useEffect(()=>{const e=Array.from($.current.children),l=e.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&E!==!1){const n=e[0],s=e[l-1],u={root:W.current,threshold:.99},I=ct=>{Yt(!ct[0].isIntersecting)},j=new IntersectionObserver(I,u);j.observe(n);const q=ct=>{Ot(!ct[0].isIntersecting)},Wt=new IntersectionObserver(q,u);return Wt.observe(s),()=>{j.disconnect(),Wt.disconnect()}}},[T,E,gt,v==null?void 0:v.length]),i.useEffect(()=>{Ut(!0)},[]),i.useEffect(()=>{V()}),i.useEffect(()=>{Rt(zt!==A)},[Rt,A]),i.useImperativeHandle(p,()=>({updateIndicator:V,updateScrollButtons:tt}),[V,tt]);const[oo,eo]=X("indicator",{className:k(L.indicator,K.className),elementType:zo,externalForwardedProps:D,ownerState:P,additionalProps:{style:A}}),Pt=S.jsx(oo,{...eo});let ot=0;const lo=i.Children.map(v,e=>{if(!i.isValidElement(e))return null;const l=e.props.value===void 0?ot:e.props.value;Bt.set(l,ot);const n=l===N;return ot+=1,i.cloneElement(e,{fullWidth:R==="fullWidth",indicator:n&&!mt&&Pt,selected:n,selectionFollowsFocus:rt,onChange:C,textColor:J,value:l,...ot===1&&N===!1&&!e.props.tabIndex?{tabIndex:0}:{}})}),ro=e=>{const l=$.current,n=bo(l).activeElement;if(n.getAttribute("role")!=="tab")return;let u=g==="horizontal"?"ArrowLeft":"ArrowUp",I=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&d&&(u="ArrowRight",I="ArrowLeft"),e.key){case u:e.preventDefault(),et(l,n,kt);break;case I:e.preventDefault(),et(l,n,Lt);break;case"Home":e.preventDefault(),et(l,null,Lt);break;case"End":e.preventDefault(),et(l,null,kt);break}},it=to(),[no,so]=X("root",{ref:r,className:k(L.root,y),elementType:Wo,externalForwardedProps:{...D,...Dt,component:h},ownerState:P}),[ao,io]=X("scroller",{ref:W,className:L.scroller,elementType:Lo,externalForwardedProps:D,ownerState:P,additionalProps:{style:{overflow:wt.overflow,[w?`margin${d?"Left":"Right"}`:"marginBottom"]:nt?void 0:-wt.scrollbarWidth}}}),[co,uo]=X("list",{ref:$,className:k(L.list,L.flexContainer),elementType:ko,externalForwardedProps:D,ownerState:P,getSlotProps:e=>({...e,onKeyDown:l=>{var n;ro(l),(n=e.onKeyDown)==null||n.call(e,l)}})});return S.jsxs(no,{...so,children:[it.scrollButtonStart,it.scrollbarSizeListener,S.jsxs(ao,{...io,children:[S.jsx(co,{"aria-label":f,"aria-labelledby":b,"aria-orientation":g==="vertical"?"vertical":null,role:"tablist",...uo,children:lo}),mt&&Pt]}),it.scrollButtonEnd]})});export{yo as K,Qo as T,Jo as a,vo as b,ut as t};
