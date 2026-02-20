import{j as r}from"./iframe-CP7Wc6pw.js";import{H as c}from"./HeaderLayout-DJM8C0W5.js";import{S as l}from"./SkeletonGrid-5xbewZFA.js";import{b as u,a as h}from"./storybook-1EOoAo-1.js";import{T as p}from"./TabPanel-BgbLSRyX.js";import{T as b}from"./TablePlaceholder-BpuCNJoo.js";import{B as g}from"./Box-BNYW9fHR.js";import{T as d}from"./Typography-D9aj5x0O.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-Dhag-SiT.js";import"./memoTheme-Y1W1LvfH.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Content-CkP5LZoY.js";import"./Container-oASjCXae.js";import"./styled-WPEz_9pV.js";import"./useThemeProps-BYROKmPG.js";import"./Header-Cqsw7Z2Y.js";import"./theme-C6Z7D9H_.js";import"./useTheme-CUXq88LR.js";import"./CircularProgress-DWrDzHkd.js";import"./createSimplePaletteValueFilter-m8gWY3yr.js";import"./Button-UaS2k6XY.js";import"./ButtonBase-DLelyPlg.js";import"./useSlotProps-D_HUKy9g.js";import"./useSlot-S2W5Go50.js";import"./Link-Di5_xR8u.js";import"./Tabs-BVos1y5m.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-C_YkvDq8.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-CbYBbF2Z.js";import"./LinearProgress-C48N91C0.js";import"./SkeletonCard-B5J-yD1d.js";import"./Grid-C_earOP1.js";import"./isMuiElement-NAUfHtuS.js";import"./NotificationCenter.provider-Dpi0SYme.js";import"./Grow-DKmJQIhj.js";import"./index-D--87nxG.js";import"./index-CV0XEDZf.js";import"./Paper-CnH1HhRt.js";import"./IconButton-D4ZGjbLn.js";import"./TableRow-BUCMaTt3.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],mr={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},i={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},n={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
