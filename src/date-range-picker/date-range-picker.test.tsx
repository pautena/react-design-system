import { fireEvent, render, screen } from "../tests/testing-library";
import { DateRangePicker } from "./date-range-picker";
import { vi } from "vitest";

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

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 4, 26));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render an input with a label", () => {
    renderComponent();

    expect(screen.getByRole("textbox", { name: /lorem ipsum/i })).toBeVisible();
  });

  it("should render the value inside the input with the correct format", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toHaveValue("2023-05-02 - 2023-05-24");
  });

  it("should open a date selector if the calendar icon is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

    expect(screen.getByLabelText(/calendar range picker/i)).toBeVisible();
  });

  describe("date selection", () => {
    it("should call onValueChange when the first date is selected with the first value changed", () => {
      const { endDate, onValueChange } = renderComponent();
      fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

      fireEvent.click(
        screen.getByRole("gridcell", {
          name: "4",
        }),
      );

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith([new Date(2023, 4, 4), endDate], 0);
    });

    describe("second value selected", () => {
      it("should call onValueChange when the second date is selected with the second value changed", () => {
        const { onValueChange } = renderComponent();
        fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "4",
          }),
        );
        fireEvent.click(
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
    });

    describe(" when a second date minor than the initial date", () => {
      it("should call onValueChange changing the first value with end date as undefined", () => {
        const { onValueChange } = renderComponent();
        fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "12",
          }),
        );
        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "6",
          }),
        );

        expect(onValueChange).toHaveBeenCalledTimes(2);
        expect(onValueChange).toHaveBeenLastCalledWith([new Date(2023, 4, 6), undefined], 0);
      });

      it("should show the date format as end date", () => {
        renderComponent();
        fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "12",
          }),
        );
        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "6",
          }),
        );

        expect(screen.getByRole("textbox")).toHaveValue("2023-05-06 - YYYY-MM-DD");
      });
    });

    describe("when the first date is bigger than the end date", () => {
      it("should call onValueChange changing the firest value with the end date as undefined", () => {
        const { onValueChange } = renderComponent();
        fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "28",
          }),
        );

        expect(onValueChange).toHaveBeenCalledTimes(1);
        expect(onValueChange).toHaveBeenCalledWith([new Date(2023, 4, 28), undefined], 0);
      });

      it("should show the date format as end date", () => {
        renderComponent();
        fireEvent.click(screen.getByRole("button", { name: /open calendar/i }));

        fireEvent.click(
          screen.getByRole("gridcell", {
            name: "28",
          }),
        );

        expect(screen.getByRole("textbox")).toHaveValue("2023-05-28 - YYYY-MM-DD");
      });
    });
  });
});
