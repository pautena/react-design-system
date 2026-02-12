import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {
  type PropsWithChildren,
  type ReactElement,
  type SyntheticEvent,
  useState,
} from "react";
import { useGetDefaultThemeColor } from "../utils";
import { TabCardContextProvider } from "./TabCard.context";

export interface TabData {
  text: string;
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

export type TabCardProps = PropsWithChildren<{
  tabs: TabData[];
  initialTab?: number;
  onChangeTab?: (tab: TabData, index: number) => void;
}>;

export default function TabCard({
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
