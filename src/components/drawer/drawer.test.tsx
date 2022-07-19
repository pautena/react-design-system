import React from "react";
import { Drawer } from "./drawer";
import { render, screen } from "../../tests";
import { DrawerProvider } from "./drawer.provider";
import { DummyDrawerContent, mockNav } from "./drawer.mock";
import { Box, Button, createTheme } from "@mui/material";
import { useDrawer } from "./drawer.context";
import userEvent from "@testing-library/user-event";
import {openedMixin,closedMixin} from './drawer.mixins'

describe("Drawer", () => {
  const renderComponent = ({ initialOpen = undefined }: { initialOpen?: boolean } = {}) => {
    const TestContent = () => {
      const { open, close } = useDrawer();

      return (
        <Box>
          <Button onClick={close}>close</Button>
          <Button onClick={open}>open</Button>
        </Box>
      );
    };
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

    expect(screen.queryByRole("menu", { hidden: true })).not.toBeInTheDocument();
  });
});

describe("mixins",()=>{
  describe('openedMixin',()=>{
    it('would match a snapshot',()=>{
      const theme = createTheme();
      expect(openedMixin(theme)).toMatchSnapshot();
    })
  })

  describe('closedMixin',()=>{
    it('would match a snapshot',()=>{
      const theme = createTheme();
      expect(closedMixin(theme)).toMatchSnapshot();
    })
  })
})
