import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as i}from"./content-CMmzQxpa.js";import{D as n}from"./drawer-DkKwXb-m.js";import{m as s}from"./drawer.mock-C0lTPE5Y.js";import{D as m}from"./drawer-content-Kf7nEKXr.js";import{D as p,u as c}from"./drawer-provider-DPEmqV3f.js";import{D as d}from"./drawer-main-DNySfAsl.js";import{S as l}from"./skeleton-grid-BTOWiOJa.js";import{B as u}from"./button-CqmGLEkD.js";import"./utils-DDt1maD9.js";import"./sidebar-DAaa7t-4.js";import"./index-CIF9E9WT.js";import"./iframe-C8GoqKMl.js";import"./preload-helper-PPVm8Dsz.js";import"./DirectionContext-qIuXBF4_.js";import"./inertValue-2mOOpLpY.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./useRenderElement-B98N9jJg.js";import"./x-Dv0RtamN.js";import"./createLucideIcon-zSeE5OCt.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./useRender-D-Hu_BU4.js";import"./drawer-item-BwpLp1bd.js";import"./badge-DDqjPE2x.js";import"./badge-BzxXjtew.js";import"./bullet-DJEm3Fux.js";import"./collapsible-BsKSk76a.js";import"./useCollapsiblePanel-BkJUEMfL.js";import"./chevron-right-GArLkMBU.js";import"./useCompositeItem-z1xUqsoL.js";import"./useCompositeListItem-BlA6mkGW.js";import"./ToolbarRootContext-96uZHcHb.js";import"./chevron-down-BVoY5dIV.js";import"./drawer-subheader-ClqYLxFT.js";import"./trash-2-5uWscXtN.js";import"./skeleton-card-Cs6Lha50.js";function D(){const{state:o,switchState:a}=c();return r.jsx(u,{type:"button",variant:"outline",size:"sm",onClick:a,children:o==="open"?"Collapse drawer":"Expand drawer"})}const w=`import {
  Content,
  Drawer,
  DrawerContent,
  DrawerMain,
  DrawerProvider,
  SkeletonGrid,
  Button,
} from "@pautena/react-design-system";
import { useDrawer } from "@pautena/react-design-system";
import { mockDrawerNavigation } from "@pautena/react-design-system";

function DrawerToggleButton() {
  const { state, switchState } = useDrawer();
  return (
    <Button type="button" variant="outline" size="sm" onClick={switchState}>
      {state === "open" ? "Collapse drawer" : "Expand drawer"}
    </Button>
  );
}

function App() {
  return (
    <DrawerProvider initialState="open" selectedItemId="item2.3.2">
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerMain>
        <Content className="space-y-3 p-3">
          <DrawerToggleButton />
          <SkeletonGrid />
        </Content>
      </DrawerMain>
    </DrawerProvider>
  );
}`,rr={title:"Examples/Drawer demo",parameters:{layout:"fullscreen",docs:{source:{code:w}}},render:({initialState:o,selectedItemId:a})=>r.jsxs(p,{initialState:o,selectedItemId:a,children:[r.jsx(n,{children:r.jsx(m,{navigation:s})}),r.jsx(d,{children:r.jsxs(i,{className:"space-y-3 p-3",children:[r.jsx(D,{}),r.jsx(l,{})]})})]})},e={args:{initialState:"open",selectedItemId:"item2.3.2"}},t={args:{initialState:"close",selectedItemId:"item2.3.2"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: "open",
    selectedItemId: "item2.3.2"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: "close",
    selectedItemId: "item2.3.2"
  }
}`,...t.parameters?.docs?.source}}};const er=["OpenByDefault","ClosedByDefault"];export{t as ClosedByDefault,e as OpenByDefault,er as __namedExportsOrder,rr as default};
