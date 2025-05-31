import{j as L}from"./iframe-CyC2w49y.js";import{T as v}from"./table-list-DSB71N1z.js";import{u as k}from"./useDemoData-CgIl2U_1.js";import"./Typography-CyoT5iG8.js";import"./generateUtilityClasses-DiH4kTrr.js";import"./memoTheme-D8ZqR_KA.js";import"./createSimplePaletteValueFilter-DpK-1nce.js";import"./enhanced-table-BLgkcsQn.js";import"./Search-4W8WcA1Q.js";import"./TableCell-RIJvO9lw.js";import"./useSlot-Cmez1d-s.js";import"./Box-Bu5_Wahq.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DjsTrXPP.js";import"./CircularProgress-DDQh3gzr.js";import"./OutlinedInput-CWVotCN6.js";import"./useFormControl-DVUKBLIk.js";import"./isMuiElement-REqKdDgZ.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-PaTnrDJm.js";import"./useSlotProps-wUUglGDS.js";import"./Popover-lWnd0cwD.js";import"./Grow--wL55YRT.js";import"./useTheme-Ds7l_2HV.js";import"./index-B5T9s_eP.js";import"./index-CFgBVtQr.js";import"./Modal-BG7KvuJi.js";import"./Portal-rUAWzwmj.js";import"./Fade-CgEVAOb-.js";import"./Paper-VpekSNGd.js";import"./List-BoFVQ1sT.js";import"./useControlled-ROJvAgeP.js";import"./ArrowDropDown-JZb76e3L.js";import"./FormHelperText-lpCXhRsW.js";import"./InputAdornment-DKkpQPbk.js";import"./IconButton-G5bFnDkw.js";import"./MenuItem-DhSoJ9i-.js";import"./listItemIconClasses-BgYkZe4y.js";import"./listItemTextClasses-C1avF9B6.js";import"./dividerClasses-DMuziFiO.js";import"./extends-CF3RwP-h.js";import"./gridEditRowModel-u3aA7ZTg.js";import"./Tooltip-ChpC1Am2.js";import"./Popper-rvd4hOR2.js";import"./ReportProblem-DsnMhmO_.js";import"./ListItemIcon-D-0oHe-y.js";import"./ListItemText-BuzdW83Y.js";import"./Chip-DhRurVp9.js";import"./Autocomplete-WuPeCAnL.js";import"./Close-C358guxW.js";import"./autocompleteClasses-B37wxXb7.js";import"./usePreviousProps-DizMHutO.js";import"./ListSubheader-MgKeXlWN.js";import"./Avatar-CHv_JWgL.js";import"./Rating-BVyGdraP.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,x=3,D=({dataSetType:h,size:T,...f})=>{const{data:a}=k({dataSet:h,rowLength:T,maxColumns:x}),{rows:O}=a,b=a.columns.map(({field:_,headerName:z})=>({id:_,label:z||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return L.jsx(v,{...f,columns:b,data:O,onClick:i("onClick row")})},wt={title:"Generators/TableList",component:D,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,S,C;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(S=e.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const At=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,At as __namedExportsOrder,wt as default};
