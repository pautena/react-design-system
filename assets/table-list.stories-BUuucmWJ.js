import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-C2cef1im.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-DJSRSxy-.js";import"./enhanced-table-DDgu2rCo.js";import"./index-CFahbR6w.js";import"./Search-gmFCXQ6z.js";import"./Typography-BHoRv_UT.js";import"./generateUtilityClasses-DuX1QiOS.js";import"./identifier-BgYKR63G.js";import"./memoTheme-CBZDwJAx.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./TableCell-DH9LOF6k.js";import"./useSlot-nPjAgQtl.js";import"./resolveComponentProps-hmdrCTBm.js";import"./Box-TC8t5Mes.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-CaAS_tGX.js";import"./CircularProgress-CfAkpgYB.js";import"./FormControl-cmlphi_s.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-B7hwhpfS.js";import"./debounce-Be36O1Ab.js";import"./Select-CmfbQu1C.js";import"./index-DDS9h_yT.js";import"./useSlotProps-DbVN_D1j.js";import"./Popover-BMvRZrqK.js";import"./Grow-lPLudiBQ.js";import"./useTheme-4gy_rbmZ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./Modal-D3Ofnbsy.js";import"./Portal-efJ7cP4U.js";import"./Fade-Bdw3YQIz.js";import"./Paper-CjO-mYoO.js";import"./List-DWQYa8fJ.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-lZAZFnt9.js";import"./FormHelperText-B50Q2CXQ.js";import"./InputAdornment-D7MA4pLN.js";import"./IconButton-BsiGod7k.js";import"./MenuItem-aXvVI82K.js";import"./listItemIconClasses-CUycdJC6.js";import"./listItemTextClasses-BnobYrV7.js";import"./dividerClasses-DOPOZ2w9.js";import"./v4-CtRu48qb.js";import"./Tooltip-BsbHIkcY.js";import"./Popper-TFbCgxsY.js";import"./ReportProblem-BlivAKKi.js";import"./ListItemIcon-DmZzxA9b.js";import"./ListItemText-3qSm10v5.js";import"./Chip-CICcCRMe.js";import"./Autocomplete-B3NtjuSg.js";import"./Close-Ciaj37At.js";import"./autocompleteClasses-CTQmjTLa.js";import"./usePreviousProps-CkgkBOV5.js";import"./ListSubheader-Ck4QXI_-.js";import"./Avatar-B52obtiQ.js";import"./Rating-DQw1duoN.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:a}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=a,z=a.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},Ft={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: true
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: true,
    loading: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: false
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,C;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: false,
    options: [{
      id: "edit",
      label: "Edit",
      onClick: action("Option edit")
    }, {
      id: "remove",
      label: "Remove",
      onClick: action("Option remove")
    }]
  }
}`,...(C=(h=e.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const Ht=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,Ht as __namedExportsOrder,Ft as default};
