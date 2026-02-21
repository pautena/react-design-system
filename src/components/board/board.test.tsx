import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "../../tests/testing-library";
import Board from "./board";

const content = "This is the content";
const arrayContent = ["This is the content 1", "This is the content 2"];

const mockCopy = () => {
  const copy = vi.fn();
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: {
      writeText: copy,
    },
  });
  return { copy };
};

describe("Board", () => {
  it("renders string content", () => {
    render(<Board content={content} />);

    expect(screen.getByText(content)).toBeVisible();
  });

  it("renders array content", () => {
    render(<Board content={arrayContent} />);

    expect(screen.getByText(arrayContent[0])).toBeVisible();
    expect(screen.getByText(arrayContent[1])).toBeVisible();
  });

  it("copies content", async () => {
    const user = userEvent.setup();
    const { copy } = mockCopy();
    render(<Board content={content} />);

    await user.click(
      screen.getByRole("button", { name: /copy board content/i }),
    );

    expect(copy).toHaveBeenCalledTimes(1);
    expect(copy).toHaveBeenCalledWith(content);
  });

  it("renders children and keeps copy behavior", async () => {
    const user = userEvent.setup();
    const { copy } = mockCopy();
    render(
      <Board content={content}>
        <p>row 1</p>
        <p>row 2</p>
      </Board>,
    );

    expect(screen.getByText(/row 1/i)).toBeVisible();
    expect(screen.getByText(/row 2/i)).toBeVisible();

    await user.click(
      screen.getByRole("button", { name: /copy board content/i }),
    );
    expect(copy).toHaveBeenCalledWith(content);
  });
});
