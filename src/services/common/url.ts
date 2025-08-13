export function buildUrl(
  baseUrl: string,
  path: string,
  params: Record<string, string | number | undefined> = {}
): string {
  const url = new URL(`${baseUrl}${path}`);
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  url.search = searchParams.toString();
  return url.toString();
}
