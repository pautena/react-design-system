import{j as e}from"./iframe-OKrkvHog.js";import{a as p}from"./storybook-D1oaJzNH.js";import{V as c}from"./value-boolean-B6Z8-yKb.js";import{V as o}from"./value-item-CO7JuHKK.js";import{V as g}from"./value-text-C5KKvXYG.js";import{c as a}from"./utils-BtxETjiC.js";function n({title:i,subtitle:l,centered:d,children:m,dense:s,className:u}){return e.jsxs("div",{className:a("overflow-hidden rounded-lg border bg-card",u),children:[e.jsxs("div",{className:a("bg-muted",s?"px-3 py-2":"px-4 py-3"),children:[e.jsx("p",{role:"heading","aria-level":1,className:a(s?"text-base font-semibold":"text-lg font-semibold"),children:i}),l?e.jsx("p",{role:"heading","aria-level":2,className:a(s?"text-xs":"text-sm","text-muted-foreground"),children:l}):null]}),e.jsx("div",{className:a("grid grid-cols-12 p-2",s?"gap-y-2":"gap-y-3",d&&"justify-items-center"),children:m})]})}n.__docgenInfo={description:"Card wrapper for grouped value display.",methods:[],displayName:"GroupValueCard",props:{title:{required:!0,tsType:{name:"string"},description:"Main title of the card."},subtitle:{required:!1,tsType:{name:"string"},description:"Optional subtitle shown below the title."},centered:{required:!1,tsType:{name:"boolean"},description:"Whether to center card content."},children:{required:!0,tsType:{name:"union",raw:"ValueItemElement | ValueItemElement[] | ReactNode",elements:[{name:"ValueItemElement"},{name:"Array",elements:[{name:"ValueItemElement"}],raw:"ValueItemElement[]"},{name:"ReactNode"}]},description:"Value item elements rendered in the content area."},dense:{required:!1,tsType:{name:"boolean"},description:"Compact style mode."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for custom styling."}}};const x={title:"Data Display/GroupValueCard",component:n,decorators:[p({width:900,padding:2})],parameters:{layout:"centered"}},t={args:{title:"Hello world",subtitle:"Lorem ipsum sit amet",children:[e.jsx(o,{size:{xs:12,md:8},children:e.jsx(g,{label:"Hello world",value:"Lorem ipsum sit amet"})},"1"),e.jsx(o,{size:{xs:12,md:4},children:e.jsx(c,{label:"Enabled",value:!0})},"2")]}},r={args:{...t.args,dense:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: [<ValueItem key="1" size={{
      xs: 12,
      md: 8
    }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>, <ValueItem key="2" size={{
      xs: 12,
      md: 4
    }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dense: true
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","Dense"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Dense:r,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,n as G,w as g};
