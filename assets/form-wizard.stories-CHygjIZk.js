import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-C8GoqKMl.js";import"./content-CMmzQxpa.js";import"./list-panel-panel-DwsBPdDW.js";import"./accordion-mNR2-O_D.js";import"./badge-DDqjPE2x.js";import"./board-CUhqVCRk.js";import"./breadcrumbs-CmvWdDGR.js";import"./bullet-DJEm3Fux.js";import"./card-ZfRm_uGh.js";import"./group-value-card-C91G4VFT.js";import"./header-Joq5hCgx.js";import"./value-boolean-Bno4P-WI.js";import"./value-card-D_V_dtJQ.js";import"./value-content-D9yaeR_m.js";import"./value-datetime-DksypLSu.js";import"./value-image-IOGMumTV.js";import"./value-item-Cug5d8ev.js";import"./value-label-a0XVki20.js";import"./value-rating-MoXoKFpu.js";import"./value-text-gpN2m5WO.js";import{C as w}from"./confirm-dialog-BUiDOb_M.js";import"./dialog-DYAz5Ayz.js";import{F as C}from"./form-dialog-JvuRZzLn.js";import"./expandable-alert-qcESTK1i.js";import"./notification-center-provider-BkXpd-S-.js";import{A as N}from"./autocomplete-C3TVeJnw.js";import{B as p}from"./button-C4FGKLek.js";import"./checkbox-field-DzQ1NL32.js";import"./date-range-calendar-BS17577d.js";import"./date-range-picker-jOrW4n4Z.js";import{S as d}from"./select-DgTYvgJb.js";import{T as n}from"./text-field-BNbjgBwR.js";import"./textarea-field-DO0GMxZe.js";import"./drawer-layout-Q0MGFGBM.js";import"./header-layout-DudESJAU.js";import"./separator-CPwKEW1i.js";import"./drawer-DkKwXb-m.js";import"./drawer-app-bar-C9YrwXqs.js";import"./drawer-content-Kf7nEKXr.js";import"./drawer-provider-DPEmqV3f.js";import"./drawer-item-BwpLp1bd.js";import"./drawer-main-DNySfAsl.js";import"./drawer-subheader-ClqYLxFT.js";import{T as j,a as c}from"./tab-card-panel-B7fsgDcj.js";import"./tab-panel-BFuM-Zxj.js";import"./tab-provider.provider-BboZshuP.js";import"./tabs-B7oEuyZd.js";import"./placeholder-CssebVmR.js";import"./skeleton-card-Cs6Lha50.js";import"./skeleton-grid-BTOWiOJa.js";import"./remote-data-table-DvWPh7ZK.js";import"./button-CqmGLEkD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DDt1maD9.js";import"./chevron-down-BVoY5dIV.js";import"./createLucideIcon-zSeE5OCt.js";import"./chevron-up-DZ-9lDWb.js";import"./DirectionContext-qIuXBF4_.js";import"./useCompositeListItem-BlA6mkGW.js";import"./useRenderElement-B98N9jJg.js";import"./inertValue-2mOOpLpY.js";import"./index-Ilw0fZRU.js";import"./index-BtdLg3S9.js";import"./useCollapsiblePanel-BkJUEMfL.js";import"./isElementDisabled-CwHw_lZC.js";import"./badge-BzxXjtew.js";import"./index-CIF9E9WT.js";import"./useRender-D-Hu_BU4.js";import"./chevron-right-GArLkMBU.js";import"./tabs-x3k-0TVY.js";import"./useCompositeItem-z1xUqsoL.js";import"./loader-circle-BdDYgNFh.js";import"./value-base-y9Dsh-vS.js";import"./check-DIcHysxJ.js";import"./x-Dv0RtamN.js";import"./format-BS8Ay9AX.js";import"./DialogTitle-BnuiqYCT.js";import"./index-DYiUusy3.js";import"./collapsible-BsKSk76a.js";import"./triangle-alert-Cki19iAl.js";import"./field-BVYBRkbk.js";import"./sidebar-DAaa7t-4.js";import"./popover-BEq1DLNi.js";import"./ToolbarRootContext-96uZHcHb.js";import"./trash-2-5uWscXtN.js";import"./table-CD0JDqz6.js";const y=[{text:"Profile"},{text:"Assignment"},{text:"Review"}],T=[{label:"Engineer",value:"engineer"},{label:"Designer",value:"designer"},{label:"Product",value:"product"}],D=["Platform","Growth","Data","Support"],F=`import { useMemo, useState } from "react";
import {
  Autocomplete,
  Button,
  ConfirmDialog,
  FormDialog,
  Select,
  TabCard,
  TabCardPanel,
  TextField,
} from "@pautena/react-design-system";

