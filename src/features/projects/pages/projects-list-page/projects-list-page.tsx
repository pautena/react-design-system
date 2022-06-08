import { Box, Button, Typography } from "@mui/material";
import { useGetProjectsQuery } from "features/projects/projects-api";
import { useNavigate } from "react-router-dom";

export const ProjectsListPage = () => {
  const navigate = useNavigate();
  const { isFetching, currentData, error, isError } = useGetProjectsQuery();

  const handleNewProject = () => navigate("/projects/add");
  return (
    <Box>
      <Typography variant="h4">ProjectsListPage</Typography>
      <p>isFetching: {JSON.stringify(isFetching)}</p>
      {isError && <p>error: {JSON.stringify(error)}</p>}
      <p>currentData: {JSON.stringify(currentData)}</p>
      <Button onClick={handleNewProject}>New project</Button>
    </Box>
  );
};
