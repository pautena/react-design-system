import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as X}from"./useTheme-CPdeOTZ4.js";import{T as d}from"./Typography-CyG_osfu.js";import{C as Y}from"./confirm-dialog-Bck4seLn.js";import{r as Z}from"./index-MPVjHJeJ.js";import{G as o}from"./Grid-pZna8s08.js";import{B as ee}from"./Button-DIAwl1fo.js";import{D as re}from"./DialogContentText-3pBygd-q.js";import{w as ae}from"./storybook-DatfEc6m.js";import{B as te}from"./Box-0-Tyqcm1.js";const P=({title:s,titleVariant:i="h4",variant:a="primary"})=>{const{palette:t}=X(),h={primary:void 0,error:"error",warning:t.warning.main,success:t.success.main};return e.jsx(d,{color:h[a],variant:i,pb:1,borderBottom:1,borderColor:"grey.300",children:s})};P.__docgenInfo={description:"",methods:[],displayName:"ActionHeader",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:"Variant"},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<Variant, "h4" | "h5" | "h6">'},description:"",defaultValue:{value:'"h4"',computed:!1}}}};const ne=(s=!1)=>{const[i,a]=Z.useState(s);return{isOpen:i,open:()=>a(!0),close:()=>a(!1),setIsOpen:a}},G=({variant:s="primary",title:i,titleVariant:a="h4",description:t,descriptionVariant:h="body2",buttonText:H,helperText:g,helperTextVariant:N="caption",confirmable:U,passphrase:z,confirmTitle:F="",confirmDescription:$="",onAction:f})=>{const{isOpen:J,open:K,close:T}=ne(),L=()=>{U?K():f()},Q=()=>{f(),T()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{container:!0,spacing:1,children:[e.jsx(o,{item:!0,xs:12,mb:2,children:e.jsx(P,{title:i,titleVariant:a})}),t&&e.jsx(o,{item:!0,xs:12,children:e.jsx(d,{variant:h,children:t})}),e.jsx(o,{item:!0,xs:12,mt:1,children:e.jsx(ee,{color:s,variant:"contained",onClick:L,children:H})}),g&&e.jsx(o,{item:!0,xs:12,children:e.jsx(d,{variant:N,children:g})})]}),e.jsx(Y,{open:J,title:F,passphrase:z,onCancel:T,onConfirm:Q,children:e.jsx(re,{children:$})})]})};G.__docgenInfo={description:"Renders an action button with a text that explains what it does.",methods:[],displayName:"Action",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"The variant of the action.",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"The title of the action."},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:"Variant"},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<Variant, "h4" | "h5" | "h6">'},description:"The variant of the title.",defaultValue:{value:'"h4"',computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"The description of the action."},descriptionVariant:{required:!1,tsType:{name:"Variant"},description:"The variant of the description.",defaultValue:{value:'"body2"',computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"The helper text for the action."},helperTextVariant:{required:!1,tsType:{name:"Variant"},description:"The variant of the helper text.",defaultValue:{value:'"caption"',computed:!1}},buttonText:{required:!0,tsType:{name:"string"},description:"The text for the action button."},confirmable:{required:!1,tsType:{name:"boolean"},description:"Indicates if the action requires confirmation."},confirmTitle:{required:!1,tsType:{name:"string"},description:"The title for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},confirmDescription:{required:!1,tsType:{name:"string"},description:"The description for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},passphrase:{required:!1,tsType:{name:"string"},description:"The passphrase required to perform action."},onAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The callback function to be executed when the action is triggered."}}};const se={title:"Components/Inputs/Action",component:G,decorators:[ae({padding:2})],parameters:{layout:"fullscreen"}},r={args:{title:"Change username",description:"Set your new username",buttonText:"Change username",helperText:"Min length 8"}},c={args:{title:"Change username",description:e.jsx(te,{children:e.jsxs(d,{children:["This is a test description",e.jsx(d,{fontWeight:"bold",children:"with bold text"})]})}),buttonText:"Change username",helperText:"Min length 8"}},l={args:{...r.args,variant:"error"}},m={args:{...r.args,variant:"warning"}},u={args:{...r.args,variant:"success"}},n={args:{...r.args,confirmable:!0,confirmTitle:"Username change",confirmDescription:"Do you want to change the username?"}},p={args:{...n.args,passphrase:"yes"}};var x,y,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Change username",
    description: "Set your new username",
    buttonText: "Change username",
    helperText: "Min length 8"
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,w,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Change username",
    description: <Box>
        <Typography>
          This is a test description<Typography fontWeight="bold">with bold text</Typography>
        </Typography>
      </Box>,
    buttonText: "Change username",
    helperText: "Min length 8"
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,D,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "error"
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var V,S,_;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "warning"
  }
}`,...(_=(S=m.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var E,B,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "success"
  }
}`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,W,I;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmable: true,
    confirmTitle: "Username change",
    confirmDescription: "Do you want to change the username?"
  }
}`,...(I=(W=n.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var M,R,k;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Confirmable.args,
    passphrase: "yes"
  }
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const ie=["Default","CustomDescription","Error","Warning","Sucess","Confirmable","ConfirmableWithPassphrase"],Te=Object.freeze(Object.defineProperty({__proto__:null,Confirmable:n,ConfirmableWithPassphrase:p,CustomDescription:c,Default:r,Error:l,Sucess:u,Warning:m,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{G as A,r as D,Te as a};
