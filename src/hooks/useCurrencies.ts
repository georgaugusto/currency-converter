import { useEffect, useMemo, useRef, useState } from "react";

import { fetchCurrencies } from "@/services/currencyapi";

import {
  currenciesToSelectOptions,
  sortCurrenciesByRelevance,
} from "@/utils/currencyAdapters";

import type { CurrencyDescription } from "@/services/currencyapi/types";
import type { SelectOption } from "@/components/ui/index";

export interface UseCurrenciesOptions {
  enabled?: boolean;
  timeoutMs?: number;
}

export interface UseCurrenciesResult {
  data: CurrencyDescription[] | null;
  selectOptions: SelectOption[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: (options?: { force?: boolean }) => Promise<void>;
  status: "idle" | "loading" | "success" | "error";
}

let cachedCurrencies: CurrencyDescription[] | null = null;

export function useCurrencies(
  options?: UseCurrenciesOptions
): UseCurrenciesResult {
  const [data, setData] = useState<CurrencyDescription[] | null>(
    cachedCurrencies
  );
  const [error, setError] = useState<unknown>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >(cachedCurrencies ? "success" : "idle");

  const { enabled = true, timeoutMs } = options ?? {};
  const isLoading = status === "loading";
  const isError = status === "error";

  const doFetch = useMemo(
    () =>
      async ({ force = false }: { force?: boolean } = {}): Promise<void> => {
        if (!enabled) return;

        if (cachedCurrencies && !force) {
          setData(cachedCurrencies);
          setStatus("success");
          setError(null);
          return;
        }
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        try {
          setStatus("loading");
          setError(null);

          const list = await fetchCurrencies({
            timeoutMs,
            signal: controller.signal,
          });

          cachedCurrencies = list;

          setData(list);
          setStatus("success");
        } catch (err) {
          if (err instanceof Error && err.name === "AbortError") return;

          setError(err);
          setStatus("error");
        }
      },
    [enabled, timeoutMs]
  );

  useEffect(() => {
    if (!enabled) return;

    if (!cachedCurrencies) {
      void doFetch();
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [enabled, doFetch]);

  const selectOptions = useMemo(() => {
    if (!data) return [];

    const sorted = sortCurrenciesByRelevance(data);

    return currenciesToSelectOptions(sorted);
  }, [data]);

  return {
    data,
    selectOptions,
    isLoading,
    isError,
    error,
    refetch: doFetch,
    status,
  };
}
