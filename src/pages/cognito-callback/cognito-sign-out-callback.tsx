import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { AppDispatch } from "../../store";
import { signOutCallback } from "../../features";

export const CognitoSignOutCallback = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(signOutCallback());
  }, []);

  return (
    <Box>
      <Typography>Sign out...</Typography>
    </Box>
  );
};
