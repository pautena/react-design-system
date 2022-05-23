export interface BaseProxyRequest {
  url: string;
  method: string;
  headers: { [key: string]: string };
  body?: string;
}

export class ProxyBrainRequest implements BaseProxyRequest {
  url: string;
  method = "GET";
  headers = { "Content-Type": "application/json" };

  constructor(game: string, queryAlias: string, params: string[] = []) {
    const paramsString = params.length ? `"${params.join('" "')}" ` : "";
    this.url = encodeURI(`<% brain_request "${game}" "${queryAlias}" ${paramsString}%>`);
  }
}
