import{j as s}from"./iframe-BupHDtd1.js";import{S as n}from"./Search-BxHxrTq5.js";import{P as a}from"./placeholder-ZAjfwhRm.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BHekySi3.js";import"./memoTheme-uoO9vclW.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-LbGOAHYa.js";import"./Box-BZzEFwUz.js";import"./Button-orM3su5N.js";import"./CircularProgress-CA-yQluH.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,l=[{id:"add",text:"Add",href:"/placeholders/add"},{id:"edit",text:"Edit",onClick:c("on click edit action")}],x={title:"Components/Placeholders/Placeholder",component:a,parameters:{layout:"fullscreen"}},e={args:{title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},o={args:{icon:({size:i,color:r})=>s.jsx(n,{color:r,sx:{fontSize:i}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},t={args:{icon:({size:i,color:r})=>s.jsx(n,{color:r,sx:{fontSize:i}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",actions:l}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ({
      size,
      color
    }: PlaceholderIconArgs) => <SearchIcon color={color} sx={{
      fontSize: size
    }} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ({
      size,
      color
    }: PlaceholderIconArgs) => <SearchIcon color={color} sx={{
      fontSize: size
    }} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",
    actions
  }
}`,...t.parameters?.docs?.source}}};const P=["Default","WithIcon","WithActions"];export{e as Default,t as WithActions,o as WithIcon,P as __namedExportsOrder,x as default};
