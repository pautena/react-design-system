import{j as u}from"./iframe-u8LB376j.js";import{T as g}from"./table-list-DyBXNcn7.js";import{u as y}from"./useDemoData-CpaAJICo.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-yXzabRJh.js";import"./memoTheme-V5gp6nHU.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-BA1C3KMz.js";import"./enhanced-table-b8Evwash.js";import"./Search-CCN9a548.js";import"./TableSortLabel-CGouHft9.js";import"./TableCell-DQy07XZT.js";import"./useSlot-C0yEUZxy.js";import"./Box-r6KuYIW2.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DhrNMBpy.js";import"./OutlinedInput-CItTCf1Q.js";import"./useFormControl-D0pQ51AE.js";import"./isMuiElement-DZKLzQP7.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-C7QAlleG.js";import"./useSlotProps-BTk2FtMy.js";import"./Popover-D3TQq2Kw.js";import"./Grow-C0Me-irx.js";import"./useTheme-DuCPUz7t.js";import"./index-aSWeh4o7.js";import"./index-CQl9WEtC.js";import"./Modal-PS6z-5gu.js";import"./Portal-Dozv2roy.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-Bjv-lycE.js";import"./Paper-ufo0IKvl.js";import"./List-DDzKp9r0.js";import"./useControlled-Cm5Rncbd.js";import"./ArrowDropDown-BdLbldV-.js";import"./FormHelperText-BLVupkcU.js";import"./InputAdornment-BDVoCqre.js";import"./CircularProgress-DnZ0hM6Q.js";import"./IconButton-DfMYPZbC.js";import"./MenuItem-B5GQQUbP.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./extends-CF3RwP-h.js";import"./gridEditRowModel-65eQzJb2.js";import"./Tooltip-vxYi9VmK.js";import"./Popper-rX9G1uGj.js";import"./ReportProblem-Bd4EIahm.js";import"./ListItemIcon-pJznAr62.js";import"./ListItemText-BeHsc10h.js";import"./Chip-Qr6XErzi.js";import"./Autocomplete-B9s7ImdE.js";import"./Close-DCdKt3RS.js";import"./autocompleteClasses-Dsm7Mas1.js";import"./usePreviousProps-DTyQkA0X.js";import"./ListSubheader-DGwd8xsI.js";import"./Avatar-CNZXdVwl.js";import"./Rating-C1-AfBby.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,S=3,C=({dataSetType:m,size:s,...p})=>{const{data:a}=y({dataSet:m,rowLength:s,maxColumns:S}),{rows:n}=a,c=a.columns.map(({field:d,headerName:l})=>({id:d,label:l||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return u.jsx(g,{...p,columns:c,data:n,onClick:i("onClick row")})},zt={title:"Generators/TableList",component:C,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Lt=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,Lt as __namedExportsOrder,zt as default};
