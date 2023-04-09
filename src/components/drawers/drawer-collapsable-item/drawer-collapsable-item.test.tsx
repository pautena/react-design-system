import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import { DrawerSubmenuVariant } from "../drawer.types";
import { mockListDrawerNavigationItems } from "../drawer.mock";

interface RenderComponentOptions {
  selected?: boolean;
  submenuVariant?: DrawerSubmenuVariant;
}

describe("DrawerCollapsableItem", () => {
  const renderComponent = ({
    selected,
    submenuVariant = "collapse",
  }: RenderComponentOptions = {}) => {
    render(
      <DrawerCollapsableItem
        submenuVariant={submenuVariant}
        selectedItem="item2.3.2"
        text="Item 1"
        items={mockListDrawerNavigationItems}
        selected={selected}
      />,
    );
  };

  it("should render a text", () => {
    renderComponent();

    expect(screen.getByText(/item 1/i)).toBeVisible();
  });

  it("should be closed by default", () => {
    renderComponent();

    expect(screen.queryByText(/item 1.1/i)).toBeFalsy();
    expect(screen.queryByText(/item 1.2/i)).toBeFalsy();
    expect(screen.queryByText(/item 1.3/i)).toBeFalsy();
  });

  describe("expandable submenus", () => {
    it.each([["collapse" as DrawerSubmenuVariant], ["popover" as DrawerSubmenuVariant]])(
      "should render the items if submenuVariant='%s'",
      async (submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 1/i }));

        expect(screen.getByRole("link", { name: /item 1.1/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 1.2/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 1.3/i })).toBeVisible();
      },
    );

    it.each([
      ["Item 1 collapse submenu", "collapse" as DrawerSubmenuVariant],
      ["Item 1 popover submenu", "popover" as DrawerSubmenuVariant],
    ])(
      "should render a '%s' if submenuVariant='%s'",
      async (label: string, submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 1/i }));

        expect(screen.getByLabelText(label)).toBeVisible();
      },
    );
  });
});
