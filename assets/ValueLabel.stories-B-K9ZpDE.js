import{w as V}from"./storybook-DuV2iONK.js";import{j as u}from"./iframe-Bf5-ajDf.js";import{B as v}from"./badge-B_32ZFx8.js";import{D as h}from"./ValueDisplays.types-y9Dsh-vS.js";import{g as S,V as w}from"./ValueContent-BC7ORB7f.js";import{G as x}from"./Grid-GUPTDLQQ.js";function b({label:d,value:c,placeholder:p=h,variant:e}){const f=S(d),L=Array.isArray(c)?c.map((y,g)=>u.jsx(v,{text:y.toString()||p,variant:Array.isArray(e)?e[g]:e},g)):u.jsx(v,{text:c?.toString()||p,variant:Array.isArray(e)?e[0]:e});return u.jsx(w,{label:d,children:u.jsx(x,{container:!0,gap:1,"aria-labelledby":f,children:L})})}b.__docgenInfo={description:"Displays a label component value with a label",methods:[],displayName:"ValueLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Name of the displayed value"},value:{required:!1,tsType:{name:"T"},description:"Value displayed"},placeholder:{required:!1,tsType:{name:"string"},description:"String rendered if value is undefined",defaultValue:{value:'"-"',computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:`The value has to be displayed as compact or not.
False by default`},variant:{required:!1,tsType:{name:"union",raw:"BadgeVariant | BadgeVariant[]",elements:[{name:"union",raw:`| "primary"
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
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]}],raw:"BadgeVariant[]"}]},description:"Label color variant or array of variants for multiple labels"}}};const T={title:"Data Display/ValueLabel",component:b,decorators:[V({width:200})],parameters:{layout:"centered"}},a={args:{label:"Lorem",value:"ipsum sit"}},r={args:{label:"Lorem",value:"ipsum sit",variant:"success"}},s={args:{label:"Lorem",value:1e3}},l={args:{label:"Lorem",value:["ipsum sit","amet","dolor"]}},o={args:{label:"Lorem",value:[15,9876,0]}},t={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:"error"}},n={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:["error","success"]}},i={args:{label:"Lorem"}},m={args:{label:"Lorem",placeholder:"."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 1000
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"]
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: [15, 9876, 0]
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: "error"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"]
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    placeholder: "."
  }
}`,...m.parameters?.docs?.source}}};const _=["Default","Variant","NumberAsValue","TextList","NumberList","ListSingleVariant","ListMultipleVariants","Placeholder","CustomPlaceholder"],C=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:m,Default:a,ListMultipleVariants:n,ListSingleVariant:t,NumberAsValue:s,NumberList:o,Placeholder:i,TextList:l,Variant:r,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{a as D,b as V,C as a};
