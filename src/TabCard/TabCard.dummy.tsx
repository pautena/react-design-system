import Typography from "@mui/material/Typography";
import { Label } from "../Label";
import { TabCard, type TabData } from "./TabCard";
import { TabCardPanel } from "./TabCardPanel";

export const DummyTabs = [
  { text: "tab 1" },
  {
    text: "tab 2.1",
    icon: <Label text="10" variant="success" sx={{ mr: 1 }} />,
  },
  { text: "tab 2.2" },
  { text: "tab 3", icon: <Label text="12" variant="error" sx={{ mr: 1 }} /> },
];

export interface TabCardDummyProps {
  tabs: TabData[];
  initialTab: number;
  onChangeTab: (tab: TabData, index: number) => void;
}

export function TabCardDummy({
  tabs,
  initialTab,
  onChangeTab,
}: TabCardDummyProps) {
  return (
    <TabCard tabs={tabs} initialTab={initialTab} onChangeTab={onChangeTab}>
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
