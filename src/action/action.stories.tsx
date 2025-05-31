import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../storybook";
import { Action } from "./action";

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
		description: "Set your new username",
		buttonText: "Change username",
		helperText: "Min length 8",
	},
};

export const CustomDescription: Story = {
	args: {
		title: "Change username",
		description: (
			<Box>
				<Typography>
					This is a test description
					<Typography fontWeight="bold">with bold text</Typography>
				</Typography>
			</Box>
		),
		buttonText: "Change username",
		helperText: "Min length 8",
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
