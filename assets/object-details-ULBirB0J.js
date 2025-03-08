import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{V as j}from"./value-boolean-CN5XB4JV.js";import{V as x}from"./value-datetime-Bbop7EY7.js";import{V as c}from"./value-text-D1VDanjm.js";import{G as b}from"./group-value-card-BuiWQH8O.js";import{V as v}from"./value-item-CgmfSW6S.js";import{G as p}from"./Grid-CKxAJcKv.js";import{D as w}from"./DataGrid-CNE3N_0x.js";const q=(l=12)=>{const i=(e,t,r)=>{const n=e[t];return e[t]+=r,e[t]>l?(e[t]=r,!1):(e[t]==l&&(e[t]=0),n>0)};return{xs:0,sm:0,md:0,lg:0,xl:0,increment:function({xs:e=0,sm:t=0,md:r=0,lg:n=0,xl:a=0}){const s=t||e,o=r||s,m=n||o,d=a||m;return{xs:i(this,"xs",e),sm:i(this,"sm",s),md:i(this,"md",o),lg:i(this,"lg",m),xl:i(this,"xl",d)}}}},f=(l,i,{dense:e}={})=>{const{id:t,name:r,type:n}=l,a=i[t];return n==="boolean"?u.jsx(j,{dense:e,label:r,value:a}):n==="date"||n==="time"||n==="datetime"?u.jsx(x,{dense:e,label:r,value:a,format:l.format}):typeof a=="object"&&!Array.isArray(a)?u.jsx(c,{dense:e,label:r,value:JSON.stringify(a)}):u.jsx(c,{dense:e,label:r,value:a==null?void 0:a.toString()})},F=({field:{name:l,description:i,value:e},instance:t,dense:r})=>{const n=[{field:"id",headerName:"ID",width:70}];e.forEach(s=>{n.push({field:s.id,headerName:s.name})});const a=t.map((s,o)=>({id:o,...s}));return u.jsx(b,{title:l,subtitle:i,dense:r,children:u.jsx(p,{item:!0,xs:12,children:u.jsx(w,{rows:a,columns:n,density:r?"compact":"standard",disableRowSelectionOnClick:!0,pageSizeOptions:[5],initialState:{pagination:{paginationModel:{pageSize:5}}},sx:{height:400}})})})},h=({field:{name:l,description:i,value:e},instance:t,dense:r})=>{const n=q();return u.jsx(b,{title:l,subtitle:i,dense:r,children:e.map(a=>{const{id:s,xs:o,sm:m,md:d,lg:y,xl:g}=a,k=n.increment(a);return u.jsx(v,{xs:o,sm:m,md:d,lg:y,xl:g,bordered:k,children:f(a,t,{dense:r})},s)})})},B=({model:l,instance:i,dense:e})=>{const t=q();return u.jsx(p,{container:!0,spacing:e?1:2,children:l.fields.map(r=>{const{id:n,type:a,xs:s=3,sm:o=0,md:m=0,lg:d=0,xl:y=0}=r;if(a==="group")return t.increment({xs:12}),u.jsx(p,{item:!0,xs:12,children:u.jsx(h,{field:r,instance:i[n],dense:e})},n);if(a==="group[]")return t.increment({xs:12}),u.jsx(p,{item:!0,xs:12,children:u.jsx(F,{field:r,instance:i[n],dense:e})},n);const g=t.increment(r);return u.jsx(v,{xs:s,sm:o,md:m,lg:d,xl:y,bordered:g,children:f(r,i,{dense:e})},n)})})};B.__docgenInfo={description:"",methods:[],displayName:"ObjectDetails",props:{model:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"listable",value:{name:"boolean",required:!1}},{key:"updatable",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}}]}}]}]}]}],raw:"ModelField[]",required:!0}}]}},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""},instance:{required:!0,tsType:{name:"T"},description:""}}};export{B as O};
