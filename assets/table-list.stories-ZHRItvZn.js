import{j as u}from"./iframe-B6ohfiup.js";import{T as g}from"./table-list-D6UI6KsA.js";import{u as y}from"./useDemoData-Bkb834sR.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DaaAGHYc.js";import"./memoTheme-CC-1Q7gO.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-C0yhpO25.js";import"./enhanced-table-gBgvlWC1.js";import"./Search-CzjO4Pgp.js";import"./TableSortLabel-W2kiKYZv.js";import"./TableCell-DYM7JzoL.js";import"./useSlot-QV38wpNi.js";import"./Box-CXgehUqD.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-Bmbu2s9D.js";import"./OutlinedInput-aHMVGmm-.js";import"./useFormControl-CdKTE7sB.js";import"./isMuiElement-pQtj3-kC.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-DwXhrFZO.js";import"./useSlotProps-C73l9q9D.js";import"./Popover-LGXiizpD.js";import"./Grow-B2B6SMAZ.js";import"./useTheme-DsWhHYnr.js";import"./index-DXCvjZCK.js";import"./index-Cn8b4sBC.js";import"./Modal--ZvLHipi.js";import"./Portal-CqKG5-4Z.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-CEZAeMps.js";import"./Paper-CU8usuf0.js";import"./List-Dmt-Xl7p.js";import"./useControlled-D2lkeBdZ.js";import"./ArrowDropDown-BQXqsjgz.js";import"./FormHelperText-BoqEJcV4.js";import"./InputAdornment-DhJgW4VW.js";import"./CircularProgress-DNnVD90t.js";import"./IconButton-Cwope62c.js";import"./MenuItem-godXy_xk.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./Tooltip-DNA_q4_d.js";import"./Popper-DoWA0y4F.js";import"./ReportProblem-DSuNsrd8.js";import"./ListItemIcon-Bp6XGdm9.js";import"./ListItemText-CAbA1lzm.js";import"./Chip-DzkjVeOf.js";import"./Autocomplete-8BtXBy-u.js";import"./Close-BkjWXVCk.js";import"./autocompleteClasses-Dsm7Mas1.js";import"./usePreviousProps-BMYPVd8d.js";import"./ListSubheader-8YxRnrse.js";import"./Avatar-m3LwW5Bv.js";import"./Rating-BVEDZssD.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,S=3,C=({dataSetType:m,size:s,...p})=>{const{data:a}=y({dataSet:m,rowLength:s,maxColumns:S}),{rows:n}=a,c=a.columns.map(({field:d,headerName:l})=>({id:d,label:l||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return u.jsx(g,{...p,columns:c,data:n,onClick:i("onClick row")})},bt={title:"Generators/TableList",component:C,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _t=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,_t as __namedExportsOrder,bt as default};
