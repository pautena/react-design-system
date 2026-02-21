import{a as V}from"./storybook-D1oaJzNH.js";import{j as u}from"./iframe-OKrkvHog.js";import{B as h}from"./badge-dPnQAYok.js";import{g as y,V as S}from"./value-content-BkWUXSM5.js";import{D as x}from"./value-base-y9Dsh-vS.js";function b({label:p,value:m,placeholder:L=x,variant:c}){const v=y(p),f=Array.isArray(m)?m:[m];return u.jsx(S,{label:p,children:u.jsx("div",{className:"flex flex-wrap gap-1",role:"group","aria-labelledby":v,children:f.map((d,g)=>u.jsx(h,{text:d?.toString()||L,variant:Array.isArray(c)?c[g]:c},`${d?.toString()??"empty"}-${g}`))})})}b.__docgenInfo={description:"Displays badge values with a label.",methods:[],displayName:"ValueLabel",props:{variant:{required:!1,tsType:{name:"union",raw:"BadgeVariant | BadgeVariant[]",elements:[{name:"BadgeVariant"},{name:"Array",elements:[{name:"BadgeVariant"}],raw:"BadgeVariant[]"}]},description:"Label color variant or array of variants for multiple labels."},placeholder:{defaultValue:{value:"DefaultPlaceholder",computed:!0},required:!1}}};const _={title:"Data Display/ValueLabel",component:b,decorators:[V({width:200})],parameters:{layout:"centered"}},e={args:{label:"Lorem",value:"ipsum sit"}},a={args:{label:"Lorem",value:"ipsum sit",variant:"success"}},r={args:{label:"Lorem",value:1e3}},s={args:{label:"Lorem",value:["ipsum sit","amet","dolor"]}},o={args:{label:"Lorem",value:[15,9876,0]}},t={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:"error"}},l={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:["error","success"]}},n={args:{label:"Lorem"}},i={args:{label:"Lorem",placeholder:"."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 1000
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"]
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    placeholder: "."
  }
}`,...i.parameters?.docs?.source}}};const D=["Default","Variant","NumberAsValue","TextList","NumberList","ListSingleVariant","ListMultipleVariants","Placeholder","CustomPlaceholder"],C=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:i,Default:e,ListMultipleVariants:l,ListSingleVariant:t,NumberAsValue:r,NumberList:o,Placeholder:n,TextList:s,Variant:a,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{e as D,b as V,C as v};
