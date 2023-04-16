import React from "react";
import { render, screen } from "~/tests/testing-library";
import { DrawerAppBar } from "./drawer-app-bar";
import { DrawerProvider } from "../drawer-provider";
import { DrawerState, DrawerVariant } from "~/components/drawers";
import { Typography } from "@mui/material";

describe("DrawerAppBar", () => {
  const renderComponent = ({
    title,
    initialState,
    variant = "temporary",
  }: {
    title?: string;
    initialState?: DrawerState;
    variant?: DrawerVariant;
  } = {}) => {
    render(
      <DrawerProvider initialState={initialState} variant={variant}>
        <DrawerAppBar title={title}>
          <Typography>test content</Typography>
        </DrawerAppBar>
      </DrawerProvider>,
    );
  };

  it.each([
    ["temporary" as DrawerVariant, "open" as DrawerState],
    ["temporary" as DrawerVariant, "close" as DrawerState],
    ["persistent" as DrawerVariant, "open" as DrawerState],
    ["persistent" as DrawerVariant, "close" as DrawerState],
    ["mini" as DrawerVariant, "collapse" as DrawerState],
  ])("should render a menu button if variant is %s", (variant, initialState) => {
    renderComponent({ variant, initialState });

    expect(screen.getByRole("button", { name: /open drawer/i })).toBeVisible();
  });

  it.each([
    ["clipped" as DrawerVariant, "open" as DrawerState],
    ["mini" as DrawerVariant, "open" as DrawerState],
  ])("should not render a menu button if variant is %s", (variant, initialState) => {
    renderComponent({ variant, initialState });

    expect(screen.queryByRole("button", { name: /open drawer/i })).not.toBeInTheDocument();
  });

  it("should render the children", () => {
    renderComponent();

    expect(screen.getByText(/test content/i)).toBeVisible();
  });

  describe("title", () => {
    it("shouldn't render a title if it's not defined", () => {
      renderComponent({ title: undefined });

      expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
    });

    it("should render a title if it's defined", () => {
      renderComponent({ title: "Lorem ipsum" });

      expect(screen.queryByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
    });
  });
});