const tabs = [{ text: "Profile" }, { text: "Assignment" }, { text: "Review" }];
const roleOptions = [
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product", value: "product" },
];
const teamOptions = ["Platform", "Growth", "Data", "Support"];

function FormWizard() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "engineer",
    team: "Platform",
    location: "Remote",
  });
  const [locations, setLocations] = useState(["Remote", "Barcelona", "Berlin"]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reviewRows = useMemo(() => [
    { label: "Name", value: formState.name || "—" },
    { label: "Email", value: formState.email || "—" },
    { label: "Role", value: formState.role },
    { label: "Team", value: formState.team },
    { label: "Location", value: formState.location },
  ], [formState]);

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Onboarding flow
          </p>
          <h1 className="text-2xl font-semibold">New employee wizard</h1>
          <p className="text-sm text-muted-foreground">
            Collect profile details, team assignment, and confirm submission.
          </p>
        </header>

        <TabCard tabs={tabs}>
          <TabCardPanel index={0}>
            <div className="space-y-4 p-4">
              <TextField
                label="Full name"
                placeholder="Jane Doe"
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                fullWidth
              />
              <TextField
                label="Email"
                placeholder="jane@company.com"
                value={formState.email}
                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                helperText="We'll send a welcome email with setup steps."
                fullWidth
              />
            </div>
          </TabCardPanel>

          <TabCardPanel index={1}>
            <div className="space-y-4 p-4">
              <Select
                label="Role"
                value={formState.role}
                options={roleOptions}
                onChange={(event) => setFormState((prev) => ({ ...prev, role: event.target.value }))}
                fullWidth
              />
              <Autocomplete
                label="Team"
                options={teamOptions}
                value={formState.team}
                onChangeValue={(_, value) => setFormState((prev) => ({ ...prev, team: value }))}
              />
              <Select
                label="Location"
                value={formState.location}
                options={locations.map((location) => ({ label: location, value: location }))}
                onChange={(event) => setFormState((prev) => ({ ...prev, location: event.target.value }))}
                fullWidth
              />
              <Button variant="outline" className="w-fit" onClick={() => setShowLocationDialog(true)}>
                Add office
              </Button>
            </div>
          </TabCardPanel>

          <TabCardPanel index={2}>
            <div className="space-y-4 p-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h2 className="text-sm font-semibold text-muted-foreground">Review</h2>
                <dl className="mt-3 space-y-2">
                  {reviewRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <dt className="text-muted-foreground">{row.label}</dt>
                      <dd className="font-medium text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Button variant="primary" onClick={() => setShowConfirm(true)}>
                Submit request
              </Button>
              {submitted ? (
                <p className="text-sm text-green-600">Request submitted successfully.</p>
              ) : null}
            </div>
          </TabCardPanel>
        </TabCard>
      </div>

      <ConfirmDialog
        open={showConfirm}
        title="Send onboarding request?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          setSubmitted(true);
        }}
      >
        The HR team will receive this request and create the new employee.
      </ConfirmDialog>

      <FormDialog<{ location: string }>
        open={showLocationDialog}
        title="Add office location"
        description="Create a new office entry for onboarding."
        onCancel={() => setShowLocationDialog(false)}
        onSubmit={(data) => {
          if (!data.location) return;
          setLocations((prev) => [...prev, data.location]);
          setFormState((prev) => ({ ...prev, location: data.location }));
          setShowLocationDialog(false);
        }}
      >
        <TextField name="location" label="Office name" placeholder="Lisbon" fullWidth />
      </FormDialog>
    </div>
  );
}

