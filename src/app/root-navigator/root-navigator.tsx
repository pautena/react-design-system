import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "app/store";
import { AppBar, AppBarProps, Drawer, Tool } from "common/components";
import { Project, selectProject,ProjectsListPage,AddProjectPage } from "features/projects";
import { Environment, selectEnvironment } from "features";
import CssBaseline from "@mui/material/CssBaseline";
import { HomePage } from "common/pages/home-page";
import { ResourcesHistoryPage } from "features/user-resources";

const toolsGroup1: Tool[] = [
  {
    id: "gamedex",
    name: "Gamedex",
    icon: "book",
    url: "/projects",
  },
];

const toolsGroup2: Tool[] = [
  {
    id: "resources-history",
    name: "Resources History",
    icon: "diamond",
    url: "/resources-history",
  },
];

export const tools: Tool[][] = [toolsGroup1, toolsGroup2];

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const projects = useSelector<RootState, Project[]>((state) => state.projects.projects);
  const selectedProject = useSelector<RootState, Project | undefined>(
    (state) => state.projects.selectedProject,
  );
  const environments = useSelector<RootState, Environment[]>(
    (state) => state.environments.environments,
  );
  const selectedEnvironment = useSelector<RootState, Environment | undefined>(
    (state) => state.environments.selectedEnvironment,
  );
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeSelectedProject = (project: Project | undefined) => {
    project && dispatch(selectProject(project));
  };

  const handleChangeSelectedEnvironment = (environment: Environment | undefined) => {
    environment && dispatch(selectEnvironment(environment));
  };

  const handleClickTool = (tool: Tool) => {
    navigate(tool.url);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        position="fixed"
        open={open}
        onClickDrawerMenu={handleDrawerOpen}
        onClickSignOut={() => {
          /* TODO */
        }}
      />
      <CustomDrawer
        variant="permanent"
        tools={tools}
        projects={projects}
        selectedProject={selectedProject}
        environments={environments}
        selectedEnvironment={selectedEnvironment}
        open={open}
        onDrawerClose={handleDrawerClose}
        onChangeSelectedProject={handleChangeSelectedProject}
        onChangeSelectedEnvironment={handleChangeSelectedEnvironment}
        onClickTool={handleClickTool}
      />
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/resources-history" element={<ResourcesHistoryPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/projects/add" element={<AddProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Box>
  );
};

export const RootNavigator = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/*" element={<AppNavigator />} />
    </Routes>
  );
};
