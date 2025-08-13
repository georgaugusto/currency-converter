import { memo, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { IconRefresh } from "@tabler/icons-react";

import { type ResultPanelProps, type ConversionState } from "./types";
import { type CurrencyConverterFormData } from "@/schemas/currency-converter";
import { formatCurrency, parseAmount } from "@/utils/currencyUtils";
import {
  ResultContainer,
  ResultAmount,
  ResultLabel,
  ConversionDetail,
  LoadingContainer,
  ErrorContainer,
  EmptyState,
  RateDetail,
} from "./styles";

export const ResultPanel = memo<ResultPanelProps>(({ conversion }) => {
  const { watch } = useFormContext<CurrencyConverterFormData>();

  const { result, rate, isConverting, error } = conversion;

  const toCurrency = watch("toCurrency") || "";
  const fromCurrency = watch("fromCurrency") || "";
  const amount = watch("amount") || "";

  const numAmount = useMemo(() => parseAmount(amount), [amount]);

  const formattedResult = useMemo(() => {
    return result ? formatCurrency(result, toCurrency) : null;
  }, [result, toCurrency]);

  const formattedAmount = useMemo(() => {
    return numAmount > 0 ? formatCurrency(numAmount, fromCurrency) : null;
  }, [numAmount, fromCurrency]);

  const formattedRate = useMemo(() => {
    return rate ? rate.toFixed(6) : null;
  }, [rate]);

  const state: ConversionState = useMemo(
    () => ({
      isLoading: isConverting,
      hasError: Boolean(error),
      hasResult: Boolean(result && !isConverting && !error),
      isEmpty: !result && !isConverting && !error,
    }),
    [result, isConverting, error]
  );

  return (
    <ResultContainer role="status" aria-live="polite">
      <ResultLabel>Conversion Result</ResultLabel>

      {state.isLoading && (
        <LoadingContainer>
          <IconRefresh size={24} aria-hidden="true" />
          <span>Converting via API...</span>
        </LoadingContainer>
      )}

      {state.hasError && (
        <ErrorContainer role="alert">
          Conversion error, try again!
        </ErrorContainer>
      )}

      {state.hasResult && (
        <>
          <ResultAmount>{formattedResult}</ResultAmount>

          {formattedAmount && (
            <ConversionDetail>
              {formattedAmount} = {formattedResult}
            </ConversionDetail>
          )}

          {formattedRate && (
            <RateDetail>
              Rate: 1 {fromCurrency} = {formattedRate} {toCurrency}
            </RateDetail>
          )}
        </>
      )}

      {state.isEmpty && (
        <EmptyState>Click "Convert" to see the API result</EmptyState>
      )}
    </ResultContainer>
  );
});

ResultPanel.displayName = "ResultPanel";
