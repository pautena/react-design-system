import userEvent from "@testing-library/user-event";
import { DrawerProvider } from "@/components/drawer-context";
import {
  mockLinkAvatarDrawerNavigationItem,
  mockLinkBulletDrawerNavigationItem,
  mockLinkDrawerNavigationItem,
  mockLinkLabelDrawerNavigationItem,
  mockLinkNoIconDrawerNavigationItem,
  mockMenuDrawerNavigationItem,
  mockMenuInsideMenuDrawerNavigationItem,
} from "@/components/drawerx/drawer.mock";
import type {
  DrawerNavigationItem,
  DrawerState,
} from "@/components/drawerx/drawer.types";
import { render, screen, within } from "../../tests/testing-library";
import { DrawerItem } from "./drawer-item";

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

  it("should render icon", () => {
    renderComponent({
      initialState: "open",
      item: mockMenuDrawerNavigationItem,
    });

    expect(screen.getByTestId("ConnectingAirportsIcon")).toBeVisible();
    expect(screen.getByText(/item 2.3.4.2/i)).toBeVisible();
  });

  it("should render chevron right for closed menu", () => {
    renderComponent({
      initialState: "open",
      item: mockMenuInsideMenuDrawerNavigationItem,
    });

    expect(screen.getAllByTestId("ChevronRightIcon")[0]).toBeVisible();
  });

  it("should render expand icon when menu opens", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "open",
      item: mockMenuInsideMenuDrawerNavigationItem,
    });

    await user.click(screen.getByRole("button", { name: /^item 2\.3\.4$/i }));
    expect(screen.getByTestId("ExpandMoreIcon")).toBeVisible();
  });

  it("should render collapse submenu region", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "open",
      item: mockMenuDrawerNavigationItem,
    });

    await user.click(
      screen.getByRole("button", { name: /^item 2\.3\.4\.2$/i }),
    );
    expect(
      screen.getByRole("region", { name: /item 2\.3\.4\.2 collapse submenu/i }),
    ).toBeVisible();
  });

  it("should render item text", () => {
    renderComponent({ item: mockLinkNoIconDrawerNavigationItem });
    expect(screen.getByText(/item 1.1/i)).toBeVisible();
  });

  it("should hide item text in mini closed state", () => {
    renderComponent({
      initialState: "close",
      item: mockLinkDrawerNavigationItem,
    });

    expect(screen.queryByText(/item 1.2/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("DiamondIcon")).toBeVisible();
  });

  it("should render icon", () => {
    renderComponent({ item: mockLinkDrawerNavigationItem });
    expect(screen.getByTestId("DiamondIcon")).toBeVisible();
  });

  it("should render avatar", () => {
    renderComponent({ item: mockLinkAvatarDrawerNavigationItem });
    expect(screen.getByRole("img", { name: /avatar 1/i })).toBeVisible();
  });

  it("should render label", () => {
    renderComponent({ item: mockLinkLabelDrawerNavigationItem });
    expect(screen.getByText("10")).toBeVisible();
  });

  it("should render bullet", () => {
    renderComponent({ item: mockLinkBulletDrawerNavigationItem });
    const bullet = screen.getByRole("status", {
      name: /secondary bullet/i,
    });
    expect(bullet).toBeVisible();
    expect(bullet).toHaveAttribute("aria-describedby", "secondary");
  });

  it("should render submenu links", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "open",
      item: mockMenuDrawerNavigationItem,
    });

    await user.click(
      screen.getByRole("button", { name: /^item 2\.3\.4\.2$/i }),
    );
    expect(screen.getByRole("link", { name: /item 2.3.4.2.1/i })).toBeVisible();

    const button = screen.getByRole("button", { name: /^item 2\.3\.4\.2$/i });
    expect(within(button).getByTestId("ExpandMoreIcon")).toBeVisible();
  });

  it("should render popover submenu in mini closed state", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "close",
      item: mockMenuDrawerNavigationItem,
    });

    await user.click(
      screen.getByRole("button", { name: /^item 2\.3\.4\.2$/i }),
    );

    expect(
      screen.getByRole("region", { name: /item 2\.3\.4\.2 popover submenu/i }),
    ).toBeVisible();
  });
});
