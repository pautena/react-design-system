import { faker } from "@faker-js/faker";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../storybook";
import TextField from "./TextField";

export default {
  title: "Inputs/TextField",
  component: TextField,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextField>;
type Story = StoryObj<typeof TextField>;

const options = faker.definitions.vehicle?.model || [];

export const Default: Story = {
  args: {
    label: "Car model",
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "This is a helper text",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const LoadingWithValue: Story = {
  args: {
    ...Default.args,
    loading: true,
    value: options[0],
  },
};

export const Fetching: Story = {
  args: {
    ...Default.args,
    fetching: true,
  },
};

export const LoadingAndFetching: Story = {
  args: {
    ...Default.args,
    fetching: true,
    loading: true,
  },
};

export const FetchingWithEndAdornment: Story = {
  args: {
    ...Default.args,
    fetching: true,
    InputProps: {
      endAdornment: (
        <IconButton>
          <ClearIcon />
        </IconButton>
      ),
    },
  },
};

export const SizeSmall: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const SizeSmallFetching: Story = {
  args: {
    ...Default.args,
    size: "small",
    fetching: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const SizeSmallLoading: Story = {
  args: {
    ...Default.args,
    size: "small",
    loading: true,
  },
};

type WithBackgroundProps = {
  bgcolor: "primary" | "secondary";
  fetching?: boolean;
  loading?: boolean;
};

export const WithBackground = {
  render: ({
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
        <TextField
          label="Car model"
          hexColor={color}
          fetching={fetching}
          loading={loading}
        />
      </Box>
    );
  },

  args: {
    bgcolor: "secondary",
    loading: true,
    fetching: true,
  },
};

export const WithSlotPropsCustomization: Story = {
  args: {
    label: "Username",
    loading: true,
    helperText: "Enter your username",
    slotProps: {
      loadingIndicator: {
        size: 24,
        color: "primary",
      },
      helperText: {
        sx: { fontWeight: "bold" },
      },
    },
  },
};
