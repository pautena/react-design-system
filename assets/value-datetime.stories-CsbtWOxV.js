import{f as p,w as y,b as f}from"./storybook-BmI9ftC1.js";import{j as o}from"./iframe-VMkoG4ZL.js";import{g as D,V as g}from"./value-content-BLo1SLWN.js";import{D as h}from"./value-base-y9Dsh-vS.js";function d({label:s,value:l,format:c,placeholder:i=h,dense:n}){const u=D(s),m=l&&p(l,c)||i;return o.jsx(g,{label:s,tooltip:m,dense:n,className:"flex flex-col",children:o.jsx("div",{className:"flex items-center",role:"group","aria-labelledby":u,children:o.jsx("p",{className:n?"text-base truncate":"text-xl truncate",children:m})})})}d.__docgenInfo={description:"Displays a formatted datetime with a label.",methods:[],displayName:"ValueDatetime",props:{format:{required:!0,tsType:{name:"string"},description:"Datetime format."},placeholder:{defaultValue:{value:"DefaultPlaceholder",computed:!0},required:!1}},composes:["BaseValueProps"]};const M={title:"Data Display/ValueDatetime",component:d,decorators:[f({width:600}),y],parameters:{layout:"centered"}},e={args:{label:"Lorem",value:new Date(2022,8,22),format:"yyyy/MM/dd"}},a={args:{label:"Lorem",value:new Date(2022,8,22),format:"yyyy/MM/dd",dense:!0}},r={args:{label:"Lorem",format:"yyyy/MM/dd"}},t={args:{label:"Lorem",format:"yyyy/MM/dd",placeholder:"."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: new Date(2022, 8, 22),
    format: "yyyy/MM/dd"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: new Date(2022, 8, 22),
    format: "yyyy/MM/dd",
    dense: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    format: "yyyy/MM/dd"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    format: "yyyy/MM/dd",
    placeholder: "."
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","Dense","Placeholder","CustomPlaceholder"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:t,Default:e,Dense:a,Placeholder:r,__namedExportsOrder:b,default:M},Symbol.toStringTag,{value:"Module"}));export{e as D,d as V,w as v};
