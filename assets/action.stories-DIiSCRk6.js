import{r as E,j as e}from"./iframe-B6ohfiup.js";import{c as P}from"./storybook-CKEMMUzk.js";import{C as B}from"./confirm-dialog-DZlVz0J6.js";import{u as A}from"./useTheme-DsWhHYnr.js";import{T as d}from"./Typography-DaaAGHYc.js";import{G as i}from"./Grid-Cb8DrkkP.js";import{B as O}from"./Button-B9lAKHiE.js";import{D as W}from"./DialogContentText-BtVAky3c.js";import{B as z}from"./Box-CXgehUqD.js";const I=(s=!1)=>{const[o,a]=E.useState(s);return{isOpen:o,open:()=>a(!0),close:()=>a(!1),setIsOpen:a}},T=({title:s,titleVariant:o="h4",variant:a="primary"})=>{const{palette:t}=A(),h={primary:void 0,error:"error",warning:t.warning.main,success:t.success.main};return e.jsx(d,{color:h[a],variant:o,pb:1,borderBottom:1,borderColor:"grey.300",children:s})};T.__docgenInfo={description:"",methods:[],displayName:"ActionHeader",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:"TypographyVariant"},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<TypographyVariant, "h4" | "h5" | "h6">'},description:"",defaultValue:{value:'"h4"',computed:!1}}}};const x=({variant:s="primary",title:o,titleVariant:a="h4",description:t,descriptionVariant:h="body2",buttonText:v,helperText:g,helperTextVariant:b="caption",confirmable:w,passphrase:C,confirmTitle:j="",confirmDescription:D="",onAction:f})=>{const{isOpen:q,open:S,close:y}=I(),V=()=>{w?S():f()},_=()=>{f(),y()};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,spacing:1,children:[e.jsx(i,{size:{xs:12},mb:2,children:e.jsx(T,{title:o,titleVariant:a})}),t&&e.jsx(i,{size:{xs:12},children:e.jsx(d,{variant:h,children:t})}),e.jsx(i,{size:{xs:12},mt:1,children:e.jsx(O,{color:s,variant:"contained",onClick:V,children:v})}),g&&e.jsx(i,{size:{xs:12},children:e.jsx(d,{variant:b,children:g})})]}),e.jsx(B,{open:q,title:j,passphrase:C,onCancel:y,onConfirm:_,children:e.jsx(W,{children:D})})]})};x.__docgenInfo={description:"Renders an action button with a text that explains what it does.",methods:[],displayName:"Action",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"The variant of the action.",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"The title of the action."},titleVariant:{required:!1,tsType:{name:"Extract",elements:[{name:'TypographyProps["variant"]',raw:'TypographyProps["variant"]'},{name:"union",raw:'"h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]}],raw:'Extract<TypographyProps["variant"], "h4" | "h5" | "h6">'},description:"The variant of the title.",defaultValue:{value:'"h4"',computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:"The description of the action."},descriptionVariant:{required:!1,tsType:{name:'TypographyProps["variant"]',raw:'TypographyProps["variant"]'},description:"The variant of the description.",defaultValue:{value:'"body2"',computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"The helper text for the action."},helperTextVariant:{required:!1,tsType:{name:'TypographyProps["variant"]',raw:'TypographyProps["variant"]'},description:"The variant of the helper text.",defaultValue:{value:'"caption"',computed:!1}},buttonText:{required:!0,tsType:{name:"string"},description:"The text for the action button."},confirmable:{required:!1,tsType:{name:"boolean"},description:"Indicates if the action requires confirmation."},confirmTitle:{required:!1,tsType:{name:"string"},description:"The title for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},confirmDescription:{required:!1,tsType:{name:"string"},description:"The description for the confirmation dialog.",defaultValue:{value:'""',computed:!1}},passphrase:{required:!1,tsType:{name:"string"},description:"The passphrase required to perform action."},onAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The callback function to be executed when the action is triggered."}}};const M={title:"Components/Inputs/Action",component:x,decorators:[P({padding:2})],parameters:{layout:"fullscreen"}},r={args:{title:"Change username",description:"Set your new username",buttonText:"Change username",helperText:"Min length 8"}},c={args:{title:"Change username",description:e.jsx(z,{children:e.jsxs(d,{children:["This is a test description",e.jsx(d,{fontWeight:"bold",children:"with bold text"})]})}),buttonText:"Change username",helperText:"Min length 8"}},l={args:{...r.args,variant:"error"}},p={args:{...r.args,variant:"warning"}},m={args:{...r.args,variant:"success"}},n={args:{...r.args,confirmable:!0,confirmTitle:"Username change",confirmDescription:"Do you want to change the username?"}},u={args:{...n.args,passphrase:"yes"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Change username",
    description: "Set your new username",
    buttonText: "Change username",
    helperText: "Min length 8"
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "error"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "warning"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "success"
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    confirmable: true,
    confirmTitle: "Username change",
    confirmDescription: "Do you want to change the username?"
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Confirmable.args,
    passphrase: "yes"
  }
}`,...u.parameters?.docs?.source}}};const R=["Default","CustomDescription","Error","Warning","Sucess","Confirmable","ConfirmableWithPassphrase"],L=Object.freeze(Object.defineProperty({__proto__:null,Confirmable:n,ConfirmableWithPassphrase:u,CustomDescription:c,Default:r,Error:l,Sucess:m,Warning:p,__namedExportsOrder:R,default:M},Symbol.toStringTag,{value:"Module"}));export{x as A,r as D,L as a};
