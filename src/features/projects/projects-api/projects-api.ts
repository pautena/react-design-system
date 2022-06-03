import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient } from "graphql-request";
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import moment from "moment";
import { apiConfig } from "configs/api";
import { Project } from "app/graphql/api.types";

const client = new GraphQLClient(apiConfig.baseUrl);

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  keepUnusedDataFor: 0,
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({
        queryAliases: Resources,
        params: [
          userId,
          moment(start).format("YYYY-MM-DDTHH:mm:ss"),
          moment(end).format("YYYY-MM-DDTHH:mm:ss"),
        ],
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
