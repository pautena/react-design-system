import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { expectContentPlaceholder } from "~/tests/assertions";
import { Drawer, DrawerContent, MiniAppBar, ContentPlaceholder } from "~/components";
import { mockDrawerNavigation } from "~/components/drawers/drawer.mock";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";

describe("AppBarWithDrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <AppBarWithDrawerLayout>
        <Drawer>
          <DrawerContent nav={mockDrawerNavigation} />
        </Drawer>
        <MiniAppBar title="Lorem ipsum" onClickSignOut={() => null} />
        <ContentPlaceholder p={3} />
      </AppBarWithDrawerLayout>,
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
