import{c as q}from"./storybook-gYjJ4lHD.js";import{w as m,j as c}from"./iframe-u8LB376j.js";import{u as h}from"./useTheme-DuCPUz7t.js";import{P as L}from"./Paper-ufo0IKvl.js";import{L as b}from"./Link-DECn6oCi.js";import{T as u}from"./Typography-yXzabRJh.js";const p=({variant:d="primary",title:g,message:f,href:y,linkText:l,sx:x})=>{const{palette:n}=h(),v={p:3,display:"flex",flexDirection:"column",textDecoration:"none",backgroundColor:n.mode==="light"?m[50]:m[900],borderColor:m[400],":hover":{borderColor:n[d].main,backgroundColor:n.mode==="light"?n.common.white:m[800]}};return c.jsxs(L,{component:b,href:y,variant:"outlined",sx:{...v,...x},children:[c.jsx(u,{variant:"h6",children:g}),c.jsx(u,{variant:"caption",sx:{mt:2},children:f}),l&&c.jsx(u,{color:d,variant:"button",sx:{mt:2},children:l})]})};p.__docgenInfo={description:"",methods:[],displayName:"LinkCard",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "info"
| "warning"
| "error"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};const S={title:"Components/Data Display/LinkCard",component:p,decorators:[q({width:400})],parameters:{layout:"centered"}},e={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",linkText:"Learn more",variant:"primary"}},r={args:{...e.args}},a={args:{...e.args,variant:"secondary"}},o={args:{...e.args,variant:"info"}},s={args:{...e.args,variant:"warning"}},t={args:{...e.args,variant:"error"}},i={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkText: "Learn more",
    variant: "primary"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "info"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "warning"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "error"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...i.parameters?.docs?.source}}};const T=["Default","Primary","Secondary","Info","Warning","Error","WithoutLinkButton"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:t,Info:o,Primary:r,Secondary:a,Warning:s,WithoutLinkButton:i,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,p as L,P as l};
