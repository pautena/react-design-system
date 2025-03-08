import{w as B}from"./storybook-BExNV_A2.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{u as N}from"./useTheme-CfVHYLf1.js";import{k as o}from"./identifier-ChVxdG4r.js";import{P as O}from"./Paper-0PE78at3.js";import{L as R}from"./Link-BEjyz-MN.js";import{T as p}from"./Typography-BXSoh8s2.js";import"./index-CFahbR6w.js";import"./notification-center.provider-DGQlM2s5.js";import"./resolveComponentProps-BnY4DdR-.js";import"./memoTheme-kZCwlU27.js";import"./useSlot-HZ3RMWsh.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./IconButton-X2xkCwyW.js";import"./CircularProgress-5NeNm8J5.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Box-CLV6Ujku.js";import"./extendSxProp-C7aHAb1N.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";import"./Button-C1N17xc9.js";const _=({variant:c="primary",title:D,message:E,href:U,linkText:d,sx:W})=>{const{palette:e}=N(),I={p:3,display:"flex",flexDirection:"column",textDecoration:"none",backgroundColor:e.mode==="light"?o[50]:o[900],borderColor:o[400],":hover":{borderColor:e[c].main,backgroundColor:e.mode==="light"?e.common.white:o[800]}};return a.jsxs(O,{component:R,href:U,variant:"outlined",sx:{...I,...W},children:[a.jsx(p,{variant:"h6",children:D}),a.jsx(p,{variant:"caption",sx:{mt:2},children:E}),d&&a.jsx(p,{color:c,variant:"button",sx:{mt:2},children:d})]})};_.__docgenInfo={description:"",methods:[],displayName:"LinkCard",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "info" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};const yr={title:"Components/Data Display/LinkCard",component:_,decorators:[B({width:400})],parameters:{layout:"centered"}},r={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",linkText:"Learn more",variant:"primary"}},i={args:{...r.args,variant:"secondary"}},t={args:{...r.args,variant:"info"}},n={args:{...r.args,variant:"warning"}},s={args:{...r.args,variant:"error"}},m={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}};var u,l,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkText: "Learn more",
    variant: "primary"
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,x,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,q,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "info"
  }
}`,...(h=(q=t.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var L,b,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "warning"
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var k,S,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "error"
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,P,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const xr=["Primary","Secondary","Info","Warning","Error","WithoutLinkButton"];export{s as Error,t as Info,r as Primary,i as Secondary,n as Warning,m as WithoutLinkButton,xr as __namedExportsOrder,yr as default};
