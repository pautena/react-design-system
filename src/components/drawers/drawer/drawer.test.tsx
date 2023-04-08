import React from "react";
import { Drawer } from "./drawer";
import { render, screen } from "~/tests/testing-library";
import { DrawerProvider } from "./drawer.provider";
import { DummyDrawerContent, mockNav } from "./drawer.mock";
import { Box, Button, createTheme } from "@mui/material";
import { UndefinedProvider, useDrawer } from "./drawer.context";
import userEvent from "@testing-library/user-event";
import { openedMixin, closedMixin } from "./drawer.mixins";
import { mockConsoleError } from "~/tests/mocks";

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
  const renderComponent = ({ initialOpen = undefined }: { initialOpen?: boolean } = {}) => {
    return render(
      <DrawerProvider initialOpen={initialOpen}>
        <Box>
          <Drawer>
            <DummyDrawerContent nav={mockNav} />
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
    renderComponent({ initialOpen: true });

    expect(screen.getByRole("menu", { hidden: false })).toBeInTheDocument();
  });

  it("would open if the user click the open button", async () => {
    renderComponent();

    await userEvent.click(screen.getByText(/open/i));

    expect(screen.getByRole("menu", { hidden: false })).toBeInTheDocument();
  });

  it("would close if the user click the close button and the drawer was opened", async () => {
    renderComponent({ initialOpen: true });

    await userEvent.click(screen.getByText(/close/i));

    expect(screen.getByRole("menu", { hidden: true })).toBeInTheDocument();
  });
});

describe("DrawerContext", () => {
  mockConsoleError();

  it("would throw an error if no Provider is defined", () => {
    expect(() =>
      render(
        <Box>
          <Drawer>
            <DummyDrawerContent nav={mockNav} />
          </Drawer>
          <TestContent />
        </Box>,
      ),
    ).toThrow(UndefinedProvider);
  });
});

describe("mixins", () => {
  it("would match a snapshot", () => {
    const theme = createTheme();
    expect(openedMixin(theme)).toStrictEqual({
      overflowX: "hidden",
      transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      width: 240,
    });
  });

  it("would match a snapshot", () => {
    const theme = createTheme();
    expect(closedMixin(theme)).toStrictEqual({
      "@media (min-width:600px)": {
        width: "calc(64px + 1px)",
      },
      overflowX: "hidden",
      transition: "width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      width: "calc(56px + 1px)",
    });
  });
});
