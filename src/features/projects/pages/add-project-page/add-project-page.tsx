import { Container, Box, Typography } from "@mui/material";
import { Project } from "app/graphql/api.types";
import { ProjectForm } from "features/projects/components";

export const AddProjectPage = () => {

  const handleSubmitProject = (project:Project) =>{
    console.log("project: ",project);
  };

  return (
    <Container>
      <Typography variant="h4">Add a new project</Typography>
      <Box mt={2}>
        <ProjectForm onSubmitProject={handleSubmitProject} />
      </Box>
    </Container>
  );
};
