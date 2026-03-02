import{j as n}from"./jsx-runtime-u17CrQMm.js";import{f as l}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as c}from"./storybook-CxXwq-E5.js";import{S as i}from"./select-BgnEAfnF.js";import"./iframe-BbA-wopx.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-Dlt_oZp3.js";import"./index-DqHivdvk.js";import"./index-Pvbw17Wo.js";import"./loader-circle-DhJ-wMWs.js";import"./createLucideIcon-FAJFlL9b.js";import"./triangle-alert-COhhum2C.js";import"./sidebar-DoXfl7gx.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-y8UJw2AW.js";import"./useRenderElement-SQgKJxjE.js";import"./DirectionContext-CaYKzn7y.js";import"./inertValue-B1tfPk2D.js";import"./x-DhU6w5cI.js";import"./DialogTitle-Bj_sAikw.js";import"./index-CfKeI9Pd.js";import"./useRender-C9crks1o.js";import"./field-CplEfZ7h.js";const m=l.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),O={title:"forms/Select",component:i,decorators:[c({width:260})],parameters:{layout:"centered"},render:e=>n.jsx(i,{...e})},r={args:{label:"Car model",value:m[0].value,options:m,fullWidth:!0}},o={args:{...r.args,loading:!0}},a={args:{...r.args,fetching:!0}},s={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},t={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
