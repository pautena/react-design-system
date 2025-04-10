import{a as ne,w as le}from"./storybook-C_VffeMb.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-MPVjHJeJ.js";import{c as ie}from"./Typography-onhS7x9v.js";import{S as ce}from"./Search-eQRh3AiA.js";import{C as me}from"./Clear-CtNCTsnd.js";import{T as q}from"./TextField-rs_TM4SP.js";import{I as G}from"./InputAdornment-BcK1IB6P.js";import{I}from"./IconButton-Ozf8R3HC.js";import{P as ue}from"./Paper-C5PX7apq.js";import{C as pe}from"./Collapse-rN_DbazP.js";import{G as p}from"./Grid-BFTfWWd6.js";import{a as de,g as he,c as fe}from"./generateUtilityClasses-DLmekfm-.js";import{u as xe}from"./useFormControl-DTLAn0zY.js";import{f as ge}from"./FormControl-B4yIv7Eg.js";import{u as be}from"./DefaultPropsProvider-DsKJO0Hi.js";import{s as Se,a as je}from"./memoTheme-DlVnEjn-.js";import{F as ye,C as ve}from"./FormControlLabel-na5uC5bt.js";import{b as Ce}from"./DateTimePicker-1j8LThLE.js";import{B as A}from"./Button-CuyBN5Mz.js";function we(n){return de("MuiFormGroup",n)}he("MuiFormGroup",["root","row","error"]);const Te=n=>{const{classes:s,row:l,error:t}=n;return je({root:["root",l&&"row",t&&"error"]},we,s)},Fe=Se("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(n,s)=>{const{ownerState:l}=n;return[s.root,l.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),Ie=y.forwardRef(function(s,l){const t=be({props:s,name:"MuiFormGroup"}),{className:i,row:v=!1,...m}=t,C=xe(),w=ge({props:t,muiFormControl:C,states:["error"]}),S={...t,row:v,error:w.error},T=Te(S);return e.jsx(Fe,{className:fe(T.root,i),ownerState:S,ref:l,...m})}),De=ie(e.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"}),"Tune"),We={position:"absolute"},M=n=>{const s={search:""},l={search:!1};return n.forEach(({id:t,type:i})=>{i==="text"?s[t]="":i==="number"?s[t]=0:i==="boolean"?s[t]=!1:s[t]=Date.now(),l[t]=!1}),{initialData:s,fields:l}},te=({label:n,placeholder:s,helperText:l,size:t="medium",fullWidth:i,dateFormat:v,filters:m=[],onSearch:C,sx:w})=>{const{initialData:S,fields:T}=M(m),[u,D]=y.useState(S),[W,L]=y.useState(T),[P,F]=y.useState(!1),z=m.length>0,se=Object.values(W).some(r=>!!r),_=()=>{const{initialData:r,fields:a}=M(m);D(r),L(a)},j=(r,a)=>{D(o=>({...o,[r]:a})),L(o=>({...o,[r]:!!a}))},ae=r=>{r.preventDefault(),F(!1);const a={};Object.entries(W).forEach(([o,c])=>{c&&(a[o]=u[o])}),C(a),_()};return e.jsxs("form",{onSubmit:ae,children:[e.jsx(q,{label:n,required:!0,value:u.search,onChange:r=>j("search",r.target.value),fullWidth:i,helperText:l,size:t,sx:w,InputProps:{placeholder:s,startAdornment:e.jsx(G,{position:"start",children:e.jsx(I,{type:"submit",size:t,sx:{mr:1},children:e.jsx(ce,{})})}),endAdornment:z&&e.jsxs(G,{position:"end",children:[se&&e.jsx(I,{size:t,sx:{ml:1},onClick:_,children:e.jsx(me,{})}),e.jsx(I,{size:t,onClick:()=>F(r=>!r),children:e.jsx(De,{})})]})}}),z&&e.jsx(ue,{sx:{filtersSx:We},children:e.jsx(pe,{in:P,children:e.jsxs(p,{container:!0,sx:{p:2},spacing:1,children:[P&&m.map(({id:r,label:a,type:o})=>o==="boolean"?e.jsx(p,{item:!0,xs:12,children:e.jsx(Ie,{children:e.jsx(ye,{control:e.jsx(ve,{}),label:a,checked:u[r],onChange:(c,oe)=>j(r,oe)})})},r):o==="datetime"?e.jsx(p,{item:!0,xs:12,children:e.jsx(Ce,{label:a,format:v,value:u[r],onChange:c=>j(r,c),slotProps:{textField:{size:"small"}},sx:{width:1}})},r):e.jsx(p,{item:!0,xs:12,children:e.jsx(q,{type:o,size:"small",label:a,value:u[r],onChange:c=>j(r,o==="number"?parseInt(c.target.value,10):c.target.value),fullWidth:!0})},r)),e.jsxs(p,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:[e.jsx(A,{color:"error",onClick:()=>F(!1),sx:{mr:1},children:"Close"}),e.jsx(A,{type:"submit",children:"Search"})]})]})})})]})};te.__docgenInfo={description:"A generic search input component that supports various types of filters.",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:"The label for the search input."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text for the search input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the search input will take up the full width of its container."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the search input."},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the search input.",defaultValue:{value:'"medium"',computed:!1}},filters:{required:!1,tsType:{name:"Array",elements:[{name:"SearchFilter"}],raw:"SearchFilter[]"},description:"An array of filters to apply to the search.",defaultValue:{value:"[]",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides and additional CSS styles."},dateFormat:{required:!1,tsType:{name:"string"},description:"The format to use for date inputs."},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:"Callback function to handle the search action."}}};const Le={title:"Components/Inputs/SearchInput",component:te,decorators:[ne],parameters:{layout:"centered"}},d={args:{}},h={args:{label:"Lorem ipsum",fullWidth:!0}},f={args:{placeholder:"Lorem ipsum",fullWidth:!0}},x={args:{placeholder:"Lorem ipsum",fullWidth:!0,helperText:"this is a helper text"}},g={args:{placeholder:"Lorem ipsum",fullWidth:!0,size:"small"}},b={args:{placeholder:"Lorem ipsum",fullWidth:!0,filters:[{id:"subject",type:"text",label:"Subject"},{id:"amount",type:"number",label:"Amount"},{id:"hasSomething",type:"boolean",label:"Has something"},{id:"createdBefore",type:"datetime",label:"Created before"}]},decorators:[le({width:400,height:400,padding:5})]};var k,H,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var E,B,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Lorem ipsum",
    fullWidth: true
  }
}`,...(O=(B=h.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var R,N,U;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true
  }
}`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var $,J,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    helperText: "this is a helper text"
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    size: "small"
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    filters: [{
      id: "subject",
      type: "text",
      label: "Subject"
    }, {
      id: "amount",
      type: "number",
      label: "Amount"
    }, {
      id: "hasSomething",
      type: "boolean",
      label: "Has something"
    }, {
      id: "createdBefore",
      type: "datetime",
      label: "Created before"
    }]
  },
  decorators: [withContainer({
    width: 400,
    height: 400,
    padding: 5
  })]
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Pe=["Default","Label","Placeholder","HelperText","Small","WithFilters"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default:d,HelperText:x,Label:h,Placeholder:f,Small:g,WithFilters:b,__namedExportsOrder:Pe,default:Le},Symbol.toStringTag,{value:"Module"}));export{d as D,te as S,Ye as s};
