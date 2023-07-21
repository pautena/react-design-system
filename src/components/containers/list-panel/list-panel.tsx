import { Grid, List, ListItemButton, ListItemText, Paper, Tooltip, useTheme } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { useGetDefaultThemeColor } from "~/utils";
import { ListPanelContextProvider } from "./list-panel.context";
import { grey } from "@mui/material/colors";

export interface ListPanelItem {
  id: string;
  text: string;
  tooltip?: string;
}

export type ListPanelProps = PropsWithChildren<{
  defaultSelectedItem?: string;
  items: ListPanelItem[];
  onSelectedItemChange?: (id: string) => void;
}>;

export const ListPanel = ({
  items,
  defaultSelectedItem,
  children,
  onSelectedItemChange = () => null,
}: ListPanelProps) => {
  const bgColor = useGetDefaultThemeColor();
  const { palette, typography } = useTheme();
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleSelectItem = (id: string) => {
    setSelectedItem(id);
    onSelectedItemChange(id);
  };

  return (
    <ListPanelContextProvider value={selectedItem}>
      <Grid container bgcolor={bgColor} height={1}>
        <Grid item xs={3} pl={1} height={1}>
          <List sx={{ height: 1, overflowY: "auto" }}>
            {items.map(({ id, text, tooltip }) => {
              const selected = id === selectedItem;

              const contentEl = (
                <ListItemButton
                  key={id}
                  dense
                  selected={selected}
                  disableRipple
                  onClick={() => handleSelectItem(id)}
                  aria-label={text}
                  sx={{ backgroundColor: "transparent !important" }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: selected ? typography.fontWeightBold : undefined,
                      color: selected ? typography.body1.color : grey[600],
                    }}
                  />
                </ListItemButton>
              );

              return tooltip ? (
                <Tooltip key={id} title={tooltip} enterDelay={1500} placement="right">
                  {contentEl}
                </Tooltip>
              ) : (
                contentEl
              );
            })}
          </List>
        </Grid>
        <Grid item xs={9} pl={2} py={1} pr={1}>
          <Paper
            elevation={0}
            sx={{
              width: 1,
              height: 1,
              backgroundColor: palette.background.paper,
            }}
          >
            {children}
          </Paper>
        </Grid>
      </Grid>
    </ListPanelContextProvider>
  );
};