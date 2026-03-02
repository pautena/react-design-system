import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export default {
  title: "Data Display/Card",
  component: Card,
  decorators: [withContainer({ width: 360, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Account details</CardTitle>
        <CardDescription>Review the latest billing summary.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Next invoice scheduled for April 3.
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-sm">Status: Active</span>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage alert settings.</CardDescription>
        <CardAction>
          <button type="button" className="text-xs text-primary">
            Edit
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Email alerts are enabled for new activity.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
        <CardDescription>Smaller paddings and gaps.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Short summary.</p>
      </CardContent>
    </Card>
  ),
};
