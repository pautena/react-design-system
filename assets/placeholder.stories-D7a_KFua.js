import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as n}from"./placeholder-CssebVmR.js";import{c as a}from"./createLucideIcon-b2KNZfrT.js";import"./utils-DDt1maD9.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";const c=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s=a("search",c),{action:l}=__STORYBOOK_MODULE_ACTIONS__,m=[{id:"add",text:"Add",href:"/placeholders/add"},{id:"edit",text:"Edit",onClick:l("on click edit action")}],f={title:"Placeholders/Placeholder",component:n,parameters:{layout:"fullscreen"}},e={args:{title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},o={args:{icon:({size:i})=>r.jsx(s,{size:i}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},t={args:{icon:({size:i})=>r.jsx(s,{size:i}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",actions:m}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ({
      size
    }: PlaceholderIconArgs) => <Search size={size} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ({
      size
    }: PlaceholderIconArgs) => <Search size={size} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",
    actions
  }
}`,...t.parameters?.docs?.source}}};const L=["Default","WithIcon","WithActions"];export{e as Default,t as WithActions,o as WithIcon,L as __namedExportsOrder,f as default};
