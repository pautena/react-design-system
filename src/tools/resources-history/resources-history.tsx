import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useLazyGetUserResourceQuery } from "../../features";
import { ResourcesHistoryTable } from "../../components";

export const ResourcesHistory = () => {
  const [trigger, result] = useLazyGetUserResourceQuery();
  const [userId, setUserId] = useState<string | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userId = data.get("userId")?.toString();
    const start = data.get("start")?.toString();
    const end = data.get("end")?.toString();

    if (userId && start && end) {
      trigger({
        userId,
        start,
        end,
      });
      setUserId(userId);
    }
  };

  return (
    <>
      <Typography variant="h4">User Resources</Typography>
      <Paper sx={{ p: 2, mt: 3 }}>
        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            name="userId"
            value="3490372662197718489"
          />
          <DatePicker
            label="Start Date"
            value={moment().subtract(2, "year")}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} name="start" sx={{ mx: 2 }} />}
          />
          <DatePicker
            label="End Date"
            value={moment()}
            onChange={() => {}}
            renderInput={(params) => <TextField name="end" {...params} />}
          />
          <Button variant="contained" type="submit" sx={{ ml: 2 }}>
            Search
          </Button>
        </Box>
      </Paper>
      {userId && (
        <Box sx={{ pt: 2 }}>
          <Typography variant="h6">User: {userId}</Typography>
          <Typography>
            Query status: {result.isUninitialized && `Uninitialized`}
            {result.isLoading && `loading`}
            {result.isSuccess && `success`}
            {result.isError && `error`}
          </Typography>
          {result.isError && <Typography>Query error: {JSON.stringify(result.error)}</Typography>}
          {result.isSuccess && <ResourcesHistoryTable resourceEntries={result.data} />}
        </Box>
      )}
    </>
  );
};
