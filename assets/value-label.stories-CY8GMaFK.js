import{c as A}from"./storybook-CKEMMUzk.js";import{j as d}from"./iframe-B6ohfiup.js";import{L as y}from"./label-Dl3wbzd_.js";import{D as w}from"./value-displays.types-y9Dsh-vS.js";import"./value-edit-CUBlsVIL.js";import{g as x,V as T}from"./value-content-hXugZIX8.js";import{G as C}from"./Grid-Cb8DrkkP.js";const f=({label:v,value:g,placeholder:L=w,color:e,variant:a})=>{const S=x(v),V=Array.isArray(g)?g.map((h,b)=>d.jsx(y,{text:h.toString()||L,variant:Array.isArray(a)?a[b]:a,color:Array.isArray(e)?e[b]:e},b)):d.jsx(y,{text:g?.toString()||L,variant:Array.isArray(a)?a[0]:a,color:Array.isArray(e)?e[0]:e});return d.jsx(T,{label:v,children:d.jsx(C,{container:!0,gap:1,"aria-labelledby":S,children:V})})};f.__docgenInfo={description:"Displays a label component value with a label",methods:[],displayName:"ValueLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Name of the displayed value"},value:{required:!1,tsType:{name:"T"},description:"Value displayed"},placeholder:{required:!1,tsType:{name:"string"},description:"String rendered if value is undefined",defaultValue:{value:'"-"',computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:`The value has to be displayed as compact or not.
False by default`},variant:{required:!1,tsType:{name:"union",raw:"LabelVariant | LabelVariant[]",elements:[{name:"union",raw:`| "primary"
| "secondary"
| "default"
| "info"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},{name:"Array",elements:[{name:"union",raw:`| "primary"
| "secondary"
| "default"
| "info"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]}],raw:"LabelVariant[]"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const _={title:"Components/Data Display/ValueLabel",component:f,decorators:[A({width:200})],parameters:{layout:"centered"}},r={args:{label:"Lorem",value:"ipsum sit"}},s={args:{label:"Lorem",value:"ipsum sit",variant:"success"}},o={args:{label:"Lorem",value:1e3}},l={args:{label:"Lorem",value:["ipsum sit","amet","dolor"]}},t={args:{label:"Lorem",value:[15,9876,0]}},n={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:"error"}},i={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:["error","success"]}},m={args:{label:"Lorem"}},u={args:{label:"Lorem",placeholder:"."}},c={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:"#9b3242"}},p={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:["#9b3242","#36e3cd"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 1000
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"]
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: [15, 9876, 0]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: "error"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"]
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    placeholder: "."
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: "#9b3242"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: ["#9b3242", "#36e3cd"]
  }
}`,...p.parameters?.docs?.source}}};const j=["Default","Variant","NumberAsValue","TextList","NumberList","ListSingleVariant","ListMultipleVariants","Placeholder","CustomPlaceholder","ListSingleColor","ListMultipleColors"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:u,Default:r,ListMultipleColors:p,ListMultipleVariants:i,ListSingleColor:c,ListSingleVariant:n,NumberAsValue:o,NumberList:t,Placeholder:m,TextList:l,Variant:s,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{r as D,f as V,G as v};
