import{a as c}from"./storybook-DGVocXMz.js";import{j as m}from"./iframe-DoHxLgiQ.js";import{V as p}from"./value-content-rcaB4p4x.js";const a=""+new URL("work-in-progress-BpRsLLFt.jpg",import.meta.url).href,g=100,d=50;function l({label:o,value:i,size:u,dense:t}){const n=u||(t?d:g);return m.jsx(p,{label:o,dense:t,children:m.jsx("img",{src:i,alt:o,width:n,height:n})})}l.__docgenInfo={description:"Displays an image value with a label.",methods:[],displayName:"ValueImage",props:{size:{required:!1,tsType:{name:"number"},description:"Image size."}},composes:["BaseValueProps"]};const I={title:"Data Display/ValueImage",component:l,decorators:[c({width:200})],parameters:{layout:"centered"}},e={args:{label:"Lorem",value:a}},r={args:{label:"Lorem",value:a,dense:!0}},s={args:{label:"Lorem",value:a,size:250}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: workInProgressImg
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: workInProgressImg,
    dense: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: workInProgressImg,
    size: 250
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Dense","CustomSize"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomSize:s,Default:e,Dense:r,__namedExportsOrder:f,default:I},Symbol.toStringTag,{value:"Module"}));export{e as D,l as V,w as v};
