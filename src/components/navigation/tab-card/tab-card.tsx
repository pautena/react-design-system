import { Paper, Tabs, Tab, styled, Box } from "@mui/material";
import React, { PropsWithChildren, SyntheticEvent, useState } from "react";
import { TabCardContextProvider } from "./tab-card.context";
import { useGetDefaultThemeColor } from "~/utils";
import { Label, LabelVariant } from "~/components/data-display/label";

export interface TabData {
  text: string;
  label?: {
    text: string;
    variant: LabelVariant;
  };
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
  minHeight:theme.spacing(5),
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
  minHeight:theme.spacing(5),
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

export const TabCard = ({
  children,
  tabs,
  initialTab = 0,
  onChangeTab = () => null,
}: TabCardProps) => {
  const bgColor = useGetDefaultThemeColor();
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleChangeTab = (_: SyntheticEvent<Element, Event>, index: number) => {
    setSelectedTab(index);
    onChangeTab(tabs[index], index);
  };

  return (
    <TabCardContextProvider value={[selectedTab, setSelectedTab]}>
      <Paper>
        <Box bgcolor={bgColor}>
          <StyledTabs value={selectedTab} onChange={handleChangeTab}>
            {tabs.map(({ text, label }) => (
              <StyledTab
                iconPosition="start"
                disableRipple
                key={text}
                label={text}
                icon={label && <Label text={label.text} variant={label.variant} sx={{ mr: 1 }} />}
              />
            ))}
          </StyledTabs>
        </Box>
        {children}
      </Paper>
    </TabCardContextProvider>
  );
};
