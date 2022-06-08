import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  ProjectStatus,
  MainLibrary,
  Users,
  Grpc,
  Deploy,
  Project,
  Services,
  RepoStatus,
} from "app/base-api";
import { FormEvent, useState } from "react";

const projectStatuses = Object.keys(ProjectStatus);
const repoStatuses = Object.keys(RepoStatus);
const libraries = Object.keys(MainLibrary);
const users = Object.keys(Users);
const grpcs = Object.keys(Grpc);
const deploys = Object.keys(Deploy);
const services = [
  "sprocket",
  "sqs",
  "tournaments",
  "hermes",
  "leaderboard",
  "friends",
  "presence",
  "teams",
  "groups",
  "auth",
  "devCharts",
];

interface Props {
  onSubmitProject: (project: Project) => void;
}

export const ProjectForm = ({ onSubmitProject }: Props) => {
  const [grpc, setGrpc] = useState(grpcs[0]);
  const [deploy, setDeploy] = useState(deploys[0]);
  const [library, setLibrary] = useState(libraries[0]);
  const [status, setStatus] = useState(projectStatuses[0]);
  const [repoStatus, setRepoStatus] = useState(repoStatuses[0]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleChangeSelectedUsers = ({ target: { value } }: SelectChangeEvent<string[]>) => {
    setSelectedUsers(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeSelectedServices = ({ target: { value } }: SelectChangeEvent<string[]>) => {
    setSelectedServices(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("form data: ", data);

    const services: Services = {
      __typename: "Services",
      sprocket: selectedServices.includes("sprocket"),
      sqs: selectedServices.includes("sqs"),
      tournaments: selectedServices.includes("tournaments"),
      hermes: selectedServices.includes("hermes"),
      leaderboard: selectedServices.includes("leaderboard"),
      friends: selectedServices.includes("friends"),
      presence: selectedServices.includes("presence"),
      teams: selectedServices.includes("teams"),
      groups: selectedServices.includes("groups"),
      auth: selectedServices.includes("auth"),
      devCharts: selectedServices.includes("devCharts"),
    };

    const project: Project = {
      __typename: "Project",
      id: data.get("id")?.toString() || "",
      title: data.get("title")?.toString() || "",
      codeName: data.get("codeName")?.toString() || "",
      studio: data.get("studio")?.toString() || "",
      status: (data.get("status")?.toString() as ProjectStatus) || "",
      users: selectedUsers as Users[],
      repository: data.get("repository")?.toString() || "",
      configRepo: data.get("configRepo")?.toString(),
      repoStatus: (data.get("repoStatus")?.toString() as RepoStatus) || "",
      mainLibrary: (data.get("mainLibrary")?.toString() as MainLibrary) || "",
      configManager: data.get("configManager")?.toString() || "",
      grpc: (data.get("grpc")?.toString() as Grpc) || "",
      services,
      deploy: (data.get("deploy")?.toString() as Deploy) || "",
      notes: data.get("notes")?.toString(),
      createdAt: "",
      updatedAt: "",
    };
    onSubmitProject(project);
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", px: 2, py: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField name="id" label="ID" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField name="title" label="Title" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField name="codeName" label="Code name" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField name="studio" label="Studio" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel required id="status-select-label">
              Status
            </InputLabel>
            <Select
              labelId="status-select-label"
              name="status"
              value={status}
              label="Status"
              required
              onChange={(value) => setStatus(value.target.value)}
            >
              {projectStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel required id="users-select-label">
              Users
            </InputLabel>
            <Select
              labelId="users-select-label"
              name="users"
              value={selectedUsers}
              onChange={handleChangeSelectedUsers}
              label="Users"
              renderValue={(selected) => selected.join(", ")}
              multiple
              required
            >
              {users.map((user) => (
                <MenuItem key={user} value={user}>
                  <Checkbox checked={selectedUsers.indexOf(user) > -1} />
                  <ListItemText primary={user} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel required id="main-library-label">
              Library
            </InputLabel>
            <Select
              labelId="main-library-label"
              name="mainLibrary"
              value={library}
              label="Library"
              required
              onChange={(value) => setLibrary(value.target.value)}
            >
              {libraries.map((library) => (
                <MenuItem key={library} value={library}>
                  {library}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel required id="main-library-label">
              Deploy
            </InputLabel>
            <Select
              labelId="deploy-label"
              name="deploy"
              value={deploy}
              label="Deploy"
              required
              onChange={(value) => setDeploy(value.target.value)}
            >
              {deploys.map((deploy) => (
                <MenuItem key={deploy} value={deploy}>
                  {deploy}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel required id="main-library-label">
              GRPC
            </InputLabel>
            <Select
              labelId="grpc-label"
              name="grpc"
              value={grpc}
              label="Grpc"
              required
              onChange={(value) => setGrpc(value.target.value)}
            >
              {grpcs.map((grpc) => (
                <MenuItem key={grpc} value={grpc}>
                  {grpc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField name="repository" label="Repository" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="configRepo"
            label="Configuration repository"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel required id="repo-status-label">
              Repository status
            </InputLabel>
            <Select
              labelId="repo-status-label"
              name="repoStatus"
              value={repoStatus}
              label="Repository status"
              required
              onChange={(value) => setRepoStatus(value.target.value)}
            >
              {repoStatuses.map((repoStatus) => (
                <MenuItem key={repoStatus} value={repoStatus}>
                  {repoStatus}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="configManager"
            label="Config Manager"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel required id="users-select-label">
              Services
            </InputLabel>
            <Select
              labelId="services-select-label"
              name="services"
              value={selectedServices}
              onChange={handleChangeSelectedServices}
              label="Services"
              renderValue={(selected) => selected.join(", ")}
              multiple
              required
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  <Checkbox checked={selectedServices.indexOf(service) > -1} />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField name="notes" label="Notes" variant="outlined" fullWidth multiline rows={3} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
