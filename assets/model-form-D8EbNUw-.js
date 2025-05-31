import{j as l,r as B}from"./iframe-CyC2w49y.js";import{G as W}from"./group-value-card-CHl0ZF69.js";import{G as j}from"./Grid-DcpqZmzV.js";import{F as S,I}from"./OutlinedInput-CWVotCN6.js";import{S as T}from"./Select-PaTnrDJm.js";import{M}from"./MenuItem-DhSoJ9i-.js";import{C,F as Z}from"./FormControlLabel-N1wXNYhP.js";import{L as K}from"./ListItemText-BuzdW83Y.js";import{a as R,T as U}from"./TimePicker-BtILcPZF.js";import{b as H}from"./DateTimePicker-t0qS6LB4.js";import{T as _}from"./TextField-DjsTrXPP.js";import{B as J}from"./Box-Bu5_Wahq.js";import{B as Q}from"./Button-BsHUy8NG.js";import{_ as k,a as q,b as o,c as V,d as X}from"./_has-aTAOOdsQ.js";function Y(t){return function a(r,i,u){switch(arguments.length){case 0:return a;case 1:return o(r)?a:k(function(n,m){return t(r,n,m)});case 2:return o(r)&&o(i)?a:o(r)?k(function(n,m){return t(n,i,m)}):o(i)?k(function(n,m){return t(r,n,m)}):q(function(n){return t(r,i,n)});default:return o(r)&&o(i)&&o(u)?a:o(r)&&o(i)?k(function(n,m){return t(n,m,u)}):o(r)&&o(u)?k(function(n,m){return t(n,i,m)}):o(i)&&o(u)?k(function(n,m){return t(r,n,m)}):o(r)?q(function(n){return t(n,i,u)}):o(i)?q(function(n){return t(r,n,u)}):o(u)?q(function(n){return t(r,i,n)}):t(r,i,u)}}}const P=Number.isInteger||function(a){return a<<0===a};function ee(t,a,r){if(P(t)&&V(r)){var i=[].concat(r);return i[t]=a,i}var u={};for(var n in r)u[n]=r[n];return u[t]=a,u}var re=q(function(a){return a==null}),te=Y(function t(a,r,i){if(a.length===0)return r;var u=a[0];if(a.length>1){var n=!re(i)&&X(u,i)&&typeof i[u]=="object"?i[u]:P(a[1])?[]:{};r=t(Array.prototype.slice.call(a,1),r,n)}return ee(u,r,i)});const ne={string:"",number:0,boolean:!1,enum:"",multienum:[],date:new Date(1970,0,1,0,0),time:new Date(1970,0,1,0,0),datetime:new Date(1970,0,1,0,0),group:{},"group[]":[],"string[]":[],"number[]":[]},A=(t,a)=>(a==null?void 0:a[t.id])||"default"in t&&t.default||ne[t.type],ae=(t,a=void 0)=>{const r={};return t.fields.forEach(i=>{if(i.type==="group"){const u={};i.value.forEach(n=>{u[n.id]=A(n,a&&a[i.id])}),r[i.id]=u}else r[i.id]=A(i,a)}),r},D=({field:t,path:a=[],value:r,dense:i,update:u,onChangeValue:n})=>{const m=e=>{e.preventDefault(),n([...a,e.target.name],e.target.checked)},F=e=>{e.preventDefault(),n([...a,e.target.name],e.target.value)},w=e=>{e.preventDefault();const{value:f}=e.target,v=typeof f=="string"?f.split(","):f;n([...a,e.target.name],v)},h=(e,f)=>{e.preventDefault();let v=e.target.value;f==="number"&&typeof v=="string"?v=Number.parseInt(e.target.value,10):f.includes("[]")&&(v=e.target.value.split(",")),n([...a,e.target.name],v)},p=(e,f)=>{n([...a,f],e)},{id:s,type:d,name:c,description:N,updatable:E=!0,required:x=!0,xs:G,sm:$,md:O,lg:z,xl:L}=t,y=!E&&u;let g;const b=i?"small":"medium";if(d==="group")g=l.jsx(W,{title:c,subtitle:N,dense:i,children:l.jsx(j,{container:!0,spacing:2,sx:{p:2},children:t.value.map(e=>l.jsx(D,{field:e,dense:i,path:[...a,s],value:r[e.id],update:u,onChangeValue:n},e.id))})});else if(d==="boolean")g=l.jsx(J,{sx:{height:1,display:"flex",alignItems:"center"},children:l.jsx(Z,{control:l.jsx(C,{name:s,size:b,onChange:m,checked:r,disabled:y}),label:c})});else if(d==="enum")g=l.jsxs(S,{fullWidth:!0,children:[l.jsx(I,{id:`${s}-select-label`,children:c}),l.jsx(T,{labelId:`${s}-select-label`,id:`${s}-select`,value:r,label:c,name:s,size:b,onChange:F,required:x,disabled:y,children:t.value.map(e=>l.jsx(M,{value:e,children:e},e))})]});else if(d==="multienum")g=l.jsxs(S,{fullWidth:!0,children:[l.jsx(I,{id:`${s}-select-label`,children:c}),l.jsx(T,{labelId:`${s}-select-label`,id:`${s}-select`,value:r||[],renderValue:e=>e.join(", "),label:c,name:s,size:b,onChange:w,required:x,disabled:y,multiple:!0,children:t.value.map(e=>l.jsxs(M,{value:e,children:[l.jsx(C,{checked:(r||[]).includes(e)}),l.jsx(K,{primary:e})]},e))})]});else if(d==="date")g=l.jsx(R,{enableAccessibleFieldDOMStructure:!1,label:c,format:t.format,value:r,slotProps:{field:{size:b}},disabled:y,onChange:e=>p(e,s)});else if(d==="time")g=l.jsx(U,{enableAccessibleFieldDOMStructure:!1,label:c,format:t.format,value:r,slotProps:{field:{size:b}},disabled:y,onChange:e=>p(e,s)});else if(d==="datetime")g=l.jsx(H,{enableAccessibleFieldDOMStructure:!1,label:c,format:t.format,value:r,slotProps:{field:{size:b}},disabled:y,onChange:e=>p(e,s)});else{if(d==="group[]")return null;d.includes("[]")?g=l.jsx(_,{required:x,type:"text",label:c,name:s,size:b,variant:"outlined",helperText:"Use comas to separate multiple values",fullWidth:!0,disabled:y,value:r.join(","),onChange:e=>h(e,d)}):g=l.jsx(_,{required:x,type:d,label:c,size:b,name:s,variant:"outlined",fullWidth:!0,value:r,disabled:y,onChange:e=>h(e,d)})}return l.jsx(j,{size:{xs:G,sm:$,md:O,lg:z,xl:L},children:g},s)};D.__docgenInfo={description:"",methods:[],displayName:"ModelFormField",props:{path:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ie=({model:t,saveButtonText:a,dense:r,onSubmit:i,initialValues:u})=>{const n=B.useMemo(()=>ae(t,u),[t,u]),[m,F]=B.useState(n),w=(p,s)=>{F(d=>te(p,s,d))},h=p=>{p.preventDefault(),i(m)};return l.jsxs(j,{container:!0,component:"form",spacing:2,onSubmit:h,children:[t.fields.map(p=>l.jsx(D,{dense:r,field:p,value:m[p.id],update:!!u,onChangeValue:w},p.id)),l.jsx(j,{size:{xs:12},children:l.jsx(Q,{type:"submit",variant:"contained",size:r?"small":"medium",children:a})})]})};ie.__docgenInfo={description:`ModelForm component is a generic form component for handling model-based forms.
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"listable",value:{name:"boolean",required:!1}},{key:"updatable",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}}]}}]}]}]}],raw:"ModelField[]",required:!0}}]}},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""},initialValues:{required:!1,tsType:{name:"T"},description:""},saveButtonText:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: T) => void",signature:{arguments:[{type:{name:"T"},name:"values"}],return:{name:"void"}}},description:""}}};export{ie as M};
