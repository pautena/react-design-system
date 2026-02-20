import{r as c,L as T,j as W}from"./iframe-CP7Wc6pw.js";import{b as U,f as V,m as H,d as B,u as j,c as F,a as G}from"./utils-IK4cB7jz.js";import"./preload-helper-PPVm8Dsz.js";function $(){return typeof window<"u"}function q(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function A(r){return $()?r instanceof HTMLElement||r instanceof q(r).HTMLElement:!1}const w=T[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],J=w&&w!==c.useLayoutEffect?w:r=>r();function I(r){const e=U(Q).current;return e.next=r,J(e.effect),e.trampoline}function Q(){const r={next:void 0,callback:X,trampoline:(...e)=>r.callback?.(...e),effect:()=>{r.callback=r.next}};return r}function X(){}const Y=()=>{},Z=typeof document<"u"?c.useLayoutEffect:Y,ee=c.createContext(void 0);function re(r=!1){const e=c.useContext(ee);if(e===void 0&&!r)throw new Error(V(16));return e}function te(r){const{focusableWhenDisabled:e,disabled:n,composite:d=!1,tabIndex:s=0,isNativeButton:a}=r,u=d&&e!==!1,l=d&&e===!1;return{props:c.useMemo(()=>{const o={onKeyDown(f){n&&e&&f.key!=="Tab"&&f.preventDefault()}};return d||(o.tabIndex=s,!a&&n&&(o.tabIndex=e?s:-1)),(a&&(e||u)||!a&&n)&&(o["aria-disabled"]=n),a&&(!e||l)&&(o.disabled=n),o},[d,n,e,u,l,a,s])}}function ne(r={}){const{disabled:e=!1,focusableWhenDisabled:n,tabIndex:d=0,native:s=!0}=r,a=c.useRef(null),u=re(!0)!==void 0,l=I(()=>{const i=a.current;return!!(i?.tagName==="A"&&i?.href)}),{props:p}=te({focusableWhenDisabled:n,disabled:e,composite:u,tabIndex:d,isNativeButton:s}),o=c.useCallback(()=>{const i=a.current;ae(i)&&u&&e&&p.disabled===void 0&&i.disabled&&(i.disabled=!1)},[e,p.disabled,u]);Z(o,[o]);const f=c.useCallback((i={})=>{const{onClick:D,onMouseDown:P,onKeyUp:O,onKeyDown:R,onPointerDown:N,..._}=i;return H({type:s?"button":void 0,onClick(t){if(e){t.preventDefault();return}D?.(t)},onMouseDown(t){e||P?.(t)},onKeyDown(t){if(e||(B(t),R?.(t)),t.baseUIHandlerPrevented)return;const K=t.target===t.currentTarget&&!s&&!l()&&!e,C=t.key==="Enter",M=t.key===" ";K&&((M||C)&&t.preventDefault(),C&&D?.(t))},onKeyUp(t){e||(B(t),O?.(t)),!t.baseUIHandlerPrevented&&t.target===t.currentTarget&&!s&&!e&&t.key===" "&&D?.(t)},onPointerDown(t){if(e){t.preventDefault();return}N?.(t)}},s?void 0:{role:"button"},p,_)},[e,p,s,l]),E=I(i=>{a.current=i,o()});return{getButtonProps:f,buttonRef:E}}function ae(r){return A(r)&&r.tagName==="BUTTON"}const se=c.forwardRef(function(e,n){const{render:d,className:s,disabled:a=!1,focusableWhenDisabled:u=!1,nativeButton:l=!0,...p}=e,{getButtonProps:o,buttonRef:f}=ne({disabled:a,focusableWhenDisabled:u,native:l});return j("button",e,{state:{disabled:a},ref:[n,f],props:[p,o]})}),oe=G("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",destructive:"bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function L({className:r,variant:e="default",size:n="default",...d}){return W.jsx(se,{"data-slot":"button",className:F(oe({variant:e,size:n,className:r})),...d})}L.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const le={title:"shadcn/Button",component:L,parameters:{layout:"padded"}},m={args:{children:"Button"}},g={args:{variant:"secondary",children:"Secondary"}},b={args:{variant:"destructive",children:"Destructive"}},v={args:{variant:"outline",children:"Outline"}},h={args:{variant:"ghost",children:"Ghost"}},x={args:{variant:"link",children:"Link"}},y={args:{size:"xs",children:"Extra small"}},k={args:{size:"sm",children:"Small"}},S={args:{size:"lg",children:"Large"}},z={args:{size:"icon",children:"🔥"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs",
    children: "Extra small"
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small"
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large"
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    size: "icon",
    children: "🔥"
  }
}`,...z.parameters?.docs?.source}}};const pe=["Default","Secondary","Destructive","Outline","Ghost","Link","SizeExtraSmall","SizeSmall","SizeLarge","SizeIcon"];export{m as Default,b as Destructive,h as Ghost,x as Link,v as Outline,g as Secondary,y as SizeExtraSmall,z as SizeIcon,S as SizeLarge,k as SizeSmall,pe as __namedExportsOrder,le as default};
