import{r as b,B as ce,j as t,e as Z,O as K,P as L,Q as ge,L as ye,S as ve,t as fe,U as H,b as ee,l as ne}from"./iframe-EZlCblT_.js";import{b as be}from"./storybook-CoqJfa05.js";import{c as he,d as qe,a as Se,T as R,b as ke,e as we}from"./TableSortLabel-DE9sUoqY.js";import{T as O}from"./TableCell-CAASfeZj.js";import{B as z}from"./Box-C0oK-ZD8.js";import{C as xe}from"./CircularProgress-CWLujbj3.js";import{T as N,c as D}from"./Typography-vAnbId3H.js";import{T as Te,a as Ce,t as P,b as je,c as Fe}from"./ToggleButton-BBJ-a-Ae.js";import{C as Be}from"./Close-D-xHuLnO.js";import{T as I}from"./TextField-BKM0WcM0.js";import{I as Y}from"./InputAdornment-BItWONsH.js";import{P as Ie}from"./Popover-CD-umd1q.js";import{a as te,s as ae,m as Ae}from"./memoTheme-CjfLGB6G.js";import{s as ze}from"./styled-CQAdqEOk.js";import{u as De}from"./useThemeProps-DymWMTR7.js";import{a as re,g as Qe}from"./generateUtilityClasses-CoM_PQv9.js";import{B as Re}from"./Button-fNy9YLcp.js";import{I as ie}from"./IconButton-CoVD8RR9.js";import{M as B}from"./MenuItem-BEYfrdDw.js";import{P as Oe}from"./Paper-C0CMzwYM.js";import{C as Pe}from"./Chip-BGf5tmcS.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center.provider-4_hiLkGe.js";import"./useSlot-JprQW5-3.js";import"./createSimplePaletteValueFilter-BROrGcBZ.js";import"./useTheme-BkEo2tXZ.js";import"./ClickAwayListener-N12zeSeK.js";import"./Grow-CXlVsDrX.js";import"./index-Bw2dNR8W.js";import"./index-BKuDT_6P.js";import"./ownerDocument-DW-IO8s5.js";import"./Close-BKTzgdKH.js";import"./format-DwlqC9k_.js";import"./KeyboardArrowRight-BgeXng0c.js";import"./OutlinedInput-BIU87u9h.js";import"./useFormControl-D9P9FxP1.js";import"./isMuiElement-DscGPJ5R.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Toolbar-BTLxkv4d.js";import"./Select-DnjgMm-q.js";import"./useSlotProps-X_D2_fbs.js";import"./Modal-DotIMusy.js";import"./Portal-BsEwugbi.js";import"./getActiveElement-BQgAPKnO.js";import"./Fade-0A1TFkgc.js";import"./List-B1cC0BmG.js";import"./useControlled-NOaR8TS5.js";import"./ArrowDropDown-CHFH1wO3.js";import"./FormHelperText-Dqyff_7j.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";const $e=fe(),Me=ze("div",{name:"MuiStack",slot:"Root"});function We(e){return De({props:e,name:"MuiStack",defaultTheme:$e})}function Ne(e,n){const a=b.Children.toArray(e).filter(Boolean);return a.reduce((i,p,r)=>(i.push(p),r<a.length-1&&i.push(b.cloneElement(n,{key:`separator-${r}`})),i),[])}const Ve=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Le=({ownerState:e,theme:n})=>{let a={display:"flex",flexDirection:"column",...K({theme:n},L({values:e.direction,breakpoints:n.breakpoints.values}),i=>({flexDirection:i}))};if(e.spacing){const i=ge(n),p=Object.keys(n.breakpoints.values).reduce((m,d)=>((typeof e.spacing=="object"&&e.spacing[d]!=null||typeof e.direction=="object"&&e.direction[d]!=null)&&(m[d]=!0),m),{}),r=L({values:e.direction,base:p}),s=L({values:e.spacing,base:p});typeof r=="object"&&Object.keys(r).forEach((m,d,c)=>{if(!r[m]){const q=d>0?r[c[d-1]]:"column";r[m]=q}}),a=ye(a,K({theme:n},s,(m,d)=>e.useFlexGap?{gap:H(i,m)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ve(d?r[d]:e.direction)}`]:H(i,m)}}))}return a=ve(n.breakpoints,a),a};function Ge(e={}){const{createStyledComponent:n=Me,useThemeProps:a=We,componentName:i="MuiStack"}=e,p=()=>te({root:["root"]},m=>re(i,m),{}),r=n(Le);return b.forwardRef(function(m,d){const c=a(m),k=ce(c),{component:q="div",direction:l="column",spacing:y=0,divider:u,children:v,className:T,useFlexGap:C=!1,...f}=k,x={direction:l,spacing:y,useFlexGap:C},h=p();return t.jsx(r,{as:q,ownerState:x,ref:d,className:Z(h.root,T),...f,children:u?Ne(v,u):v})})}function Ue(e){return b.Children.toArray(e).filter(n=>b.isValidElement(n))}const U=Ge({createStyledComponent:ae("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>ee({props:e,name:"MuiStack"})});function _e(e){return re("MuiToggleButtonGroup",e)}const g=Qe("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Ee=e=>{const{classes:n,orientation:a,fullWidth:i,disabled:p}=e,r={root:["root",a,i&&"fullWidth"],grouped:["grouped",`grouped${ne(a)}`,p&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return te(r,_e,n)},Ke=ae("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[{[`& .${g.grouped}`]:n.grouped},{[`& .${g.grouped}`]:n[`grouped${ne(a.orientation)}`]},{[`& .${g.firstButton}`]:n.firstButton},{[`& .${g.lastButton}`]:n.lastButton},{[`& .${g.middleButton}`]:n.middleButton},n.root,a.orientation==="vertical"&&n.vertical,a.fullWidth&&n.fullWidth]}})(Ae(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${g.grouped}`]:{[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderTop:0,marginTop:0}},[`& .${g.firstButton},& .${g.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${g.lastButton},& .${g.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${g.lastButton}.${P.disabled},& .${g.middleButton}.${P.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${g.grouped}`]:{[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${g.firstButton},& .${g.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${g.lastButton},& .${g.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${g.lastButton}.${P.disabled},& .${g.middleButton}.${P.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),He=b.forwardRef(function(n,a){const i=ee({props:n,name:"MuiToggleButtonGroup"}),{children:p,className:r,color:s="standard",disabled:o=!1,exclusive:m=!1,fullWidth:d=!1,onChange:c,orientation:k="horizontal",size:q="medium",value:l,...y}=i,u={...i,disabled:o,fullWidth:d,orientation:k,size:q},v=Ee(u),T=b.useCallback((S,w)=>{if(!c)return;const F=l&&l.indexOf(w);let Q;l&&F>=0?(Q=l.slice(),Q.splice(F,1)):Q=l?l.concat(w):[w],c(S,Q)},[c,l]),C=b.useCallback((S,w)=>{c&&c(S,l===w?null:w)},[c,l]),f=b.useMemo(()=>({className:v.grouped,onChange:m?C:T,value:l,size:q,fullWidth:d,color:s,disabled:o}),[v.grouped,m,C,T,l,q,d,s,o]),x=Ue(p),h=x.length,j=S=>{const w=S===0,F=S===h-1;return w&&F?"":w?v.firstButton:F?v.lastButton:v.middleButton};return t.jsx(Ke,{role:"group",className:Z(v.root,r),ref:a,ownerState:u,...y,children:t.jsx(Te.Provider,{value:f,children:x.map((S,w)=>t.jsx(Ce.Provider,{value:j(w),children:S},w))})})}),le=({data:e,columns:n,loading:a,emptyMessage:i,sorting:p=[],onSortingChange:r,onRowClick:s,getRowId:o})=>{const m=Math.max(n.length,1),d=!a&&e.length===0,c=!!s,k=l=>{if(!r)return;const y=p.find(u=>u.id===l);y?y.desc?r([]):r([{id:l,desc:!0}]):r([{id:l,desc:!1}])},q=l=>{const y=p.find(u=>u.id===l);return y?y.desc?"desc":"asc":!1};return t.jsx(he,{children:t.jsxs(qe,{size:"small","aria-busy":a,children:[t.jsx(Se,{sx:{backgroundColor:"grey.50"},children:t.jsx(R,{children:n.map(l=>{const y=q(l.id),u=l.enableSorting&&r;return t.jsx(O,{align:l.meta?.align,sortDirection:y,sx:{fontWeight:600,color:"text.secondary",width:l.meta?.width,minWidth:l.meta?.minWidth,maxWidth:l.meta?.maxWidth},children:u?t.jsx(ke,{active:y!==!1,direction:y===!1?"asc":y,onClick:()=>k(l.id),children:l.header}):l.header},l.id)})})}),t.jsx(we,{children:a?t.jsx(R,{children:t.jsx(O,{colSpan:m,children:t.jsxs(z,{display:"flex",alignItems:"center",gap:1,py:2,children:[t.jsx(xe,{size:20}),t.jsx(N,{variant:"body2",children:"Loading"})]})})}):d?t.jsx(R,{children:t.jsx(O,{colSpan:m,children:t.jsx(N,{variant:"body2",color:"text.secondary",py:2,children:i})})}):e.map((l,y)=>{const u=o?o(l,y):String(y);return t.jsx(R,{hover:c,onClick:s?()=>s(l):void 0,sx:c?{cursor:"pointer"}:void 0,children:n.map(v=>{const T=v.accessorKey?l[v.accessorKey]:void 0,C=v.cell?v.cell(l):String(T??"");return t.jsx(O,{align:v.meta?.align,sx:{width:v.meta?.width,minWidth:v.meta?.minWidth,maxWidth:v.meta?.maxWidth},children:C},v.id)})},u)})})]})})};le.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  header: ReactNode;
  accessorKey?: keyof TData;
  cell?: (row: TData) => ReactNode;
  enableSorting?: boolean;
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"header",value:{name:"ReactNode",required:!0}},{key:"accessorKey",value:{name:"TData",required:!1}},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1}},{key:"enableSorting",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  align?: TableCellProps["align"];
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:'TableCellProps["align"]',raw:'TableCellProps["align"]',required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]},required:!1}}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},emptyMessage:{required:!0,tsType:{name:"string"},description:""},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"desc",value:{name:"boolean",required:!0}}]}}],raw:`Array<{
  id: string;
  desc: boolean;
}>`},description:"",defaultValue:{value:"[]",computed:!1}},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(sorting: SortingState) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"desc",value:{name:"boolean",required:!0}}]}}],raw:`Array<{
  id: string;
  desc: boolean;
}>`},name:"sorting"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:""},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""}}};const se=({pagination:e,onPaginationChange:n,rowCount:a,pageSizeOptions:i})=>t.jsx(je,{component:"div",count:a,page:e.pageIndex,onPageChange:(p,r)=>n(s=>({...s,pageIndex:r})),rowsPerPage:e.pageSize,onRowsPerPageChange:p=>{n(r=>({...r,pageIndex:0,pageSize:Number(p.target.value)}))},rowsPerPageOptions:i,labelDisplayedRows:({from:p,to:r,count:s,page:o})=>s===-1?`Page ${o+1}`:`${p}-${r} of ${s}`});se.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  pageIndex: number;
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}}]}},description:""},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  pageIndex: number;
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const Ye=D(t.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),Je=D(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),Xe=D(t.jsx("path",{d:"M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"})),Ze=D(t.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),en=D(t.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),nn=["eq"],oe={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},tn=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,an=(e,n)=>e.find(a=>a.name===n),_=e=>e?.ops?.length?e.ops:nn,G=(e,n,a)=>n==="isnull"||e?.type==="boolean"?a==="false"?"false":"true":a??"",J=(e,n)=>n?.options?.length?n.options.find(a=>a.value===e)?.label??e:e,rn=(e,n)=>{const a=n?.label??e.field,i=(e.value??"").trim();if(e.op==="isnull")return`${a} ${i!=="false"?"is null":"is not null"}`;if(!i)return"";const p=oe[e.op]??e.op;if(e.op==="in"){const m=i.split(",").map(d=>d.trim()).filter(Boolean).map(d=>J(d,n)).join(", ");return`${a} ${p} (${m})`}const r=J(i,n),o=!n?.type||n.type==="string"||n.type==="date"||n.type==="datetime"?`"${r}"`:r;return`${a} ${p} ${o}`},ln=(e,n)=>{if(!e.length)return"";const a=new Map(n.map(i=>[i.name,i]));return e.map(i=>rn(i,a.get(i.field))).filter(Boolean).join(" AND ")},sn=({filter:e,fields:n,fieldMap:a,onFieldChange:i,onOpChange:p,onValueChange:r,onRemove:s})=>{const o=a.get(e.field),m=_(o),d=e.op==="in"?"Values":"Value",c=o?.type==="number"?"number":o?.type==="date"?"date":o?.type==="datetime"?"datetime-local":"text",k=o?.type==="date"||o?.type==="datetime",q=o?.placeholder??(e.op==="in"?"Comma-separated values":void 0),l=o?.options??[],y=l.length>0&&(e.op==="eq"||e.op==="neq");return t.jsxs(U,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"stretch",sm:"center"},children:[t.jsx(I,{select:!0,size:"small",label:"Field",value:e.field,onChange:u=>i(e.id,u.target.value),sx:{minWidth:160},children:n.map(u=>t.jsx(B,{value:u.name,children:u.label},u.name))}),t.jsx(He,{exclusive:!0,size:"small",color:"primary",value:e.op,onChange:(u,v)=>{v!==null&&p(e.id,v)},sx:{minWidth:150,alignSelf:"center"},children:m.map(u=>t.jsx(Fe,{value:u,children:oe[u]??u},u))}),e.op==="isnull"?t.jsxs(I,{select:!0,size:"small",label:"Null state",value:e.value??"true",onChange:u=>r(e.id,u.target.value),sx:{minWidth:160,flex:1},children:[t.jsx(B,{value:"true",children:"Is null"}),t.jsx(B,{value:"false",children:"Is not null"})]}):y?t.jsx(I,{select:!0,size:"small",label:d,value:e.value??"",onChange:u=>r(e.id,u.target.value),sx:{minWidth:160,flex:1},children:l.map(u=>t.jsx(B,{value:u.value,children:u.label},u.value))}):o?.type==="boolean"?t.jsxs(I,{select:!0,size:"small",label:d,value:e.value??"true",onChange:u=>r(e.id,u.target.value),sx:{minWidth:160,flex:1},children:[t.jsx(B,{value:"true",children:"True"}),t.jsx(B,{value:"false",children:"False"})]}):t.jsx(I,{size:"small",type:c,label:d,value:e.value??"",onChange:u=>r(e.id,u.target.value),placeholder:q,InputLabelProps:k?{shrink:!0}:void 0,sx:{minWidth:160,flex:1}}),t.jsx(ie,{size:"small","aria-label":"Remove filter",onClick:()=>s(e.id),children:t.jsx(Je,{fontSize:"small"})})]})},ue=({queryBuilder:e})=>{const[n,a]=b.useState(null),i=!!n,p=n?.clientWidth??560,{fields:r,filters:s,onFiltersChange:o,placeholder:m,summaryFormatter:d}=e,c=b.useMemo(()=>new Map(r.map(f=>[f.name,f])),[r]),k=b.useMemo(()=>s.length?d?d(s,r):ln(s,r):"",[s,r,d]),q=f=>{a(f.currentTarget)},l=()=>{a(null)},y=()=>{if(r.length===0)return;const f=r[0],h=_(f)[0]??"eq",j=G(f,h);o([...s,{id:tn(),field:f.name,op:h,value:j}])},u=f=>{o(s.filter(x=>x.id!==f))},v=(f,x)=>{const h=an(r,x);if(!h)return;const j=_(h);o(s.map(S=>{if(S.id!==f)return S;const w=j.includes(S.op)?S.op:j[0]??"eq",F=G(h,w,S.value);return{...S,field:h.name,op:w,value:F}}))},T=(f,x)=>{o(s.map(h=>{if(h.id!==f)return h;const j=c.get(h.field),S=G(j,x,h.value);return{...h,op:x,value:S}}))},C=(f,x)=>{o(s.map(h=>h.id===f?{...h,value:x}:h))};return t.jsxs(t.Fragment,{children:[t.jsx(z,{sx:{borderBottom:"1px solid",borderColor:"divider",px:2,py:1.5},children:t.jsx(I,{fullWidth:!0,size:"small",placeholder:m??"Add filters",value:k,onClick:q,onFocus:q,InputProps:{readOnly:!0,startAdornment:t.jsx(Y,{position:"start",children:t.jsx(Xe,{fontSize:"small"})}),endAdornment:t.jsx(Y,{position:"end",children:i?t.jsx(en,{}):t.jsx(Ze,{})})},inputProps:{"aria-label":"Filter query"},sx:{"& .MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{cursor:"pointer",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})}),t.jsx(Ie,{open:i,anchorEl:n,onClose:l,disableRestoreFocus:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:p,maxWidth:"calc(100vw - 32px)",p:2}}},children:t.jsx(z,{sx:{maxHeight:"60vh",overflowY:"auto"},children:t.jsxs(U,{spacing:2,children:[t.jsxs(z,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,children:[t.jsx(N,{variant:"subtitle2",children:"Filters"}),t.jsxs(z,{display:"flex",alignItems:"center",gap:1,children:[t.jsx(Re,{size:"small",startIcon:t.jsx(Ye,{fontSize:"small"}),onClick:y,disabled:r.length===0,children:"Add filter"}),t.jsx(ie,{size:"small","aria-label":"Close filters",onClick:l,children:t.jsx(Be,{fontSize:"small"})})]})]}),s.length===0?t.jsx(N,{variant:"body2",color:"text.secondary",children:"No filters yet."}):t.jsx(U,{spacing:1.5,children:s.map(f=>t.jsx(sn,{filter:f,fields:r,fieldMap:c,onFieldChange:v,onOpChange:T,onValueChange:C,onRemove:u},f.id))})]})})})]})};ue.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fields: QuerySpecField[];
  filters: QuerySpecFilter[];
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  placeholder?: string;
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  label: string;
  type?: QuerySpecFieldType;
  ops?: QuerySpecOp[];
  placeholder?: string;
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1}},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QuerySpecFieldOption[]",required:!1}}]}}],raw:"QuerySpecField[]",required:!0}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]",required:!0}},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0}},{key:"placeholder",value:{name:"string",required:!1}},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  label: string;
  type?: QuerySpecFieldType;
  ops?: QuerySpecOp[];
  placeholder?: string;
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1}},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QuerySpecFieldOption[]",required:!1}}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1}}]}},description:""}}};const X=[10,25,50],E=({data:e,columns:n,getRowId:a,pagination:i,onPaginationChange:p,sorting:r,onSortingChange:s,rowCount:o,loading:m=!1,emptyMessage:d="No data available",pageSizeOptions:c=X,onRowClick:k,query:q})=>{const l=b.useMemo(()=>c.length?c:X,[c]),y=o??e.length;return t.jsxs(Oe,{variant:"outlined",children:[q?t.jsx(ue,{queryBuilder:q}):null,t.jsx(le,{data:e,columns:n,loading:m,emptyMessage:d,sorting:r,onSortingChange:s,onRowClick:k,getRowId:a}),t.jsx(se,{pagination:i,onPaginationChange:p,rowCount:y,pageSizeOptions:l})]})};E.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
pagination, sorting, and filtering capabilities.

This component is fully controlled - all state (pagination, sorting, filters) must be
managed by the parent component. For convenience, use the \`useRemoteDataTable\` hook
to manage this state.

@example
\`\`\`tsx
const tableState = useRemoteDataTable({
  initialPagination: { pageSize: 25 }
});

<RemoteDataTable
  data={items}
  columns={columns}
  {...tableState}
  query={{
    fields: queryFields,
    filters: tableState.filters,
    onFiltersChange: tableState.onFiltersChange
  }}
/>
\`\`\``,methods:[],displayName:"RemoteDataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:"Array of data items to display in the table"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  header: ReactNode;
  accessorKey?: keyof TData;
  cell?: (row: TData) => ReactNode;
  enableSorting?: boolean;
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"header",value:{name:"ReactNode",required:!0}},{key:"accessorKey",value:{name:"TData",required:!1}},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1}},{key:"enableSorting",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  align?: TableCellProps["align"];
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:'TableCellProps["align"]',raw:'TableCellProps["align"]',required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]},required:!1}}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:"Column definitions for the table"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs. If not provided, uses array index"},pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  pageIndex: number;
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}}]}},description:"Current pagination state (pageIndex and pageSize)"},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  pageIndex: number;
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"desc",value:{name:"boolean",required:!0}}]}}],raw:`Array<{
  id: string;
  desc: boolean;
}>`},description:"Current sorting state"},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"desc",value:{name:"boolean",required:!0}}]}}],raw:`Array<{
  id: string;
  desc: boolean;
}>`},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},rowCount:{required:!1,tsType:{name:"number"},description:"Total number of rows available (for server-side pagination). If not provided, uses data.length"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether data is currently loading",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message to display when there is no data
@default "No data available"`,defaultValue:{value:'"No data available"',computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Available page size options for the pagination dropdown
@default [10, 25, 50]`,defaultValue:{value:"[10, 25, 50]",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},query:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fields: QuerySpecField[];
  filters: QuerySpecFilter[];
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  placeholder?: string;
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  label: string;
  type?: QuerySpecFieldType;
  ops?: QuerySpecOp[];
  placeholder?: string;
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1}},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QuerySpecFieldOption[]",required:!1}}]}}],raw:"QuerySpecField[]",required:!0}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]",required:!0}},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0}},{key:"placeholder",value:{name:"string",required:!1}},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  op: QuerySpecOp;
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  label: string;
  type?: QuerySpecFieldType;
  ops?: QuerySpecOp[];
  placeholder?: string;
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1}},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq"
| "neq"
| "lt"
| "lte"
| "gt"
| "gte"
| "ilike"
| "in"
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QuerySpecFieldOption[]",required:!1}}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1}}]}},description:"Configuration for the query builder (filters)"}}};const me=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>t.jsx(Pe,{label:e.status,color:e.status==="Active"?"success":"default",size:"small"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],de=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],on=e=>Array.from({length:e}).map((n,a)=>({id:String(a+1),name:`Item ${a+1}`,status:a%3===0?"Archived":a%2===0?"Active":"Inactive",createdAt:new Date(2024,0,a+1).toISOString()})),V=on(48),un={pageIndex:0,pageSize:10},mn=(e={})=>{const{initialPagination:n={},initialSorting:a=[],initialFilters:i=[]}=e,p={...un,...n},[r,s]=b.useState(p),[o,m]=b.useState(a),[d,c]=b.useState(i),k=()=>{s(p)},q=()=>{m(a)},l=()=>{c(i)};return{pagination:r,onPaginationChange:s,sorting:o,onSortingChange:m,filters:d,onFiltersChange:c,resetPagination:k,resetSorting:q,resetFilters:l,resetAll:()=>{k(),q(),l()}}},pe=(e,n)=>n.length?[...e].sort((a,i)=>{for(const p of n){const r=p.id,s=a[r],o=i[r];if(s===o)continue;const m=p.desc?-1:1,d=typeof s=="string"?s.toLowerCase():s,c=typeof o=="string"?o.toLowerCase():o;return d==null?1*m:c==null?-1*m:d>c?m:-m}return 0}):e,dn=e=>{const[n,a]=b.useState({pageIndex:0,pageSize:10}),[i,p]=b.useState(e.initialSorting??[]),[r,s]=b.useState([]),o=b.useMemo(()=>pe(V,i),[i]),m=b.useMemo(()=>o.slice(n.pageIndex*n.pageSize,n.pageIndex*n.pageSize+n.pageSize),[n.pageIndex,n.pageSize,o]);return t.jsx(E,{...e,data:m,columns:me,rowCount:V.length,pagination:n,onPaginationChange:a,sorting:i,onSortingChange:p,query:e.enableQueryBuilder?{fields:de,filters:r,onFiltersChange:s,placeholder:"Filter items..."}:void 0})},dt={title:"Components/Tables/RemoteDataTable",component:dn,decorators:[be()],parameters:{layout:"fullscreen"}},$={args:{pageSizeOptions:[5,10,25]}},M={args:{pageSizeOptions:[5,10,25],initialSorting:[{id:"createdAt",desc:!0}]}},W={args:{pageSizeOptions:[5,10,25],enableQueryBuilder:!0}},A={render:()=>{const e=mn({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),n=b.useMemo(()=>pe(V,e.sorting),[e.sorting]),a=b.useMemo(()=>n.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,n]);return t.jsx(E,{data:a,columns:me,rowCount:V.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:de,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  }
}`,...$.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25],
    initialSorting: [{
      id: "createdAt",
      desc: true
    }]
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25],
    enableQueryBuilder: true
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tableState = useRemoteDataTable({
      initialPagination: {
        pageSize: 10
      },
      initialSorting: [{
        id: "name",
        desc: false
      }]
    });
    const sortedItems = useMemo(() => sortItems(mockItems, tableState.sorting), [tableState.sorting]);
    const items = useMemo(() => sortedItems.slice(tableState.pagination.pageIndex * tableState.pagination.pageSize, tableState.pagination.pageIndex * tableState.pagination.pageSize + tableState.pagination.pageSize), [tableState.pagination, sortedItems]);
    return <RemoteDataTable data={items} columns={mockColumnsFull} rowCount={mockItems.length} pagination={tableState.pagination} onPaginationChange={tableState.onPaginationChange} sorting={tableState.sorting} onSortingChange={tableState.onSortingChange} pageSizeOptions={[5, 10, 25]} query={{
      fields: mockQueryFields,
      filters: tableState.filters,
      onFiltersChange: tableState.onFiltersChange,
      placeholder: "Filter items..."
    }} />;
  }
}`,...A.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...A.parameters?.docs?.description}}};const pt=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{$ as Default,M as SortedByCreatedDate,A as UsingHook,W as WithQueryBuilder,pt as __namedExportsOrder,dt as default};
