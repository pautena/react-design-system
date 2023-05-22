import { render, screen, waitForElementToBeRemoved } from "~/tests/testing-library";
import { DateRangePicker } from "./date-range-picker";
import { vi } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("DateRangePicker", () => {
  const renderComponent = () => {
    const onValueChange = vi.fn();
    const startDate = new Date(2023, 4, 2);
    const endDate = new Date(2023, 4, 24);
    render(
      <DateRangePicker
        label="lorem ipsum"
        format="yyyy-MM-dd"
        defaultValue={[startDate, endDate]}
        onValueChange={onValueChange}
      />,
    );
    return { startDate, endDate, onValueChange };
  };

  it("should render an input with a label", () => {
    renderComponent();

    expect(screen.getByRole("textbox", { name: /lorem ipsum/i })).toBeVisible();
  });

  it("should render the value inside the input with the correct format", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toHaveValue("2023-05-02 - 2023-05-24");
  });

  it("should open a date selector if the calendar icon is clicked", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

    expect(screen.getByLabelText(/calendar range selector/i)).toBeVisible();
  });

  describe("date selection", () => {
    it("should call onValueChange when the first date is selected with the first value changed", async () => {
      const { endDate, onValueChange } = renderComponent();
      await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "4",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith([new Date(2023, 4, 4), endDate], 0);
    });

    describe("second value selected", () => {
      it("should call onValueChange when the second date is selected with the second value changed", async () => {
        const { onValueChange } = renderComponent();
        await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        await userEvent.click(
          screen.getByRole("gridcell", {
            name: "4",
          }),
        );
        await userEvent.click(
          screen.getByRole("gridcell", {
            name: "12",
          }),
        );

        expect(onValueChange).toHaveBeenCalledTimes(2);
        expect(onValueChange).toHaveBeenLastCalledWith(
          [new Date(2023, 4, 4), new Date(2023, 4, 12)],
          1,
        );
      });

      it("should hide the date selector", async () => {
        renderComponent();
        await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        await userEvent.click(
          screen.getByRole("gridcell", {
            name: "4",
          }),
        );
        await userEvent.click(
          screen.getByRole("gridcell", {
            name: "12",
          }),
        );

        await waitForElementToBeRemoved(() => screen.queryByLabelText(/calendar range selector/i));
      });
    });

    it("should call onValueChange when a second date minor than the initial date is selected changing the first value", async () => {
      const { onValueChange } = renderComponent();
      await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "12",
        }),
      );
      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "6",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(2);
      expect(onValueChange).toHaveBeenLastCalledWith([new Date(2023, 4, 6), undefined], 0);
    });

    it("should call onValueChange when the first date is bigger than the end date with the end date as undefined", async () => {
      const { onValueChange } = renderComponent();
      await userEvent.click(screen.getByRole("button", { name: /open calendar/i }));

      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "28",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith([new Date(2023, 4, 28), undefined], 0);
    });
  });
});
