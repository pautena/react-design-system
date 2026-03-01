import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BPUIJQr3.js";import{M as r}from"./blocks-DneFDNKN.js";import"./iframe-8bOXTxPH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJYu0083.js";import"./index-DFQHTOpI.js";import"./index-D1T7PVUv.js";function t(n){const a={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Examples/AI Composition Patterns"}),`
`,e.jsx(a.h1,{id:"ai-composition-patterns",children:"AI Composition Patterns"}),`
`,e.jsx(a.h2,{id:"dashboard-shell",children:"Dashboard shell"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import {
  DrawerLayout,
  Header,
  RemoteDataTable,
  ValueCard,
  ValueItem,
  ValueText,
} from "@pautena/react-design-system";

<DrawerLayout title="Ops Console" navigation={navigation}>
  <Header title="Operations" subtitle="Live metrics" />
  <ValueCard>
    <div className="grid grid-cols-12 gap-2">
      <ValueItem size={4} bordered={false}>
        <ValueText label="Users" value="1,240" />
      </ValueItem>
    </div>
  </ValueCard>
  <RemoteDataTable data={rows} columns={columns} {...tableState} />
</DrawerLayout>;
`})}),`
`,e.jsx(a.h2,{id:"form-flow-with-dialogs",children:"Form flow with dialogs"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { FormDialog, ConfirmDialog, TextField } from "@pautena/react-design-system";

<FormDialog open={open} title="Add team" onCancel={close} onSubmit={save}>
  <TextField name="team" label="Team name" />
</FormDialog>

<ConfirmDialog
  open={confirmOpen}
  title="Submit request?"
  onCancel={close}
  onConfirm={submit}
/>
`})}),`
`,e.jsx(a.h2,{id:"data-exploration-layout",children:"Data exploration layout"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { ListPanel, RemoteDataTable, ExpandableAlert } from "@pautena/react-design-system";

<ListPanel items={[{ id: "accounts", text: "Accounts" }]}>
  <ExpandableAlert
    severity="info"
    title="Filters"
    message="Use query builder for advanced filters."
    onClose={() => setOpen(false)}
  />
  <RemoteDataTable data={rows} columns={columns} {...tableState} />
</ListPanel>;
`})}),`
`,e.jsx(a.h2,{id:"navigation--tabs",children:"Navigation + tabs"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { TabCard, TabCardPanel } from "@pautena/react-design-system";

<TabCard tabs={[{ text: "Summary" }, { text: "Details" }]}>
  <TabCardPanel index={0}>Summary content</TabCardPanel>
  <TabCardPanel index={1}>Detailed content</TabCardPanel>
</TabCard>;
`})}),`
`,e.jsx(a.h2,{id:"ai-prompt-examples",children:"AI prompt examples"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:'"Create a dashboard with DrawerLayout, a header, 3 metric cards, and a RemoteDataTable."'}),`
`,e.jsx(a.li,{children:'"Build a form wizard using TabCard, TextField, Select, and ConfirmDialog."'}),`
`,e.jsx(a.li,{children:'"Show a data explorer with ListPanel navigation and an ExpandableAlert tip section."'}),`
`]})]})}function x(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
