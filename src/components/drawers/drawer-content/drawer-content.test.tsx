import React from "react";
import { render, screen } from "~/tests/testing-library";
import { mockNav } from "../drawer/drawer.mock";
import { DrawerContent } from "./drawer-content";

describe("DrawerContent", () => {
  const renderComponent = () => {
    return render(<DrawerContent nav={mockNav} />);
  };

  it.each([[/section 2/i], [/section avatar/i]])(
    "would render the title section %s",
    (sectionTitle: RegExp) => {
      renderComponent();

      expect(screen.getByRole("heading", { name: sectionTitle })).toBeInTheDocument();
    },
  );

  it.each([
    [/item 1.1/i],
    [/item 1.2/i],
    [/item 1.3/i],
    [/item 1.4/i],
    [/item 2.1/i],
    [/item 2.2/i],
    [/avatar 1/i],
    [/avatar 2/i],
  ])("would render the item %s", (itemText: RegExp) => {
    renderComponent();

    expect(screen.getByRole("link", { name: itemText })).toBeInTheDocument();
  });
});
