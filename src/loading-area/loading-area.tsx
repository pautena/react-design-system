import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * Displays a centered loading indicator
 */
export const LoadingArea = () => {
  return (
    <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
};
