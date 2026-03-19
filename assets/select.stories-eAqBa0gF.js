import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-Dr9sP6fi.js";import{S as i}from"./select-DgTYvgJb.js";import"./iframe-C8GoqKMl.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-BkXpd-S-.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./loader-circle-BdDYgNFh.js";import"./createLucideIcon-zSeE5OCt.js";import"./triangle-alert-Cki19iAl.js";import"./sidebar-DAaa7t-4.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-CqmGLEkD.js";import"./useRenderElement-B98N9jJg.js";import"./DirectionContext-qIuXBF4_.js";import"./inertValue-2mOOpLpY.js";import"./x-Dv0RtamN.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./useRender-D-Hu_BU4.js";import"./field-BVYBRkbk.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    value: options[0].value,
    options,
    fullWidth: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Select your vehicle model",
    error: "A model selection is required"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};const R=["Default","Loading","Fetching","Error","Small"];export{r as Default,s as Error,a as Fetching,o as Loading,t as Small,R as __namedExportsOrder,O as default};
