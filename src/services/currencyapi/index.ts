import { createApiClient, HttpError } from "../common";

import type {
  CurrencyDescription,
  CurrenciesResponse,
  RatesResponse,
  FetchCurrenciesOptions,
  FetchRateParams,
  FetchHistoricalRateParams,
  FetchConversionRateParams,
} from "./types";
export type { CurrencyCode, CurrencyDescription } from "./types";

export class ApiError extends HttpError {
  constructor(message: string, status?: number) {
    super(status || 500, message);
    this.name = "ApiError";
  }
}

function getApiKey(): string {
  const key = import.meta.env?.VITE_CURRENCYAPI_KEY as string | undefined;
  if (!key || typeof key !== "string") {
    throw new Error(
      "Missing API key. Define VITE_CURRENCYAPI_KEY in .env.local"
    );
  }
  return key;
}

const currencyApiClient = createApiClient({
  baseUrl: "https://api.currencyapi.com/v3",
  apiKey: getApiKey(),
  apiKeyParam: "apikey",
});

function ensureOk(response: Response): void {
  if (!response.ok) {
    throw new ApiError(
      `API Error (${response.status}): ${response.statusText}`,
      response.status
    );
  }
}

export async function fetchCurrencies(
  options?: FetchCurrenciesOptions
): Promise<CurrencyDescription[]> {
  const res = await currencyApiClient.request("/currencies", {
    timeoutMs: options?.timeoutMs,
    signal: options?.signal,
  });

  ensureOk(res);

  const json = (await res.json()) as CurrenciesResponse;
  const list = Object.values(json.data ?? {});

  return list.sort((a, b) => a.code.localeCompare(b.code));
}

export async function fetchLatestRate(
  params: FetchRateParams
): Promise<number> {
  const res = await currencyApiClient.request("/latest", {
    params: {
      base_currency: params.from,
      currencies: params.to,
    },
    timeoutMs: params.timeoutMs,
    signal: params.signal,
  });

  ensureOk(res);

  const json = (await res.json()) as RatesResponse;
  const entry = json.data?.[params.to];

  if (!entry || typeof entry.value !== "number") {
    throw new Error("Invalid API response: missing rate");
  }

  return entry.value;
}

export async function fetchHistoricalRate(
  params: FetchHistoricalRateParams
): Promise<number> {
  const res = await currencyApiClient.request("/historical", {
    params: {
      base_currency: params.from,
      currencies: params.to,
      date: params.date,
    },
    timeoutMs: params.timeoutMs,
    signal: params.signal,
  });

  ensureOk(res);

  const json = (await res.json()) as RatesResponse;
  const entry = json.data?.[params.to];

  if (!entry || typeof entry.value !== "number") {
    throw new Error("Invalid API response: missing historical rate");
  }

  return entry.value;
}

export async function fetchConversionRate(
  params: FetchConversionRateParams
): Promise<number> {
  if (params.date) {
    return fetchHistoricalRate({
      from: params.from,
      to: params.to,
      date: params.date,
      timeoutMs: params.timeoutMs,
      signal: params.signal,
    });
  }

  return fetchLatestRate({
    from: params.from,
    to: params.to,
    timeoutMs: params.timeoutMs,
    signal: params.signal,
  });
}
