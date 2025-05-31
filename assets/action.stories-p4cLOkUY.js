import{r as X,j as e}from"./iframe-CyC2w49y.js";import{c as Y}from"./storybook-CDs3mFlN.js";import{C as Z}from"./confirm-dialog-CHkIVJuS.js";import{u as ee}from"./useTheme-Ds7l_2HV.js";import{T as d}from"./Typography-CyoT5iG8.js";import{G as o}from"./Grid-DcpqZmzV.js";import{B as re}from"./Button-BsHUy8NG.js";import{D as ae}from"./DialogContentText-CW4aAqrw.js";import{B as te}from"./Box-Bu5_Wahq.js";const ne=(s=!1)=>{const[i,a]=X.useState(s);return{isOpen:i,open:()=>a(!0),close:()=>a(!1),setIsOpen:a}},k=({title:s,titleVariant:i="h4",variant:a="primary"})=>{const{palette:t}=ee(),h={primary:void 0,error:"error",warning:t.warning.main,success:t.success.main};return e.jsx(d,{color:h[a],variant:i,pb:1,borderBottom:1,borderColor:"grey.300",children:s})};k.__docgenInfo={description:"",methods:[],displayName:"ActionHeader",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:"TypographyVariant"},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<TypographyVariant, "h4" | "h5" | "h6">'},description:"",defaultValue:{value:'"h4"',computed:!1}}}};const P=({variant:s="primary",title:i,titleVariant:a="h4",description:t,descriptionVariant:h="body2",buttonText:G,helperText:g,helperTextVariant:H="caption",confirmable:N,passphrase:U,confirmTitle:F="",confirmDescription:$="",onAction:f})=>{const{isOpen:J,open:K,close:y}=ne(),L=()=>{N?K():f()},Q=()=>{f(),y()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{container:!0,spacing:1,children:[e.jsx(o,{size:{xs:12},mb:2,children:e.jsx(k,{title:i,titleVariant:a})}),t&&e.jsx(o,{size:{xs:12},children:e.jsx(d,{variant:h,children:t})}),e.jsx(o,{size:{xs:12},mt:1,children:e.jsx(re,{color:s,variant:"contained",onClick:L,children:G})}),g&&e.jsx(o,{size:{xs:12},children:e.jsx(d,{variant:H,children:g})})]}),e.jsx(Z,{open:J,title:F,passphrase:U,onCancel:y,onConfirm:Q,children:e.jsx(ae,{children:$})})]})};P.__docgenInfo={description:"Renders an action button with a text that explains what it does.",methods:[],displayName:"Action",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"The variant of the action.",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"The title of the action."},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:"TypographyVariant"},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<TypographyVariant, "h4" | "h5" | "h6">'},description:"The variant of the title.",defaultValue:{value:'"h4"',computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"The description of the action."},descriptionVariant:{required:!1,tsType:{name:"TypographyVariant"},description:"The variant of the description.",defaultValue:{value:'"body2"',computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"The helper text for the action."},helperTextVariant:{required:!1,tsType:{name:"TypographyVariant"},description:"The variant of the helper text.",defaultValue:{value:'"caption"',computed:!1}},buttonText:{required:!0,tsType:{name:"string"},description:"The text for the action button."},confirmable:{required:!1,tsType:{name:"boolean"},description:"Indicates if the action requires confirmation."},confirmTitle:{required:!1,tsType:{name:"string"},description:"The title for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},confirmDescription:{required:!1,tsType:{name:"string"},description:"The description for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},passphrase:{required:!1,tsType:{name:"string"},description:"The passphrase required to perform action."},onAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The callback function to be executed when the action is triggered."}}};const se={title:"Components/Inputs/Action",component:P,decorators:[Y({padding:2})],parameters:{layout:"fullscreen"}},r={args:{title:"Change username",description:"Set your new username",buttonText:"Change username",helperText:"Min length 8"}},c={args:{title:"Change username",description:e.jsx(te,{children:e.jsxs(d,{children:["This is a test description",e.jsx(d,{fontWeight:"bold",children:"with bold text"})]})}),buttonText:"Change username",helperText:"Min length 8"}},l={args:{...r.args,variant:"error"}},p={args:{...r.args,variant:"warning"}},m={args:{...r.args,variant:"success"}},n={args:{...r.args,confirmable:!0,confirmTitle:"Username change",confirmDescription:"Do you want to change the username?"}},u={args:{...n.args,passphrase:"yes"}};var T,x,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Change username",
    description: "Set your new username",
    buttonText: "Change username",
    helperText: "Min length 8"
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,C,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Change username",
    description: <Box>
        <Typography>
          This is a test description
          <Typography fontWeight="bold">with bold text</Typography>
        </Typography>
      </Box>,
    buttonText: "Change username",
    helperText: "Min length 8"
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var j,D,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "error"
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var V,S,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "warning"
  }
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var E,B,A;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "success"
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,W,z;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmable: true,
    confirmTitle: "Username change",
    confirmDescription: "Do you want to change the username?"
  }
}`,...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var I,M,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Confirmable.args,
    passphrase: "yes"
  }
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ie=["Default","CustomDescription","Error","Warning","Sucess","Confirmable","ConfirmableWithPassphrase"],fe=Object.freeze(Object.defineProperty({__proto__:null,Confirmable:n,ConfirmableWithPassphrase:u,CustomDescription:c,Default:r,Error:l,Sucess:m,Warning:p,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{P as A,r as D,fe as a};
