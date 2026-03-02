import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/components/button";
import { withContainer } from "@/storybook";
import { ExpandableAlert } from "./expandable-alert";

export default {
  title: "Alerts/ExpandableAlert",
  component: ExpandableAlert,
  decorators: [withContainer({ width: 500 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ExpandableAlert>;

type Story = StoryObj<typeof ExpandableAlert>;

export const Default: Story = {
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"],
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    severity: "success",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    severity: "error",
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    severity: "warning",
  },
};

export const WithoutMetadata: Story = {
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
  },
};

export const MetadataCustomComponent = () => (
  <ExpandableAlert
    severity="info"
    onClose={() => null}
    title="Lorem ipsum"
    message="Lorem ipsum dolor sit amet"
    metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]}
    metadataComponent={
      <div className="space-y-1 text-sm">
        <div className="font-semibold">lorem: ipsum</div>
        <div className="text-xs text-muted-foreground">foo: bar</div>
        <div className="line-through">header: this</div>
        <div className="font-bold">host: localhost</div>
      </div>
    }
  />
);

export const FloatingAlert = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show alert
      </Button>
      {open ? (
        <div className="mt-3 max-w-md">
          <ExpandableAlert
            severity="info"
            onClose={() => setOpen(false)}
            title="Lorem ipsum"
            message="Lorem ipsum dolor sit amet"
            metadata={[
              "lorem: ipsum",
              "foo: bar",
              "header: this",
              "host: localhost",
            ]}
          />
        </div>
      ) : null}
    </div>
  );
};
