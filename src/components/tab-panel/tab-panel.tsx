import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTab } from "../tab-provider";

/**
 * Props for the TabPanel component
 */
export interface TabPanelProps {
  /**
   * Panel content
   */
  children?: ReactNode;
  /**
   * Tab index or array of indices that this panel corresponds to
   */
  index: number | number[];
  /**
   * Optional wrapper classes
   */
  className?: string;
}

/**
 * Content panel that displays when its associated tab is active
 */
export function TabPanel({ children, index, className }: TabPanelProps) {
  const [value] = useTab();
  let isTab = value === index;
  if (Array.isArray(index)) {
    isTab = index.includes(value);
  }

  return (
    <div
      role="tabpanel"
      hidden={!isTab}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={cn(className)}
    >
      {isTab ? <div className="p-4">{children}</div> : null}
    </div>
  );
}
