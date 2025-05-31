import Typography from "@mui/material/Typography";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../tests/testing-library";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider, useDrawer } from "../drawer-context";
import type { DrawerState, DrawerVariant } from "../drawer.types";
import { Drawer } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";

describe("Drawer", () => {
	const renderComponent = ({
		initialState = "open",
		variant,
		clipped,
	}: {
		initialState?: DrawerState;
		variant?: DrawerVariant;
		clipped?: boolean;
	} = {}) => {
		const DrawerContentTest = () => {
			const { state } = useDrawer();

			return (
				<>
					<Typography>state: {state}</Typography>
					<DrawerContent navigation={mockDrawerNavigation} />
				</>
			);
		};

		render(
			<DrawerProvider
				initialState={initialState}
				variant={variant}
				clipped={clipped}
			>
				<Drawer>
					<DrawerContentTest />
				</Drawer>
			</DrawerProvider>,
		);
	};

	it("should render the items text if the drawer is open", () => {
		renderComponent({ initialState: "open" });

		mockDrawerNavigation.forEach((item) => {
			expect(screen.getByText(item.text)).toBeVisible();
		});
	});

	describe("close button", () => {
		it.each([
			[true, "temporary", false],
			[false, "temporary", true],
			[true, "persistent", false],
			[false, "persistent", true],
			[true, "mini", false],
			[false, "mini", true],
		] satisfies [boolean, DrawerVariant, boolean][])(
			"should be visible=%s if variant=%s and clipped=%s",
			(visible, variant, clipped) => {
				renderComponent({ variant, clipped });

				expect(!!screen.queryByTestId("ChevronLeftIcon")).toBe(visible);
			},
		);

		it("should switch the drawer state if is clicked", async () => {
			renderComponent({
				initialState: "open",
				variant: "temporary",
				clipped: false,
			});

			await userEvent.click(screen.getByTestId("ChevronLeftIcon"));

			expect(screen.getByText("state: close")).toBeVisible();
		});
	});
});
