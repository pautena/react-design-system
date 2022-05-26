import { createApi } from "@reduxjs/toolkit/query/react";
import moment from "moment";
import { ResourceEntry, Resources } from "../user-resources.types";
import { proxyBaseQuery } from "../../../common/services/bs-proxy/bs-proxy";
import { BrainConfig } from "../../../configs/brain";

interface GetUserResourceArgs {
  userId: string;
  start: string;
  end: string;
}

export const userResourcesApi = createApi({
  reducerPath: "userResourcesApi",
  keepUnusedDataFor: 0,
  baseQuery: proxyBaseQuery({
    baseUrl: BrainConfig.baseUrl,
  }),
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
