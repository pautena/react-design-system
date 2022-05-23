import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Home, SignIn, CognitoSignInCallback, CognitoSignOutCallback } from "../../pages";
import { AppBar, AppBarProps, Drawer, Tool } from "../../components";
import { Environment, Project, selectProject, signOut, selectEnvironment } from "../../features";
import CssBaseline from "@mui/material/CssBaseline";
import { ResourcesHistory } from "../../tools";

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
        onClickSignOut={() => dispatch(signOut())}
      />
      <CustomDrawer
        variant="permanent"
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
          <Route path="/resources-history" element={<ResourcesHistory />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Box>
  );
};

export const RootNavigator = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector<RootState, boolean>((state) => state.auth.isAuthenticated);
  const signInInProgress = useSelector<RootState, boolean>((state) => state.auth.signInInProgress);
  const signOutInProgress = useSelector<RootState, boolean>(
    (state) => state.auth.signOutInProgress,
  );

  useEffect(() => {
    if (!signInInProgress && !signOutInProgress) {
      if (isAuthenticated) {
        navigate("/");
      } else {
        navigate("/sign-in");
      }
    }
  }, [isAuthenticated, signInInProgress, signOutInProgress]);

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/callback/cognito" element={<CognitoSignInCallback />} />
      <Route path="/logout" element={<CognitoSignOutCallback />} />
      <Route path="/*" element={<AppNavigator />} />
    </Routes>
  );
};
