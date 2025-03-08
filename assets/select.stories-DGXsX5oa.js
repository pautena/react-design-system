import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as N}from"./storybook-BExNV_A2.js";import{r as $}from"./index-CFahbR6w.js";import{C as H}from"./center-container-BOOL5Rkn.js";import{s as G}from"./memoTheme-kZCwlU27.js";import{F as J,I as K}from"./FormControl-BBCSTdi-.js";import{S as Q}from"./Select-Bsr0nPNC.js";import{C as U}from"./CircularProgress-5NeNm8J5.js";import{B as _}from"./Box-CLV6Ujku.js";import{L as X}from"./LinearProgress-D3nS1kGu.js";import{f as x}from"./chunk-KRMY7ATX-ZvXBKWTq.js";import{M as E}from"./MenuItem-B6X7LaMp.js";import{u as Y}from"./useTheme-CfVHYLf1.js";import"./notification-center.provider-DGQlM2s5.js";import"./Typography-BXSoh8s2.js";import"./identifier-ChVxdG4r.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useSlot-HZ3RMWsh.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Paper-0PE78at3.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./IconButton-X2xkCwyW.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";import"./Button-C1N17xc9.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DJIq4c2v.js";import"./debounce-Be36O1Ab.js";import"./index-n2pnZwpZ.js";import"./useSlotProps-BuS7XknB.js";import"./Popover-BrIlDozf.js";import"./Modal-QJZQr9Mv.js";import"./Portal-Bjszn9Vx.js";import"./Fade-WD5A-epX.js";import"./List-BUK6or8F.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-BgdWXRS5.js";import"./listItemIconClasses-BJTJNZr2.js";import"./listItemTextClasses-Bv6UoQn1.js";import"./dividerClasses-Ubv0-wcR.js";const Z={small:15,medium:20},b=({label:t,value:n,loading:r=!1,fetching:s=!1,size:f="medium",fullWidth:l=!1,color:o,children:i,onChange:O})=>{const h=$.useId(),R=y=>s?e.jsx(H,{centerVertical:!0,centerHorizontal:!0,children:e.jsx(U,{color:"inherit",size:Z[f]})}):r?e.jsxs(_,{display:"flex",flexDirection:"column",children:[y,e.jsx(X,{color:"inherit",sx:{position:"absolute",left:0,right:0,bottom:0}})]}):y,D=G(J)(()=>o?{label:{color:o},".MuiOutlinedInput-notchedOutline":{borderColor:`${o} !important`},".MuiInputBase-root":{color:o},".MuiSelect-icon":{fill:o}}:{});return e.jsxs(D,{fullWidth:l,children:[e.jsx(K,{id:h,children:t}),e.jsx(Q,{labelId:h,id:h,value:n,label:t,onChange:O,disabled:s,size:f,renderValue:R,children:i})]})};b.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"T"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fetching:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},onChange:{required:!1,tsType:{name:'SelectInputProps["onChange"]',raw:'SelectInputProps<T>["onChange"]'},description:""}}};const a={label:"Car model",value:x.vehicle.model(),size:"medium",fetching:!1,loading:!1,fullWidth:!0,options:[...x.definitions.vehicle.model]},ee=({options:t,...n})=>e.jsx(b,{...n,children:t.map(r=>e.jsx(E,{value:r,children:r},r))}),Xe={title:"Components/Inputs/Select",component:ee,decorators:[N({width:200})],parameters:{layout:"centered"}},m={args:{...a,fullWidth:!1}},c={args:{...a}},p={args:{...a,loading:!0}},d={args:{...a,fetching:!0}},u={args:{...a,size:"small"}},g={render:({options:t,bgcolor:n,...r})=>{const{palette:s}=Y(),l={primary:s.primary.main,secondary:s.secondary.main}[n],o=s.getContrastText(l);return e.jsx(_,{bgcolor:l,padding:3,children:e.jsx(b,{...r,color:o,children:t.map(i=>e.jsx(E,{value:i,children:i},i))})})},args:{bgcolor:"secondary",...a}};var S,C,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fullWidth: false
  }
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,I,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var B,W,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var k,z,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    fetching: true
  }
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var A,F,L;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    size: "small"
  }
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,V,w;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(w=(V=g.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Ye=["WithoutFullWidth","SelectLoaded","Loading","Fetching","SizeSmall","WithBackground"];export{d as Fetching,p as Loading,c as SelectLoaded,u as SizeSmall,g as WithBackground,m as WithoutFullWidth,Ye as __namedExportsOrder,Xe as default};
