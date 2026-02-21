import{j as s}from"./iframe-OKrkvHog.js";import{c as a}from"./Typography-Dj8pBh4O.js";import{P as c}from"./Placeholder-DN-utuWk.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DS6LlOMU.js";import"./Box-DdvrumJ4.js";import"./Button-CNKKXh8l.js";import"./CircularProgress-lc5GuTxj.js";const n=a(s.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),{action:l}=__STORYBOOK_MODULE_ACTIONS__,m=[{id:"add",text:"Add",href:"/placeholders/add"},{id:"edit",text:"Edit",onClick:l("on click edit action")}],L={title:"Placeholders/Placeholder",component:c,parameters:{layout:"fullscreen"}},e={args:{title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},o={args:{icon:({size:i,color:r})=>s.jsx(n,{color:r,sx:{fontSize:i}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor"}},t={args:{icon:({size:i,color:r})=>s.jsx(n,{color:r,sx:{fontSize:i}}),title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",actions:m}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Default","WithIcon","WithActions"];export{e as Default,t as WithActions,o as WithIcon,x as __namedExportsOrder,L as default};
