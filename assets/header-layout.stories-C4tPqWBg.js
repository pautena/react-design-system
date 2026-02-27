import{j as e}from"./iframe-VMkoG4ZL.js";import{S as c}from"./skeleton-grid-B9AJZb4A.js";import{c as b,w as x}from"./storybook-BmI9ftC1.js";import{T as p}from"./TabPanel-C0q_oayt.js";import{T as P,a as g,b as T,c as u,d as r,e as j}from"./TableRow-C2jLXwo6.js";import{P as L}from"./NotificationCenter.provider-Csm6e6JQ.js";import{H as D}from"./header-layout-CeTFyIZA.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-card-ByrJ5o8E.js";import"./utils-n6qbTURJ.js";import"./sidebar-DueH6Hjh.js";import"./index-Bo7bF0-3.js";import"./button-BA4CVbS1.js";import"./useRenderElement-CHfU-5zq.js";import"./DirectionContext-DiP8kbVn.js";import"./index-6A0628O0.js";import"./index-BgY_nV53.js";import"./x-Df1iV-Zj.js";import"./createLucideIcon-BzgSrC6K.js";import"./index-B3Z8Ou6R.js";import"./useRender-CNg8ByML.js";import"./header-CUdmAuUs.js";import"./breadcrumbs-DPraqRU-.js";import"./chevron-right-_FJ8-VjX.js";import"./button-ALmkiOjl.js";import"./useCompositeItem-BbSW4yu8.js";import"./loader-circle-6kQ3EHgc.js";import"./Box-JY1TTY9I.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./content-B82fcULD.js";import"./placeholder-BTzbbEAA.js";const S=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],h=()=>e.jsx(P,{component:L,elevation:0,children:e.jsxs(g,{size:"small",children:[e.jsx(T,{children:e.jsxs(u,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Date"})]})}),e.jsx(j,{children:S.map(a=>e.jsxs(u,{children:[e.jsx(r,{children:a.id}),e.jsx(r,{children:a.name}),e.jsx(r,{children:a.status}),e.jsx(r,{children:a.date})]},a.id))})]})});h.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const t=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],s=[{id:"new",text:"Add"}],f=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],te={title:"Layouts/HeaderLayout",component:D,decorators:[b,x],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},n={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(h,{})}},i={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s,tabs:f}},children:e.jsxs("div",{children:[e.jsx(p,{index:0,children:"Panel 1"}),e.jsx(p,{index:[1,2],children:"Panel 2"}),e.jsx(p,{index:3,children:"Panel 3"})]})}},l={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},m={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},d={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    children: <div>
        <TabPanel index={0}>Panel 1</TabPanel>
        <TabPanel index={[1, 2]}>Panel 2</TabPanel>
        <TabPanel index={3}>Panel 3</TabPanel>
      </div>
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
}`,...d.parameters?.docs?.source}}};const se=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{n as DataTable,d as Error,m as Fetching,l as Loading,o as Skeleton,i as Tabs,se as __namedExportsOrder,te as default};
