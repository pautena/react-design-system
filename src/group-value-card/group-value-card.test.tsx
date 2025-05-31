import { Typography } from "@mui/material";
import { render, screen } from "../tests/testing-library";
import { GroupValueCardDummy } from "./group-value-card.mock";

describe("GroupValueCard", () => {
  const renderComponent = ({
    title = "Hello world",
    subtitle = undefined,
  }: { title?: string; subtitle?: string } = {}) => {
    return render(
      <GroupValueCardDummy title={title} subtitle={subtitle}>
        <Typography>Test content</Typography>
      </GroupValueCardDummy>,
    );
  };
  it("would render a title", () => {
    renderComponent({ title: "Hello world" });

    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  describe("subtitle", () => {
    it("would not render a subtitle if it's not provided", () => {
      renderComponent({ subtitle: undefined });

      expect(
        screen.queryByRole("heading", { level: 2 }),
      ).not.toBeInTheDocument();
    });

    it("would render a subtitle if it's provided", () => {
      renderComponent({ subtitle: "Hi. I am batman" });

      expect(
        screen.getByRole("heading", { level: 2, name: /hi. i am batman/i }),
      ).toBeVisible();
    });
  });

  it("would render all values", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeVisible();
    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeVisible();

    expect(screen.getByRole("label", { name: /enabled/i })).toBeVisible();
    expect(screen.getByLabelText(/enabled/i)).toBeChecked();

    expect(screen.getByRole("label", { name: /quantity/i })).toBeVisible();
    expect(screen.getByText(/1200/i)).toBeVisible();

    expect(screen.getByRole("label", { name: /currency/i })).toBeVisible();
    expect(screen.getByText(/eur/i)).toBeVisible();

    expect(screen.getByRole("label", { name: /i am batman/i })).toBeVisible();
    expect(screen.getByText(/does it come in black/i)).toBeVisible();

    expect(screen.getByRole("label", { name: /status/i })).toBeVisible();
    expect(screen.getByText(/open/i)).toBeVisible();

    expect(screen.getByRole("label", { name: /level/i })).toBeVisible();
    expect(screen.getByText(/2144/i)).toBeVisible();
  });
});
