import{j as r}from"./iframe-BSF_zI2e.js";import{H as c}from"./HeaderLayout-kOTZCi1T.js";import{S as l}from"./SkeletonGrid-D8p727xw.js";import{b as u,a as h}from"./storybook-CzW-fV4e.js";import{T as p}from"./TabPanel-nRaTcKMH.js";import{T as b}from"./TablePlaceholder-AFvcgTGB.js";import{B as g}from"./Box-CHcsadOg.js";import{T as d}from"./Typography-D0EjtIU6.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CWjcVlRY.js";import"./memoTheme-gZcicJog.js";import"./Content-sh2YJPqB.js";import"./Container-D_NSUzBx.js";import"./styled-BIFOFSEp.js";import"./useThemeProps-Kptf8z7g.js";import"./Header-CHhlaf8K.js";import"./theme-B3qZawDE.js";import"./useTheme-Bdii9Etj.js";import"./CircularProgress-Btce5Lb0.js";import"./Button-C1usO_3W.js";import"./ButtonBase-mZjpsr3J.js";import"./useSlotProps-BEMIFYyg.js";import"./useSlot-C2ujFzFD.js";import"./Link-Lii1GfvR.js";import"./Tabs-C5GFN5IT.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DzjkoKmE.js";import"./KeyboardArrowRight-DZwtj2lL.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-COmNjtQX.js";import"./LinearProgress-CIbHR-Iw.js";import"./SkeletonCard-CPA0qL0Y.js";import"./Grid-D41GmVQG.js";import"./isMuiElement-Bq0JcP6U.js";import"./NotificationCenter.provider-D2vjEJ8b.js";import"./Grow-DLP78off.js";import"./index-Dx7ZuBcJ.js";import"./index-Y6Tbe8Fy.js";import"./Paper-BvMysOCA.js";import"./IconButton-BCQOCuxl.js";import"./TableRow--z4yNJbA.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ar={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},n={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},i={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
