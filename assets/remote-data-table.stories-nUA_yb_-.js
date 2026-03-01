import{j as b}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-C_7bLouK.js";import{c as v}from"./storybook-ZuKHGkgU.js";import{R as f}from"./remote-data-table-a52lglvD.js";import{B as A}from"./badge-BjOk92aV.js";import{u as k}from"./use-remote-data-table-BpHc7274.js";import"./preload-helper-PPVm8Dsz.js";import"./notification-center-provider-C47Pv2Md.js";import"./index-CvzTXi8f.js";import"./index-ChAihCM8.js";import"./loader-circle-9lhHWVhj.js";import"./createLucideIcon-CMKN0kEv.js";import"./triangle-alert-DfgpFmgS.js";import"./sidebar-B24UiDBi.js";import"./index-C16iSc_-.js";import"./utils-CJxB-tWf.js";import"./button-q2sCJWC4.js";import"./useRenderElement-Bt1an2v0.js";import"./DirectionContext-BMrj8C2V.js";import"./composite-DdXnjXQf.js";import"./x-D8wlzAR-.js";import"./DialogTitle-DmEkRuXH.js";import"./index-DnbYxgfW.js";import"./useRender-CJLrCGuO.js";import"./table-Ds9nDxrk.js";import"./chevron-up-Cu0on_I2.js";import"./chevron-down-DaHT1g3Z.js";import"./popover-TcbViHUH.js";import"./ToolbarRootContext-DmKhAVoG.js";import"./trash-2-CKEAXZzw.js";import"./badge-2LdB89jb.js";const I=[{id:"name",header:"Name",accessorKey:"name",enableSorting:!0,meta:{minWidth:200}},{id:"status",header:"Status",accessorKey:"status",enableSorting:!1,meta:{width:140},cell:e=>b.jsx(A,{text:e.status,variant:e.status==="Active"?"success":"default"})},{id:"createdAt",header:"Created",accessorKey:"createdAt",enableSorting:!0,meta:{width:160},cell:e=>new Date(e.createdAt).toLocaleDateString()}],y=[{name:"name",label:"Name",ops:["eq","ilike","in"]},{name:"status",label:"Status",ops:["eq","neq","in"],options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"},{value:"Archived",label:"Archived"}]},{name:"createdAt",label:"Created",type:"date",ops:["eq","gte","lte"]},{name:"count",label:"Count",type:"number",ops:["gte","lte"]}],x=e=>Array.from({length:e}).map((o,a)=>({id:String(a+1),name:`Item ${a+1}`,status:a%3===0?"Archived":a%2===0?"Active":"Inactive",createdAt:new Date(2024,0,a+1).toISOString()})),S=x(48),z=(e,o)=>o.length?[...e].sort((a,h)=>{for(const t of o){const p=t.id,n=a[p],i=h[p];if(n===i)continue;const s=t.desc?-1:1,g=typeof n=="string"?n.toLowerCase():n,l=typeof i=="string"?i.toLowerCase():i;return g==null?1*s:l==null?-1*s:g>l?s:-s}return 0}):e,C=(e=[],o=!1)=>(a,h)=>{const[t,p]=r.useState({pageIndex:0,pageSize:10}),[n,i]=r.useState(e),[s,g]=r.useState([]),l=r.useMemo(()=>z(S,n),[n]),D=r.useMemo(()=>l.slice(t.pageIndex*t.pageSize,t.pageIndex*t.pageSize+t.pageSize),[t.pageIndex,t.pageSize,l]);return b.jsx(f,{...h.args,data:D,columns:I,rowCount:S.length,pagination:t,onPaginationChange:p,sorting:n,onSortingChange:i,query:o?{fields:y,filters:s,onFiltersChange:g,placeholder:"Filter items..."}:void 0})},re={title:"Tables/RemoteDataTable",component:f,decorators:[v()],parameters:{layout:"fullscreen"}},c={args:{pageSizeOptions:[5,10,25]},decorators:[C()]},d={args:{pageSizeOptions:[5,10,25]},decorators:[C([{id:"createdAt",desc:!0}])]},u={args:{pageSizeOptions:[5,10,25]},decorators:[C([],!0)]},m={render:()=>{const e=k({initialPagination:{pageSize:10},initialSorting:[{id:"name",desc:!1}]}),o=r.useMemo(()=>z(S,e.sorting),[e.sorting]),a=r.useMemo(()=>o.slice(e.pagination.pageIndex*e.pagination.pageSize,e.pagination.pageIndex*e.pagination.pageSize+e.pagination.pageSize),[e.pagination,o]);return b.jsx(f,{data:a,columns:I,rowCount:S.length,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,pageSizeOptions:[5,10,25],query:{fields:y,filters:e.filters,onFiltersChange:e.onFiltersChange,placeholder:"Filter items..."}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState()]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([{
    id: "createdAt",
    desc: true
  }])]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 10, 25]
  },
  decorators: [withRemoteDataTableState([], true)]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Example using the useRemoteDataTable hook for state management.
This hook aggregates pagination, sorting, and filters state.`,...m.parameters?.docs?.description}}};const ie=["Default","SortedByCreatedDate","WithQueryBuilder","UsingHook"];export{c as Default,d as SortedByCreatedDate,m as UsingHook,u as WithQueryBuilder,ie as __namedExportsOrder,re as default};
