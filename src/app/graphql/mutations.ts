/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      codeName
      studio
      status
      users
      repository
      configRepo
      repoStatus
      mainLibrary
      configManager
      grpc
      services {
        sprocket
        sqs
        tournaments
        hermes
        leaderboard
        friends
        presence
        teams
        groups
        auth
        devCharts
      }
      deploy
      notes
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      codeName
      studio
      status
      users
      repository
      configRepo
      repoStatus
      mainLibrary
      configManager
      grpc
      services {
        sprocket
        sqs
        tournaments
        hermes
        leaderboard
        friends
        presence
        teams
        groups
        auth
        devCharts
      }
      deploy
      notes
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      codeName
      studio
      status
      users
      repository
      configRepo
      repoStatus
      mainLibrary
      configManager
      grpc
      services {
        sprocket
        sqs
        tournaments
        hermes
        leaderboard
        friends
        presence
        teams
        groups
        auth
        devCharts
      }
      deploy
      notes
      createdAt
      updatedAt
    }
  }
`;
