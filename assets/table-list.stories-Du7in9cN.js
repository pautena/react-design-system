import{j as u}from"./iframe-BupHDtd1.js";import{T as g}from"./table-list-CU_iHARL.js";import{u as y}from"./useDemoData-DJ0MJWvE.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BHekySi3.js";import"./memoTheme-uoO9vclW.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./createSimplePaletteValueFilter-LbGOAHYa.js";import"./enhanced-table-DhHA3lzd.js";import"./Search-BxHxrTq5.js";import"./TableCell-BXGk_UU6.js";import"./useSlot-CDAVMGN6.js";import"./Box-BZzEFwUz.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-HCk6Ljdm.js";import"./OutlinedInput-BjAMRR9Y.js";import"./useFormControl-DOIECqUk.js";import"./isMuiElement-B9Yk4f5Q.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-DeUb_WaS.js";import"./useSlotProps-CTFGJ4TE.js";import"./Popover-B5lVZexF.js";import"./Grow-CP6B5ywO.js";import"./useTheme-Big8xsoA.js";import"./index-DGx7bEnB.js";import"./index-dSTdg89Q.js";import"./Modal-cEtTgi0S.js";import"./Portal-DP_lpGU5.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-DI5ShsIQ.js";import"./Paper-ZM7KCuNl.js";import"./List-BXpsKTF1.js";import"./useControlled-sRtPFq0m.js";import"./ArrowDropDown-BTZV4NVw.js";import"./FormHelperText-BvB9GbdA.js";import"./InputAdornment-B2zP22ml.js";import"./CircularProgress-CA-yQluH.js";import"./IconButton-CYN55AKW.js";import"./MenuItem-Cee_mDmd.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./extends-CF3RwP-h.js";import"./gridEditRowModel-BBIeRElX.js";import"./Tooltip-CZbNBqvU.js";import"./Popper-CgJIBFM7.js";import"./ReportProblem-CA9q50Be.js";import"./ListItemIcon-BSqKooXi.js";import"./ListItemText-wtZ0pS5l.js";import"./Chip-U6q2Uv2S.js";import"./Autocomplete-5R2RzC2N.js";import"./Close-Dc-soyav.js";import"./autocompleteClasses-Dsm7Mas1.js";import"./usePreviousProps-C2PDPj66.js";import"./ListSubheader-Bw7PCzL-.js";import"./Avatar-CFivkbhN.js";import"./Rating-DFNNpa1R.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,S=3,C=({dataSetType:m,size:s,...p})=>{const{data:a}=y({dataSet:m,rowLength:s,maxColumns:S}),{rows:n}=a,c=a.columns.map(({field:d,headerName:l})=>({id:d,label:l||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return u.jsx(g,{...p,columns:c,data:n,onClick:i("onClick row")})},_t={title:"Generators/TableList",component:C,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
