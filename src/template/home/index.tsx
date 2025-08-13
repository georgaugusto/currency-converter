import { useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { IconExchange } from "@tabler/icons-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrencies } from "@/hooks/useCurrencies";
import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import {
  AmountField,
  CurrencyFields,
  DateField,
  ResultPanel,
  SubmitButton,
} from "./components";

import { parseAmount, normalizeDateForConversion } from "@/utils/currencyUtils";
import {
  createCurrencyConverterSchema,
  type CurrencyConverterFormData,
  defaultFormValues,
} from "@/schemas";

import { MainContainer } from "./styles";

export function Home() {
  const currencies = useCurrencies();
  const conversion = useCurrencyConversion({ timeoutMs: 10000 });

  const schema = useMemo(
    () => createCurrencyConverterSchema(currencies.data ?? undefined),
    [currencies.data]
  );

  const methods = useForm<CurrencyConverterFormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultFormValues,
    mode: "onSubmit",
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const amount = parseAmount(data.amount);
    if (amount <= 0) return;

    const normalizedDate = normalizeDateForConversion(data.date || null);

    await conversion.convert({
      from: data.fromCurrency,
      to: data.toCurrency,
      amount,
      date: normalizedDate,
    });
  });

  return (
    <MainContainer>
      <FormProvider {...methods}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconExchange size={24} />
              Currency Converter
            </CardTitle>
            <CardDescription>
              Convert between different currencies with updated rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} noValidate>
              <AmountField conversion={conversion} />
              <CurrencyFields currencies={currencies} conversion={conversion} />
              <DateField conversion={conversion} />
              <SubmitButton isConverting={conversion.isConverting} />
              <ResultPanel conversion={conversion} />
            </form>
          </CardContent>
        </Card>
      </FormProvider>
    </MainContainer>
  );
}
