import { render, screen } from "@testing-library/react";
import { TabProvider } from "../tab-provider";
import { TabPanel } from "./tab-panel";

describe("TabPanel", () => {
	function renderInstance(initialValue: number) {
		render(
			<TabProvider initialValue={initialValue}>
				<TabPanel index={0}>Panel content</TabPanel>
			</TabProvider>,
		);
	}

	it("if the provider value is the index the content is displayed", () => {
		renderInstance(0);

		expect(screen.getByText(/panel content/i)).toBeInTheDocument();
	});

	it("if the provider value is not the index the content is not displayed", () => {
		renderInstance(1);

		expect(screen.queryByText(/panel content/i)).not.toBeInTheDocument();
	});
});
