import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import { DrawerSubmenuVariant } from "../drawer.types";

interface RenderComponentOptions {
  selected?: boolean;
  submenuVariant?: DrawerSubmenuVariant;
}

describe("DrawerCollapsableItem", () => {
  const renderComponent = ({
    selected,
    submenuVariant = "collapse",
  }: RenderComponentOptions = {}) => {
    const items = [
      {
        id: "item2.3.1",
        text: "Item 2.3.1",
        href: "/items/2-3-1",
      },
      {
        id: "item2.3.2",
        text: "Item 2.3.2",
        href: "/items/2-3-2",
      },
      {
        id: "item2.3.3",
        text: "Item 2.3.3",
        href: "/items/2-3-3",
      },
    ];
    render(
      <DrawerCollapsableItem
        submenuVariant={submenuVariant}
        selectedItem="item2.3.2"
        text="lorem ipsum"
        items={items}
        selected={selected}
      />,
    );
  };

  it("should render a text", () => {
    renderComponent();

    expect(screen.getByText(/lorem ipsum/i)).toBeVisible();
  });

  it("should be closed by default", () => {
    renderComponent();

    expect(screen.queryByText(/item 2.3.1/i)).toBeFalsy();
    expect(screen.queryByText(/item 2.3.2/i)).toBeFalsy();
    expect(screen.queryByText(/item 2.3.3/i)).toBeFalsy();
  });

  describe("expandable submenus", () => {
    it.each([["collapse" as DrawerSubmenuVariant], ["popover" as DrawerSubmenuVariant]])(
      "should render the items if submenuVariant='%s'",
      async (submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /lorem ipsum/i }));

        expect(screen.getByRole("link", { name: /item 2.3.1/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 2.3.2/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 2.3.3/i })).toBeVisible();
      },
    );

    it.each([
      ["lorem ipsum collapse submenu", "collapse" as DrawerSubmenuVariant],
      ["lorem ipsum popover submenu", "popover" as DrawerSubmenuVariant],
    ])(
      "should render a '%s' if submenuVariant='%s'",
      async (label: string, submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /lorem ipsum/i }));

        expect(screen.getByLabelText(label)).toBeVisible();
      },
    );
  });
});
