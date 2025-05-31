import { addDays, differenceInCalendarDays, format, subDays } from "date-fns";
import { vi } from "vitest";
import { fireEvent, render, screen } from "../tests/testing-library";
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

	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date(2023, 4, 26));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

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
		it("should call onValueChange when the first date is selected with the first value changed", () => {
			const { endDate, onValueChange } = renderComponent();

			fireEvent.click(
				screen.getByRole("gridcell", {
					name: "4",
				}),
			);

			expect(onValueChange).toHaveBeenCalledTimes(1);
			expect(onValueChange).toHaveBeenCalledWith(
				[new Date(2023, 4, 4), endDate],
				0,
			);
		});

		it("should call onValueChange when the second date is selected with the second value changed", () => {
			const { onValueChange } = renderComponent();

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

		it("should call onValueChange when the third date is selected with the first value changed", () => {
			const { onValueChange } = renderComponent();

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
			fireEvent.click(
				screen.getByRole("gridcell", {
					name: "2",
				}),
			);

			expect(onValueChange).toHaveBeenCalledTimes(3);
			expect(onValueChange).toHaveBeenLastCalledWith(
				[new Date(2023, 4, 2), new Date(2023, 4, 12)],
				0,
			);
		});

		it("should call onValueChange when a second date minor than the initial date is selected changing the first value", () => {
			const { onValueChange } = renderComponent();

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
			expect(onValueChange).toHaveBeenLastCalledWith(
				[new Date(2023, 4, 6), undefined],
				0,
			);
		});

		it("should call onValueChange when the first date is bigger than the end date with the end date as undefined", () => {
			const { onValueChange } = renderComponent();

			fireEvent.click(
				screen.getByRole("gridcell", {
					name: "28",
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
