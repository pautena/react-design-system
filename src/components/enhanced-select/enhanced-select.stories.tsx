import { Box, MenuItem, PropTypes, useTheme } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import React, { ReactNode } from "react";
import { createTemplate, withContainer } from "../../storybook";
import { EnhancedSelect, EnhancedSelectProps } from "./enhanced-select";
import { faker } from "@faker-js/faker";

const baseArgs = {
  label: "Car model",
  value: faker.vehicle.model(),
  size: "medium",
  fetching: false,
  loading: false,
  fullWidth: true,
  options: faker.definitions.vehicle?.model || [],
};

export default {
  title: "Input/EnhancedSelect",
  component: EnhancedSelect,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof EnhancedSelect>;

interface TemplateProps<T extends ReactNode> extends EnhancedSelectProps<T> {
  options: T[];
}

const Template = createTemplate(<T extends string>({ options, ...rest }: TemplateProps<T>) => {
  return (
    <EnhancedSelect {...rest}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </EnhancedSelect>
  );
});

export const WithoutFullWidth = Template.bind({});
WithoutFullWidth.args = {
  ...baseArgs,
  fullWidth: false,
};

export const EnhancedSelectLoaded = Template.bind({});
EnhancedSelectLoaded.args = {
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

type WithBackgroundProps<T extends ReactNode> = TemplateProps<T> & { bgcolor: PropTypes.Color };

export const WithBackground = <T extends string>({
  options,
  bgcolor: bgcolorProp,
  ...rest
}: WithBackgroundProps<T>) => {
  const { palette } = useTheme();
  const bgcolor = palette[bgcolorProp].main;
  const selectColor = palette.getContrastText(bgcolor);

  return (
    <Box bgcolor={bgcolor} padding={3}>
      <EnhancedSelect {...rest} color={selectColor}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </EnhancedSelect>
    </Box>
  );
};

WithBackground.args = {
  bgcolor: "secondary",
  ...baseArgs,
};
