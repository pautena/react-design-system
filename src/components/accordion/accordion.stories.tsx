import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default {
  title: "Data Display/Accordion",
  component: Accordion,
  decorators: [withContainer({ width: 420, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is included?</AccordionTrigger>
        <AccordionContent>
          The plan includes unlimited projects and email support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I change billing?</AccordionTrigger>
        <AccordionContent>
          Update billing details from your organization settings page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          Email and in-app alerts are enabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Security</AccordionTrigger>
        <AccordionContent>Two-factor auth is enforced.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
