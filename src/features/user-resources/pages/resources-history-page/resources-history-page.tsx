import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, Snackbar, Alert } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useLazyGetUserResourcesQuery } from "../../..";
import { ResourcesHistoryTable } from "../../../../common/components";

export const ResourcesHistoryPage = () => {
  const [trigger, result] = useLazyGetUserResourcesQuery();
  const [userId, setUserId] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(moment().subtract(1, "month").toDate());
  const [endDate, setEndDate] = useState<Date | null>(moment().toDate());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId && startDate && endDate) {
      trigger({
        userId,
        start: startDate.toString(),
        end: endDate.toString(),
      });
      setUserId(userId);
    }
  };

  return (
    <Box data-testid="UserResourcesPage">
      <Typography variant="h4">User Resources</Typography>
      <Paper sx={{ p: 2, mt: 3 }}>
        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <DatePicker
            label="Start Date"
            inputFormat="DD/MM/YYYY"
            value={startDate}
            onChange={setStartDate}
            renderInput={(params) => <TextField {...params} name="start" sx={{ mx: 2 }} />}
          />
          <DatePicker
            label="End Date"
            inputFormat="DD/MM/YYYY"
            value={endDate}
            onChange={setEndDate}
            renderInput={(params) => <TextField name="end" {...params} />}
          />
          <Button variant="contained" type="submit" sx={{ ml: 2 }} disabled={!userId}>
            Search
          </Button>
        </Box>
      </Paper>
      {!result.isUninitialized && !result.isError && (
        <Box sx={{ pt: 2 }}>
          <ResourcesHistoryTable
            resourceEntries={result.currentData || []}
            loading={result.isFetching}
          />
        </Box>
      )}
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={result.isError}>
        <Alert severity="error" sx={{ width: "100%" }}>
          {(result.error as Error)?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
