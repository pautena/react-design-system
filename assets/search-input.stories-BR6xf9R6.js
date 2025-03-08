import{a as te,w as oe}from"./storybook-BExNV_A2.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-CFahbR6w.js";import{c as se}from"./Typography-BXSoh8s2.js";import{S as ae}from"./Search-DE-GaMZ4.js";import{C as ie}from"./Clear-CjVwwYeo.js";import{T as G}from"./TextField-DDZmRnk7.js";import{I as z}from"./InputAdornment-B75dWK2u.js";import{I as F}from"./IconButton-X2xkCwyW.js";import{P as ne}from"./Paper-0PE78at3.js";import{C as le}from"./Collapse-HKIBMM8Y.js";import{G as u}from"./Grid-CKxAJcKv.js";import{a as me,g as pe,c as ce,k as ue}from"./identifier-ChVxdG4r.js";import{u as de}from"./useFormControl-Bi_or6kT.js";import{f as he}from"./FormControl-BBCSTdi-.js";import{u as fe,s as xe,a as ge}from"./memoTheme-kZCwlU27.js";import{F as be,C as je}from"./FormControlLabel-cWkc_RJu.js";import{b as Se}from"./DateTimePicker-CHf3D-uG.js";import{B as k}from"./Button-C1N17xc9.js";import"./notification-center.provider-DGQlM2s5.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useTheme-CfVHYLf1.js";import"./extendSxProp-C7aHAb1N.js";import"./useSlot-HZ3RMWsh.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Box-CLV6Ujku.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./CircularProgress-5NeNm8J5.js";import"./Select-Bsr0nPNC.js";import"./index-n2pnZwpZ.js";import"./useSlotProps-BuS7XknB.js";import"./Popover-BrIlDozf.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DJIq4c2v.js";import"./debounce-Be36O1Ab.js";import"./Modal-QJZQr9Mv.js";import"./Portal-Bjszn9Vx.js";import"./Fade-WD5A-epX.js";import"./List-BUK6or8F.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-BgdWXRS5.js";import"./FormHelperText-DAqACIH9.js";import"./SwitchBase-4aJ_BVyU.js";import"./DateCalendar-ofOVHG2t.js";import"./index-67R7ntAU.js";import"./Tabs-B9YEYycs.js";import"./KeyboardArrowRight-DEwcZVyS.js";import"./DialogContent-NSAkYDAV.js";import"./listItemButtonClasses-xNkeGjcb.js";import"./Chip-Brf-Qufy.js";import"./Divider-NmFzzByE.js";import"./dividerClasses-Ubv0-wcR.js";import"./MenuItem-B6X7LaMp.js";import"./listItemIconClasses-BJTJNZr2.js";import"./listItemTextClasses-Bv6UoQn1.js";import"./visuallyHidden-Dan1xhjv.js";import"./Popper-BhXwPKmp.js";function ve(i){return me("MuiFormGroup",i)}pe("MuiFormGroup",["root","row","error"]);const Ce=i=>{const{classes:o,row:n,error:t}=i;return ge({root:["root",n&&"row",t&&"error"]},ve,o)},ye=xe("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:n}=i;return[o.root,n.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),we=S.forwardRef(function(o,n){const t=fe({props:o,name:"MuiFormGroup"}),{className:l,row:v=!1,...p}=t,C=de(),y=he({props:t,muiFormControl:C,states:["error"]}),d={...t,row:v,error:y.error},w=Ce(d);return e.jsx(ye,{className:ce(w.root,l),ownerState:d,ref:n,...p})}),Te=se(e.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"}),"Tune"),Fe={position:"absolute"},M=i=>{const o={search:""},n={search:!1};return i.forEach(({id:t,type:l})=>{l==="text"?o[t]="":l==="number"?o[t]=0:l==="boolean"?o[t]=!1:o[t]=Date.now(),n[t]=!1}),{initialData:o,fields:n}},Z=({label:i,placeholder:o,helperText:n,size:t="medium",fullWidth:l,dateFormat:v,filters:p=[],onSearch:C,sx:y})=>{const{initialData:d,fields:w}=M(p),[c,I]=S.useState(d),[W,D]=S.useState(w),[L,T]=S.useState(!1),P=p.length>0,$=Object.values(W).some(r=>!!r),q=()=>{const{initialData:r,fields:s}=M(p);I(r),D(s)},h=(r,s)=>{I(a=>({...a,[r]:s})),D(a=>({...a,[r]:!!s}))},ee=r=>{r.preventDefault(),T(!1);const s={};Object.entries(W).forEach(([a,m])=>{m&&(s[a]=c[a])}),C(s),q()};return e.jsxs("form",{onSubmit:ee,children:[e.jsx(G,{label:i,required:!0,value:c.search,onChange:r=>h("search",r.target.value),fullWidth:l,helperText:n,size:t,sx:y,InputProps:{placeholder:o,startAdornment:e.jsx(z,{position:"start",children:e.jsx(F,{type:"submit",size:t,sx:{mr:1},children:e.jsx(ae,{})})}),endAdornment:P&&e.jsxs(z,{position:"end",children:[$&&e.jsx(F,{size:t,sx:{ml:1},onClick:q,children:e.jsx(ie,{})}),e.jsx(F,{size:t,onClick:()=>T(r=>!r),children:e.jsx(Te,{})})]})}}),P&&e.jsx(ne,{sx:{filtersSx:Fe},children:e.jsx(le,{in:L,children:e.jsxs(u,{container:!0,sx:{p:2},spacing:1,children:[L&&p.map(({id:r,label:s,type:a})=>a==="boolean"?e.jsx(u,{item:!0,xs:12,children:e.jsx(we,{children:e.jsx(be,{control:e.jsx(je,{}),label:s,checked:c[r],onChange:(m,re)=>h(r,re)})})},r):a==="datetime"?e.jsx(u,{item:!0,xs:12,children:e.jsx(Se,{label:s,format:v,value:c[r],onChange:m=>h(r,m),slotProps:{textField:{size:"small"}},sx:{width:1}})},r):e.jsx(u,{item:!0,xs:12,children:e.jsx(G,{type:a,size:"small",label:s,value:c[r],onChange:m=>h(r,a==="number"?parseInt(m.target.value,10):m.target.value),fullWidth:!0})},r)),e.jsxs(u,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:[e.jsx(k,{color:"error",onClick:()=>T(!1),sx:{mr:1},children:"Close"}),e.jsx(k,{type:"submit",children:"Search"})]})]})})})]})};Z.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},filters:{required:!1,tsType:{name:"Array",elements:[{name:"SearchFilter"}],raw:"SearchFilter[]"},description:"",defaultValue:{value:"[]",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},dateFormat:{required:!1,tsType:{name:"string"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: T) => void",signature:{arguments:[{type:{name:"T"},name:"data"}],return:{name:"void"}}},description:""}}};const Hr={title:"Components/Inputs/SearchInput",component:Z,decorators:[te,oe({width:400,height:400,backgroundColor:ue[100],padding:5})],parameters:{layout:"centered"}},f={args:{label:"Lorem ipsum",fullWidth:!0}},x={args:{placeholder:"Lorem ipsum",fullWidth:!0}},g={args:{placeholder:"Lorem ipsum",fullWidth:!0,helperText:"this is a helper text"}},b={args:{placeholder:"Lorem ipsum",fullWidth:!0,size:"small"}},j={args:{placeholder:"Lorem ipsum",fullWidth:!0,filters:[{id:"subject",type:"text",label:"Subject"},{id:"amount",type:"number",label:"Amount"},{id:"hasSomething",type:"boolean",label:"Has something"},{id:"createdBefore",type:"datetime",label:"Created before"}]}};var V,A,E;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Lorem ipsum",
    fullWidth: true
  }
}`,...(E=(A=f.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,_,B;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true
  }
}`,...(B=(_=x.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,N,U;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    helperText: "this is a helper text"
  }
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var O,J,K;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    size: "small"
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const _r=["Label","Placeholder","HelperText","Small","WithFilters"];export{g as HelperText,f as Label,x as Placeholder,b as Small,j as WithFilters,_r as __namedExportsOrder,Hr as default};
