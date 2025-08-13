import { buildUrl } from "./url";
import { fetchWithTimeout } from "./fetch";

import type { ApiClientConfig, RequestOptions, FetchOptions } from "./types";

export function createApiClient(config: ApiClientConfig) {
  const { baseUrl, apiKey, apiKeyParam = "apikey" } = config;

  return {
    buildUrl: (
      path: string,
      params: Record<string, string | number | undefined> = {}
    ): string => {
      const paramsWithKey = {
        ...params,
        [apiKeyParam]: apiKey,
      };

      return buildUrl(baseUrl, path, paramsWithKey);
    },

    request: async (
      path: string,
      options: RequestOptions = {}
    ): Promise<Response> => {
      const { params = {}, ...requestOptions } = options;
      const url = buildUrl(baseUrl, path, {
        ...params,
        [apiKeyParam]: apiKey,
      });

      const fetchOptions: RequestInit & FetchOptions = {
        method: requestOptions.method,
        body: requestOptions.body,
        headers: requestOptions.headers,
        signal: requestOptions.signal,
        timeoutMs: requestOptions.timeoutMs,
      };

      return fetchWithTimeout(url, fetchOptions);
    },
  };
}
