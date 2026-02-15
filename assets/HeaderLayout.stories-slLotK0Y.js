import{j as r}from"./iframe-D9_KR-Vm.js";import{H as c}from"./HeaderLayout-D5w8j6L5.js";import{S as l}from"./SkeletonGrid-CRqFah6u.js";import{d as u,a as h}from"./storybook-BiVruKJY.js";import{T as p}from"./TabPanel-BLhIG4jy.js";import{T as b}from"./TablePlaceholder-DDrkCvkU.js";import{B as g}from"./Box-Be92HNMn.js";import{T as d}from"./Typography-2wT6CWDx.js";import"./preload-helper-PPVm8Dsz.js";import"./Content-b9KuR10e.js";import"./Container-_nhoTIg8.js";import"./memoTheme-CqkFtSQ1.js";import"./styled-C5_L6O4r.js";import"./useThemeProps-DEraMp6x.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Header-CxWUEnfo.js";import"./theme-UCSEkitU.js";import"./useTheme-I0hne2ge.js";import"./CircularProgress-DXln3DRW.js";import"./createSimplePaletteValueFilter-6wxtO0wC.js";import"./Button-23wGEqNA.js";import"./useSlotProps-DH3MFQW8.js";import"./useSlot-i-Ylfmke.js";import"./Link-CGC-J-tz.js";import"./Tabs-DTe8DfAD.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-D-xHMI97.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-DRe4wDQz.js";import"./LinearProgress-C3vx2sUh.js";import"./SkeletonCard-D5zSRoKz.js";import"./Grid-DI8BF5to.js";import"./isMuiElement-DE1wNB7s.js";import"./NotificationCenter.provider-DmDmO-iN.js";import"./Grow-Cifmxdwe.js";import"./index-DC4ANDc3.js";import"./index-DJQ4Myga.js";import"./Paper-VO7GYAI2.js";import"./IconButton-B1MZngJm.js";import"./TableRow-CK08eSZT.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],nr={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},n={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},i={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{s as DataTable,m as Error,i as Fetching,n as Loading,o as Skeleton,a as Tabs,ir as __namedExportsOrder,nr as default};
