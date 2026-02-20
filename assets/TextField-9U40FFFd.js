import{m as j,j as o}from"./iframe-Bf5-ajDf.js";import{F as O,I as S,O as z,o as m,i as U}from"./OutlinedInput-s-urn6xF.js";import{I as q}from"./InputAdornment-CTADnfoH.js";import{C as v,c as M}from"./CircularProgress-CAtrJVii.js";import{L as P,l as B}from"./LinearProgress-DzWRfmRK.js";import{F as E}from"./FormHelperText-D29bO5w9.js";import{a as H,g as R}from"./memoTheme-rYOwdVL2.js";import{i as _}from"./IconButton-CT7WGyXl.js";function X(s){return R("MuiAutocomplete",s)}const k=H("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);function w({id:s,label:r,InputLabelProps:u,InputProps:l,fetching:f,loading:d,helperText:a,hexColor:e,size:p,fullWidth:c,sx:g,slots:t,slotProps:n,...x}){const i=j(s),h=a&&i?`${i}-helper-text`:void 0,I=r&&i?`${i}-label`:void 0,C=t?.formControl??O,b=t?.inputLabel??S,T=t?.input??z,F=t?.inputAdornment??q,y=t?.loadingIndicator??v,A=t?.fetchingIndicator??P,L=t?.helperText??E,$=e?{[`& .${m.notchedOutline}`]:{borderColor:`${e} !important`},[`& .${U.root}`]:{color:e},[`& .${m.input}`]:{color:e},[`& .${M.root}`]:{color:e},[`& .${B.bar}`]:{backgroundColor:e},[`& .${k.endAdornment} .${_.root}`]:{color:e}}:{};return o.jsxs(C,{sx:$,fullWidth:c,...n?.formControl,children:[o.jsx(b,{size:p==="small"?"small":"medium",id:I,htmlFor:i,...u,...n?.inputLabel,children:r}),o.jsx(T,{...l,id:i,label:r,size:p,fullWidth:c,endAdornment:o.jsxs(F,{position:"end",...n?.inputAdornment,children:[l?.endAdornment,d?o.jsx(y,{color:"inherit",size:20,sx:{ml:1},...n?.loadingIndicator}):null]}),sx:g,...x,...n?.input}),f&&!d&&o.jsx(A,{color:"inherit",sx:{position:"absolute",left:0,right:0,bottom:0},...n?.fetchingIndicator}),a&&o.jsx(L,{id:h,...n?.helperText,children:a})]})}w.__docgenInfo={description:`A customizable TextField component that extends the functionality of the Material-UI TextField component
and supports various props for styling and functionality.

Supports extensive customization through slots and slotProps.

@example
\`\`\`tsx
// Basic usage
<TextField label="Email" />

// With loading state
<TextField label="Search" loading />

// Custom loading indicator size
<TextField
  label="Username"
  loading
  slotProps={{
    loadingIndicator: { size: 24 }
  }}
/>
\`\`\``,methods:[],displayName:"TextField",props:{fetching:{required:!1,tsType:{name:"boolean"},description:"Indicates if the field is in a fetching state."},loading:{required:!1,tsType:{name:"boolean"},description:"Indicates if the field is in a loading state."},hexColor:{required:!1,tsType:{name:"string"},description:"Optional hex color code for the text field."},slots:{required:!1,tsType:{name:"TextFieldSlots"},description:"Optional slots for custom rendering within the text field"},slotProps:{required:!1,tsType:{name:"TextFieldSlotProps"},description:"Optional props for the slots"}}};export{w as T,k as a,X as g};
