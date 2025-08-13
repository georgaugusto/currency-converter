import { Controller, useFormContext } from "react-hook-form";
import { IconCurrencyDollar, IconArrowsLeftRight } from "@tabler/icons-react";

import { useCurrencies } from "@/hooks/useCurrencies";
import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";

import { Select } from "@/components/ui";

import { type CurrencyConverterFormData } from "@/schemas/currency-converter";
import { parseAmount } from "@/utils/currencyUtils";
import { InputContainer, InputGrid, SwapButton } from "./styles";

type CurrenciesVM = ReturnType<typeof useCurrencies>;
type ConversionVM = ReturnType<typeof useCurrencyConversion>;

export function CurrencyFields({
  currencies,
  conversion,
}: {
  currencies: CurrenciesVM;
  conversion: ConversionVM;
}) {
  const { control, getValues, setValue, clearErrors } =
    useFormContext<CurrencyConverterFormData>();
  const {
    selectOptions,
    isLoading: isLoadingCurrencies,
    isError: isErrorCurrencies,
  } = currencies;

  const fromErrorId = "fromCurrency-error";
  const toErrorId = "toCurrency-error";

  const handleFromCurrencyChange = (value: string) => {
    clearErrors("fromCurrency");
    conversion.reset();

    return value;
  };

  const handleToCurrencyChange = (value: string) => {
    clearErrors("toCurrency");
    conversion.reset();

    return value;
  };

  const handleSwapCurrencies = () => {
    const from = getValues("fromCurrency");
    const to = getValues("toCurrency");

    setValue("fromCurrency", to, { shouldDirty: true });
    setValue("toCurrency", from, { shouldDirty: true });
    clearErrors(["fromCurrency", "toCurrency"]);

    if (conversion.result && conversion.rate) {
      const amount = getValues("amount");
      const numAmount = parseAmount(amount || "0");

      if (numAmount > 0) {
        conversion.simulateSwap({
          from: to,
          to: from,
          amount: numAmount,
          date: getValues("date") || null,
        });
      } else {
        conversion.reset();
      }
    }
  };

  return (
    <InputGrid>
      <InputContainer>
        <Controller
          name="fromCurrency"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              label="From*"
              options={selectOptions}
              value={field.value}
              onChange={(e) => {
                const value = handleFromCurrencyChange(e.target.value);
                field.onChange(value);
              }}
              leftIcon={<IconCurrencyDollar size={18} />}
              placeholder="Select source currency"
              state={
                fieldState.error || isErrorCurrencies ? "error" : "default"
              }
              size="lg"
              fullWidth
              loading={isLoadingCurrencies}
              helperText={
                fieldState.error?.message ||
                (isErrorCurrencies ? "Error loading currencies" : undefined)
              }
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? fromErrorId : undefined}
            />
          )}
        />
      </InputContainer>

      <SwapButton
        type="button"
        onClick={handleSwapCurrencies}
        title="Swap currencies"
        aria-label="Swap currencies"
      >
        <IconArrowsLeftRight size={20} />
      </SwapButton>

      <InputContainer>
        <Controller
          name="toCurrency"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              label="To*"
              options={selectOptions}
              value={field.value}
              onChange={(e) => {
                const value = handleToCurrencyChange(e.target.value);
                field.onChange(value);
              }}
              leftIcon={<IconCurrencyDollar size={18} />}
              placeholder="Select target currency"
              state={
                fieldState.error || isErrorCurrencies ? "error" : "default"
              }
              size="lg"
              fullWidth
              loading={isLoadingCurrencies}
              helperText={
                fieldState.error?.message ||
                (isErrorCurrencies ? "Error loading currencies" : undefined)
              }
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? toErrorId : undefined}
            />
          )}
        />
      </InputContainer>
    </InputGrid>
  );
}
