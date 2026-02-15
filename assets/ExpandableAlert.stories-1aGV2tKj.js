import{j as e,r as u}from"./iframe-D9_KR-Vm.js";import{w as T}from"./storybook-BiVruKJY.js";import{C as E}from"./Close-Dc_IoJrS.js";import{c as L,T as c}from"./Typography-2wT6CWDx.js";import{E as w}from"./ExpandMore-RAx-jHmk.js";import{B as R}from"./Board-COuu-Eiv.js";import{A as _,a as k,b as B,S as D}from"./NotificationCenter.provider-DmDmO-iN.js";import{B as h}from"./Box-Be92HNMn.js";import{C as I}from"./Collapse-D4dnzegL.js";import{I as x}from"./IconButton-B1MZngJm.js";import{B as q}from"./Button-23wGEqNA.js";const M=L(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),N={[`& .${B.message}`]:{width:1}},m=u.forwardRef(({severity:p,iconMapping:l,title:g,message:b,metadata:d,metadataComponent:v,onClose:f,sx:C={}},S)=>{const[y,j]=u.useState(!1);return e.jsx(_,{ref:S,severity:p,iconMapping:l,onClose:f,action:e.jsxs(h,{display:"flex",flexDirection:"column",children:[e.jsx(x,{color:"inherit",onClick:f,children:e.jsx(E,{fontSize:"small"})}),d&&e.jsx(x,{color:"inherit",onClick:()=>j(A=>!A),children:y?e.jsx(M,{fontSize:"small"}):e.jsx(w,{fontSize:"small"})})]}),sx:{...N,...C},children:e.jsxs(h,{sx:{w:1},children:[g&&e.jsx(k,{children:g}),b,d&&e.jsx(I,{in:y,sx:{mt:2},children:e.jsx(R,{content:d,children:v})})]})})});m.displayName="ExpandableAlert";m.__docgenInfo={description:"Alert component with expandable metadata section",methods:[],displayName:"ExpandableAlert",props:{severity:{required:!0,tsType:{name:"AlertColor"},description:"Alert severity level"},iconMapping:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"AlertColor"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<AlertColor, React.ReactNode>"}],raw:"Partial<Record<AlertColor, React.ReactNode>>"},description:"Custom icon mapping for different severity levels"},title:{required:!1,tsType:{name:"string"},description:"Alert title"},message:{required:!0,tsType:{name:"string"},description:"Alert message content"},metadata:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Additional metadata to display in expandable section"},metadataComponent:{required:!1,tsType:{name:"ReactElement"},description:"Custom component to render in expandable section"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is closed"},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"Custom styles",defaultValue:{value:"{}",computed:!1}}}};const O={title:"Alerts/ExpandableAlert",component:m,decorators:[T({width:500})],parameters:{layout:"centered"}},r={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},s={args:{...r.args,severity:"success"}},o={args:{...r.args,severity:"error"}},n={args:{...r.args,severity:"warning"}},i={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},a=()=>e.jsx(m,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"h6",children:"lorem: ipsum"}),e.jsx(c,{variant:"caption",children:"foo: bar"}),e.jsx(c,{variant:"body2",sx:{textDecoration:"line-through"},children:"header: this"}),e.jsx(c,{variant:"body2",fontWeight:700,children:"host: localhost"})]})}),t=()=>{const[p,l]=u.useState(!1);return e.jsxs(h,{children:[e.jsx(q,{variant:"contained",onClick:()=>l(!0),children:"Snackbar"}),e.jsx(D,{open:p,children:e.jsx(m,{severity:"info",onClose:()=>l(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};t.__docgenInfo={description:"",methods:[],displayName:"SnackbarAlert"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    severity: "success"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      </>} />`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Snackbar
      </Button>
      <Snackbar open={open}>
        <ExpandableAlert severity="info" onClose={() => setOpen(false)} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} />
      </Snackbar>
    </Box>;
}`,...t.parameters?.docs?.source}}};const W=["Default","Success","Error","Warning","WihtoutMetadata","MetadataCustomComponent","SnackbarAlert"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:o,MetadataCustomComponent:a,SnackbarAlert:t,Success:s,Warning:n,WihtoutMetadata:i,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{r as D,m as E,X as a};
