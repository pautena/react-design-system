import Box from "@mui/material/Box";
import { useTab } from "../TabProvider";

/**
 * Props for the TabPanel component
 */
interface TabPanelProps {
  /**
   * Panel content
   */
  children?: React.ReactNode;
  /**
   * Tab index or array of indices that this panel corresponds to
   */
  index: number | number[];
}

/**
 * Content panel that displays when its associated tab is active
 */
export function TabPanel({ children, index }: TabPanelProps) {
  const [value] = useTab();
  let isTab = value === index;
  if (Array.isArray(index)) {
    isTab = index.includes(value);
  }

  return (
    <div
      role="tabpanel"
      hidden={!isTab}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {isTab && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
