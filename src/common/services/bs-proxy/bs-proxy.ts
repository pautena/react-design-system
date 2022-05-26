import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import { Auth } from "aws-amplify";
import { Project } from "../../../features";

declare type BaseProxyRequest = {
  url: string;
  body?: string;
};

export class ProxyBrainRequest implements BaseProxyRequest {
  url: string;

  constructor(game: string, queryAlias: string, params: string[]) {
    const paramsString = params.length ? `"${params.join('" "')}" ` : "";
    this.url = encodeURI(`<% brain_request "${game}" "${queryAlias}" ${paramsString}%>`);
  }
}

declare type FetchArgs = {
  queryAlias?: string;
  queryAliases?: string[];
  params?: string[];
};

declare type Options = {
  baseUrl: string;
  prepareHeaders?: (headers: Headers, api: { getState: () => unknown }) => MaybePromise<Headers>;
};

export const proxyBaseQuery =
  ({
    baseUrl,
    prepareHeaders = (headers) => headers,
  }: Options): BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError, {}, {}> =>
  async ({ queryAlias, queryAliases = [], params = [] }, { getState }) => {
    const session = await Auth.currentSession();
    const project = (getState() as any).projects.selectedProject as Project;
    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
    });

    try {
      if (queryAlias) {
        const data = new ProxyBrainRequest(project.id, queryAlias, params);
        const response = await fetch(baseUrl, {
          method: "post",
          body: JSON.stringify(data),
          headers: await prepareHeaders(headers, { getState }),
        });
        return { data: response };
      } else {
        const response = await Promise.all(
          queryAliases.map((q: string) => {
            const data = new ProxyBrainRequest(project.id, q, params);
            return fetch(baseUrl, {
              method: "post",
              body: JSON.stringify(data),
              headers,
            }).then((r) => r.json());
          }),
        );
        return { data: response.map((r) => r.result).flat() };
      }
    } catch (error) {
      return {
        error: {
          status: "FETCH_ERROR",
          error: (error as Error).message,
        },
      };
    }
  };
