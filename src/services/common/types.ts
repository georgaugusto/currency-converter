export interface FetchOptions {
  timeoutMs?: number;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

export interface ApiClientConfig {
  baseUrl: string;
  apiKey: string;
  apiKeyParam?: string;
}

export interface RequestOptions {
  params?: Record<string, string | number | undefined>;
  timeoutMs?: number;
  signal?: AbortSignal;
  method?: string;
  body?: BodyInit | null;
  headers?: Record<string, string>;
}
