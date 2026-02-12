import userEvent from "@testing-library/user-event";
import ContentPlaceholder from "../../ContentPlaceholder";
import { expectContentPlaceholder } from "../../tests/assertions";
import { render, screen } from "../../tests/testing-library";
import { mockDrawerNavigation } from "../Drawer/Drawer.mock";
import DrawerLayout from "./DrawerLayout";

describe("DrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <DrawerLayout title="Lorem ipsum" navigation={mockDrawerNavigation}>
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

    expect(
      screen.getByRole("heading", { level: 1, name: /lorem ipsum/i }),
    ).toBeInTheDocument();
  });

  it("would render the content", async () => {
    renderComponent();

    await expectContentPlaceholder();
  });
});
