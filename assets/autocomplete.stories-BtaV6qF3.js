import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{w as oe}from"./storybook-DatfEc6m.js";import{T as ae}from"./text-field-Cr7kxn57.js";import{A as te}from"./Autocomplete-nWqZdYTL.js";import{f as ne}from"./chunk-TVFJBHBT-BUrEn1b-.js";import{u as se}from"./useTheme-CPdeOTZ4.js";import{B as ce}from"./Box-0-Tyqcm1.js";const x=h=>{const{label:f,loading:u,fetching:r,options:y,helperText:d,color:b,onChangeValue:X=()=>null,sx:Y,...Z}=h,ee=u||r;return m.jsx(te,{loading:ee,options:r?[]:y,onChange:(S,re)=>X(re),...Z,renderInput:S=>m.jsx(ae,{...S,label:f,fullWidth:!0,fetching:r,loading:u,hexColor:b,helperText:d}),sx:Y})};x.__docgenInfo={description:"Autocomplete component that wraps the MUI Autocomplete component with additional props.",methods:[],displayName:"Autocomplete",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the autocomplete input."},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text to display below the input."},color:{required:!1,tsType:{name:"string"},description:"Optional color for the autocomplete component."},fetching:{required:!1,tsType:{name:"boolean"},description:"If `true`, indicates that data is being fetched."},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Optional callback function that is called when the value changes."}},composes:["Omit"]};const le={title:"Components/Inputs/Autocomplete",component:x,decorators:[oe({width:300})],parameters:{layout:"centered"}},g=[...ne.definitions.vehicle.model],e={args:{label:"Car model",options:g}},o={args:{...e.args,helperText:"This is a helper text"}},a={args:{...e.args,loading:!0}},t={args:{...e.args,loading:!0,value:g[0]}},n={args:{...e.args,fetching:!0}},s={args:{...e.args,loading:!0,fetching:!0}},c={args:{...e.args,size:"small"}},l={args:{...e.args,size:"small",value:g[0],loading:!0}},i={args:{...e.args,size:"small",fetching:!0,value:g[0]}},p={render:({bgcolor:h,loading:f,fetching:u})=>{const{palette:r}=se(),d={primary:r.primary.main,secondary:r.secondary.main}[h],b=r.getContrastText(d);return m.jsx(ce,{bgcolor:d,padding:3,children:m.jsx(x,{label:"Car model",options:g,color:b,loading:f,fetching:u})})},args:{bgcolor:"secondary",loading:!0,fetching:!0}};var T,C,v;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    options
  }
}`,...(v=(C=e.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,A,B;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "This is a helper text"
  }
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var D,_,j;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var k,w,F;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    value: options[0]
  }
}`,...(F=(w=t.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var L,O,W;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...(W=(O=n.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var q,I,P;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    fetching: true
  }
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var V,E,H;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,R,$;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    value: options[0],
    loading: true
  }
}`,...($=(R=l.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var N,U,G;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    fetching: true,
    value: options[0]
  }
}`,...(G=(U=i.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ie=["Default","HelperText","Loading","LoadingWithValue","Fetching","LoadingAndFetching","SizeSmall","SizeSmallLoading","SizeSmallFetching","WithBackground"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fetching:n,HelperText:o,Loading:a,LoadingAndFetching:s,LoadingWithValue:t,SizeSmall:c,SizeSmallFetching:i,SizeSmallLoading:l,WithBackground:p,__namedExportsOrder:ie,default:le},Symbol.toStringTag,{value:"Module"}));export{x as A,e as D,be as a};
