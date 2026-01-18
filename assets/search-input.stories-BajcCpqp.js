import{a as O,c as B}from"./storybook-Br2qlmUO.js";import{r as y,b as N,j as e,e as R}from"./iframe-BupHDtd1.js";import{C as U}from"./Clear-D7FDOI2G.js";import{S as $}from"./Search-BxHxrTq5.js";import{c as J}from"./Typography-BHekySi3.js";import{T as q}from"./TextField-HCk6Ljdm.js";import{I as G}from"./InputAdornment-B2zP22ml.js";import{I}from"./IconButton-CYN55AKW.js";import{P as K}from"./Paper-ZM7KCuNl.js";import{C as Q}from"./Collapse-2mJ45f5n.js";import{G as p}from"./Grid-BpBV2Lm1.js";import{a as X,g as Y}from"./generateUtilityClasses-CoM_PQv9.js";import{u as Z}from"./useFormControl-DOIECqUk.js";import{f as ee}from"./OutlinedInput-BjAMRR9Y.js";import{s as re,a as te}from"./memoTheme-uoO9vclW.js";import{F as se,C as ae}from"./FormControlLabel-CuE0qGFE.js";import{b as oe}from"./DateTimePicker-BywAhQO6.js";import{B as A}from"./Button-orM3su5N.js";function ne(n){return X("MuiFormGroup",n)}Y("MuiFormGroup",["root","row","error"]);const le=n=>{const{classes:s,row:l,error:t}=n;return te({root:["root",l&&"row",t&&"error"]},ne,s)},ie=re("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(n,s)=>{const{ownerState:l}=n;return[s.root,l.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),ce=y.forwardRef(function(s,l){const t=N({props:s,name:"MuiFormGroup"}),{className:i,row:v=!1,...m}=t,C=Z(),w=ee({props:t,muiFormControl:C,states:["error"]}),S={...t,row:v,error:w.error},T=le(S);return e.jsx(ie,{className:R(T.root,i),ownerState:S,ref:l,...m})}),me=J(e.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"})),ue={position:"absolute"},M=n=>{const s={search:""},l={search:!1};return n.forEach(({id:t,type:i})=>{i==="text"?s[t]="":i==="number"?s[t]=0:i==="boolean"?s[t]=!1:s[t]=Date.now(),l[t]=!1}),{initialData:s,fields:l}},k=({label:n,placeholder:s,helperText:l,size:t="medium",fullWidth:i,dateFormat:v,filters:m=[],onSearch:C,sx:w})=>{const{initialData:S,fields:T}=M(m),[u,D]=y.useState(S),[z,W]=y.useState(T),[L,F]=y.useState(!1),P=m.length>0,H=Object.values(z).some(r=>!!r),_=()=>{const{initialData:r,fields:a}=M(m);D(r),W(a)},j=(r,a)=>{D(o=>({...o,[r]:a})),W(o=>({...o,[r]:!!a}))},V=r=>{r.preventDefault(),F(!1);const a={};Object.entries(z).forEach(([o,c])=>{c&&(a[o]=u[o])}),C(a),_()};return e.jsxs("form",{onSubmit:V,children:[e.jsx(q,{label:n,required:!0,value:u.search,onChange:r=>j("search",r.target.value),fullWidth:i,helperText:l,size:t,sx:w,InputProps:{placeholder:s,startAdornment:e.jsx(G,{position:"start",children:e.jsx(I,{type:"submit",size:t,sx:{mr:1},children:e.jsx($,{})})}),endAdornment:P&&e.jsxs(G,{position:"end",children:[H&&e.jsx(I,{size:t,sx:{ml:1},onClick:_,children:e.jsx(U,{})}),e.jsx(I,{size:t,onClick:()=>F(r=>!r),children:e.jsx(me,{})})]})}}),P&&e.jsx(K,{sx:{filtersSx:ue},children:e.jsx(Q,{in:L,children:e.jsxs(p,{container:!0,sx:{p:2},spacing:1,children:[L&&m.map(({id:r,label:a,type:o})=>o==="boolean"?e.jsx(p,{size:{xs:12},children:e.jsx(ce,{children:e.jsx(se,{control:e.jsx(ae,{}),label:a,checked:u[r],onChange:(c,E)=>j(r,E)})})},r):o==="datetime"?e.jsx(p,{size:{xs:12},children:e.jsx(oe,{enableAccessibleFieldDOMStructure:!1,label:a,format:v,value:u[r],onChange:c=>j(r,c),slotProps:{textField:{size:"small"}},sx:{width:1}})},r):e.jsx(p,{size:{xs:12},children:e.jsx(q,{type:o,size:"small",label:a,value:u[r],onChange:c=>j(r,o==="number"?Number.parseInt(c.target.value,10):c.target.value),fullWidth:!0})},r)),e.jsxs(p,{size:{xs:12},display:"flex",justifyContent:"flex-end",children:[e.jsx(A,{color:"error",onClick:()=>F(!1),sx:{mr:1},children:"Close"}),e.jsx(A,{type:"submit",children:"Search"})]})]})})})]})};k.__docgenInfo={description:"A generic search input component that supports various types of filters.",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:"The label for the search input."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text for the search input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the search input will take up the full width of its container."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the search input."},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the search input.",defaultValue:{value:'"medium"',computed:!1}},filters:{required:!1,tsType:{name:"Array",elements:[{name:"SearchFilter"}],raw:"SearchFilter[]"},description:"An array of filters to apply to the search.",defaultValue:{value:"[]",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides and additional CSS styles."},dateFormat:{required:!1,tsType:{name:"string"},description:"The format to use for date inputs."},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:"Callback function to handle the search action."}}};const pe={title:"Components/Inputs/SearchInput",component:k,decorators:[O],parameters:{layout:"centered"}},d={args:{}},h={args:{label:"Lorem ipsum",fullWidth:!0}},f={args:{placeholder:"Lorem ipsum",fullWidth:!0}},x={args:{placeholder:"Lorem ipsum",fullWidth:!0,helperText:"this is a helper text"}},g={args:{placeholder:"Lorem ipsum",fullWidth:!0,size:"small"}},b={args:{placeholder:"Lorem ipsum",fullWidth:!0,filters:[{id:"subject",type:"text",label:"Subject"},{id:"amount",type:"number",label:"Amount"},{id:"hasSomething",type:"boolean",label:"Has something"},{id:"createdBefore",type:"datetime",label:"Created before"}]},decorators:[B({width:400,height:400,padding:5})]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem ipsum",
    fullWidth: true
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    helperText: "this is a helper text"
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    size: "small"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const de=["Default","Label","Placeholder","HelperText","Small","WithFilters"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Default:d,HelperText:x,Label:h,Placeholder:f,Small:g,WithFilters:b,__namedExportsOrder:de,default:pe},Symbol.toStringTag,{value:"Module"}));export{d as D,k as S,Pe as s};
