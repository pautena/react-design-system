import{a as d}from"./storybook-DGVocXMz.js";import{j as s}from"./iframe-DoHxLgiQ.js";import{g as p,V as g}from"./value-content-rcaB4p4x.js";import{c as f}from"./utils-ByKj-FM5.js";import{c as b}from"./createLucideIcon-B92in5R_.js";const v=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x=b("star",v);function c({label:o,value:n=0,maxRating:u=5,dense:l}){const m=p(o);return s.jsx(g,{label:o,tooltip:n.toString(),dense:l,children:s.jsx("div",{className:"flex items-center gap-0.5",role:"group","aria-labelledby":m,children:Array.from({length:u},(h,i)=>{const t=i<n;return s.jsx(x,{"data-testid":t?"StarIcon":"StarBorderIcon",className:f(l?"h-4 w-4":"h-5 w-5",!t&&"opacity-30"),fill:t?"currentColor":"none","aria-hidden":"true"},`star-${i}`)})})})}c.__docgenInfo={description:"Displays a number using stars.",methods:[],displayName:"ValueRating",props:{maxRating:{required:!1,tsType:{name:"number"},description:`Maximum number of stars to display.
@default 5`,defaultValue:{value:"5",computed:!1}},value:{defaultValue:{value:"0",computed:!1},required:!1}}};const _={title:"Data Display/ValueRating",component:c,decorators:[d({width:200})],parameters:{layout:"centered"}},e={args:{label:"Lorem",value:3}},a={args:{label:"Lorem",value:3,dense:!0}},r={args:{label:"Lorem",value:4,maxRating:7}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 3
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 3,
    dense: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 4,
    maxRating: 7
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","Dense","Max"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Dense:a,Max:r,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{e as D,c as V,j as v};
