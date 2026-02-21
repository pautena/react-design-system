import{r as d,I as F,j as M}from"./iframe-CnbMuzLM.js";import{a as q,f as A,m as G,b as N,u as J,c as Q}from"./useRenderElement-riLA-BnH.js";import{c as X}from"./utils-BxuXrb7G.js";import"./preload-helper-PPVm8Dsz.js";function Y(){return typeof window<"u"}function Z(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ee(r){return Y()?r instanceof HTMLElement||r instanceof Z(r).HTMLElement:!1}const P=F[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],re=P&&P!==d.useLayoutEffect?P:r=>r();function R(r){const e=q(ae).current;return e.next=r,re(e.effect),e.trampoline}function ae(){const r={next:void 0,callback:ne,trampoline:(...e)=>r.callback?.(...e),effect:()=>{r.callback=r.next}};return r}function ne(){}const te=()=>{},se=typeof document<"u"?d.useLayoutEffect:te,oe=d.createContext(void 0);function ie(r=!1){const e=d.useContext(oe);if(e===void 0&&!r)throw new Error(A(16));return e}function ce(r){const{focusableWhenDisabled:e,disabled:n,composite:c=!1,tabIndex:s=0,isNativeButton:t}=r,l=c&&e!==!1,u=c&&e===!1;return{props:d.useMemo(()=>{const o={onKeyDown(p){n&&e&&p.key!=="Tab"&&p.preventDefault()}};return c||(o.tabIndex=s,!t&&n&&(o.tabIndex=e?s:-1)),(t&&(e||l)||!t&&n)&&(o["aria-disabled"]=n),t&&(!e||u)&&(o.disabled=n),o},[c,n,e,l,u,t,s])}}function de(r={}){const{disabled:e=!1,focusableWhenDisabled:n,tabIndex:c=0,native:s=!0}=r,t=d.useRef(null),l=ie(!0)!==void 0,u=R(()=>{const i=t.current;return!!(i?.tagName==="A"&&i?.href)}),{props:m}=ce({focusableWhenDisabled:n,disabled:e,composite:l,tabIndex:c,isNativeButton:s}),o=d.useCallback(()=>{const i=t.current;le(i)&&l&&e&&m.disabled===void 0&&i.disabled&&(i.disabled=!1)},[e,m.disabled,l]);se(o,[o]);const p=d.useCallback((i={})=>{const{onClick:B,onMouseDown:W,onKeyUp:K,onKeyDown:V,onPointerDown:U,...j}=i;return G({type:s?"button":void 0,onClick(a){if(e){a.preventDefault();return}B?.(a)},onMouseDown(a){e||W?.(a)},onKeyDown(a){if(e||(N(a),V?.(a)),a.baseUIHandlerPrevented)return;const H=a.target===a.currentTarget&&!s&&!u()&&!e,_=a.key==="Enter",$=a.key===" ";H&&(($||_)&&a.preventDefault(),_&&B?.(a))},onKeyUp(a){e||(N(a),K?.(a)),!a.baseUIHandlerPrevented&&a.target===a.currentTarget&&!s&&!e&&a.key===" "&&B?.(a)},onPointerDown(a){if(e){a.preventDefault();return}U?.(a)}},s?void 0:{role:"button"},m,j)},[e,m,s,u]),L=R(i=>{t.current=i,o()});return{getButtonProps:p,buttonRef:L}}function le(r){return ee(r)&&r.tagName==="BUTTON"}const ue=d.forwardRef(function(e,n){const{render:c,className:s,disabled:t=!1,focusableWhenDisabled:l=!1,nativeButton:u=!0,...m}=e,{getButtonProps:o,buttonRef:p}=de({disabled:t,focusableWhenDisabled:l,native:u});return J("button",e,{state:{disabled:t},ref:[n,p],props:[m,o]})}),me=Q("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",destructive:"bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function O({className:r,variant:e="default",size:n="default",...c}){return M.jsx(ue,{"data-slot":"button",className:X(me({variant:e,size:n,className:r})),...c})}O.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const pe={default:"default",primary:"default",secondary:"secondary",info:"outline",warning:"outline",error:"destructive",success:"secondary",outline:"outline",ghost:"ghost",destructive:"destructive",link:"link"};function T({variant:r="default",...e}){return M.jsx(O,{variant:pe[r],...e})}T.__docgenInfo={description:"Consumer-facing button wrapper for public package API",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
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
@default "default"`,defaultValue:{value:'"default"',computed:!1}}},composes:["Omit"]};const ke={title:"Inputs/Button",component:T,argTypes:{onClick:{action:"clicked"}},parameters:{layout:"centered"}},f={args:{children:"Click me",variant:"default"}},g={args:{children:"Click me",variant:"primary"}},v={args:{children:"Click me",variant:"secondary"}},b={args:{children:"Click me",variant:"info"}},h={args:{children:"Click me",variant:"warning"}},k={args:{children:"Click me",variant:"error"}},x={args:{children:"Click me",variant:"success"}},y={args:{children:"Click me",variant:"outline"}},C={args:{children:"Click me",variant:"ghost"}},S={args:{children:"Click me",variant:"destructive"}},w={args:{children:"Click me",variant:"link"}},z={args:{children:"Extra small",size:"xs"}},E={args:{children:"Small",size:"sm"}},D={args:{children:"Large",size:"lg"}},I={args:{children:"🔥",size:"icon"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "default"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "primary"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "secondary"
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "info"
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "warning"
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "error"
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "success"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "outline"
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "ghost"
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "destructive"
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "link"
  }
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Extra small",
    size: "xs"
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "sm"
  }
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large",
    size: "lg"
  }
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: "🔥",
    size: "icon"
  }
}`,...I.parameters?.docs?.source}}};const xe=["Default","Primary","Secondary","Info","Warning","Error","Success","Outline","Ghost","Destructive","Link","SizeExtraSmall","SizeSmall","SizeLarge","SizeIcon"];export{f as Default,S as Destructive,k as Error,C as Ghost,b as Info,w as Link,y as Outline,g as Primary,v as Secondary,z as SizeExtraSmall,I as SizeIcon,D as SizeLarge,E as SizeSmall,x as Success,h as Warning,xe as __namedExportsOrder,ke as default};
