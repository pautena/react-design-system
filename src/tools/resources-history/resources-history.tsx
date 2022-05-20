import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

export const ResourcesHistory = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: data.get("userId"),
      startDate: data.get("startDate"),
      endDate: data.get("endDate"),
    });
  };

  return (
    <Box>
      <Typography variant="h4">User Resources</Typography>
      <Paper sx={{ p: 2, mt: 3 }}>
        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center">
          <TextField id="outlined-basic" label="User ID" variant="outlined" name="userId" />
          <DatePicker
            label="Start Date"
            value={moment().subtract(2, "year")}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} name="startDate" sx={{ mx: 2 }} />}
          />
          <DatePicker
            label="End Date"
            value={moment()}
            onChange={() => {}}
            renderInput={(params) => <TextField name="endDate" {...params} />}
          />
          <Button variant="contained" type="submit" sx={{ ml: 2 }}>
            Search
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
