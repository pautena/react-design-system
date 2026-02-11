import{j as m}from"./iframe-u8LB376j.js";import{f as B}from"./chunk-X5FFPT5Z-J2rk6w_l.js";import{c as D}from"./storybook-gYjJ4lHD.js";import{T as _}from"./text-field-DAxCb3kM.js";import{A as j}from"./Autocomplete-B9s7ImdE.js";import{u as k}from"./useTheme-DuCPUz7t.js";import{B as F}from"./Box-r6KuYIW2.js";const x=h=>{const{label:f,loading:u,fetching:r,options:y,helperText:d,color:b,onChangeValue:T=()=>null,sx:C,...v}=h,z=u||r;return m.jsx(j,{loading:z,options:r?[]:y,onChange:(S,A)=>T(A),...v,renderInput:S=>m.jsx(_,{...S,label:f,fullWidth:!0,fetching:r,loading:u,hexColor:b,helperText:d}),sx:C})};x.__docgenInfo={description:"Autocomplete component that wraps the MUI Autocomplete component with additional props.",methods:[],displayName:"Autocomplete",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the autocomplete input."},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text to display below the input."},color:{required:!1,tsType:{name:"string"},description:"Optional color for the autocomplete component."},fetching:{required:!1,tsType:{name:"boolean"},description:"If `true`, indicates that data is being fetched."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Optional callback function that is called when the value changes."}},composes:["Omit"]};const L={title:"Components/Inputs/Autocomplete",component:x,decorators:[D({width:300})],parameters:{layout:"centered"}},g=[...B.definitions.vehicle.model],e={args:{label:"Car model",options:g}},o={args:{...e.args,helperText:"This is a helper text"}},a={args:{...e.args,loading:!0}},t={args:{...e.args,loading:!0,value:g[0]}},n={args:{...e.args,fetching:!0}},s={args:{...e.args,loading:!0,fetching:!0}},c={args:{...e.args,size:"small"}},l={args:{...e.args,size:"small",value:g[0],loading:!0}},i={args:{...e.args,size:"small",fetching:!0,value:g[0]}},p={render:({bgcolor:h,loading:f,fetching:u})=>{const{palette:r}=k(),d={primary:r.primary.main,secondary:r.secondary.main}[h],b=r.getContrastText(d);return m.jsx(F,{bgcolor:d,padding:3,children:m.jsx(x,{label:"Car model",options:g,color:b,loading:f,fetching:u})})},args:{bgcolor:"secondary",loading:!0,fetching:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    options
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "This is a helper text"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    value: options[0]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    fetching: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    value: options[0],
    loading: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    fetching: true,
    value: options[0]
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    bgcolor: bgcolorProp,
    loading,
    fetching
  }: WithBackgroundProps) => {
    const {
      palette
    } = useTheme();
    const BackgroundColors: Record<"primary" | "secondary", string> = {
      primary: palette.primary.main,
      secondary: palette.secondary.main
    };
    const bgcolor = BackgroundColors[bgcolorProp];
    const selectColor = palette.getContrastText(bgcolor);
    return <Box bgcolor={bgcolor} padding={3}>
        <Autocomplete label="Car model" options={options} color={selectColor} loading={loading} fetching={fetching} />
      </Box>;
  },
  args: {
    bgcolor: "secondary",
    loading: true,
    fetching: true
  }
}`,...p.parameters?.docs?.source}}};const O=["Default","HelperText","Loading","LoadingWithValue","Fetching","LoadingAndFetching","SizeSmall","SizeSmallLoading","SizeSmallFetching","WithBackground"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fetching:n,HelperText:o,Loading:a,LoadingAndFetching:s,LoadingWithValue:t,SizeSmall:c,SizeSmallFetching:i,SizeSmallLoading:l,WithBackground:p,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{x as A,e as D,H as a};
