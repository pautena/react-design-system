import userEvent from "@testing-library/user-event";
import { render, screen } from "../../tests/testing-library";
import Accordion, {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

describe("Accordion", () => {
  const renderComponent = () => {
    return render(
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item one</AccordionTrigger>
          <AccordionContent>First panel</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item two</AccordionTrigger>
          <AccordionContent>Second panel</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
  };

  it("renders triggers", () => {
    renderComponent();

    expect(screen.getByText("Item one")).toBeVisible();
    expect(screen.getByText("Item two")).toBeVisible();
  });

  it("opens and closes items", async () => {
    const user = userEvent.setup();
    renderComponent();

    const itemOneTrigger = screen.getByRole("button", { name: "Item one" });
    const itemTwoTrigger = screen.getByRole("button", { name: "Item two" });

    expect(itemOneTrigger).toHaveAttribute("aria-expanded", "true");

    await user.click(itemOneTrigger);

    expect(itemOneTrigger).toHaveAttribute("aria-expanded", "false");

    await user.click(itemTwoTrigger);

    expect(itemTwoTrigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Second panel")).toBeVisible();
  });
});
