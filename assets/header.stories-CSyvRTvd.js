import{j as e}from"./iframe-EZlCblT_.js";import{c as j,T as i}from"./Typography-vAnbId3H.js";import{C as v}from"./content-CFmkdaPg.js";import{L as S}from"./label-BHUDI1wW.js";import{T as f}from"./tab-panel-DKGprK1H.js";import{H as C,T as B}from"./header-FRQmCES-.js";import{B as P}from"./Box-C0oK-ZD8.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CjfLGB6G.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-BROrGcBZ.js";import"./Container-enQBmRdh.js";import"./styled-CQAdqEOk.js";import"./useThemeProps-DymWMTR7.js";import"./useTheme-BkEo2tXZ.js";import"./theme-C8-Io0lh.js";import"./CircularProgress-CWLujbj3.js";import"./Button-fNy9YLcp.js";import"./Link-Dl0Oj1uL.js";import"./useSlotProps-X_D2_fbs.js";import"./useSlot-JprQW5-3.js";import"./Tabs-4psB6pfx.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-BgeXng0c.js";import"./getActiveElement-BQgAPKnO.js";const k=j(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),{action:L}=__STORYBOOK_MODULE_ACTIONS__,t=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],a=[{id:"new",text:"Add",href:"/items/add"},{id:"edit",text:"Edit",onClick:L("click action edit")},{id:"disabled",text:"Disabled",disabled:!0,onClick:L("click action disabled")},{id:"delete",text:"Delete",onClick:L("click action delete")}],s=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ae={title:"Components/Data Display/Header",component:C,parameters:{layout:"fullscreen"}},r={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:t,actions:a}},n={args:{title:"Lorem ipsum"}},l={args:{...r.args,title:e.jsxs(P,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(i,{variant:"h6",children:"Lorem ipsum"}),e.jsx(S,{variant:"primary",text:"4 items",sx:{ml:1}})]})}},m={args:{...r.args,loadingTitle:!0}},c={args:{...r.args,subtitle:e.jsxs(P,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(i,{variant:"body2",children:"Dolor sit amet"}),e.jsx(S,{variant:"error",text:"since yesterday",sx:{ml:1}})]})}},p={args:{...r.args,loadingSubtitle:!0}},d={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"inherit",breadcrumbs:t,tabs:s,actions:a}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"primary",breadcrumbs:t,tabs:s,actions:a}},b={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"secondary",breadcrumbs:t,tabs:s,actions:a}},g={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:t,tabs:s,actions:a}},x={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"transparent",breadcrumbs:t,tabs:s,actions:a}},T={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet"}},y={args:{title:"Lorem ipsum",breadcrumbs:t}},h={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",tabsMode:"panel",breadcrumbs:t,actions:a}},o=()=>e.jsxs(B,{children:[e.jsx(C,{title:"Lorem ipsum",subtitle:"Dolor sit amet",tabsMode:"panel",tabs:s}),e.jsxs(v,{children:[e.jsx(f,{index:0,children:e.jsx(i,{children:"Panel Tab 1"})}),e.jsx(f,{index:1,children:e.jsx(i,{children:"Panel Tab 2"})}),e.jsx(f,{index:2,children:e.jsx(i,{children:"Panel Tab 3"})})]})]}),D={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",navigationButton:{text:"Go back",href:"/back",icon:e.jsx(k,{})}}};o.__docgenInfo={description:"",methods:[],displayName:"WithPanelTabs"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Label variant="primary" text="4 items" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingTitle: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subtitle: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="body2">Dolor sit amet</Typography>
        <Label variant="error" text="since yesterday" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingSubtitle: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "inherit",
    breadcrumbs,
    tabs,
    actions
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "primary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "secondary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    tabs,
    actions
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "transparent",
    breadcrumbs,
    tabs,
    actions
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet"
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    breadcrumbs
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    tabsMode: "panel",
    breadcrumbs,
    actions
  }
}`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <TabProvider>
    <Header title="Lorem ipsum" subtitle="Dolor sit amet" tabsMode="panel" tabs={tabs} />
    <Content>
      <TabPanel index={0}>
        <Typography>Panel Tab 1</Typography>
      </TabPanel>
      <TabPanel index={1}>
        <Typography>Panel Tab 2</Typography>
      </TabPanel>
      <TabPanel index={2}>
        <Typography>Panel Tab 3</Typography>
      </TabPanel>
    </Content>
  </TabProvider>`,...o.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    navigationButton: {
      text: "Go back",
      href: "/back",
      icon: <ArrowBackIcon />
    }
  }
}`,...D.parameters?.docs?.source}}};const se=["Default","OnlyTitle","CustomTitle","TitleLoading","CustomSubtitle","SubtitleLoading","ColorInherit","ColorPrimary","ColorSecondary","ColorDefault","ColorTransparent","WithSubheader","WithBreadcumbs","WithActions","WithPanelTabs","NavigationButton"];export{g as ColorDefault,d as ColorInherit,u as ColorPrimary,b as ColorSecondary,x as ColorTransparent,c as CustomSubtitle,l as CustomTitle,r as Default,D as NavigationButton,n as OnlyTitle,p as SubtitleLoading,m as TitleLoading,h as WithActions,y as WithBreadcumbs,o as WithPanelTabs,T as WithSubheader,se as __namedExportsOrder,ae as default};
