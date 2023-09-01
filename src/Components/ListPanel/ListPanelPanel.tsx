import { PropsWithChildren } from "react";
import { useListPanel } from "./ListPanel.context";
import React from "react";

export type ListPanelPanelProps = PropsWithChildren<{
  ids: string[];
}>;

export const ListPanelPanel = ({ ids, children }: ListPanelPanelProps) => {
  const selectedId = useListPanel();

  if (selectedId && !ids.includes(selectedId)) {
    return null;
  }

  return <>{children}</>;
};
