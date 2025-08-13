import { useCallback, useRef, useState } from "react";

import { fetchConversionRate } from "@/services/currencyapi";

import type { CurrencyCode } from "@/services/currencyapi";

function computeConversion(amount: number, rate: number): number {
  const result = amount * rate;

  return Math.round(result * 100) / 100;
}

export interface UseCurrencyConversionParams {
  timeoutMs?: number;
}

export interface ConvertArgs {
  from: CurrencyCode;
  to: CurrencyCode;
  amount: number;
  date?: string | null;
}

export interface UseCurrencyConversionResult {
  isConverting: boolean;
  error: unknown;
  result: number | null;
  rate: number | null;
  convert: (args: ConvertArgs) => Promise<void>;
  reset: () => void;
  simulateSwap: (args: ConvertArgs) => void;
}

export function useCurrencyConversion(
  params?: UseCurrencyConversionParams
): UseCurrencyConversionResult {
  const controllerRef = useRef<AbortController | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [result, setResult] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  const timeoutMs = params?.timeoutMs;

  const convert = useCallback(
    async ({ from, to, amount, date }: ConvertArgs) => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        setIsConverting(true);
        setError(null);
        setResult(null);
        setRate(null);

        if (from === to) {
          setRate(1);
          setResult(computeConversion(amount, 1));
          return;
        }

        const r = await fetchConversionRate({
          from,
          to,
          date: date ?? undefined,
          timeoutMs,
          signal: controller.signal,
        });

        setRate(r);
        setResult(computeConversion(amount, r));
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(err);
      } finally {
        setIsConverting(false);
      }
    },
    [timeoutMs]
  );

  const reset = useCallback(() => {
    controllerRef.current?.abort();
    setIsConverting(false);
    setError(null);
    setResult(null);
    setRate(null);
  }, []);

  const simulateSwap = useCallback(
    ({ amount }: Pick<ConvertArgs, "amount">) => {
      if (!rate || !result) return;

      const inverseRate = 1 / rate;
      const newResult = computeConversion(amount, inverseRate);

      setError(null);
      setRate(inverseRate);
      setResult(newResult);
    },
    [rate, result]
  );

  return { isConverting, error, result, rate, convert, reset, simulateSwap };
}
