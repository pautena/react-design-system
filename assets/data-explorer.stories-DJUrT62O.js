import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-C8GoqKMl.js";import"./content-CMmzQxpa.js";import{L as g,u as h}from"./list-panel-panel-DwsBPdDW.js";import"./accordion-mNR2-O_D.js";import"./badge-DDqjPE2x.js";import"./board-CUhqVCRk.js";import"./breadcrumbs-CmvWdDGR.js";import"./bullet-DJEm3Fux.js";import"./card-ZfRm_uGh.js";import"./group-value-card-C91G4VFT.js";import"./header-Joq5hCgx.js";import"./value-boolean-Bno4P-WI.js";import{V as x}from"./value-card-D_V_dtJQ.js";import"./value-content-D9yaeR_m.js";import"./value-datetime-DksypLSu.js";import"./value-image-IOGMumTV.js";import{V as f}from"./value-item-Cug5d8ev.js";import"./value-label-a0XVki20.js";import"./value-rating-MoXoKFpu.js";import{V as b}from"./value-text-gpN2m5WO.js";import"./confirm-dialog-BUiDOb_M.js";import"./dialog-DYAz5Ayz.js";import"./form-dialog-JvuRZzLn.js";import{E as y}from"./expandable-alert-qcESTK1i.js";import"./notification-center-provider-BkXpd-S-.js";import"./autocomplete-C3TVeJnw.js";import"./button-C4FGKLek.js";import"./checkbox-field-DzQ1NL32.js";import"./date-range-calendar-BS17577d.js";import"./date-range-picker-jOrW4n4Z.js";import"./select-DgTYvgJb.js";import"./text-field-BNbjgBwR.js";import"./textarea-field-DO0GMxZe.js";import"./drawer-layout-Q0MGFGBM.js";import"./header-layout-DudESJAU.js";import"./separator-CPwKEW1i.js";import"./drawer-DkKwXb-m.js";import"./drawer-app-bar-C9YrwXqs.js";import"./drawer-content-Kf7nEKXr.js";import"./drawer-provider-DPEmqV3f.js";import"./drawer-item-BwpLp1bd.js";import"./drawer-main-DNySfAsl.js";import"./drawer-subheader-ClqYLxFT.js";import"./tab-card-panel-B7fsgDcj.js";import"./tab-panel-BFuM-Zxj.js";import"./tab-provider.provider-BboZshuP.js";import"./tabs-B7oEuyZd.js";import"./placeholder-CssebVmR.js";import"./skeleton-card-Cs6Lha50.js";import"./skeleton-grid-BTOWiOJa.js";import{R as w}from"./remote-data-table-DvWPh7ZK.js";import{u as S}from"./use-remote-data-table-Ck7mUMOF.js";import"./button-CqmGLEkD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DDt1maD9.js";import"./chevron-down-BVoY5dIV.js";import"./createLucideIcon-zSeE5OCt.js";import"./chevron-up-DZ-9lDWb.js";import"./DirectionContext-qIuXBF4_.js";import"./useCompositeListItem-BlA6mkGW.js";import"./useRenderElement-B98N9jJg.js";import"./inertValue-2mOOpLpY.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./useCollapsiblePanel-BkJUEMfL.js";import"./isElementDisabled-CwHw_lZC.js";import"./badge-BzxXjtew.js";import"./index-CIF9E9WT.js";import"./useRender-D-Hu_BU4.js";import"./chevron-right-GArLkMBU.js";import"./tabs-x3k-0TVY.js";import"./useCompositeItem-z1xUqsoL.js";import"./loader-circle-BdDYgNFh.js";import"./value-base-y9Dsh-vS.js";import"./check-DIcHysxJ.js";import"./x-Dv0RtamN.js";import"./format-BS8Ay9AX.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./collapsible-BsKSk76a.js";import"./triangle-alert-Cki19iAl.js";import"./field-BVYBRkbk.js";import"./sidebar-DAaa7t-4.js";import"./popover-BEq1DLNi.js";import"./ToolbarRootContext-96uZHcHb.js";import"./trash-2-5uWscXtN.js";import"./table-CD0JDqz6.js";const m={accounts:[{id:"acc-1",name:"Northwind",status:"Healthy",updated:"2h ago"},{id:"acc-2",name:"Umbrella",status:"Warning",updated:"1d ago"},{id:"acc-3",name:"Wayne Enterprises",status:"Critical",updated:"3d ago"}],sessions:[{id:"ses-1",name:"Mobile SDK",status:"Healthy",updated:"20m ago"},{id:"ses-2",name:"Edge Proxy",status:"Warning",updated:"6h ago"}],audits:[{id:"aud-1",name:"Login policy",status:"Healthy",updated:"5h ago"},{id:"aud-2",name:"Billing sync",status:"Critical",updated:"2d ago"}]},C=[{name:"name",label:"Name",type:"string",ops:["ilike"],placeholder:"Filter by name"},{name:"status",label:"Status",type:"string",ops:["eq"],options:[{label:"Healthy",value:"Healthy"},{label:"Warning",value:"Warning"},{label:"Critical",value:"Critical"}]}],v=[{id:"name",header:"Name",accessorKey:"name"},{id:"status",header:"Status",cell:o=>t.jsx("span",{className:"inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-semibold",children:o.status})},{id:"updated",header:"Last update",accessorKey:"updated"}],N=`import { useState, useMemo } from "react";
import {
  ExpandableAlert,
  ListPanel,
  RemoteDataTable,
  useListPanel,
  useRemoteDataTable,
  ValueCard,
  ValueItem,
  ValueText,
} from "@pautena/react-design-system";
import type { QuerySpecField, RemoteDataTableColumn } from "@pautena/react-design-system";

