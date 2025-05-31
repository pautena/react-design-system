import{j as L}from"./iframe-DF1-CE8W.js";import{T as v}from"./table-list-nf17YDsE.js";import{u as k}from"./useDemoData-C2g2hvVo.js";import"./Typography-DnRJLN7A.js";import"./generateUtilityClasses-ep8tZ6E9.js";import"./memoTheme-BiQeu4dL.js";import"./capitalize-BXHuhfc0.js";import"./createSimplePaletteValueFilter-DV0SZFES.js";import"./enhanced-table-BLOvXQ-H.js";import"./Search-umTj1Smx.js";import"./TableCell-DBlOryPY.js";import"./useSlot-DkRJhMCp.js";import"./resolveComponentProps-MDGWKvpl.js";import"./Box-94sBtQLg.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DUxwMMoe.js";import"./CircularProgress-P5Z1KMXE.js";import"./OutlinedInput-CGmGpRqk.js";import"./useFormControl-CLrOH4-m.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-D0dQqHhA.js";import"./debounce-Be36O1Ab.js";import"./Select-DlCg02rj.js";import"./useSlotProps-Bi130jt1.js";import"./Popover-CpaW69fp.js";import"./Grow-VY7noeTZ.js";import"./useTheme-CzxbhnGL.js";import"./index-EIGdvPod.js";import"./index-BFIYPmsr.js";import"./Modal-CYbnaKDf.js";import"./Portal-CgO-uGYL.js";import"./Fade-fIYqRCib.js";import"./Paper-Cf1sSZwi.js";import"./List-_NvLlhuE.js";import"./useControlled-CvncPDg1.js";import"./ArrowDropDown-DGGT75fS.js";import"./FormHelperText-GEIQr0wd.js";import"./InputAdornment-DLMabpdh.js";import"./IconButton-DVduu1i_.js";import"./MenuItem-DlXLvfjL.js";import"./listItemIconClasses-Dx8xunfB.js";import"./listItemTextClasses-BG9cPny8.js";import"./dividerClasses-EqjM-xf0.js";import"./extends-CF3RwP-h.js";import"./Rating-De0ZOlV3.js";import"./Tooltip-DVii0wlo.js";import"./Popper-DFwxHzEP.js";import"./ReportProblem-C9pcl2rW.js";import"./ListItemIcon-0svdVQhi.js";import"./ListItemText-Cv-zzQwt.js";import"./Chip-DV1ukItn.js";import"./Autocomplete-B86qgxXr.js";import"./Close-BLGPiyJW.js";import"./autocompleteClasses-B0JJv24S.js";import"./usePreviousProps-CGbubCKE.js";import"./ListSubheader-D8U-ipe7.js";import"./Avatar-B9RvZkVV.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,x=3,D=({dataSetType:h,size:T,...f})=>{const{data:a}=k({dataSet:h,rowLength:T,maxColumns:x}),{rows:O}=a,b=a.columns.map(({field:_,headerName:z})=>({id:_,label:z||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return L.jsx(v,{...f,columns:b,data:O,onClick:i("onClick row")})},jt={title:"Generators/TableList",component:D,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(S=e.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const wt=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,wt as __namedExportsOrder,jt as default};
