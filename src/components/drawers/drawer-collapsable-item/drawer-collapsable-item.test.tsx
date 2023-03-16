import React from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";

interface RenderComponentOptions {
  selected?: boolean;
}

describe("DrawerCollapsableItem", () => {
  const renderComponent = ({ selected }: RenderComponentOptions = {}) => {
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

  it("should render the items if the user click the button", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/item 2.3.1/i)).toBeVisible();
    expect(screen.getByText(/item 2.3.2/i)).toBeVisible();
    expect(screen.getByText(/item 2.3.3/i)).toBeVisible();
  });
});
