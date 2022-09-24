import React from "react";
import { EnhancedSelectLoaded } from "./enhanced-select.stories";
import { render, screen } from "../../tests";
import userEvent from "@testing-library/user-event";

describe("EnhancedSelect", () => {
  const renderComponent = ({
    label = EnhancedSelectLoaded.args?.label || "invalid",
    loading = false,
    fetching = false,
  } = {}) => {
    const options = (EnhancedSelectLoaded.args?.options as string[]) || [];
    const value = EnhancedSelectLoaded.args?.value as string;

    render(
      <EnhancedSelectLoaded
        {...EnhancedSelectLoaded.args}
        options={options}
        value={value}
        label={label}
        loading={loading}
        fetching={fetching}
      />,
    );

    return {
      options,
      value,
    };
  };

  it("would render a select with a label", () => {
    renderComponent({ label: "Lorem ipsum" });

    expect(screen.getByRole("button", { name: /lorem ipsum/i })).toBeInTheDocument();
  });

  it("would render the value", () => {
    const { value } = renderComponent();

    expect(screen.getByText(value)).toBeInTheDocument();
  });

  describe("when is loading", () => {
    it("would render a progress indicator", () => {
      renderComponent({ loading: true });

      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("would render the value", () => {
      const { value } = renderComponent({ loading: true });

      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  describe("when is fetching", () => {
    it("would render a progress indicator", () => {
      renderComponent({ fetching: true });

      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("wouldn't render the value", () => {
      const { value } = renderComponent({ fetching: true });

      expect(screen.queryByText(value)).not.toBeInTheDocument();
    });
  });

  describe("when is fetching and loading", () => {
    it("would render a progress indicator", () => {
      renderComponent({ fetching: true, loading: true });

      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("wouldn't render the value", () => {
      const { value } = renderComponent({ fetching: true, loading: true });

      expect(screen.queryByText(value)).not.toBeInTheDocument();
    });
  });

  it("would render a menu item for each option", async () => {
    const { options } = renderComponent({ label: "Lorem ipsum" });

    await userEvent.click(screen.getByRole("button", { name: /lorem ipsum/i }));

    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });
});
