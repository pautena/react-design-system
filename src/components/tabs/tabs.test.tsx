import userEvent from "@testing-library/user-event";
import { render, screen } from "../../tests/testing-library";
import Tabs, { TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  const renderComponent = () => {
    return render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="security">Security content</TabsContent>
      </Tabs>,
    );
  };

  it("renders the active tab content by default", () => {
    renderComponent();

    expect(screen.getByText("Account content")).toBeVisible();
    expect(screen.queryByText("Security content")).toBeNull();
  });

  it("switches content when a tab is clicked", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("tab", { name: "Security" }));

    expect(screen.getByText("Security content")).toBeVisible();
    expect(screen.queryByText("Account content")).toBeNull();
  });
});
