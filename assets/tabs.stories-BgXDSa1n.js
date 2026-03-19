import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as o}from"./storybook-Dr9sP6fi.js";import{T as a,a as s,b as t,c as i}from"./tabs-B7oEuyZd.js";import"./iframe-C8GoqKMl.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-BkXpd-S-.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./loader-circle-BdDYgNFh.js";import"./createLucideIcon-zSeE5OCt.js";import"./triangle-alert-Cki19iAl.js";import"./sidebar-DAaa7t-4.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-CqmGLEkD.js";import"./useRenderElement-B98N9jJg.js";import"./DirectionContext-qIuXBF4_.js";import"./inertValue-2mOOpLpY.js";import"./x-Dv0RtamN.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./useRender-D-Hu_BU4.js";import"./tabs-x3k-0TVY.js";import"./useCompositeListItem-BlA6mkGW.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-z1xUqsoL.js";const D={title:"Navigation/Tabs",component:a,decorators:[o({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>e.jsxs(a,{defaultValue:"overview",children:[e.jsxs(s,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"activity",children:"Activity"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(i,{value:"overview",children:"Overview content"}),e.jsx(i,{value:"activity",children:"Recent activity content"}),e.jsx(i,{value:"settings",children:"Settings content"})]})},n={render:()=>e.jsxs(a,{defaultValue:"profile",children:[e.jsxs(s,{variant:"line",children:[e.jsx(t,{value:"profile",children:"Profile"}),e.jsx(t,{value:"billing",children:"Billing"})]}),e.jsx(i,{value:"profile",children:"Profile content"}),e.jsx(i,{value:"billing",children:"Billing content"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
