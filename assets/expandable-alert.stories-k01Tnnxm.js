import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-MPVjHJeJ.js";import{w as H}from"./storybook-BhLlBB8C.js";import{C as J}from"./Close-9QyOEW-j.js";import{c as K,T as l}from"./ButtonBase-BNEyy1UI.js";import{E as Q}from"./ExpandMore-B4n_FelQ.js";import{B as U}from"./board-EZupFdtN.js";import{A as X,a as Y,b as Z,S as ee}from"./notification-center.provider-NRwxa4Yv.js";import{B as h}from"./Box-CzrcP6gm.js";import{C as re}from"./Collapse-DGpzub0N.js";import{I as y}from"./IconButton-poK4IEU9.js";import{B as ae}from"./Button-Dyh-ErXE.js";const se=K(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),te={[`& .${Z.message}`]:{width:1}},c=u.forwardRef(({severity:p,iconMapping:m,title:g,message:z,metadata:d,metadataComponent:P,onClose:f,sx:$={}},F)=>{const[x,V]=u.useState(!1);return e.jsx(X,{ref:F,severity:p,iconMapping:m,onClose:f,action:e.jsxs(h,{display:"flex",flexDirection:"column",children:[e.jsx(y,{color:"inherit",onClick:f,children:e.jsx(J,{fontSize:"small"})}),d&&e.jsx(y,{color:"inherit",onClick:()=>V(G=>!G),children:x?e.jsx(se,{fontSize:"small"}):e.jsx(Q,{fontSize:"small"})})]}),sx:{...te,...$},children:e.jsxs(h,{sx:{w:1},children:[g&&e.jsx(Y,{children:g}),z,d&&e.jsx(re,{in:x,sx:{mt:2},children:e.jsx(U,{content:d,children:P})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"ExpandableAlert",props:{severity:{required:!0,tsType:{name:"AlertColor"},description:""},iconMapping:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"AlertColor"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<AlertColor, React.ReactNode>"}],raw:"Partial<Record<AlertColor, React.ReactNode>>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},metadata:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},metadataComponent:{required:!1,tsType:{name:"ReactElement"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const oe={title:"Components/Alerts/ExpandableAlert",component:c,decorators:[H({width:500})],parameters:{layout:"centered"}},r={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},t={args:{...r.args,severity:"success"}},o={args:{...r.args,severity:"error"}},n={args:{...r.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},a=()=>e.jsx(c,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h6",children:"lorem: ipsum"}),e.jsx(l,{variant:"caption",children:"foo: bar"}),e.jsx(l,{variant:"body2",sx:{textDecoration:"line-through"},children:"header: this"}),e.jsx(l,{variant:"body2",fontWeight:700,children:"host: localhost"})]})}),s=()=>{const[p,m]=u.useState(!1);return e.jsxs(h,{children:[e.jsx(ae,{variant:"contained",onClick:()=>m(!0),children:"Snackbar"}),e.jsx(ee,{open:p,children:e.jsx(c,{severity:"info",onClose:()=>m(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};s.__docgenInfo={description:"",methods:[],displayName:"SnackbarAlert"};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,j,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "success"
  }
}`,...(T=(j=t.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var L,A,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "error"
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var w,R,_;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "warning"
  }
}`,...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,B,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet"
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,q,M;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => <ExpandableAlert severity="info" onClose={() => null} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} metadataComponent={<>
        <Typography variant="h6">lorem: ipsum</Typography>
        <Typography variant="caption">foo: bar</Typography>
        <Typography variant="body2" sx={{
    textDecoration: "line-through"
  }}>
          header: this
        </Typography>
        <Typography variant="body2" fontWeight={700}>
          host: localhost
        </Typography>
      </>} />`,...(M=(q=a.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var N,O,W;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Snackbar
      </Button>
      <Snackbar open={open}>
        <ExpandableAlert severity="info" onClose={() => setOpen(false)} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} />
      </Snackbar>
    </Box>;
}`,...(W=(O=s.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const ne=["Default","Success","Error","Warning","WihtoutMetadata","MetadataCustomComponent","SnackbarAlert"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:o,MetadataCustomComponent:a,SnackbarAlert:s,Success:t,Warning:n,WihtoutMetadata:i,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{r as D,c as E,be as e};
