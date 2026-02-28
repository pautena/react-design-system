import{j as e}from"./iframe-pW5QL-bD.js";import{S as c}from"./skeleton-grid-C4qbwhQj.js";import{c as b,w as x}from"./storybook-Cgqq7mV2.js";import{T as p}from"./TabPanel-FdmKA3P7.js";import{T as P,a as g,b as T,c as u,d as r,e as j}from"./TableRow-DfcJCl21.js";import{P as L}from"./Paper-Bc1D1BeZ.js";import{H as D}from"./header-layout-CCMauXSV.js";import"./preload-helper-PPVm8Dsz.js";import"./skeleton-card-CsE5izHS.js";import"./utils-BUhL_YVU.js";import"./notification-center-provider-BXe9WKY8.js";import"./index-TlASSgMk.js";import"./index-DfVoCZUp.js";import"./loader-circle-CjX3rdDU.js";import"./createLucideIcon-FVDiqrjk.js";import"./triangle-alert-BtbPem2_.js";import"./sidebar-Dl8gHgQ3.js";import"./index-C7NSALCi.js";import"./button-D2Ijx_X0.js";import"./useRenderElement-CVdh77Wx.js";import"./DirectionContext-BxUIMOF1.js";import"./composite-cFlvVe3B.js";import"./x-DzjZg6q4.js";import"./DialogTitle-BmELqlVB.js";import"./index-CqolCm2N.js";import"./useRender-WM4sSGP3.js";import"./header-B5W8grLj.js";import"./breadcrumbs-kUz6jCcF.js";import"./chevron-right-B0-1CzWy.js";import"./button-BG0pz-9x.js";import"./useCompositeItem-DdT-xsSS.js";import"./Box-DsJTfv6x.js";import"./memoTheme-HUfg-dMU.js";import"./content-xMYH1AUC.js";import"./placeholder-D6j1futa.js";const S=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],h=()=>e.jsx(P,{component:L,elevation:0,children:e.jsxs(g,{size:"small",children:[e.jsx(T,{children:e.jsxs(u,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Date"})]})}),e.jsx(j,{children:S.map(a=>e.jsxs(u,{children:[e.jsx(r,{children:a.id}),e.jsx(r,{children:a.name}),e.jsx(r,{children:a.status}),e.jsx(r,{children:a.date})]},a.id))})]})});h.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const t=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],s=[{id:"new",text:"Add"}],f=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ne={title:"Layouts/HeaderLayout",component:D,decorators:[b,x],parameters:{layout:"fullscreen"}},o={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},n={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(h,{})}},i={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s,tabs:f}},children:e.jsxs("div",{children:[e.jsx(p,{index:0,children:"Panel 1"}),e.jsx(p,{index:[1,2],children:"Panel 2"}),e.jsx(p,{index:3,children:"Panel 3"})]})}},l={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},m={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}},d={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:t,actions:s}},children:e.jsx(c,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ie=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{n as DataTable,d as Error,m as Fetching,l as Loading,o as Skeleton,i as Tabs,ie as __namedExportsOrder,ne as default};
