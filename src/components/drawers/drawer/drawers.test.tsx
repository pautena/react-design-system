import React from "react";
import { Drawer, DrawerProvider, useDrawer } from "../drawer-provider";
import { render, screen } from "~/tests/testing-library";
import { Box, Button } from "@mui/material";
import { mockDrawerNavigation } from "../drawer.mock";
import { DrawerState } from "../drawer.types";
import userEvent from "@testing-library/user-event";
import { DrawerAppBar } from "../drawer-app-bar";
import { DrawerContent } from "../drawer-content";

const TestContent = () => {
  const { open, close } = useDrawer();

  return (
    <Box>
      <Button onClick={close}>close</Button>
      <Button onClick={open}>open</Button>
    </Box>
  );
};

describe("Drawer", () => {
  const renderComponent = ({ initialState }: { initialState?: DrawerState } = {}) => {
    return render(
      <DrawerProvider initialState={initialState}>
        <Box>
          <DrawerAppBar title="Drawer demo" />
          <Drawer>
            <DrawerContent nav={mockDrawerNavigation} />
          </Drawer>
          <TestContent />
        </Box>
      </DrawerProvider>,
    );
  };

  it("would render closed by default", () => {
    renderComponent();

    expect(screen.queryByRole("menu", { hidden: true })).not.toBeInTheDocument();
  });

  it("would render opened if initialOpen is true", () => {
    renderComponent({ initialState: "open" });

    expect(screen.getByRole("menu", { hidden: false })).toBeInTheDocument();
  });

  it("would open if the user click the open button", async () => {
    renderComponent();

    await userEvent.click(screen.getByText(/open/i));

    expect(screen.getByRole("menu", { hidden: false })).toBeInTheDocument();
  });

  it("would close if the user click the close button and the drawer was opened", async () => {
    renderComponent({ initialState: "open" });

    await userEvent.click(screen.getByText(/close/i));

    expect(screen.getByRole("menu", { hidden: true })).toBeInTheDocument();
  });
});
