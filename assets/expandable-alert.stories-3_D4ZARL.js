import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CFahbR6w.js";import{E as H}from"./ExpandMore-hrA47Iuw.js";import{c as J,T as s}from"./Typography-BXSoh8s2.js";import{C as K}from"./Close-B1NBuOka.js";import{B as Q}from"./board-DKXJ9s7y.js";import{A as U,a as X}from"./Alert-CoN8pKaz.js";import{B as h}from"./Box-CLV6Ujku.js";import{A as Y,S as Z}from"./notification-center.provider-DGQlM2s5.js";import{C as ee}from"./Collapse-HKIBMM8Y.js";import{I as y}from"./IconButton-X2xkCwyW.js";import{w as re}from"./storybook-BExNV_A2.js";import{B as oe}from"./Button-C1N17xc9.js";import"./identifier-ChVxdG4r.js";import"./memoTheme-kZCwlU27.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./useTheme-CfVHYLf1.js";import"./Paper-0PE78at3.js";import"./Tooltip-BlCF73bJ.js";import"./index-n2pnZwpZ.js";import"./useSlot-HZ3RMWsh.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useControlled-cx3qaOIq.js";import"./CircularProgress-5NeNm8J5.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Popper-BhXwPKmp.js";import"./Portal-Bjszn9Vx.js";import"./useSlotProps-BuS7XknB.js";import"./Close-D7PaC3tu.js";import"./ClickAwayListener-CE8GBNsl.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";const te=J(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),ae={[`& .${X.message}`]:{width:1}},c=u.forwardRef(({severity:l,iconMapping:a,title:g,message:P,metadata:d,metadataComponent:D,onClose:f,sx:F={}},V)=>{const[x,$]=u.useState(!1);return e.jsx(U,{ref:V,severity:l,iconMapping:a,onClose:f,action:e.jsxs(h,{display:"flex",flexDirection:"column",children:[e.jsx(y,{color:"inherit",onClick:f,children:e.jsx(K,{fontSize:"small"})}),d&&e.jsx(y,{color:"inherit",onClick:()=>$(G=>!G),children:x?e.jsx(te,{fontSize:"small"}):e.jsx(H,{fontSize:"small"})})]}),sx:{...ae,...F},children:e.jsxs(h,{sx:{w:1},children:[g&&e.jsx(Y,{children:g}),P,d&&e.jsx(ee,{in:x,sx:{mt:2},children:e.jsx(Q,{content:d,children:D})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"ExpandableAlert",props:{severity:{required:!0,tsType:{name:"AlertColor"},description:""},iconMapping:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"AlertColor"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<AlertColor, React.ReactNode>"}],raw:"Partial<Record<AlertColor, React.ReactNode>>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},metadata:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},metadataComponent:{required:!1,tsType:{name:"ReactElement"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const Ve={title:"Components/Alerts/ExpandableAlert",component:c,decorators:[re({width:500})],parameters:{layout:"centered"}},r={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]}},n={args:{...r.args,severity:"success"}},i={args:{...r.args,severity:"error"}},m={args:{...r.args,severity:"warning"}},p={args:{severity:"info",title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet"}},o=()=>e.jsx(c,{severity:"info",onClose:()=>null,title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"],metadataComponent:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h6",children:"lorem: ipsum"}),e.jsx(s,{variant:"caption",children:"foo: bar"}),e.jsx(s,{variant:"body2",sx:{textDecoration:"line-through"},children:"header: this"}),e.jsx(s,{variant:"body2",fontWeight:700,children:"host: localhost"})]})}),t=()=>{const[l,a]=u.useState(!1);return e.jsxs(h,{children:[e.jsx(oe,{variant:"contained",onClick:()=>a(!0),children:"Snackbar"}),e.jsx(Z,{open:l,children:e.jsx(c,{severity:"info",onClose:()=>a(!1),title:"Lorem ipsum",message:"Lorem ipsum dolor sit amet",metadata:["lorem: ipsum","foo: bar","header: this","host: localhost"]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"MetadataCustomComponent"};t.__docgenInfo={description:"",methods:[],displayName:"SnackbarAlert"};var v,C,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,j,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Info.args,
    severity: "success"
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var L,A,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Info.args,
    severity: "error"
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var w,I,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Info.args,
    severity: "warning"
  }
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var k,B,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet"
  }
}`,...(_=(B=p.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,M,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`() => <ExpandableAlert severity="info" onClose={() => null} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} metadataComponent={<>
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
      </>} />`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var W,O,z;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Snackbar
      </Button>
      <Snackbar open={open}>
        <ExpandableAlert severity="info" onClose={() => setOpen(false)} title="Lorem ipsum" message="Lorem ipsum dolor sit amet" metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]} />
      </Snackbar>
    </Box>;
}`,...(z=(O=t.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const $e=["Info","Success","Error","Warning","WihtoutMetadata","MetadataCustomComponent","SnackbarAlert"];export{i as Error,r as Info,o as MetadataCustomComponent,t as SnackbarAlert,n as Success,m as Warning,p as WihtoutMetadata,$e as __namedExportsOrder,Ve as default};
