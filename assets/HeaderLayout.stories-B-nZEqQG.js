import{j as r}from"./iframe-CnbMuzLM.js";import{H as c}from"./HeaderLayout-DZnXfgOL.js";import{S as l}from"./SkeletonGrid-BgZHoWoS.js";import{b as u,a as h}from"./storybook-2XDygDoN.js";import{T as p}from"./TabPanel-wxrB7e5I.js";import{T as b}from"./TablePlaceholder-Ch98fUEV.js";import{B as g}from"./Box-Cw1nbHt1.js";import{T as d}from"./Typography-DvHYNeI8.js";import"./preload-helper-PPVm8Dsz.js";import"./Content-DG3-x0A5.js";import"./Container-DPgGd-ZF.js";import"./memoTheme-BsYj_Q0c.js";import"./styled-DypEcibl.js";import"./useThemeProps-XwFaLuaT.js";import"./Header-JYnfsuh-.js";import"./theme-B5MExplw.js";import"./useTheme-DnF_gfMc.js";import"./CircularProgress-CWaDErbR.js";import"./Button-CoExOmeN.js";import"./useSlotProps-Dem-hW5W.js";import"./useSlot-BROZ5lZE.js";import"./Link-wIRlWhck.js";import"./Tabs-Bqou-wTH.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-B6pRJD1J.js";import"./KeyboardArrowRight-BDh_I2_c.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-Cl-May9V.js";import"./LinearProgress-_sTBuRDF.js";import"./SkeletonCard-VubKLShH.js";import"./Grid-DxI5JUkv.js";import"./isMuiElement-IbqOvYYV.js";import"./NotificationCenter.provider-DZQuwpgl.js";import"./Grow-pF7fPETi.js";import"./index-D7nFk_1R.js";import"./index-XSIcV2pE.js";import"./Paper-Bjk2txYz.js";import"./IconButton-BPiEJA8y.js";import"./TableRow-CDl2sjag.js";const e=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],t=[{id:"new",text:"Add"}],x=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],or={title:"Layouts/HeaderLayout",component:c,decorators:[u,h],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},s={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(b,{})}},a={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t,tabs:x}},children:r.jsxs(g,{children:[r.jsx(p,{index:0,children:r.jsx(d,{children:"Panel 1"})}),r.jsx(p,{index:[1,2],children:r.jsx(d,{children:"Panel 2"})}),r.jsx(p,{index:3,children:r.jsx(d,{children:"Panel 3"})})]})}},n={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},i={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:e,actions:t}},children:r.jsx(l,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const sr=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{s as DataTable,m as Error,i as Fetching,n as Loading,o as Skeleton,a as Tabs,sr as __namedExportsOrder,or as default};
