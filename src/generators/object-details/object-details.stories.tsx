import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ObjectDetails } from "./object-details";
import { details } from "./object-details.mock";
import { withPadding } from "../../storybook";

export default {
  title: "Generators/ObjectDetails",
  component: ObjectDetails,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ObjectDetails>;

export const Default = () => {
  return <ObjectDetails details={details} />;
};
