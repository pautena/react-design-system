import{B as a}from"./breadcrumbs-kUz6jCcF.js";import"./iframe-pW5QL-bD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUhL_YVU.js";import"./chevron-right-B0-1CzWy.js";import"./createLucideIcon-FVDiqrjk.js";import"./useRender-WM4sSGP3.js";import"./useRenderElement-CVdh77Wx.js";const r=[{id:"items",text:"Items",link:"/items"},{id:"item-1",text:"Item 1",link:"/items/1"},{id:"details",text:"Details",link:"/items/1/details"}],u={title:"Data Display/Breadcrumbs",component:a,parameters:{layout:"centered"}},e={args:{items:r}},t={args:{items:r,separator:"/"}},s={args:{items:[{id:"details",text:"Details",link:"/items/1/details"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
