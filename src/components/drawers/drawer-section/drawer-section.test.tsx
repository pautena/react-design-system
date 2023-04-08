import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { DrawerSection } from "./drawer-section";
import { SectionItems } from "./drawer-section.mock";
import { DrawerSubmenuVariant } from "../drawer.types";

describe("DrawerSection", () => {
  const renderComponent = ({
    title,
    submenuVariant = "collapse",
  }: {
    title?: string;
    submenuVariant?: DrawerSubmenuVariant;
  } = {}) => {
    return render(
      <DrawerSection title={title} items={SectionItems} submenuVariant={submenuVariant} />,
    );
  };

  describe("title", () => {
    it("would render if is set", () => {
      renderComponent({ title: "Lorem ipsum" });

      expect(screen.getByRole("heading", { name: /lorem ipsum/i })).toBeInTheDocument();
    });

    it("wouldn't render if it's not set", () => {
      renderComponent({ title: undefined });

      expect(screen.queryByRole("heading", { name: /lorem ipsum/i })).not.toBeInTheDocument();
    });
  });

  describe("expandable submenus", () => {
    it.each([["collapse" as DrawerSubmenuVariant], ["popover" as DrawerSubmenuVariant]])(
      "should render the items if submenuVariant='%s'",
      async (submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 5/i }));

        expect(screen.getByRole("link", { name: /item 5.1/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 5.2/i })).toBeVisible();
        expect(screen.getByRole("link", { name: /item 5.3/i })).toBeVisible();
      },
    );

    it.each([
      ["Item 5 collapse submenu", "collapse" as DrawerSubmenuVariant],
      ["Item 5 popover submenu", "popover" as DrawerSubmenuVariant],
    ])(
      "should render a '%s' if submenuVariant='%s'",
      async (label: string, submenuVariant: DrawerSubmenuVariant) => {
        renderComponent({ submenuVariant });

        await userEvent.click(screen.getByRole("button", { name: /item 5/i }));

        expect(screen.getByLabelText(label)).toBeVisible();
      },
    );
  });

  describe("click list item", () => {
    it.each([
      ["/items/1-1", /item 1/i],
      ["/items/1-2", /item 2/i],
      ["/items/1-3", /item 3/i],
      ["/items/1-4", /item 4/i],
    ])("would navigate to %s if %s is clicked", async (to: string, item: RegExp) => {
      const { history } = renderComponent();

      await userEvent.click(screen.getByRole("link", { name: item }));

      expect(history.location.pathname).toBe(to);
    });
  });
});
