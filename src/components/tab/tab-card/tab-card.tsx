import { Paper, Tabs, Tab, styled, tabsClasses } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { TabContextProvider } from "../tab.context";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  [`&.${tabsClasses.root}`]: {
    backgroundColor: theme.palette.grey[100],
  },
}));

interface Props {
  tabs: string[];
  initialTab?: number;
}

export const TabCard = ({ children, tabs, initialTab = 0 }: PropsWithChildren<Props>) => {
  const [tab, setTab] = useState(initialTab);
  return (
    <TabContextProvider value={tab}>
      <Paper>
        <StyledTabs value={tab} onChange={(_, index: number) => setTab(index)}>
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </StyledTabs>
        {children}
      </Paper>
    </TabContextProvider>
  );
};
