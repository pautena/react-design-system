import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-CyRN38Dd.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-RFDGubpW.js";import"./enhanced-table-BwWOcWBo.js";import"./index-CFahbR6w.js";import"./Search-DE-GaMZ4.js";import"./Typography-BXSoh8s2.js";import"./identifier-ChVxdG4r.js";import"./memoTheme-kZCwlU27.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./TableCell-Bp-aYBSJ.js";import"./useSlot-HZ3RMWsh.js";import"./resolveComponentProps-BnY4DdR-.js";import"./Box-CLV6Ujku.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DDZmRnk7.js";import"./CircularProgress-5NeNm8J5.js";import"./FormControl-BBCSTdi-.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DJIq4c2v.js";import"./debounce-Be36O1Ab.js";import"./Select-Bsr0nPNC.js";import"./index-n2pnZwpZ.js";import"./useSlotProps-BuS7XknB.js";import"./Popover-BrIlDozf.js";import"./Grow-DSkAUVrm.js";import"./useTheme-CfVHYLf1.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Modal-QJZQr9Mv.js";import"./Portal-Bjszn9Vx.js";import"./Fade-WD5A-epX.js";import"./Paper-0PE78at3.js";import"./List-BUK6or8F.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-BgdWXRS5.js";import"./FormHelperText-DAqACIH9.js";import"./InputAdornment-B75dWK2u.js";import"./IconButton-X2xkCwyW.js";import"./MenuItem-B6X7LaMp.js";import"./listItemIconClasses-BJTJNZr2.js";import"./listItemTextClasses-Bv6UoQn1.js";import"./dividerClasses-Ubv0-wcR.js";import"./v4-CtRu48qb.js";import"./gridEditRowModel-luNccdJr.js";import"./Tooltip-BlCF73bJ.js";import"./Popper-BhXwPKmp.js";import"./ListItemIcon-t8pKne7w.js";import"./ListItemText-DQKH4TiD.js";import"./Chip-Brf-Qufy.js";import"./Autocomplete-BICSKNgd.js";import"./Close-D7PaC3tu.js";import"./autocompleteClasses-CbuopPvQ.js";import"./usePreviousProps-CkgkBOV5.js";import"./ListSubheader-B46aD8Ud.js";import"./Avatar-CPXi-jm0.js";import"./Rating-Cm7BZESj.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:a}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=a,z=a.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},qt={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(h=e.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const At=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,At as __namedExportsOrder,qt as default};
