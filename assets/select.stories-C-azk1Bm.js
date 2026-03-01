import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-ZuKHGkgU.js";import{S as i}from"./select-C_gTnRSj.js";import"./iframe-C_7bLouK.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-C47Pv2Md.js";import"./index-CvzTXi8f.js";import"./index-ChAihCM8.js";import"./loader-circle-9lhHWVhj.js";import"./createLucideIcon-CMKN0kEv.js";import"./triangle-alert-DfgpFmgS.js";import"./sidebar-B24UiDBi.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./button-q2sCJWC4.js";import"./useRenderElement-Bt1an2v0.js";import"./DirectionContext-BMrj8C2V.js";import"./composite-DdXnjXQf.js";import"./x-D8wlzAR-.js";import"./DialogTitle-DmEkRuXH.js";import"./index-DnbYxgfW.js";import"./useRender-CJLrCGuO.js";import"./field-ClI5oXRi.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