const dataSets = {
  accounts: [
    { id: "acc-1", name: "Northwind", status: "Healthy", updated: "2h ago" },
    { id: "acc-2", name: "Umbrella", status: "Warning", updated: "1d ago" },
  ],
  sessions: [
    { id: "ses-1", name: "Mobile SDK", status: "Healthy", updated: "20m ago" },
  ],
  audits: [
    { id: "aud-1", name: "Login policy", status: "Healthy", updated: "5h ago" },
  ],
};

const queryFields: QuerySpecField[] = [
  { name: "name", label: "Name", type: "string", ops: ["ilike"], placeholder: "Filter by name" },
  { name: "status", label: "Status", type: "string", ops: ["eq"], options: [...] },
];

const columns: RemoteDataTableColumn[] = [
  { id: "name", header: "Name", accessorKey: "name" },
  { id: "status", header: "Status", cell: (row) => <span>{row.status}</span> },
  { id: "updated", header: "Last update", accessorKey: "updated" },
];

function PanelContent() {
  const selectedItem = useListPanel() ?? "accounts";
  const tableState = useRemoteDataTable();
  const rows = dataSets[selectedItem] ?? dataSets.accounts;
  const [showAlert, setShowAlert] = useState(true);

  const stats = useMemo(() => {
    const healthy = rows.filter((row) => row.status === "Healthy").length;
    const warning = rows.filter((row) => row.status === "Warning").length;
    const critical = rows.filter((row) => row.status === "Critical").length;
    return [
      { label: "Healthy", value: healthy },
      { label: "Warning", value: warning },
      { label: "Critical", value: critical },
    ];
  }, [rows]);

  return (
    <div className="space-y-4">
      {showAlert ? (
        <ExpandableAlert
          severity="info"
          title="Query tips"
          message="Use the query builder to filter entities before exporting data."
          metadata={["Try status = Warning", "Combine multiple filters for drill-downs"]}
          onClose={() => setShowAlert(false)}
        />
      ) : null}

      <ValueCard>
        <div className="grid grid-cols-12 gap-2">
          {stats.map((stat, index) => (
            <ValueItem key={stat.label} size={4} bordered={index !== 0}>
              <ValueText label={stat.label} value={String(stat.value)} />
            </ValueItem>
          ))}
        </div>
      </ValueCard>

      <RemoteDataTable
        data={rows}
        columns={columns}
        pagination={tableState.pagination}
        onPaginationChange={tableState.onPaginationChange}
        sorting={tableState.sorting}
        onSortingChange={tableState.onSortingChange}
        query={{ fields: queryFields, filters: tableState.filters, onFiltersChange: tableState.onFiltersChange }}
      />
    </div>
  );
}

export default function DataExplorer() {
  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Data explorer
          </p>
          <h1 className="text-2xl font-semibold">Environment signals</h1>
          <p className="text-sm text-muted-foreground">
            Browse accounts, sessions, and audit checks with filters.
          </p>
        </header>

        <ListPanel
          items={[
            { id: "accounts", text: "Accounts" },
            { id: "sessions", text: "Sessions" },
            { id: "audits", text: "Audit checks" },
          ]}
          defaultSelectedItem="accounts"
        >
          <PanelContent />
        </ListPanel>
      </div>
    </div>
  );
}`;function j(){const o=h()??"accounts",e=S(),a=m[o]??m.accounts,[d,p]=n.useState(!0),u=n.useMemo(()=>{const s=a.filter(i=>i.status==="Healthy").length,l=a.filter(i=>i.status==="Warning").length,c=a.filter(i=>i.status==="Critical").length;return[{label:"Healthy",value:s},{label:"Warning",value:l},{label:"Critical",value:c}]},[a]);return t.jsxs("div",{className:"space-y-4",children:[d?t.jsx(y,{severity:"info",title:"Query tips",message:"Use the query builder to filter entities before exporting data.",metadata:["Try status = Warning","Combine multiple filters for drill-downs"],onClose:()=>p(!1)}):null,t.jsx(x,{children:t.jsx("div",{className:"grid grid-cols-12 gap-2",children:u.map((s,l)=>t.jsx(f,{size:4,bordered:l!==0,children:t.jsx(b,{label:s.label,value:String(s.value)})},s.label))})}),t.jsx(w,{data:a,columns:v,pagination:e.pagination,onPaginationChange:e.onPaginationChange,sorting:e.sorting,onSortingChange:e.onSortingChange,query:{fields:C,filters:e.filters,onFiltersChange:e.onFiltersChange}})]})}const oe={title:"Examples/Data Explorer",parameters:{layout:"fullscreen",docs:{source:{code:N}}},render:()=>t.jsx("div",{className:"min-h-screen bg-muted/40 p-6",children:t.jsxs("div",{className:"mx-auto w-full max-w-5xl space-y-4",children:[t.jsxs("header",{children:[t.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Data explorer"}),t.jsx("h1",{className:"text-2xl font-semibold",children:"Environment signals"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Browse accounts, sessions, and audit checks with filters."})]}),t.jsx(g,{items:[{id:"accounts",text:"Accounts"},{id:"sessions",text:"Sessions"},{id:"audits",text:"Audit checks"}],defaultSelectedItem:"accounts",children:t.jsx(j,{})})]})})},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const le=["Default"];export{r as Default,le as __namedExportsOrder,oe as default};
