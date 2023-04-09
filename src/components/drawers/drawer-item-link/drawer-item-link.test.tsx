import React, { ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { DrawerItemLink } from "./drawer-item-link";
import DiamondIcon from "@mui/icons-material/Diamond";
import { render, screen } from "~/tests/testing-library";
import { DrawerItemAvatar, DrawerItemBullet, DrawerItemLabel } from "../drawer.types";

describe("DrawerItemLink", () => {
  const renderComponent = ({
    icon,
    avatar,
    label,
    bullet,
  }: {
    icon?: ReactElement;
    avatar?: DrawerItemAvatar;
    label?: DrawerItemLabel;
    bullet?: DrawerItemBullet;
  } = {}) => {
    return render(
      <DrawerItemLink
        text="Item 1"
        href="/items/1"
        icon={icon}
        bullet={bullet}
        avatar={avatar}
        label={label}
      />,
    );
  };

  it("would render the text", () => {
    renderComponent();

    expect(screen.getByRole("link", { name: /item 1/i })).toBeInTheDocument();
  });

  it("would navigate to the href when is clicked", async () => {
    const { history } = renderComponent();

    await userEvent.click(screen.getByRole("link", { name: /item 1/i }));

    expect(history.location.pathname).toBe("/items/1");
  });

  describe("icon", () => {
    it("would render an icon when is set", () => {
      renderComponent({ icon: <DiamondIcon /> });

      expect(screen.getByTestId("DiamondIcon")).toBeInTheDocument();
    });

    it("wouldn't render an icon if is not set", () => {
      renderComponent({ icon: undefined });

      expect(screen.queryByTestId("DiamondIcon")).not.toBeInTheDocument();
    });
  });

  describe("avatar", () => {
    it("would render an avatar when is set", () => {
      renderComponent({
        avatar: {
          src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
          alt: "Avatar 1",
        },
      });

      expect(screen.getByRole("img", { name: /avatar 1/i })).toBeInTheDocument();
    });

    it("wouldn't render an avatar if is not set", () => {
      renderComponent();

      expect(screen.queryByRole("img", { name: /avatar 1/i })).not.toBeInTheDocument();
    });
  });

  describe("label", () => {
    it("would render a label when is set", () => {
      renderComponent({
        label: {
          text: "new",
          variant: "info",
        },
      });

      const label = screen.getByRole("label", { name: /new/i });
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute("aria-describedby", "info");
    });

    it("wouldn't render a label if is not set", () => {
      renderComponent();

      expect(screen.queryByRole("label", { name: /new/i })).not.toBeInTheDocument();
    });
  });

  describe("bullet", () => {
    it("would render a bullet when is set", () => {
      renderComponent({
        bullet: {
          variant: "info",
        },
      });

      const bullet = screen.getByRole("bullet");
      expect(bullet).toBeInTheDocument();
      expect(bullet).toHaveAttribute("aria-describedby", "info");
    });

    it("wouldn't render a bullet if is not set", () => {
      renderComponent();

      expect(screen.queryByRole("bullet")).not.toBeInTheDocument();
    });
  });
});
