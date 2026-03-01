import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

type DateRange = [Date, Date | undefined];

const formatLabel = (date: Date) => format(date, "yyyy-MM-dd");

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
 * A date range calendar component that allows users to select a range of dates.
 */
export function DateRangeCalendar({
  defaultValue,
  onValueChange,
}: DateRangeCalendarProps) {
  const [value, setValue] = useState<DateRange>(defaultValue);
  const [index, setIndex] = useState(0);

  const setValueRange = (
    newRange: DateRange,
    updatedIndex: number,
    newIndex: number,
  ) => {
    setValue(newRange);
    onValueChange(newRange, updatedIndex);
    setIndex(newIndex);
  };

  const handleDayClick = (day: Date) => {
    if (index === 1 && day < value[0]) {
      return setValueRange([day, undefined], 0, 1);
    }

    if (index === 0 && value[1] && day > value[1]) {
      return setValueRange([day, undefined], 0, 1);
    }

    setValueRange(
      [index === 0 ? day : value[0], index === 1 ? day : value[1]],
      index,
      index === 0 ? 1 : 0,
    );
  };

  return (
    <Calendar
      mode="range"
      selected={{ from: value[0], to: value[1] }}
      onDayClick={handleDayClick}
      defaultMonth={value[0]}
      labels={{
        labelDayButton: (date) => formatLabel(date),
        labelGridcell: (date) => formatLabel(date),
      }}
      aria-label="calendar range picker"
    />
  );
}

export default DateRangeCalendar;
