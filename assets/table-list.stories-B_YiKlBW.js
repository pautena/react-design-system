import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{a as i}from"./index-B-lxVbXh.js";import{T as k}from"./table-list-DdxtQggd.js";import{u as x}from"./useDemoData-DRUboiBn.js";import"./v4-CtRu48qb.js";import"./ButtonBase-BNEyy1UI.js";import"./index-MPVjHJeJ.js";import"./generateUtilityClasses-C0mA1QAX.js";import"./defaultTheme-D1CkU4eW.js";import"./index-RWZtYoiK.js";import"./extendSxProp-CacC3vWi.js";import"./emotion-react.browser.esm-B1ab5vTn.js";import"./memoTheme-L0vtuW4h.js";import"./createSimplePaletteValueFilter-C8wpUTih.js";import"./DefaultPropsProvider-DsKJO0Hi.js";import"./capitalize-BKnSthTY.js";import"./enhanced-table-aPN5eWK_.js";import"./Search-0IKLUlsv.js";import"./TableCell-jEaKfBvo.js";import"./useSlot-D_Ed8wEH.js";import"./resolveComponentProps-D7k8s6fM.js";import"./Box-CzrcP6gm.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DU014Dqo.js";import"./CircularProgress-D3NUXaEm.js";import"./OutlinedInput-BXBLTviT.js";import"./useFormControl-DTLAn0zY.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-BRjH2MYD.js";import"./debounce-Be36O1Ab.js";import"./Select-uBt0DaXV.js";import"./index-BZJhLVn1.js";import"./useSlotProps-D0WfOXpj.js";import"./Popover-WKtsi3V2.js";import"./Grow-CF5vml_o.js";import"./useTheme-CkEAvl6p.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Modal-B5E3roGC.js";import"./Portal-DImdN-2c.js";import"./Fade-DZMeUxL7.js";import"./Paper-DuuDja31.js";import"./List-C4j8HkW9.js";import"./useControlled-DTf_Avw_.js";import"./ArrowDropDown-r6vbINwi.js";import"./FormHelperText-B6Sia_IJ.js";import"./InputAdornment-CwaaKf2e.js";import"./IconButton-poK4IEU9.js";import"./MenuItem-Dxx1qaOY.js";import"./listItemIconClasses-C3Q9HATY.js";import"./listItemTextClasses-B6dAwr7X.js";import"./dividerClasses-CB1aCiuG.js";import"./gridEditRowModel-kRuTVum-.js";import"./Rating-BKulmy25.js";import"./Tooltip-YX-nko0H.js";import"./Popper-DuvlwXSO.js";import"./ReportProblem-DMys7dVf.js";import"./ListItemIcon-Dc8yN8VD.js";import"./ListItemText-BN8Ae5SM.js";import"./Chip-CjcHaI21.js";import"./Autocomplete-Cqi_qj4A.js";import"./Close-Bd7fRRpH.js";import"./autocompleteClasses-kE_FKPO1.js";import"./usePreviousProps-CnIeGkif.js";import"./ListSubheader-BBM17Tl2.js";import"./Avatar-DENX17xp.js";const D=3,E=({dataSetType:S,size:f,...T})=>{const{data:m}=x({dataSet:S,rowLength:f,maxColumns:D}),{rows:b}=m,z=m.columns.map(({field:v,headerName:L})=>({id:v,label:L||"invalid",sort:!0,disablePadding:!1,numeric:!1}));return O.jsx(k,{...T,columns:z,data:b,onClick:i("onClick row")})},It={title:"Generators/TableList",component:E,parameters:{layout:"fullscreen"}},t={args:{size:40,dataSetType:"Commodity",search:!0}},o={args:{size:40,dataSetType:"Commodity",search:!0,loading:!0}},r={args:{size:40,dataSetType:"Commodity",search:!1}},e={args:{size:40,dataSetType:"Commodity",search:!1,options:[{id:"edit",label:"Edit",onClick:i("Option edit")},{id:"remove",label:"Remove",onClick:i("Option remove")}]}};var a,s,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
