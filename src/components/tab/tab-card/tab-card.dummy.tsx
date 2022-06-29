import React from "react";
import { TabCard } from "./tab-card";
import { TabPanel } from "../tab-panel";
import { Typography } from "@mui/material";

export const DummyTabs = ["tab 1", "tab 2.1", "tab 2.2", "tab 3"];

interface Props {
  tabs: string[];
  initialTab: number;
}

export function TabCardDummy({ tabs, initialTab }: Props) {
  return (
    <TabCard tabs={tabs} initialTab={initialTab}>
      <TabPanel index={0}>
        <Typography>Panel 1</Typography>
      </TabPanel>
      <TabPanel index={[1, 2]}>
        <Typography>Panel 2</Typography>
      </TabPanel>
      <TabPanel index={3}>
        <Typography>Panel 3</Typography>
      </TabPanel>
    </TabCard>
  );
}
