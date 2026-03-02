import { render, screen } from "../../tests/testing-library";
import { Content } from "./content";

describe("Content", () => {
  it("would render children", () => {
    render(<Content>Children content</Content>);

    expect(screen.getByText(/children content/i)).toBeInTheDocument();
  });

  it("would render a main element", () => {
    render(<Content>Children content</Content>);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
