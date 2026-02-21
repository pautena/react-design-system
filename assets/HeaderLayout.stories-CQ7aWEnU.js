import{j as e}from"./iframe-DoHxLgiQ.js";import{S as c}from"./skeleton-grid-D5HkrhlP.js";import{H as x}from"./HeaderLayout-BT-l8b8P.js";import{c as g,w as T}from"./storybook-DGVocXMz.js";import{T as p}from"./TabPanel-CIalf07x.js";import{T as P,a as j,b as y,c as h,d as r,e as L}from"./TableRow-DOHDh3Mz.js";import{P as D}from"./Paper-CAEioaFg.js";import{B as S}from"./Box-DeYITPa_.js";import{T as u}from"./Typography-CCBxMdr1.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-card-hhwuTUMO.js";import"./utils-ByKj-FM5.js";import"./Content-DrGL-eXI.js";import"./Container-BMQIEMVN.js";import"./styled-CxtL0g1W.js";import"./styled-CrWtcJlt.js";import"./useThemeProps-CnABTLmb.js";import"./Header-CL6zrPJT.js";import"./theme-Ddpn3V9g.js";import"./useTheme-ydX2sAJM.js";import"./CircularProgress-i2TneyIi.js";import"./Button-B2xgUCVd.js";import"./useSlotProps-UeKhi40w.js";import"./useSlot-DB0NX2DN.js";import"./Link-BmRGlT_Q.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-BkcPlWvC.js";import"./KeyboardArrowRight-xYBhAxFV.js";import"./getActiveElement-BQgAPKnO.js";import"./Placeholder-C0PwsQAK.js";import"./LinearProgress-BrREJ8ik.js";import"./NotificationCenter.provider-BPzvgZ7t.js";import"./Grow-MYIRJLP-.js";import"./index-Bo9E3z2s.js";import"./index-BpLgNbkB.js";import"./IconButton-B0-Pj2Aa.js";const f=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],b=()=>e.jsx(P,{component:D,elevation:0,children:e.jsxs(j,{size:"small",children:[e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Date"})]})}),e.jsx(L,{children:f.map(a=>e.jsxs(h,{children:[e.jsx(r,{children:a.id}),e.jsx(r,{children:a.name}),e.jsx(r,{children:a.status}),e.jsx(r,{children:a.date})]},a.id))})]})});b.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const t=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],s=[{id:"new",text:"Add"}],k=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],me={title:"Layouts/HeaderLayout",component:x,decorators:[g,T],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},n={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(b,{})}},i={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s,tabs:k}},children:e.jsxs(S,{children:[e.jsx(p,{index:0,children:e.jsx(u,{children:"Panel 1"})}),e.jsx(p,{index:[1,2],children:e.jsx(u,{children:"Panel 2"})}),e.jsx(p,{index:3,children:e.jsx(u,{children:"Panel 3"})})]})}},l={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},m={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},d={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const de=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{n as DataTable,d as Error,m as Fetching,l as Loading,o as Skeleton,i as Tabs,de as __namedExportsOrder,me as default};
