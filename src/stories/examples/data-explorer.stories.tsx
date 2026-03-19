import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import {
  ExpandableAlert,
  ListPanel,
  type QuerySpecField,
  RemoteDataTable,
  type RemoteDataTableColumn,
  useListPanel,
  useRemoteDataTable,
  ValueCard,
  ValueItem,
  ValueText,
} from "@/index";

type ExplorerRow = {
  id: string;
  name: string;
  status: "Healthy" | "Warning" | "Critical";
  updated: string;
};

const dataSets: Record<string, ExplorerRow[]> = {
  accounts: [
    { id: "acc-1", name: "Northwind", status: "Healthy", updated: "2h ago" },
    { id: "acc-2", name: "Umbrella", status: "Warning", updated: "1d ago" },
    {
      id: "acc-3",
      name: "Wayne Enterprises",
      status: "Critical",
      updated: "3d ago",
    },
  ],
  sessions: [
    { id: "ses-1", name: "Mobile SDK", status: "Healthy", updated: "20m ago" },
    { id: "ses-2", name: "Edge Proxy", status: "Warning", updated: "6h ago" },
  ],
  audits: [
    { id: "aud-1", name: "Login policy", status: "Healthy", updated: "5h ago" },
    {
      id: "aud-2",
      name: "Billing sync",
      status: "Critical",
      updated: "2d ago",
    },
  ],
};

const queryFields: QuerySpecField[] = [
  {
    name: "name",
    label: "Name",
    type: "string",
    ops: ["ilike"],
    placeholder: "Filter by name",
  },
  {
    name: "status",
    label: "Status",
    type: "string",
    ops: ["eq"],
    options: [
      { label: "Healthy", value: "Healthy" },
      { label: "Warning", value: "Warning" },
      { label: "Critical", value: "Critical" },
    ],
  },
];

const columns: RemoteDataTableColumn<ExplorerRow>[] = [
  { id: "name", header: "Name", accessorKey: "name" },
  {
    id: "status",
    header: "Status",
    cell: (row) => (
      <span className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-semibold">
        {row.status}
      </span>
    ),
  },
  { id: "updated", header: "Last update", accessorKey: "updated" },
];

const code = `import { useState, useMemo } from "react";
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
}`;

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
          metadata={[
            "Try status = Warning",
            "Combine multiple filters for drill-downs",
          ]}
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
        query={{
          fields: queryFields,
          filters: tableState.filters,
          onFiltersChange: tableState.onFiltersChange,
        }}
      />
    </div>
  );
}

export default {
  title: "Examples/Data Explorer",
  parameters: {
    layout: "fullscreen",
    docs: {
      source: { code },
    },
  },
  render: () => (
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
  ),
} satisfies Meta;

type Story = StoryObj;

export const Default: Story = {};