export default FormWizard;`;function R(){const[a,l]=r.useState({name:"",email:"",role:"engineer",team:"Platform",location:"Remote"}),[u,f]=r.useState(["Remote","Barcelona","Berlin"]),[x,s]=r.useState(!1),[v,m]=r.useState(!1),[b,h]=r.useState(!1),g=r.useMemo(()=>[{label:"Name",value:a.name||"—"},{label:"Email",value:a.email||"—"},{label:"Role",value:a.role},{label:"Team",value:a.team},{label:"Location",value:a.location}],[a]);return e.jsxs("div",{className:"min-h-screen bg-muted/40 p-6",children:[e.jsxs("div",{className:"mx-auto flex w-full max-w-3xl flex-col gap-6",children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:"Onboarding flow"}),e.jsx("h1",{className:"text-2xl font-semibold",children:"New employee wizard"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Collect profile details, team assignment, and confirm submission."})]}),e.jsxs(j,{tabs:y,children:[e.jsx(c,{index:0,children:e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsx(n,{label:"Full name",placeholder:"Jane Doe",value:a.name,onChange:t=>l(o=>({...o,name:t.target.value})),fullWidth:!0}),e.jsx(n,{label:"Email",placeholder:"jane@company.com",value:a.email,onChange:t=>l(o=>({...o,email:t.target.value})),helperText:"We'll send a welcome email with setup steps.",fullWidth:!0})]})}),e.jsx(c,{index:1,children:e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsx(d,{label:"Role",value:a.role,options:T,onChange:t=>l(o=>({...o,role:t.target.value})),fullWidth:!0}),e.jsx(N,{label:"Team",options:D,value:a.team,onChangeValue:(t,o)=>l(S=>({...S,team:o}))}),e.jsx(d,{label:"Location",value:a.location,options:u.map(t=>({label:t,value:t})),onChange:t=>l(o=>({...o,location:t.target.value})),fullWidth:!0}),e.jsx(p,{variant:"outline",className:"w-fit",onClick:()=>m(!0),children:"Add office"})]})}),e.jsx(c,{index:2,children:e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{className:"rounded-lg border border-border bg-card p-4",children:[e.jsx("h2",{className:"text-sm font-semibold text-muted-foreground",children:"Review"}),e.jsx("dl",{className:"mt-3 space-y-2",children:g.map(t=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("dt",{className:"text-muted-foreground",children:t.label}),e.jsx("dd",{className:"font-medium text-foreground",children:t.value})]},t.label))})]}),e.jsx(p,{variant:"primary",onClick:()=>s(!0),children:"Submit request"}),b?e.jsx("p",{className:"text-sm text-green-600",children:"Request submitted successfully."}):null]})})]})]}),e.jsx(w,{open:x,title:"Send onboarding request?",onCancel:()=>s(!1),onConfirm:()=>{s(!1),h(!0)},children:"The HR team will receive this request and create the new employee."}),e.jsx(C,{open:v,title:"Add office location",description:"Create a new office entry for onboarding.",onCancel:()=>m(!1),onSubmit:t=>{t.location&&(f(o=>[...o,t.location]),l(o=>({...o,location:t.location})),m(!1))},children:e.jsx(n,{name:"location",label:"Office name",placeholder:"Lisbon",fullWidth:!0})})]})}const nt={title:"Examples/Form Wizard",parameters:{layout:"fullscreen",docs:{source:{code:F}}},render:()=>e.jsx(R,{})},i={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};const ct=["Default"];export{i as Default,ct as __namedExportsOrder,nt as default};
