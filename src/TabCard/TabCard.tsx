import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { type ReactElement, type SyntheticEvent, useState } from "react";
import { useGetDefaultThemeColor } from "../utils";
import { TabCardContextProvider } from "./TabCard.context";

/**
 * Tab configuration data
 */
export interface TabData {
  /**
   * Tab label text
   */
  text: string;
  /**
   * Optional icon element
   */
  icon?: ReactElement;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  minHeight: theme.spacing(5),
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
  paddingTop: 0,
  paddingBottom: 0,
  minHeight: theme.spacing(5),
  "&.Mui-selected": {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

/**
 * Props for the TabCard component
 */
export interface TabCardProps {
  /**
   * Array of tab configurations
   */
  tabs: TabData[];
  /**
   * Index of the initially selected tab
   * @default 0
   */
  initialTab?: number;
  /**
   * Callback when tab selection changes
   * @param tab - The selected tab data
   * @param index - Index of the selected tab
   */
  onChangeTab?: (tab: TabData, index: number) => void;
  /**
   * Content to display in the tab panels
   */
  children?: React.ReactNode;
}

/**
 * Card component with tabbed navigation
 */
export function TabCard({
  children,
  tabs,
  initialTab = 0,
  onChangeTab = () => null,
}: TabCardProps) {
  const bgColor = useGetDefaultThemeColor();
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleChangeTab = (
    _: SyntheticEvent<Element, Event>,
    index: number,
  ) => {
    setSelectedTab(index);
    onChangeTab(tabs[index], index);
  };

  return (
    <TabCardContextProvider value={[selectedTab, setSelectedTab]}>
      <Paper variant="outlined">
        <Box bgcolor={bgColor}>
          <StyledTabs value={selectedTab} onChange={handleChangeTab}>
            {tabs.map(({ text, icon }) => (
              <StyledTab
                iconPosition="start"
                disableRipple
                key={text}
                label={text}
                icon={icon}
              />
            ))}
          </StyledTabs>
        </Box>
        {children}
      </Paper>
    </TabCardContextProvider>
  );
}

export default TabCard;
