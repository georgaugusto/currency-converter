import { type useCurrencyConversion } from "@/hooks/useCurrencyConversion";

export type ConversionVM = ReturnType<typeof useCurrencyConversion>;
export interface ResultPanelProps {
  conversion: ConversionVM;
}
export interface ConversionState {
  isLoading: boolean;
  hasError: boolean;
  hasResult: boolean;
  isEmpty: boolean;
}
export interface StyledComponentProps {
  variant?: "success" | "error" | "loading" | "empty";
}
export interface ErrorDisplayProps {
  error: Error | string | null;
}
export interface FormattedConversionData {
  result: string | null;
  amount: string | null;
  rate: string | null;
}
export interface A11yProps {
  role?: string;
  "aria-live"?: "polite" | "assertive" | "off";
  "aria-hidden"?: boolean;
}
export type ConversionStatus = "idle" | "loading" | "success" | "error";
