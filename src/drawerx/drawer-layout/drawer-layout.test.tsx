import { render, screen } from "../../tests/testing-library";
import userEvent from "@testing-library/user-event";
import { expectContentPlaceholder } from "../../tests/assertions";
import { mockDrawerNavigation } from "../drawer/drawer.mock";
import { DrawerLayout } from ".";
import { DrawerContent } from "../drawer-content";
import { Drawer } from "../drawer";
import { DrawerAppBar } from "../drawer-app-bar";
import { ContentPlaceholder } from "../../content-placeholder";

describe("DrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <DrawerLayout>
        <Drawer>
          <DrawerContent navigation={mockDrawerNavigation} />
        </Drawer>
        <DrawerAppBar title="Lorem ipsum" />
        <ContentPlaceholder p={3} />
      </DrawerLayout>,
    );
  };

  it("would render a drawer", async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId("MenuIcon"));

    expect(screen.getByRole("link", { name: /item 1.1/i })).toBeInTheDocument();
  });

  it("would render an appbar", () => {
    renderComponent();

    expect(screen.getByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
  });

  it("would render the content", async () => {
    renderComponent();

    await expectContentPlaceholder();
  });
});
