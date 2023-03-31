import React from "react";
import { render, screen, waitFor } from "~/tests/testing-library";
import { ExpandableAlert } from "./expandable-alert";
import userEvent from "@testing-library/user-event";

const message = "Lorem ipsum dolor sit amet";
const metadata =
  "Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an.";
const arrayMetadata = ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"];

describe("ExpandableAlert", () => {
  const renderComponent = ({
    title,
    metadata,
  }: { title?: string; metadata?: string | string[] } = {}) => {
    const onClose = jest.fn();
    const copy = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: copy,
      },
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
    const { onClose } = renderComponent();

    await userEvent.click(screen.getByTestId("CloseIcon"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should show a button to expand info if it has metadata", () => {
    renderComponent({ metadata });

    expect(screen.getByTestId("ExpandMoreIcon")).toBeVisible();
  });

  it("shouldn't show a button to expand info if it doesn't have metadata", () => {
    renderComponent({ metadata: undefined });

    expect(screen.queryByTestId("ExpandMoreIcon")).not.toBeInTheDocument();
  });

  it("should show the metadata if the expand button is clicked", async () => {
    renderComponent({ metadata });

    await userEvent.click(screen.getByTestId("ExpandMoreIcon"));

    expect(screen.getByText(metadata)).toBeVisible();
  });

  it("should show the array metadata if the expand button is clicked", async () => {
    renderComponent({ metadata: arrayMetadata });

    await userEvent.click(screen.getByTestId("ExpandMoreIcon"));

    expect(screen.getByText(arrayMetadata[0])).toBeVisible();
    expect(screen.getByText(arrayMetadata[1])).toBeVisible();
    expect(screen.getByText(arrayMetadata[2])).toBeVisible();
  });

  it("should render a button to hide info if the expand button is clicked", async () => {
    renderComponent({ metadata: arrayMetadata });

    await userEvent.click(screen.getByTestId("ExpandMoreIcon"));

    expect(screen.getByTestId("ExpandLessIcon")).toBeVisible();
  });

  it("should hide the metadata if the hide button is clicked", async () => {
    renderComponent({ metadata });

    await userEvent.click(screen.getByTestId("ExpandMoreIcon"));
    await userEvent.click(screen.getByTestId("ExpandLessIcon"));

    await waitFor(() => expect(screen.getByText(metadata)).not.toBeVisible());
  });

  it("should copy the content if the copy button is clicked", async () => {
    const { copy } = renderComponent({ metadata });

    await userEvent.click(screen.getByTestId("ExpandMoreIcon"));
    await userEvent.click(screen.getByRole("button", { name: /copy/i }));

    expect(copy).toHaveBeenCalledTimes(1);
    expect(copy).toHaveBeenCalledWith(metadata);
  });
});
