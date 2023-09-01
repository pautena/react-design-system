import React, { useState } from "react";
import { format } from "date-fns";
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { DateRangeCalendar } from "../DateRangeCalendar";

type DateRange = [Date, Date | undefined];
export interface DateRangePickerProps {
  label: string;
  defaultValue: DateRange;
  format: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  onValueChange: (value: DateRange, index: number) => void;
}

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
              <IconButton onClick={() => setIsPopoverOpened((o) => !o)} aria-label="open calendar">
                <EventIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Paper>
        <Collapse in={isPopoverOpened} aria-label="calendar collapse">
          <DateRangeCalendar defaultValue={defaultValue} onValueChange={handleValueChange} />
        </Collapse>
      </Paper>
    </>
  );
};
