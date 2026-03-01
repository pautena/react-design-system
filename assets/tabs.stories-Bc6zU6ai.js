import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as o}from"./storybook-DmumCzB1.js";import{T as a,a as s,b as t,c as i}from"./tabs-PKe0uxQf.js";import"./iframe-CDZYyCF6.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-0dXctXjj.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./loader-circle-D5NNXKCO.js";import"./createLucideIcon-_Y0M2pCR.js";import"./triangle-alert-z238XSVp.js";import"./sidebar-CWpzMi7s.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./button-eeTNg45r.js";import"./useRenderElement-SFrVg9J2.js";import"./DirectionContext-CjkKkRfQ.js";import"./inertValue-Dp8Qzihs.js";import"./x-By124X4E.js";import"./DialogTitle-hlYW2CVd.js";import"./index-DXENcVt8.js";import"./useRender-lH89RUQN.js";import"./tabs-CJR9v7E1.js";import"./useCompositeListItem-BSAehJLS.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-BvBUUfU2.js";const D={title:"Navigation/Tabs",component:a,decorators:[o({width:420,padding:2})],parameters:{layout:"centered"}},r={render:()=>e.jsxs(a,{defaultValue:"overview",children:[e.jsxs(s,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"activity",children:"Activity"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(i,{value:"overview",children:"Overview content"}),e.jsx(i,{value:"activity",children:"Recent activity content"}),e.jsx(i,{value:"settings",children:"Settings content"})]})},n={render:()=>e.jsxs(a,{defaultValue:"profile",children:[e.jsxs(s,{variant:"line",children:[e.jsx(t,{value:"profile",children:"Profile"}),e.jsx(t,{value:"billing",children:"Billing"})]}),e.jsx(i,{value:"profile",children:"Profile content"}),e.jsx(i,{value:"billing",children:"Billing content"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
