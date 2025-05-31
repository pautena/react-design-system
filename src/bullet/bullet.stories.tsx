import type { Meta, StoryObj } from "@storybook/react";
import { Bullet } from "./bullet";

export default {
	title: "Components/Data Display/Bullet",
	component: Bullet,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Bullet>;
type Story = StoryObj<typeof Bullet>;

export const Default: Story = {
	args: {
		variant: "primary",
	},
};

export const PrimaryVariant: Story = {
	args: {
		variant: "primary",
	},
};

export const SecondaryVariant: Story = {
	args: {
		variant: "secondary",
	},
};

export const DefaultVariant: Story = {
	args: {
		variant: "default",
	},
};

export const InfoVariant: Story = {
	args: {
		variant: "info",
	},
};

export const WarningVariant: Story = {
	args: {
		variant: "warning",
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: "error",
	},
};
