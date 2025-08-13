import type { FetchOptions } from "./types";

export async function fetchWithTimeout(
  url: string,
  options: RequestInit & FetchOptions = {}
): Promise<Response> {
  const {
    timeoutMs = 10000,
    signal: externalSignal,
    headers,
    ...init
  } = options;

  const controller = new AbortController();

  if (externalSignal) {
    if (externalSignal.aborted) {
      controller.abort((externalSignal as any)?.reason);
    } else {
      externalSignal.addEventListener("abort", () => {
        controller.abort((externalSignal as any)?.reason);
      });
    }
  }

  const timeoutId = setTimeout(() => {
    controller.abort(new Error("Request timeout"));
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      signal: controller.signal,
    });

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}
