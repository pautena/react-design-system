import{B as a}from"./breadcrumbs-BPXRlkYk.js";import"./iframe-lRwKKAeA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-wLV4pmrJ.js";import"./chevron-right-Dh6ahwiY.js";import"./createLucideIcon-CW1mXz6K.js";import"./useRender-BYihtJcv.js";import"./useRenderElement-DXpJT6eM.js";const r=[{id:"items",text:"Items",link:"/items"},{id:"item-1",text:"Item 1",link:"/items/1"},{id:"details",text:"Details",link:"/items/1/details"}],u={title:"Data Display/Breadcrumbs",component:a,parameters:{layout:"centered"}},e={args:{items:r}},t={args:{items:r,separator:"/"}},s={args:{items:[{id:"details",text:"Details",link:"/items/1/details"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    separator: "/"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "details",
      text: "Details",
      link: "/items/1/details"
    }]
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","CustomSeparator","SingleItem"];export{t as CustomSeparator,e as Default,s as SingleItem,g as __namedExportsOrder,u as default};
