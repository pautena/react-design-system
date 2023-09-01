import React from "react";
import { render, screen } from "~/Tests/TestingLibrary";
import userEvent from "@testing-library/user-event";
import { expectContentPlaceholder } from "~/Tests/Assertions";
import { mockDrawerNavigation } from "~/Components/Drawer.mock";
import { DrawerLayout } from "./DrawerLayout";
import { Drawer } from "~/Components/Drawer";
import { DrawerContent } from "~/Components/DrawerContent";
import { DrawerAppBar } from "~/Components/DrawerAppBar/DrawerAppBar";
import { ContentPlaceholder } from "~/Components/ContentPlaceholder";

describe("DrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <DrawerLayout>
        <Drawer>
          <DrawerContent nav={mockDrawerNavigation} />
        </Drawer>
        <DrawerAppBar title="Lorem ipsum" />
        <ContentPlaceholder p={3} />
      </DrawerLayout>,
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
