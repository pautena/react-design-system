import { ValueBoolean } from "@/components/data-display/value-boolean/value-boolean";
import { ValueItem } from "@/components/data-display/value-item/value-item";
import { ValueText } from "@/components/data-display/value-text/value-text";
import { render, screen } from "@/tests/testing-library";
import { GroupValueCard } from "./group-value-card";

describe("GroupValueCard", () => {
  const renderComponent = ({ subtitle }: { subtitle?: string } = {}) => {
    render(
      <GroupValueCard title="Hello world" subtitle={subtitle}>
        <ValueItem size={{ xs: 12, md: 6 }}>
          <ValueText label="Hello world" value="Lorem ipsum sit amet" />
        </ValueItem>
        <ValueItem size={{ xs: 12, md: 6 }}>
          <ValueBoolean label="Enabled" value />
        </ValueItem>
      </GroupValueCard>,
    );
  };

  it("renders title", () => {
    renderComponent();

    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  it("does not render subtitle when omitted", () => {
    renderComponent({ subtitle: undefined });

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    renderComponent({ subtitle: "Hi. I am batman" });

    expect(
      screen.getByRole("heading", { level: 2, name: /hi. i am batman/i }),
    ).toBeVisible();
  });

  it("renders value content", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeVisible();
    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeVisible();
    expect(screen.getByRole("label", { name: /enabled/i })).toBeVisible();
  });
});
