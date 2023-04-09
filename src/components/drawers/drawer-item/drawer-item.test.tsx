import userEvent from "@testing-library/user-event";
import {
  mockCollapsableDrawerNavigationItem,
  mockLinkAvatarDrawerNavigationItem,
  mockLinkBulletDrawerNavigationItem,
  mockLinkDrawerNavigationItem,
  mockLinkLabelDrawerNavigationItem,
  mockLinkNoIconDrawerNavigationItem,
} from "../drawer.mock";
import { DrawerNavigationItem, DrawerState } from "../drawer.types";
import React from "react";
import { render, screen } from "~/tests/testing-library";
import { DrawerItem } from "./drawer-item";
import { DrawerProvider } from "../drawer";

describe("DrawerItem", () => {
  const renderComponent = ({
    item,
    initialState = "open",
  }: {
    item: DrawerNavigationItem;
    initialState?: DrawerState;
  }) => {
    return render(
      <DrawerProvider initialState={initialState}>
        <DrawerItem item={item} />
      </DrawerProvider>,
    );
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
      it.each([["collapse" as DrawerState], ["open" as DrawerState]])(
        "should render the items if submenuVariant='%s'",
        async (initialState: DrawerState) => {
          renderComponent({ initialState, item: mockCollapsableDrawerNavigationItem });

          await userEvent.click(screen.getByRole("button", { name: /item 2.3.4.2/i }));

          expect(screen.getByRole("link", { name: /item 2.3.4.2.1/i })).toBeVisible();
          expect(screen.getByRole("link", { name: /item 2.3.4.2.2/i })).toBeVisible();
        },
      );

      it.each([
        ["Item 2.3.4.2 popover submenu", "collapse" as DrawerState],
        ["Item 2.3.4.2 collapse submenu", "open" as DrawerState],
      ])(
        "should render a '%s' if submenuVariant='%s'",
        async (label: string, initialState: DrawerState) => {
          renderComponent({ initialState, item: mockCollapsableDrawerNavigationItem });

          await userEvent.click(screen.getByRole("button", { name: /item 2.3.4.2/i }));

          expect(screen.getByLabelText(label)).toBeVisible();
        },
      );
    });
  });

  describe("link item", () => {
    describe("title", () => {
      it("should render the text", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.getByText(/item 1.1/i)).toBeVisible();
      });

      it("shouldn't render the text if the drawer is collapsed", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem, initialState: "collapse" });

        expect(screen.queryByText(/item 1.1/i)).not.toBeInTheDocument();
      });
    });

    it("should navigate to the href when is clicked", async () => {
      const { history } = renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

      await userEvent.click(screen.getByRole("link", { name: /item 1.1/i }));

      expect(history.location.pathname).toBe("/items/1-1");
    });

    describe("icon", () => {
      it("should render an icon when is set", () => {
        renderComponent({ item: mockLinkDrawerNavigationItem });

        expect(screen.getByTestId("DiamondIcon")).toBeVisible();
      });

      it("shouldn't render an icon if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByTestId("DiamondIcon")).not.toBeInTheDocument();
      });

      it("should render an icon if the drawer is collapsed", () => {
        renderComponent({ item: mockLinkDrawerNavigationItem, initialState: "collapse" });

        expect(screen.getByTestId("DiamondIcon")).toBeVisible();
      });
    });

    describe("avatar", () => {
      it("should render an avatar when is set", () => {
        renderComponent({ item: mockLinkAvatarDrawerNavigationItem });

        expect(screen.getByRole("img", { name: /avatar 1/i })).toBeVisible();
      });

      it("shouldn't render an avatar if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("img", { name: /avatar 1/i })).not.toBeInTheDocument();
      });

      it("should render an avatar if the drawer is collapsed", () => {
        renderComponent({ item: mockLinkAvatarDrawerNavigationItem, initialState: "collapse" });

        expect(screen.getByRole("img", { name: /avatar 1/i })).toBeVisible();
      });
    });

    describe("label", () => {
      it("should render a label when is set", () => {
        renderComponent({ item: mockLinkLabelDrawerNavigationItem });

        const label = screen.getByRole("label", { name: /10/i });
        expect(label).toBeVisible();
        expect(label).toHaveAttribute("aria-describedby", "error");
      });

      it("shouldn't render a label if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("label", { name: /10/i })).not.toBeInTheDocument();
      });

      it("shouldn't render a label if the drawer is collapsed", () => {
        renderComponent({ item: mockLinkLabelDrawerNavigationItem, initialState: "collapse" });

        expect(screen.queryByRole("label", { name: /10/i })).not.toBeInTheDocument();
      });
    });

    describe("bullet", () => {
      it("should render a bullet when is set", () => {
        renderComponent({ item: mockLinkBulletDrawerNavigationItem });

        const bullet = screen.getByRole("bullet");
        expect(bullet).toBeVisible();
        expect(bullet).toHaveAttribute("aria-describedby", "secondary");
      });

      it("shouldn't render a bullet if is not set", () => {
        renderComponent({ item: mockLinkNoIconDrawerNavigationItem });

        expect(screen.queryByRole("bullet")).not.toBeInTheDocument();
      });

      it("shouldn't render a bullet if the drawer is collapsed", () => {
        renderComponent({ item: mockLinkBulletDrawerNavigationItem, initialState: "collapse" });

        expect(screen.queryByRole("bullet")).not.toBeInTheDocument();
      });
    });
  });
});
