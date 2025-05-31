import Typography from "@mui/material/Typography";
import { render, screen } from "../tests/testing-library";
import { CenterContainer } from "./center-container";

describe("CenterContainer", () => {
	it("would render the children", () => {
		render(
			<CenterContainer>
				<Typography>Content</Typography>
			</CenterContainer>,
		);

		expect(screen.getByText(/content/i)).toBeInTheDocument();
	});
});
