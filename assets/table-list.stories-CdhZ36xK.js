import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-C1JWm7Qs.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-C_Nsl5Af.js";import"./enhanced-table-Lx6hfr_-.js";import"./index-MPVjHJeJ.js";import"./Search-zh9qs8nH.js";import"./Typography-DLQAKUPY.js";import"./generateUtilityClasses-ZVRInTit.js";import"./identifier-CqKYzcDD.js";import"./memoTheme-Mdb9V92W.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./emotion-react.browser.esm-qvwvrbe5.js";import"./createSimplePaletteValueFilter-DPgxyE5U.js";import"./index-Co4SDwek.js";import"./extendSxProp-CYxjGvMX.js";import"./TableCell-BM4HtXoL.js";import"./useSlot-p0MVzPyR.js";import"./resolveComponentProps-CIZOP662.js";import"./Box-DMp0MiFl.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-D6ktp3Bb.js";import"./CircularProgress-DAfSkrMo.js";import"./FormControl-DmZ3dqal.js";import"./useFormControl-DTLAn0zY.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-C0oFl2W5.js";import"./debounce-Be36O1Ab.js";import"./Select-CQffqFMk.js";import"./index-BZJhLVn1.js";import"./useSlotProps-0-ysMwJ6.js";import"./Popover-CEFaKfAQ.js";import"./Grow-CbZFvkjr.js";import"./useTheme-BF8Ncbmi.js";import"./index-CY-aScCg.js";import"./index-Bzm33-PM.js";import"./Modal-DKomL1Ri.js";import"./Portal-BukOOFuD.js";import"./Fade-B6bAUoaH.js";import"./Paper-BrCCIvcA.js";import"./List-CuawyMqr.js";import"./useControlled-DTf_Avw_.js";import"./ArrowDropDown-DSnTHnz7.js";import"./FormHelperText-BBc9xFZI.js";import"./InputAdornment-CkhVGVdO.js";import"./IconButton-DDxpHrRS.js";import"./MenuItem-COokRIgE.js";import"./listItemIconClasses-DQrt2E1L.js";import"./listItemTextClasses-DVWq4cS-.js";import"./dividerClasses-CONweonv.js";import"./v4-CtRu48qb.js";import"./Tooltip-BfY52rxx.js";import"./Popper-CT4YEpT_.js";import"./ReportProblem-CTtqr742.js";import"./ListItemIcon-Qy6kN-Z8.js";import"./ListItemText-ByHMEShh.js";import"./Chip-BlQxZfrY.js";import"./Autocomplete-tvgbxPmQ.js";import"./Close-DGeI0zpO.js";import"./autocompleteClasses-CA6btAHs.js";import"./usePreviousProps-CnIeGkif.js";import"./ListSubheader-CN9avkt-.js";import"./Avatar-B8pL0mQe.js";import"./Rating-DE44snLs.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:a}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=a,z=a.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},Ft={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
