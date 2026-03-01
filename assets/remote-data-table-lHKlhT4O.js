import{j as n,r as f}from"./iframe-lRwKKAeA.js";import{c as x}from"./utils-wLV4pmrJ.js";import{L as Ee}from"./loader-circle-D9QnFWM9.js";import{C as ge}from"./chevron-up-CvAzd9Aw.js";import{C as he}from"./chevron-down-hKLTOZmu.js";import{c as ie}from"./createLucideIcon-CW1mXz6K.js";import{B as G,c as Ae,u as ue,a as De,d as Me}from"./button-h5PM8KId.js";import{o as Qe,s as ze,p as _e,q as ye,r as Le,t as Ve,I as We}from"./sidebar-2ulj49hr.js";import{R as Ue,P as Ge,q as He,r as Be,s as $e,p as Ke,w as Ye,x as I,F as Xe,y as Je,z as Ze,B as en,C as nn,E as tn,G as rn,H as an,I as sn,J as ve,K as ln,L as on,M as un,N as dn,O as pn,Q as de,S as cn,U as mn,V as fn,W as gn,X as hn,Y as yn,Z as vn,o as bn,_ as xn,$ as wn,a0 as qn,a1 as be,n as kn,a2 as Cn,t as Tn}from"./DialogTitle-DczUCJzh.js";import{f as Y,a as Sn,u as se}from"./useRenderElement-DXpJT6eM.js";import{r as ee}from"./index-aCLD_6gc.js";import{z as X,t as ne,B as Fn,C as te,c as re,D as jn,u as Nn,h as In,F as On}from"./composite-CvqMpLXs.js";import{u as Rn,a as Pn}from"./ToolbarRootContext-B4PNoHOT.js";import{X as En}from"./x-Dvkqv4wB.js";import{T as An}from"./trash-2-Cn1j8Z5p.js";const Dn=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Mn=ie("arrow-up-down",Dn);const Qn=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],zn=ie("funnel",Qn);const _n=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ln=ie("plus",_n);function xe({className:e,...t}){return n.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:n.jsx("table",{"data-slot":"table",className:x("w-full caption-bottom text-sm",e),...t})})}function we({className:e,...t}){return n.jsx("thead",{"data-slot":"table-header",className:x("[&_tr]:border-b",e),...t})}function qe({className:e,...t}){return n.jsx("tbody",{"data-slot":"table-body",className:x("[&_tr:last-child]:border-0",e),...t})}function U({className:e,...t}){return n.jsx("tr",{"data-slot":"table-row",className:x("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function ke({className:e,...t}){return n.jsx("th",{"data-slot":"table-head",className:x("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0",e),...t})}function K({className:e,...t}){return n.jsx("td",{"data-slot":"table-cell",className:x("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",e),...t})}xe.__docgenInfo={description:"",methods:[],displayName:"Table"};we.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};qe.__docgenInfo={description:"",methods:[],displayName:"TableBody"};ke.__docgenInfo={description:"",methods:[],displayName:"TableHead"};U.__docgenInfo={description:"",methods:[],displayName:"TableRow"};K.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const pe=e=>e==="center"?"text-center":e==="right"?"text-right":"text-left",Ce=({data:e,columns:t,loading:r,emptyMessage:l,sorting:d=[],onSortingChange:c,onRowClick:y,getRowId:g})=>{const i=Math.max(t.length,1),p=!r&&e.length===0,o=!!y,v=m=>{if(!c)return;const a=d.find(u=>u.id===m);a?a.desc?c([]):c([{id:m,desc:!0}]):c([{id:m,desc:!1}])},k=m=>{const a=d.find(u=>u.id===m);return a?a.desc?"desc":"asc":!1},C=m=>m==="asc"?n.jsx(ge,{className:"h-4 w-4"}):m==="desc"?n.jsx(he,{className:"h-4 w-4"}):n.jsx(Mn,{className:"h-4 w-4 text-muted-foreground"});return n.jsxs(xe,{"aria-busy":r,children:[n.jsx(we,{className:"bg-muted/40",children:n.jsx(U,{children:t.map(m=>{const a=k(m.id),u=(m.enableSorting??!0)&&c;return n.jsx(ke,{"aria-sort":a==="asc"?"ascending":a==="desc"?"descending":"none",className:x("text-xs font-semibold uppercase tracking-wide text-muted-foreground",pe(m.meta?.align)),style:{width:m.meta?.width,minWidth:m.meta?.minWidth,maxWidth:m.meta?.maxWidth},children:u?n.jsxs("button",{type:"button",className:"flex w-full items-center gap-2",onClick:()=>v(m.id),children:[n.jsx("span",{className:"truncate",children:m.header}),C(a)]}):m.header},m.id)})})}),n.jsx(qe,{children:r?n.jsx(U,{children:n.jsx(K,{colSpan:i,children:n.jsxs("div",{className:"flex items-center gap-2 py-3 text-sm text-muted-foreground",children:[n.jsx(Ee,{className:"h-4 w-4 animate-spin","aria-hidden":"true"}),n.jsx("span",{children:"Loading"})]})})}):p?n.jsx(U,{children:n.jsx(K,{colSpan:i,children:n.jsx("p",{className:"py-3 text-sm text-muted-foreground",children:l})})}):e.map((m,a)=>{const u=g?g(m,a):String(a);return n.jsx(U,{className:x(o&&"cursor-pointer"),onClick:y?()=>y(m):void 0,children:t.map(h=>{const s=h.accessorKey?m[h.accessorKey]:void 0,w=h.cell?h.cell(m):String(s??"");return n.jsx(K,{className:x(pe(h.meta?.align)),style:{width:h.meta?.width,minWidth:h.meta?.minWidth,maxWidth:h.meta?.maxWidth},children:w},h.id)})},u)})})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:"Array of data items to display"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"sorting"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs"}}};const Te=({pagination:e,onPaginationChange:t,rowCount:r,pageSizeOptions:l})=>{const d=Math.max(1,Math.ceil(r/e.pageSize)),c=e.pageIndex>0,y=e.pageIndex<d-1,g=r===0?0:e.pageIndex*e.pageSize+1,i=Math.min(r,(e.pageIndex+1)*e.pageSize);return n.jsxs("div",{className:"flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{children:"Rows per page"}),n.jsx("select",{"aria-label":"Rows per page",className:x("h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"),value:e.pageSize,onChange:p=>{t(o=>({...o,pageIndex:0,pageSize:Number(p.target.value)}))},children:l.map(p=>n.jsx("option",{value:p,children:p},p))})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[n.jsxs("span",{children:[g,"-",i," of ",r]}),n.jsxs("span",{className:"text-xs text-muted-foreground",children:["Page ",d===0?0:e.pageIndex+1," of ",d]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(G,{variant:"ghost",size:"sm","aria-label":"Go to previous page",disabled:!c,onClick:()=>t(p=>({...p,pageIndex:Math.max(0,p.pageIndex-1)})),children:"Previous"}),n.jsx(G,{variant:"ghost",size:"sm","aria-label":"Go to next page",disabled:!y,onClick:()=>t(p=>({...p,pageIndex:Math.min(d-1,p.pageIndex+1)})),children:"Next"})]})]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},rowCount:{required:!0,tsType:{name:"number"},description:"Total number of rows available"},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Available page size options"}}};const Se=f.createContext(void 0);function H(e){const t=f.useContext(Se);if(t===void 0&&!e)throw new Error(Y(47));return t}function Vn(){return{...Ye(),disabled:!1,modal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,nested:!1,openOnHover:!1,closeDelay:0,hasViewport:!1}}const Wn={...Be,disabled:I(e=>e.disabled),instantType:I(e=>e.instantType),openMethod:I(e=>e.openMethod),openChangeReason:I(e=>e.openChangeReason),modal:I(e=>e.modal),stickIfOpen:I(e=>e.stickIfOpen),titleElementId:I(e=>e.titleElementId),descriptionElementId:I(e=>e.descriptionElementId),openOnHover:I(e=>e.openOnHover),closeDelay:I(e=>e.closeDelay),hasViewport:I(e=>e.hasViewport)};class le extends Ue{constructor(t){const r={...Vn(),...t};r.open&&t?.mounted===void 0&&(r.mounted=!0),super(r,{popupRef:f.createRef(),backdropRef:f.createRef(),internalBackdropRef:f.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:f.createRef(),beforeContentFocusGuardRef:f.createRef(),stickIfOpenTimeout:new He,triggerElements:new Ge},Wn)}setOpen=(t,r)=>{const l=r.reason===X,d=r.reason===ne&&r.event.detail===0,c=!t&&(r.reason===Fn||r.reason==null);if(r.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},this.context.onOpenChange?.(t,r),r.isCanceled)return;const y={open:t,nativeEvent:r.event,reason:r.reason,nested:this.state.nested,triggerElement:r.trigger};this.state.floatingRootContext.context.events?.emit("openchange",y);const i=()=>{const p={open:t,openChangeReason:r.reason},o=r.trigger?.id??null;(o||t)&&(p.activeTriggerId=o,p.activeTriggerElement=r.trigger??null),this.update(p)};l?(this.set("stickIfOpen",!0),this.context.stickIfOpenTimeout.start($e,()=>{this.set("stickIfOpen",!1)}),ee.flushSync(i)):i(),d||c?this.set("instantType",d?"click":"dismiss"):r.reason===te?this.set("instantType","focus"):this.set("instantType",void 0)};static useStore(t,r){const l=Sn(()=>new le(r)).current,d=t??l;return Ke(l.disposeEffect),d}disposeEffect=()=>this.context.stickIfOpenTimeout.disposeEffect()}function ce({props:e}){const{children:t,open:r,defaultOpen:l=!1,onOpenChange:d,onOpenChangeComplete:c,modal:y=!1,handle:g,triggerId:i,defaultTriggerId:p=null}=e,o=le.useStore(g?.store,{modal:y,open:l,openProp:r,activeTriggerId:p,triggerIdProp:i});Je(()=>{r===void 0&&o.state.open===!1&&l===!0&&o.update({open:!0,activeTriggerId:p})}),o.useControlledProp("openProp",r),o.useControlledProp("triggerIdProp",i);const v=o.useState("open"),k=o.useState("positionerElement"),C=o.useState("payload"),m=o.useState("openChangeReason");o.useContextCallback("onOpenChange",d),o.useContextCallback("onOpenChangeComplete",c);const{openMethod:a,triggerProps:u,reset:h}=Ze(v);en(o);const{forceUnmount:s}=nn(v,o,()=>{o.update({stickIfOpen:!0,openChangeReason:null}),h()});tn(v&&y===!0&&m!==X&&a!=="touch",k),f.useEffect(()=>{v||o.context.stickIfOpenTimeout.clear()},[o,v]);const w=f.useCallback(F=>{const z=re(F);return z.preventUnmountOnClose=()=>{o.set("preventUnmountingOnClose",!0)},z},[o]),b=f.useCallback(()=>{o.setOpen(!1,w(jn))},[o,w]);f.useImperativeHandle(e.actionsRef,()=>({unmount:s,close:b}),[s,b]);const T=rn({popupStore:o,onOpenChange:o.setOpen}),S=an(T,{outsidePressEvent:{mouse:y==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}}),j=sn(T),{getReferenceProps:O,getFloatingProps:R,getTriggerProps:P}=ve([S,j]),A=f.useMemo(()=>O(u),[O,u]),D=f.useMemo(()=>P(u),[P,u]),M=f.useMemo(()=>R(),[R]);o.useSyncedValues({modal:y,openMethod:a,activeTriggerProps:A,inactiveTriggerProps:D,popupProps:M,floatingRootContext:T,nested:ln()!=null});const Q=f.useMemo(()=>({store:o}),[o]);return n.jsx(Se.Provider,{value:Q,children:typeof t=="function"?t({payload:C}):t})}function Un(e){return H(!0)?n.jsx(ce,{props:e}):n.jsx(Xe,{children:n.jsx(ce,{props:e})})}const Gn=300,Hn=f.forwardRef(function(t,r){const{render:l,className:d,disabled:c=!1,nativeButton:y=!0,handle:g,payload:i,openOnHover:p=!1,delay:o=Gn,closeDelay:v=0,id:k,...C}=t,m=H(!0),a=g?.store??m?.store;if(!a)throw new Error(Y(74));const u=Nn(k),h=a.useState("isTriggerActive",u),s=a.useState("floatingRootContext"),w=a.useState("isOpenedByTrigger",u),b=f.useRef(null),{registerTrigger:T,isMountedByThisTrigger:S}=on(u,b,a,{payload:i,disabled:c,openOnHover:p,closeDelay:v}),j=a.useState("openChangeReason"),O=a.useState("stickIfOpen"),R=a.useState("openMethod"),P=Qe(s,{enabled:s!=null&&p&&(R!=="touch"||j!==ne),mouseOnly:!0,move:!1,handleClose:ze(),restMs:o,delay:{close:v},triggerElementRef:b,isActiveTrigger:h}),A=Rn(s,{enabled:s!=null,stickIfOpen:O}),D=ve([A]),M=a.useState("triggerProps",S),Q={disabled:c,open:w},{getButtonProps:F,buttonRef:z}=Ae({disabled:c,native:y}),_=f.useMemo(()=>({open(N){return N&&j===ne?un.open(N):dn.open(N)}}),[j]),V=se("button",t,{state:Q,ref:[z,r,T,b],props:[D.getReferenceProps(),P,M,{[pn]:"",id:u},C,F],stateAttributesMapping:_}),E=f.useRef(null),B=ue(N=>{ee.flushSync(()=>{a.setOpen(!1,re(te,N.nativeEvent,N.currentTarget))}),cn(E.current)?.focus()}),J=ue(N=>{const L=a.select("positionerElement");if(L&&mn(N,L))a.context.beforeContentFocusGuardRef.current?.focus();else{ee.flushSync(()=>{a.setOpen(!1,re(te,N.nativeEvent,N.currentTarget))});let q=fn(a.context.triggerFocusTargetRef.current||b.current);for(;q!==null&&In(L,q);){const $=q;if(q=gn(q),q===$)break}q?.focus()}});return h?n.jsxs(f.Fragment,{children:[n.jsx(de,{ref:E,onFocus:B}),n.jsx(f.Fragment,{children:V},u),n.jsx(de,{ref:a.context.triggerFocusTargetRef,onFocus:J})]}):n.jsx(f.Fragment,{children:V},u)}),Fe=f.createContext(void 0);function Bn(){const e=f.useContext(Fe);if(e===void 0)throw new Error(Y(45));return e}const $n=f.forwardRef(function(t,r){const{keepMounted:l=!1,...d}=t,{store:c}=H();return c.useState("mounted")||l?n.jsx(Fe.Provider,{value:l,children:n.jsx(hn,{ref:r,...d})}):null}),je=f.createContext(void 0);function Kn(){const e=f.useContext(je);if(!e)throw new Error(Y(46));return e}const Yn=f.forwardRef(function(t,r){const{render:l,className:d,anchor:c,positionMethod:y="absolute",side:g="bottom",align:i="center",sideOffset:p=0,alignOffset:o=0,collisionBoundary:v="clipping-ancestors",collisionPadding:k=5,arrowPadding:C=5,sticky:m=!1,disableAnchorTracking:a=!1,collisionAvoidance:u=yn,...h}=t,{store:s}=H(),w=Bn(),b=vn(),T=s.useState("floatingRootContext"),S=s.useState("mounted"),j=s.useState("open"),O=s.useState("openChangeReason"),R=s.useState("activeTriggerElement"),P=s.useState("modal"),A=s.useState("positionerElement"),D=s.useState("instantType"),M=s.useState("transitionStatus"),Q=s.useState("hasViewport"),F=f.useRef(null),z=bn(A,!1,!1),_=_e({anchor:c,floatingRootContext:T,positionMethod:y,mounted:S,side:g,sideOffset:p,align:i,alignOffset:o,arrowPadding:C,collisionBoundary:v,collisionPadding:k,sticky:m,disableAnchorTracking:a,keepMounted:w,nodeId:b,collisionAvoidance:u,adaptiveOrigin:Q?Le:void 0}),V=f.useMemo(()=>{const q={};return j||(q.pointerEvents="none"),{role:"presentation",hidden:!S,style:{..._.positionerStyles,...q}}},[j,S,_.positionerStyles]),E=f.useMemo(()=>({props:V,..._}),[V,_]),B=T.useState("domReferenceElement");De(()=>{const q=B,$=F.current;if(q&&(F.current=q),$&&q&&q!==$){s.set("instantType",void 0);const oe=new AbortController;return z(()=>{s.set("instantType","trigger-change")},oe.signal),()=>{oe.abort()}}},[B,z,s]);const J={open:j,side:E.side,align:E.align,anchorHidden:E.anchorHidden,instant:D},N=f.useCallback(q=>{s.set("positionerElement",q)},[s]),L=se("div",t,{state:J,props:[E.props,ye(M),h],ref:[r,N],stateAttributesMapping:be});return n.jsxs(je.Provider,{value:E,children:[S&&P===!0&&O!==X&&n.jsx(xn,{ref:s.context.internalBackdropRef,inert:wn(!j),cutout:R}),n.jsx(qn,{id:b,children:L})]})}),Xn={...be,...Tn},Jn=f.forwardRef(function(t,r){const{className:l,render:d,initialFocus:c,finalFocus:y,...g}=t,{store:i}=H(),p=Kn(),o=Pn()!=null,v=i.useState("open"),k=i.useState("openMethod"),C=i.useState("instantType"),m=i.useState("transitionStatus"),a=i.useState("popupProps"),u=i.useState("titleElementId"),h=i.useState("descriptionElementId"),s=i.useState("modal"),w=i.useState("mounted"),b=i.useState("openChangeReason"),T=i.useState("activeTriggerElement"),S=i.useState("floatingRootContext");kn({open:v,ref:i.context.popupRef,onComplete(){v&&i.context.onOpenChangeComplete?.(!0)}});const j=i.useState("disabled"),O=i.useState("openOnHover"),R=i.useState("closeDelay");Ve(S,{enabled:O&&!j,closeDelay:R});function P(F){return F==="touch"?i.context.popupRef.current:!0}const A=c===void 0?P:c,D={open:v,side:p.side,align:p.align,instant:C,transitionStatus:m},M=f.useCallback(F=>{i.set("popupElement",F)},[i]),Q=se("div",t,{state:D,ref:[r,i.context.popupRef,M],props:[a,{"aria-labelledby":u,"aria-describedby":h,onKeyDown(F){o&&On.has(F.key)&&F.stopPropagation()}},ye(m),g],stateAttributesMapping:Xn});return n.jsx(Cn,{context:S,openInteractionType:k,modal:s==="trap-focus",disabled:!w||b===X,initialFocus:A,returnFocus:y,restoreFocus:"popup",previousFocusableElement:Me(T)?T:void 0,nextFocusableElement:i.context.triggerFocusTargetRef,beforeContentFocusGuardRef:i.context.beforeContentFocusGuardRef,children:Q})});function Ne({...e}){return n.jsx(Un,{"data-slot":"popover",...e})}function Ie({...e}){return n.jsx(Hn,{"data-slot":"popover-trigger",...e})}function Oe({className:e,align:t="center",alignOffset:r=0,side:l="bottom",sideOffset:d=4,...c}){return n.jsx($n,{children:n.jsx(Yn,{align:t,alignOffset:r,side:l,sideOffset:d,className:"isolate z-50",children:n.jsx(Jn,{"data-slot":"popover-content",className:x("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-md p-4 text-sm shadow-md ring-1 outline-hidden duration-100",e),...c})})})}Ne.__docgenInfo={description:"",methods:[],displayName:"Popover"};Oe.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"0",computed:!1},required:!1},side:{defaultValue:{value:'"bottom"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};Ie.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};const Zn=["eq"],Re={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},et=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,nt=(e,t)=>e.find(r=>r.name===t),ae=e=>e?.ops?.length?e.ops:Zn,Z=(e,t,r)=>t==="isnull"||e?.type==="boolean"?r==="false"?"false":"true":r??"",me=(e,t)=>t?.options?.length?t.options.find(r=>r.value===e)?.label??e:e,tt=(e,t)=>{const r=t?.label??e.field,l=(e.value??"").trim();if(e.op==="isnull")return`${r} ${l!=="false"?"is null":"is not null"}`;if(!l)return"";const d=Re[e.op]??e.op;if(e.op==="in"){const i=l.split(",").map(p=>p.trim()).filter(Boolean).map(p=>me(p,t)).join(", ");return`${r} ${d} (${i})`}const c=me(l,t),g=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${c}"`:c;return`${r} ${d} ${g}`},rt=(e,t)=>{if(!e.length)return"";const r=new Map(t.map(l=>[l.name,l]));return e.map(l=>tt(l,r.get(l.field))).filter(Boolean).join(" AND ")},W="h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground",at=({filter:e,fields:t,fieldMap:r,onFieldChange:l,onOpChange:d,onValueChange:c,onRemove:y})=>{const g=r.get(e.field),i=ae(g),p=e.op==="in"?"Values":"Value",o=g?.type==="number"?"number":g?.type==="date"?"date":g?.type==="datetime"?"datetime-local":"text",v=g?.type==="date"||g?.type==="datetime",k=g?.placeholder??(e.op==="in"?"Comma-separated values":void 0),C=g?.options??[],m=C.length>0&&(e.op==="eq"||e.op==="neq");return n.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[n.jsx("label",{className:"sr-only",htmlFor:`field-${e.id}`,children:"Field"}),n.jsx("select",{id:`field-${e.id}`,"aria-label":"Field",className:x(W,"sm:w-44"),value:e.field,onChange:a=>l(e.id,a.target.value),children:t.map(a=>n.jsx("option",{value:a.name,children:a.label},a.name))}),n.jsx("label",{className:"sr-only",htmlFor:`op-${e.id}`,children:"Operator"}),n.jsx("select",{id:`op-${e.id}`,"aria-label":"Operator",className:x(W,"sm:w-36"),value:e.op,onChange:a=>d(e.id,a.target.value),children:i.map(a=>n.jsx("option",{value:a,children:Re[a]??a},a))}),e.op==="isnull"?n.jsxs("select",{"aria-label":"Null state",className:x(W,"sm:flex-1"),value:e.value??"true",onChange:a=>c(e.id,a.target.value),children:[n.jsx("option",{value:"true",children:"Is null"}),n.jsx("option",{value:"false",children:"Is not null"})]}):m?n.jsxs("select",{"aria-label":p,className:x(W,"sm:flex-1"),value:e.value??"",onChange:a=>c(e.id,a.target.value),children:[n.jsx("option",{value:"",children:"Select value"}),C.map(a=>n.jsx("option",{value:a.value,children:a.label},a.value))]}):g?.type==="boolean"?n.jsxs("select",{"aria-label":p,className:x(W,"sm:flex-1"),value:e.value??"true",onChange:a=>c(e.id,a.target.value),children:[n.jsx("option",{value:"true",children:"True"}),n.jsx("option",{value:"false",children:"False"})]}):n.jsxs("div",{className:"flex flex-1 flex-col",children:[v?n.jsx("label",{className:"mb-1 text-xs text-muted-foreground",htmlFor:`value-${e.id}`,children:p}):null,n.jsx(We,{id:`value-${e.id}`,type:o,"aria-label":p,value:e.value??"",onChange:a=>c(e.id,a.target.value),placeholder:k})]}),n.jsx(G,{type:"button",variant:"ghost",size:"icon","aria-label":"Remove filter",onClick:()=>y(e.id),children:n.jsx(An,{className:"h-4 w-4"})})]})},Pe=({queryBuilder:e})=>{const[t,r]=f.useState(!1),{fields:l,filters:d,onFiltersChange:c,placeholder:y,summaryFormatter:g}=e,i=f.useMemo(()=>new Map(l.map(u=>[u.name,u])),[l]),p=f.useMemo(()=>d.length?g?g(d,l):rt(d,l):"",[d,l,g]),o=()=>{r(!1)},v=()=>{if(l.length===0)return;const u=l[0],s=ae(u)[0]??"eq",w=Z(u,s);c([...d,{id:et(),field:u.name,op:s,value:w}])},k=u=>{c(d.filter(h=>h.id!==u))},C=(u,h)=>{const s=nt(l,h);if(!s)return;const w=ae(s);c(d.map(b=>{if(b.id!==u)return b;const T=w.includes(b.op)?b.op:w[0]??"eq",S=Z(s,T,b.value);return{...b,field:s.name,op:T,value:S}}))},m=(u,h)=>{c(d.map(s=>{if(s.id!==u)return s;const w=i.get(s.field),b=Z(w,h,s.value);return{...s,op:h,value:b}}))},a=(u,h)=>{c(d.map(s=>s.id===u?{...s,value:h}:s))};return n.jsxs(Ne,{open:t,onOpenChange:r,children:[n.jsx("div",{className:"border-b border-border px-4 py-3",children:n.jsx(Ie,{render:u=>n.jsxs("button",{type:"button",...u,"aria-label":"Filter query",className:x("flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-sm text-foreground","hover:bg-muted/40",typeof u.className=="string"?u.className:void 0),children:[n.jsx(zn,{className:"h-4 w-4 text-muted-foreground"}),n.jsx("span",{className:"flex-1 truncate text-muted-foreground",children:p||y||"Add filters"}),t?n.jsx(ge,{className:"h-4 w-4 text-muted-foreground"}):n.jsx(he,{className:"h-4 w-4 text-muted-foreground"})]})})}),n.jsx(Oe,{className:"w-[min(560px,calc(100vw-2rem))] p-4",align:"start",children:n.jsxs("div",{className:"flex max-h-[60vh] flex-col gap-4 overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold",children:"Filters"}),n.jsx("p",{className:"text-xs text-muted-foreground",children:d.length?`${d.length} filter${d.length===1?"":"s"} applied`:"No filters yet"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs(G,{size:"sm",variant:"outline",onClick:v,disabled:l.length===0,children:[n.jsx(Ln,{className:"mr-1 h-4 w-4"}),"Add filter"]}),n.jsx(G,{size:"icon",variant:"ghost","aria-label":"Close filters",onClick:o,children:n.jsx(En,{className:"h-4 w-4"})})]})]}),d.length===0?n.jsx("p",{className:"text-sm text-muted-foreground",children:"No filters yet."}):n.jsx("div",{className:"flex flex-col gap-3",children:d.map(u=>n.jsx(at,{filter:u,fields:l,fieldMap:i,onFieldChange:C,onOpChange:m,onValueChange:a,onRemove:k},u.id))})]})})]})};Pe.__docgenInfo={description:"Filter builder for RemoteDataTable query definitions.",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
@param fields - Available fields`}]}},description:"Query builder configuration"}}};const fe=[10,25,50];function it({data:e,columns:t,getRowId:r,pagination:l,onPaginationChange:d,sorting:c,onSortingChange:y,rowCount:g,loading:i=!1,emptyMessage:p="No data available",pageSizeOptions:o=fe,onRowClick:v,query:k,className:C}){const m=f.useMemo(()=>o.length?o:fe,[o]),a=g??e.length;return n.jsxs("div",{className:x("flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card",C),children:[k?n.jsx(Pe,{queryBuilder:k}):null,n.jsx(Ce,{data:e,columns:t,loading:i,emptyMessage:p,sorting:c,onSortingChange:y,onRowClick:v,getRowId:r}),n.jsx(Te,{pagination:l,onPaginationChange:d,rowCount:a,pageSizeOptions:m})]})}it.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"},className:{required:!1,tsType:{name:"string"},description:"Optional wrapper classes"}}};export{it as R};
