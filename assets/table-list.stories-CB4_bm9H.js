import{j as u}from"./iframe-EZlCblT_.js";import{T as g}from"./table-list-PsaV59Ly.js";import{u as y}from"./useDemoData-D1xSwnAI.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-vAnbId3H.js";import"./memoTheme-CjfLGB6G.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-BROrGcBZ.js";import"./enhanced-table-Dh1QoRuO.js";import"./Search-CkV5j50-.js";import"./TableSortLabel-DE9sUoqY.js";import"./TableCell-CAASfeZj.js";import"./useSlot-JprQW5-3.js";import"./Box-C0oK-ZD8.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-BKM0WcM0.js";import"./OutlinedInput-BIU87u9h.js";import"./useFormControl-D9P9FxP1.js";import"./isMuiElement-DscGPJ5R.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-DnjgMm-q.js";import"./useSlotProps-X_D2_fbs.js";import"./Popover-CD-umd1q.js";import"./Grow-CXlVsDrX.js";import"./useTheme-BkEo2tXZ.js";import"./index-Bw2dNR8W.js";import"./index-BKuDT_6P.js";import"./Modal-DotIMusy.js";import"./Portal-BsEwugbi.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-0A1TFkgc.js";import"./Paper-C0CMzwYM.js";import"./List-B1cC0BmG.js";import"./useControlled-NOaR8TS5.js";import"./ArrowDropDown-CHFH1wO3.js";import"./FormHelperText-Dqyff_7j.js";import"./InputAdornment-BItWONsH.js";import"./CircularProgress-CWLujbj3.js";import"./IconButton-CoVD8RR9.js";import"./MenuItem-BEYfrdDw.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./gridEditRowModel-Cd5i1TuJ.js";import"./Tooltip-5NxbQ7JN.js";import"./Popper-CiIWXO7n.js";import"./ReportProblem-CVDe1eAg.js";import"./ListItemIcon-B1fOyP5x.js";import"./ListItemText-CuI7_CRu.js";import"./Chip-BGf5tmcS.js";import"./Autocomplete-BAwtr4HN.js";import"./Close-BKTzgdKH.js";import"./autocompleteClasses-Dsm7Mas1.js";import"./usePreviousProps-BhvY6_1g.js";import"./ListSubheader-DvTFozbl.js";import"./Avatar-CjULCdSA.js";import"./Rating-DhiD1syl.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,S=3,C=({dataSetType:m,size:s,...p})=>{const{data:a}=y({dataSet:m,rowLength:s,maxColumns:S}),{rows:n}=a,c=a.columns.map(({field:d,headerName:l})=>({id:d,label:l||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return u.jsx(g,{...p,columns:c,data:n,onClick:i("onClick row")})},_t={title:"Generators/TableList",component:C,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: true,
    loading: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 40,
    dataSetType: "Commodity",
    search: false
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const zt=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,zt as __namedExportsOrder,_t as default};
