import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-Bq401jfZ.js";import{S as i}from"./select-BP_D5rdy.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-DvEgKYF6.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./loader-circle-DX3r9wpe.js";import"./createLucideIcon-b2KNZfrT.js";import"./triangle-alert-n8kWsz47.js";import"./sidebar-DJjs4gpy.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./x-DFJcBLed.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";import"./field-DmIwZ6U1.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
