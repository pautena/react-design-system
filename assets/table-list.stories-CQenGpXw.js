import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{T as k}from"./table-list-CCs33CNb.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./useDemoData-BHYNBXEE.js";import"./enhanced-table-CuxQK9gz.js";import"./index-CFahbR6w.js";import"./Search-B-UV9NWi.js";import"./Typography-kEBT9KOp.js";import"./generateUtilityClasses-D-SxHVPw.js";import"./identifier-BgYKR63G.js";import"./memoTheme-DMhdsnBH.js";import"./DefaultPropsProvider-CoDhPOBZ.js";import"./emotion-react.browser.esm-zxExLa5N.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./index-iW7Z6w0e.js";import"./extendSxProp-BwMkgJDT.js";import"./TableCell-ByJZUAsb.js";import"./useSlot-CxWRxdBG.js";import"./resolveComponentProps-Cr8BEufl.js";import"./Box-GFssEyp-.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DTRP_O6X.js";import"./CircularProgress-DZYD8Un3.js";import"./FormControl-CcT-iAx_.js";import"./useFormControl-Bi_or6kT.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DTHMI0Ng.js";import"./debounce-Be36O1Ab.js";import"./Select-BxzdaCU9.js";import"./index-DDS9h_yT.js";import"./useSlotProps-Dit_-yLe.js";import"./Popover-3wBHDQbo.js";import"./Grow-DUOMFKMB.js";import"./useTheme-4gy_rbmZ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./Modal-IcruWssB.js";import"./Portal-CFtUE-o1.js";import"./Fade-DmsmEUfe.js";import"./Paper-CKIh7Zii.js";import"./List-CA_oW-9o.js";import"./useControlled-cx3qaOIq.js";import"./ArrowDropDown-B7hJKaNw.js";import"./FormHelperText-DVqkKY9c.js";import"./InputAdornment-CtceFKT1.js";import"./IconButton-DAJ6x1dW.js";import"./MenuItem-i6O3sx0e.js";import"./listItemIconClasses-CBfyJoIj.js";import"./listItemTextClasses-D2pUC1fg.js";import"./dividerClasses-BA5-iqd8.js";import"./v4-CtRu48qb.js";import"./Tooltip-CzcW0AvX.js";import"./Popper-Dsg5nHik.js";import"./ReportProblem-Cw2oOWix.js";import"./ListItemIcon-v-kuRBt0.js";import"./ListItemText-jsjHmksR.js";import"./Chip-BtEAqeTa.js";import"./Autocomplete-DeHRSQAq.js";import"./Close-vvyBwv4a.js";import"./autocompleteClasses-BbOfqt51.js";import"./usePreviousProps-CkgkBOV5.js";import"./ListSubheader-CPhAsJVE.js";import"./Avatar-CEaxCwCM.js";import"./Rating-uC72fnp_.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:a}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=a,z=a.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},Ft={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
