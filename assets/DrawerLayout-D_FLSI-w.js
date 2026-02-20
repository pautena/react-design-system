import{j as e}from"./iframe-BSF_zI2e.js";import{D as p}from"./Drawer-JwcEQ5HT.js";import{D as d}from"./DrawerAppBar-CpDP5Tng.js";import{D as u}from"./DrawerContent-CYUOdJVa.js";import{D as w}from"./Drawer.provider-CKvOF0ry.js";import{D as c}from"./DrawerMain-BhwsceKx.js";function v({children:t,navigation:n,title:i,slots:a,slotsProps:r,...o}){const s=a?.drawerAppBar??d,l=a?.drawer??p,m=a?.drawerContent??u;return e.jsxs(w,{...o,children:[e.jsx(s,{title:i,color:"inherit",...r?.drawerAppBar}),e.jsx(l,{...r?.drawer,children:e.jsx(m,{navigation:n,...r?.drawerContent})}),e.jsx(c,{children:t})]})}v.__docgenInfo={description:`DrawerLayout component provides a layout structure with a drawer and an app bar.
It allows customization of the drawer, app bar, and drawer content through slots and slot properties.`,methods:[],displayName:"DrawerLayout",props:{initialState:{required:!1,tsType:{name:"union",raw:'"open" | "collapse" | "close"',elements:[{name:"literal",value:'"open"'},{name:"literal",value:'"collapse"'},{name:"literal",value:'"close"'}]},description:"Initial state of the drawer"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`Size of the drawer
@default "medium"`},clipped:{required:!1,tsType:{name:"boolean"},description:`Whether the drawer is clipped under the app bar
@default true`},drawerWidth:{required:!1,tsType:{name:"number"},description:"Width of the drawer in pixels"},variant:{required:!1,tsType:{name:"union",raw:'"temporary" | "mini" | "persistent"',elements:[{name:"literal",value:'"temporary"'},{name:"literal",value:'"mini"'},{name:"literal",value:'"persistent"'}]},description:`Variant of the drawer behavior
- temporary: slides over content, closes on backdrop click
- persistent: pushes content when open
- mini: shows icons only when collapsed
@default "temporary"`},selectedItemId:{required:!1,tsType:{name:"string"},description:"ID of the currently selected navigation item"},LinkComponent:{required:!1,tsType:{name:"ElementType"},description:"The component used to render a link when the `href` prop is provided.\n@default 'a'"},onStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newState: DrawerState) => void",signature:{arguments:[{type:{name:"union",raw:'"open" | "collapse" | "close"',elements:[{name:"literal",value:'"open"'},{name:"literal",value:'"collapse"'},{name:"literal",value:'"close"'}]},name:"newState"}],return:{name:"void"}}},description:`Callback fired when the drawer state changes
@param newState - The new drawer state`},title:{required:!0,tsType:{name:"string"},description:"The title of the drawer layout."},navigation:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DrawerNavigationLink
| DrawerNavigationCollapsable
| DrawerNavigationHeader`,elements:[{name:"DrawerNavigationLink"},{name:"intersection",raw:`Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
> & {
  /**
   * Item type discriminator
   */
  kind: "collapsable";
  /**
   * Nested navigation items
   */
  items: DrawerNavigationItem[];
}`,elements:[{name:"Pick",elements:[{name:"DrawerNavigationLink"},{name:"union",raw:'"id" | "text" | "icon"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]}],raw:`Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
>`},{name:"signature",type:"object",raw:`{
  /**
   * Item type discriminator
   */
  kind: "collapsable";
  /**
   * Nested navigation items
   */
  items: DrawerNavigationItem[];
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0},description:"Item type discriminator"},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0},description:"Nested navigation items"}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:"The navigation configuration for the drawer."},slots:{required:!1,tsType:{name:"DrawerLayoutSlots"},description:"Optional slots for custom rendering within the drawer layout."},slotsProps:{required:!1,tsType:{name:"DrawerLayoutSlotProps"},description:"Optional props for the slots."}},composes:["PropsWithChildren"]};export{v as D};
