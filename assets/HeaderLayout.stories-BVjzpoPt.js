import{j as r}from"./iframe-DsTVfloC.js";import{H as c}from"./HeaderLayout-dlSQqb11.js";import{S as l}from"./SkeletonGrid-zJl3CBoQ.js";import{b as u,a as h}from"./storybook-kh97f1Vy.js";import{T as p}from"./TabPanel-BKIMKHNR.js";import{T as b}from"./TablePlaceholder-Deg-5k-W.js";import{B as g}from"./Box-NA8e93Q6.js";import{T as d}from"./Typography-gDXReP41.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CnolC6q_.js";import"./memoTheme-BRt6PzmZ.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Content-BqMLTbNq.js";import"./Container-BIJwtr4K.js";import"./styled-yzy5UF35.js";import"./useThemeProps-BSyr1XhP.js";import"./Header-B2RnoAmx.js";import"./theme-C7NhwUud.js";import"./useTheme-CCKGC9oU.js";import"./CircularProgress-DLv6AHtv.js";import"./createSimplePaletteValueFilter-BJ-oStuy.js";import"./Button-CDhaqlqn.js";import"./ButtonBase-C6uyn3ST.js";import"./useSlotProps-DL1fv2eF.js";import"./useSlot-oLQ_jf4b.js";import"./Link-YDlKKOcJ.js";import"./Tabs-TInrrR_R.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./KeyboardArrowRight-iP1g__Et.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-D0j4aWXW.js";import"./LinearProgress-CHYfuoQT.js";import"./SkeletonCard-BJsiVoat.js";import"./Grid-CHWeI7dt.js";import"./isMuiElement-11riNvTT.js";import"./NotificationCenter.provider-Qn2b0MYJ.js";import"./Grow-C5Q0umzb.js";import"./index-DYPk2-7N.js";import"./index-CzFc1kR-.js";import"./Paper-BnI4yZC3.js";import"./IconButton-BPngOvgY.js";import"./TableRow-WanQrQXt.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],mr={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},i={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},n={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
