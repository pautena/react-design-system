import React from "react";
import { TabCard, TabData } from "./tab-card";
import { Typography } from "@mui/material";
import { TabCardPanel } from "./tab-card-panel";

export const DummyTabs = [
  { text: "tab 1" },
  { text: "tab 2.1", label: { text: "10", variant: "primary" } },
  { text: "tab 2.2" },
  { text: "tab 3", label: { text: "12", variant: "error" } },
];

export interface TabCardDummyProps {
  tabs: TabData[];
  initialTab: number;
}

export function TabCardDummy({ tabs, initialTab }: TabCardDummyProps) {
  return (
    <TabCard tabs={tabs} initialTab={initialTab}>
      <TabCardPanel index={0} sx={{ p: 2 }}>
        <Typography>Panel 1</Typography>
      </TabCardPanel>
      <TabCardPanel index={[1, 2]} sx={{ p: 2 }}>
        <Typography>Panel 2</Typography>
      </TabCardPanel>
      <TabCardPanel index={3} sx={{ p: 2 }}>
        <Typography>Panel 3</Typography>
      </TabCardPanel>
    </TabCard>
  );
}
