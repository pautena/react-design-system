import { createApi } from "@reduxjs/toolkit/query/react";
import {
  createProject,
  CreateProjectInput,
  listProjects,
  Project,
  ServicesInput,
} from "app/base-api";
import { amplifyGraphqlBaseQuery, createQuery } from "common/services/amplify-graphql-client";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  keepUnusedDataFor: 0,
  baseQuery: amplifyGraphqlBaseQuery(),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () =>
        createQuery({
          query: listProjects,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }),
    }),
    addProject: builder.mutation<void, Project>({
      query: (project) =>
        createQuery<CreateProjectInput, void>({
          query: createProject,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
          input: {
            id: project.id,
            title: project.title,
            codeName: project.codeName,
            studio: project.studio,
            status: project.status,
            users: project.users,
            repository: project.repository,
            configRepo: project.configRepo,
            repoStatus: project.repoStatus,
            mainLibrary: project.mainLibrary,
            configManager: project.configManager,
            grpc: project.grpc,
            services: {
              sprocket: project.services.sprocket,
              sqs: project.services.sqs,
              tournaments: project.services.tournaments,
              hermes: project.services.hermes,
              leaderboard: project.services.leaderboard,
              friends: project.services.friends,
              presence: project.services.presence,
              teams: project.services.teams,
              groups: project.services.groups,
              auth: project.services.auth,
              devCharts: project.services.devCharts,
            },
            deploy: project.deploy,
            notes: project.notes,
          },
        }),
    }),
  }),
});

export const { useGetProjectsQuery, useAddProjectMutation } = projectsApi;
