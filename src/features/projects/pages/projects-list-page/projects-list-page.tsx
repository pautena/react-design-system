import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProjectsListPage = () => {
  const navigate = useNavigate();

  const handleNewProject = () => navigate("/projects/add");
  return (
    <Box>
      <Typography variant="h4">ProjectsListPage</Typography>
      <Button onClick={handleNewProject}>New project</Button>
    </Box>
  );
};
