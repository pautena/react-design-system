import{j as e}from"./iframe-CnbMuzLM.js";import{c as I,T as o}from"./Typography-DvHYNeI8.js";import{C as W}from"./Content-DG3-x0A5.js";import{B as k}from"./badge-_uTQYCEx.js";import{T as v}from"./TabPanel-wxrB7e5I.js";import{H as w,T as _}from"./Header-JYnfsuh-.js";import{B as n}from"./Box-Cw1nbHt1.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BsYj_Q0c.js";import"./Container-DPgGd-ZF.js";import"./styled-DypEcibl.js";import"./useThemeProps-XwFaLuaT.js";import"./badge-TSQb7Dhc.js";import"./useRenderElement-riLA-BnH.js";import"./utils-BxuXrb7G.js";import"./theme-B5MExplw.js";import"./useTheme-DnF_gfMc.js";import"./CircularProgress-CWaDErbR.js";import"./Button-CoExOmeN.js";import"./useSlotProps-Dem-hW5W.js";import"./useSlot-BROZ5lZE.js";import"./Link-wIRlWhck.js";import"./Tabs-Bqou-wTH.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-B6pRJD1J.js";import"./KeyboardArrowRight-BDh_I2_c.js";import"./getActiveElement-BQgAPKnO.js";const E=I(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),{action:j}=__STORYBOOK_MODULE_ACTIONS__,r=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add",href:"/items/add"},{id:"edit",text:"Edit",onClick:j("click action edit")},{id:"disabled",text:"Disabled",disabled:!0,onClick:j("click action disabled")},{id:"delete",text:"Delete",onClick:j("click action delete")}],s=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],le={title:"Data Display/Header",component:w,parameters:{layout:"fullscreen"}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:t}},l={args:{title:"Lorem ipsum"}},c={args:{...a.args,title:e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(o,{variant:"h6",children:"Lorem ipsum"}),e.jsx(k,{variant:"primary",text:"4 items",className:"ml-2"})]})}},m={args:{...a.args,loadingTitle:!0}},p={args:{...a.args,subtitle:e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(o,{variant:"body2",children:"Dolor sit amet"}),e.jsx(k,{variant:"error",text:"since yesterday",className:"ml-2"})]})}},d={args:{...a.args,loadingSubtitle:!0}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"inherit",breadcrumbs:r,tabs:s,actions:t}},b={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"primary",breadcrumbs:r,tabs:s,actions:t}},g={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"secondary",breadcrumbs:r,tabs:s,actions:t}},x={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,tabs:s,actions:t}},h={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"transparent",breadcrumbs:r,tabs:s,actions:t}},y={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet"}},T={args:{title:"Lorem ipsum",breadcrumbs:r}},D={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",tabsMode:"panel",breadcrumbs:r,actions:t}},i=()=>e.jsxs(_,{children:[e.jsx(w,{title:"Lorem ipsum",subtitle:"Dolor sit amet",tabsMode:"panel",tabs:s}),e.jsxs(W,{children:[e.jsx(v,{index:0,children:e.jsx(o,{children:"Panel Tab 1"})}),e.jsx(v,{index:1,children:e.jsx(o,{children:"Panel Tab 2"})}),e.jsx(v,{index:2,children:e.jsx(o,{children:"Panel Tab 3"})})]})]}),f={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",navigationButton:{text:"Go back",href:"/back",icon:e.jsx(E,{})}}},S={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:t,border:!0},decorators:[C=>e.jsxs(n,{children:[e.jsx(C,{}),e.jsx(n,{p:3,children:e.jsx(o,{children:"Content below header to show the border"})})]})]},L={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"paper",breadcrumbs:r,tabs:s,actions:t,border:!0},decorators:[C=>e.jsxs(n,{children:[e.jsx(C,{}),e.jsx(n,{p:3,children:e.jsx(o,{children:"Paper preset uses theme background.paper (white in light mode, dark in dark mode)"})})]})]},B={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",preset:"default",breadcrumbs:r,actions:[{id:"view",text:"View",variant:"text",color:"primary"},{id:"edit",text:"Edit",variant:"outlined",color:"secondary"},{id:"save",text:"Save",variant:"contained",color:"primary"},{id:"delete",text:"Delete",variant:"contained",color:"error"}]}},P={args:{title:"Slot Props Demo",subtitle:"Multiple customizations",breadcrumbs:r,actions:t,tabs:s,tabsMode:"panel",slotProps:{root:{sx:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white"}},breadcrumbs:{separator:"/"},actionButton:{size:"large"},tabs:{TabIndicatorProps:{style:{backgroundColor:"#fff",height:4}}}}}};i.__docgenInfo={description:"",methods:[],displayName:"WithPanelTabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Badge variant="primary" text="4 items" className="ml-2" />
      </Box>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loadingTitle: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subtitle: <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="body2">Dolor sit amet</Typography>
        <Badge variant="error" text="since yesterday" className="ml-2" />
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
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const ce=["Default","OnlyTitle","CustomTitle","TitleLoading","CustomSubtitle","SubtitleLoading","ColorInherit","ColorPrimary","ColorSecondary","ColorDefault","ColorTransparent","WithSubheader","WithBreadcumbs","WithActions","WithPanelTabs","NavigationButton","WithBorder","ColorPaper","CustomActionStyles","WithSlotPropsCustomization"];export{x as ColorDefault,u as ColorInherit,L as ColorPaper,b as ColorPrimary,g as ColorSecondary,h as ColorTransparent,B as CustomActionStyles,p as CustomSubtitle,c as CustomTitle,a as Default,f as NavigationButton,l as OnlyTitle,d as SubtitleLoading,m as TitleLoading,D as WithActions,S as WithBorder,T as WithBreadcumbs,i as WithPanelTabs,P as WithSlotPropsCustomization,y as WithSubheader,ce as __namedExportsOrder,le as default};
