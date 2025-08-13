import { Controller, useFormContext } from "react-hook-form";
import { IconCalendarEvent } from "@tabler/icons-react";

import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";

import { DateInput } from "@/components/ui";

import { type CurrencyConverterFormData } from "@/schemas/currency-converter";

type ConversionVM = ReturnType<typeof useCurrencyConversion>;

export function DateField({ conversion }: { conversion: ConversionVM }) {
  const { control, clearErrors } = useFormContext<CurrencyConverterFormData>();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors("date");
    conversion.reset();

    return event.target.value;
  };

  return (
    <Controller
      name="date"
      control={control}
      render={({ field, fieldState }) => (
        <DateInput
          label="Date"
          leftIcon={<IconCalendarEvent />}
          variant="default"
          size="lg"
          helperText={
            fieldState.error?.message ||
            "Historical data available from 01/01/1999"
          }
          value={field.value}
          min="1999-01-01"
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            const value = handleDateChange(e);
            field.onChange(value);
          }}
          aria-invalid={!!fieldState.error}
          aria-describedby={fieldState.error ? "date-error" : undefined}
        />
      )}
    />
  );
}
