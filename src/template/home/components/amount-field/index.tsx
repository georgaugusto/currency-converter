import { useFormContext, Controller } from "react-hook-form";

import { IconCurrencyDollar } from "@tabler/icons-react";

import { CurrencyInput } from "@/components/ui";
import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";

import type { CurrencyConverterFormData } from "@/schemas";
import { InputContainer } from "./styles";

type ConversionVM = ReturnType<typeof useCurrencyConversion>;

export function AmountField({ conversion }: { conversion: ConversionVM }) {
  const { control, setValue, clearErrors } =
    useFormContext<CurrencyConverterFormData>();

  const handleValueChange = (values: { value: string }) => {
    setValue("amount", values.value, {
      shouldDirty: true,
    });
    clearErrors("amount");

    conversion.reset();
  };

  return (
    <InputContainer>
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <CurrencyInput
            label="Amount to Convert*"
            value={field.value}
            onValueChange={handleValueChange}
            leftIcon={<IconCurrencyDollar size={18} />}
            errorMessage={fieldState.error?.message}
            size="lg"
            fullWidth
            aria-invalid={!!fieldState.error}
            aria-describedby={fieldState.error ? "amount-error" : undefined}
          />
        )}
      />
    </InputContainer>
  );
}
