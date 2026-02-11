import{j as e}from"./iframe-EZlCblT_.js";import{D as p}from"./drawer-6rVWaDk3.js";import{D as w}from"./drawer-app-bar-DpZD51KW.js";import{D as d}from"./drawer-content-CKxFBsRq.js";import{D as u}from"./drawer.provider-CkVWkOel.js";import{D}from"./drawer-main-DfQA87kX.js";const c=({children:t,navigation:n,title:i,slots:r,slotsProps:a,...o})=>{const s=r?.drawerAppBar??w,l=r?.drawer??p,m=r?.drawerContent??d;return e.jsxs(u,{...o,children:[e.jsx(s,{title:i,color:"inherit",...a?.drawerAppBar}),e.jsx(l,{...a?.drawer,children:e.jsx(m,{navigation:n,...a?.drawerContent})}),e.jsx(D,{children:t})]})};c.__docgenInfo={description:`DrawerLayout component provides a layout structure with a drawer and an app bar.
It allows customization of the drawer, app bar, and drawer content through slots and slot properties.`,methods:[],displayName:"DrawerLayout",props:{title:{required:!0,tsType:{name:"string"},description:"The title of the drawer layout."},navigation:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DrawerNavigationLink
| DrawerNavigationCollapsable
| DrawerNavigationHeader`,elements:[{name:"DrawerNavigationLink"},{name:"intersection",raw:`Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
> & {
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,elements:[{name:"Pick",elements:[{name:"DrawerNavigationLink"},{name:"union",raw:'"id" | "text" | "icon"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]}],raw:`Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
>`},{name:"signature",type:"object",raw:`{
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0}},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0}}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:"The navigation configuration for the drawer."},slots:{required:!1,tsType:{name:"DrawerLayoutSlots"},description:"Optional slots for custom rendering within the drawer layout."},slotsProps:{required:!1,tsType:{name:"DrawerLayoutSlotProps"},description:"Optional props for the slots."}},composes:["DrawerProviderProps"]};export{c as D};
