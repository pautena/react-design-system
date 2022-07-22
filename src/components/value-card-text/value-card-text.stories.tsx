import { ComponentMeta } from "@storybook/react";
import { ValueCardText } from "./value-card-text";

export default {
  title: "Value Card/ValueCardText",
  component: ValueCardText,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueCardText>;


export const Default = ()=> <ValueCardText label="Lorem" value="ipsum sit"/>