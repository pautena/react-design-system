/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null;
  title: string;
  codeName: string;
  studio: string;
  status: ProjectStatus;
  users: Array<Users | null>;
  repository: string;
  configRepo?: string | null;
  repoStatus: RepoStatus;
  mainLibrary: MainLibrary;
  configManager: string;
  grpc: Grpc;
  services: ServicesInput;
  deploy: Deploy;
  notes?: string | null;
};

export enum ProjectStatus {
  Worldlaunched = "Worldlaunched",
  Development = "Development",
  TBKilledKissflowWIP = "TBKilledKissflowWIP",
  TBKilled = "TBKilled",
  Killed = "Killed",
}

export enum Users {
  IOS = "IOS",
  Android = "Android",
  Amazon = "Amazon",
  Windows = "Windows",
  GameJam = "GameJam",
}

export enum RepoStatus {
  Internal = "Internal",
  Private = "Private",
  InternalArchived = "InternalArchived",
  NotKnown = "NotKnown",
}

export enum MainLibrary {
  Base = "Base",
  RdBackendPhp = "RdBackendPhp",
  Emerald = "Emerald",
}

export enum Grpc {
  None = "None",
  Mixed = "Mixed",
  Full = "Full",
}

export type ServicesInput = {
  sprocket: boolean;
  sqs: boolean;
  tournaments: boolean;
  hermes: boolean;
  leaderboard: boolean;
  friends: boolean;
  presence: boolean;
  teams: boolean;
  groups: boolean;
  auth: boolean;
  devCharts: boolean;
};

export enum Deploy {
  Postman = "Postman",
  GithubActions = "GithubActions",
  Concourse = "Concourse",
}

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null;
  codeName?: ModelStringInput | null;
  studio?: ModelStringInput | null;
  status?: ModelProjectStatusInput | null;
  users?: ModelUsersInput | null;
  repository?: ModelStringInput | null;
  configRepo?: ModelStringInput | null;
  repoStatus?: ModelRepoStatusInput | null;
  mainLibrary?: ModelMainLibraryInput | null;
  configManager?: ModelStringInput | null;
  grpc?: ModelGrpcInput | null;
  deploy?: ModelDeployInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelProjectStatusInput = {
  eq?: ProjectStatus | null;
  ne?: ProjectStatus | null;
};

export type ModelUsersInput = {
  eq?: Users | null;
  ne?: Users | null;
};

export type ModelRepoStatusInput = {
  eq?: RepoStatus | null;
  ne?: RepoStatus | null;
};

export type ModelMainLibraryInput = {
  eq?: MainLibrary | null;
  ne?: MainLibrary | null;
};

export type ModelGrpcInput = {
  eq?: Grpc | null;
  ne?: Grpc | null;
};

export type ModelDeployInput = {
  eq?: Deploy | null;
  ne?: Deploy | null;
};

export type Project = {
  __typename: "Project";
  id: string;
  title: string;
  codeName: string;
  studio: string;
  status: ProjectStatus;
  users: Array<Users | null>;
  repository: string;
  configRepo?: string | null;
  repoStatus: RepoStatus;
  mainLibrary: MainLibrary;
  configManager: string;
  grpc: Grpc;
  services: Services;
  deploy: Deploy;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Services = {
  __typename: "Services";
  sprocket: boolean;
  sqs: boolean;
  tournaments: boolean;
  hermes: boolean;
  leaderboard: boolean;
  friends: boolean;
  presence: boolean;
  teams: boolean;
  groups: boolean;
  auth: boolean;
  devCharts: boolean;
};

export type UpdateProjectInput = {
  id: string;
  title?: string | null;
  codeName?: string | null;
  studio?: string | null;
  status?: ProjectStatus | null;
  users?: Array<Users | null> | null;
  repository?: string | null;
  configRepo?: string | null;
  repoStatus?: RepoStatus | null;
  mainLibrary?: MainLibrary | null;
  configManager?: string | null;
  grpc?: Grpc | null;
  services?: ServicesInput | null;
  deploy?: Deploy | null;
  notes?: string | null;
};

export type DeleteProjectInput = {
  id: string;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  codeName?: ModelStringInput | null;
  studio?: ModelStringInput | null;
  status?: ModelProjectStatusInput | null;
  users?: ModelUsersInput | null;
  repository?: ModelStringInput | null;
  configRepo?: ModelStringInput | null;
  repoStatus?: ModelRepoStatusInput | null;
  mainLibrary?: ModelMainLibraryInput | null;
  configManager?: ModelStringInput | null;
  grpc?: ModelGrpcInput | null;
  deploy?: ModelDeployInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection";
  items: Array<Project | null>;
  nextToken?: string | null;
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type CreateProjectMutation = {
  createProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type UpdateProjectMutation = {
  updateProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type DeleteProjectMutation = {
  deleteProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetProjectQueryVariables = {
  id: string;
};

export type GetProjectQuery = {
  getProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProjectsQuery = {
  listProjects?: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      title: string;
      codeName: string;
      studio: string;
      status: ProjectStatus;
      users: Array<Users | null>;
      repository: string;
      configRepo?: string | null;
      repoStatus: RepoStatus;
      mainLibrary: MainLibrary;
      configManager: string;
      grpc: Grpc;
      services: {
        __typename: "Services";
        sprocket: boolean;
        sqs: boolean;
        tournaments: boolean;
        hermes: boolean;
        leaderboard: boolean;
        friends: boolean;
        presence: boolean;
        teams: boolean;
        groups: boolean;
        auth: boolean;
        devCharts: boolean;
      };
      deploy: Deploy;
      notes?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateProjectSubscription = {
  onCreateProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?: {
    __typename: "Project";
    id: string;
    title: string;
    codeName: string;
    studio: string;
    status: ProjectStatus;
    users: Array<Users | null>;
    repository: string;
    configRepo?: string | null;
    repoStatus: RepoStatus;
    mainLibrary: MainLibrary;
    configManager: string;
    grpc: Grpc;
    services: {
      __typename: "Services";
      sprocket: boolean;
      sqs: boolean;
      tournaments: boolean;
      hermes: boolean;
      leaderboard: boolean;
      friends: boolean;
      presence: boolean;
      teams: boolean;
      groups: boolean;
      auth: boolean;
      devCharts: boolean;
    };
    deploy: Deploy;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
