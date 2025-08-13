export type CurrencyCode = string;

export interface CurrencyDescription {
  code: CurrencyCode;
  name: string;
  name_plural: string;
  symbol: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  type: "fiat" | "crypto";
  countries: string[];
  icon_name?: string;
}

export interface CurrenciesResponse {
  data: Record<CurrencyCode, CurrencyDescription>;
}

export interface RateEntry {
  code: CurrencyCode;
  value: number;
}

export interface RatesResponse {
  data: Record<CurrencyCode, RateEntry>;
}

export interface FetchCurrenciesOptions {
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface FetchRateParams {
  from: CurrencyCode;
  to: CurrencyCode;
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface FetchHistoricalRateParams {
  from: CurrencyCode;
  to: CurrencyCode;
  date: string;
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface FetchConversionRateParams {
  from: CurrencyCode;
  to: CurrencyCode;
  date?: string | null;
  timeoutMs?: number;
  signal?: AbortSignal;
}
