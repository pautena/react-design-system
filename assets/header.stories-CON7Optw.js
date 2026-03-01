import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as b}from"./badge-BesYDVF9.js";import{C as u}from"./content-CMmzQxpa.js";import{T as l}from"./tab-panel-DgQIamxi.js";import{T as g}from"./tab-provider.provider-EiZ-_0M7.js";import{H as p}from"./header-tfalIAdU.js";import{c as x}from"./createLucideIcon-_Y0M2pCR.js";import"./badge-Bj6xAan0.js";import"./index-CIF9E9WT.js";import"./utils-DDt1maD9.js";import"./useRender-lH89RUQN.js";import"./useRenderElement-SFrVg9J2.js";import"./iframe-CDZYyCF6.js";import"./preload-helper-PPVm8Dsz.js";import"./breadcrumbs-BPDV6Rb1.js";import"./chevron-right-CkkfbWC3.js";import"./button-CuQDWgJe.js";import"./button-eeTNg45r.js";import"./tabs-CJR9v7E1.js";import"./DirectionContext-CjkKkRfQ.js";import"./useCompositeListItem-BSAehJLS.js";import"./isElementDisabled-CwHw_lZC.js";import"./inertValue-Dp8Qzihs.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./useCompositeItem-BvBUUfU2.js";import"./loader-circle-D5NNXKCO.js";const h=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],f=x("arrow-left",h),{action:m}=__STORYBOOK_MODULE_ACTIONS__,T=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],P=[{id:"new",text:"Add",href:"/items/add"},{id:"edit",text:"Edit",onClick:m("click action edit")},{id:"disabled",text:"Disabled",disabled:!0,onClick:m("click action disabled")},{id:"delete",text:"Delete",onClick:m("click action delete")}],y=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],v=[{id:"tab1",label:"Tab 1",href:"/tab/tab1",path:"/tab/tab1"},{id:"tab2",label:"Tab 2",disabled:!0,href:"/tab/tab2",path:"/tab/tab2"},{id:"tab3",label:"Tab 3",href:"/tab/tab3",path:"/tab/tab3"},{id:"other",label:"Other",href:"/other",path:"/other"},{id:"another",label:"Another",href:"/another",path:"/another"},{id:"subtab",label:"Subtab",href:"/1/subtab",path:"/:id/subtab"}],D=[{id:"save-primary",text:"Primary contained",variant:"contained",color:"primary"},{id:"edit-secondary",text:"Secondary outlined",variant:"outlined",color:"secondary"},{id:"archive-info",text:"Info text",variant:"text",color:"info"},{id:"remove-error",text:"Error outlined",variant:"outlined",color:"error"}],X={title:"Data Display/Header",component:p,parameters:{layout:"fullscreen"}},t={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:T,actions:P}},r=()=>e.jsxs(g,{children:[e.jsx(p,{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"paper",border:!0,tabsMode:"panel",tabs:y}),e.jsxs(u,{children:[e.jsx(l,{index:0,children:"Panel Tab 1"}),e.jsx(l,{index:1,children:"Panel Tab 2"}),e.jsx(l,{index:2,children:"Panel Tab 3"})]})]}),a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",navigationButton:{text:"Go back",href:"/back",icon:e.jsx(f,{size:16})}}},s={args:{...t.args,title:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{className:"text-lg font-medium",children:"custom title"}),e.jsx(b,{variant:"primary",text:"4 items",className:"ml-2"})]})}},o={args:{...t.args,preset:"primary"}},n={args:{...t.args,preset:"secondary"}},i={args:{...t.args,preset:"paper",border:!0}},c={args:{...t.args,preset:"transparent",tabs:v,border:!0}},d={args:{...t.args,actionsVariant:"contained",actions:D}};r.__docgenInfo={description:"",methods:[],displayName:"WithPanelTabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <TabProvider>
    <Header title="Lorem ipsum" subtitle="Dolor sit amet" preset="paper" border tabsMode="panel" tabs={tabs} />
    <Content>
      <TabPanel index={0}>Panel Tab 1</TabPanel>
      <TabPanel index={1}>Panel Tab 2</TabPanel>
      <TabPanel index={2}>Panel Tab 3</TabPanel>
    </Content>
  </TabProvider>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    navigationButton: {
      text: "Go back",
      href: "/back",
      icon: <ArrowLeft size={16} />
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <div className="flex items-center">
        <h6 className="text-lg font-medium">custom title</h6>
        <Badge variant="primary" text="4 items" className="ml-2" />
      </div>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    preset: "primary"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    preset: "secondary"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    preset: "paper",
    border: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    preset: "transparent",
    tabs: linkedTabs,
    border: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionsVariant: "contained",
    actions: mixedActions
  }
}`,...d.parameters?.docs?.source}}};const Z=["Default","WithPanelTabs","NavigationButton","CustomTitle","PrimaryPreset","SecondaryPreset","PaperPresetWithBorder","TransparentWithTabs","MixedActionVariantsAndColors"];export{s as CustomTitle,t as Default,d as MixedActionVariantsAndColors,a as NavigationButton,i as PaperPresetWithBorder,o as PrimaryPreset,n as SecondaryPreset,c as TransparentWithTabs,r as WithPanelTabs,Z as __namedExportsOrder,X as default};
