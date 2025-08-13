import { z } from "zod";

import type { CurrencyDescription } from "@/services/currencyapi/types";

const CURRENCY_CODE_REGEX = /^[A-Z]{3}$/;

export function createCurrencyConverterSchema(
  availableCurrencies?: CurrencyDescription[]
) {
  const currencyCodes = availableCurrencies?.map((c) => c.code) || [];
  const hasAvailableCurrencies = currencyCodes.length > 0;

  return z
    .object({
      amount: z
        .string()
        .min(1, "*Value is required")
        .regex(
          /^\d+(?:\.\d{1,2})?$/,
          "Enter a valid numeric value (up to 2 decimal places)"
        )
        .refine((val) => parseFloat(val) > 0, "Value must be greater than zero")
        .refine((val) => {
          const [, decimals] = val.split(".");
          return !decimals || decimals.length <= 2;
        }, "Use at most 2 decimal places")
        .refine((val) => parseFloat(val) <= 999999999, "Value too high"),
      fromCurrency: z
        .string()
        .min(1, "Source currency is required")
        .regex(
          CURRENCY_CODE_REGEX,
          "Invalid currency code (must have 3 letters)"
        )
        .transform((val) => val.toUpperCase())
        .refine(
          (val) => !hasAvailableCurrencies || currencyCodes.includes(val),
          "Source currency not available"
        ),
      toCurrency: z
        .string()
        .min(1, "Target currency is required")
        .regex(
          CURRENCY_CODE_REGEX,
          "Invalid currency code (must have 3 letters)"
        )
        .transform((val) => val.toUpperCase())
        .refine(
          (val) => !hasAvailableCurrencies || currencyCodes.includes(val),
          "Target currency not available"
        ),
      date: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => {
          if (!val || val === "") return true;
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

          if (!dateRegex.test(val)) return false;
          const date = new Date(val);
          const today = new Date();

          return (
            date instanceof Date && !isNaN(date.getTime()) && date <= today
          );
        }, "Date must be valid and cannot be in the future"),
    })
    .refine((data) => data.fromCurrency !== data.toCurrency, {
      message: "Source and target currencies must be different",
      path: ["toCurrency"],
    });
}

export const currencyConverterSchema = createCurrencyConverterSchema();

export type CurrencyConverterFormData = z.infer<typeof currencyConverterSchema>;

export const partialCurrencyConverterSchema = currencyConverterSchema.partial();

export const defaultFormValues: CurrencyConverterFormData = {
  amount: "",
  fromCurrency: "USD",
  toCurrency: "BRL",
  date: "",
};

export const validateField = (
  field: keyof CurrencyConverterFormData,
  value: any
) => {
  try {
    const fieldSchema = currencyConverterSchema.shape[field];
    if (field === "date") {
      return currencyConverterSchema.partial().parse({ [field]: value });
    }
    return fieldSchema.parse(value);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0]?.message || "Invalid value";
    }
    return "Validation error";
  }
};

export const errorMessages = {
  amount: {
    required: "*Value is required",
    invalid: "Enter a valid numeric value",
    tooLow: "Value must be greater than zero",
    tooHigh: "Value too high (maximum: 999,999,999)",
  },
  currency: {
    required: "Select a currency",
    invalid: "Invalid currency",
    same: "Source and target currencies must be different",
  },
  date: {
    invalid: "Invalid date",
    future: "Date cannot be in the future",
    format: "Use DD/MM/YYYY format",
  },
} as const;
