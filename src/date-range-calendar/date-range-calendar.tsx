import Box, { type BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
	DateCalendar,
	PickersDay,
	type PickersDayProps,
} from "@mui/x-date-pickers";
import {
	endOfWeek,
	format,
	isAfter,
	isBefore,
	isSameDay,
	startOfWeek,
} from "date-fns";
import { useState } from "react";

type DateRange = [Date, Date | undefined];

interface CustomPickerDayProps extends BoxProps {
	dayIsBetween: boolean;
	isFirstDay: boolean;
	isLastDay: boolean;
}

const CustomPickersDayBackground = styled(Box, {
	shouldForwardProp: (prop) =>
		prop !== "dayIsBetween" &&
		prop !== "isFirstDay" &&
		prop !== "isLastDay" &&
		prop !== "isStartOfWeek" &&
		prop !== "isEndOfWeek",
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => {
	return {
		...((isFirstDay || isLastDay || dayIsBetween) && {
			borderRadius: 0,
			backgroundColor: `${theme.palette.primary.light}40`,
			margin: 0,
		}),
		...(isFirstDay && {
			borderTopLeftRadius: "50%",
			borderBottomLeftRadius: "50%",
		}),
		...(isLastDay && {
			borderTopRightRadius: "50%",
			borderBottomRightRadius: "50%",
		}),
	};
}) as React.ComponentType<CustomPickerDayProps>;

const Day = (
	props: PickersDayProps<Date> & { dateRange?: DateRange | null },
) => {
	const { day, dateRange, ...other } = props;

	if (dateRange == null) {
		return <PickersDay day={day} {...other} />;
	}

	const [start, end] = dateRange;

	const dayIsBetween = !!end && isAfter(day, start) && isBefore(day, end);
	const isFirstDay = isSameDay(day, start);
	const isLastDay = !!end && isSameDay(day, end);
	const isStartOfWeek = isSameDay(day, startOfWeek(day));
	const isEndOfWeek = isSameDay(day, endOfWeek(day));

	return (
		<CustomPickersDayBackground
			dayIsBetween={dayIsBetween}
			isFirstDay={isFirstDay || (dayIsBetween && isStartOfWeek)}
			isLastDay={isLastDay || (dayIsBetween && isEndOfWeek)}
			aria-label={format(day, "yyyy-MM-dd")}
			aria-selected={dayIsBetween || isFirstDay || isLastDay}
			role="gridcell"
		>
			<PickersDay {...other} day={day} selected={isFirstDay || isLastDay} />
		</CustomPickersDayBackground>
	);
};

/**
 * Props for the DateRangeCalendar component.
 */
export interface DateRangeCalendarProps {
	/**
	 * The default date range value.
	 */
	defaultValue: DateRange;

	/**
	 * Callback function that is called when the date range value changes.
	 *
	 * @param value - The new date range value.
	 * @param updatedIndex - The index of the updated date range.
	 */
	onValueChange: (value: DateRange, updatedIndex: number) => void;
}

/**
 * A Date Range Calendar component that allows users to select a range of dates.
 */
export const DateRangeCalendar = ({
	defaultValue,
	onValueChange,
}: DateRangeCalendarProps) => {
	const [value, setValue] = useState(defaultValue);
	const [index, setIndex] = useState(0);

	const setValueRange = (
		newRange: DateRange,
		index: number,
		newIndex: number,
	) => {
		setValue(newRange);
		onValueChange(newRange, index);
		setIndex(newIndex);
	};

	const handleChange = (newValue: Date | null) => {
		if (!newValue) {
			return;
		}

		// If is the end date and is minor than the start date
		if (index === 1 && newValue < value[0]) {
			return setValueRange([newValue, undefined], 0, 1);
		}

		// If is the start date and is bigger than the end date
		if (index === 0 && value[1] && newValue > value[1]) {
			return setValueRange([newValue, undefined], 0, 1);
		}

		// Default case
		setValueRange(
			[index === 0 ? newValue : value[0], index === 1 ? newValue : value[1]],
			index,
			index === 0 ? 1 : 0,
		);
	};
	return (
		<DateCalendar
			value={null}
			onChange={handleChange}
			slots={{ day: Day }}
			slotProps={{
				day: {
					dateRange: value,
				} as any,
			}}
			aria-label="calendar range picker"
		/>
	);
};
