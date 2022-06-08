/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
