import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";

type QueryArgs = {
  query: string;
  input?: object | void;
  variables?: object | void;
  authMode?: keyof typeof GRAPHQL_AUTH_MODE;
  getDataFromResponse?: (data: any) => any;
};

export const createQuery = <T extends object | void, P extends object | void>({
  query,
  input,
  variables,
  authMode,
  getDataFromResponse,
}: {
  query: string;
  input?: T;
  variables?: P;
  authMode?: keyof typeof GRAPHQL_AUTH_MODE;
  getDataFromResponse?: (data: any) => any;
}): QueryArgs => {
  return { query, input, variables, authMode, getDataFromResponse };
};

export const amplifyGraphqlBaseQuery =
  (): BaseQueryFn<QueryArgs, unknown, FetchBaseQueryError, {}, {}> =>
  async ({
    query,
    input = {},
    variables = {},
    authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    getDataFromResponse = (data: any) => data,
  }) => {
    try {
      const data = await API.graphql({
        query,
        variables: {
          ...variables,
          input,
        },
        authMode,
      });
      return { data: getDataFromResponse(data) };
    } catch (error) {
      console.error("error fetching api: ", error);
      return {
        error: {
          status: "FETCH_ERROR",
          error: (error as Error).message,
        },
      };
    }
  };
