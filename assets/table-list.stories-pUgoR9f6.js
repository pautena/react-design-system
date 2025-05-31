import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-PovXeu6i.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-Crw-d7EG.js";import"./enhanced-table-CyjgJs7m.js";import"./index-MPVjHJeJ.js";import"./Search-vyqLxZWt.js";import"./Typography-CyG_osfu.js";import"./generateUtilityClasses-BktTZPgl.js";import"./identifier-DNvq2pxS.js";import"./memoTheme-BcQRFLl-.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./capitalize-BAmrW1px.js";import"./emotion-react.browser.esm-By2wk1sz.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./index-CfQGRItp.js";import"./extendSxProp-Bje7bXD4.js";import"./TableCell-C7mtJTTB.js";import"./useSlot-DotCfz4C.js";import"./resolveComponentProps-DoQ0TnDj.js";import"./Box-0-Tyqcm1.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-I0u465Uf.js";import"./CircularProgress--HHt6BCj.js";import"./FormControl-BhJT-4LL.js";import"./useFormControl-DTLAn0zY.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-BVEGGE4i.js";import"./debounce-Be36O1Ab.js";import"./Select-BQ_ZKjeM.js";import"./index-BZJhLVn1.js";import"./useSlotProps-Dr3R0LKh.js";import"./Popover-BSYkmVt0.js";import"./Grow-CR1pdftr.js";import"./useTheme-CPdeOTZ4.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Modal-BJw4-95A.js";import"./Portal-BS2hKWpK.js";import"./Fade-B0UTdfkE.js";import"./Paper-FGekKhYT.js";import"./List-XfzJe0G9.js";import"./useControlled-DTf_Avw_.js";import"./ArrowDropDown-DtcthK9W.js";import"./FormHelperText-DGFiiVrK.js";import"./InputAdornment-DmX6BNEG.js";import"./IconButton-iRnWSj6z.js";import"./MenuItem-BpusMzgi.js";import"./listItemIconClasses-BRDzq_Ry.js";import"./listItemTextClasses-D5GHVFil.js";import"./dividerClasses-BTaa5qRa.js";import"./v4-CtRu48qb.js";import"./gridEditRowModel-E2MI41kn.js";import"./Rating-DAdVUHmm.js";import"./Tooltip-Cu5FQ0GV.js";import"./Popper-xdCkG2wy.js";import"./ReportProblem-y1vBw0UH.js";import"./ListItemIcon-gWKK5CfQ.js";import"./ListItemText-DS9prEMc.js";import"./Chip-BaB70AjJ.js";import"./Autocomplete-nWqZdYTL.js";import"./Close-Bp27t3Dr.js";import"./autocompleteClasses-_C6Lz2iX.js";import"./usePreviousProps-CnIeGkif.js";import"./ListSubheader-QLFsy4wr.js";import"./Avatar-ZhYaxt4j.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:m}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=m,z=m.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},It={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var a,s,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(C=(h=e.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const Jt=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,Jt as __namedExportsOrder,It as default};
