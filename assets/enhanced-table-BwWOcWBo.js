import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CFahbR6w.js";import{S as V}from"./Search-DE-GaMZ4.js";import{a as T,g as y,c as v,b as A,e as j}from"./identifier-ChVxdG4r.js";import{a as W,b as N,T as M}from"./TableCell-Bp-aYBSJ.js";import{u as g,s as f,a as x,m as S}from"./memoTheme-kZCwlU27.js";import{c as X,B as Y}from"./Typography-BXSoh8s2.js";import{u as q}from"./useSlot-HZ3RMWsh.js";import{B as H}from"./Box-CLV6Ujku.js";import{v as G}from"./visuallyHidden-Dan1xhjv.js";import{T as J}from"./TextField-DDZmRnk7.js";import{I as K}from"./InputAdornment-B75dWK2u.js";import{C as Q}from"./CircularProgress-5NeNm8J5.js";function Z(e){return T("MuiTable",e)}y("MuiTable",["root","stickyHeader"]);const ee=e=>{const{classes:t,stickyHeader:o}=e;return x({root:["root",o&&"stickyHeader"]},Z,t)},te=f("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(S(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:t})=>t.stickyHeader,style:{borderCollapse:"separate"}}]}))),I="table",oe=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTable"}),{className:n,component:a=I,padding:i="normal",size:l="medium",stickyHeader:c=!1,...d}=s,u={...s,component:a,padding:i,size:l,stickyHeader:c},m=ee(u),h=p.useMemo(()=>({padding:i,size:l,stickyHeader:c}),[i,l,c]);return r.jsx(W.Provider,{value:h,children:r.jsx(te,{as:a,role:a===I?null:"table",ref:o,className:v(m.root,n),ownerState:u,...d})})});function ae(e){return T("MuiTableBody",e)}y("MuiTableBody",["root"]);const se=e=>{const{classes:t}=e;return x({root:["root"]},ae,t)},re=f("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),ne={variant:"body"},U="tbody",le=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTableBody"}),{className:n,component:a=U,...i}=s,l={...s,component:a},c=se(l);return r.jsx(N.Provider,{value:ne,children:r.jsx(re,{className:v(c.root,n),as:a,ref:o,role:a===U?null:"rowgroup",ownerState:l,...i})})});function ie(e){return T("MuiTableContainer",e)}y("MuiTableContainer",["root"]);const ce=e=>{const{classes:t}=e;return x({root:["root"]},ie,t)},de=f("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),pe=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTableContainer"}),{className:n,component:a="div",...i}=s,l={...s,component:a},c=ce(l);return r.jsx(de,{ref:o,as:a,className:v(c.root,n),ownerState:l,...i})});function ue(e){return T("MuiTableHead",e)}y("MuiTableHead",["root"]);const me=e=>{const{classes:t}=e;return x({root:["root"]},ue,t)},be=f("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),fe={variant:"head"},k="thead",Te=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTableHead"}),{className:n,component:a=k,...i}=s,l={...s,component:a},c=me(l);return r.jsx(N.Provider,{value:fe,children:r.jsx(be,{as:a,className:v(c.root,n),ref:o,role:a===k?null:"rowgroup",ownerState:l,...i})})});function ye(e){return T("MuiTableRow",e)}const D=y("MuiTableRow",["root","selected","hover","head","footer"]),ve=e=>{const{classes:t,selected:o,hover:s,head:n,footer:a}=e;return x({root:["root",o&&"selected",s&&"hover",n&&"head",a&&"footer"]},ye,t)},ge=f("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(S(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${D.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),P="tr",$=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTableRow"}),{className:n,component:a=P,hover:i=!1,selected:l=!1,...c}=s,d=p.useContext(N),u={...s,component:a,hover:i,selected:l,head:d&&d.variant==="head",footer:d&&d.variant==="footer"},m=ve(u);return r.jsx(ge,{as:a,ref:o,className:v(m.root,n),role:a===P?null:"row",ownerState:u,...c})}),xe=X(r.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function he(e){return T("MuiTableSortLabel",e)}const R=y("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),we=e=>{const{classes:t,direction:o,active:s}=e,n={root:["root",s&&"active",`direction${j(o)}`],icon:["icon",`iconDirection${j(o)}`]};return x(n,he,t)},Ce=f(Y,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.active&&t.active]}})(S(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${R.icon}`]:{opacity:.5}},[`&.${R.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${R.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}}))),Se=f("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,t[`iconDirection${j(o.direction)}`]]}})(S(({theme:e})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),Re=p.forwardRef(function(t,o){const s=g({props:t,name:"MuiTableSortLabel"}),{active:n=!1,children:a,className:i,direction:l="asc",hideSortIcon:c=!1,IconComponent:d=xe,slots:u={},slotProps:m={},...h}=s,w={...s,active:n,direction:l,hideSortIcon:c,IconComponent:d},C=we(w),b={slots:u,slotProps:m},[L,F]=q("root",{elementType:Ce,externalForwardedProps:b,ownerState:w,className:v(C.root,i),ref:o}),[z,_]=q("icon",{elementType:Se,externalForwardedProps:b,ownerState:w,className:C.icon});return r.jsxs(L,{disableRipple:!0,component:"span",...F,...h,children:[a,c&&!n?null:r.jsx(z,{as:d,..._})]})}),O=({order:e,orderBy:t,headCells:o,onRequestSort:s})=>{const n=a=>()=>{s(a)};return r.jsx(Te,{children:r.jsx($,{children:o.map(a=>r.jsx(M,{variant:"head",padding:a.disablePadding?"none":"normal",sortDirection:t===a.id?e:!1,sx:{fontWeight:"bold"},children:a.sort?r.jsxs(Re,{active:t===a.id,direction:t===a.id?e:"asc",onClick:n(a.id),children:[a.label,t===a.id?r.jsx(H,{component:"span",sx:G,children:e==="desc"?"sorted descending":"sorted ascending"}):null]}):a.label},String(a.id)))})})};O.__docgenInfo={description:"",methods:[],displayName:"EnhancedTableHead",props:{onRequestSort:{required:!0,tsType:{name:"signature",type:"function",raw:"(property: keyof T) => void",signature:{arguments:[{type:{name:"T"},name:"property"}],return:{name:"void"}}},description:""},order:{required:!0,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:""},orderBy:{required:!0,tsType:{name:"T"},description:""},headCells:{required:!0,tsType:{name:"Array",elements:[{name:"HeadCell",elements:[{name:"T"}],raw:"HeadCell<T>"}],raw:"HeadCell<T>[]"},description:""}}};function je(e,t){return o=>!t||e.some(s=>{let n=o[s.id];return n!=null&&n.toLowerCase&&(n=n.toLowerCase()),n==null?void 0:n.toString().includes(t.toLowerCase())})}function Me(e,t){return e==="desc"?(o,s)=>B(o,s,t):(o,s)=>-B(o,s,t)}function B(e,t,o){return t[o]<e[o]?-1:t[o]>e[o]?1:0}const E=({children:e,data:t,search:o,columns:s,defaultSort:n,defaultOrder:a="asc",loading:i=!1})=>{const[l,c]=p.useState(""),[d,u]=p.useState(a),[m,h]=p.useState(n),w=b=>{u(m===b&&d==="asc"?"desc":"asc"),h(b)},C=t.slice().filter(je(s,l)).sort(Me(d,m));return r.jsx(r.Fragment,{children:r.jsxs(H,{sx:{paddingX:1,paddingBottom:2},children:[o&&r.jsx(H,{paddingY:2,children:r.jsx(J,{fullWidth:!0,placeholder:"Search",InputProps:{role:"search",startAdornment:r.jsx(K,{position:"start",children:r.jsx(V,{})})},onChange:b=>c(b.target.value)})}),r.jsx(pe,{children:r.jsxs(oe,{children:[r.jsx(O,{order:d,orderBy:m,headCells:s,onRequestSort:w}),r.jsx(le,{children:i?r.jsx($,{children:r.jsx(M,{colSpan:s.length,sx:{textAlign:"center"},children:r.jsx(Q,{})})}):C.length===0?r.jsx($,{children:r.jsx(M,{colSpan:s.length,sx:{textAlign:"center"},children:"No data"})}):e(C)})]})})]})})};E.defaultProps={defaultOrder:"asc"};E.__docgenInfo={description:"",methods:[],displayName:"EnhancedTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},defaultSort:{required:!0,tsType:{name:"T"},description:""},defaultOrder:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columns:{required:!0,tsType:{name:"Array",elements:[{name:"HeadCell",elements:[{name:"T"}],raw:"HeadCell<T>"}],raw:"HeadCell<T>[]"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T[]) => ReactNode",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"data"}],return:{name:"ReactNode"}}},description:""}}};export{E,$ as T,pe as a,oe as b,O as c,le as d};
