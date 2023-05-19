import { render, screen } from "~/tests/testing-library";
import { DateRangeCalendar } from "./date-range-calendar";
import { vi } from "vitest";
import React from "react";
import { differenceInCalendarDays, format, addDays, subDays } from "date-fns";

describe("DateRangeCalendar", () => {
  const renderComponent = () => {
    const onValueChange = vi.fn();
    const startDate = new Date(2023, 4, 2);
    const endDate = new Date(2023, 4, 24);
    render(<DateRangeCalendar value={[startDate, endDate]} onValueChange={onValueChange} />);
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
});
