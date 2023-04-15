import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { expectContentPlaceholder } from "~/tests/assertions";
import { Drawer, DrawerContent, DrawerAppBar, ContentPlaceholder } from "~/components";
import { mockDrawerNavigation } from "~/components/drawers/drawer.mock";
import { DrawerLayoutProps } from "./drawer-layout";

describe("DrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <DrawerLayoutProps>
        <Drawer>
          <DrawerContent nav={mockDrawerNavigation} />
        </Drawer>
        <DrawerAppBar title="Lorem ipsum" />
        <ContentPlaceholder p={3} />
      </DrawerLayoutProps>,
    );
  };

  it("would render a drawer", async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId("MenuIcon"));

    expect(screen.getByRole("link", { name: /item 1.1/i })).toBeInTheDocument();
  });

  it("would render an appbar", () => {
    renderComponent();

    expect(screen.getByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
  });

  it("would render the content", async () => {
    renderComponent();

    await expectContentPlaceholder();
  });
});
