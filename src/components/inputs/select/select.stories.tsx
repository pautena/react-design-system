import { Box, MenuItem, useTheme } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import React, { ReactNode } from "react";
import { createTemplate, withContainer } from "../../../storybook";
import { Select, SelectProps, SelectSize } from "./select";
import { faker } from "@faker-js/faker";

const baseArgs = {
  label: "Car model",
  value: faker.vehicle.model(),
  size: "medium" as SelectSize,
  fetching: false,
  loading: false,
  fullWidth: true,
  options: faker.definitions.vehicle?.model || [],
};

export default {
  title: "Components/Inputs/Select",
  component: Select,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Select>;

interface TemplateProps<T extends ReactNode> extends SelectProps<T> {
  options: T[];
}

const Template = createTemplate(<T extends string>({ options, ...rest }: TemplateProps<T>) => {
  return (
    <Select {...rest}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
});

export const WithoutFullWidth = Template.bind({});
WithoutFullWidth.args = {
  ...baseArgs,
  fullWidth: false,
};

export const SelectLoaded = Template.bind({});
SelectLoaded.args = {
  ...baseArgs,
};

export const Loading = Template.bind({});
Loading.args = {
  ...baseArgs,
  loading: true,
};

export const Fetching = Template.bind({});
Fetching.args = {
  ...baseArgs,
  fetching: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...baseArgs,
  size: "small",
};

type WithBackgroundProps = TemplateProps<string> & { bgcolor: "primary" | "secondary" };

export const WithBackground = ({ options, bgcolor: bgcolorProp, ...rest }: WithBackgroundProps) => {
  const { palette } = useTheme();
  const BackgroundColors: Record<"primary" | "secondary", string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
  };
  const bgcolor = BackgroundColors[bgcolorProp];
  const selectColor = palette.getContrastText(bgcolor);

  return (
    <Box bgcolor={bgcolor} padding={3}>
      <Select {...rest} color={selectColor}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

WithBackground.args = {
  bgcolor: "secondary",
  ...baseArgs,
};
