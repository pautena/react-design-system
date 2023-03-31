import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer } from "../../../storybook";
import { EnhancedTextField } from "./enhanced-text-field";
import { faker } from "@faker-js/faker";
import { Box, IconButton, useTheme } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

export default {
  title: "Components/Inputs/EnhancedTextField",
  component: EnhancedTextField,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof EnhancedTextField>;

const options: string[] = faker.definitions.vehicle?.model || [];

const Template = createTemplate(EnhancedTextField);

export const Default = Template.bind({});
Default.args = {
  label: "Car model",
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

export const FetchingWithEndAdornment = Template.bind({});
FetchingWithEndAdornment.args = {
  ...Default.args,
  fetching: true,
  InputProps: {
    endAdornment: (
      <IconButton>
        <ClearIcon />
      </IconButton>
    ),
  },
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Default.args,
  size: "small",
};

export const SizeSmallFetching = Template.bind({});
SizeSmallFetching.args = {
  ...Default.args,
  size: "small",
  fetching: true,
};

export const SizeSmallLoading = Template.bind({});
SizeSmallLoading.args = {
  ...Default.args,
  size: "small",
  loading: true,
};

type WithBackgroundProps = {
  bgcolor: "primary" | "secondary";
  fetching?: boolean;
  loading?: boolean;
};
export const WithBackground = ({
  bgcolor: bgcolorProp,
  fetching,
  loading,
}: WithBackgroundProps) => {
  const { palette } = useTheme();
  const BackgroundColors: Record<"primary" | "secondary", string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
  };
  const bgcolor = BackgroundColors[bgcolorProp];
  const color = palette.getContrastText(bgcolor);

  return (
    <Box bgcolor={bgcolor} padding={3}>
      <EnhancedTextField label="Car model" hexColor={color} fetching={fetching} loading={loading} />
    </Box>
  );
};

WithBackground.args = {
  bgcolor: "secondary",
  loading: true,
  fetching: true,
};
