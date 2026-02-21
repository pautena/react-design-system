import{r as E,j as x}from"./iframe-OKrkvHog.js";import{c as I}from"./index-C4zJC3My.js";import{c as L}from"./utils-BtxETjiC.js";import{u as j}from"./useButton-B2oPPSAV.js";import{u as D}from"./useRenderElement-BkaMFiFT.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsoLayoutEffect-DjUHxOBd.js";const V=E.forwardRef(function(e,h){const{render:b,className:P,disabled:k=!1,focusableWhenDisabled:z=!1,nativeButton:C=!0,...w}=e,{getButtonProps:_,buttonRef:B}=j({disabled:k,focusableWhenDisabled:z,native:C});return D("button",e,{state:{disabled:k},ref:[h,B],props:[w,_]})}),N=I("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",destructive:"bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function y({className:r,variant:e="default",size:h="default",...b}){return x.jsx(V,{"data-slot":"button",className:L(N({variant:e,size:h,className:r})),...b})}y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const O={default:"default",primary:"default",secondary:"secondary",info:"outline",warning:"outline",error:"destructive",success:"secondary",outline:"outline",ghost:"ghost",destructive:"destructive",link:"link"};function S({variant:r="default",...e}){return x.jsx(y,{variant:O[r],...e})}S.__docgenInfo={description:"Consumer-facing button wrapper for public package API",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "default"
| "info"
| "warning"
| "error"
| "success"
| "outline"
| "ghost"
| "destructive"
| "link"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"link"'}]},description:`Color palette used to draw the component
@default "default"`,defaultValue:{value:'"default"',computed:!1}}},composes:["Omit"]};const F={title:"Inputs/Button",component:S,argTypes:{onClick:{action:"clicked"}},parameters:{layout:"centered"}},a={args:{children:"Click me",variant:"default"}},n={args:{children:"Click me",variant:"primary"}},s={args:{children:"Click me",variant:"secondary"}},t={args:{children:"Click me",variant:"info"}},i={args:{children:"Click me",variant:"warning"}},o={args:{children:"Click me",variant:"error"}},c={args:{children:"Click me",variant:"success"}},d={args:{children:"Click me",variant:"outline"}},l={args:{children:"Click me",variant:"ghost"}},u={args:{children:"Click me",variant:"destructive"}},m={args:{children:"Click me",variant:"link"}},p={args:{children:"Extra small",size:"xs"}},g={args:{children:"Small",size:"sm"}},v={args:{children:"Large",size:"lg"}},f={args:{children:"🔥",size:"icon"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "primary"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "secondary"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "info"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "warning"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "error"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "success"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "outline"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "ghost"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "destructive"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "link"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Extra small",
    size: "xs"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "sm"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large",
    size: "lg"
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "🔥",
    size: "icon"
  }
}`,...f.parameters?.docs?.source}}};const H=["Default","Primary","Secondary","Info","Warning","Error","Success","Outline","Ghost","Destructive","Link","SizeExtraSmall","SizeSmall","SizeLarge","SizeIcon"];export{a as Default,u as Destructive,o as Error,l as Ghost,t as Info,m as Link,d as Outline,n as Primary,s as Secondary,p as SizeExtraSmall,f as SizeIcon,v as SizeLarge,g as SizeSmall,c as Success,i as Warning,H as __namedExportsOrder,F as default};
