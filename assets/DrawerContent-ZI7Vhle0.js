import{j as i}from"./iframe-D9_KR-Vm.js";import{u as r}from"./Drawer.provider-DltNFsLe.js";import{D as o}from"./DrawerItem-DxsQEosf.js";import{u as s}from"./useTheme-I0hne2ge.js";import{L as m}from"./List-Dqck4UQB.js";function l({navigation:t}){const{size:n}=r(),{spacing:e}=s();return i.jsx(m,{sx:{paddingTop:n==="small"?e(.5):void 0,paddingX:e(n==="small"?.5:1)},children:t.map(a=>i.jsx(o,{item:a},a.id))})}l.__docgenInfo={description:"Content to be shown inside a navigation",methods:[],displayName:"DrawerContent",props:{navigation:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DrawerNavigationLink
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0},description:"Item type discriminator"},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0},description:"Nested navigation items"}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:"Object with the content that has to be rendered"}}};export{l as D};
