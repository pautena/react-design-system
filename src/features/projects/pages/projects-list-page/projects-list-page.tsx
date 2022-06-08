import { Box, Button, Typography } from "@mui/material";
import { Project } from "app/base-api";
import { Header } from "common/components";
import { ProjectsList } from "features/projects/components";
import { useGetProjectsQuery } from "features/projects/projects-api";
import { useNavigate } from "react-router-dom";

export const ProjectsListPage = () => {
  const navigate = useNavigate();
  const { isFetching, currentData, error, isError } = useGetProjectsQuery();

  const handleNewProject = () => navigate("/projects/add");

  return (
    <Box>
      <Header
        title="Gamedex"
        actions={[
          {
            id: "add-project",
            text: "Add project",
            onClick: handleNewProject,
          },
        ]}
      />
      {currentData && (
        <ProjectsList
          loading={isFetching}
          projects={currentData}
        />
      )}
    </Box>
  );
};
