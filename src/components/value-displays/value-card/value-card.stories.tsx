import React, { PropsWithChildren } from "react";
import { ComponentMeta } from "@storybook/react";
import { ValueCard } from "./value-card";
import { createTemplate } from "../../../storybook";
import { ValueText } from "../value-text";

export default {
  title: "Value displays/ValueCard",
  component: ValueCard,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueCard>;

const Template = createTemplate(({ children }: PropsWithChildren) => {
  return <ValueCard>{children}</ValueCard>;
});

export const ValueCardText = Template.bind({});
ValueCardText.args = {
  children: <ValueText label="Hello world" value="Lorem ipsum sit amet" />,
};
