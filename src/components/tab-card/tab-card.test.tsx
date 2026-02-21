import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "../../tests/testing-library";
import { DummyTabs, TabCardDummy } from "./tab-card.dummy";

describe("TabCard", () => {
  function renderComponent({ initialTab = 0 }: { initialTab?: number } = {}) {
    const onChangeTab = vi.fn();

    render(
      <TabCardDummy
        tabs={DummyTabs}
        initialTab={initialTab}
        onChangeTab={onChangeTab}
      />,
    );

    return { onChangeTab };
  }

  it("shows panel 1 when initialTab is not set", () => {
    renderComponent();

    expect(screen.getByText(/panel 1/i)).toBeInTheDocument();
  });

  it("shows panel 3 when initialTab is 3", () => {
    renderComponent({ initialTab: 3 });

    expect(screen.getByText(/panel 3/i)).toBeInTheDocument();
  });

  it("renders tab labels", () => {
    renderComponent();

    expect(screen.getByText(/10/i)).toBeVisible();
    expect(screen.getByText(/12/i)).toBeVisible();
  });

  it.each([
    [/tab 1/i, /panel 1/i],
    [/tab 2.1/i, /panel 2/i],
    [/tab 2.2/i, /panel 2/i],
    [/tab 3/i, /panel 3/i],
  ])('click tab "%s" displays "%s" panel', async (tabName, expectedText) => {
    const user = userEvent.setup();
    renderComponent();

    const tab = screen.getByRole("tab", { name: tabName });
    await user.click(tab);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("calls onChangeTab", async () => {
    const user = userEvent.setup();
    const { onChangeTab } = renderComponent();

    await user.click(screen.getByRole("tab", { name: /tab 2.2/i }));

    expect(onChangeTab).toHaveBeenCalledTimes(1);
    expect(onChangeTab).toHaveBeenCalledWith({ text: "tab 2.2" }, 2);
  });
});
