import{a as S}from"./storybook-D1oaJzNH.js";import{j as a}from"./iframe-OKrkvHog.js";import{F as q,a as C,b as N,c as _}from"./field-ChUvwArH.js";import{I as L}from"./input-Dgyx7j0_.js";import{c as v}from"./utils-BtxETjiC.js";import{L as I}from"./loader-circle-BJs0d_6Z.js";function T({id:y,label:m,helperText:g,error:c,loading:i=!1,size:b="medium",fullWidth:w=!1,className:j,hexColor:u,InputProps:d,onChange:E,onChangeValue:D,disabled:h,...F}){const x=y??`${m??"textfield"}-input`,p=!!c;return a.jsxs(q,{"data-invalid":p||void 0,className:v("gap-1.5",w&&"w-full",j),children:[m?a.jsx(C,{htmlFor:x,children:m}):null,a.jsxs("div",{className:"relative",children:[a.jsx(L,{id:x,disabled:h,"aria-busy":i,"aria-invalid":p||void 0,className:v("text-sm",b==="small"?"h-9 px-2":"h-10 px-3",(d?.endAdornment||i)&&"pr-10",h&&"opacity-70"),style:u?{borderColor:u,color:u}:void 0,onChange:f=>{E?.(f),D?.(f,f.target.value.trim())},...F}),(d?.endAdornment||i)&&a.jsxs("div",{className:"absolute inset-y-0 right-3 flex items-center gap-2",children:[d?.endAdornment?a.jsx("div",{className:"inline-flex items-center",children:d.endAdornment}):null,i?a.jsx(I,{role:"progressbar","aria-label":"loading",className:"h-4 w-4 animate-spin"}):null]})]}),g&&!p?a.jsx(N,{children:g}):null,c?a.jsx(_,{children:c}):null]})}T.__docgenInfo={description:"Text input with loading state.",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:"Label shown above the input."},helperText:{required:!1,tsType:{name:"ReactNode"},description:"Helper text rendered below the input."},error:{required:!1,tsType:{name:"ReactNode"},description:"Error text rendered below the input."},loading:{required:!1,tsType:{name:"boolean"},description:`Shows a spinner inside the field.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`Input size variant.
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Makes the field span the container width.
@default false`,defaultValue:{value:"false",computed:!1}},hexColor:{required:!1,tsType:{name:"string"},description:"Optional accent color used for border and text."},InputProps:{required:!1,tsType:{name:"TextFieldInputProps"},description:"Additional props for the input content area."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>, value: string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when the input value changes.
@param e - Native input change event.
@param value - Trimmed input value.`}},composes:["Omit"]};const M={title:"forms/TextField",component:T,decorators:[S({width:260})],parameters:{layout:"centered"}},e={args:{label:"Car model"}},r={args:{...e.args,helperText:"Use the official model name"}},s={args:{...e.args,helperText:"Use the official model name",error:"Model is required"}},t={args:{...e.args,loading:!0}},n={args:{...e.args,disabled:!0}},l={args:{...e.args,placeholder:"Type a car model..."}},o={args:{...e.args,size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Use the official model name"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Use the official model name",
    error: "Model is required"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: "Type a car model..."
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};const H=["Default","HelperText","Error","Loading","Disabled","Placeholder","Small"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:n,Error:s,HelperText:r,Loading:t,Placeholder:l,Small:o,__namedExportsOrder:H,default:M},Symbol.toStringTag,{value:"Module"}));export{e as D,T,P as t};
