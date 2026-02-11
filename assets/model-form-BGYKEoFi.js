import{j as u,r as S}from"./iframe-EZlCblT_.js";import{G as Z}from"./group-value-card-2nxrjXbw.js";import{G as j}from"./Grid-eQci8erC.js";import{F as I,I as T}from"./OutlinedInput-BIU87u9h.js";import{S as M}from"./Select-DnjgMm-q.js";import{M as C}from"./MenuItem-BEYfrdDw.js";import{C as _,F as O}from"./FormControlLabel-lE2N_E4I.js";import{L as K}from"./ListItemText-CuI7_CRu.js";import{a as R,T as U}from"./TimePicker-CuLs7M0z.js";import{b as H}from"./DateTimePicker-CcE3dUVk.js";import{T as A}from"./TextField-BKM0WcM0.js";import{B as J}from"./Box-C0oK-ZD8.js";import{B as Q}from"./Button-fNy9YLcp.js";import{_ as k,a as q,b as m,c as V}from"./_isArray-CtJTwltk.js";function X(e){return function t(r,i,l){switch(arguments.length){case 0:return t;case 1:return m(r)?t:k(function(a,s){return e(r,a,s)});case 2:return m(r)&&m(i)?t:m(r)?k(function(a,s){return e(a,i,s)}):m(i)?k(function(a,s){return e(r,a,s)}):q(function(a){return e(r,i,a)});default:return m(r)&&m(i)&&m(l)?t:m(r)&&m(i)?k(function(a,s){return e(a,s,l)}):m(r)&&m(l)?k(function(a,s){return e(a,i,s)}):m(i)&&m(l)?k(function(a,s){return e(r,a,s)}):m(r)?q(function(a){return e(a,i,l)}):m(i)?q(function(a){return e(r,a,l)}):m(l)?q(function(a){return e(r,i,a)}):e(r,i,l)}}}const D=Number.isInteger||function(t){return t<<0===t};function Y(e,t){var r=e<0?t.length+e:e;return t[r]}function ee(e,t){if(t!=null)return D(e)?Y(e,t):t[e]}function re(e,t,r){if(D(e)&&V(r)){var i=e<0?r.length+e:e,l=[].concat(r);return l[i]=t,l}var a={};for(var s in r)a[s]=r[s];return a[e]=t,a}var ne=q(function(t){return t==null}),te=X(function e(t,r,i){if(t.length===0)return r;var l=t[0];if(t.length>1){var a=ee(l,i);(ne(a)||typeof a!="object")&&(a=D(t[1])?[]:{}),r=e(Array.prototype.slice.call(t,1),r,a)}return re(l,r,i)});const ae={string:"",number:0,boolean:!1,enum:"",multienum:[],date:new Date(1970,0,1,0,0),time:new Date(1970,0,1,0,0),datetime:new Date(1970,0,1,0,0),group:{},"group[]":[],"string[]":[],"number[]":[]},P=(e,t)=>t?.[e.id]||"default"in e&&e.default||ae[e.type],ie=(e,t=void 0)=>{const r={};return e.fields.forEach(i=>{if(i.type==="group"){const l={};i.value.forEach(a=>{l[a.id]=P(a,t&&t[i.id])}),r[i.id]=l}else r[i.id]=P(i,t)}),r},B=({field:e,path:t=[],value:r,dense:i,update:l,onChangeValue:a})=>{const s=n=>{n.preventDefault(),a([...t,n.target.name],n.target.checked)},F=n=>{n.preventDefault(),a([...t,n.target.name],n.target.value)},w=n=>{n.preventDefault();const{value:f}=n.target,b=typeof f=="string"?f.split(","):f;a([...t,n.target.name],b)},h=(n,f)=>{n.preventDefault();let b=n.target.value;f==="number"&&typeof b=="string"?b=Number.parseInt(n.target.value,10):f.includes("[]")&&(b=n.target.value.split(",")),a([...t,n.target.name],b)},p=(n,f)=>{a([...t,f],n)},{id:o,type:d,name:c,description:N,updatable:E=!0,required:x=!0,xs:G,sm:$,md:z,lg:L,xl:W}=e,y=!E&&l;let g;const v=i?"small":"medium";if(d==="group")g=u.jsx(Z,{title:c,subtitle:N,dense:i,children:u.jsx(j,{container:!0,spacing:2,sx:{p:2},children:e.value.map(n=>u.jsx(B,{field:n,dense:i,path:[...t,o],value:r[n.id],update:l,onChangeValue:a},n.id))})});else if(d==="boolean")g=u.jsx(J,{sx:{height:1,display:"flex",alignItems:"center"},children:u.jsx(O,{control:u.jsx(_,{name:o,size:v,onChange:s,checked:r,disabled:y}),label:c})});else if(d==="enum")g=u.jsxs(I,{fullWidth:!0,children:[u.jsx(T,{id:`${o}-select-label`,children:c}),u.jsx(M,{labelId:`${o}-select-label`,id:`${o}-select`,value:r,label:c,name:o,size:v,onChange:F,required:x,disabled:y,children:e.value.map(n=>u.jsx(C,{value:n,children:n},n))})]});else if(d==="multienum")g=u.jsxs(I,{fullWidth:!0,children:[u.jsx(T,{id:`${o}-select-label`,children:c}),u.jsx(M,{labelId:`${o}-select-label`,id:`${o}-select`,value:r||[],renderValue:n=>n.join(", "),label:c,name:o,size:v,onChange:w,required:x,disabled:y,multiple:!0,children:e.value.map(n=>u.jsxs(C,{value:n,children:[u.jsx(_,{checked:(r||[]).includes(n)}),u.jsx(K,{primary:n})]},n))})]});else if(d==="date")g=u.jsx(R,{enableAccessibleFieldDOMStructure:!1,label:c,format:e.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:n=>p(n,o)});else if(d==="time")g=u.jsx(U,{enableAccessibleFieldDOMStructure:!1,label:c,format:e.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:n=>p(n,o)});else if(d==="datetime")g=u.jsx(H,{enableAccessibleFieldDOMStructure:!1,label:c,format:e.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:n=>p(n,o)});else{if(d==="group[]")return null;d.includes("[]")?g=u.jsx(A,{required:x,type:"text",label:c,name:o,size:v,variant:"outlined",helperText:"Use comas to separate multiple values",fullWidth:!0,disabled:y,value:r.join(","),onChange:n=>h(n,d)}):g=u.jsx(A,{required:x,type:d,label:c,size:v,name:o,variant:"outlined",fullWidth:!0,value:r,disabled:y,onChange:n=>h(n,d)})}return u.jsx(j,{size:{xs:G,sm:$,md:z,lg:L,xl:W},children:g},o)};B.__docgenInfo={description:"",methods:[],displayName:"ModelFormField",props:{path:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ue=({model:e,saveButtonText:t,dense:r,onSubmit:i,initialValues:l})=>{const a=S.useMemo(()=>ie(e,l),[e,l]),[s,F]=S.useState(a),w=(p,o)=>{F(d=>te(p,o,d))},h=p=>{p.preventDefault(),i(s)};return u.jsxs(j,{container:!0,component:"form",spacing:2,onSubmit:h,children:[e.fields.map(p=>u.jsx(B,{dense:r,field:p,value:s[p.id],update:!!l,onChangeValue:w},p.id)),u.jsx(j,{size:{xs:12},children:u.jsx(Q,{type:"submit",variant:"contained",size:r?"small":"medium",children:t})})]})};ue.__docgenInfo={description:`ModelForm component is a generic form component for handling model-based forms.
It renders form fields based on the provided model and handles form submission.`,methods:[],displayName:"ModelForm",props:{model:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fields: ModelField[];
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"intersection",raw:"Base & Breakpoints & Fields",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  description: string;
  name: string;
  listable?: boolean;
  updatable?: boolean;
  required?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"listable",value:{name:"boolean",required:!1}},{key:"updatable",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}`,signature:{properties:[{key:"xs",value:{name:"number",required:!1}},{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}},{name:"union",raw:"SingleFields | GroupField | ArrayGroupField",elements:[{name:"union",raw:`| StringField
| NumberField
| StringArrayField
| NumberArrayField
| BooleanField
| EnumField
| MultiEnumField
| DateField
| TimeField
| DatetimeField`,elements:[{name:"signature",type:"object",raw:`{
  type: "string";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"string"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "number";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"number"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "string[]";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"string[]"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "number[]";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"number[]"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "boolean";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"boolean"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "enum";
  value: string[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"enum"',required:!0}},{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "multienum";
  value: string[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"multienum"',required:!0}},{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "date";
  format: string;
  default: Date;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"date"',required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"default",value:{name:"Date",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "time";
  format: string;
  default: Date;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"time"',required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"default",value:{name:"Date",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "datetime";
  format: string;
  default: Date;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"datetime"',required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"default",value:{name:"Date",required:!0}}]}}]},{name:"intersection",raw:`{
  type: "group";
  value: (Base & Breakpoints & SingleFields)[];
} & Base`,elements:[{name:"signature",type:"object",raw:`{
  type: "group";
  value: (Base & Breakpoints & SingleFields)[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"value",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Base & Breakpoints & SingleFields)[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  id: string;
  description: string;
  name: string;
  listable?: boolean;
  updatable?: boolean;
  required?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"listable",value:{name:"boolean",required:!1}},{key:"updatable",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}}]}}]},{name:"intersection",raw:`{
  type: "group[]";
  value: (Base & Breakpoints & SingleFields)[];
} & Base`,elements:[{name:"signature",type:"object",raw:`{
  type: "group[]";
  value: (Base & Breakpoints & SingleFields)[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group[]"',required:!0}},{key:"value",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Base & Breakpoints & SingleFields)[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  id: string;
  description: string;
  name: string;
  listable?: boolean;
  updatable?: boolean;
  required?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"listable",value:{name:"boolean",required:!1}},{key:"updatable",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}}]}}]}]}]}],raw:"ModelField[]",required:!0}}]}},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""},initialValues:{required:!1,tsType:{name:"T"},description:""},saveButtonText:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: T) => void",signature:{arguments:[{type:{name:"T"},name:"values"}],return:{name:"void"}}},description:""}}};export{ue as M};
