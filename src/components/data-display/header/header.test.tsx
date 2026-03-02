import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Badge } from "@/components/data-display/badge/badge";
import { render, screen } from "@/tests/testing-library";
import { TabProvider } from "../../navigation/tab-provider/tab-provider.provider";
import { Header } from "./header";
import { actions as actionsData, breadcrumbs, tabs } from "./header.dummy";
import { WithPanelTabs } from "./header.stories";
import type {
  HeaderAction,
  HeaderActionVariant,
  HeaderBreadcrumb,
  HeaderPreset,
  HeaderTab,
} from "./header.types";

const actions = actionsData.map((a) => ({
  ...a,
  onClick: a.onClick && vi.fn(),
}));

const renderInstance = ({
  title = "Lorem ipsum",
  subtitle,
  preset = "default",
  breadcrumbs,
  actions,
  actionsVariant,
  tabs,
  selectedTab,
  navigationButton,
}: {
  title?: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  preset?: HeaderPreset;
  breadcrumbs?: HeaderBreadcrumb[];
  actions?: HeaderAction[];
  actionsVariant?: HeaderActionVariant;
  tabs?: HeaderTab[];
  selectedTab?: number;
  navigationButton?: boolean;
}) => {
  return render(
    <TabProvider initialValue={selectedTab}>
      <Header
        title={title}
        subtitle={subtitle}
        preset={preset}
        breadcrumbs={breadcrumbs}
        actions={actions}
        actionsVariant={actionsVariant}
        tabs={tabs}
        tabsMode="panel"
        navigationButton={
          navigationButton ? { text: "go back", href: "/back" } : undefined
        }
      />
    </TabProvider>,
  );
};

describe("Header", () => {
  it("should render title and subtitle", () => {
    renderInstance({ title: "Lorem ipsum", subtitle: "sit amet" });

    expect(
      screen.getByRole("heading", { level: 1, name: /lorem ipsum/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /sit amet/i }),
    ).toBeInTheDocument();
  });

  it("should render custom title", () => {
    renderInstance({
      title: (
        <div className="flex items-center">
          <h6>custom title</h6>
          <Badge variant="primary" text="4 items" className="ml-2" />
        </div>
      ),
    });

    expect(screen.getByText(/custom title/i)).toBeVisible();
    expect(screen.getByText(/4 items/i)).toBeVisible();
  });

  it("should render breadcrumbs", () => {
    renderInstance({ breadcrumbs });

    expect(screen.getByRole("link", { name: /items/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /item 1/i })).toBeInTheDocument();
  });

  it("should render and click actions", async () => {
    const user = userEvent.setup();
    renderInstance({ actions });

    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: /edit/i }));
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
  });

  it("should render tabs and switch selected panel tab", async () => {
    const user = userEvent.setup();
    render(<WithPanelTabs />);

    await user.click(screen.getByRole("tab", { name: /tab 3/i }));
    expect(
      screen.getByRole("tab", { name: /tab 3/i, selected: true }),
    ).toBeInTheDocument();
    expect(screen.getByText(/panel tab 3/i)).toBeVisible();
  });

  it("should apply breadcrumb separator", () => {
    const { container } = render(
      <Header title="Test" breadcrumbs={breadcrumbs} breadcrumbSeparator="/" />,
    );

    expect(container.textContent).toContain("/");
  });

  it("should render navigation button", () => {
    renderInstance({ navigationButton: true });

    expect(screen.getByRole("button", { name: /go back/i })).toBeVisible();
  });

  it("should render tabs", () => {
    renderInstance({ tabs, selectedTab: 2 });
    expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab 2/i })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(
      screen.getByRole("tab", { name: /tab 3/i, selected: true }),
    ).toBeInTheDocument();
  });
});
