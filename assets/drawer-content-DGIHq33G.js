import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{u as t}from"./drawer.provider-ILxWYOR7.js";import{D as o}from"./drawer.mock-BxSlI5mW.js";import{u as s}from"./useTheme-CfVHYLf1.js";import{L as m}from"./List-BUK6or8F.js";const l=({navigation:r})=>{const{size:a}=t(),{spacing:e}=s();return i.jsx(m,{sx:{paddingTop:a==="small"?e(.5):void 0,paddingX:e(a==="small"?.5:1)},children:r.map(n=>i.jsx(o,{item:n},n.id))})};l.__docgenInfo={description:"Content to be shown inside a navigation",methods:[],displayName:"DrawerContent",props:{navigation:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DrawerNavigationLink
| DrawerNavigationCollapsable
| DrawerNavigationHeader`,elements:[{name:"DrawerNavigationLink"},{name:"intersection",raw:`Pick<DrawerNavigationLink, "id" | "text" | "icon"> & {
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,elements:[{name:"Pick",elements:[{name:"DrawerNavigationLink"},{name:"union",raw:'"id" | "text" | "icon"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]}],raw:'Pick<DrawerNavigationLink, "id" | "text" | "icon">'},{name:"signature",type:"object",raw:`{
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0}},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0}}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:"Object with the content that has to be rendered"}}};export{l as D};
