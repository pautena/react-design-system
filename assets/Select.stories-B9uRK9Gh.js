import{r as O,j as n}from"./iframe-CP7Wc6pw.js";import{f as k}from"./chunk-MVUZLZE2-BVB7fs3M.js";import{w as L}from"./storybook-1EOoAo-1.js";import{F as z,I as _}from"./OutlinedInput-CT6tt9Xr.js";import{S as V}from"./Select-BnJVTRl_.js";import{B as x}from"./Box-BNYW9fHR.js";import{C as R}from"./CircularProgress-DWrDzHkd.js";import{L as D}from"./LinearProgress-C48N91C0.js";import{s as T}from"./memoTheme-Y1W1LvfH.js";import{u as $}from"./useTheme-CUXq88LR.js";import{M as v}from"./MenuItem-SX64BOWE.js";const E={small:15,medium:20};function S({label:o,value:a,loading:s=!1,fetching:t=!1,size:u="medium",fullWidth:e=!1,color:i,children:p,onChange:W,slots:c,slotProps:l}){const I=O.useId();c?.formControl??z;const B=c?.inputLabel??_,w=c?.select??V,j=c?.renderValueContainer??x,P=c?.loadingIndicator??R,q=c?.fetchingIndicator??D,A=M=>t?n.jsx(j,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:1,height:1,...l?.renderValueContainer,children:n.jsx(P,{color:"inherit",size:E[u],...l?.loadingIndicator})}):s?n.jsxs(j,{display:"flex",flexDirection:"column",...l?.renderValueContainer,children:[M,n.jsx(q,{color:"inherit",sx:{position:"absolute",left:0,right:0,bottom:0},...l?.fetchingIndicator})]}):M,F=T(z)(()=>i?{label:{color:i},".MuiOutlinedInput-notchedOutline":{borderColor:`${i} !important`},".MuiInputBase-root":{color:i},".MuiSelect-icon":{fill:i}}:{});return n.jsxs(F,{fullWidth:e,...l?.formControl,children:[n.jsx(B,{id:I,...l?.inputLabel,children:o}),n.jsx(w,{...l?.select,labelId:I,id:I,value:a,label:o,onChange:W,disabled:t,size:u,renderValue:A,children:p})]})}S.__docgenInfo={description:`A custom Select component that extends the functionality of the Material-UI Select component.
This component supports additional features such as loading and fetching states, custom colors, and full-width display.

Supports extensive customization through slots and slotProps.

@example
\`\`\`tsx
// Basic usage
<Select label="Country" value={country} onChange={handleChange}>
  <MenuItem value="us">United States</MenuItem>
  <MenuItem value="uk">United Kingdom</MenuItem>
</Select>

// With custom loading indicator
<Select
  label="Status"
  value={status}
  loading
  slotProps={{
    loadingIndicator: { size: 24 }
  }}
/>
\`\`\``,methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"The label for the select input."},value:{required:!0,tsType:{name:"T"},description:"The selected value."},loading:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a loading state.",defaultValue:{value:"false",computed:!1}},fetching:{required:!1,tsType:{name:"boolean"},description:"If true, the select input is in a fetching state.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"The size of the select input.",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the select input."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the select input takes up the full width of its container.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The child elements to be rendered within the select input."},onChange:{required:!1,tsType:{name:'MuiSelectProps["onChange"]',raw:'MuiSelectProps<T>["onChange"]'},description:"The callback function to handle changes to the select input."},slots:{required:!1,tsType:{name:"SelectSlots"},description:"Optional slots for custom rendering within the select"},slotProps:{required:!1,tsType:{name:"SelectSlotProps"},description:"Optional props for the slots"}}};const r={label:"Car model",value:k.vehicle.model(),size:"medium",fetching:!1,loading:!1,fullWidth:!0,options:[...k.definitions.vehicle.model]},U={title:"Inputs/Select",component:S,decorators:[L({width:200})],parameters:{layout:"centered"},args:{...r},render:o=>{const{options:a,...s}=o;return n.jsx(S,{...s,children:a.map(t=>n.jsx(v,{value:t,children:t},t))})}},m={args:{...r}},g={args:{...r,fullWidth:!1}},h={args:{...r}},f={args:{...r,loading:!0}},b={args:{...r,fetching:!0}},y={args:{...r,size:"small"}},C={render:({options:o,bgcolor:a,...s})=>{const{palette:t}=$(),e={primary:t.primary.main,secondary:t.secondary.main}[a],i=t.getContrastText(e);return n.jsx(x,{bgcolor:e,padding:3,children:n.jsx(S,{...s,color:i,children:o.map(p=>n.jsx(v,{value:p,children:p},p))})})},args:{bgcolor:"secondary",...r}},d={render:o=>{const a=T(x)(({theme:e})=>({display:"flex",flexDirection:"column",gap:e.spacing(1),padding:e.spacing(2),border:`2px dashed ${e.palette.primary.main}`,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.background.paper})),s=T(x)(({theme:e})=>({fontSize:"0.875rem",fontWeight:600,color:e.palette.primary.main,textTransform:"uppercase",letterSpacing:"0.5px"})),{options:t,...u}=o;return n.jsx(S,{...u,slots:{formControl:a,inputLabel:s},slotProps:{select:{sx:{backgroundColor:"primary.light","& .MuiOutlinedInput-notchedOutline":{borderColor:"primary.main"}}}},children:t.map(e=>n.jsx(v,{value:e,children:e},e))})},args:{...r},decorators:[L({width:300})]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fullWidth: false
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fetching: true
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    size: "small"
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Custom styled components
    const CustomFormControl = styled(Box)(({
      theme
    }) => ({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      padding: theme.spacing(2),
      border: \`2px dashed \${theme.palette.primary.main}\`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper
    }));
    const CustomLabel = styled(Box)(({
      theme
    }) => ({
      fontSize: "0.875rem",
      fontWeight: 600,
      color: theme.palette.primary.main,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    }));
    const {
      options,
      ...rest
    } = args as TemplateProps<string>;
    return <Select {...rest} slots={{
      formControl: CustomFormControl as any,
      inputLabel: CustomLabel as any
    }} slotProps={{
      select: {
        sx: {
          backgroundColor: "primary.light",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main"
          }
        }
      }
    }}>
        {options.map(option => <MenuItem key={option} value={option}>
            {option}
          </MenuItem>)}
      </Select>;
  },
  args: {
    ...baseArgs
  },
  decorators: [withContainer({
    width: 300
  })]
}`,...d.parameters?.docs?.source},description:{story:`Example demonstrating slot props customization.
All internal elements can be replaced with custom components and styled.`,...d.parameters?.docs?.description}}};const N=["Default","WithoutFullWidth","SelectLoaded","Loading","Fetching","SizeSmall","WithBackground","WithSlotPropsCustomization"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Fetching:b,Loading:f,SelectLoaded:h,SizeSmall:y,WithBackground:C,WithSlotPropsCustomization:d,WithoutFullWidth:g,__namedExportsOrder:N,default:U},Symbol.toStringTag,{value:"Module"}));export{m as D,S,re as a};
