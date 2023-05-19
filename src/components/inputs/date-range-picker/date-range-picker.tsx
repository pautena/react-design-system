import React, { useState } from "react";
import { format } from "date-fns";
import {
  Button,
  Collapse,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { DateCalendar } from "@mui/x-date-pickers";

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
    <>
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
      <Paper sx={{ position: "absolute", inset: "0px auto auto 0px" }}>
        <Collapse in={isPopoverOpened}>
          <Grid container>
            <Grid item xs={6}>
              <DateCalendar />
            </Grid>
            <Grid item xs={6}>
              <DateCalendar />
            </Grid>
          </Grid>
        </Collapse>
      </Paper>
    </>
  );
};
