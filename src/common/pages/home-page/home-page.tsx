import React from "react";
import { Box, Typography } from "@mui/material";

export const HomePage = () => {
  //TODO const profile = useSelector<RootState, Profile | undefined>((state) => state.auth.profile);
  return (
    <Box data-testid="HomePage">
      <Typography>Home screen. profile: {/*profile?.email*/}</Typography>
    </Box>
  );
};
