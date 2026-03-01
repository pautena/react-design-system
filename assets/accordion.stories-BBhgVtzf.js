import{j as o}from"./jsx-runtime-u17CrQMm.js";import{w as a}from"./storybook-DGQC_J7b.js";import{A as c,a as i,b as n,c as t}from"./accordion-BbHCxTpy.js";import"./iframe-8bOXTxPH.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-BTOpiPFL.js";import"./index-BJYu0083.js";import"./index-DFQHTOpI.js";import"./loader-circle-TGemnWQk.js";import"./createLucideIcon-DgNhUQau.js";import"./triangle-alert-BuqI-I4b.js";import"./sidebar-1j0daNYF.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./button-BR1Q4a2d.js";import"./useRenderElement-CRmWNaDK.js";import"./DirectionContext-BttIP5WW.js";import"./inertValue-DJ3PUikA.js";import"./x-BwdVUwc8.js";import"./DialogTitle-hz5S8b6j.js";import"./index-D1T7PVUv.js";import"./useRender-CiORafEc.js";import"./chevron-down-DGK8sTLC.js";import"./chevron-up-D4uZGruR.js";import"./useCompositeListItem-CIxa3Mw3.js";import"./useCollapsiblePanel-BevmaN1r.js";import"./isElementDisabled-CwHw_lZC.js";const N={title:"Data Display/Accordion",component:c,decorators:[a({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>o.jsxs(c,{defaultValue:["item-1"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"What is included?"}),o.jsx(t,{children:"The plan includes unlimited projects and email support."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"How do I change billing?"}),o.jsx(t,{children:"Update billing details from your organization settings page."})]})]})},e={render:()=>o.jsxs(c,{multiple:!0,defaultValue:["item-1","item-2"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"Notifications"}),o.jsx(t,{children:"Email and in-app alerts are enabled."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"Security"}),o.jsx(t,{children:"Two-factor auth is enforced."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
