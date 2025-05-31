import Typography from "@mui/material/Typography";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../tests/testing-library";
import { DrawerProvider, useDrawer } from "../drawer-context";
import type { DrawerState, DrawerVariant } from "../drawer.types";
import { DrawerAppBar } from "./drawer-app-bar";

describe("DrawerAppBar", () => {
	const renderComponent = ({
		title,
		initialState,
		variant = "temporary",
		clipped,
	}: {
		title?: string;
		initialState?: DrawerState;
		variant?: DrawerVariant;
		clipped?: boolean;
	} = {}) => {
		const TestContent = () => {
			const { state } = useDrawer();
			return <Typography>state: {state}</Typography>;
		};
		render(
			<DrawerProvider
				initialState={initialState}
				variant={variant}
				clipped={clipped}
			>
				<DrawerAppBar title={title}>
					<Typography>test content</Typography>
				</DrawerAppBar>
				<TestContent />
			</DrawerProvider>,
		);
	};

	describe("menu button", () => {
		it.each([
			["temporary" as DrawerVariant, "open" as DrawerState],
			["temporary" as DrawerVariant, "close" as DrawerState],
			["persistent" as DrawerVariant, "open" as DrawerState],
			["persistent" as DrawerVariant, "close" as DrawerState],
			["mini" as DrawerVariant, "collapse" as DrawerState],
		])(
			"should render a menu button if variant is %s",
			(variant, initialState) => {
				renderComponent({ variant, initialState });

				expect(
					screen.getByRole("button", { name: /open drawer/i }),
				).toBeVisible();
			},
		);

		it("should switch the drawer state if is clicked", async () => {
			renderComponent({ initialState: "open", variant: "temporary" });

			await userEvent.click(
				screen.getByRole("button", { name: /open drawer/i }),
			);

			expect(screen.getByText("state: close")).toBeVisible();
		});
	});

	it.each([["mini" as DrawerVariant, "open" as DrawerState]])(
		"should not render a menu button if variant is %s",
		(variant, initialState) => {
			renderComponent({ variant, initialState, clipped: false });

			expect(
				screen.queryByRole("button", { name: /open drawer/i }),
			).not.toBeInTheDocument();
		},
	);

	it("should render the children", () => {
		renderComponent();

		expect(screen.getByText(/test content/i)).toBeVisible();
	});

	describe("title", () => {
		it("shouldn't render a title if it's not defined", () => {
			renderComponent({ title: undefined });

			expect(
				screen.queryByRole("heading", { level: 1 }),
			).not.toBeInTheDocument();
		});

		it("should render a title if it's defined", () => {
			renderComponent({ title: "Lorem ipsum" });

			expect(
				screen.queryByRole("heading", { level: 1, name: /lorem ipsum/i }),
			).toBeInTheDocument();
		});
	});
});
