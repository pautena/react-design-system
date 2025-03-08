import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{w as oe}from"./storybook-BExNV_A2.js";import{T as ae}from"./text-field-BvJehHJ_.js";import{A as se}from"./Autocomplete-BICSKNgd.js";import{f as ne}from"./chunk-KRMY7ATX-ZvXBKWTq.js";import{u as te}from"./useTheme-CfVHYLf1.js";import{B as ce}from"./Box-CLV6Ujku.js";const S=h=>{const{label:f,loading:u,fetching:r,options:y,helperText:d,color:x,onChangeValue:X=()=>null,sx:Y,...Z}=h,ee=u||r;return m.jsx(se,{loading:ee,options:r?[]:y,onChange:(T,re)=>X(re),...Z,renderInput:T=>m.jsx(ae,{...T,label:f,fullWidth:!0,fetching:r,loading:u,hexColor:x,helperText:d}),sx:Y})};S.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{label:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},fetching:{required:!1,tsType:{name:"boolean"},description:""},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ie={title:"Components/Inputs/Autocomplete",component:S,decorators:[oe({width:300})],parameters:{layout:"centered"}},p=[...ne.definitions.vehicle.model],e={args:{label:"Car model",options:p}},o={args:{...e.args,helperText:"This is a helper text"}},a={args:{...e.args,loading:!0}},s={args:{...e.args,loading:!0,value:p[0]}},n={args:{...e.args,fetching:!0}},t={args:{...e.args,loading:!0,fetching:!0}},c={args:{...e.args,size:"small"}},i={args:{...e.args,size:"small",value:p[0],loading:!0}},l={args:{...e.args,size:"small",fetching:!0,value:p[0]}},g={render:({bgcolor:h,loading:f,fetching:u})=>{const{palette:r}=te(),d={primary:r.primary.main,secondary:r.secondary.main}[h],x=r.getContrastText(d);return m.jsx(ce,{bgcolor:d,padding:3,children:m.jsx(S,{label:"Car model",options:p,color:x,loading:f,fetching:u})})},args:{bgcolor:"secondary",loading:!0,fetching:!0}};var b,C,z;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Car model",
    options
  }
}`,...(z=(C=e.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var v,B,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: "This is a helper text"
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var _,A,j;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(j=(A=a.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var F,L,k;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    value: options[0]
  }
}`,...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,q,O;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fetching: true
  }
}`,...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var w,P,V;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    fetching: true
  }
}`,...(V=(P=t.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var I,E,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small"
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,$,M;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    value: options[0],
    loading: true
  }
}`,...(M=($=i.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var N,G,J;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    fetching: true,
    value: options[0]
  }
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const le=["Default","HelperText","Loading","LoadingWithValue","Fetching","LoadingAndFetching","SizeSmall","SizeSmallLoading","SizeSmallFetching","WithBackground"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Fetching:n,HelperText:o,Loading:a,LoadingAndFetching:t,LoadingWithValue:s,SizeSmall:c,SizeSmallFetching:l,SizeSmallLoading:i,WithBackground:g,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{S as A,e as D,xe as a};
