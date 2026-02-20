import{j as r}from"./iframe-Bf5-ajDf.js";import{H as c}from"./HeaderLayout-B3xfPWCa.js";import{S as l}from"./SkeletonGrid-C-WVMC5n.js";import{b as u,a as h}from"./storybook-DuV2iONK.js";import{T as p}from"./TabPanel-8_SGL5pa.js";import{T as b}from"./TablePlaceholder-Cbplzoze.js";import{B as g}from"./Box-Dh__eHRG.js";import{T as d}from"./Typography-CAHfUSwG.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-BTC8lzaD.js";import"./memoTheme-rYOwdVL2.js";import"./Content-DDJGAynN.js";import"./Container-HJW5YxB0.js";import"./styled-C763vnku.js";import"./useThemeProps-BjHCCwio.js";import"./Header-C4YjxEHJ.js";import"./theme-CNz4RbzJ.js";import"./useTheme-BkpYa0dr.js";import"./CircularProgress-CAtrJVii.js";import"./Button-n-T55MPp.js";import"./ButtonBase-DOY-mQq5.js";import"./useSlotProps-DGtWjtOa.js";import"./useSlot-CEvqNXnJ.js";import"./Link-7DJSvBYe.js";import"./Tabs-GJ1QQX60.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BqUriyN6.js";import"./KeyboardArrowRight-DwfQm3pS.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-CyyNnWmn.js";import"./LinearProgress-DzWRfmRK.js";import"./SkeletonCard-DgCV6KYh.js";import"./Grid-GUPTDLQQ.js";import"./isMuiElement-D6WuoLET.js";import"./NotificationCenter.provider-C1YuFE5z.js";import"./Grow-CgZOrNOu.js";import"./index-VU6iQnRk.js";import"./index-BTGEyl45.js";import"./Paper--4xR-YH7.js";import"./IconButton-CT7WGyXl.js";import"./TableRow-D8PQWvQ9.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ar={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},n={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},i={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const nr=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{s as DataTable,m as Error,i as Fetching,n as Loading,o as Skeleton,a as Tabs,nr as __namedExportsOrder,ar as default};
