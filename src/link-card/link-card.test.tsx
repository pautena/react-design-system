import userEvent from "@testing-library/user-event";
import { render, screen } from "../tests/testing-library";
import { LinkCard } from "./link-card";

describe("LinkCard", () => {
  const renderComponent = ({ linkText }: { linkText?: string } = {}) => {
    return render(
      <LinkCard
        title="Lorem ipsum"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        href="/test"
        linkText={linkText}
      />,
    );
  };

  it("should render a title", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { level: 6, name: /lorem ipsum/i }),
    ).toBeVisible();
  });

  it("should render a message", () => {
    renderComponent();

    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeVisible();
  });

  it("should render a extra text if linkText is defined", () => {
    renderComponent({ linkText: "check more" });

    expect(screen.getByText(/check more/i)).toBeVisible();
  });
});
