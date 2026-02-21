import { Badge } from "@/components/badge";
import TabCard, { type TabData } from "./tab-card";
import TabCardPanel from "./tab-card-panel";

export const DummyTabs = [
  { text: "tab 1" },
  {
    text: "tab 2.1",
    icon: <Badge text="10" variant="success" className="mr-2" />,
  },
  { text: "tab 2.2" },
  {
    text: "tab 3",
    icon: <Badge text="12" variant="error" className="mr-2" />,
  },
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
      <TabCardPanel index={0} sx={{ padding: "0.5rem" }}>
        <p>Panel 1</p>
      </TabCardPanel>
      <TabCardPanel index={[1, 2]} sx={{ padding: "0.5rem" }}>
        <p>Panel 2</p>
      </TabCardPanel>
      <TabCardPanel index={3} sx={{ padding: "0.5rem" }}>
        <p>Panel 3</p>
      </TabCardPanel>
    </TabCard>
  );
}
