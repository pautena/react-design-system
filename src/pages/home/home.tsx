import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Typography } from "@mui/material";
import { Profile } from "../../features";

export const Home = () => {
  const profile = useSelector<RootState, Profile | undefined>((state) => state.auth.profile);
  return (
    <Box data-testid="HomePage">
      <Typography>Home screen. profile: {profile?.email}</Typography>
    </Box>
  );
};
