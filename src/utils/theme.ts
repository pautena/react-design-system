import { useTheme } from "@mui/material";

export const useGetDefaultThemeColor = ({ lightWeight = 100, darkWeight = 900 } = {}) => {
  const { palette } = useTheme();
  return palette.mode === "light" ? palette.grey[lightWeight] : palette.grey[darkWeight];
};
