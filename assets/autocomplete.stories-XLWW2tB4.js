import{f as $}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{a as B}from"./storybook-D1oaJzNH.js";import{r as b,j as a}from"./iframe-OKrkvHog.js";import{F as k,a as P,b as R,c as K}from"./field-ChUvwArH.js";import{I as G}from"./input-Dgyx7j0_.js";import{c as j}from"./utils-BtxETjiC.js";import{L as J}from"./loader-circle-BJs0d_6Z.js";function q({id:H,label:T,options:w,value:o,helperText:E,error:v,size:I="medium",color:x,loading:S=!1,className:_,disabled:L,onChangeValue:C,getOptionLabel:N,"aria-invalid":O,...A}){const s=e=>N?.(e)??String(e),[D,n]=b.useState(!1),[g,y]=b.useState(o?s(o):"");b.useEffect(()=>{o!==void 0&&y(s(o))},[o]);const M=b.useMemo(()=>{const e=g.toLowerCase();return w.filter(l=>s(l).toLowerCase().includes(e))},[g,w]),f=H??`${T}-autocomplete`,h=!!v,F=(e,l)=>{const t=s(l);y(t),n(!1),C?.(e,t.trim())},z=e=>{e.key==="Escape"&&n(!1)};return a.jsxs(k,{"data-invalid":h||void 0,className:j("gap-1.5",_),children:[a.jsx(P,{htmlFor:f,children:T}),a.jsxs("div",{className:"relative",children:[a.jsx(G,{id:f,role:"combobox","aria-expanded":D,"aria-controls":`${f}-listbox`,"aria-autocomplete":"list","aria-busy":S,"aria-invalid":O||h||void 0,value:g,disabled:L,onFocus:()=>n(!0),onClick:()=>n(!0),onKeyDown:z,onChange:e=>{y(e.target.value),n(!0),C?.(e,e.target.value.trim())},className:j("w-full text-sm pr-9",I==="small"?"h-9 px-2":"h-10 px-3",h&&"border-destructive",L&&"opacity-70"),style:x?{borderColor:x,color:x}:void 0,...A}),S&&a.jsx(J,{role:"progressbar","aria-label":"loading",className:"pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin"}),D&&M.length>0?a.jsx("div",{id:`${f}-listbox`,role:"listbox",className:"absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-md",children:M.map((e,l)=>{const t=s(e);return a.jsx("button",{type:"button",role:"option","aria-selected":t===g,className:"block w-full cursor-pointer rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground",onClick:V=>F(V,e),children:t},`${t}-${l}`)})}):null]}),E&&!h?a.jsx(R,{children:E}):null,v?a.jsx(K,{children:v}):null]})}q.__docgenInfo={description:`Searchable combobox with local option filtering.

@template T - Option type.`,methods:[],displayName:"Autocomplete",props:{label:{required:!0,tsType:{name:"string"},description:"Label shown above the combobox."},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Available options."},value:{required:!1,tsType:{name:"T"},description:"Current selected option."},helperText:{required:!1,tsType:{name:"ReactNode"},description:"Helper text rendered below the field."},error:{required:!1,tsType:{name:"ReactNode"},description:"Error text rendered below the field."},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`Input size variant.
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Optional accent color used for border and text."},loading:{required:!1,tsType:{name:"boolean"},description:`Shows a spinner while options are loading.
@default false`,defaultValue:{value:"false",computed:!1}},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
  value: string,
) => void`,signature:{arguments:[{type:{name:"union",raw:"ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>",elements:[{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"}]},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when user selects a value.
@param e - Input or option interaction event.
@param value - Trimmed selected value label.`},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:"Converts options into labels."}},composes:["Omit"]};const Q=[...$.definitions.vehicle.model],U={title:"forms/Autocomplete",component:q,decorators:[B({width:320})],parameters:{layout:"centered"}},r={args:{label:"Car model",options:Q}},i={args:{...r.args,helperText:"Search by partial model name"}},c={args:{...r.args,loading:!0}},m={args:{...r.args,helperText:"Select your vehicle model",error:"A model selection is required"}},d={args:{...r.args,disabled:!0}},u={args:{...r.args,placeholder:"Type a car model..."}},p={args:{...r.args,size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    options
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Search by partial model name"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Select your vehicle model",
    error: "A model selection is required"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: "Type a car model..."
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...p.parameters?.docs?.source}}};const W=["Default","HelperText","Loading","Error","Disabled","Placeholder","Small"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:d,Error:m,HelperText:i,Loading:c,Placeholder:u,Small:p,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{q as A,r as D,oe as a};
