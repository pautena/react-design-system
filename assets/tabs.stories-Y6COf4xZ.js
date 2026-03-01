import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as o}from"./storybook-DGQC_J7b.js";import{T as a,a as s,b as t,c as i}from"./tabs-B0cxL6MJ.js";import"./iframe-8bOXTxPH.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-BTOpiPFL.js";import"./index-BJYu0083.js";import"./index-DFQHTOpI.js";import"./loader-circle-TGemnWQk.js";import"./createLucideIcon-DgNhUQau.js";import"./triangle-alert-BuqI-I4b.js";import"./sidebar-1j0daNYF.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./button-BR1Q4a2d.js";import"./useRenderElement-CRmWNaDK.js";import"./DirectionContext-BttIP5WW.js";import"./inertValue-DJ3PUikA.js";import"./x-BwdVUwc8.js";import"./DialogTitle-hz5S8b6j.js";import"./index-D1T7PVUv.js";import"./useRender-CiORafEc.js";import"./tabs-BbMq07A7.js";import"./useCompositeListItem-CIxa3Mw3.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-CqqKMzbV.js";const D={title:"Navigation/Tabs",component:a,decorators:[o({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>e.jsxs(a,{defaultValue:"overview",children:[e.jsxs(s,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"activity",children:"Activity"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(i,{value:"overview",children:"Overview content"}),e.jsx(i,{value:"activity",children:"Recent activity content"}),e.jsx(i,{value:"settings",children:"Settings content"})]})},n={render:()=>e.jsxs(a,{defaultValue:"profile",children:[e.jsxs(s,{variant:"line",children:[e.jsx(t,{value:"profile",children:"Profile"}),e.jsx(t,{value:"billing",children:"Billing"})]}),e.jsx(i,{value:"profile",children:"Profile content"}),e.jsx(i,{value:"billing",children:"Billing content"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
