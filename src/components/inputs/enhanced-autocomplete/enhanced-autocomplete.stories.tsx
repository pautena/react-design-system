import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer } from "../../../storybook";
import { EnhancedAutocomplete } from "./enhanced-autocomplete";
import { faker } from "@faker-js/faker";
import { Box, useTheme } from "@mui/material";
import React from "react";

export default {
  title: "Components/Inputs/EnhancedAutocomplete",
  component: EnhancedAutocomplete,
  decorators: [withContainer({ width: 300 })],
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

export const HelperText = Template.bind({});
HelperText.args = {
  ...Default.args,
  helperText: "This is a helper text",
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

export const SizeSmallLoading = Template.bind({});
SizeSmallLoading.args = {
  ...Default.args,
  size: "small",
  value: options[0],
  loading: true,
};

export const SizeSmallFetching = Template.bind({});
SizeSmallFetching.args = {
  ...Default.args,
  size: "small",
  fetching: true,
  value: options[0],
};

type WithBackgroundProps = {
  bgcolor: "primary" | "secondary";
  loading: boolean;
  fetching: boolean;
};
export const WithBackground = ({
  bgcolor: bgcolorProp,
  loading,
  fetching,
}: WithBackgroundProps) => {
  const { palette } = useTheme();
  const BackgroundColors: Record<"primary" | "secondary", string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
  };
  const bgcolor = BackgroundColors[bgcolorProp];
  const selectColor = palette.getContrastText(bgcolor);

  return (
    <Box bgcolor={bgcolor} padding={3}>
      <EnhancedAutocomplete
        label="Car model"
        options={options}
        color={selectColor}
        loading={loading}
        fetching={fetching}
      />
    </Box>
  );
};

WithBackground.args = {
  bgcolor: "secondary",
  loading: true,
  fetching: true,
};
