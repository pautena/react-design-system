import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-Qwde9KDA.js";import{S as i}from"./select-t1ZtGdPN.js";import"./iframe-BUoLcRFZ.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-siVUna95.js";import"./index-Czfq41qP.js";import"./index-Dn6J4qQc.js";import"./loader-circle-CtsW-Z-T.js";import"./createLucideIcon-jdL4qkm0.js";import"./triangle-alert-CFFrJzWJ.js";import"./sidebar-0n8gutjy.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-CgCp4AR3.js";import"./useRenderElement-C_oI-Jrc.js";import"./DirectionContext-3nhws9jF.js";import"./inertValue-Dy29vbmF.js";import"./x-B87yB-Eo.js";import"./DialogTitle-DC96w9zJ.js";import"./index-BvTyi-sf.js";import"./useRender-DGVZ3xZk.js";import"./field-ojCp4uOO.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
