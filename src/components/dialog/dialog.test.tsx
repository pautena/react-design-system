import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Button from "@/components/button";
import { render, screen } from "@/tests/testing-library";
import Dialog from "./dialog";

describe("Dialog", () => {
  const renderComponent = ({ open = true } = {}) => {
    const onClose = vi.fn();

    render(
      <Dialog
        open={open}
        title="Dialog title"
        description="Dialog description"
        footer={<Button>Done</Button>}
        onClose={onClose}
      >
        <p>Dialog body</p>
      </Dialog>,
    );

    return { onClose };
  };

  it("renders when open", () => {
    renderComponent({ open: true });

    expect(screen.getByRole("dialog")).toBeVisible();
  });

  it("does not render when closed", () => {
    renderComponent({ open: false });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders title, description, and body", () => {
    renderComponent();

    expect(screen.getByText(/dialog title/i)).toBeVisible();
    expect(screen.getByText(/dialog description/i)).toBeVisible();
    expect(screen.getByText(/dialog body/i)).toBeVisible();
  });

  it("renders footer content", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /done/i })).toBeVisible();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const { onClose } = renderComponent();

    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
