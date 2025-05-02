import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-DVJBbH3e.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-D7rCHLKf.js";import"./enhanced-table-BMJ5Lmyf.js";import"./index-MPVjHJeJ.js";import"./Search-eQRh3AiA.js";import"./Typography-onhS7x9v.js";import"./generateUtilityClasses-DLmekfm-.js";import"./identifier-AWcriSoQ.js";import"./memoTheme-DlVnEjn-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-BfpurQfk.js";import"./createSimplePaletteValueFilter-DPgxyE5U.js";import"./index-C40_slqU.js";import"./extendSxProp-BeG7G82_.js";import"./TableCell-DLSCHAN8.js";import"./useSlot-BtCt5ImH.js";import"./resolveComponentProps-C6ngqkZn.js";import"./Box-qtFv-FAL.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DkFmwLCo.js";import"./CircularProgress-DQ5TipBg.js";import"./FormControl-B4yIv7Eg.js";import"./useFormControl-DTLAn0zY.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DdUEwRQR.js";import"./debounce-Be36O1Ab.js";import"./Select-Rw9uOpoh.js";import"./index-BZJhLVn1.js";import"./useSlotProps-FHc0k4mr.js";import"./Popover-DLlp5I2S.js";import"./Grow-C1jt-nhT.js";import"./useTheme-DGVEPoVB.js";import"./index-CY-aScCg.js";import"./index-Bzm33-PM.js";import"./Modal-CvM5GC-o.js";import"./Portal-DnP5YhFq.js";import"./Fade-BtPeSCYp.js";import"./Paper-C5PX7apq.js";import"./List-CyjvgPWP.js";import"./useControlled-DTf_Avw_.js";import"./ArrowDropDown-BkNIWJMf.js";import"./FormHelperText-DuL6RlFy.js";import"./InputAdornment-BcK1IB6P.js";import"./IconButton-Ozf8R3HC.js";import"./MenuItem-BpEWtP7Z.js";import"./listItemIconClasses-DPgqZLQZ.js";import"./listItemTextClasses-DzIMLrsc.js";import"./dividerClasses-D0QEASro.js";import"./v4-CtRu48qb.js";import"./Tooltip-BQ9EqyFB.js";import"./Popper-B3sD7oBn.js";import"./ReportProblem-B6xFN8mY.js";import"./ListItemIcon-B5QpQDOC.js";import"./ListItemText-Eg9e9YcS.js";import"./Chip-Cuzlzu3v.js";import"./Autocomplete-B41CA7OU.js";import"./Close-D2L7LIV6.js";import"./autocompleteClasses-BySqOtjL.js";import"./usePreviousProps-CnIeGkif.js";import"./ListSubheader-CEEE42aC.js";import"./Avatar-fa8V3Y0X.js";import"./Rating-D3V0NTDM.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:a}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=a,z=a.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},Ft={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
