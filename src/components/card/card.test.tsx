import { render, screen } from "../../tests/testing-library";
import Card, {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  const renderComponent = (size?: "default" | "sm") => {
    return render(
      <Card data-testid="card" size={size}>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
          <CardAction>Action</CardAction>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>,
    );
  };

  it("renders all card regions", () => {
    renderComponent();

    expect(screen.getByText("Card title")).toBeVisible();
    expect(screen.getByText("Card description")).toBeVisible();
    expect(screen.getByText("Action")).toBeVisible();
    expect(screen.getByText("Card content")).toBeVisible();
    expect(screen.getByText("Card footer")).toBeVisible();
  });

  it("defaults to the default size", () => {
    renderComponent();

    expect(screen.getByTestId("card")).toHaveAttribute("data-size", "default");
  });

  it("supports the small size", () => {
    renderComponent("sm");

    expect(screen.getByTestId("card")).toHaveAttribute("data-size", "sm");
  });
});
