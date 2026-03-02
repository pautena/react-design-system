import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-DIaZG6Gr.js";import{S as i}from"./select-NAacmAWr.js";import"./iframe-DjNR3noO.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-CXXFg195.js";import"./index-DGu2xCH2.js";import"./index-1dl8K88b.js";import"./loader-circle-CkoGHPVG.js";import"./createLucideIcon-bDYX1VuN.js";import"./triangle-alert-DLC7vTPZ.js";import"./sidebar-DLeqGO7I.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-CVa2x62j.js";import"./useRenderElement-BfrHwLfV.js";import"./DirectionContext-DwSgawHI.js";import"./inertValue-BmGVNhPt.js";import"./x-B9eiKsOU.js";import"./DialogTitle-CqVhzr_H.js";import"./index-H7cNYfax.js";import"./useRender-DeG8RxDK.js";import"./field-B3ET_1kZ.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
