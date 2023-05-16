import React, { useState } from "react";
import { format } from "date-fns";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

export interface DateRangePickerProps {
  label: string;
  value: [Date, Date];
  format: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  onValueChange: (value: [Date, Date]) => void;
}

export const DateRangePicker = ({
  value: [startDateProp, endDateProp],
  format: fmt,
  label,
  fullWidth,
  onValueChange,
  size = "medium",
}: DateRangePickerProps) => {
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);
  const [startDate, setStartDate] = useState(startDateProp);
  const [endDate, setEndDate] = useState(endDateProp);

  const handleChange = (e: any) => {
    console.log("TODO value change. e: ", e);
  };

  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      size={size}
      value={`${format(startDate, fmt)} - ${format(endDate, fmt)}`}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setIsPopoverOpened((o) => !o)}>
              <EventIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
