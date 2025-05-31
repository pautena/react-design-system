import type { Meta, StoryObj } from "@storybook/react";
import type { PropsWithChildren } from "react";
import { ValueText } from "../value-text";
import { ValueCard } from "./value-card";

export default {
  title: "Components/Data Display/ValueCard",
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
