import { Paper, Tabs, Tab, styled, tabsClasses } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useTab } from "~/providers";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  [`&.${tabsClasses.root}`]: {
    backgroundColor: theme.palette.grey[100],
  },
}));

interface Props {
  tabs: string[];
}

export const TabCard = ({ children, tabs }: PropsWithChildren<Props>) => {
  const [tab, setTab] = useTab();
  return (
    <Paper>
      <StyledTabs value={tab} onChange={(_, index: number) => setTab(index)}>
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </StyledTabs>
      {children}
    </Paper>
  );
};
