import userEvent from "@testing-library/user-event";
import {
  mockCollapsableDrawerNavigationItem,
  mockLinkAvatarDrawerNavigationItem,
  mockLinkBulletDrawerNavigationItem,
  mockLinkDrawerNavigationItem,
  mockLinkLabelDrawerNavigationItem,
  mockLinkNoIconDrawerNavigationItem,
} from "../drawer.mock";
import { DrawerNavigationItem, DrawerSubmenuVariant } from "../drawer.types";
import React from "react";
import { render, screen } from "~/tests/testing-library";
import { DrawerItem } from "./drawer-item";

describe("DrawerItem", () => {
  const renderComponent = ({
    item,
    submenuVariant = "collapse",
  }: {
    item: DrawerNavigationItem;
    submenuVariant?: DrawerSubmenuVariant;
  }) => {
    return render(<DrawerItem item={item} submenuVariant={submenuVariant} />);
  };

  describe("collapsable item", () => {
    it("should render a text", () => {
      renderComponent({ item: mockCollapsableDrawerNavigationItem });

      expect(screen.getByText(/item 2.3.4.2/i)).toBeVisible();
    });

    it("should be closed by default", () => {
      renderComponent({ item: mockCollapsableDrawerNavigationItem });

      expect(screen.queryByText(/item 2.3.4.2.1/i)).toBeFalsy();
      expect(screen.queryByText(/item 2.3.4.2.2/i)).toBeFalsy();
    });

    describe("expandable submenus", () => {
      it.each([["collapse" as DrawerSubmenuVariant], ["popover" as DrawerSubmenuVariant]])(
        "should render the items if submenuVariant='%s'",
        async (submenuVariant: DrawerSubmenuVariant) => {
          renderComponent({ submenuVariant, item: mockCollapsableDrawerNavigationItem });

          await userEvent.click(screen.getByRole("button", { name: /item 2.3.4.2/i }));

          expect(screen.getByRole("link", { name: /item 2.3.4.2.1/i })).toBeVisible();
          expect(screen.getByRole("link", { name: /item 2.3.4.2.2/i })).toBeVisible();
        },
      );

      it.each([
        ["Item 2.3.4.2 collapse submenu", "collapse" as DrawerSubmenuVariant],
        ["Item 2.3.4.2 popover submenu", "popover" as DrawerSubmenuVariant],
      ])(
        "should render a '%s' if submenuVariant='%s'",
        async (label: string, submenuVariant: DrawerSubmenuVariant) => {
          renderComponent({ submenuVariant, item: mockCollapsableDrawerNavigationItem });

          await userEvent.click(screen.getByRole("button", { name: /item 2.3.4.2/i }));

          expect(screen.getByLabelText(label)).toBeVisible();
        },
      );
    });
  });

  describe("link item", () => {
    it("would render the text", () => {
      renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

      expect(screen.getByRole("link", { name: /item 1.1/i })).toBeInTheDocument();
    });

    it("would navigate to the href when is clicked", async () => {
      const { history } = renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

      await userEvent.click(screen.getByRole("link", { name: /item 1.1/i }));

      expect(history.location.pathname).toBe("/items/1-1");
    });

    describe("icon", () => {
      it("would render an icon when is set", () => {
        renderComponent({ item: mockLinkDrawerNavigationItem });

        expect(screen.getByTestId("DiamondIcon")).toBeInTheDocument();
      });

      it("wouldn't render an icon if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByTestId("DiamondIcon")).not.toBeInTheDocument();
      });
    });

    describe("avatar", () => {
      it("would render an avatar when is set", () => {
        renderComponent({ item: mockLinkAvatarDrawerNavigationItem });

        expect(screen.getByRole("img", { name: /avatar 1/i })).toBeInTheDocument();
      });

      it("wouldn't render an avatar if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("img", { name: /avatar 1/i })).not.toBeInTheDocument();
      });
    });

    describe("label", () => {
      it("would render a label when is set", () => {
        renderComponent({ item: mockLinkLabelDrawerNavigationItem });

        const label = screen.getByRole("label", { name: /10/i });
        expect(label).toBeInTheDocument();
        expect(label).toHaveAttribute("aria-describedby", "error");
      });

      it("wouldn't render a label if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("label", { name: /10/i })).not.toBeInTheDocument();
      });
    });

    describe("bullet", () => {
      it("would render a bullet when is set", () => {
        renderComponent({ item: mockLinkBulletDrawerNavigationItem });

        const bullet = screen.getByRole("bullet");
        expect(bullet).toBeInTheDocument();
        expect(bullet).toHaveAttribute("aria-describedby", "secondary");
      });

      it("wouldn't render a bullet if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("bullet")).not.toBeInTheDocument();
      });
    });
  });
});
