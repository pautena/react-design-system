import userEvent from "@testing-library/user-event";
import { addDays, differenceInCalendarDays, format, subDays } from "date-fns";
import { vi } from "vitest";
import { render, screen } from "../../tests/testing-library";
import { DateRangeCalendar } from "./date-range-calendar";

describe("DateRangeCalendar", () => {
  const renderComponent = () => {
    const onValueChange = vi.fn();
    const startDate = new Date(2023, 4, 2);
    const endDate = new Date(2023, 4, 24);
    render(
      <DateRangeCalendar
        defaultValue={[startDate, endDate]}
        onValueChange={onValueChange}
      />,
    );
    return { startDate, endDate, onValueChange };
  };

  it("should mark the dates between the start and the end as selected", () => {
    const { startDate, endDate } = renderComponent();

    const days = differenceInCalendarDays(endDate, startDate);

    for (let i = 0; i <= days; ++i) {
      const date = addDays(startDate, i);
      const button = screen.getByRole("button", {
        name: format(date, "yyyy-MM-dd"),
      });

      if (i === 0) {
        expect(button).toHaveAttribute("data-range-start", "true");
        continue;
      }

      if (i === days) {
        expect(button).toHaveAttribute("data-range-end", "true");
        continue;
      }

      expect(button).toHaveAttribute("data-range-middle", "true");
    }
  });

  it("should not mark as selected the date before and after the range", () => {
    const { startDate, endDate } = renderComponent();

    const before = screen.getByRole("button", {
      name: format(subDays(startDate, 1), "yyyy-MM-dd"),
    });
    const after = screen.getByRole("button", {
      name: format(addDays(endDate, 1), "yyyy-MM-dd"),
    });

    expect(before).not.toHaveAttribute("data-range-start", "true");
    expect(before).not.toHaveAttribute("data-range-middle", "true");
    expect(before).not.toHaveAttribute("data-range-end", "true");
    expect(after).not.toHaveAttribute("data-range-start", "true");
    expect(after).not.toHaveAttribute("data-range-middle", "true");
    expect(after).not.toHaveAttribute("data-range-end", "true");
  });

  describe("onValueChange", () => {
    it("should call onValueChange when the first date is selected with the first value changed", async () => {
      const { endDate, onValueChange } = renderComponent();
      const user = userEvent.setup();

      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 4), "yyyy-MM-dd"),
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith(
        [new Date(2023, 4, 4), endDate],
        0,
      );
    });

    it("should call onValueChange when the second date is selected with the second value changed", async () => {
      const { onValueChange } = renderComponent();
      const user = userEvent.setup();

      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 4), "yyyy-MM-dd"),
        }),
      );
      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 12), "yyyy-MM-dd"),
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
      const user = userEvent.setup();

      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 4), "yyyy-MM-dd"),
        }),
      );
      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 12), "yyyy-MM-dd"),
        }),
      );
      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 2), "yyyy-MM-dd"),
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(3);
      expect(onValueChange).toHaveBeenLastCalledWith(
        [new Date(2023, 4, 2), new Date(2023, 4, 12)],
        0,
      );
    });

    it("should call onValueChange when a second date minor than the initial date is selected changing the first value", async () => {
      const { onValueChange } = renderComponent();
      const user = userEvent.setup();

      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 12), "yyyy-MM-dd"),
        }),
      );
      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 6), "yyyy-MM-dd"),
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(2);
      expect(onValueChange).toHaveBeenLastCalledWith(
        [new Date(2023, 4, 6), undefined],
        0,
      );
    });

    it("should call onValueChange when the first date is bigger than the end date with the end date as undefined", async () => {
      const { onValueChange } = renderComponent();
      const user = userEvent.setup();

      await user.click(
        screen.getByRole("button", {
          name: format(new Date(2023, 4, 28), "yyyy-MM-dd"),
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith(
        [new Date(2023, 4, 28), undefined],
        0,
      );
    });
  });
});
