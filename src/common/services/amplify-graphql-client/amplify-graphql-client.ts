import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { API, graphqlOperation } from "aws-amplify";


export const amplifyGraphqlBaseQuery =
  (): BaseQueryFn<string, unknown, FetchBaseQueryError, {}, {}> =>
  async (query, { getState }) => {
    try {
      console.log("graphql query: ", query);
      const data = await API.graphql({
        query,
        authMode: "AMAZON_COGNITO_USER_POOLS"
      });
      console.log("response data: ", data);
      return { data };
    } catch (error) {
      console.error('error fetching api: ',error);
      return {
        error: {
          status: "FETCH_ERROR",
          error: (error as Error).message,
        },
      };
    }
  };
