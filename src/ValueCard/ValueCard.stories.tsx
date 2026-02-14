import type { Meta, StoryObj } from "@storybook/react";
import type { PropsWithChildren } from "react";
import { ValueText } from "../ValueText";
import ValueCard from "./ValueCard";

export default {
  title: "Data Display/ValueCard",
  component: ValueCard,
  parameters: {
    layout: "centered",
  },
  render: ({ children }: PropsWithChildren) => {
    return <ValueCard>{children}</ValueCard>;
  },
} satisfies Meta<typeof ValueCard>;
type Story = StoryObj<typeof ValueCard>;

export const Default: Story = {
  args: {
    children: <ValueText label="Hello world" value="Lorem ipsum sit amet" />,
  },
};
