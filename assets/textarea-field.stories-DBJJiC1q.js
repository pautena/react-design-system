import{b as q}from"./storybook-Do16VOkD.js";import{j as e}from"./iframe-BOp0KoHw.js";import{F,a as L,b as A,c as S}from"./field-z85zdvAv.js";import{c as x}from"./utils-BFne8Zvq.js";import{L as _}from"./loader-circle-qQxEsC5F.js";import"./notification-center-provider-PoIJU_Tq.js";import"./index-9QzqYQcq.js";import"./index-C7szOnQe.js";import"./createLucideIcon-DZ32gi55.js";import"./triangle-alert-BPrZaYjk.js";import"./sidebar-B9aCzTK8.js";import"./index-Bnpl_KYd.js";import"./button-CeFxFZak.js";import"./useRenderElement-Bx6ca6GP.js";import"./DirectionContext-DXfzSasD.js";import"./composite-D-UgRGj8.js";import"./x-C2irfWeI.js";import"./DialogTitle-B9dNSudn.js";import"./index-CpQ-kypr.js";import"./useRender-DckHBBRP.js";import"./preload-helper-PPVm8Dsz.js";function T({className:p,...a}){return e.jsx("textarea",{"data-slot":"textarea",className:x("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",p),...a})}T.__docgenInfo={description:"",methods:[],displayName:"Textarea"};function w({id:p,label:a,helperText:h,error:m,loading:t=!1,fullWidth:y=!1,rowCount:D=4,className:N,hexColor:u,InputProps:s,onChange:C,onChangeValue:E,disabled:v,...j}){const b=p??`${a??"textareafield"}-textarea`,g=!!m;return e.jsxs(F,{"data-invalid":g||void 0,className:x("gap-1.5",y&&"w-full",N),children:[a?e.jsx(L,{htmlFor:b,children:a}):null,e.jsxs("div",{className:"relative",children:[e.jsx(T,{id:b,rows:D,disabled:v,"aria-busy":t,"aria-invalid":g||void 0,className:x("text-sm","min-h-24 px-3 py-2",(s?.endAdornment||t)&&"pr-10",v&&"opacity-70"),style:u?{borderColor:u,color:u}:void 0,onChange:f=>{C?.(f),E?.(f,f.target.value.trim())},...j}),(s?.endAdornment||t)&&e.jsxs("div",{className:"absolute right-3 top-3 flex items-center gap-2",children:[s?.endAdornment?e.jsx("div",{className:"inline-flex items-center",children:s.endAdornment}):null,t?e.jsx(_,{role:"progressbar","aria-label":"loading",className:"h-4 w-4 animate-spin"}):null]})]}),h&&!g?e.jsx(A,{children:h}):null,m?e.jsx(S,{children:m}):null]})}w.__docgenInfo={description:"Multiline text input with loading state.",methods:[],displayName:"TextareaField",props:{label:{required:!1,tsType:{name:"string"},description:"Label shown above the textarea."},helperText:{required:!1,tsType:{name:"ReactNode"},description:"Helper text rendered below the textarea."},error:{required:!1,tsType:{name:"ReactNode"},description:"Error text rendered below the textarea."},loading:{required:!1,tsType:{name:"boolean"},description:`Shows a spinner inside the field.
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Makes the field span the container width.
@default false`,defaultValue:{value:"false",computed:!1}},rowCount:{required:!1,tsType:{name:"number"},description:`Number of visible text rows.
@default 4`,defaultValue:{value:"4",computed:!1}},hexColor:{required:!1,tsType:{name:"string"},description:"Optional accent color used for border and text."},InputProps:{required:!1,tsType:{name:"TextareaFieldInputProps"},description:"Additional props for the textarea content area."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLTextAreaElement>, value: string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when the textarea value changes.
@param e - Native textarea change event.
@param value - Trimmed textarea value.`}},composes:["Omit"]};const re={title:"forms/TextareaField",component:w,decorators:[q({width:320})],parameters:{layout:"centered"}},r={args:{label:"Vehicle notes"}},n={args:{...r.args,helperText:"Describe relevant vehicle details"}},o={args:{...r.args,helperText:"Describe relevant vehicle details",error:"Notes are required"}},i={args:{...r.args,loading:!0}},l={args:{...r.args,disabled:!0}},d={args:{...r.args,placeholder:"Type additional context..."}},c={args:{...r.args,rowCount:8}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Vehicle notes"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Describe relevant vehicle details"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "Describe relevant vehicle details",
    error: "Notes are required"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: "Type additional context..."
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rowCount: 8
  }
}`,...c.parameters?.docs?.source}}};const ae=["Default","HelperText","Error","Loading","Disabled","Placeholder","RowCount"];export{r as Default,l as Disabled,o as Error,n as HelperText,i as Loading,d as Placeholder,c as RowCount,ae as __namedExportsOrder,re as default};
