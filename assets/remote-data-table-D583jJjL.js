import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-DjNR3noO.js";import{a as h}from"./utils-DDt1maD9.js";import{T as V,a as G,b as j,c as $,d as _,e as T}from"./table-CD0JDqz6.js";import{L as B}from"./loader-circle-CkoGHPVG.js";import{C as z}from"./chevron-up-CYjwbCgy.js";import{C as R}from"./chevron-down-9NDnu9Kz.js";import{c as D}from"./createLucideIcon-bDYX1VuN.js";import{B as F}from"./button-CVa2x62j.js";import{I as E}from"./sidebar-DLeqGO7I.js";import{P as H,a as K,b as X}from"./popover-CG5rIo1A.js";import{X as J}from"./x-B9eiKsOU.js";import{T as Y}from"./trash-2-CgXe6RYQ.js";const Z=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],ee=D("arrow-up-down",Z);const ne=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ae=D("funnel",ne);const te=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],re=D("plus",te),Q=n=>n==="center"?"text-center":n==="right"?"text-right":"text-left",M=({data:n,columns:t,loading:i,emptyMessage:l,sorting:s=[],onSortingChange:d,onRowClick:g,getRowId:m})=>{const f=Math.max(t.length,1),u=!i&&n.length===0,y=!!g,x=r=>{if(!d)return;const a=s.find(o=>o.id===r);a?a.desc?d([]):d([{id:r,desc:!0}]):d([{id:r,desc:!1}])},v=r=>{const a=s.find(o=>o.id===r);return a?a.desc?"desc":"asc":!1},b=r=>r==="asc"?e.jsx(z,{className:"h-4 w-4"}):r==="desc"?e.jsx(R,{className:"h-4 w-4"}):e.jsx(ee,{className:"h-4 w-4 text-muted-foreground"});return e.jsxs(V,{"aria-busy":i,children:[e.jsx(G,{className:"bg-muted/40",children:e.jsx(j,{children:t.map(r=>{const a=v(r.id),o=(r.enableSorting??!0)&&d;return e.jsx($,{"aria-sort":a==="asc"?"ascending":a==="desc"?"descending":"none",className:h("text-xs font-semibold uppercase tracking-wide text-muted-foreground",Q(r.meta?.align)),style:{width:r.meta?.width,minWidth:r.meta?.minWidth,maxWidth:r.meta?.maxWidth},children:o?e.jsxs("button",{type:"button",className:"flex w-full items-center gap-2",onClick:()=>x(r.id),children:[e.jsx("span",{className:"truncate",children:r.header}),b(a)]}):r.header},r.id)})})}),e.jsx(_,{children:i?e.jsx(j,{children:e.jsx(T,{colSpan:f,children:e.jsxs("div",{className:"flex items-center gap-2 py-3 text-sm text-muted-foreground",children:[e.jsx(B,{className:"h-4 w-4 animate-spin","aria-hidden":"true"}),e.jsx("span",{children:"Loading"})]})})}):u?e.jsx(j,{children:e.jsx(T,{colSpan:f,children:e.jsx("p",{className:"py-3 text-sm text-muted-foreground",children:l})})}):n.map((r,a)=>{const o=m?m(r,a):String(a);return e.jsx(j,{className:h(y&&"cursor-pointer"),onClick:g?()=>g(r):void 0,children:t.map(p=>{const c=p.accessorKey?r[p.accessorKey]:void 0,q=p.cell?p.cell(r):String(c??"");return e.jsx(T,{className:h(Q(p.meta?.align)),style:{width:p.meta?.width,minWidth:p.meta?.minWidth,maxWidth:p.meta?.maxWidth},children:q},p.id)})},o)})})]})};M.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:"Array of data items to display"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Header content to display
   */
  header: ReactNode;
  /**
   * Key to access data from the row object
   */
  accessorKey?: keyof TData;
  /**
   * Custom cell renderer function
   * @param row - The data row
   */
  cell?: (row: TData) => ReactNode;
  /**
   * Whether sorting is enabled for this column
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Column metadata for styling and layout
   */
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the column"},{key:"header",value:{name:"ReactNode",required:!0},description:"Header content to display"},{key:"accessorKey",value:{name:"TData",required:!1},description:"Key to access data from the row object"},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1},description:`Custom cell renderer function
@param row - The data row`},{key:"enableSorting",value:{name:"boolean",required:!1},description:`Whether sorting is enabled for this column
@default true`},{key:"meta",value:{name:"signature",type:"object",raw:`{
  /**
   * Horizontal alignment of cell content
   * @default "left"
   */
  align?: "left" | "center" | "right";
  /**
   * Fixed width of the column
   */
  width?: number | string;
  /**
   * Minimum width of the column
   */
  minWidth?: number | string;
  /**
   * Maximum width of the column
   */
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1},description:`Horizontal alignment of cell content
@default "left"`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Fixed width of the column"},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Minimum width of the column"},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Maximum width of the column"}]},required:!1},description:"Column metadata for styling and layout"}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:"Column definitions for the table"},loading:{required:!0,tsType:{name:"boolean"},description:"Whether table rows are loading"},emptyMessage:{required:!0,tsType:{name:"string"},description:"Message to display when there is no data"},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},description:"Sorting state for the table",defaultValue:{value:"[]",computed:!1}},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(sorting: SortingState) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},name:"sorting"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs"}}};const W=({pagination:n,onPaginationChange:t,rowCount:i,pageSizeOptions:l})=>{const s=Math.max(1,Math.ceil(i/n.pageSize)),d=n.pageIndex>0,g=n.pageIndex<s-1,m=i===0?0:n.pageIndex*n.pageSize+1,f=Math.min(i,(n.pageIndex+1)*n.pageSize);return e.jsxs("div",{className:"flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Rows per page"}),e.jsx("select",{"aria-label":"Rows per page",className:h("h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"),value:n.pageSize,onChange:u=>{t(y=>({...y,pageIndex:0,pageSize:Number(u.target.value)}))},children:l.map(u=>e.jsx("option",{value:u,children:u},u))})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("span",{children:[m,"-",f," of ",i]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:["Page ",s===0?0:n.pageIndex+1," of ",s]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(F,{variant:"ghost",size:"sm","aria-label":"Go to previous page",disabled:!d,onClick:()=>t(u=>({...u,pageIndex:Math.max(0,u.pageIndex-1)})),children:"Previous"}),e.jsx(F,{variant:"ghost",size:"sm","aria-label":"Go to next page",disabled:!g,onClick:()=>t(u=>({...u,pageIndex:Math.min(s-1,u.pageIndex+1)})),children:"Next"})]})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},description:"Current pagination state"},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},rowCount:{required:!0,tsType:{name:"number"},description:"Total number of rows available"},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Available page size options"}}};const ie=["eq"],L={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},le=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,se=(n,t)=>n.find(i=>i.name===t),S=n=>n?.ops?.length?n.ops:ie,N=(n,t,i)=>t==="isnull"||n?.type==="boolean"?i==="false"?"false":"true":i??"",O=(n,t)=>t?.options?.length?t.options.find(i=>i.value===n)?.label??n:n,oe=(n,t)=>{const i=t?.label??n.field,l=(n.value??"").trim();if(n.op==="isnull")return`${i} ${l!=="false"?"is null":"is not null"}`;if(!l)return"";const s=L[n.op]??n.op;if(n.op==="in"){const f=l.split(",").map(u=>u.trim()).filter(Boolean).map(u=>O(u,t)).join(", ");return`${i} ${s} (${f})`}const d=O(l,t),m=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${d}"`:d;return`${i} ${s} ${m}`},ue=(n,t)=>{if(!n.length)return"";const i=new Map(t.map(l=>[l.name,l]));return n.map(l=>oe(l,i.get(l.field))).filter(Boolean).join(" AND ")},k="h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground",de=({filter:n,fields:t,fieldMap:i,onFieldChange:l,onOpChange:s,onValueChange:d,onRemove:g})=>{const m=i.get(n.field),f=S(m),u=n.op==="in"?"Values":"Value",y=m?.type==="number"?"number":m?.type==="date"?"date":m?.type==="datetime"?"datetime-local":"text",x=m?.type==="date"||m?.type==="datetime",v=m?.placeholder??(n.op==="in"?"Comma-separated values":void 0),b=m?.options??[],r=b.length>0&&(n.op==="eq"||n.op==="neq");return e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[e.jsx("label",{className:"sr-only",htmlFor:`field-${n.id}`,children:"Field"}),e.jsx("select",{id:`field-${n.id}`,"aria-label":"Field",className:h(k,"sm:w-44"),value:n.field,onChange:a=>l(n.id,a.target.value),children:t.map(a=>e.jsx("option",{value:a.name,children:a.label},a.name))}),e.jsx("label",{className:"sr-only",htmlFor:`op-${n.id}`,children:"Operator"}),e.jsx("select",{id:`op-${n.id}`,"aria-label":"Operator",className:h(k,"sm:w-36"),value:n.op,onChange:a=>s(n.id,a.target.value),children:f.map(a=>e.jsx("option",{value:a,children:L[a]??a},a))}),n.op==="isnull"?e.jsxs("select",{"aria-label":"Null state",className:h(k,"sm:flex-1"),value:n.value??"true",onChange:a=>d(n.id,a.target.value),children:[e.jsx("option",{value:"true",children:"Is null"}),e.jsx("option",{value:"false",children:"Is not null"})]}):r?e.jsxs("select",{"aria-label":u,className:h(k,"sm:flex-1"),value:n.value??"",onChange:a=>d(n.id,a.target.value),children:[e.jsx("option",{value:"",children:"Select value"}),b.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]}):m?.type==="boolean"?e.jsxs("select",{"aria-label":u,className:h(k,"sm:flex-1"),value:n.value??"true",onChange:a=>d(n.id,a.target.value),children:[e.jsx("option",{value:"true",children:"True"}),e.jsx("option",{value:"false",children:"False"})]}):e.jsxs("div",{className:"flex flex-1 flex-col",children:[x?e.jsx("label",{className:"mb-1 text-xs text-muted-foreground",htmlFor:`value-${n.id}`,children:u}):null,e.jsx(E,{id:`value-${n.id}`,type:y,"aria-label":u,value:n.value??"",onChange:a=>d(n.id,a.target.value),placeholder:v})]}),e.jsx(F,{type:"button",variant:"ghost",size:"icon","aria-label":"Remove filter",onClick:()=>g(n.id),children:e.jsx(Y,{className:"h-4 w-4"})})]})},P=({queryBuilder:n})=>{const[t,i]=C.useState(!1),{fields:l,filters:s,onFiltersChange:d,placeholder:g,summaryFormatter:m}=n,f=C.useMemo(()=>new Map(l.map(o=>[o.name,o])),[l]),u=C.useMemo(()=>s.length?m?m(s,l):ue(s,l):"",[s,l,m]),y=()=>{i(!1)},x=()=>{if(l.length===0)return;const o=l[0],c=S(o)[0]??"eq",q=N(o,c);d([...s,{id:le(),field:o.name,op:c,value:q}])},v=o=>{d(s.filter(p=>p.id!==o))},b=(o,p)=>{const c=se(l,p);if(!c)return;const q=S(c);d(s.map(w=>{if(w.id!==o)return w;const A=q.includes(w.op)?w.op:q[0]??"eq",U=N(c,A,w.value);return{...w,field:c.name,op:A,value:U}}))},r=(o,p)=>{d(s.map(c=>{if(c.id!==o)return c;const q=f.get(c.field),w=N(q,p,c.value);return{...c,op:p,value:w}}))},a=(o,p)=>{d(s.map(c=>c.id===o?{...c,value:p}:c))};return e.jsxs(H,{open:t,onOpenChange:i,children:[e.jsx("div",{className:"border-b border-border px-4 py-3",children:e.jsx(K,{render:o=>e.jsxs("button",{type:"button",...o,"aria-label":"Filter query",className:h("flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-sm text-foreground","hover:bg-muted/40",typeof o.className=="string"?o.className:void 0),children:[e.jsx(ae,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"flex-1 truncate text-muted-foreground",children:u||g||"Add filters"}),t?e.jsx(z,{className:"h-4 w-4 text-muted-foreground"}):e.jsx(R,{className:"h-4 w-4 text-muted-foreground"})]})})}),e.jsx(X,{className:"w-[min(560px,calc(100vw-2rem))] p-4",align:"start",children:e.jsxs("div",{className:"flex max-h-[60vh] flex-col gap-4 overflow-y-auto",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold",children:"Filters"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:s.length?`${s.length} filter${s.length===1?"":"s"} applied`:"No filters yet"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(F,{size:"sm",variant:"outline",onClick:x,disabled:l.length===0,children:[e.jsx(re,{className:"mr-1 h-4 w-4"}),"Add filter"]}),e.jsx(F,{size:"icon",variant:"ghost","aria-label":"Close filters",onClick:y,children:e.jsx(J,{className:"h-4 w-4"})})]})]}),s.length===0?e.jsx("p",{className:"text-sm text-muted-foreground",children:"No filters yet."}):e.jsx("div",{className:"flex flex-col gap-3",children:s.map(o=>e.jsx(de,{filter:o,fields:l,fieldMap:f,onFieldChange:b,onOpChange:r,onValueChange:a,onRemove:v},o.id))})]})})]})};P.__docgenInfo={description:"Filter builder for RemoteDataTable query definitions.",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Available fields for filtering
   */
  fields: QuerySpecField[];
  /**
   * Current active filters
   */
  filters: QuerySpecFilter[];
  /**
   * Callback when filters change
   * @param filters - Updated filters
   */
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  /**
   * Placeholder text for the query input
   */
  placeholder?: string;
  /**
   * Custom formatter for filter summary display
   * @param filters - Current filters
   * @param fields - Available fields
   */
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]",required:!0},description:"Available fields for filtering"},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]",required:!0},description:"Current active filters"},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0},description:`Callback when filters change
@param filters - Updated filters`},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for the query input"},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1},description:`Custom formatter for filter summary display
@param filters - Current filters
@param fields - Available fields`}]}},description:"Query builder configuration"}}};const I=[10,25,50];function me({data:n,columns:t,getRowId:i,pagination:l,onPaginationChange:s,sorting:d,onSortingChange:g,rowCount:m,loading:f=!1,emptyMessage:u="No data available",pageSizeOptions:y=I,onRowClick:x,query:v,className:b}){const r=C.useMemo(()=>y.length?y:I,[y]),a=m??n.length;return e.jsxs("div",{className:h("flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card",b),children:[v?e.jsx(P,{queryBuilder:v}):null,e.jsx(M,{data:n,columns:t,loading:f,emptyMessage:u,sorting:d,onSortingChange:g,onRowClick:x,getRowId:i}),e.jsx(W,{pagination:l,onPaginationChange:s,rowCount:a,pageSizeOptions:r})]})}me.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Header content to display
   */
  header: ReactNode;
  /**
   * Key to access data from the row object
   */
  accessorKey?: keyof TData;
  /**
   * Custom cell renderer function
   * @param row - The data row
   */
  cell?: (row: TData) => ReactNode;
  /**
   * Whether sorting is enabled for this column
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Column metadata for styling and layout
   */
  meta?: RemoteDataTableColumnMeta;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the column"},{key:"header",value:{name:"ReactNode",required:!0},description:"Header content to display"},{key:"accessorKey",value:{name:"TData",required:!1},description:"Key to access data from the row object"},{key:"cell",value:{name:"signature",type:"function",raw:"(row: TData) => ReactNode",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"ReactNode"}},required:!1},description:`Custom cell renderer function
