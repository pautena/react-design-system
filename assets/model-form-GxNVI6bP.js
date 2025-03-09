import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-CFahbR6w.js";import{u as z}from"./theme-BtDhr7sM.js";import{G as O}from"./group-value-card-CStfaqbW.js";import{G as j}from"./Grid-BUgJ8WKb.js";import{F as I,I as S}from"./FormControl-BKE9HHDF.js";import{S as T}from"./Select-CwadJp3l.js";import{M as C}from"./MenuItem-BrMjTRR2.js";import{C as _,F as K}from"./FormControlLabel-D0Np9tr4.js";import{L as R}from"./ListItemText-C3kBIp0a.js";import{a as U,T as H}from"./TimePicker-Cw_xjySn.js";import{b as J}from"./DateTimePicker-d6pe1OWI.js";import{T as M}from"./TextField-wluz_IDA.js";import{B as Q}from"./Box-CohR-H6x.js";import{B as V}from"./Button-CRc0Eyhl.js";import{_ as k,a as q,b as o,c as X,d as Y}from"./_has-aTAOOdsQ.js";function ee(t){return function a(r,i,u){switch(arguments.length){case 0:return a;case 1:return o(r)?a:k(function(n,m){return t(r,n,m)});case 2:return o(r)&&o(i)?a:o(r)?k(function(n,m){return t(n,i,m)}):o(i)?k(function(n,m){return t(r,n,m)}):q(function(n){return t(r,i,n)});default:return o(r)&&o(i)&&o(u)?a:o(r)&&o(i)?k(function(n,m){return t(n,m,u)}):o(r)&&o(u)?k(function(n,m){return t(n,i,m)}):o(i)&&o(u)?k(function(n,m){return t(r,n,m)}):o(r)?q(function(n){return t(n,i,u)}):o(i)?q(function(n){return t(r,n,u)}):o(u)?q(function(n){return t(r,i,n)}):t(r,i,u)}}}const P=Number.isInteger||function(a){return a<<0===a};function re(t,a,r){if(P(t)&&X(r)){var i=[].concat(r);return i[t]=a,i}var u={};for(var n in r)u[n]=r[n];return u[t]=a,u}var te=q(function(a){return a==null}),ne=ee(function t(a,r,i){if(a.length===0)return r;var u=a[0];if(a.length>1){var n=!te(i)&&Y(u,i)&&typeof i[u]=="object"?i[u]:P(a[1])?[]:{};r=t(Array.prototype.slice.call(a,1),r,n)}return re(u,r,i)});const ae={string:"",number:0,boolean:!1,enum:"",multienum:[],date:new Date(1970,0,1,0,0),time:new Date(1970,0,1,0,0),datetime:new Date(1970,0,1,0,0),group:{},"group[]":[],"string[]":[],"number[]":[]},A=(t,a)=>a&&a[t.id]||"default"in t&&t.default||ae[t.type],ie=(t,a=void 0)=>{const r={};return t.fields.forEach(i=>{if(i.type==="group"){const u={};i.value.forEach(n=>{u[n.id]=A(n,a&&a[i.id])}),r[i.id]=u}else r[i.id]=A(i,a)}),r},B=({field:t,path:a=[],value:r,dense:i,update:u,onChangeValue:n})=>{const m=e=>{e.preventDefault(),n([...a,e.target.name],e.target.checked)},w=e=>{e.preventDefault(),n([...a,e.target.name],e.target.value)},F=e=>{e.preventDefault();const{value:f}=e.target,b=typeof f=="string"?f.split(","):f;n([...a,e.target.name],b)},h=(e,f)=>{e.preventDefault();let b=e.target.value;f==="number"&&typeof b=="string"?b=parseInt(e.target.value,10):f.includes("[]")&&(b=e.target.value.split(",")),n([...a,e.target.name],b)},p=(e,f)=>{n([...a,f],e)};z({lightWeight:200,darkWeight:800});const{id:s,type:d,name:c,description:G,updatable:N=!0,required:x=!0,xs:E,sm:W,md:$,lg:L,xl:Z}=t,y=!N&&u;let g;const v=i?"small":"medium";if(d==="group")g=l.jsx(O,{title:c,subtitle:G,dense:i,children:l.jsx(j,{container:!0,spacing:2,sx:{p:2},children:t.value.map(e=>l.jsx(B,{field:e,dense:i,path:[...a,s],value:r[e.id],update:u,onChangeValue:n},e.id))})});else if(d==="boolean")g=l.jsx(Q,{sx:{height:1,display:"flex",alignItems:"center"},children:l.jsx(K,{control:l.jsx(_,{name:s,size:v,onChange:m,checked:r,disabled:y}),label:c})});else if(d==="enum")g=l.jsxs(I,{fullWidth:!0,children:[l.jsx(S,{id:`${s}-select-label`,children:c}),l.jsx(T,{labelId:`${s}-select-label`,id:`${s}-select`,value:r,label:c,name:s,size:v,onChange:w,required:x,disabled:y,children:t.value.map(e=>l.jsx(C,{value:e,children:e},e))})]});else if(d==="multienum")g=l.jsxs(I,{fullWidth:!0,children:[l.jsx(S,{id:`${s}-select-label`,children:c}),l.jsx(T,{labelId:`${s}-select-label`,id:`${s}-select`,value:r||[],renderValue:e=>e.join(", "),label:c,name:s,size:v,onChange:F,required:x,disabled:y,multiple:!0,children:t.value.map(e=>l.jsxs(C,{value:e,children:[l.jsx(_,{checked:(r||[]).includes(e)}),l.jsx(R,{primary:e})]},e))})]});else if(d==="date")g=l.jsx(U,{label:c,format:t.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:e=>p(e,s)});else if(d==="time")g=l.jsx(H,{label:c,format:t.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:e=>p(e,s)});else if(d==="datetime")g=l.jsx(J,{label:c,format:t.format,value:r,slotProps:{field:{size:v}},disabled:y,onChange:e=>p(e,s)});else{if(d==="group[]")return null;d.includes("[]")?g=l.jsx(M,{required:x,type:"text",label:c,name:s,size:v,variant:"outlined",helperText:"Use comas to separate multiple values",fullWidth:!0,disabled:y,value:r.join(","),onChange:e=>h(e,d)}):g=l.jsx(M,{required:x,type:d,label:c,size:v,name:s,variant:"outlined",fullWidth:!0,value:r,disabled:y,onChange:e=>h(e,d)})}return l.jsx(j,{item:!0,xs:E,sm:W,md:$,lg:L,xl:Z,children:g},s)};B.__docgenInfo={description:"",methods:[],displayName:"ModelFormField",props:{path:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ue=({model:t,saveButtonText:a,dense:r,onSubmit:i,initialValues:u})=>{const n=D.useMemo(()=>ie(t,u),[t,u]),[m,w]=D.useState(n),F=(p,s)=>{w(d=>ne(p,s,d))},h=p=>{p.preventDefault(),i(m)};return l.jsxs(j,{container:!0,component:"form",spacing:2,onSubmit:h,children:[t.fields.map(p=>l.jsx(B,{dense:r,field:p,value:m[p.id],update:!!u,onChangeValue:F},p.id)),l.jsx(j,{item:!0,xs:12,children:l.jsx(V,{type:"submit",variant:"contained",size:r?"small":"medium",children:a})})]})};ue.__docgenInfo={description:`ModelForm component is a generic form component for handling model-based forms.
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
