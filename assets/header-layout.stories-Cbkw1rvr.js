import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as b}from"./skeleton-grid-BTOWiOJa.js";import{b as D}from"./storybook-Bq401jfZ.js";import{T as j,a as v,b as T,c as o,d as I,e as i}from"./table-CD0JDqz6.js";import{T as h}from"./tab-panel-BVhDBYqN.js";import{H as L}from"./header-layout-U_kRRaNE.js";import"./skeleton-card-Cs6Lha50.js";import"./utils-DDt1maD9.js";import"./iframe-BvMtHTNp.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-DvEgKYF6.js";import"./index-WIL9i1O2.js";import"./index-BnwzXdH2.js";import"./loader-circle-DX3r9wpe.js";import"./createLucideIcon-b2KNZfrT.js";import"./triangle-alert-n8kWsz47.js";import"./sidebar-DJjs4gpy.js";import"./index-CIF9E9WT.js";import"./button-Cs3s96rh.js";import"./useRenderElement-A5mMAjhN.js";import"./DirectionContext-BXkAloLx.js";import"./inertValue-DaHRill-.js";import"./x-DFJcBLed.js";import"./DialogTitle-Cy3WSPEe.js";import"./index-CYGSoTX1.js";import"./useRender-BN00Wl-0.js";import"./tab-provider.provider-Bx-H5ZmZ.js";import"./content-CMmzQxpa.js";import"./header-tdr29BsV.js";import"./breadcrumbs-udwpv0Pz.js";import"./chevron-right-zhB5Icul.js";import"./button-DtRrBNQM.js";import"./tabs-BBeDIdJm.js";import"./useCompositeListItem-BMU0Mj2W.js";import"./isElementDisabled-CwHw_lZC.js";import"./useCompositeItem-CPLuHSp0.js";import"./placeholder-CssebVmR.js";const S=[{id:1,name:"Item A",status:"Active",date:"2024-01-15"},{id:2,name:"Item B",status:"Pending",date:"2024-01-16"},{id:3,name:"Item C",status:"Active",date:"2024-01-17"}],g=()=>e.jsxs(j,{className:"border",children:[e.jsx(v,{children:e.jsxs(T,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Status"}),e.jsx(o,{children:"Date"})]})}),e.jsx(I,{children:S.map(a=>e.jsxs(T,{children:[e.jsx(i,{children:a.id}),e.jsx(i,{children:a.name}),e.jsx(i,{children:a.status}),e.jsx(i,{children:a.date})]},a.id))})]});g.__docgenInfo={description:"",methods:[],displayName:"TablePlaceholder"};const{expect:n,userEvent:x,within:k}=__STORYBOOK_MODULE_TEST__,r=[{id:"list",text:"Items",link:"/items"},{id:"item",text:"Item 1",link:"/items/1"}],s=[{id:"new",text:"Add"}],f=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",disabled:!0},{id:"tab3",label:"Tab 3"}],ue={title:"Layouts/HeaderLayout",component:L,decorators:[D],parameters:{layout:"fullscreen"}},l={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},c={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(g,{})}},m={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s,tabs:f,tabsMode:"panel"}},children:e.jsxs("div",{children:[e.jsx(h,{index:0,children:"Panel 1"}),e.jsx(h,{index:1,children:"Panel 2"}),e.jsx(h,{index:2,children:"Panel 3"})]})},play:async({canvasElement:a})=>{const t=k(a),P=t.getByRole("tab",{name:"Tab 1"}),y=t.getByRole("tab",{name:"Tab 2"}),B=t.getByRole("tab",{name:"Tab 3"});n(y).toHaveAttribute("aria-disabled","true"),n(t.getByText("Panel 1")).toBeInTheDocument(),n(t.queryByText("Panel 2")).not.toBeInTheDocument(),n(t.queryByText("Panel 3")).not.toBeInTheDocument(),await x.click(B),n(t.queryByText("Panel 1")).not.toBeInTheDocument(),n(t.getByText("Panel 3")).toBeInTheDocument(),await x.click(P),n(t.getByText("Panel 1")).toBeInTheDocument()}},d={args:{loading:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},p={args:{fetching:!0,title:"Lorem ipsum",subtitle:"Dolor sit amet",slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}},u={args:{title:"Lorem ipsum",subtitle:"Dolor sit amet",error:{message:"There is no user with that id"},slotProps:{header:{breadcrumbs:r,actions:s}},children:e.jsx(b,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
