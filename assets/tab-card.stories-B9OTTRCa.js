import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CFahbR6w.js";import{u as v}from"./theme-BtDhr7sM.js";import{P as D}from"./Paper-F-UPHvIG.js";import{B as y}from"./Box-CohR-H6x.js";import{s as h}from"./memoTheme-DEu9pJpV.js";import{T as P,a as S}from"./Tabs-B6_HL1Xw.js";import{L as x}from"./label-DG5uowcL.js";import{T as c}from"./Typography-ByJtF3w8.js";const C=u.createContext([0,()=>null]),q=C.Provider,M=h(e=>a.jsx(P,{...e,TabIndicatorProps:{children:a.jsx("span",{className:"MuiTabs-indicatorSpan"})}}))(({theme:e})=>({minHeight:e.spacing(5),"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{maxWidth:40,width:"100%",backgroundColor:e.palette.primary.main}})),N=h(S)(({theme:e})=>({textTransform:"none",fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(1),color:e.palette.text.secondary,paddingTop:0,paddingBottom:0,minHeight:e.spacing(5),"&.Mui-selected":{color:e.palette.text.secondary,fontWeight:e.typography.fontWeightBold}})),j=({children:e,tabs:t,initialTab:r=0,onChangeTab:o=()=>null})=>{const i=v(),[m,b]=u.useState(r),_=(l,n)=>{b(n),o(t[n],n)};return a.jsx(q,{value:[m,b],children:a.jsxs(D,{variant:"outlined",children:[a.jsx(y,{bgcolor:i,children:a.jsx(M,{value:m,onChange:_,children:t.map(({text:l,icon:n})=>a.jsx(N,{iconPosition:"start",disableRipple:!0,label:l,icon:n},l))})}),e]})})};j.__docgenInfo={description:"",methods:[],displayName:"TabCard",props:{initialTab:{defaultValue:{value:"0",computed:!1},required:!1},onChangeTab:{defaultValue:{value:"() => null",computed:!1},required:!1}}};const d=({index:e,children:t,sx:r})=>{const[o]=u.useContext(C);let i=o===e;return Array.isArray(e)&&(i=e.includes(o)),i?a.jsx(y,{sx:r,children:t}):null};d.__docgenInfo={description:"",methods:[],displayName:"TabCardPanel"};const W=[{text:"tab 1"},{text:"tab 2.1",icon:a.jsx(x,{text:"10",variant:"success",sx:{mr:1}})},{text:"tab 2.2"},{text:"tab 3",icon:a.jsx(x,{text:"12",variant:"error",sx:{mr:1}})}];function p({tabs:e,initialTab:t,onChangeTab:r}){return a.jsxs(j,{tabs:e,initialTab:t,onChangeTab:r,children:[a.jsx(d,{index:0,sx:{p:2},children:a.jsx(c,{children:"Panel 1"})}),a.jsx(d,{index:[1,2],sx:{p:2},children:a.jsx(c,{children:"Panel 2"})}),a.jsx(d,{index:3,sx:{p:2},children:a.jsx(c,{children:"Panel 3"})})]})}p.__docgenInfo={description:"",methods:[],displayName:"TabCardDummy",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabData"}],raw:"TabData[]"},description:""},initialTab:{required:!0,tsType:{name:"number"},description:""},onChangeTab:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabData, index: number) => void",signature:{arguments:[{type:{name:"TabData"},name:"tab"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const B={title:"Components/Navigation/TabCard",component:p,parameters:{layout:"centered"},render:e=>a.jsx(p,{...e})},s={args:{tabs:W}};var T,g,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tabs: DummyTabs
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{s as D,j as T,z as t};
