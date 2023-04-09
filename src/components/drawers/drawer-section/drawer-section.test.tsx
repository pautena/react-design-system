import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { DrawerSection } from "./drawer-section";
import { DrawerSubmenuVariant } from "../drawer.types";
import { mockCollapsableDrawerNavigationSection } from "../drawer.mock";
import { DrawerProvider } from "../drawer-provider";

describe("DrawerSection", () => {
  const renderComponent = ({
    title,
    submenuVariant = "collapse",
  }: {
    title?: string;
    submenuVariant?: DrawerSubmenuVariant;
  } = {}) => {
    return render(
      <DrawerProvider initialState="open">
        <DrawerSection
          title={title}
          items={mockCollapsableDrawerNavigationSection.items}
          submenuVariant={submenuVariant}
        />
      </DrawerProvider>,
    );
  };

  describe("title", () => {
    it("would render if is set", () => {
      renderComponent({ title: "Item 1" });

      expect(screen.getByRole("heading", { name: /item 1/i })).toBeInTheDocument();
    });

    it("wouldn't render if it's not set", () => {
      renderComponent({ title: undefined });

      expect(screen.queryByRole("heading", { name: /item 1/i })).not.toBeInTheDocument();
    });
  });

  describe("expandable submenus", () => {
    it.each([["collapse" as DrawerSubmenuVariant], ["popover" as DrawerSubmenuVariant]])(
      "should render the items if submenuVariant='%s'",
      async (submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 2.3/i }));

        expect(screen.getByRole("link", { name: /item 2.3.1/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 2.3.2/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 2.3.3/i })).toBeVisible();
      },
    );

    it.each([
      ["Item 2.3 collapse submenu", "collapse" as DrawerSubmenuVariant],
      ["Item 2.3 popover submenu", "popover" as DrawerSubmenuVariant],
    ])(
      "should render a '%s' if submenuVariant='%s'",
      async (label: string, submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 2.3/i }));

        expect(screen.getByLabelText(label)).toBeVisible();
      },
    );
  });

  describe("click list item", () => {
    it.each([
      ["/items/2-1", /item 2.1/i],
      ["/items/2-2", /item 2.2/i],
    ])("would navigate to %s if %s is clicked", async (to: string, item: RegExp) => {
      const { history } = renderComponent();

      await userEvent.click(screen.getByRole("link", { name: item }));

      expect(history.location.pathname).toBe(to);
    });
  });
});
