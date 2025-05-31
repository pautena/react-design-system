import{c as N}from"./storybook-CDs3mFlN.js";import{s as m,j as c}from"./iframe-CyC2w49y.js";import{u as R}from"./useTheme-Ds7l_2HV.js";import{P as V}from"./Paper-VpekSNGd.js";import{L as $}from"./Link-BC0khnHZ.js";import{T as u}from"./Typography-CyoT5iG8.js";const W=({variant:d="primary",title:I,message:O,href:B,linkText:l,sx:z})=>{const{palette:n}=R(),M={p:3,display:"flex",flexDirection:"column",textDecoration:"none",backgroundColor:n.mode==="light"?m[50]:m[900],borderColor:m[400],":hover":{borderColor:n[d].main,backgroundColor:n.mode==="light"?n.common.white:m[800]}};return c.jsxs(V,{component:$,href:B,variant:"outlined",sx:{...M,...z},children:[c.jsx(u,{variant:"h6",children:I}),c.jsx(u,{variant:"caption",sx:{mt:2},children:O}),l&&c.jsx(u,{color:d,variant:"button",sx:{mt:2},children:l})]})};W.__docgenInfo={description:"",methods:[],displayName:"LinkCard",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "info"
| "warning"
| "error"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};const A={title:"Components/Data Display/LinkCard",component:W,decorators:[N({width:400})],parameters:{layout:"centered"}},e={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",linkText:"Learn more",variant:"primary"}},r={args:{...e.args}},a={args:{...e.args,variant:"secondary"}},o={args:{...e.args,variant:"info"}},s={args:{...e.args,variant:"warning"}},t={args:{...e.args,variant:"error"}},i={args:{title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}};var p,g,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkText: "Learn more",
    variant: "primary"
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var q,h,L;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "secondary"
  }
}`,...(L=(h=a.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var b,S,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "info"
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,D,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "warning"
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var _,w,j;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "error"
  }
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,E,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...(U=(E=i.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const F=["Default","Primary","Secondary","Info","Warning","Error","WithoutLinkButton"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:t,Info:o,Primary:r,Secondary:a,Warning:s,WithoutLinkButton:i,__namedExportsOrder:F,default:A},Symbol.toStringTag,{value:"Module"}));export{e as D,W as L,Y as l};
