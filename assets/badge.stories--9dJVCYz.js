import{u,m as l,c as g,a as v}from"./utils-IK4cB7jz.js";import"./iframe-CP7Wc6pw.js";import"./preload-helper-PPVm8Dsz.js";function p(e){return u(e.defaultTagName??"div",e,e)}const m=v("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",destructive:"bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",outline:"border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",ghost:"hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",link:"text-primary underline-offset-4 hover:underline"}},defaultVariants:{variant:"default"}});function h({className:e,variant:o="default",render:d,...c}){return p({defaultTagName:"span",props:l({className:g(m({variant:o}),e)},c),render:d,state:{slot:"badge",variant:o}})}const x={title:"shadcn/Badge",component:h,parameters:{layout:"padded"}},r={args:{children:"Default"}},a={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},n={args:{variant:"outline",children:"Outline"}},s={args:{variant:"ghost",children:"Ghost"}},i={args:{variant:"link",children:"Link"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link"
  }
}`,...i.parameters?.docs?.source}}};const k=["Default","Secondary","Destructive","Outline","Ghost","Link"];export{r as Default,t as Destructive,s as Ghost,i as Link,n as Outline,a as Secondary,k as __namedExportsOrder,x as default};
