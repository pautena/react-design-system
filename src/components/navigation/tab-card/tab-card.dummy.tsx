import React from "react";
import { TabCard, TabData } from "./tab-card";
import { Typography } from "@mui/material";
import { TabCardPanel } from "./tab-card-panel";
import { Label } from "~/components/data-display";

export const DummyTabs = [
  { text: "tab 1" },
  { text: "tab 2.1", icon: <Label text="10" variant="success" sx={{ mr: 1 }} /> },
  { text: "tab 2.2" },
  { text: "tab 3", icon: <Label text="12" variant="error" sx={{ mr: 1 }} /> },
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
