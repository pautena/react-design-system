import { Box } from "@mui/material";
import { ListPanelItem } from "./list-panel";
import { useListPanel } from "./list-panel.context";
import React from "react";

export const ListPanelDemoContent = () => {
  const selectedId = useListPanel();

  return (
    <Box width={1} display="flex" justifyContent="center" alignItems="center" pt={2}>
      Panel content. Selected id: {selectedId}
    </Box>
  );
};

export const mockItemsShort: ListPanelItem[] = [
  {
    id: "all",
    text: "all",
  },
  {
    id: "inbox",
    text: "Inbox",
    tooltip: "this is the inbox tooltip",
  },
  {
    id: "sent",
    text: "Sent",
  },
  {
    id: "drafts",
    text: "Drafts",
  },
];

export const mockItemsLong: ListPanelItem[] = [
  {
    id: "item1",
    text: "Item 1",
  },
  {
    id: "item2",
    text: "Item 2",
  },
  {
    id: "item3",
    text: "Item 3",
  },
  {
    id: "item4",
    text: "Item 4",
  },
  {
    id: "item5",
    text: "Item 5",
  },
  {
    id: "item6",
    text: "Item 6",
  },
  {
    id: "item7",
    text: "Item 7",
  },
  {
    id: "item8",
    text: "Item 8",
  },
  {
    id: "item9",
    text: "Item 9",
  },
  {
    id: "item10",
    text: "Item 10",
  },
  {
    id: "item11",
    text: "Item 11",
  },
  {
    id: "item12",
    text: "Item 12",
  },
  {
    id: "item13",
    text: "Item 13",
  },
  {
    id: "item14",
    text: "Item 14",
  },
  {
    id: "item15",
    text: "Item 15",
  },
  {
    id: "item16",
    text: "Item 16",
  },
  {
    id: "item17",
    text: "Item 17",
  },
  {
    id: "item18",
    text: "Item 18",
  },
  {
    id: "item19",
    text: "Item 19",
  },
  {
    id: "item20",
    text: "Item 20",
  },
];
