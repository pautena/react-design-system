import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{D as P}from"./drawer.provider-ILxWYOR7.js";import{D as z}from"./drawer-main-Bsg7cnW_.js";import{D as E}from"./drawer-app-bar-G7DSoApx.js";import{D as H}from"./drawer-content-DGIHq33G.js";import{D as O}from"./drawer-_7xZOAle.js";import{m as R}from"./drawer.mock-BxSlI5mW.js";import{C as F}from"./content-placeholder-BSqQlGqC.js";import"./index-CFahbR6w.js";import"./Link-BEjyz-MN.js";import"./identifier-ChVxdG4r.js";import"./useTheme-CfVHYLf1.js";import"./extendSxProp-C7aHAb1N.js";import"./memoTheme-kZCwlU27.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./Typography-BXSoh8s2.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./ChevronLeft-Bjo8ybzH.js";import"./Toolbar-DEGnW_CP.js";import"./IconButton-X2xkCwyW.js";import"./CircularProgress-5NeNm8J5.js";import"./Paper-0PE78at3.js";import"./List-BUK6or8F.js";import"./index-n2pnZwpZ.js";import"./useSlot-HZ3RMWsh.js";import"./resolveComponentProps-BnY4DdR-.js";import"./Popover-BrIlDozf.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DJIq4c2v.js";import"./debounce-Be36O1Ab.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Modal-QJZQr9Mv.js";import"./Portal-Bjszn9Vx.js";import"./Fade-WD5A-epX.js";import"./Divider-NmFzzByE.js";import"./dividerClasses-Ubv0-wcR.js";import"./ExpandMore-hrA47Iuw.js";import"./ListItemButton-s7Hrfl4M.js";import"./listItemButtonClasses-xNkeGjcb.js";import"./ListItemIcon-t8pKne7w.js";import"./listItemIconClasses-BJTJNZr2.js";import"./ListItemText-DQKH4TiD.js";import"./listItemTextClasses-Bv6UoQn1.js";import"./Collapse-HKIBMM8Y.js";import"./bullet-BuufoAw7.js";import"./Badge-DE9AcAnJ.js";import"./usePreviousProps-CkgkBOV5.js";import"./useSlotProps-BuS7XknB.js";import"./label-Buz4B1am.js";import"./Box-CLV6Ujku.js";import"./Avatar-CPXi-jm0.js";import"./drawer-subheader-pC3qJVL4.js";import"./ListSubheader-B46aD8Ud.js";import"./skeleton-grid-w6fKwav9.js";import"./arrays-DN8njEnP.js";import"./skeleton-card-DRnJEpvy.js";import"./Skeleton-DoE8ehbV.js";import"./Grid-CKxAJcKv.js";import"./Container-D3jbaP2i.js";import"./styled-CKN7woRo.js";import"./useThemeProps-B6n0nbSt.js";const d=({children:c,navigation:A,title:I,slots:r,slotsProps:e,...T})=>{const M=(r==null?void 0:r.drawerAppBar)??E,_=(r==null?void 0:r.drawer)??O,B=(r==null?void 0:r.drawerContent)??H;return a.jsxs(P,{...T,children:[a.jsx(M,{title:I,color:"inherit",...e==null?void 0:e.drawerAppBar}),a.jsx(_,{...e==null?void 0:e.drawer,children:a.jsx(B,{navigation:A,...e==null?void 0:e.drawerContent})}),a.jsx(z,{children:c})]})};d.__docgenInfo={description:"",methods:[],displayName:"DrawerLayout",props:{title:{required:!0,tsType:{name:"string"},description:""},navigation:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DrawerNavigationLink
| DrawerNavigationCollapsable
| DrawerNavigationHeader`,elements:[{name:"DrawerNavigationLink"},{name:"intersection",raw:`Pick<DrawerNavigationLink, "id" | "text" | "icon"> & {
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,elements:[{name:"Pick",elements:[{name:"DrawerNavigationLink"},{name:"union",raw:'"id" | "text" | "icon"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]}],raw:'Pick<DrawerNavigationLink, "id" | "text" | "icon">'},{name:"signature",type:"object",raw:`{
  kind: "collapsable";
  items: DrawerNavigationItem[];
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"collapsable"',required:!0}},{key:"items",value:{name:"Array",elements:[{name:"DrawerNavigationItem"}],raw:"DrawerNavigationItem[]",required:!0}}]}}]},{name:"DrawerNavigationHeader"}]}],raw:"DrawerNavigationItem[]"},description:""},slots:{required:!1,tsType:{name:"DrawerLayoutSlots"},description:""},slotsProps:{required:!1,tsType:{name:"DrawerLayoutSlotProps"},description:""}},composes:["DrawerProviderProps"]};const i={title:"Lorem ipsum",navigation:R},Zr={title:"Layouts/DrawerLayout",component:d,parameters:{layout:"fullscreen"},render:c=>a.jsx(d,{...c,children:a.jsx(F,{p:3})})},t={args:{...i,variant:"temporary"}},n={args:{...i,variant:"persistent"}},o={args:{...i,variant:"mini",clipped:!1}},m={args:{...i,variant:"mini"}},p={args:{...i,variant:"mini",size:"small"}},s={args:{...i,LinkComponent:"b"}};var u,l,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    variant: "temporary"
  }
}`,...(w=(l=t.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var g,v,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    variant: "persistent"
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var y,k,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    variant: "mini",
    clipped: false
  }
}`,...(L=(k=o.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,f,x;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    variant: "mini"
  }
}`,...(x=(f=m.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,b,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    variant: "mini",
    size: "small"
  }
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,h,q;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseProps,
    LinkComponent: "b"
  }
}`,...(q=(h=s.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const $r=["Temporary","Persistent","NoClipped","Mini","MiniSmall","CustomLinkComponent"];export{s as CustomLinkComponent,m as Mini,p as MiniSmall,o as NoClipped,n as Persistent,t as Temporary,$r as __namedExportsOrder,Zr as default};
