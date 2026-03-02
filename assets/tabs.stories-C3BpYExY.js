import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as o}from"./storybook-Bq401jfZ.js";import{T as a,a as s,b as t,c as i}from"./tabs-BfSDD6Xt.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-DvEgKYF6.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./loader-circle-DX3r9wpe.js";import"./createLucideIcon-b2KNZfrT.js";import"./triangle-alert-n8kWsz47.js";import"./sidebar-DJjs4gpy.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./x-DFJcBLed.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";import"./tabs-BBeDIdJm.js";import"./useCompositeListItem-BMU0Mj2W.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-CPLuHSp0.js";const D={title:"Navigation/Tabs",component:a,decorators:[o({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>e.jsxs(a,{defaultValue:"overview",children:[e.jsxs(s,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"activity",children:"Activity"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(i,{value:"overview",children:"Overview content"}),e.jsx(i,{value:"activity",children:"Recent activity content"}),e.jsx(i,{value:"settings",children:"Settings content"})]})},n={render:()=>e.jsxs(a,{defaultValue:"profile",children:[e.jsxs(s,{variant:"line",children:[e.jsx(t,{value:"profile",children:"Profile"}),e.jsx(t,{value:"billing",children:"Billing"})]}),e.jsx(i,{value:"profile",children:"Profile content"}),e.jsx(i,{value:"billing",children:"Billing content"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="activity">Recent activity content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile">
      <TabsList variant="line">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Profile content</TabsContent>
      <TabsContent value="billing">Billing content</TabsContent>
    </Tabs>
}`,...n.parameters?.docs?.source}}};const E=["Default","LineVariant"];export{r as Default,n as LineVariant,E as __namedExportsOrder,D as default};
