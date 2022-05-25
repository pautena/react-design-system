import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { AppDispatch } from "../../../../app/store";
import { signInCallback } from "../../..";

export const CognitoSignInCallbackPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(signInCallback());
  }, []);

  return (
    <Box>
      <Typography>Validating user...</Typography>
    </Box>
  );
};
