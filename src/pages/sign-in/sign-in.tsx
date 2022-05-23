import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { signIn } from "../../features";
import { AppDispatch } from "../../store";

export const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClickSignIn = () => {
    dispatch(signIn());
  };

  return (
    <Box data-testid="SignInPage">
      <Typography>Sign In screen</Typography>
      <Button onClick={handleClickSignIn}>Sign in</Button>
    </Box>
  );
};
