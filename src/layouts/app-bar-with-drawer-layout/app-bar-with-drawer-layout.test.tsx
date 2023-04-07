import React from "react";
import { MiniDrawerStory } from "./app-bar-with-drawer-layout.stories";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { expectContentPlaceholder } from "~/tests/assertions";
import { MiniDrawer, DrawerContent, MiniAppBar, ContentPlaceholder } from "~/components";
import { mockNav } from "~/components/drawers/drawer/drawer.mock";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";

describe("AppBarWithDrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <AppBarWithDrawerLayout>
        <MiniDrawer>
          <DrawerContent nav={mockNav} />
        </MiniDrawer>
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
