import{j as e}from"./iframe-CPJC-7_S.js";import{c as I}from"./createSvgIcon-BgPxQH2C.js";import{C as W}from"./Content-rsZ7_ePb.js";import{L as k}from"./Label-DC-DOMD2.js";import{T as v}from"./TabPanel-DiWu19P3.js";import{H as w,T as _}from"./Header-B1pFZHAQ.js";import{B as n}from"./Box-TJyasLSX.js";import{T as o}from"./Typography-CLOlFX5y.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C8b3s5Nq.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Container-DAvAVEC0.js";import"./styled-BSpG49Gz.js";import"./useThemeProps-Dulreeay.js";import"./useTheme-DdlF0zeT.js";import"./theme-CqWwyrei.js";import"./CircularProgress-C6ftKUTK.js";import"./createSimplePaletteValueFilter-Bx-47Vpk.js";import"./Button-D9bdBOIi.js";import"./ButtonBase-DNHRbV3y.js";import"./useSlotProps-Bqj_dkCx.js";import"./useSlot-B7v4Ed5k.js";import"./Link-C9R3emKN.js";import"./Tabs-DE5rlmiF.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-DF-UATX8.js";import"./getActiveElement-BQgAPKnO.js";const E=I(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),{action:j}=__STORYBOOK_MODULE_ACTIONS__,r=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add",href:"/items/add"},{id:"edit",text:"Edit",onClick:j("click action edit")},{id:"disabled",text:"Disabled",disabled:!0,onClick:j("click action disabled")},{id:"delete",text:"Delete",onClick:j("click action delete")}],s=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ce={title:"Data Display/Header",component:w,parameters:{layout:"fullscreen"}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:t}},l={args:{title:"Lorem ipsum"}},m={args:{...a.args,title:e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(o,{variant:"h6",children:"Lorem ipsum"}),e.jsx(k,{variant:"primary",text:"4 items",sx:{ml:1}})]})}},c={args:{...a.args,loadingTitle:!0}},p={args:{...a.args,subtitle:e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(o,{variant:"body2",children:"Dolor sit amet"}),e.jsx(k,{variant:"error",text:"since yesterday",sx:{ml:1}})]})}},d={args:{...a.args,loadingSubtitle:!0}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"inherit",breadcrumbs:r,tabs:s,actions:t}},b={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"primary",breadcrumbs:r,tabs:s,actions:t}},g={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"secondary",breadcrumbs:r,tabs:s,actions:t}},x={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,tabs:s,actions:t}},h={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"transparent",breadcrumbs:r,tabs:s,actions:t}},y={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet"}},T={args:{title:"Lorem ipsum",breadcrumbs:r}},D={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",tabsMode:"panel",breadcrumbs:r,actions:t}},i=()=>e.jsxs(_,{children:[e.jsx(w,{title:"Lorem ipsum",subtitle:"Dolor sit amet",tabsMode:"panel",tabs:s}),e.jsxs(W,{children:[e.jsx(v,{index:0,children:e.jsx(o,{children:"Panel Tab 1"})}),e.jsx(v,{index:1,children:e.jsx(o,{children:"Panel Tab 2"})}),e.jsx(v,{index:2,children:e.jsx(o,{children:"Panel Tab 3"})})]})]}),f={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",navigationButton:{text:"Go back",href:"/back",icon:e.jsx(E,{})}}},S={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:t,border:!0},decorators:[B=>e.jsxs(n,{children:[e.jsx(B,{}),e.jsx(n,{p:3,children:e.jsx(o,{children:"Content below header to show the border"})})]})]},L={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"paper",breadcrumbs:r,tabs:s,actions:t,border:!0},decorators:[B=>e.jsxs(n,{children:[e.jsx(B,{}),e.jsx(n,{p:3,children:e.jsx(o,{children:"Paper preset uses theme background.paper (white in light mode, dark in dark mode)"})})]})]},P={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:[{id:"view",text:"View",variant:"text",color:"primary"},{id:"edit",text:"Edit",variant:"outlined",color:"secondary"},{id:"save",text:"Save",variant:"contained",color:"primary"},{id:"delete",text:"Delete",variant:"contained",color:"error"}]}},C={args:{title:"Slot Props Demo",subtitle:"Multiple customizations",breadcrumbs:r,actions:t,tabs:s,tabsMode:"panel",slotProps:{root:{sx:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white"}},breadcrumbs:{separator:"/"},actionButton:{size:"large"},tabs:{TabIndicatorProps:{style:{backgroundColor:"#fff",height:4}}}}}};i.__docgenInfo={description:"",methods:[],displayName:"WithPanelTabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Label variant="primary" text="4 items" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingTitle: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subtitle: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="body2">Dolor sit amet</Typography>
        <Label variant="error" text="since yesterday" sx={{
        ml: 1
      }} />
      </Box>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingSubtitle: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "inherit",
    breadcrumbs,
    tabs,
    actions
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "primary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "secondary",
    breadcrumbs,
    tabs,
    actions
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    tabs,
    actions
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "transparent",
    breadcrumbs,
    tabs,
    actions
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet"
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    breadcrumbs
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    tabsMode: "panel",
    breadcrumbs,
    actions
  }
}`,...D.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <TabProvider>
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
  </TabProvider>`,...i.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions,
    border: true
  },
  decorators: [Story => <Box>
        <Story />
        <Box p={3}>
          <Typography>Content below header to show the border</Typography>
        </Box>
      </Box>]
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "paper",
    breadcrumbs,
    tabs,
    actions,
    border: true
  },
  decorators: [Story => <Box>
        <Story />
        <Box p={3}>
          <Typography>
            Paper preset uses theme background.paper (white in light mode, dark
            in dark mode)
          </Typography>
        </Box>
      </Box>]
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions: [{
      id: "view",
      text: "View",
      variant: "text",
      color: "primary"
    }, {
      id: "edit",
      text: "Edit",
      variant: "outlined",
      color: "secondary"
    }, {
      id: "save",
      text: "Save",
      variant: "contained",
      color: "primary"
    }, {
      id: "delete",
      text: "Delete",
      variant: "contained",
      color: "error"
    }]
  }
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Slot Props Demo",
    subtitle: "Multiple customizations",
    breadcrumbs,
    actions,
    tabs,
    tabsMode: "panel",
    slotProps: {
      root: {
        sx: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white"
        }
      },
      breadcrumbs: {
        separator: "/"
      },
      actionButton: {
        size: "large"
      },
      tabs: {
        TabIndicatorProps: {
          style: {
            backgroundColor: "#fff",
            height: 4
          }
        }
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const pe=["Default","OnlyTitle","CustomTitle","TitleLoading","CustomSubtitle","SubtitleLoading","ColorInherit","ColorPrimary","ColorSecondary","ColorDefault","ColorTransparent","WithSubheader","WithBreadcumbs","WithActions","WithPanelTabs","NavigationButton","WithBorder","ColorPaper","CustomActionStyles","WithSlotPropsCustomization"];export{x as ColorDefault,u as ColorInherit,L as ColorPaper,b as ColorPrimary,g as ColorSecondary,h as ColorTransparent,P as CustomActionStyles,p as CustomSubtitle,m as CustomTitle,a as Default,f as NavigationButton,l as OnlyTitle,d as SubtitleLoading,c as TitleLoading,D as WithActions,S as WithBorder,T as WithBreadcumbs,i as WithPanelTabs,C as WithSlotPropsCustomization,y as WithSubheader,pe as __namedExportsOrder,ce as default};
