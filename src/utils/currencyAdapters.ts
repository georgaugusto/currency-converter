import type { CurrencyDescription } from "@/services/currencyapi/types";

export function sortCurrenciesByRelevance(
  apiCurrencies: CurrencyDescription[]
): CurrencyDescription[] {
  const fiatCurrencies = apiCurrencies.filter(
    (currency) => currency.type === "fiat"
  );
  const cryptoCurrencies = apiCurrencies.filter(
    (currency) => currency.type === "crypto"
  );

  const sortedFiat = fiatCurrencies.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedCrypto = cryptoCurrencies.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return [...sortedFiat, ...sortedCrypto];
}

export function findCurrencyByCode(
  currencies: CurrencyDescription[],
  code: string
): CurrencyDescription | undefined {
  return currencies.find(
    (currency) => currency.code.toUpperCase() === code.toUpperCase()
  );
}

export function currencyToSelectOption(currency: CurrencyDescription) {
  return {
    label: `${currency.code} - ${currency.name}`,
    value: currency.code,
    icon: currency.symbol,
    description: currency.name,
  };
}

export function currenciesToSelectOptions(currencies: CurrencyDescription[]) {
  return currencies.map(currencyToSelectOption);
}
