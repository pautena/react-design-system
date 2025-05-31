import Typography from "@mui/material/Typography";
import { render, screen } from "../tests/testing-library";
import { Content } from "./content";

describe("Content", () => {
  const renderComponent = () => {
    return render(
      <Content>
        <Typography>Children content</Typography>
      </Content>,
    );
  };

  it("would render a children", () => {
    renderComponent();

    expect(screen.getByText(/children content/i)).toBeInTheDocument();
  });

  it("would render a main element", () => {
    renderComponent();

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
