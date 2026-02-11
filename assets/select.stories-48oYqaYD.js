import{r as B,j as e}from"./iframe-EZlCblT_.js";import{f as x}from"./chunk-X5FFPT5Z-J2rk6w_l.js";import{c as M}from"./storybook-CoqJfa05.js";import{C as W}from"./center-container-BMDfd3F2.js";import{s as k}from"./memoTheme-CjfLGB6G.js";import{F as z,I as _}from"./OutlinedInput-BIU87u9h.js";import{S as q}from"./Select-DnjgMm-q.js";import{C as A}from"./CircularProgress-CWLujbj3.js";import{B as C}from"./Box-C0oK-ZD8.js";import{L as P}from"./LinearProgress-DNs32dSL.js";import{M as T}from"./MenuItem-BEYfrdDw.js";import{u as w}from"./useTheme-BkEo2tXZ.js";const F={small:15,medium:20},y=({label:o,value:n,loading:r=!1,fetching:a=!1,size:h="medium",fullWidth:f=!1,color:t,children:l,onChange:j})=>{const b=B.useId(),I=S=>a?e.jsx(W,{centerVertical:!0,centerHorizontal:!0,children:e.jsx(A,{color:"inherit",size:F[h]})}):r?e.jsxs(C,{display:"flex",flexDirection:"column",children:[S,e.jsx(P,{color:"inherit",sx:{position:"absolute",left:0,right:0,bottom:0}})]}):S,v=k(z)(()=>t?{label:{color:t},".MuiOutlinedInput-notchedOutline":{borderColor:`${t} !important`},".MuiInputBase-root":{color:t},".MuiSelect-icon":{fill:t}}:{});return e.jsxs(v,{fullWidth:f,children:[e.jsx(_,{id:b,children:o}),e.jsx(q,{labelId:b,id:b,value:n,label:o,onChange:j,disabled:a,size:h,renderValue:I,children:l})]})};y.__docgenInfo={description:`A custom Select component that extends the functionality of the Material-UI Select component.
This component supports additional features such as loading and fetching states, custom colors, and full-width display.`,methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the select input."},value:{required:!0,tsType:{name:"T"},description:"The selected value."},loading:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a loading state.",defaultValue:{value:"false",computed:!1}},fetching:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a fetching state.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the select input.",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the select input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the select input takes up the full width of its container.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The child elements to be rendered within the select input."},onChange:{required:!1,tsType:{name:'MuiSelectProps["onChange"]',raw:'MuiSelectProps<T>["onChange"]'},description:"The callback function to handle changes to the select input."}}};const s={label:"Car model",value:x.vehicle.model(),size:"medium",fetching:!1,loading:!1,fullWidth:!0,options:[...x.definitions.vehicle.model]},L=({options:o,...n})=>e.jsx(y,{...n,children:o.map(r=>e.jsx(T,{value:r,children:r},r))}),V={title:"Components/Inputs/Select",component:L,decorators:[M({width:200})],parameters:{layout:"centered"}},i={args:{...s}},c={args:{...s,fullWidth:!1}},d={args:{...s}},u={args:{...s,loading:!0}},m={args:{...s,fetching:!0}},p={args:{...s,size:"small"}},g={render:({options:o,bgcolor:n,...r})=>{const{palette:a}=w(),f={primary:a.primary.main,secondary:a.secondary.main}[n],t=a.getContrastText(f);return e.jsx(C,{bgcolor:f,padding:3,children:e.jsx(y,{...r,color:t,children:o.map(l=>e.jsx(T,{value:l,children:l},l))})})},args:{bgcolor:"secondary",...s}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fullWidth: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fetching: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    size: "small"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const D=["Default","WithoutFullWidth","SelectLoaded","Loading","Fetching","SizeSmall","WithBackground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fetching:m,Loading:u,SelectLoaded:d,SizeSmall:p,WithBackground:g,WithoutFullWidth:c,__namedExportsOrder:D,default:V},Symbol.toStringTag,{value:"Module"}));export{i as D,y as S,Y as s};
