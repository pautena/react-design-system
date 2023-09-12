import React from "react";
import { render, screen } from "~/tests/testing-library";
import { ValueRating } from "./value-rating";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("ValueRating", () => {
  const renderComponent = ({
    maxRating,
    value = 3,
    editable,
  }: { maxRating?: number; value?: number; editable?: boolean } = {}) => {
    const onEdit = vi.fn();
    render(
      <ValueRating
        label="hello world"
        value={value}
        maxRating={maxRating}
        editable={editable}
        onEdit={onEdit}
      />,
    );
    return { onEdit };
  };

  it("should render a label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("should render 5 stars by default", () => {
    renderComponent();

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
    expect(screen.getAllByTestId("StarBorderIcon")).toHaveLength(2);
  });

  it("should render maxRating stars if is set", () => {
    renderComponent({ maxRating: 7 });

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
    expect(screen.getAllByTestId("StarBorderIcon")).toHaveLength(4);
  });

  it("should render 3 filled stars", () => {
    renderComponent();

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
  });

  describe("editable", () => {
    it("shouldn't render an option to edit if editable is false", () => {
      renderComponent({ editable: false });

      expect(screen.queryByTestId("EditIcon")).not.toBeInTheDocument();
    });

    it("should render an option to edit if editable is true", () => {
      renderComponent({ editable: true });

      expect(screen.getByRole("button", { name: /edit/i })).toBeVisible();
    });

    it("should render an input for each star + 1 for the zero value if the edit button is clicked", async () => {
      renderComponent({ editable: true });

      await userEvent.click(screen.getByRole("button", { name: /edit/i }));

      expect(screen.getAllByRole("radio")).toHaveLength(6);
    });

    it("should submit the new value if is edited", async () => {
      const { onEdit } = renderComponent({ value: 2, editable: true });

      await userEvent.click(screen.getByRole("button", { name: /edit/i }));
      await userEvent.click(screen.getByRole("radio", { name: /4 stars/i }));
      await userEvent.click(screen.getByRole("button", { name: /submit/i }));

      expect(onEdit).toHaveBeenCalledTimes(1);
      expect(onEdit).toHaveBeenCalledWith(4);
    });

    it("should not call onEdit if the edition is cancelled", async () => {
      const { onEdit } = renderComponent({ editable: true });

      await userEvent.click(screen.getByRole("button", { name: /edit/i }));
      await userEvent.click(screen.getAllByRole("radio")[3]);
      await userEvent.click(screen.getByRole("button", { name: /cancel/i }));

      expect(onEdit).not.toHaveBeenCalled();
    });

    it("should have the original value if is edited again after clear a change", async () => {
      renderComponent({ editable: true });

      await userEvent.click(screen.getByRole("button", { name: /edit/i }));
      await userEvent.click(screen.getByLabelText(/3 stars/i));
      await userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      await userEvent.click(screen.getByRole("button", { name: /edit/i }));

      expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
    });
  });
});
