import{j as a}from"./iframe-VMkoG4ZL.js";import{f as O}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{b as D}from"./storybook-BmI9ftC1.js";import{F,a as A,b as V,c as z}from"./field-BnUbw_r4.js";import{c as b}from"./utils-n6qbTURJ.js";import{L as M}from"./loader-circle-6kQ3EHgc.js";const H=e=>(Array.isArray(e)?e:[e]).filter(Boolean).map(r=>r).filter(r=>typeof r?.props?.value=="string").map(r=>({value:r.props.value,label:String(r.props.children??r.props.value)}));function p({id:e,label:c,value:r,options:x,helperText:f,error:u,loading:g=!1,fetching:t=!1,size:w="medium",fullWidth:T=!1,className:j,color:m,children:q,onChange:E,onChangeValue:C,disabled:v,...L}){const h=e??`${c}-select`,N=x??H(q),_=t?"":r,y=!!u;return a.jsxs(F,{"data-invalid":y||void 0,className:b(T&&"w-full",j),children:[a.jsx(A,{htmlFor:h,children:c}),a.jsxs("div",{className:"relative",children:[a.jsxs("select",{id:h,value:_,disabled:v||t,"aria-busy":g||t,className:b("w-full rounded-md border border-input bg-background pr-9 text-sm outline-none aria-invalid:border-destructive",w==="small"?"h-9 px-2":"h-10 px-3",(v||t)&&"opacity-70"),"aria-invalid":y||void 0,onChange:l=>{E?.(l),C?.(l,l.target.value.trim())},style:m?{borderColor:m,color:m}:void 0,...L,children:[t?a.jsx("option",{value:"",children:"Loading options..."}):null,t?null:N.map(l=>a.jsx("option",{value:l.value,children:l.label},l.value))]}),(g||t)&&a.jsx(M,{role:"progressbar","aria-label":"loading",className:"pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin"})]}),f?a.jsx(V,{children:f}):null,u?a.jsx(z,{children:u}):null]})}p.__docgenInfo={description:"Native select wrapper with loading and fetching states.",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"Label shown above the select."},value:{required:!0,tsType:{name:"string"},description:"Selected value."},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Select options for native rendering."},helperText:{required:!1,tsType:{name:"ReactNode"},description:"Helper text rendered below the select."},error:{required:!1,tsType:{name:"ReactNode"},description:"Error text rendered below the select."},loading:{required:!1,tsType:{name:"boolean"},description:`Shows a spinner while value is loading.
@default false`,defaultValue:{value:"false",computed:!1}},fetching:{required:!1,tsType:{name:"boolean"},description:`Shows a progress state while options are being fetched.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`Input size variant.
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Makes the select span the container width.
@default false`,defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Optional accent color used for border and text."},children:{required:!1,tsType:{name:"ReactNode"},description:"Optional option children for compatibility."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLSelectElement>, value: string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLSelectElement"}],raw:"ChangeEvent<HTMLSelectElement>"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when the select value changes.
@param e - Native select change event.
@param value - Trimmed selected value.`}},composes:["Omit"]};const S=O.definitions.vehicle.model.slice(0,12).map(e=>({value:e,label:e})),R={title:"forms/Select",component:p,decorators:[D({width:260})],parameters:{layout:"centered"},render:e=>a.jsx(p,{...e})},s={args:{label:"Car model",value:S[0].value,options:S,fullWidth:!0}},n={args:{...s.args,loading:!0}},o={args:{...s.args,fetching:!0}},i={args:{...s.args,helperText:"Select your vehicle model",error:"A model selection is required"}},d={args:{...s.args,size:"small"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    value: options[0].value,
    options,
    fullWidth: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Select your vehicle model",
    error: "A model selection is required"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...d.parameters?.docs?.source}}};const I=["Default","Loading","Fetching","Error","Small"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Error:i,Fetching:o,Loading:n,Small:d,__namedExportsOrder:I,default:R},Symbol.toStringTag,{value:"Module"}));export{s as D,p as S,J as s};
