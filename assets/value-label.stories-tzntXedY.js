import{j as g}from"./jsx-runtime-D_zvdyIk.js";import"./value-edit-CM46kx0g.js";import{D as re}from"./value-displays.types-y9Dsh-vS.js";import{g as se,V as oe}from"./value-content-D5OZWNxT.js";import{L as y}from"./label-Bn_vLNKq.js";import{G as le}from"./Grid-DT1OaBEq.js";import{w as te}from"./storybook-Bd8TPGPp.js";const Y=({label:L,value:r,placeholder:v=re,color:e,variant:a})=>{const Z=se(L),ee=Array.isArray(r)?r.map((ae,b)=>g.jsx(y,{text:ae.toString()||v,variant:Array.isArray(a)?a[b]:a,color:Array.isArray(e)?e[b]:e},b)):g.jsx(y,{text:(r==null?void 0:r.toString())||v,variant:Array.isArray(a)?a[0]:a,color:Array.isArray(e)?e[0]:e});return g.jsx(oe,{label:L,children:g.jsx(le,{container:!0,gap:1,"aria-labelledby":Z,children:ee})})};Y.__docgenInfo={description:"Displays a label component value with a label",methods:[],displayName:"ValueLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Name of the displayed value"},value:{required:!1,tsType:{name:"T"},description:"Value displayed"},placeholder:{required:!1,tsType:{name:"string"},description:"String rendered if value is undefined",defaultValue:{value:'"-"',computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:`The value has to be displayed as compact or not.
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
| "success"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]}],raw:"LabelVariant[]"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const ne={title:"Components/Data Display/ValueLabel",component:Y,decorators:[te({width:200})],parameters:{layout:"centered"}},s={args:{label:"Lorem",value:"ipsum sit"}},o={args:{label:"Lorem",value:"ipsum sit",variant:"success"}},l={args:{label:"Lorem",value:1e3}},t={args:{label:"Lorem",value:["ipsum sit","amet","dolor"]}},n={args:{label:"Lorem",value:[15,9876,0]}},i={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:"error"}},m={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],variant:["error","success"]}},u={args:{label:"Lorem"}},c={args:{label:"Lorem",placeholder:"."}},d={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:"#9b3242"}},p={args:{label:"Lorem",value:["ipsum sit","amet","dolor"],color:["#9b3242","#36e3cd"]}};var f,S,V;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit"
  }
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var h,w,A;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success"
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,T,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: 1000
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var _,j,D;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"]
  }
}`,...(D=(j=t.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var q,N,M;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: [15, 9876, 0]
  }
}`,...(M=(N=n.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var O,E,G;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: "error"
  }
}`,...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var I,z,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"]
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var R,$,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Lorem"
  }
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var B,H,J;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    placeholder: "."
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: "#9b3242"
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,W,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: ["#9b3242", "#36e3cd"]
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ie=["Default","Variant","NumberAsValue","TextList","NumberList","ListSingleVariant","ListMultipleVariants","Placeholder","CustomPlaceholder","ListSingleColor","ListMultipleColors"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomPlaceholder:c,Default:s,ListMultipleColors:p,ListMultipleVariants:m,ListSingleColor:d,ListSingleVariant:i,NumberAsValue:l,NumberList:n,Placeholder:u,TextList:t,Variant:o,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{s as D,Y as V,Le as v};
