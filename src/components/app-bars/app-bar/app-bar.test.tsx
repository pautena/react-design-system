import React from "react";
import { fireEvent, render, screen } from "~/tests/testing-library";
import { AppBar } from "./app-bar";
import { DrawerProvider } from "../../drawers/drawer-provider";
import { AppBarProfile } from "./app-bar.types";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const profile: AppBarProfile = {
  name: "John Smith",
};

describe("AppBar", () => {
  const renderComponent = ({
    search,
    title,
    menu,
    initialOpen,
    profile,
  }: {
    title?: string;
    search?: boolean;
    menu?: boolean;
    initialOpen?: boolean;
    profile?: AppBarProfile;
  } = {}) => {
    const onClickSignOut = vi.fn();
    const instance = render(
      <DrawerProvider initialOpen={initialOpen}>
        <AppBar
          title={title}
          menu={menu}
          search={search}
          profile={profile}
          onClickSignOut={onClickSignOut}
        />
      </DrawerProvider>,
    );
    return { ...instance, onClickSignOut };
  };

  const clickOutsideProfileMenu = () => {
    const child = screen.getByRole("presentation").firstChild;
    expect(child).toBeDefined();
    child && fireEvent.click(child);
  };

  describe("title", () => {
    it("wouldn't render a title if it's not defined", () => {
      renderComponent({ title: undefined });

      expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
    });

    it("would render a title if it's defined", () => {
      renderComponent({ title: "Lorem ipsum" });

      expect(screen.queryByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
    });
  });

  describe("menu", () => {
    it("wouldn't render a menu button if menu is not defined", () => {
      renderComponent();

      expect(screen.queryByRole("button", { name: /open drawer/i })).not.toBeInTheDocument();
    });

    it("wouldn't render a menu button if menu is false", () => {
      renderComponent({ menu: false });

      expect(screen.queryByRole("button", { name: /open drawer/i })).not.toBeInTheDocument();
    });

    it("would render a menu button if menu is true", () => {
      renderComponent({ menu: true });

      expect(screen.getByRole("button", { name: /open drawer/i })).toBeInTheDocument();
    });
  });

  describe("search", () => {
    it("wouldn't render a search box by default", () => {
      renderComponent();

      expect(screen.queryByRole("search")).not.toBeInTheDocument();
    });

    it("wouldn't render a search box if search is false", () => {
      renderComponent({ search: false });

      expect(screen.queryByRole("search")).not.toBeInTheDocument();
    });

    it("would render a search box if search is true", () => {
      renderComponent({ search: true });

      expect(screen.getByRole("search")).toBeInTheDocument();
    });
  });

  describe("profile", () => {
    it("wouldn't render the user profile if it's not set", () => {
      renderComponent({ profile: undefined });

      expect(screen.queryByRole("button", { name: /menu button/i })).not.toBeInTheDocument();
    });

    it("would render the user profile if the profile is defined", () => {
      renderComponent({ profile });

      expect(screen.getByRole("button", { name: /menu button/i })).toBeInTheDocument();
    });

    describe("the user click the profile button", () => {
      it("would open the menu", async () => {
        renderComponent({ profile });

        await userEvent.click(screen.getByRole("button", { name: /menu button/i }));

        expect(screen.getByRole("menu")).toBeInTheDocument();
      });
    });

    it("would call onClickSignOut if the user press the sign out button", async () => {
      const { onClickSignOut } = renderComponent({ profile });

      await userEvent.click(screen.getByRole("button", { name: /menu button/i }));
      await userEvent.click(screen.getByRole("menuitem", { name: /sign out/i }));

      expect(onClickSignOut).toHaveBeenCalledTimes(1);
    });

    it("would hide the menu if the focus changes to an external element", async () => {
      renderComponent({ profile, title: "lorem ipsum" });

      await userEvent.click(screen.getByRole("button", { name: /menu button/i }));
      clickOutsideProfileMenu();

      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });
});
