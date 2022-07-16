import React from "react";
import { render, screen } from "../../tests";
import userEvent from "@testing-library/user-event";
import { DrawerSection } from "./drawer-section";
import { SectionItems } from "./drawer-section.mock";

describe("DrawerSection", () => {
  const renderComponent = ({
    title,
  }: {
    title?: string;
  } = {}) => {
    return render(<DrawerSection title={title} items={SectionItems} />);
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
