import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { useGetDefaultThemeColor } from "../utils";
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
  colBreakpoint?: number;
  onSelectedItemChange?: (id: string) => void;
}>;

export const ListPanel = ({
  items,
  defaultSelectedItem,
  colBreakpoint = 3,
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
        <Grid item xs={colBreakpoint} pl={1} height={1}>
          <List sx={{ height: 1, overflowY: "auto" }}>
            {items.map(({ id, text, tooltip }) => {
              const selected = id === selectedItem;

              const contentEl = (
                <ListItemButton
                  key={id}
                  dense
                  selected={selected}
                  onClick={() => handleSelectItem(id)}
                  aria-label={text}
                  sx={{ backgroundColor: selected ? `${palette.grey[300]} !important` : undefined }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: selected ? typography.fontWeightMedium : undefined,
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
        <Grid item xs={12 - colBreakpoint} pl={1} py={1} pr={1}>
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
