import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Co7slKt7.js";import{M as r}from"./blocks-BDx0zwxg.js";import"./iframe-CDZYyCF6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-K13l1vKj.js";import"./index-BZnMwcPh.js";import"./index-DXENcVt8.js";function t(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Examples/AI Component Guide"}),`
`,e.jsx(n.h1,{id:"ai-component-guide",children:"AI Component Guide"}),`
`,e.jsxs(n.p,{children:["Concise patterns for the most common ",e.jsx(n.code,{children:"@pautena/react-design-system"})," components. Use Storybook for the full catalog."]}),`
`,e.jsx(n.h2,{id:"header",children:"Header"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Page-level context, breadcrumbs, and actions."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header } from "@pautena/react-design-system";

<Header
  title="Operations"
  subtitle="Live metrics"
  breadcrumbs={[{ id: "home", text: "Home", link: "/" }]}
  actions={[{ id: "refresh", text: "Refresh", onClick: refresh }]}
/>;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Avoid"}),": Passing tabs without wrapping ",e.jsx(n.code,{children:"TabProvider"})," when you need ",e.jsx(n.code,{children:"TabPanel"})," synchronization."]}),`
`,e.jsx(n.h2,{id:"drawerlayout",children:"DrawerLayout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": App shell with navigation and app bar."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DrawerLayout } from "@pautena/react-design-system";

<DrawerLayout title="Ops Console" navigation={navigation}>
  {children}
</DrawerLayout>;
`})}),`
`,e.jsx(n.h2,{id:"valuetext--valuecard",children:"ValueText + ValueCard"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Labeled values and metric groups."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ValueCard, ValueItem, ValueText } from "@pautena/react-design-system";

<ValueCard>
  <div className="grid grid-cols-12 gap-2">
    <ValueItem size={4} bordered={false}>
      <ValueText label="Users" value="1,240" />
    </ValueItem>
  </div>
</ValueCard>;
`})}),`
`,e.jsx(n.h2,{id:"remotedatatable",children:"RemoteDataTable"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Server-style tables with pagination, sorting, and filters."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { RemoteDataTable, useRemoteDataTable } from "@pautena/react-design-system";

const table = useRemoteDataTable({ initialPagination: { pageSize: 25 } });

<RemoteDataTable
  data={rows}
  columns={columns}
  pagination={table.pagination}
  onPaginationChange={table.onPaginationChange}
  sorting={table.sorting}
  onSortingChange={table.onSortingChange}
  query={{ fields, filters: table.filters, onFiltersChange: table.onFiltersChange }}
/>;
`})}),`
`,e.jsx(n.h2,{id:"textfield",children:"TextField"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Text input with helper and error states."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextField } from "@pautena/react-design-system";

<TextField
  label="Email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  helperText="We will send a confirmation email."
/>;
`})}),`
`,e.jsx(n.h2,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Native select with loading and fetching states."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Select } from "@pautena/react-design-system";

<Select
  label="Role"
  value={role}
  options={[{ label: "Admin", value: "admin" }]}
  onChange={(event) => setRole(event.target.value)}
/>;
`})}),`
`,e.jsx(n.h2,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Searchable combobox for small to medium lists."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Autocomplete } from "@pautena/react-design-system";

<Autocomplete
  label="Team"
  options={teams}
  value={team}
  onChangeValue={(_, value) => setTeam(value)}
/>;
`})}),`
`,e.jsx(n.h2,{id:"tabcard--tabcardpanel",children:"TabCard + TabCardPanel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Simple tabbed cards."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TabCard, TabCardPanel } from "@pautena/react-design-system";

<TabCard tabs={[{ text: "Details" }, { text: "History" }]}>
  <TabCardPanel index={0}>Details</TabCardPanel>
  <TabCardPanel index={1}>History</TabCardPanel>
</TabCard>;
`})}),`
`,e.jsx(n.h2,{id:"confirmdialog",children:"ConfirmDialog"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Destructive action confirmation."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ConfirmDialog } from "@pautena/react-design-system";

<ConfirmDialog
  open={open}
  title="Delete record?"
  onCancel={() => setOpen(false)}
  onConfirm={handleDelete}
>Content will be removed permanently.</ConfirmDialog>;
`})}),`
`,e.jsx(n.h2,{id:"formdialog",children:"FormDialog"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Form submission dialog with loading support."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FormDialog, TextField } from "@pautena/react-design-system";

<FormDialog
  open={open}
  title="Add project"
  onCancel={() => setOpen(false)}
  onSubmit={(data) => createProject(data)}
>
  <TextField name="name" label="Project name" />
</FormDialog>;
`})}),`
`,e.jsx(n.h2,{id:"notificationcenter",children:"NotificationCenter"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Toast notifications powered by Sonner."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  NotificationCenterProvider,
  useNotificationCenter,
} from "@pautena/react-design-system";

const { toast } = useNotificationCenter();

<NotificationCenterProvider>
  <button onClick={() => toast.success("Saved")}>Notify</button>
</NotificationCenterProvider>;
`})}),`
`,e.jsx(n.h2,{id:"listpanel",children:"ListPanel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Side navigation with content area."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ListPanel } from "@pautena/react-design-system";

<ListPanel items={[{ id: "one", text: "Section" }]}>
  Content
</ListPanel>;
`})}),`
`,e.jsx(n.h2,{id:"expandablealert",children:"ExpandableAlert"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Alert with expandable metadata."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ExpandableAlert } from "@pautena/react-design-system";

<ExpandableAlert
  severity="warning"
  title="Check configuration"
  message="Something needs attention."
  metadata={["Run audit", "Update tokens"]}
  onClose={() => setOpen(false)}
/>;
`})})]})}function x(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{x as default};
