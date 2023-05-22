import { render, screen } from "~/tests/testing-library";
import { DateRangeCalendar } from "./date-range-calendar";
import { vi } from "vitest";
import React from "react";
import { differenceInCalendarDays, format, addDays, subDays } from "date-fns";
import userEvent from "@testing-library/user-event";

describe("DateRangeCalendar", () => {
  const renderComponent = () => {
    const onValueChange = vi.fn();
    const startDate = new Date(2023, 4, 2);
    const endDate = new Date(2023, 4, 24);
    render(<DateRangeCalendar defaultValue={[startDate, endDate]} onValueChange={onValueChange} />);
    return { startDate, endDate, onValueChange };
  };

  it("should mark the dates between the start and the end as selected", () => {
    const { startDate, endDate } = renderComponent();

    const days = differenceInCalendarDays(endDate, startDate);

    for (let i = 0; i < days; ++i) {
      const date = addDays(startDate, i);
      expect(
        screen.getByRole("gridcell", {
          name: format(date, "yyyy-MM-dd"),
          selected: true,
        }),
      ).toBeVisible();
    }
  });

  it("should not mark as selected the date before and after the range", () => {
    const { startDate, endDate } = renderComponent();

    expect(
      screen.getByRole("gridcell", {
        name: format(subDays(startDate, 1), "yyyy-MM-dd"),
        selected: false,
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("gridcell", {
        name: format(addDays(endDate, 1), "yyyy-MM-dd"),
        selected: false,
      }),
    ).toBeVisible();
  });

  describe("onValueChange", () => {
    it("should call onValueChange when the first date is selected with the first value changed", async () => {
      const { endDate, onValueChange } = renderComponent();

      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "4",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith([new Date(2023, 4, 4), endDate], 0);
    });

    it("should call onValueChange when the second date is selected with the second value changed", async () => {
      const { onValueChange } = renderComponent();

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

    it("should call onValueChange when the third date is selected with the first value changed", async () => {
      const { onValueChange } = renderComponent();

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
      await userEvent.click(
        screen.getByRole("gridcell", {
          name: "18",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(3);
      expect(onValueChange).toHaveBeenLastCalledWith(
        [new Date(2023, 4, 18), new Date(2023, 4, 12)],
        0,
      );
    });

    it("should call onValueChange when a second date minor than the initial date is selected changing the first value", async () => {
      const { onValueChange } = renderComponent();

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
