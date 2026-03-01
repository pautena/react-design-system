import{j as n}from"./iframe-lRwKKAeA.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{a as c}from"./storybook-COLW6OeD.js";import{S as i}from"./select-C65pzh1S.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-CDSuuxjR.js";import"./index-aCLD_6gc.js";import"./index-so3LO3Cr.js";import"./loader-circle-D9QnFWM9.js";import"./createLucideIcon-CW1mXz6K.js";import"./triangle-alert-xAnxLRrM.js";import"./sidebar-2ulj49hr.js";import"./index-BZl2Gm-o.js";import"./button-h5PM8KId.js";import"./utils-wLV4pmrJ.js";import"./useRenderElement-DXpJT6eM.js";import"./DirectionContext-D015V4zZ.js";import"./composite-CvqMpLXs.js";import"./x-Dvkqv4wB.js";import"./DialogTitle-DczUCJzh.js";import"./index-Ozf5NBs-.js";import"./useRender-BYihtJcv.js";import"./isSameDay-BaBEc9bM.js";import"./field-8vjn_5zm.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
