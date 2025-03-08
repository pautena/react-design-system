import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./value-edit-CdFL5piz.js";import{D as ae}from"./value-displays.types-y9Dsh-vS.js";import{g as se,V as oe}from"./value-content-BY9asbD3.js";import{L as y}from"./label-Buz4B1am.js";import{G as te}from"./Grid-CKxAJcKv.js";import{w as le}from"./storybook-BExNV_A2.js";import"./index-CFahbR6w.js";import"./Typography-BXSoh8s2.js";import"./identifier-ChVxdG4r.js";import"./memoTheme-kZCwlU27.js";import"./emotion-react.browser.esm-C1MoURgL.js";import"./createSimplePaletteValueFilter-BX9OVMun.js";import"./extendSxProp-C7aHAb1N.js";import"./Clear-CjVwwYeo.js";import"./InputAdornment-B75dWK2u.js";import"./useFormControl-Bi_or6kT.js";import"./Button-C1N17xc9.js";import"./CircularProgress-5NeNm8J5.js";import"./useTheme-CfVHYLf1.js";import"./IconButton-X2xkCwyW.js";import"./Box-CLV6Ujku.js";import"./Tooltip-BlCF73bJ.js";import"./index-n2pnZwpZ.js";import"./useSlot-HZ3RMWsh.js";import"./resolveComponentProps-BnY4DdR-.js";import"./useControlled-cx3qaOIq.js";import"./Grow-DSkAUVrm.js";import"./index-D_4lP2oU.js";import"./index-chp1rBSu.js";import"./Popper-BhXwPKmp.js";import"./Portal-Bjszn9Vx.js";import"./useSlotProps-BuS7XknB.js";import"./notification-center.provider-DGQlM2s5.js";import"./ClickAwayListener-CE8GBNsl.js";import"./Paper-0PE78at3.js";import"./Alert-CoN8pKaz.js";import"./Close-D7PaC3tu.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./useThemeProps-BwIDZe-9.js";import"./useThemeProps-B6n0nbSt.js";const $=({label:L,value:a,placeholder:v=ae,color:e,variant:r})=>{const P=se(L),ee=Array.isArray(a)?a.map((re,b)=>s.jsx(y,{text:re.toString()||v,variant:Array.isArray(r)?r[b]:r,color:Array.isArray(e)?e[b]:e},b)):s.jsx(y,{text:(a==null?void 0:a.toString())||v,variant:Array.isArray(r)?r[0]:r,color:Array.isArray(e)?e[0]:e});return s.jsx(oe,{label:L,children:s.jsx(te,{container:!0,gap:1,"aria-labelledby":P,children:ee})})};$.__docgenInfo={description:"Displays a label component value with a label",methods:[],displayName:"ValueLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Name of the displayed value"},value:{required:!1,tsType:{name:"T"},description:"Value displayed"},placeholder:{required:!1,tsType:{name:"string"},description:"String rendered if value is undefined",defaultValue:{value:'"-"',computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:`The value has to be displayed as compact or not.
False by default`},variant:{required:!1,tsType:{name:"union",raw:"LabelVariant | LabelVariant[]",elements:[{name:"union",raw:`| "primary"
| "secondary"
| "default"
| "info"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},{name:"Array",elements:[{name:"union",raw:`| "primary"
| "secondary"
| "default"
| "info"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]}],raw:"LabelVariant[]"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Xe={title:"Components/Value displays/ValueLabel",component:$,decorators:[le({width:200})],parameters:{layout:"centered"}},o={args:{label:"Lorem",value:"ipsum sit"}},t={args:{label:"Lorem",value:"ipsum sit",variant:"success"}},l={args:{label:"Lorem",value:1e3}},n={args:{label:"Lorem",value:["ipsum sit","amet","dolor"]}},i={args:{label:"Lorem",value:[15,9876,0]}},m={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:"error"}},u={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:["error","success"]}},p={args:{label:"Lorem"}},c={args:{label:"Lorem",placeholder:"."}},d={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:"#9b3242"}},g={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:["#9b3242","#36e3cd"]}};var f,V,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit"
  }
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var h,w,A;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success"
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,C,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 1000
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,q,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"]
  }
}`,...(N=(q=n.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var D,_,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: [15, 9876, 0]
  }
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var E,G,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: "error"
  }
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var F,O,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"]
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var k,z,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Lorem"
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    placeholder: "."
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: "#9b3242"
  }
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: ["#9b3242", "#36e3cd"]
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ye=["Default","Variant","NumberAsValue","TextList","NumberList","ListSingleVariant","ListMultipleVariants","Placeholder","CustomPlaceholder","ListSingleColor","ListMultipleColors"];export{c as CustomPlaceholder,o as Default,g as ListMultipleColors,u as ListMultipleVariants,d as ListSingleColor,m as ListSingleVariant,l as NumberAsValue,i as NumberList,p as Placeholder,n as TextList,t as Variant,Ye as __namedExportsOrder,Xe as default};
