import{r as b,m as Gt,f as Kt,j as m,i as It,k as Bt}from"./iframe-BSF_zI2e.js";import{f as Jt}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as jt}from"./storybook-CzW-fV4e.js";import{g as Qt,a as i,T as Xt}from"./TextField-CXTPihVd.js";import{A as Yt,f as ye,i as yt}from"./ArrowDropDown-eHn1KQwG.js";import{b as fe,o as Rt}from"./OutlinedInput-DP07QvzY.js";import{C as Zt}from"./NotificationCenter.provider-D2vjEJ8b.js";import{b as eo,s as N,m as Pe}from"./memoTheme-gZcicJog.js";import{u as Ct}from"./useSlot-C2ujFzFD.js";import{u as Pt}from"./useControlled-i8wXvpNG.js";import{b as et}from"./Typography-D0EjtIU6.js";import{s as to}from"./Portal-BDktyJAC.js";import{P as Ht}from"./Paper-BvMysOCA.js";import{P as _t}from"./Popper-BqDVRXw7.js";import{C as oo}from"./Chip-BpMji1_P.js";import{I as qt}from"./IconButton-BCQOCuxl.js";import{L as no}from"./ListSubheader-CknXOtiM.js";import{u as ro}from"./useTheme-Bdii9Etj.js";import{B as Ut}from"./Box-CHcsadOg.js";function ao(o){const l=b.useRef({});return b.useEffect(()=>{l.current=o}),l.current}function Mt({array1:o,array2:l,parser:p=u=>u}){return o&&l&&o.length===l.length&&o.every((u,A)=>p(u)===p(l[A]))}function zt(o){return o.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function so(o={}){const{ignoreAccents:l=!0,ignoreCase:p=!0,limit:u,matchFrom:A="any",stringify:L,trim:k=!1}=o;return(D,{inputValue:H,getOptionLabel:M})=>{let O=k?H.trim():H;p&&(O=O.toLowerCase()),l&&(O=zt(O));const U=O?D.filter(Z=>{let T=(L||M)(Z);return p&&(T=T.toLowerCase()),l&&(T=zt(T)),A==="start"?T.startsWith(O):T.includes(O)}):D;return typeof u=="number"?U.slice(0,u):U}}const lo=so(),Et=5,io=o=>o.current!==null&&o.current.parentElement?.contains(document.activeElement),po=[];function Nt(o,l,p,u){if(l||o==null||u)return"";const A=p(o);return typeof A=="string"?A:""}function uo(o){const{unstable_isActiveElementInListbox:l=io,unstable_classNamePrefix:p="Mui",autoComplete:u=!1,autoHighlight:A=!1,autoSelect:L=!1,blurOnSelect:k=!1,clearOnBlur:D=!o.freeSolo,clearOnEscape:H=!1,componentName:M="useAutocomplete",defaultValue:O=o.multiple?po:null,disableClearable:U=!1,disableCloseOnSelect:Z=!1,disabled:T,disabledItemsFocusable:ge=!1,disableListWrap:se=!1,filterOptions:je=lo,filterSelectedOptions:ot=!1,freeSolo:ee=!1,getOptionDisabled:_,getOptionKey:Ot,getOptionLabel:nt=t=>t.label??t,groupBy:le,handleHomeEndKeys:rt=!o.freeSolo,id:St,includeInputInList:Se=!1,inputValue:He,isOptionEqualToValue:ie=(t,e)=>t===e,multiple:c=!1,onChange:at,onClose:st,onHighlightChange:_e,onInputChange:z,onOpen:qe,open:At,openOnFocus:$t=!1,options:Tt,readOnly:G=!1,renderValue:v,selectOnFocus:lt=!o.freeSolo,value:Ue}=o,F=Gt(St);let I=nt;I=t=>{const e=nt(t);return typeof e!="string"?String(e):e};const Ae=b.useRef(!1),$e=b.useRef(!0),y=b.useRef(null),E=b.useRef(null),[Te,vt]=b.useState(null),[w,pe]=b.useState(-1),it=A?0:-1,S=b.useRef(it),Lt=b.useRef(Nt(O??Ue,c,I)).current,[r,pt]=Pt({controlled:Ue,default:O,name:M}),[f,K]=Pt({controlled:He,default:Lt,name:M,state:"inputValue"}),[me,Ge]=b.useState(!1),he=b.useCallback((t,e,n)=>{if(!(c?r.length<e.length:e!==null)&&!D)return;const s=Nt(e,c,I,v);f!==s&&(K(s),z&&z(t,s,n))},[I,f,c,z,K,D,r,v]),[J,ue]=Pt({controlled:At,default:!1,name:M,state:"open"}),[kt,be]=b.useState(!0),Ke=!c&&r!=null&&f===I(r),$=J&&!G,g=$?je(Tt.filter(t=>!(ot&&(c?r:[r]).some(e=>e!==null&&ie(t,e)))),{inputValue:Ke&&kt?"":f,getOptionLabel:I}):[],V=ao({filteredOptions:g,value:r,inputValue:f});b.useEffect(()=>{const t=r!==V.value;me&&!t||ee&&!t||he(null,r,"reset")},[r,he,me,V.value,ee]);const Je=J&&g.length>0&&!G,q=et(t=>{if(t===-1)y.current.focus();else{const e=v?"data-item-index":"data-tag-index";Te.querySelector(`[${e}="${t}"]`).focus()}});b.useEffect(()=>{c&&w>r.length-1&&(pe(-1),q(-1))},[r,c,w,q]);function ut(t,e){if(!E.current||t<0||t>=g.length)return-1;let n=t;for(;;){const a=E.current.querySelector(`[data-option-index="${n}"]`),s=ge?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&a.hasAttribute("tabindex")&&!s)return n;if(e==="next"?n=(n+1)%g.length:n=(n-1+g.length)%g.length,n===t)return-1}}const Q=et(({event:t,index:e,reason:n})=>{if(S.current=e,e===-1?y.current.removeAttribute("aria-activedescendant"):y.current.setAttribute("aria-activedescendant",`${F}-option-${e}`),_e&&["mouse","keyboard","touch"].includes(n)&&_e(t,e===-1?null:g[e],n),!E.current)return;const a=E.current.querySelector(`[role="option"].${p}-focused`);a&&(a.classList.remove(`${p}-focused`),a.classList.remove(`${p}-focusVisible`));let s=E.current;if(E.current.getAttribute("role")!=="listbox"&&(s=E.current.parentElement.querySelector('[role="listbox"]')),!s)return;if(e===-1){s.scrollTop=0;return}const P=E.current.querySelector(`[data-option-index="${e}"]`);if(P&&(P.classList.add(`${p}-focused`),n==="keyboard"&&P.classList.add(`${p}-focusVisible`),s.scrollHeight>s.clientHeight&&n!=="mouse"&&n!=="touch")){const h=P,j=s.clientHeight+s.scrollTop,Ze=h.offsetTop+h.offsetHeight;Ze>j?s.scrollTop=Ze-s.clientHeight:h.offsetTop-h.offsetHeight*(le?1.3:0)<s.scrollTop&&(s.scrollTop=h.offsetTop-h.offsetHeight*(le?1.3:0))}}),W=et(({event:t,diff:e,direction:n="next",reason:a})=>{if(!$)return;const P=ut((()=>{const h=g.length-1;if(e==="reset")return it;if(e==="start")return 0;if(e==="end")return h;const j=S.current+e;return j<0?j===-1&&Se?-1:se&&S.current!==-1||Math.abs(e)>1?0:h:j>h?j===h+1&&Se?-1:se||Math.abs(e)>1?h:0:j})(),n);if(Q({index:P,reason:a,event:t}),u&&e!=="reset")if(P===-1)y.current.value=f;else{const h=I(g[P]);y.current.value=h,h.toLowerCase().indexOf(f.toLowerCase())===0&&f.length>0&&y.current.setSelectionRange(f.length,h.length)}}),Qe=!Mt({array1:V.filteredOptions,array2:g,parser:I}),ct=()=>{const t=(e,n)=>{const a=e?I(e):"",s=n?I(n):"";return a===s};if(S.current!==-1&&!Mt({array1:V.filteredOptions,array2:g,parser:I})&&V.inputValue===f&&(c?r.length===V.value.length&&V.value.every((e,n)=>I(r[n])===I(e)):t(V.value,r))){const e=V.filteredOptions[S.current];if(e)return g.findIndex(n=>I(n)===I(e))}return-1},ve=b.useCallback(()=>{if(!$)return;const t=ct();if(t!==-1){S.current=t;return}const e=c?r[0]:r;if(g.length===0||e==null){W({diff:"reset"});return}if(E.current){if(e!=null){const n=g[S.current];if(c&&n&&r.findIndex(s=>ie(n,s))!==-1)return;const a=g.findIndex(s=>ie(s,e));a===-1?W({diff:"reset"}):Q({index:a});return}if(S.current>=g.length-1){Q({index:g.length-1});return}Q({index:S.current})}},[g.length,c?!1:r,W,Q,$,f,c]),te=et(t=>{to(E,t),t&&ve()});b.useEffect(()=>{(Qe||$&&!Z)&&ve()},[ve,Qe,$,Z]);const X=t=>{J||(ue(!0),be(!0),qe&&qe(t))},ce=(t,e)=>{J&&(ue(!1),st&&st(t,e))},B=(t,e,n,a)=>{if(c){if(r.length===e.length&&r.every((s,P)=>s===e[P]))return}else if(r===e)return;at&&at(t,e,n,a),pt(e)},Y=b.useRef(!1),oe=(t,e,n="selectOption",a="options")=>{let s=n,P=e;if(c){P=Array.isArray(r)?r.slice():[];const h=P.findIndex(j=>ie(e,j));h===-1?P.push(e):a!=="freeSolo"&&(P.splice(h,1),s="removeOption")}he(t,P,s),B(t,P,s,{option:e}),!Z&&(!t||!t.ctrlKey&&!t.metaKey)&&ce(t,s),(k===!0||k==="touch"&&Y.current||k==="mouse"&&!Y.current)&&y.current.blur()};function dt(t,e){if(t===-1)return-1;let n=t;for(;;){if(e==="next"&&n===r.length||e==="previous"&&n===-1)return-1;const a=v?"data-item-index":"data-tag-index",s=Te.querySelector(`[${a}="${n}"]`);if(!s||!s.hasAttribute("tabindex")||s.disabled||s.getAttribute("aria-disabled")==="true")n+=e==="next"?1:-1;else return n}}const de=(t,e)=>{if(!c)return;f===""&&ce(t,"toggleInput");let n=w;w===-1&&e==="previous"?(n=r.length-1,ee&&f!==""&&(K(""),z&&z(t,"","reset"))):(n+=e==="next"?1:-1,n<0&&(n=0),n===r.length&&(n=-1)),n=dt(n,e),pe(n),q(n)},Xe=t=>{Ae.current=!0,K(""),z&&z(t,"","clear"),B(t,c?[]:null,"clear")},ft=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(w!==-1&&!["ArrowLeft","ArrowRight"].includes(e.key)&&(pe(-1),q(-1)),e.which!==229))switch(e.key){case"Home":$&&rt&&(e.preventDefault(),W({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":$&&rt&&(e.preventDefault(),W({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),W({diff:-Et,direction:"previous",reason:"keyboard",event:e}),X(e);break;case"PageDown":e.preventDefault(),W({diff:Et,direction:"next",reason:"keyboard",event:e}),X(e);break;case"ArrowDown":e.preventDefault(),W({diff:1,direction:"next",reason:"keyboard",event:e}),X(e);break;case"ArrowUp":e.preventDefault(),W({diff:-1,direction:"previous",reason:"keyboard",event:e}),X(e);break;case"ArrowLeft":{const n=y.current;if(!(n&&n.selectionStart===0&&n.selectionEnd===0))return;!c&&v&&r!=null?(ee&&f!==""&&(K(""),z&&z(e,"","reset")),pe(0),q(0)):de(e,"previous");break}case"ArrowRight":!c&&v?(pe(-1),q(-1)):de(e,"next");break;case"Enter":if(S.current!==-1&&$){const n=g[S.current],a=_?_(n):!1;if(e.preventDefault(),a)return;oe(e,n,"selectOption"),u&&y.current.setSelectionRange(y.current.value.length,y.current.value.length)}else ee&&f!==""&&Ke===!1&&(c&&e.preventDefault(),oe(e,f,"createOption","freeSolo"));break;case"Escape":$?(e.preventDefault(),e.stopPropagation(),ce(e,"escape")):H&&(f!==""||c&&r.length>0||v)&&(e.preventDefault(),e.stopPropagation(),Xe(e));break;case"Backspace":if(c&&!G&&f===""&&r.length>0){const n=w===-1?r.length-1:w,a=r.slice();a.splice(n,1),B(e,a,"removeOption",{option:r[n]})}!c&&v&&!G&&f===""&&B(e,null,"removeOption",{option:r});break;case"Delete":if(c&&!G&&f===""&&r.length>0&&w!==-1){const n=w,a=r.slice();a.splice(n,1),B(e,a,"removeOption",{option:r[n]})}!c&&v&&!G&&f===""&&B(e,null,"removeOption",{option:r});break}},xe=t=>{Ge(!0),w!==-1&&(pe(-1),q(-1)),$t&&!Ae.current&&X(t)},Ie=t=>{if(l(E)){y.current.focus();return}Ge(!1),$e.current=!0,Ae.current=!1,L&&S.current!==-1&&$?oe(t,g[S.current],"blur"):L&&ee&&f!==""?oe(t,f,"blur","freeSolo"):D&&he(t,r,"blur"),ce(t,"blur")},Le=t=>{const e=t.target.value;f!==e&&(K(e),be(!1),z&&z(t,e,"input")),e===""?!U&&!c&&!v&&B(t,null,"clear"):X(t)},gt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));S.current!==e&&Q({event:t,index:e,reason:"mouse"})},mt=t=>{Q({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Y.current=!0},ht=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));oe(t,g[e],"selectOption"),Y.current=!1},bt=t=>e=>{const n=r.slice();n.splice(t,1),B(e,n,"removeOption",{option:r[t]})},ke=t=>{B(t,null,"removeOption",{option:r})},x=t=>{J?ce(t,"toggleInput"):X(t)},C=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==F&&t.preventDefault()},ne=t=>{t.currentTarget.contains(t.target)&&(y.current.focus(),lt&&$e.current&&y.current.selectionEnd-y.current.selectionStart===0&&y.current.select(),$e.current=!1)},xt=t=>{!T&&(f===""||!J)&&x(t)};let we=ee&&f.length>0;we=we||(c?r.length>0:r!==null);let Ye=g;return le&&(Ye=g.reduce((t,e,n)=>{const a=le(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:n,index:n,group:a,options:[e]}),t},[])),T&&me&&Ie(),{getRootProps:(t={})=>({...t,onKeyDown:ft(t),onMouseDown:C,onClick:ne}),getInputLabelProps:()=>({id:`${F}-label`,htmlFor:F}),getInputProps:()=>({id:F,value:f,onBlur:Ie,onFocus:xe,onChange:Le,onMouseDown:xt,"aria-activedescendant":$?"":null,"aria-autocomplete":u?"both":"list","aria-controls":Je?`${F}-listbox`:void 0,"aria-expanded":Je,autoComplete:"off",ref:y,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:T}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Xe}),getItemProps:({index:t=0}={})=>({...c&&{key:t},...v?{"data-item-index":t}:{"data-tag-index":t},tabIndex:-1,...!G&&{onDelete:c?bt(t):ke}}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:x}),getTagProps:({index:t})=>({key:t,"data-tag-index":t,tabIndex:-1,...!G&&{onDelete:bt(t)}}),getListboxProps:()=>({role:"listbox",id:`${F}-listbox`,"aria-labelledby":`${F}-label`,"aria-multiselectable":c||void 0,ref:te,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const n=(c?r:[r]).some(s=>s!=null&&ie(e,s)),a=_?_(e):!1;return{key:Ot?.(e)??I(e),tabIndex:-1,role:"option",id:`${F}-option-${t}`,onMouseMove:gt,onClick:ht,onTouchStart:mt,"data-option-index":t,"aria-disabled":a,"aria-selected":n}},id:F,inputValue:f,value:r,dirty:we,expanded:$&&Te,popupOpen:$,focused:me||w!==-1,anchorEl:Te,setAnchorEl:vt,focusedItem:w,focusedTag:w,groupedOptions:Ye}}var Vt,Wt;const co=o=>{const{classes:l,disablePortal:p,expanded:u,focused:A,fullWidth:L,hasClearIcon:k,hasPopupIcon:D,inputFocused:H,popupOpen:M,size:O}=o,U={root:["root",u&&"expanded",A&&"focused",L&&"fullWidth",k&&"hasClearIcon",D&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",H&&"inputFocused"],tag:["tag",`tagSize${Bt(O)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",M&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return eo(U,Qt,l)},fo=N("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,l)=>{const{ownerState:p}=o,{fullWidth:u,hasClearIcon:A,hasPopupIcon:L,inputFocused:k,size:D}=p;return[{[`& .${i.tag}`]:l.tag},{[`& .${i.tag}`]:l[`tagSize${Bt(D)}`]},{[`& .${i.inputRoot}`]:l.inputRoot},{[`& .${i.input}`]:l.input},{[`& .${i.input}`]:k&&l.inputFocused},l.root,u&&l.fullWidth,L&&l.hasPopupIcon,A&&l.hasClearIcon]}})({[`&.${i.focused} .${i.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${i.clearIndicator}`]:{visibility:"visible"}},[`& .${i.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${i.inputRoot}`]:{[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:30},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:56},[`& .${i.input}`]:{width:0,minWidth:30}},[`& .${yt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${yt.root}.${fe.sizeSmall}`]:{[`& .${yt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Rt.root}`]:{padding:9,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${i.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${Rt.root}.${fe.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${i.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${ye.root}`]:{paddingTop:19,paddingLeft:8,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${ye.input}`]:{padding:"7px 4px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${ye.root}.${fe.sizeSmall}`]:{paddingBottom:1,[`& .${ye.input}`]:{padding:"2.5px 4px"}},[`& .${fe.hiddenLabel}`]:{paddingTop:8},[`& .${ye.root}.${fe.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${i.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${ye.root}.${fe.hiddenLabel}.${fe.sizeSmall}`]:{[`& .${i.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${i.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${i.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${i.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${i.inputRoot}`]:{flexWrap:"wrap"}}}]}),go=N("div",{name:"MuiAutocomplete",slot:"EndAdornment"})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),mo=N(qt,{name:"MuiAutocomplete",slot:"ClearIndicator"})({marginRight:-2,padding:4,visibility:"hidden"}),ho=N(qt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(o,l)=>{const{ownerState:p}=o;return[l.popupIndicator,p.popupOpen&&l.popupIndicatorOpen]}})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),bo=N(_t,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,l)=>{const{ownerState:p}=o;return[{[`& .${i.option}`]:l.option},l.popper,p.disablePortal&&l.popperDisablePortal]}})(Pe(({theme:o})=>({zIndex:(o.vars||o).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}))),xo=N(Ht,{name:"MuiAutocomplete",slot:"Paper"})(Pe(({theme:o})=>({...o.typography.body1,overflow:"auto"}))),Io=N("div",{name:"MuiAutocomplete",slot:"Loading"})(Pe(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"}))),yo=N("div",{name:"MuiAutocomplete",slot:"NoOptions"})(Pe(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"}))),Co=N("ul",{name:"MuiAutocomplete",slot:"Listbox"})(Pe(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${i.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${i.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${i.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity),[`&.${i.focused}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${i.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}}}}))),Po=N(no,{name:"MuiAutocomplete",slot:"GroupLabel"})(Pe(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8}))),Oo=N("ul",{name:"MuiAutocomplete",slot:"GroupUl"})({padding:0,[`& .${i.option}`]:{paddingLeft:24}}),So=b.forwardRef(function(l,p){const u=Kt({props:l,name:"MuiAutocomplete"}),{autoComplete:A=!1,autoHighlight:L=!1,autoSelect:k=!1,blurOnSelect:D=!1,ChipProps:H,className:M,clearIcon:O=Vt||(Vt=m.jsx(Zt,{fontSize:"small"})),clearOnBlur:U=!u.freeSolo,clearOnEscape:Z=!1,clearText:T="Clear",closeText:ge="Close",componentsProps:se,defaultValue:je=u.multiple?[]:null,disableClearable:ot=!1,disableCloseOnSelect:ee=!1,disabled:_=!1,disabledItemsFocusable:Ot=!1,disableListWrap:nt=!1,disablePortal:le=!1,filterOptions:rt,filterSelectedOptions:St=!1,forcePopupIcon:Se="auto",freeSolo:He=!1,fullWidth:ie=!1,getLimitTagsText:c=d=>`+${d}`,getOptionDisabled:at,getOptionKey:st,getOptionLabel:_e,isOptionEqualToValue:z,groupBy:qe,handleHomeEndKeys:At=!u.freeSolo,id:$t,includeInputInList:Tt=!1,inputValue:G,limitTags:v=-1,ListboxComponent:lt,ListboxProps:Ue,loading:F=!1,loadingText:I="Loading…",multiple:Ae=!1,noOptionsText:$e="No options",onChange:y,onClose:E,onHighlightChange:Te,onInputChange:vt,onOpen:w,open:pe,openOnFocus:it=!1,openText:S="Open",options:Lt,PaperComponent:r,PopperComponent:pt,popupIcon:f=Wt||(Wt=m.jsx(Yt,{})),readOnly:K=!1,renderGroup:me,renderInput:Ge,renderOption:he,renderTags:J,renderValue:ue,selectOnFocus:kt=!u.freeSolo,size:be="medium",slots:Ke={},slotProps:$={},value:g,...V}=u,{getRootProps:Je,getInputProps:q,getInputLabelProps:ut,getPopupIndicatorProps:Q,getClearProps:W,getItemProps:Qe,getListboxProps:ct,getOptionProps:ve,value:te,dirty:X,expanded:ce,id:B,popupOpen:Y,focused:oe,focusedItem:dt,anchorEl:de,setAnchorEl:Xe,inputValue:ft,groupedOptions:xe}=uo({...u,componentName:"Autocomplete"}),Ie=!ot&&!_&&X&&!K,Le=(!He||Se===!0)&&Se!==!1,{onMouseDown:gt}=q(),{ref:mt,...ht}=ct(),ke=_e||(d=>d.label??d),x={...u,disablePortal:le,expanded:ce,focused:oe,fullWidth:ie,getOptionLabel:ke,hasClearIcon:Ie,hasPopupIcon:Le,inputFocused:dt===-1,popupOpen:Y,size:be},C=co(x),ne={slots:{paper:r,popper:pt,...Ke},slotProps:{chip:H,listbox:Ue,...se,...$}},[xt,we]=Ct("listbox",{elementType:Co,externalForwardedProps:ne,ownerState:x,className:C.listbox,additionalProps:ht,ref:mt}),[Ye,t]=Ct("paper",{elementType:Ht,externalForwardedProps:ne,ownerState:x,className:C.paper}),[e,n]=Ct("popper",{elementType:_t,externalForwardedProps:ne,ownerState:x,className:C.popper,additionalProps:{disablePortal:le,style:{width:de?de.clientWidth:null},role:"presentation",anchorEl:de,open:Y}});let a;const s=d=>({className:C.tag,disabled:_,...Qe(d)});if(Ae?te.length>0&&(J?a=J(te,s,x):ue?a=ue(te,s,x):a=te.map((d,re)=>{const{key:ae,...De}=s({index:re});return m.jsx(oo,{label:ke(d),size:be,...De,...ne.slotProps.chip},ae)})):ue&&te!=null&&(a=ue(te,s,x)),v>-1&&Array.isArray(a)){const d=a.length-v;!oe&&d>0&&(a=a.splice(0,v),a.push(m.jsx("span",{className:C.tag,children:c(d)},a.length)))}const h=me||(d=>m.jsxs("li",{children:[m.jsx(Po,{className:C.groupLabel,ownerState:x,component:"div",children:d.group}),m.jsx(Oo,{className:C.groupUl,ownerState:x,children:d.children})]},d.key)),Ze=he||((d,re)=>{const{key:ae,...De}=d;return m.jsx("li",{...De,children:ke(re)},ae)}),wt=(d,re)=>{const ae=ve({option:d,index:re});return Ze({...ae,className:C.option},d,{selected:ae["aria-selected"],index:re,inputValue:ft},x)},Dt=ne.slotProps.clearIndicator,Ft=ne.slotProps.popupIndicator;return m.jsxs(b.Fragment,{children:[m.jsx(fo,{ref:p,className:It(C.root,M),ownerState:x,...Je(V),children:Ge({id:B,disabled:_,fullWidth:u.fullWidth??!0,size:be==="small"?"small":void 0,InputLabelProps:ut(),InputProps:{ref:Xe,className:C.inputRoot,startAdornment:a,onMouseDown:d=>{d.target===d.currentTarget&&gt(d)},...(Ie||Le)&&{endAdornment:m.jsxs(go,{className:C.endAdornment,ownerState:x,children:[Ie?m.jsx(mo,{...W(),"aria-label":T,title:T,ownerState:x,...Dt,className:It(C.clearIndicator,Dt?.className),children:O}):null,Le?m.jsx(ho,{...Q(),disabled:_,"aria-label":Y?ge:S,title:Y?ge:S,ownerState:x,...Ft,className:It(C.popupIndicator,Ft?.className),children:f}):null]})}},inputProps:{className:C.input,disabled:_,readOnly:K,...q()}})}),de?m.jsx(bo,{as:e,...n,children:m.jsxs(xo,{as:Ye,...t,children:[F&&xe.length===0?m.jsx(Io,{className:C.loading,ownerState:x,children:I}):null,xe.length===0&&!He&&!F?m.jsx(yo,{className:C.noOptions,ownerState:x,role:"presentation",onMouseDown:d=>{d.preventDefault()},children:$e}):null,xe.length>0?m.jsx(xt,{as:lt,...we,children:xe.map((d,re)=>qe?h({key:d.key,group:d.group,children:d.options.map((ae,De)=>wt(ae,d.index+De))}):wt(d,re))}):null]})}):null]})});function tt(o){const{label:l,loading:p,fetching:u,options:A,helperText:L,color:k,onChangeValue:D=()=>null,sx:H,slots:M,slotProps:O,...U}=o,Z=p||u,T=M?.autocomplete??So,ge=M?.textField??Xt;return m.jsx(T,{...O?.autocomplete,loading:Z,options:u?[]:A,onChange:(se,je)=>D(je),...U,renderInput:se=>m.jsx(ge,{...se,label:l,fullWidth:!0,fetching:u,loading:p,hexColor:k,helperText:L,...O?.textField}),sx:H})}tt.__docgenInfo={description:`Autocomplete component that wraps the MUI Autocomplete component with additional props.

Supports extensive customization through slots and slotProps.

@example
\`\`\`tsx
// Basic usage
<Autocomplete
  label="Country"
  options={countries}
  onChangeValue={handleChange}
/>

// With slot customization
<Autocomplete
  label="Country"
  options={countries}
  slots={{
    textField: CustomTextField
  }}
  slotProps={{
    autocomplete: { size: "small" },
    textField: { variant: "filled" }
  }}
/>
\`\`\``,methods:[],displayName:"Autocomplete",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the autocomplete input."},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text to display below the input."},color:{required:!1,tsType:{name:"string"},description:"Optional color for the autocomplete component."},fetching:{required:!1,tsType:{name:"boolean"},description:"If `true`, indicates that data is being fetched."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Optional callback function that is called when the value changes."},slots:{required:!1,tsType:{name:"AutocompleteSlots"},description:"Optional slots for custom rendering"},slotProps:{required:!1,tsType:{name:"AutocompleteSlotProps"},description:"Optional props for the slots"}},composes:["Omit"]};const Ao={title:"Inputs/Autocomplete",component:tt,decorators:[jt({width:300})],parameters:{layout:"centered"},argTypes:{options:{description:"List of available options for the autocomplete"}}},Oe=[...Jt.definitions.vehicle.model],R={args:{label:"Car model",options:Oe}},Fe={args:{...R.args,helperText:"This is a helper text"}},Re={args:{...R.args,loading:!0}},Me={args:{...R.args,loading:!0,value:Oe[0]}},ze={args:{...R.args,fetching:!0}},Ee={args:{...R.args,loading:!0,fetching:!0}},Ne={args:{...R.args,size:"small"}},Ve={args:{...R.args,size:"small",value:Oe[0],loading:!0}},We={args:{...R.args,size:"small",fetching:!0,value:Oe[0]}},Be={render:({bgcolor:o,loading:l,fetching:p})=>{const{palette:u}=ro(),L={primary:u.primary.main,secondary:u.secondary.main}[o],k=u.getContrastText(L);return m.jsx(Ut,{bgcolor:L,padding:3,children:m.jsx(tt,{label:"Car model",options:Oe,color:k,loading:l,fetching:p})})},args:{bgcolor:"secondary",loading:!0,fetching:!0}},Ce={render:o=>{const l=N(Ut)(({theme:p})=>({"& .MuiTextField-root":{"& .MuiOutlinedInput-root":{backgroundColor:p.palette.primary.light,borderRadius:16,"& fieldset":{borderColor:p.palette.primary.main,borderWidth:2},"&:hover fieldset":{borderColor:p.palette.primary.dark},"&.Mui-focused fieldset":{borderColor:p.palette.primary.dark}},"& .MuiInputLabel-root":{color:p.palette.primary.main,fontWeight:600}}}));return m.jsx(l,{children:m.jsx(tt,{...o,slotProps:{autocomplete:{sx:{"& .MuiAutocomplete-popupIndicator":{color:"primary.main"},"& .MuiAutocomplete-clearIndicator":{color:"primary.main"}}},textField:{helperText:"Customized autocomplete with styled components"}}})})},args:{label:"Car model",options:Oe},decorators:[jt({width:350})]};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    options
  }
}`,...R.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "This is a helper text"
  }
}`,...Fe.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...Re.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    value: options[0]
  }
}`,...Me.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...ze.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    fetching: true
  }
}`,...Ee.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...Ne.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    value: options[0],
    loading: true
  }
}`,...Ve.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    fetching: true,
    value: options[0]
  }
}`,...We.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
  render: ({
    bgcolor: bgcolorProp,
    loading,
    fetching
  }: WithBackgroundProps) => {
    const {
      palette
    } = useTheme();
    const BackgroundColors: Record<"primary" | "secondary", string> = {
      primary: palette.primary.main,
      secondary: palette.secondary.main
    };
    const bgcolor = BackgroundColors[bgcolorProp];
    const selectColor = palette.getContrastText(bgcolor);
    return <Box bgcolor={bgcolor} padding={3}>
        <Autocomplete label="Car model" options={options} color={selectColor} loading={loading} fetching={fetching} />
      </Box>;
  },
  args: {
    bgcolor: "secondary",
    loading: true,
    fetching: true
  }
}`,...Be.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Custom styled text field wrapper
    const CustomFieldWrapper = styled(Box)(({
      theme
    }) => ({
      "& .MuiTextField-root": {
        "& .MuiOutlinedInput-root": {
          backgroundColor: theme.palette.primary.light,
          borderRadius: 16,
          "& fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.dark
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.dark
          }
        },
        "& .MuiInputLabel-root": {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      }
    }));
    return <CustomFieldWrapper>
        <Autocomplete {...args} slotProps={{
        autocomplete: {
          sx: {
            "& .MuiAutocomplete-popupIndicator": {
              color: "primary.main"
            },
            "& .MuiAutocomplete-clearIndicator": {
              color: "primary.main"
            }
          }
        },
        textField: {
          helperText: "Customized autocomplete with styled components"
        }
      }} />
      </CustomFieldWrapper>;
  },
  args: {
    label: "Car model",
    options
  },
  decorators: [withContainer({
    width: 350
  })]
}`,...Ce.parameters?.docs?.source},description:{story:`Example demonstrating slot props customization.
Both autocomplete and text field components can be customized.`,...Ce.parameters?.docs?.description}}};const $o=["Default","HelperText","Loading","LoadingWithValue","Fetching","LoadingAndFetching","SizeSmall","SizeSmallLoading","SizeSmallFetching","WithBackground","WithSlotPropsCustomization"],Uo=Object.freeze(Object.defineProperty({__proto__:null,Default:R,Fetching:ze,HelperText:Fe,Loading:Re,LoadingAndFetching:Ee,LoadingWithValue:Me,SizeSmall:Ne,SizeSmallFetching:We,SizeSmallLoading:Ve,WithBackground:Be,WithSlotPropsCustomization:Ce,__namedExportsOrder:$o,default:Ao},Symbol.toStringTag,{value:"Module"}));export{tt as A,R as D,Uo as a};
