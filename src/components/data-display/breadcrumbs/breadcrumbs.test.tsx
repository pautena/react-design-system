import { render, screen } from "@/tests/testing-library";
import { Breadcrumbs } from "./breadcrumbs";

describe("Breadcrumbs", () => {
  const items = [
    { id: "items", text: "Items", link: "/items" },
    { id: "item-1", text: "Item 1", link: "/items/1" },
    { id: "details", text: "Details", link: "/items/1/details" },
  ];

  it("renders links and current page", () => {
    render(<Breadcrumbs items={items} />);

    expect(screen.getByRole("link", { name: "Items" })).toHaveAttribute(
      "href",
      "/items",
    );
    expect(screen.getByRole("link", { name: "Item 1" })).toHaveAttribute(
      "href",
      "/items/1",
    );
    expect(screen.getByRole("link", { name: "Details" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("renders custom separator", () => {
    const { container } = render(<Breadcrumbs items={items} separator="/" />);

    expect(container.textContent).toContain("/");
  });

  it("renders nothing when items are empty", () => {
    const { container } = render(<Breadcrumbs items={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
