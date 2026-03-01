import{j as n,r as d}from"./iframe-BOp0KoHw.js";import{d as Ue}from"./storybook-Do16VOkD.js";import{c as q}from"./utils-BFne8Zvq.js";import{L as Be}from"./loader-circle-qQxEsC5F.js";import{C as qe}from"./chevron-up-DdLiNaxj.js";import{C as Se}from"./chevron-down-CaGlVX9g.js";import{c as pe}from"./createLucideIcon-DZ32gi55.js";import{B as G,e as Ge,u as he,a as He,c as $e}from"./button-CeFxFZak.js";import{o as Ke,s as Ye,p as Xe,q as Ce,r as Je,t as Ze,I as en}from"./sidebar-B9aCzTK8.js";import{R as nn,P as tn,q as an,r as rn,s as sn,p as on,w as ln,x as N,F as un,y as dn,z as pn,B as cn,C as mn,E as gn,G as fn,H as hn,I as yn,J as ke,K as vn,L as bn,M as xn,N as wn,O as qn,Q as ye,S as Sn,U as Cn,V as kn,W as Tn,X as Fn,Y as In,Z as jn,o as Nn,_ as On,$ as Pn,a0 as Rn,a1 as Te,n as An,a2 as Dn,t as En}from"./DialogTitle-B9dNSudn.js";import{f as ne,a as Mn,u as ce}from"./useRenderElement-Bx6ca6GP.js";import{r as se}from"./index-9QzqYQcq.js";import{z as te,t as oe,B as zn,C as le,c as ue,D as Qn,u as _n,h as Ln,F as Vn}from"./composite-D-UgRGj8.js";import{u as Wn,a as Un}from"./ToolbarRootContext-DP_P0e44.js";import{X as Bn}from"./x-C2irfWeI.js";import{T as Gn}from"./trash-2-DNZLCXN4.js";import{B as Hn}from"./badge-CxT2k5WV.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-PoIJU_Tq.js";import"./triangle-alert-BPrZaYjk.js";import"./index-Bnpl_KYd.js";import"./DirectionContext-DXfzSasD.js";import"./useRender-DckHBBRP.js";import"./index-CpQ-kypr.js";import"./index-C7szOnQe.js";import"./badge-CWU--7Eb.js";const $n=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Kn=pe("arrow-up-down",$n);const Yn=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Xn=pe("funnel",Yn);const Jn=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Zn=pe("plus",Jn);function Fe({className:e,...t}){return n.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:n.jsx("table",{"data-slot":"table",className:q("w-full caption-bottom text-sm",e),...t})})}function Ie({className:e,...t}){return n.jsx("thead",{"data-slot":"table-header",className:q("[&_tr]:border-b",e),...t})}function je({className:e,...t}){return n.jsx("tbody",{"data-slot":"table-body",className:q("[&_tr:last-child]:border-0",e),...t})}function B({className:e,...t}){return n.jsx("tr",{"data-slot":"table-row",className:q("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Ne({className:e,...t}){return n.jsx("th",{"data-slot":"table-head",className:q("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0",e),...t})}function Z({className:e,...t}){return n.jsx("td",{"data-slot":"table-cell",className:q("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",e),...t})}Fe.__docgenInfo={description:"",methods:[],displayName:"Table"};Ie.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};je.__docgenInfo={description:"",methods:[],displayName:"TableBody"};Ne.__docgenInfo={description:"",methods:[],displayName:"TableHead"};B.__docgenInfo={description:"",methods:[],displayName:"TableRow"};Z.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const ve=e=>e==="center"?"text-center":e==="right"?"text-right":"text-left",Oe=({data:e,columns:t,loading:a,emptyMessage:l,sorting:i=[],onSortingChange:p,onRowClick:h,getRowId:g})=>{const s=Math.max(t.length,1),u=!a&&e.length===0,o=!!h,v=f=>{if(!p)return;const r=i.find(m=>m.id===f);r?r.desc?p([]):p([{id:f,desc:!0}]):p([{id:f,desc:!1}])},x=f=>{const r=i.find(m=>m.id===f);return r?r.desc?"desc":"asc":!1},w=f=>f==="asc"?n.jsx(qe,{className:"h-4 w-4"}):f==="desc"?n.jsx(Se,{className:"h-4 w-4"}):n.jsx(Kn,{className:"h-4 w-4 text-muted-foreground"});return n.jsxs(Fe,{"aria-busy":a,children:[n.jsx(Ie,{className:"bg-muted/40",children:n.jsx(B,{children:t.map(f=>{const r=x(f.id),m=(f.enableSorting??!0)&&p;return n.jsx(Ne,{"aria-sort":r==="asc"?"ascending":r==="desc"?"descending":"none",className:q("text-xs font-semibold uppercase tracking-wide text-muted-foreground",ve(f.meta?.align)),style:{width:f.meta?.width,minWidth:f.meta?.minWidth,maxWidth:f.meta?.maxWidth},children:m?n.jsxs("button",{type:"button",className:"flex w-full items-center gap-2",onClick:()=>v(f.id),children:[n.jsx("span",{className:"truncate",children:f.header}),w(r)]}):f.header},f.id)})})}),n.jsx(je,{children:a?n.jsx(B,{children:n.jsx(Z,{colSpan:s,children:n.jsxs("div",{className:"flex items-center gap-2 py-3 text-sm text-muted-foreground",children:[n.jsx(Be,{className:"h-4 w-4 animate-spin","aria-hidden":"true"}),n.jsx("span",{children:"Loading"})]})})}):u?n.jsx(B,{children:n.jsx(Z,{colSpan:s,children:n.jsx("p",{className:"py-3 text-sm text-muted-foreground",children:l})})}):e.map((f,r)=>{const m=g?g(f,r):String(r);return n.jsx(B,{className:q(o&&"cursor-pointer"),onClick:h?()=>h(f):void 0,children:t.map(y=>{const c=y.accessorKey?f[y.accessorKey]:void 0,S=y.cell?y.cell(f):String(c??"");return n.jsx(Z,{className:q(ve(y.meta?.align)),style:{width:y.meta?.width,minWidth:y.meta?.minWidth,maxWidth:y.meta?.maxWidth},children:S},y.id)})},m)})})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTableBody",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:"Array of data items to display"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"sorting"}],return:{name:"void"}}},description:"Callback fired when sorting changes"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => void",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"void"}}},description:"Callback fired when a row is clicked"},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData, index: number) => string",signature:{arguments:[{type:{name:"TData"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Optional function to generate unique row IDs"}}};const Pe=({pagination:e,onPaginationChange:t,rowCount:a,pageSizeOptions:l})=>{const i=Math.max(1,Math.ceil(a/e.pageSize)),p=e.pageIndex>0,h=e.pageIndex<i-1,g=a===0?0:e.pageIndex*e.pageSize+1,s=Math.min(a,(e.pageIndex+1)*e.pageSize);return n.jsxs("div",{className:"flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{children:"Rows per page"}),n.jsx("select",{"aria-label":"Rows per page",className:q("h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"),value:e.pageSize,onChange:u=>{t(o=>({...o,pageIndex:0,pageSize:Number(u.target.value)}))},children:l.map(u=>n.jsx("option",{value:u,children:u},u))})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[n.jsxs("span",{children:[g,"-",s," of ",a]}),n.jsxs("span",{className:"text-xs text-muted-foreground",children:["Page ",i===0?0:e.pageIndex+1," of ",i]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(G,{variant:"ghost",size:"sm","aria-label":"Go to previous page",disabled:!p,onClick:()=>t(u=>({...u,pageIndex:Math.max(0,u.pageIndex-1)})),children:"Previous"}),n.jsx(G,{variant:"ghost",size:"sm","aria-label":"Go to next page",disabled:!h,onClick:()=>t(u=>({...u,pageIndex:Math.min(i-1,u.pageIndex+1)})),children:"Next"})]})]})]})};Pe.__docgenInfo={description:"",methods:[],displayName:"RemoteDataTablePagination",props:{pagination:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!0},description:"Current page index (zero-based)"},{key:"pageSize",value:{name:"number",required:!0},description:"Number of rows per page"}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when pagination changes"},rowCount:{required:!0,tsType:{name:"number"},description:"Total number of rows available"},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Available page size options"}}};const Re=d.createContext(void 0);function H(e){const t=d.useContext(Re);if(t===void 0&&!e)throw new Error(ne(47));return t}function et(){return{...ln(),disabled:!1,modal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,nested:!1,openOnHover:!1,closeDelay:0,hasViewport:!1}}const nt={...rn,disabled:N(e=>e.disabled),instantType:N(e=>e.instantType),openMethod:N(e=>e.openMethod),openChangeReason:N(e=>e.openChangeReason),modal:N(e=>e.modal),stickIfOpen:N(e=>e.stickIfOpen),titleElementId:N(e=>e.titleElementId),descriptionElementId:N(e=>e.descriptionElementId),openOnHover:N(e=>e.openOnHover),closeDelay:N(e=>e.closeDelay),hasViewport:N(e=>e.hasViewport)};class me extends nn{constructor(t){const a={...et(),...t};a.open&&t?.mounted===void 0&&(a.mounted=!0),super(a,{popupRef:d.createRef(),backdropRef:d.createRef(),internalBackdropRef:d.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:d.createRef(),beforeContentFocusGuardRef:d.createRef(),stickIfOpenTimeout:new an,triggerElements:new tn},nt)}setOpen=(t,a)=>{const l=a.reason===te,i=a.reason===oe&&a.event.detail===0,p=!t&&(a.reason===zn||a.reason==null);if(a.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},this.context.onOpenChange?.(t,a),a.isCanceled)return;const h={open:t,nativeEvent:a.event,reason:a.reason,nested:this.state.nested,triggerElement:a.trigger};this.state.floatingRootContext.context.events?.emit("openchange",h);const s=()=>{const u={open:t,openChangeReason:a.reason},o=a.trigger?.id??null;(o||t)&&(u.activeTriggerId=o,u.activeTriggerElement=a.trigger??null),this.update(u)};l?(this.set("stickIfOpen",!0),this.context.stickIfOpenTimeout.start(sn,()=>{this.set("stickIfOpen",!1)}),se.flushSync(s)):s(),i||p?this.set("instantType",i?"click":"dismiss"):a.reason===le?this.set("instantType","focus"):this.set("instantType",void 0)};static useStore(t,a){const l=Mn(()=>new me(a)).current,i=t??l;return on(l.disposeEffect),i}disposeEffect=()=>this.context.stickIfOpenTimeout.disposeEffect()}function be({props:e}){const{children:t,open:a,defaultOpen:l=!1,onOpenChange:i,onOpenChangeComplete:p,modal:h=!1,handle:g,triggerId:s,defaultTriggerId:u=null}=e,o=me.useStore(g?.store,{modal:h,open:l,openProp:a,activeTriggerId:u,triggerIdProp:s});dn(()=>{a===void 0&&o.state.open===!1&&l===!0&&o.update({open:!0,activeTriggerId:u})}),o.useControlledProp("openProp",a),o.useControlledProp("triggerIdProp",s);const v=o.useState("open"),x=o.useState("positionerElement"),w=o.useState("payload"),f=o.useState("openChangeReason");o.useContextCallback("onOpenChange",i),o.useContextCallback("onOpenChangeComplete",p);const{openMethod:r,triggerProps:m,reset:y}=pn(v);cn(o);const{forceUnmount:c}=mn(v,o,()=>{o.update({stickIfOpen:!0,openChangeReason:null}),y()});gn(v&&h===!0&&f!==te&&r!=="touch",x),d.useEffect(()=>{v||o.context.stickIfOpenTimeout.clear()},[o,v]);const S=d.useCallback(F=>{const Q=ue(F);return Q.preventUnmountOnClose=()=>{o.set("preventUnmountingOnClose",!0)},Q},[o]),b=d.useCallback(()=>{o.setOpen(!1,S(Qn))},[o,S]);d.useImperativeHandle(e.actionsRef,()=>({unmount:c,close:b}),[c,b]);const k=fn({popupStore:o,onOpenChange:o.setOpen}),T=hn(k,{outsidePressEvent:{mouse:h==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}}),I=yn(k),{getReferenceProps:O,getFloatingProps:P,getTriggerProps:R}=ke([T,I]),D=d.useMemo(()=>O(m),[O,m]),E=d.useMemo(()=>R(m),[R,m]),M=d.useMemo(()=>P(),[P]);o.useSyncedValues({modal:h,openMethod:r,activeTriggerProps:D,inactiveTriggerProps:E,popupProps:M,floatingRootContext:k,nested:vn()!=null});const z=d.useMemo(()=>({store:o}),[o]);return n.jsx(Re.Provider,{value:z,children:typeof t=="function"?t({payload:w}):t})}function tt(e){return H(!0)?n.jsx(be,{props:e}):n.jsx(un,{children:n.jsx(be,{props:e})})}const at=300,rt=d.forwardRef(function(t,a){const{render:l,className:i,disabled:p=!1,nativeButton:h=!0,handle:g,payload:s,openOnHover:u=!1,delay:o=at,closeDelay:v=0,id:x,...w}=t,f=H(!0),r=g?.store??f?.store;if(!r)throw new Error(ne(74));const m=_n(x),y=r.useState("isTriggerActive",m),c=r.useState("floatingRootContext"),S=r.useState("isOpenedByTrigger",m),b=d.useRef(null),{registerTrigger:k,isMountedByThisTrigger:T}=bn(m,b,r,{payload:s,disabled:p,openOnHover:u,closeDelay:v}),I=r.useState("openChangeReason"),O=r.useState("stickIfOpen"),P=r.useState("openMethod"),R=Ke(c,{enabled:c!=null&&u&&(P!=="touch"||I!==oe),mouseOnly:!0,move:!1,handleClose:Ye(),restMs:o,delay:{close:v},triggerElementRef:b,isActiveTrigger:y}),D=Wn(c,{enabled:c!=null,stickIfOpen:O}),E=ke([D]),M=r.useState("triggerProps",T),z={disabled:p,open:S},{getButtonProps:F,buttonRef:Q}=Ge({disabled:p,native:h}),_=d.useMemo(()=>({open(j){return j&&I===oe?xn.open(j):wn.open(j)}}),[I]),V=ce("button",t,{state:z,ref:[Q,a,k,b],props:[E.getReferenceProps(),R,M,{[qn]:"",id:m},w,F],stateAttributesMapping:_}),A=d.useRef(null),$=he(j=>{se.flushSync(()=>{r.setOpen(!1,ue(le,j.nativeEvent,j.currentTarget))}),Sn(A.current)?.focus()}),re=he(j=>{const L=r.select("positionerElement");if(L&&Cn(j,L))r.context.beforeContentFocusGuardRef.current?.focus();else{se.flushSync(()=>{r.setOpen(!1,ue(le,j.nativeEvent,j.currentTarget))});let C=kn(r.context.triggerFocusTargetRef.current||b.current);for(;C!==null&&Ln(L,C);){const K=C;if(C=Tn(C),C===K)break}C?.focus()}});return y?n.jsxs(d.Fragment,{children:[n.jsx(ye,{ref:A,onFocus:$}),n.jsx(d.Fragment,{children:V},m),n.jsx(ye,{ref:r.context.triggerFocusTargetRef,onFocus:re})]}):n.jsx(d.Fragment,{children:V},m)}),Ae=d.createContext(void 0);function it(){const e=d.useContext(Ae);if(e===void 0)throw new Error(ne(45));return e}const st=d.forwardRef(function(t,a){const{keepMounted:l=!1,...i}=t,{store:p}=H();return p.useState("mounted")||l?n.jsx(Ae.Provider,{value:l,children:n.jsx(Fn,{ref:a,...i})}):null}),De=d.createContext(void 0);function ot(){const e=d.useContext(De);if(!e)throw new Error(ne(46));return e}const lt=d.forwardRef(function(t,a){const{render:l,className:i,anchor:p,positionMethod:h="absolute",side:g="bottom",align:s="center",sideOffset:u=0,alignOffset:o=0,collisionBoundary:v="clipping-ancestors",collisionPadding:x=5,arrowPadding:w=5,sticky:f=!1,disableAnchorTracking:r=!1,collisionAvoidance:m=In,...y}=t,{store:c}=H(),S=it(),b=jn(),k=c.useState("floatingRootContext"),T=c.useState("mounted"),I=c.useState("open"),O=c.useState("openChangeReason"),P=c.useState("activeTriggerElement"),R=c.useState("modal"),D=c.useState("positionerElement"),E=c.useState("instantType"),M=c.useState("transitionStatus"),z=c.useState("hasViewport"),F=d.useRef(null),Q=Nn(D,!1,!1),_=Xe({anchor:p,floatingRootContext:k,positionMethod:h,mounted:T,side:g,sideOffset:u,align:s,alignOffset:o,arrowPadding:w,collisionBoundary:v,collisionPadding:x,sticky:f,disableAnchorTracking:r,keepMounted:S,nodeId:b,collisionAvoidance:m,adaptiveOrigin:z?Je:void 0}),V=d.useMemo(()=>{const C={};return I||(C.pointerEvents="none"),{role:"presentation",hidden:!T,style:{..._.positionerStyles,...C}}},[I,T,_.positionerStyles]),A=d.useMemo(()=>({props:V,..._}),[V,_]),$=k.useState("domReferenceElement");He(()=>{const C=$,K=F.current;if(C&&(F.current=C),K&&C&&C!==K){c.set("instantType",void 0);const fe=new AbortController;return Q(()=>{c.set("instantType","trigger-change")},fe.signal),()=>{fe.abort()}}},[$,Q,c]);const re={open:I,side:A.side,align:A.align,anchorHidden:A.anchorHidden,instant:E},j=d.useCallback(C=>{c.set("positionerElement",C)},[c]),L=ce("div",t,{state:re,props:[A.props,Ce(M),y],ref:[a,j],stateAttributesMapping:Te});return n.jsxs(De.Provider,{value:A,children:[T&&R===!0&&O!==te&&n.jsx(On,{ref:c.context.internalBackdropRef,inert:Pn(!I),cutout:P}),n.jsx(Rn,{id:b,children:L})]})}),ut={...Te,...En},dt=d.forwardRef(function(t,a){const{className:l,render:i,initialFocus:p,finalFocus:h,...g}=t,{store:s}=H(),u=ot(),o=Un()!=null,v=s.useState("open"),x=s.useState("openMethod"),w=s.useState("instantType"),f=s.useState("transitionStatus"),r=s.useState("popupProps"),m=s.useState("titleElementId"),y=s.useState("descriptionElementId"),c=s.useState("modal"),S=s.useState("mounted"),b=s.useState("openChangeReason"),k=s.useState("activeTriggerElement"),T=s.useState("floatingRootContext");An({open:v,ref:s.context.popupRef,onComplete(){v&&s.context.onOpenChangeComplete?.(!0)}});const I=s.useState("disabled"),O=s.useState("openOnHover"),P=s.useState("closeDelay");Ze(T,{enabled:O&&!I,closeDelay:P});function R(F){return F==="touch"?s.context.popupRef.current:!0}const D=p===void 0?R:p,E={open:v,side:u.side,align:u.align,instant:w,transitionStatus:f},M=d.useCallback(F=>{s.set("popupElement",F)},[s]),z=ce("div",t,{state:E,ref:[a,s.context.popupRef,M],props:[r,{"aria-labelledby":m,"aria-describedby":y,onKeyDown(F){o&&Vn.has(F.key)&&F.stopPropagation()}},Ce(f),g],stateAttributesMapping:ut});return n.jsx(Dn,{context:T,openInteractionType:x,modal:c==="trap-focus",disabled:!S||b===te,initialFocus:D,returnFocus:h,restoreFocus:"popup",previousFocusableElement:$e(k)?k:void 0,nextFocusableElement:s.context.triggerFocusTargetRef,beforeContentFocusGuardRef:s.context.beforeContentFocusGuardRef,children:z})});function Ee({...e}){return n.jsx(tt,{"data-slot":"popover",...e})}function Me({...e}){return n.jsx(rt,{"data-slot":"popover-trigger",...e})}function ze({className:e,align:t="center",alignOffset:a=0,side:l="bottom",sideOffset:i=4,...p}){return n.jsx(st,{children:n.jsx(lt,{align:t,alignOffset:a,side:l,sideOffset:i,className:"isolate z-50",children:n.jsx(dt,{"data-slot":"popover-content",className:q("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-md p-4 text-sm shadow-md ring-1 outline-hidden duration-100",e),...p})})})}Ee.__docgenInfo={description:"",methods:[],displayName:"Popover"};ze.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"0",computed:!1},required:!1},side:{defaultValue:{value:'"bottom"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};Me.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};const pt=["eq"],Qe={eq:"is",neq:"is not",lt:"<",lte:"<=",gt:">",gte:">=",ilike:"contains",in:"in",isnull:"is null"},ct=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`filter-${Math.random().toString(36).slice(2,10)}`,mt=(e,t)=>e.find(a=>a.name===t),de=e=>e?.ops?.length?e.ops:pt,ie=(e,t,a)=>t==="isnull"||e?.type==="boolean"?a==="false"?"false":"true":a??"",xe=(e,t)=>t?.options?.length?t.options.find(a=>a.value===e)?.label??e:e,gt=(e,t)=>{const a=t?.label??e.field,l=(e.value??"").trim();if(e.op==="isnull")return`${a} ${l!=="false"?"is null":"is not null"}`;if(!l)return"";const i=Qe[e.op]??e.op;if(e.op==="in"){const s=l.split(",").map(u=>u.trim()).filter(Boolean).map(u=>xe(u,t)).join(", ");return`${a} ${i} (${s})`}const p=xe(l,t),g=!t?.type||t.type==="string"||t.type==="date"||t.type==="datetime"?`"${p}"`:p;return`${a} ${i} ${g}`},ft=(e,t)=>{if(!e.length)return"";const a=new Map(t.map(l=>[l.name,l]));return e.map(l=>gt(l,a.get(l.field))).filter(Boolean).join(" AND ")},W="h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground",ht=({filter:e,fields:t,fieldMap:a,onFieldChange:l,onOpChange:i,onValueChange:p,onRemove:h})=>{const g=a.get(e.field),s=de(g),u=e.op==="in"?"Values":"Value",o=g?.type==="number"?"number":g?.type==="date"?"date":g?.type==="datetime"?"datetime-local":"text",v=g?.type==="date"||g?.type==="datetime",x=g?.placeholder??(e.op==="in"?"Comma-separated values":void 0),w=g?.options??[],f=w.length>0&&(e.op==="eq"||e.op==="neq");return n.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[n.jsx("label",{className:"sr-only",htmlFor:`field-${e.id}`,children:"Field"}),n.jsx("select",{id:`field-${e.id}`,"aria-label":"Field",className:q(W,"sm:w-44"),value:e.field,onChange:r=>l(e.id,r.target.value),children:t.map(r=>n.jsx("option",{value:r.name,children:r.label},r.name))}),n.jsx("label",{className:"sr-only",htmlFor:`op-${e.id}`,children:"Operator"}),n.jsx("select",{id:`op-${e.id}`,"aria-label":"Operator",className:q(W,"sm:w-36"),value:e.op,onChange:r=>i(e.id,r.target.value),children:s.map(r=>n.jsx("option",{value:r,children:Qe[r]??r},r))}),e.op==="isnull"?n.jsxs("select",{"aria-label":"Null state",className:q(W,"sm:flex-1"),value:e.value??"true",onChange:r=>p(e.id,r.target.value),children:[n.jsx("option",{value:"true",children:"Is null"}),n.jsx("option",{value:"false",children:"Is not null"})]}):f?n.jsxs("select",{"aria-label":u,className:q(W,"sm:flex-1"),value:e.value??"",onChange:r=>p(e.id,r.target.value),children:[n.jsx("option",{value:"",children:"Select value"}),w.map(r=>n.jsx("option",{value:r.value,children:r.label},r.value))]}):g?.type==="boolean"?n.jsxs("select",{"aria-label":u,className:q(W,"sm:flex-1"),value:e.value??"true",onChange:r=>p(e.id,r.target.value),children:[n.jsx("option",{value:"true",children:"True"}),n.jsx("option",{value:"false",children:"False"})]}):n.jsxs("div",{className:"flex flex-1 flex-col",children:[v?n.jsx("label",{className:"mb-1 text-xs text-muted-foreground",htmlFor:`value-${e.id}`,children:u}):null,n.jsx(en,{id:`value-${e.id}`,type:o,"aria-label":u,value:e.value??"",onChange:r=>p(e.id,r.target.value),placeholder:x})]}),n.jsx(G,{type:"button",variant:"ghost",size:"icon","aria-label":"Remove filter",onClick:()=>h(e.id),children:n.jsx(Gn,{className:"h-4 w-4"})})]})},_e=({queryBuilder:e})=>{const[t,a]=d.useState(!1),{fields:l,filters:i,onFiltersChange:p,placeholder:h,summaryFormatter:g}=e,s=d.useMemo(()=>new Map(l.map(m=>[m.name,m])),[l]),u=d.useMemo(()=>i.length?g?g(i,l):ft(i,l):"",[i,l,g]),o=()=>{a(!1)},v=()=>{if(l.length===0)return;const m=l[0],c=de(m)[0]??"eq",S=ie(m,c);p([...i,{id:ct(),field:m.name,op:c,value:S}])},x=m=>{p(i.filter(y=>y.id!==m))},w=(m,y)=>{const c=mt(l,y);if(!c)return;const S=de(c);p(i.map(b=>{if(b.id!==m)return b;const k=S.includes(b.op)?b.op:S[0]??"eq",T=ie(c,k,b.value);return{...b,field:c.name,op:k,value:T}}))},f=(m,y)=>{p(i.map(c=>{if(c.id!==m)return c;const S=s.get(c.field),b=ie(S,y,c.value);return{...c,op:y,value:b}}))},r=(m,y)=>{p(i.map(c=>c.id===m?{...c,value:y}:c))};return n.jsxs(Ee,{open:t,onOpenChange:a,children:[n.jsx("div",{className:"border-b border-border px-4 py-3",children:n.jsx(Me,{render:m=>n.jsxs("button",{type:"button",...m,"aria-label":"Filter query",className:q("flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-sm text-foreground","hover:bg-muted/40",typeof m.className=="string"?m.className:void 0),children:[n.jsx(Xn,{className:"h-4 w-4 text-muted-foreground"}),n.jsx("span",{className:"flex-1 truncate text-muted-foreground",children:u||h||"Add filters"}),t?n.jsx(qe,{className:"h-4 w-4 text-muted-foreground"}):n.jsx(Se,{className:"h-4 w-4 text-muted-foreground"})]})})}),n.jsx(ze,{className:"w-[min(560px,calc(100vw-2rem))] p-4",align:"start",children:n.jsxs("div",{className:"flex max-h-[60vh] flex-col gap-4 overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold",children:"Filters"}),n.jsx("p",{className:"text-xs text-muted-foreground",children:i.length?`${i.length} filter${i.length===1?"":"s"} applied`:"No filters yet"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs(G,{size:"sm",variant:"outline",onClick:v,disabled:l.length===0,children:[n.jsx(Zn,{className:"mr-1 h-4 w-4"}),"Add filter"]}),n.jsx(G,{size:"icon",variant:"ghost","aria-label":"Close filters",onClick:o,children:n.jsx(Bn,{className:"h-4 w-4"})})]})]}),i.length===0?n.jsx("p",{className:"text-sm text-muted-foreground",children:"No filters yet."}):n.jsx("div",{className:"flex flex-col gap-3",children:i.map(m=>n.jsx(ht,{filter:m,fields:l,fieldMap:s,onFieldChange:w,onOpChange:f,onValueChange:r,onRemove:x},m.id))})]})})]})};_e.__docgenInfo={description:"Filter builder for RemoteDataTable query definitions.",methods:[],displayName:"RemoteDataTableQueryBuilder",props:{queryBuilder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
@param fields - Available fields`}]}},description:"Query builder configuration"}}};const we=[10,25,50];function ae({data:e,columns:t,getRowId:a,pagination:l,onPaginationChange:i,sorting:p,onSortingChange:h,rowCount:g,loading:s=!1,emptyMessage:u="No data available",pageSizeOptions:o=we,onRowClick:v,query:x,className:w}){const f=d.useMemo(()=>o.length?o:we,[o]),r=g??e.length;return n.jsxs("div",{className:q("flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card",w),children:[x?n.jsx(_e,{queryBuilder:x}):null,n.jsx(Oe,{data:e,columns:t,loading:s,emptyMessage:u,sorting:p,onSortingChange:h,onRowClick:v,getRowId:a}),n.jsx(Pe,{pagination:l,onPaginationChange:i,rowCount:r,pageSizeOptions:f})]})}ae.__docgenInfo={description:`A table component designed for displaying remote/server-side data with built-in
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
@param fields - Available fields`}]}},description:"Configuration for the query builder (filters)"},className:{required:!1,tsType:{name:"string"},description:"Optional wrapper classes"}}};const Le=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>n.jsx(Hn,{text:e.status,variant:e.status==="Active"?"success":"default"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],Ve=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],yt=e=>Array.from({length:e}).map((t,a)=>({id:String(a+1),name:`Item ${a+1}`,status:a%3===0?"Archived":a%2===0?"Active":"Inactive",createdAt:new Date(2024,0,a+1).toISOString()})),ee=yt(48),vt={pageIndex:0,pageSize:10},bt=(e={})=>{const{initialPagination:t={},initialSorting:a=[],initialFilters:l=[]}=e,i={...vt,...t},[p,h]=d.useState(i),[g,s]=d.useState(a),[u,o]=d.useState(l),v=()=>{h(i)},x=()=>{s(a)},w=()=>{o(l)};return{pagination:p,onPaginationChange:h,sorting:g,onSortingChange:s,filters:u,onFiltersChange:o,resetPagination:v,resetSorting:x,resetFilters:w,resetAll:()=>{v(),x(),w()}}},We=(e,t)=>t.length?[...e].sort((a,l)=>{for(const i of t){const p=i.id,h=a[p],g=l[p];if(h===g)continue;const s=i.desc?-1:1,u=typeof h=="string"?h.toLowerCase():h,o=typeof g=="string"?g.toLowerCase():g;return u==null?1*s:o==null?-1*s:u>o?s:-s}return 0}):e,ge=(e=[],t=!1)=>(a,l)=>{const[i,p]=d.useState({pageIndex:0,pageSize:10}),[h,g]=d.useState(e),[s,u]=d.useState([]),o=d.useMemo(()=>We(ee,h),[h]),v=d.useMemo(()=>o.slice(i.pageIndex*i.pageSize,i.pageIndex*i.pageSize+i.pageSize),[i.pageIndex,i.pageSize,o]);return n.jsx(ae,{...l.args,data:v,columns:Le,rowCount:ee.length,pagination:i,onPaginationChange:p,sorting:h,onSortingChange:g,query:t?{fields:Ve,filters:s,onFiltersChange:u,placeholder:"Filter items..."}:void 0})},Gt={title:"Tables/RemoteDataTable",component:ae,decorators:[Ue()],parameters:{layout:"fullscreen"}},Y={args:{pageSizeOptions:[5,10,25]},decorators:[ge()]},X={args:{pageSizeOptions:[5,10,25]},decorators:[ge([{id:"createdAt",desc:!0}])]},J={args:{pageSizeOptions:[5,10,25]},decorators:[ge([],!0)]},U={render:()=>{const e=bt({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),t=d.useMemo(()=>We(ee,e.sorting),[e.sorting]),a=d.useMemo(()=>t.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,t]);return n.jsx(ae,{data:a,columns:Le,rowCount:ee.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:Ve,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState()]
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([{
    id: "createdAt",
    desc: true
  }])]
}`,...X.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([], true)]
}`,...J.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...U.parameters?.docs?.description}}};const Ht=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{Y as Default,X as SortedByCreatedDate,U as UsingHook,J as WithQueryBuilder,Ht as __namedExportsOrder,Gt as default};