@param row - The data row`},{key:"enableSorting",value:{name:"boolean",required:!1},description:`Whether sorting is enabled for this column
@default true`},{key:"meta",value:{name:"signature",type:"object",raw:`{
  /**
   * Horizontal alignment of cell content
   * @default "left"
   */
  align?: "left" | "center" | "right";
  /**
   * Fixed width of the column
   */
  width?: number | string;
  /**
   * Minimum width of the column
   */
  minWidth?: number | string;
  /**
   * Maximum width of the column
   */
  maxWidth?: number | string;
}`,signature:{properties:[{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1},description:`Horizontal alignment of cell content
@default "left"`},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Fixed width of the column"},{key:"minWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Minimum width of the column"},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:"Maximum width of the column"}]},required:!1},description:"Column metadata for styling and layout"}]}}],raw:"RemoteDataTableColumn<TData>[]"},description:"Column definitions for the table"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs. If not provided, uses array index"},pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},description:"Current pagination state (pageIndex and pageSize)"},onPaginationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},sorting:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},description:"Current sorting state"},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Column identifier to sort by"},{key:"desc",value:{name:"boolean",required:!0},description:"Whether to sort in descending order"}]}}],raw:`Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>`},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},rowCount:{required:!1,tsType:{name:"number"},description:"Total number of rows available (for server-side pagination). If not provided, uses data.length"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether data is currently loading",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Message to display when there is no data
@default "No data available"`,defaultValue:{value:'"No data available"',computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Available page size options for the pagination dropdown
@default [10, 25, 50]`,defaultValue:{value:"[10, 25, 50]",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},query:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Available fields for filtering
   */
  fields: QuerySpecField[];
  /**
   * Current active filters
   */
  filters: QuerySpecFilter[];
  /**
   * Callback when filters change
   * @param filters - Updated filters
   */
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  /**
   * Placeholder text for the query input
   */
  placeholder?: string;
  /**
   * Custom formatter for filter summary display
   * @param filters - Current filters
   * @param fields - Available fields
   */
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
}`,signature:{properties:[{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]",required:!0},description:"Available fields for filtering"},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]",required:!0},description:"Current active filters"},{key:"onFiltersChange",value:{name:"signature",type:"function",raw:"(filters: QuerySpecFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"}],return:{name:"void"}},required:!0},description:`Callback when filters change
@param filters - Updated filters`},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for the query input"},{key:"summaryFormatter",value:{name:"signature",type:"function",raw:`(
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => string`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique identifier for the filter"},{key:"field",value:{name:"string",required:!0},description:"Field name being filtered"},{key:"op",value:{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0},description:"Filter operation"},{key:"value",value:{name:"string",required:!1},description:"Filter value"}]}}],raw:"QuerySpecFilter[]"},name:"filters"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Field name/identifier"},{key:"label",value:{name:"string",required:!0},description:"Display label for the field"},{key:"type",value:{name:"union",raw:`| "string"
| "number"
| "boolean"
| "date"
| "datetime"`,elements:[{name:"literal",value:'"string"'},{name:"literal",value:'"number"'},{name:"literal",value:'"boolean"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime"'}],required:!1},description:`Data type of the field
@default "string"`},{key:"ops",value:{name:"Array",elements:[{name:"union",raw:`| "eq" // Equal
| "neq" // Not equal
| "lt" // Less than
| "lte" // Less than or equal
| "gt" // Greater than
| "gte" // Greater than or equal
| "ilike" // Case-insensitive like
| "in" // In array
| "isnull"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"lte"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"gte"'},{name:"literal",value:'"ilike"'},{name:"literal",value:'"in"'},{name:"literal",value:'"isnull"'}],required:!0}],raw:"QuerySpecOp[]",required:!1},description:"Allowed operations for this field"},{key:"placeholder",value:{name:"string",required:!1},description:"Placeholder text for input"},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"value",value:{name:"string",required:!0},description:"Value of the option"}]}}],raw:"QuerySpecFieldOption[]",required:!1},description:"Options for select/dropdown fields"}]}}],raw:"QuerySpecField[]"},name:"fields"}],return:{name:"string"}},required:!1},description:`Custom formatter for filter summary display
@param filters - Current filters
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"},className:{required:!1,tsType:{name:"string"},description:"Optional wrapper classes"}}};export{me as R};
