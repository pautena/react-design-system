import { useDemoData } from "@mui/x-data-grid-generator";
import { ComponentMeta } from "@storybook/react";
import { useDemoDataObject } from "../../storybook";
import { ObjectDetails } from "./object-details";

export default {
  title: "Generators/ObjectDetails",
  component: ObjectDetails,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ObjectDetails>;

export const Default = () => {
  const { object } = useDemoDataObject({
    maxColumns:20,
  });

  return <ObjectDetails details={object} />;
};
