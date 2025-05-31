import EventIcon from "@mui/icons-material/Event";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import { useState } from "react";
import { DateRangeCalendar } from "../date-range-calendar";

type DateRange = [Date, Date | undefined];

/**
 * Props for the DateRangePicker component.
 */
export interface DateRangePickerProps {
	/**
	 * The label for the date range picker.
	 */
	label: string;

	/**
	 * The default value for the date range picker.
	 */
	defaultValue: DateRange;

	/**
	 * The format in which the date range should be displayed.
	 */
	format: string;

	/**
	 * If true, the date range picker will take up the full width of its container.
	 * @default false
	 */
	fullWidth?: boolean;

	/**
	 * The size of the date range picker.
	 * @default "medium"
	 */
	size?: "small" | "medium";

	/**
	 * Callback function that is called when the value of the date range picker changes.
	 * @param value - The new date range value.
	 * @param index - The index of the date range picker.
	 */
	onValueChange: (value: DateRange, index: number) => void;
}

/**
 * DateRangePicker component allows users to select a date range.
 */
export const DateRangePicker = ({
	defaultValue,
	format: fmt,
	label,
	fullWidth,
	onValueChange,
	size = "medium",
}: DateRangePickerProps) => {
	const [isPopoverOpened, setIsPopoverOpened] = useState(false);
	const [value, setValue] = useState(defaultValue);

	const handleValueChange = (newValue: DateRange, index: number) => {
		setValue(newValue);
		onValueChange(newValue, index);
		setIsPopoverOpened(index < 1);
	};

	return (
		<>
			<TextField
				label={label}
				fullWidth={fullWidth}
				size={size}
				value={`${format(value[0], fmt)} - ${value[1] ? format(value[1], fmt) : fmt.toUpperCase()}`}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={() => setIsPopoverOpened((o) => !o)}
								aria-label="open calendar"
							>
								<EventIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Paper>
				<Collapse in={isPopoverOpened} aria-label="calendar collapse">
					<DateRangeCalendar
						defaultValue={defaultValue}
						onValueChange={handleValueChange}
					/>
				</Collapse>
			</Paper>
		</>
	);
};
