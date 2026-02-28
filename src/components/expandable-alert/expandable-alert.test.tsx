import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { vi } from "vitest";
import Button from "@/components/button";
import { render, screen, waitFor } from "@/tests/testing-library";
import ExpandableAlert from "./expandable-alert";

const message = "Lorem ipsum dolor sit amet";
const metadata =
  "Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an.";
const arrayMetadata = [
  "lorem: ipsum",
  "foo: bar",
  "header: this",
  "host: localhost",
];

describe("ExpandableAlert", () => {
  const renderComponent = ({
    title,
    metadata,
  }: {
    title?: string;
    metadata?: string | string[];
  } = {}) => {
    const onClose = vi.fn();
    const copy = vi.fn();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: copy,
      },
      configurable: true,
    });

    render(
      <ExpandableAlert
        severity="info"
        title={title}
        message={message}
        metadata={metadata}
        onClose={onClose}
      />,
    );

    return { onClose, copy };
  };

  it("should render a title if is set", () => {
    const title = "This is the title";
    renderComponent({ title });

    expect(screen.getByText(title)).toBeVisible();
  });

  it("should render a message", () => {
    renderComponent();

    expect(screen.getByText(message)).toBeVisible();
  });

  it("should call onClose if the close button is clicked", async () => {
    const user = userEvent.setup();
    const { onClose } = renderComponent();

    await user.click(screen.getByRole("button", { name: /close alert/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should show a button to expand info if it has metadata", () => {
    renderComponent({ metadata });

    expect(
      screen.getByRole("button", { name: /expand metadata/i }),
    ).toBeVisible();
  });

  it("shouldn't show a button to expand info if it doesn't have metadata", () => {
    renderComponent({ metadata: undefined });

    expect(
      screen.queryByRole("button", { name: /expand metadata/i }),
    ).not.toBeInTheDocument();
  });

  it("should show the metadata if the expand button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ metadata });

    await user.click(screen.getByRole("button", { name: /expand metadata/i }));

    expect(screen.getByText(metadata)).toBeVisible();
  });

  it("should show the array metadata if the expand button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ metadata: arrayMetadata });

    await user.click(screen.getByRole("button", { name: /expand metadata/i }));

    expect(screen.getByText(arrayMetadata[0])).toBeVisible();
    expect(screen.getByText(arrayMetadata[1])).toBeVisible();
    expect(screen.getByText(arrayMetadata[2])).toBeVisible();
  });

  it("should render a button to hide info if the expand button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ metadata: arrayMetadata });

    await user.click(screen.getByRole("button", { name: /expand metadata/i }));

    expect(
      screen.getByRole("button", { name: /collapse metadata/i }),
    ).toBeVisible();
  });

  it("should hide the metadata if the hide button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ metadata });

    await user.click(screen.getByRole("button", { name: /expand metadata/i }));
    await user.click(
      screen.getByRole("button", { name: /collapse metadata/i }),
    );

    await waitFor(() =>
      expect(screen.queryByText(metadata)).not.toBeInTheDocument(),
    );
  });

  it("should copy the content if the copy button is clicked", async () => {
    const user = userEvent.setup();
    const { copy } = renderComponent({ metadata });

    await user.click(screen.getByRole("button", { name: /expand metadata/i }));
    await user.click(screen.getByRole("button", { name: /copy/i }));

    expect(copy).toHaveBeenCalledTimes(1);
    expect(copy).toHaveBeenCalledWith(metadata);
  });

  it("should work inside a floating container", async () => {
    const user = userEvent.setup();

    const FloatingAlert = () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)}>show</Button>
          {open ? (
            <div className="mt-3 max-w-md">
              <ExpandableAlert
                severity="info"
                message="lorem ipsum"
                onClose={() => setOpen(false)}
              />
            </div>
          ) : null}
        </div>
      );
    };

    render(<FloatingAlert />);

    await user.click(screen.getByRole("button", { name: /show/i }));

    expect(screen.getByText(/lorem ipsum/i)).toBeVisible();
  });
});
