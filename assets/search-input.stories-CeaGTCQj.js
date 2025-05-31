import{a as ne,c as le}from"./storybook-CDs3mFlN.js";import{r as y,a as ie,j as e}from"./iframe-CyC2w49y.js";import{C as ce}from"./Clear-BNFpNgrD.js";import{S as me}from"./Search-4W8WcA1Q.js";import{c as ue}from"./Typography-CyoT5iG8.js";import{T as q}from"./TextField-DjsTrXPP.js";import{I as G}from"./InputAdornment-DKkpQPbk.js";import{I}from"./IconButton-G5bFnDkw.js";import{P as pe}from"./Paper-VpekSNGd.js";import{C as de}from"./Collapse-BJDAWlqa.js";import{G as p}from"./Grid-DcpqZmzV.js";import{a as he,g as fe,c as xe}from"./generateUtilityClasses-DiH4kTrr.js";import{u as ge}from"./useFormControl-DVUKBLIk.js";import{f as be}from"./OutlinedInput-CWVotCN6.js";import{s as Se,a as je}from"./memoTheme-D8ZqR_KA.js";import{F as ye,C as ve}from"./FormControlLabel-N1wXNYhP.js";import{b as Ce}from"./DateTimePicker-t0qS6LB4.js";import{B as A}from"./Button-BsHUy8NG.js";function we(n){return he("MuiFormGroup",n)}fe("MuiFormGroup",["root","row","error"]);const Te=n=>{const{classes:s,row:l,error:t}=n;return je({root:["root",l&&"row",t&&"error"]},we,s)},Fe=Se("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(n,s)=>{const{ownerState:l}=n;return[s.root,l.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),Ie=y.forwardRef(function(s,l){const t=ie({props:s,name:"MuiFormGroup"}),{className:i,row:v=!1,...m}=t,C=ge(),w=be({props:t,muiFormControl:C,states:["error"]}),S={...t,row:v,error:w.error},T=Te(S);return e.jsx(Fe,{className:xe(T.root,i),ownerState:S,ref:l,...m})}),De=ue(e.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"})),ze={position:"absolute"},M=n=>{const s={search:""},l={search:!1};return n.forEach(({id:t,type:i})=>{i==="text"?s[t]="":i==="number"?s[t]=0:i==="boolean"?s[t]=!1:s[t]=Date.now(),l[t]=!1}),{initialData:s,fields:l}},te=({label:n,placeholder:s,helperText:l,size:t="medium",fullWidth:i,dateFormat:v,filters:m=[],onSearch:C,sx:w})=>{const{initialData:S,fields:T}=M(m),[u,D]=y.useState(S),[z,W]=y.useState(T),[L,F]=y.useState(!1),P=m.length>0,se=Object.values(z).some(r=>!!r),_=()=>{const{initialData:r,fields:a}=M(m);D(r),W(a)},j=(r,a)=>{D(o=>({...o,[r]:a})),W(o=>({...o,[r]:!!a}))},ae=r=>{r.preventDefault(),F(!1);const a={};Object.entries(z).forEach(([o,c])=>{c&&(a[o]=u[o])}),C(a),_()};return e.jsxs("form",{onSubmit:ae,children:[e.jsx(q,{label:n,required:!0,value:u.search,onChange:r=>j("search",r.target.value),fullWidth:i,helperText:l,size:t,sx:w,InputProps:{placeholder:s,startAdornment:e.jsx(G,{position:"start",children:e.jsx(I,{type:"submit",size:t,sx:{mr:1},children:e.jsx(me,{})})}),endAdornment:P&&e.jsxs(G,{position:"end",children:[se&&e.jsx(I,{size:t,sx:{ml:1},onClick:_,children:e.jsx(ce,{})}),e.jsx(I,{size:t,onClick:()=>F(r=>!r),children:e.jsx(De,{})})]})}}),P&&e.jsx(pe,{sx:{filtersSx:ze},children:e.jsx(de,{in:L,children:e.jsxs(p,{container:!0,sx:{p:2},spacing:1,children:[L&&m.map(({id:r,label:a,type:o})=>o==="boolean"?e.jsx(p,{size:{xs:12},children:e.jsx(Ie,{children:e.jsx(ye,{control:e.jsx(ve,{}),label:a,checked:u[r],onChange:(c,oe)=>j(r,oe)})})},r):o==="datetime"?e.jsx(p,{size:{xs:12},children:e.jsx(Ce,{enableAccessibleFieldDOMStructure:!1,label:a,format:v,value:u[r],onChange:c=>j(r,c),slotProps:{textField:{size:"small"}},sx:{width:1}})},r):e.jsx(p,{size:{xs:12},children:e.jsx(q,{type:o,size:"small",label:a,value:u[r],onChange:c=>j(r,o==="number"?Number.parseInt(c.target.value,10):c.target.value),fullWidth:!0})},r)),e.jsxs(p,{size:{xs:12},display:"flex",justifyContent:"flex-end",children:[e.jsx(A,{color:"error",onClick:()=>F(!1),sx:{mr:1},children:"Close"}),e.jsx(A,{type:"submit",children:"Search"})]})]})})})]})};te.__docgenInfo={description:"A generic search input component that supports various types of filters.",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:"The label for the search input."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text for the search input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the search input will take up the full width of its container."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the search input."},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the search input.",defaultValue:{value:'"medium"',computed:!1}},filters:{required:!1,tsType:{name:"Array",elements:[{name:"SearchFilter"}],raw:"SearchFilter[]"},description:"An array of filters to apply to the search.",defaultValue:{value:"[]",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides and additional CSS styles."},dateFormat:{required:!1,tsType:{name:"string"},description:"The format to use for date inputs."},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:"Callback function to handle the search action."}}};const We={title:"Components/Inputs/SearchInput",component:te,decorators:[ne],parameters:{layout:"centered"}},d={args:{}},h={args:{label:"Lorem ipsum",fullWidth:!0}},f={args:{placeholder:"Lorem ipsum",fullWidth:!0}},x={args:{placeholder:"Lorem ipsum",fullWidth:!0,helperText:"this is a helper text"}},g={args:{placeholder:"Lorem ipsum",fullWidth:!0,size:"small"}},b={args:{placeholder:"Lorem ipsum",fullWidth:!0,filters:[{id:"subject",type:"text",label:"Subject"},{id:"amount",type:"number",label:"Amount"},{id:"hasSomething",type:"boolean",label:"Has something"},{id:"createdBefore",type:"datetime",label:"Created before"}]},decorators:[le({width:400,height:400,padding:5})]};var k,H,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var E,O,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Lorem ipsum",
    fullWidth: true
  }
}`,...(B=(O=h.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var N,R,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true
  }
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,J,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Le=["Default","Label","Placeholder","HelperText","Small","WithFilters"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:d,HelperText:x,Label:h,Placeholder:f,Small:g,WithFilters:b,__namedExportsOrder:Le,default:We},Symbol.toStringTag,{value:"Module"}));export{d as D,te as S,Qe as s};
