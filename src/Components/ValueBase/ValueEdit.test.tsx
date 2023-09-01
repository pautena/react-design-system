import { render, screen } from "~/Tests/TestingLibrary";
import { ValueEditButton, ValueEditButtons } from "./ValueEdit";
import React from "react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("ValueEditButton", () => {
  const renderComponent = () => {
    const onClick = vi.fn();
    render(<ValueEditButton onClick={onClick} />);

    return { onClick };
  };

  it("should render a edit icon", () => {
    renderComponent();

    expect(screen.getByTestId("EditIcon")).toBeVisible();
  });

  it("should be accessible", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /edit button/i })).toBeVisible();
  });

  it("should call onClick when the button is clicked", async () => {
    const { onClick } = renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /edit button/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("ValueEditButtons", () => {
  const renderComponent = () => {
    const onClickCancel = vi.fn();
    const onClickSubmit = vi.fn();
    render(<ValueEditButtons onClickCancel={onClickCancel} onClickSubmit={onClickSubmit} />);

    return { onClickCancel, onClickSubmit };
  };

  describe("cancel button", () => {
    it("should render  a cancel icon", () => {
      renderComponent();

      expect(screen.getByTestId("ClearIcon")).toBeVisible();
    });

    it("should be accessible", () => {
      renderComponent();

      expect(screen.getByRole("button", { name: /cancel button/i })).toBeVisible();
    });

    it("should call onClickCancel when the button is clicked", async () => {
      const { onClickCancel } = renderComponent();

      await userEvent.click(screen.getByRole("button", { name: /cancel button/i }));

      expect(onClickCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe("submit button", () => {
    it("should render  a submit icon", () => {
      renderComponent();

      expect(screen.getByTestId("CheckIcon")).toBeVisible();
    });

    it("should be accessible", () => {
      renderComponent();

      expect(screen.getByRole("button", { name: /submit button/i })).toBeVisible();
    });

    it("should call onClickCancel when the button is clicked", async () => {
      const { onClickSubmit } = renderComponent();

      await userEvent.click(screen.getByRole("button", { name: /submit button/i }));

      expect(onClickSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
