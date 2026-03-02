import{j as o}from"./jsx-runtime-u17CrQMm.js";import{w as a}from"./storybook-Bq401jfZ.js";import{A as c,a as i,b as n,c as t}from"./accordion-zxjoAUYg.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-DvEgKYF6.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./loader-circle-DX3r9wpe.js";import"./createLucideIcon-b2KNZfrT.js";import"./triangle-alert-n8kWsz47.js";import"./sidebar-DJjs4gpy.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./x-DFJcBLed.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";import"./chevron-down-Ckq9awzG.js";import"./chevron-up-DtKUED3a.js";import"./useCompositeListItem-BMU0Mj2W.js";import"./useCollapsiblePanel-BLbTmV9H.js";import"./isElementDisabled-CwHw_lZC.js";const N={title:"Data Display/Accordion",component:c,decorators:[a({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>o.jsxs(c,{defaultValue:["item-1"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"What is included?"}),o.jsx(t,{children:"The plan includes unlimited projects and email support."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"How do I change billing?"}),o.jsx(t,{children:"Update billing details from your organization settings page."})]})]})},e={render:()=>o.jsxs(c,{multiple:!0,defaultValue:["item-1","item-2"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"Notifications"}),o.jsx(t,{children:"Email and in-app alerts are enabled."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"Security"}),o.jsx(t,{children:"Two-factor auth is enforced."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is included?</AccordionTrigger>
        <AccordionContent>
          The plan includes unlimited projects and email support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I change billing?</AccordionTrigger>
        <AccordionContent>
          Update billing details from your organization settings page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion multiple defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          Email and in-app alerts are enabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Security</AccordionTrigger>
        <AccordionContent>Two-factor auth is enforced.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...e.parameters?.docs?.source}}};const U=["Default","Multiple"];export{r as Default,e as Multiple,U as __namedExportsOrder,N as default};
