import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import {
  Autocomplete,
  Button,
  ConfirmDialog,
  FormDialog,
  Select,
  TabCard,
  TabCardPanel,
  TextField,
} from "@/index";

const tabs = [{ text: "Profile" }, { text: "Assignment" }, { text: "Review" }];

const roleOptions = [
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product", value: "product" },
];

const teamOptions = ["Platform", "Growth", "Data", "Support"];

const Example = () => {
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

  const reviewRows = useMemo(
    () => [
      { label: "Name", value: formState.name || "—" },
      { label: "Email", value: formState.email || "—" },
      { label: "Role", value: formState.role },
      { label: "Team", value: formState.team },
      { label: "Location", value: formState.location },
    ],
    [formState],
  );

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
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                fullWidth
              />
              <TextField
                label="Email"
                placeholder="jane@company.com"
                value={formState.email}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
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
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    role: event.target.value,
                  }))
                }
                fullWidth
              />
              <Autocomplete
                label="Team"
                options={teamOptions}
                value={formState.team}
                onChangeValue={(_, value) =>
                  setFormState((prev) => ({ ...prev, team: value }))
                }
              />
              <Select
                label="Location"
                value={formState.location}
                options={locations.map((location) => ({
                  label: location,
                  value: location,
                }))}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    location: event.target.value,
                  }))
                }
                fullWidth
              />
              <Button
                variant="outline"
                className="w-fit"
                onClick={() => setShowLocationDialog(true)}
              >
                Add office
              </Button>
            </div>
          </TabCardPanel>

          <TabCardPanel index={2}>
            <div className="space-y-4 p-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h2 className="text-sm font-semibold text-muted-foreground">
                  Review
                </h2>
                <dl className="mt-3 space-y-2">
                  {reviewRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <dt className="text-muted-foreground">{row.label}</dt>
                      <dd className="font-medium text-foreground">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Button variant="primary" onClick={() => setShowConfirm(true)}>
                Submit request
              </Button>
              {submitted ? (
                <p className="text-sm text-green-600">
                  Request submitted successfully.
                </p>
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
          if (!data.location) {
            return;
          }
          setLocations((prev) => [...prev, data.location]);
          setFormState((prev) => ({ ...prev, location: data.location }));
          setShowLocationDialog(false);
        }}
      >
        <TextField
          name="location"
          label="Office name"
          placeholder="Lisbon"
          fullWidth
        />
      </FormDialog>
    </div>
  );
};

export default {
  title: "Examples/Form Wizard",
  component: Example,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Example>;

type Story = StoryObj<typeof Example>;

export const Default: Story = {};
