import{j as r}from"./iframe-DF1-CE8W.js";import{D as p}from"./drawer-DD4DiaGL.js";import{D as u}from"./drawer-app-bar-CXQ5Aoxw.js";import{D}from"./drawer-content-BJsk8eh5.js";import{D as c}from"./drawer.provider-ClJnxMp3.js";import{D as l}from"./drawer-main-C1CYiGwU.js";const v=({children:n,navigation:i,title:t,slots:e,slotsProps:a,...o})=>{const m=(e==null?void 0:e.drawerAppBar)??u,w=(e==null?void 0:e.drawer)??p,d=(e==null?void 0:e.drawerContent)??D;return r.jsxs(c,{...o,children:[r.jsx(m,{title:t,color:"inherit",...a==null?void 0:a.drawerAppBar}),r.jsx(w,{...a==null?void 0:a.drawer,children:r.jsx(d,{navigation:i,...a==null?void 0:a.drawerContent})}),r.jsx(l,{children:n})]})};v.__docgenInfo={description:`DrawerLayout component provides a layout structure with a drawer and an app bar.
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0}},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0}}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:"The navigation configuration for the drawer."},slots:{required:!1,tsType:{name:"DrawerLayoutSlots"},description:"Optional slots for custom rendering within the drawer layout."},slotsProps:{required:!1,tsType:{name:"DrawerLayoutSlotProps"},description:"Optional props for the slots."}},composes:["DrawerProviderProps"]};export{v as D};
