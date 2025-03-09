import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as G}from"./storybook-neFVUtWe.js";import{r as J}from"./index-CFahbR6w.js";import{C as K}from"./center-container-2MbGiHNz.js";import{s as Q}from"./memoTheme-DEu9pJpV.js";import{F as X,I as Y}from"./FormControl-BKE9HHDF.js";import{S as Z}from"./Select-CwadJp3l.js";import{C as ee}from"./CircularProgress-8aVj90tP.js";import{B as R}from"./Box-CohR-H6x.js";import{L as re}from"./LinearProgress-8-13sGHv.js";import{f as x}from"./chunk-LSEVNFON-G8OzWBoO.js";import{M as $}from"./MenuItem-BrMjTRR2.js";import{u as te}from"./useTheme-BLxwKqlM.js";const se={small:15,medium:20},y=({label:o,value:n,loading:r=!1,fetching:a=!1,size:h="medium",fullWidth:f=!1,color:t,children:l,onChange:N})=>{const b=J.useId(),H=S=>a?e.jsx(K,{centerVertical:!0,centerHorizontal:!0,children:e.jsx(ee,{color:"inherit",size:se[h]})}):r?e.jsxs(R,{display:"flex",flexDirection:"column",children:[S,e.jsx(re,{color:"inherit",sx:{position:"absolute",left:0,right:0,bottom:0}})]}):S,U=Q(X)(()=>t?{label:{color:t},".MuiOutlinedInput-notchedOutline":{borderColor:`${t} !important`},".MuiInputBase-root":{color:t},".MuiSelect-icon":{fill:t}}:{});return e.jsxs(U,{fullWidth:f,children:[e.jsx(Y,{id:b,children:o}),e.jsx(Z,{labelId:b,id:b,value:n,label:o,onChange:N,disabled:a,size:h,renderValue:H,children:l})]})};y.__docgenInfo={description:`A custom Select component that extends the functionality of the Material-UI Select component.
This component supports additional features such as loading and fetching states, custom colors, and full-width display.`,methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the select input."},value:{required:!0,tsType:{name:"T"},description:"The selected value."},loading:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a loading state.",defaultValue:{value:"false",computed:!1}},fetching:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a fetching state.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the select input.",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the select input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the select input takes up the full width of its container.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The child elements to be rendered within the select input."},onChange:{required:!1,tsType:{name:'SelectInputProps["onChange"]',raw:'SelectInputProps<T>["onChange"]'},description:"The callback function to handle changes to the select input."}}};const s={label:"Car model",value:x.vehicle.model(),size:"medium",fetching:!1,loading:!1,fullWidth:!0,options:[...x.definitions.vehicle.model]},oe=({options:o,...n})=>e.jsx(y,{...n,children:o.map(r=>e.jsx($,{value:r,children:r},r))}),ae={title:"Components/Inputs/Select",component:oe,decorators:[G({width:200})],parameters:{layout:"centered"}},i={args:{...s}},c={args:{...s,fullWidth:!1}},d={args:{...s}},u={args:{...s,loading:!0}},m={args:{...s,fetching:!0}},p={args:{...s,size:"small"}},g={render:({options:o,bgcolor:n,...r})=>{const{palette:a}=te(),f={primary:a.primary.main,secondary:a.secondary.main}[n],t=a.getContrastText(f);return e.jsx(R,{bgcolor:f,padding:3,children:e.jsx(y,{...r,color:t,children:o.map(l=>e.jsx($,{value:l,children:l},l))})})},args:{bgcolor:"secondary",...s}};var C,T,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var j,v,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fullWidth: false
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var W,k,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var _,q,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,P,w;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fetching: true
  }
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var F,L,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    size: "small"
  }
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var D,O,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ({
    options,
    bgcolor: bgcolorProp,
    ...rest
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
        <Select {...rest} color={selectColor}>
          {options.map(option => <MenuItem key={option} value={option}>
              {option}
            </MenuItem>)}
        </Select>
      </Box>;
  },
  args: {
    bgcolor: "secondary",
    ...baseArgs
  }
}`,...(E=(O=g.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ne=["Default","WithoutFullWidth","SelectLoaded","Loading","Fetching","SizeSmall","WithBackground"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fetching:m,Loading:u,SelectLoaded:d,SizeSmall:p,WithBackground:g,WithoutFullWidth:c,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{i as D,y as S,xe as s};
