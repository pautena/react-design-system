import type { Meta, StoryObj } from "@storybook/react";
import { DrawerProvider } from "../drawer-context";
import { DrawerAppBar } from "./drawer-app-bar";

export default {
	title: "Components/Navigation/DrawerAppBar",
	component: DrawerAppBar,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => (
		<DrawerProvider>
			<DrawerAppBar {...args} />
		</DrawerProvider>
	),
} satisfies Meta<typeof DrawerAppBar>;
type Story = StoryObj<typeof DrawerAppBar>;

export const Default: Story = {
	args: {
		title: "Lorem ipsum",
	},
};

export const WithoutTitle: Story = {};
