import{j as r}from"./iframe-CPJC-7_S.js";import{H as c}from"./HeaderLayout-CfHsrGH1.js";import{S as l}from"./SkeletonGrid-C8hRcBE-.js";import{b as u,a as h}from"./storybook-BSQM50tz.js";import{T as p}from"./TabPanel-DiWu19P3.js";import{T as b}from"./TablePlaceholder-BFI-gw0i.js";import{B as g}from"./Box-TJyasLSX.js";import{T as d}from"./Typography-CLOlFX5y.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-BgPxQH2C.js";import"./memoTheme-C8b3s5Nq.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Content-rsZ7_ePb.js";import"./Container-DAvAVEC0.js";import"./styled-BSpG49Gz.js";import"./useThemeProps-Dulreeay.js";import"./Header-B1pFZHAQ.js";import"./theme-CqWwyrei.js";import"./useTheme-DdlF0zeT.js";import"./CircularProgress-C6ftKUTK.js";import"./createSimplePaletteValueFilter-Bx-47Vpk.js";import"./Button-D9bdBOIi.js";import"./ButtonBase-DNHRbV3y.js";import"./useSlotProps-Bqj_dkCx.js";import"./useSlot-B7v4Ed5k.js";import"./Link-C9R3emKN.js";import"./Tabs-DE5rlmiF.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-DF-UATX8.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-Dco4IBR8.js";import"./LinearProgress-CnumdrYr.js";import"./SkeletonCard-D8xBk661.js";import"./Grid-C9tx9Mtn.js";import"./isMuiElement-DZytaqmN.js";import"./NotificationCenter.provider-u8BAQXhU.js";import"./Grow-NGX5tjGB.js";import"./index-_RsBnxVX.js";import"./index-CNtkKQx-.js";import"./Paper-BHj2CCUq.js";import"./IconButton-5Zbhdaoz.js";import"./TableRow-D1q6PCjX.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],mr={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},i={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},n={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <TablePlaceholder />
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
        tabs
      }
    },
    children: <Box>
        <TabPanel index={0}>
          <Typography>Panel 1</Typography>
        </TabPanel>
        <TabPanel index={[1, 2]}>
          <Typography>Panel 2</Typography>
        </TabPanel>
        <TabPanel index={3}>
          <Typography>Panel 3</Typography>
        </TabPanel>
      </Box>
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fetching: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    error: {
      message: "There is no user with that id"
    },
    slotProps: {
      header: {
        breadcrumbs,
        actions
      }
    },
    children: <SkeletonGrid />
  }
}`,...m.parameters?.docs?.source}}};const lr=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{s as DataTable,m as Error,n as Fetching,i as Loading,o as Skeleton,a as Tabs,lr as __namedExportsOrder,mr as default};
