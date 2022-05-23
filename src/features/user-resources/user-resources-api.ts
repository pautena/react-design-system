import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BrainConfig } from "../../configs/brain";
import { Auth } from "aws-amplify";
import { ProxyBrainRequest } from "../../services/bs-proxy/bs-proxy.model";
import { Project } from "../projects";
import moment from "moment";
import { ResourceEntry, Resources } from "./user-resources.types";

interface GetUserResourceArgs {
  userId: string;
  start: string;
  end: string;
}

export const userResourcesApi = createApi({
  reducerPath: "userResourcesApi",
  baseQuery: async ({ queryAlias, queryAliases, params }, { getState }) => {
    const session = await Auth.currentSession();
    const project = (getState() as any).projects.selectedProject as Project;
    const headers = {
      Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      if (queryAlias) {
        const data = new ProxyBrainRequest(project.id, queryAlias, params);
        const response = await fetch(BrainConfig.baseUrl, {
          method: "post",
          body: JSON.stringify(data),
          headers,
        });
        return { data: response };
      } else {
        const response = await Promise.all(
          queryAliases.map((q: string) => {
            const data = new ProxyBrainRequest(project.id, q, params);
            return fetch(BrainConfig.baseUrl, {
              method: "post",
              body: JSON.stringify(data),
              headers,
            }).then((r) => r.json());
          }),
        );
        return { data: response.map((r) => r.result).flat() };
      }
    } catch (error) {
      return { error };
    }
  },
  endpoints: (builder) => ({
    getUserResources: builder.query<ResourceEntry[], GetUserResourceArgs>({
      query: ({ userId, start, end }) => ({
        queryAliases: Resources,
        params: [
          userId,
          moment(start).format("YYYY-MM-DDTHH:mm:ss"),
          moment(end).format("YYYY-MM-DDTHH:mm:ss"),
        ],
      }),
      transformResponse: (response: string[][]) =>
        response.map(([date, resource, amount, increment, category, subcategory]) => ({
          date,
          resource,
          amount: parseInt(amount),
          increment: parseInt(increment),
          category,
          subcategory,
        })),
    }),
  }),
});

export const { useLazyGetUserResourcesQuery } = userResourcesApi;
