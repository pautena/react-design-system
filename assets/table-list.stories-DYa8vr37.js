import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-CWb2k9-i.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-BZAfKseY.js";import"./enhanced-table-BEN-EIn9.js";import"./index-CFahbR6w.js";import"./Search-CBTXOEgH.js";import"./Typography-ByJtF3w8.js";import"./generateUtilityClasses-F-VSJTCv.js";import"./identifier-CAo-jtr-.js";import"./memoTheme-DEu9pJpV.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-3FlxQS88.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-CGHpqm4L.js";import"./extendSxProp-BvoZt83L.js";import"./TableCell-BVOSot4F.js";import"./useSlot-N3pciUg7.js";import"./resolveComponentProps-C6NMVkEU.js";import"./Box-CohR-H6x.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-wluz_IDA.js";import"./CircularProgress-8aVj90tP.js";import"./FormControl-BKE9HHDF.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-xIo4Mur8.js";import"./debounce-Be36O1Ab.js";import"./Select-CwadJp3l.js";import"./index-DDS9h_yT.js";import"./useSlotProps-9PaHgLsM.js";import"./Popover-DoeWlc32.js";import"./Grow-2Tfe9bro.js";import"./useTheme-BLxwKqlM.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./Modal-DaKpvLZy.js";import"./Portal-BziOuaqI.js";import"./Fade-BVvhTWJB.js";import"./Paper-F-UPHvIG.js";import"./List-CtckMl5T.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-4SWgHSMG.js";import"./FormHelperText-BcKNSv3q.js";import"./InputAdornment-DNOeUmwv.js";import"./IconButton-ez-CP-G1.js";import"./MenuItem-BrMjTRR2.js";import"./listItemIconClasses-Cx63T-M8.js";import"./listItemTextClasses-BSvF-wts.js";import"./dividerClasses-Bet94afr.js";import"./v4-CtRu48qb.js";import"./gridEditRowModel-_D84-Tl5.js";import"./Tooltip-DoFM59R-.js";import"./Popper-C1Lk_6G9.js";import"./ReportProblem-BxW_9OXn.js";import"./ListItemIcon-DUIc2WYt.js";import"./ListItemText-C3kBIp0a.js";import"./Chip-Dce6DmA2.js";import"./Autocomplete-CmDs_5y4.js";import"./Close-CgV9NucM.js";import"./autocompleteClasses-DiCIextL.js";import"./usePreviousProps-CkgkBOV5.js";import"./ListSubheader-DQWYoUHt.js";import"./Avatar-dr7LlaUz.js";import"./Rating-f1YPafLe.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:m}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=m,z=m.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},Ht={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var a,s,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(C=(h=e.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const It=["Default","Loading","WihtoutSearch","WithOptions"];export{t as Default,o as Loading,r as WihtoutSearch,e as WithOptions,It as __namedExportsOrder,Ht as default};
