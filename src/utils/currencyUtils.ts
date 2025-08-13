export function formatCurrency(amount: number, currencyCode: string): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits:
      currencyCode === "JPY" || currencyCode === "KRW" ? 0 : 6,
  };

  try {
    return new Intl.NumberFormat("pt-BR", options).format(amount);
  } catch {
    return `${currencyCode} ${amount.toFixed(2)}`;
  }
}

export function sanitizeAmountInput(value: string): string {
  const sanitized = value.replace(/[^0-9.,]/g, "");
  const withDot = sanitized.replace(",", ".");
  const parts = withDot.split(".");

  if (parts.length > 2) {
    return parts[0] + "." + parts.slice(1).join("");
  }

  return withDot;
}

export function parseAmount(value: string): number {
  const cleaned = sanitizeAmountInput(value);
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

export function isToday(dateString: string): boolean {
  if (!dateString) return false;

  const today = new Date();
  const todayString = today.toISOString().split("T")[0]; // YYYY-MM-DD

  return dateString === todayString;
}

export function normalizeDateForConversion(date: string | null): string | null {
  if (!date) return null;

  if (isToday(date)) {
    return null;
  }

  return date;
}
