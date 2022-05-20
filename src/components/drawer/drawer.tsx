import React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Environment, Project } from "../../features";
import DiamondIcon from "@mui/icons-material/Diamond";

const drawerWidth = 240;

const ToolsIcons = {
  diamond: () => <DiamondIcon />,
};

export interface Tool {
  id: string;
  name: string;
  icon: keyof typeof ToolsIcons;
  url: string;
}

const Tools: Tool[] = [
  {
    id: "resources-history",
    name: "Resources History",
    icon: "diamond",
    url: "/resources-history",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  projects: Project[];
  selectedProject?: Project;
  environments: Environment[];
  selectedEnvironment?: Environment;
  onChangeSelectedProject: (project: Project | undefined) => void;
  onChangeSelectedEnvironment: (environment: Environment | undefined) => void;
  onClickTool: (tool: Tool) => void;
  onDrawerClose: () => void;
}

export const Drawer = ({
  open,
  projects,
  selectedProject,
  environments,
  selectedEnvironment,
  onChangeSelectedProject,
  onChangeSelectedEnvironment,
  onClickTool,
  onDrawerClose,
  ...rest
}: DrawerProps) => {
  const theme = useTheme();

  return (
    <MuiDrawer open={open} {...rest}>
      <DrawerHeader>
        <IconButton onClick={onDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {open && (
        <Box px={2} pt={1} display="flex" flexDirection="column">
          <Select
            value={selectedProject?.id}
            label="Project"
            size="small"
            onChange={(e) => onChangeSelectedProject(projects.find((p) => p.id === e.target.value))}
            sx={{ mb: 1 }}
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={selectedEnvironment?.id}
            label="Environment"
            size="small"
            onChange={(e) =>
              onChangeSelectedEnvironment(environments.find((i) => i.id === e.target.value))
            }
          >
            {environments.map((environment) => (
              <MenuItem key={environment.id} value={environment.id}>
                {environment.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Tools.map((tool) => (
          <ListItem key={tool.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => onClickTool(tool)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {ToolsIcons[tool.icon]()}
              </ListItemIcon>
              <ListItemText primary={tool.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};
