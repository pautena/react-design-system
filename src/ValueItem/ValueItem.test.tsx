import Typography from "@mui/material/Typography";
import { render, screen } from "../tests/testing-library";
import ValueItem from "./ValueItem";

describe("ValueItem", () => {
  const renderComponent = () => {
    render(
      <ValueItem>
        <Typography>test content</Typography>
      </ValueItem>,
    );
  };

  it("should render the children", () => {
    renderComponent();

    expect(screen.getByText(/test content/i)).toBeVisible();
  });
});
