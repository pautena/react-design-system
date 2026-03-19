import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as h}from"./tab-panel-BFuM-Zxj.js";import{S as b}from"./skeleton-grid-BTOWiOJa.js";import{b as D}from"./storybook-Dr9sP6fi.js";import{T as j,a as v,b as T,c as o,d as I,e as i}from"./table-CD0JDqz6.js";import{H as L}from"./header-layout-DudESJAU.js";import"./tab-provider.provider-BboZshuP.js";import"./iframe-C8GoqKMl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DDt1maD9.js";import"./skeleton-card-Cs6Lha50.js";import"./notification-center-provider-BkXpd-S-.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./loader-circle-BdDYgNFh.js";import"./createLucideIcon-zSeE5OCt.js";import"./triangle-alert-Cki19iAl.js";import"./sidebar-DAaa7t-4.js";import"./index-CIF9E9WT.js";import"./button-CqmGLEkD.js";import"./useRenderElement-B98N9jJg.js";import"./DirectionContext-qIuXBF4_.js";import"./inertValue-2mOOpLpY.js";import"./x-Dv0RtamN.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./useRender-D-Hu_BU4.js";import"./content-CMmzQxpa.js";import"./header-Joq5hCgx.js";import"./breadcrumbs-CmvWdDGR.js";import"./chevron-right-GArLkMBU.js";import"./button-C4FGKLek.js";import"./tabs-x3k-0TVY.js";import"./useCompositeListItem-BlA6mkGW.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-z1xUqsoL.js";import"./placeholder-CssebVmR.js";const S=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],g=()=>e.jsxs(j,{className:"border",children:[e.jsx(v,{children:e.jsxs(T,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Status"}),e.jsx(o,{children:"Date"})]})}),e.jsx(I,{children:S.map(a=>e.jsxs(T,{children:[e.jsx(i,{children:a.id}),e.jsx(i,{children:a.name}),e.jsx(i,{children:a.status}),e.jsx(i,{children:a.date})]},a.id))})]});g.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const{expect:n,userEvent:x,within:k}=__STORYBOOK_MODULE_TEST__,r=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],s=[{id:"new",text:"Add"}],f=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ue={title:"Layouts/HeaderLayout",component:L,decorators:[D],parameters:{layout:"fullscreen"}},l={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},c={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(g,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s,tabs:f,tabsMode:"panel"}},children:e.jsxs("div",{children:[e.jsx(h,{index:0,children:"Panel 1"}),e.jsx(h,{index:1,children:"Panel 2"}),e.jsx(h,{index:2,children:"Panel 3"})]})},play:async({canvasElement:a})=>{const t=k(a),P=t.getByRole("tab",{name:"Tab 1"}),y=t.getByRole("tab",{name:"Tab 2"}),B=t.getByRole("tab",{name:"Tab 3"});n(y).toHaveAttribute("aria-disabled","true"),n(t.getByText("Panel 1")).toBeInTheDocument(),n(t.queryByText("Panel 2")).not.toBeInTheDocument(),n(t.queryByText("Panel 3")).not.toBeInTheDocument(),await x.click(B),n(t.queryByText("Panel 1")).not.toBeInTheDocument(),n(t.getByText("Panel 3")).toBeInTheDocument(),await x.click(P),n(t.getByText("Panel 1")).toBeInTheDocument()}},d={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},p={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
        tabs,
        tabsMode: "panel"
      }
    },
    children: <div>
        <TabPanel index={0}>Panel 1</TabPanel>
        <TabPanel index={1}>Panel 2</TabPanel>
        <TabPanel index={2}>Panel 3</TabPanel>
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tab1 = canvas.getByRole("tab", {
      name: "Tab 1"
    });
    const tab2 = canvas.getByRole("tab", {
      name: "Tab 2"
    });
    const tab3 = canvas.getByRole("tab", {
      name: "Tab 3"
    });
    expect(tab2).toHaveAttribute("aria-disabled", "true");
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
    expect(canvas.queryByText("Panel 2")).not.toBeInTheDocument();
    expect(canvas.queryByText("Panel 3")).not.toBeInTheDocument();
    await userEvent.click(tab3);
    expect(canvas.queryByText("Panel 1")).not.toBeInTheDocument();
    expect(canvas.getByText("Panel 3")).toBeInTheDocument();
    await userEvent.click(tab1);
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const be=["Skeleton","DataTable","Tabs","Loading","Fetching","Error"];export{c as DataTable,u as Error,p as Fetching,d as Loading,l as Skeleton,m as Tabs,be as __namedExportsOrder,ue as default};
