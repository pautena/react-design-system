import { type ReactElement, type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { TabCardContextProvider } from "./tab-card.context";

/**
 * Tab configuration data.
 */
export interface TabData {
  /**
   * Tab label text.
   */
  text: string;
  /**
   * Optional icon element.
   */
  icon?: ReactElement;
}

/**
 * Props for the TabCard component.
 */
export interface TabCardProps {
  /**
   * Array of tab configurations.
   */
  tabs: TabData[];
  /**
   * Index of the initially selected tab.
   * @default 0
   */
  initialTab?: number;
  /**
   * Callback when tab selection changes.
   * @param tab - The selected tab data.
   * @param index - Index of the selected tab.
   */
  onChangeTab?: (tab: TabData, index: number) => void;
  /**
   * Tab panel content.
   */
  children?: ReactNode;
}

/**
 * Card component with tabbed navigation.
 */
export function TabCard({
  tabs,
  initialTab = 0,
  onChangeTab = () => null,
  children,
}: TabCardProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  return (
    <TabCardContextProvider value={[selectedTab, setSelectedTab]}>
      <div className="overflow-hidden rounded-lg border bg-card">
        <div
          role="tablist"
          className="flex items-center gap-1 bg-muted px-2 py-1.5"
        >
          {tabs.map((tab, index) => {
            const selected = selectedTab === index;

            return (
              <button
                type="button"
                role="tab"
                key={`${tab.text}-${index}`}
                aria-selected={selected}
                className={cn(
                  "inline-flex min-h-8 items-center rounded-md px-3 text-sm transition",
                  selected
                    ? "bg-background font-semibold text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => {
                  setSelectedTab(index);
                  onChangeTab(tab, index);
                }}
              >
                {tab.icon}
                <span>{tab.text}</span>
              </button>
            );
          })}
        </div>
        <div>{children}</div>
      </div>
    </TabCardContextProvider>
  );
}
