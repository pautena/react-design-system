import { Container, Box, Typography } from "@mui/material";
import { Project } from "app/base-api";
import { ProjectForm } from "features/projects/components";
import { useAddProjectMutation } from "features/projects/projects-api";
import { useDispatch } from "react-redux";

export const AddProjectPage = () => {
  const [addProject, result] = useAddProjectMutation();
  const handleSubmitProject = (project: Project) => {
    addProject(project);
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
