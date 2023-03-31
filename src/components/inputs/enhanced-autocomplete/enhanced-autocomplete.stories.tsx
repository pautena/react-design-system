import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer } from "../../../storybook";
import { EnhancedAutocomplete, EnhancedAutocompleteProps } from "./enhanced-autocomplete";
import { faker } from "@faker-js/faker";
import { Box, useTheme } from "@mui/material";
import React from "react";

export default {
  title: "Components/Inputs/EnhancedAutocomplete",
  component: EnhancedAutocomplete,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof EnhancedAutocomplete>;

const options: string[] = faker.definitions.vehicle?.model || [];

const Template = createTemplate(EnhancedAutocomplete);

export const Default = Template.bind({});
Default.args = {
  label: "Car model",
  options,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const LoadingWithValue = Template.bind({});
LoadingWithValue.args = {
  ...Default.args,
  loading: true,
  value: options[0],
};

export const Fetching = Template.bind({});
Fetching.args = {
  ...Default.args,
  fetching: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Default.args,
  size: "small",
};

type WithBackgroundProps = { bgcolor: "primary" | "secondary" };
export const WithBackground = ({ bgcolor: bgcolorProp }: WithBackgroundProps) => {
  const { palette } = useTheme();
  const BackgroundColors: Record<"primary" | "secondary", string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
  };
  const bgcolor = BackgroundColors[bgcolorProp];
  const selectColor = palette.getContrastText(bgcolor);

  return (
    <Box bgcolor={bgcolor} padding={3}>
      <EnhancedAutocomplete label="Car model" options={options} color={selectColor} />
    </Box>
  );
};

WithBackground.args = {
  bgcolor: "secondary",
};
