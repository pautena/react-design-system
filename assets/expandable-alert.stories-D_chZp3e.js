import{j as e,r as u}from"./iframe-BupHDtd1.js";import{c as A}from"./storybook-Br2qlmUO.js";import{C as L}from"./Close-BaYMS0Mx.js";import{c as E,T as l}from"./Typography-BHekySi3.js";import{E as w}from"./ExpandMore-CFgwD6fU.js";import{B as R}from"./board-bfQEhApK.js";import{A as _,a as k,b as B,S as D}from"./notification-center.provider-D6bLtnLQ.js";import{B as h}from"./Box-BZzEFwUz.js";import{C as I}from"./Collapse-2mJ45f5n.js";import{I as y}from"./IconButton-CYN55AKW.js";import{B as q}from"./Button-orM3su5N.js";const M=E(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),N={[`& .${B.message}`]:{width:1}},c=u.forwardRef(({severity:p,iconMapping:m,title:g,message:b,metadata:d,metadataComponent:v,onClose:f,sx:S={}},C)=>{const[x,j]=u.useState(!1);return e.jsx(_,{ref:C,severity:p,iconMapping:m,onClose:f,action:e.jsxs(h,{display:"flex",flexDirection:"column",children:[e.jsx(y,{color:"inherit",onClick:f,children:e.jsx(L,{fontSize:"small"})}),d&&e.jsx(y,{color:"inherit",onClick:()=>j(T=>!T),children:x?e.jsx(M,{fontSize:"small"}):e.jsx(w,{fontSize:"small"})})]}),sx:{...N,...S},children:e.jsxs(h,{sx:{w:1},children:[g&&e.jsx(k,{children:g}),b,d&&e.jsx(I,{in:x,sx:{mt:2},children:e.jsx(R,{content:d,children:v})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"ExpandableAlert",props:{severity:{required:!0,tsType:{name:"AlertColor"},description:""},iconMapping:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"AlertColor"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<AlertColor, React.ReactNode>"}],raw:"Partial<Record<AlertColor, React.ReactNode>>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},metadata:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},metadataComponent:{required:!1,tsType:{name:"ReactElement"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const O={title:"Components/Alerts/ExpandableAlert",component:c,decorators:[A({width:500})],parameters:{layout:"centered"}},r={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},t={args:{...r.args,severity:"success"}},o={args:{...r.args,severity:"error"}},n={args:{...r.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},a=()=>e.jsx(c,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h6",children:"lorem: ipsum"}),e.jsx(l,{variant:"caption",children:"foo: bar"}),e.jsx(l,{variant:"body2",sx:{textDecoration:"line-through"},children:"header: this"}),e.jsx(l,{variant:"body2",fontWeight:700,children:"host: localhost"})]})}),s=()=>{const[p,m]=u.useState(!1);return e.jsxs(h,{children:[e.jsx(q,{variant:"contained",onClick:()=>m(!0),children:"Snackbar"}),e.jsx(D,{open:p,children:e.jsx(c,{severity:"info",onClose:()=>m(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};s.__docgenInfo={description:"",methods:[],displayName:"SnackbarAlert"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "success"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "error"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "warning"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <ExpandableAlert severity="info" onClose={() => null} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} metadataComponent={<>
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
      </>} />`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Snackbar
      </Button>
      <Snackbar open={open}>
        <ExpandableAlert severity="info" onClose={() => setOpen(false)} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} />
      </Snackbar>
    </Box>;
}`,...s.parameters?.docs?.source}}};const W=["Default","Success","Error","Warning","WihtoutMetadata","MetadataCustomComponent","SnackbarAlert"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:o,MetadataCustomComponent:a,SnackbarAlert:s,Success:t,Warning:n,WihtoutMetadata:i,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{r as D,c as E,X as e};
