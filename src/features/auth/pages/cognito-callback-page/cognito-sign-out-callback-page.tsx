import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { AppDispatch } from "../../../../app/store";
import { signOutCallback } from "../../..";

export const CognitoSignOutCallbackPage = () => {
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
