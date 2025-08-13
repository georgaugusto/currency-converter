import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui";

import type { CurrencyConverterFormData } from "@/schemas";
import { SubmitButtonContainer } from "./styles";

export function SubmitButton({ isConverting }: { isConverting: boolean }) {
  useFormContext<CurrencyConverterFormData>();

  return (
    <SubmitButtonContainer>
      <Button
        fullWidth
        variant="primary"
        size="lg"
        loading={isConverting}
        type="submit"
        disabled={isConverting}
      >
        Convert
      </Button>
    </SubmitButtonContainer>
  );
}
