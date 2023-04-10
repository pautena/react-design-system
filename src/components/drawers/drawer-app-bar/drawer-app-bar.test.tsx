import React from "react";
import { render, screen } from "~/tests/testing-library";
import { DrawerAppBar } from "./drawer-app-bar";
import { DrawerProvider } from "../drawer";
import { DrawerState } from "~/components/drawers";
import { Typography } from "@mui/material";

describe("DrawerAppBar", () => {
  const renderComponent = ({
    title,
    initialState,
  }: {
    title?: string;
    initialState?: DrawerState;
  } = {}) => {
    render(
      <DrawerProvider initialState={initialState}>
        <DrawerAppBar title={title}>
          <Typography>test content</Typography>
        </DrawerAppBar>
      </DrawerProvider>,
    );
  };

  it("should render a menu button", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /open drawer/i })).toBeInTheDocument();
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
