import userEvent from "@testing-library/user-event";
import { Content } from "@/components/containers/content/content";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { SkeletonGrid } from "@/components/placeholders/skeleton-grid/skeleton-grid";
import { expectContentPlaceholder } from "@/tests/assertions";
import { render, screen } from "@/tests/testing-library";
import { DrawerLayout } from "./drawer-layout";

describe("DrawerLayout", () => {
  const renderComponent = () => {
    return render(
      <DrawerLayout title="Lorem ipsum" navigation={mockDrawerNavigation}>
        <Content data-testid="content-placeholder-test" className="p-3">
          <SkeletonGrid />
        </Content>
      </DrawerLayout>,
    );
  };

  it("would render a drawer", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /open drawer/i }));
    expect(
      screen.getByRole("button", { name: /item 1.1/i }),
    ).toBeInTheDocument();
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
