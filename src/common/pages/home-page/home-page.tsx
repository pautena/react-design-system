import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Box, Typography } from "@mui/material";
import { Profile } from "../../../features";

export const HomePage = () => {
  const profile = useSelector<RootState, Profile | undefined>((state) => state.auth.profile);
  return (
    <Box data-testid="HomePage">
      <Typography>Home screen. profile: {profile?.email}</Typography>
    </Box>
  );
};
