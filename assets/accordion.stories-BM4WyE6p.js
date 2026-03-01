import{j as o}from"./jsx-runtime-u17CrQMm.js";import{w as a}from"./storybook-DmumCzB1.js";import{A as c,a as i,b as n,c as t}from"./accordion-D-oiUs2N.js";import"./iframe-CDZYyCF6.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-0dXctXjj.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./loader-circle-D5NNXKCO.js";import"./createLucideIcon-_Y0M2pCR.js";import"./triangle-alert-z238XSVp.js";import"./sidebar-CWpzMi7s.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-eeTNg45r.js";import"./useRenderElement-SFrVg9J2.js";import"./DirectionContext-CjkKkRfQ.js";import"./inertValue-Dp8Qzihs.js";import"./x-By124X4E.js";import"./DialogTitle-hlYW2CVd.js";import"./index-DXENcVt8.js";import"./useRender-lH89RUQN.js";import"./chevron-down-BsUByaSI.js";import"./chevron-up-DFwWxYQK.js";import"./useCompositeListItem-BSAehJLS.js";import"./useCollapsiblePanel-BtKv7V_x.js";import"./isElementDisabled-CwHw_lZC.js";const N={title:"Data Display/Accordion",component:c,decorators:[a({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>o.jsxs(c,{defaultValue:["item-1"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"What is included?"}),o.jsx(t,{children:"The plan includes unlimited projects and email support."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"How do I change billing?"}),o.jsx(t,{children:"Update billing details from your organization settings page."})]})]})},e={render:()=>o.jsxs(c,{multiple:!0,defaultValue:["item-1","item-2"],children:[o.jsxs(i,{value:"item-1",children:[o.jsx(n,{children:"Notifications"}),o.jsx(t,{children:"Email and in-app alerts are enabled."})]}),o.jsxs(i,{value:"item-2",children:[o.jsx(n,{children:"Security"}),o.jsx(t,{children:"Two-factor auth is enforced."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
