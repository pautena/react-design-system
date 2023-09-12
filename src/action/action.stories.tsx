import { Meta, StoryObj } from "@storybook/react";
import { Action } from "./action";
import { loremIpsum } from "lorem-ipsum";
import { withContainer } from "../storybook";
import { Box, Typography } from "@mui/material";
import React from "react";

export default {
  title: "Components/Inputs/Action",
  component: Action,
  decorators: [withContainer({ padding: 2 })],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Action>;
type Story = StoryObj<typeof Action>;

export const Default: Story = {
  args: {
    title: "Change username",
    description: loremIpsum({ count: 5, units: "sentence" }),
    buttonText: "Change username",
    helperText: loremIpsum({ count: 1, units: "sentence" }),
  },
};

export const CustomDescription: Story = {
  args: {
    title: "Change username",
    description: (
      <Box>
        <Typography>
          This is a test description<Typography fontWeight="bold">with bold text</Typography>
        </Typography>
      </Box>
    ),
    buttonText: "Change username",
    helperText: loremIpsum({ count: 1, units: "sentence" }),
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: "warning",
  },
};

export const Sucess: Story = {
  args: {
    ...Default.args,
    variant: "success",
  },
};

export const Confirmable: Story = {
  args: {
    ...Default.args,
    confirmable: true,
    confirmTitle: "Username change",
    confirmDescription: "Do you want to change the username?",
  },
};

export const ConfirmableWithPassphrase: Story = {
  args: {
    ...Confirmable.args,
    passphrase: "yes",
  },
};
