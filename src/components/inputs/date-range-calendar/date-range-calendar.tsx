import { styled } from "@mui/material";
import { DateCalendar, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { endOfWeek, isAfter, isSameDay, startOfWeek } from "date-fns";
import { isBefore } from "date-fns/esm";
import React from "react";

type DateRange = [Date, Date];

interface CustomPickerDayProps extends PickersDayProps<Date> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
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
      backgroundColor: `${theme.palette.primary.light}80`,
      margin: 0,
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
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

const Day = (props: PickersDayProps<Date> & { dateRange?: DateRange | null }) => {
  const { day, dateRange, ...other } = props;

  if (dateRange == null) {
    return <PickersDay day={day} {...other} />;
  }

  const [start, end] = dateRange;

  const dayIsBetween = isAfter(day, start) && isBefore(day, end);
  const isFirstDay = isSameDay(day, start);
  const isLastDay = isSameDay(day, end);
  const isStartOfWeek = isSameDay(day, startOfWeek(day));
  const isEndOfWeek = isSameDay(day, endOfWeek(day));

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay || (dayIsBetween && isStartOfWeek)}
      isLastDay={isLastDay || (dayIsBetween && isEndOfWeek)}
    />
  );
};

export interface DateRangeCalendarProps {
  value: DateRange;
  onValueChange: (value: DateRange) => void;
}
export const DateRangeCalendar = ({ value, onValueChange }: DateRangeCalendarProps) => {
  const handleChange = (newValue: Date | null) => {
    //newValue && onValueChange(newValue)
    console.log("handleChange. newValue: ", newValue);
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
    />
  );
};
