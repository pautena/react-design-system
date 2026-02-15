import { faker } from "@faker-js/faker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { styled, useTheme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { withContainer } from "../storybook";
import Select, { type SelectProps, type SelectSize } from "./Select";

const baseArgs = {
  label: "Car model",
  value: faker.vehicle.model(),
  size: "medium" as SelectSize,
  fetching: false,
  loading: false,
  fullWidth: true,
  options: [...faker.definitions.vehicle.model],
};

interface TemplateProps<T extends ReactNode> extends SelectProps<T> {
  options: T[];
}

const _DemoSelect = ({ options, ...rest }: TemplateProps<string>) => {
  return (
    <Select {...rest}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default {
  title: "Inputs/Select",
  component: Select,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
  args: {
    ...baseArgs,
  },
  render: (args) => {
    const { options, ...rest } = args as TemplateProps<string>;
    return (
      <Select {...rest}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    );
  },
} satisfies Meta<typeof Select>;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const WithoutFullWidth: Story = {
  args: {
    ...baseArgs,
    fullWidth: false,
  },
};

export const SelectLoaded: Story = {
  args: {
    ...baseArgs,
  },
};

export const Loading: Story = {
  args: {
    ...baseArgs,
    loading: true,
  },
};

export const Fetching: Story = {
  args: {
    ...baseArgs,
    fetching: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...baseArgs,
    size: "small",
  },
};

type WithBackgroundProps = TemplateProps<string> & {
  bgcolor: "primary" | "secondary";
};

export const WithBackground = {
  render: ({ options, bgcolor: bgcolorProp, ...rest }: WithBackgroundProps) => {
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
  },

  args: {
    bgcolor: "secondary",
    ...baseArgs,
  },
};

/**
 * Example demonstrating slot props customization.
 * All internal elements can be replaced with custom components and styled.
 */
export const WithSlotPropsCustomization: Story = {
  render: (args) => {
    // Custom styled components
    const CustomFormControl = styled(Box)(({ theme }) => ({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      padding: theme.spacing(2),
      border: `2px dashed ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
    }));

    const CustomLabel = styled(Box)(({ theme }) => ({
      fontSize: "0.875rem",
      fontWeight: 600,
      color: theme.palette.primary.main,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    }));

    const { options, ...rest } = args as TemplateProps<string>;

    return (
      <Select
        {...rest}
        slots={{
          formControl: CustomFormControl as any,
          inputLabel: CustomLabel as any,
        }}
        slotProps={{
          select: {
            sx: {
              backgroundColor: "primary.light",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    );
  },
  args: {
    ...baseArgs,
  },
  decorators: [withContainer({ width: 300 })],
};
