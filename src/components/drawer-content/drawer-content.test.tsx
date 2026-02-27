import userEvent from "@testing-library/user-event";
import { DrawerProvider } from "@/components/drawer-context";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import { render, screen } from "../../tests/testing-library";
import DrawerContent from "./drawer-content";

describe("DrawerContent", () => {
  const renderComponent = () => {
    return render(
      <DrawerProvider initialState="open">
        <DrawerContent navigation={mockDrawerNavigation} />
      </DrawerProvider>,
    );
  };

  it.each([
    [/section 2/i],
    [/section avatar/i],
  ])("would render section title %s", (sectionTitle: RegExp) => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: sectionTitle }),
    ).toBeInTheDocument();
  });

  it.each([
    [/item 1.1/i],
    [/item 1.2/i],
    [/item 1.3/i],
    [/item 1.4/i],
    [/item 2.1/i],
    [/item 2.2/i],
    [/avatar 1/i],
    [/avatar 2/i],
  ])("would render item %s", (itemText: RegExp) => {
    renderComponent();

    expect(screen.getByRole("button", { name: itemText })).toBeInTheDocument();
  });

  it("should render item 2.3 as a button", () => {
    renderComponent();

    expect(
      screen.getByRole("button", { name: /^item 2\.3$/i }),
    ).toBeInTheDocument();
  });

  it("shouldn't render collapsed 2.3 items by default", () => {
    renderComponent();

    expect(screen.queryByText(/item 2.3.1/i)).toBeFalsy();
    expect(screen.queryByText(/item 2.3.2/i)).toBeFalsy();
    expect(screen.queryByText(/item 2.3.3/i)).toBeFalsy();
  });

  it("should render 2.3 items if user clicks menu", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /^item 2\.3$/i }));

    expect(screen.getByText(/item 2.3.1/i)).toBeVisible();
    expect(screen.getByText(/item 2.3.2/i)).toBeVisible();
    expect(screen.getByText(/item 2.3.3/i)).toBeVisible();
  });
});
