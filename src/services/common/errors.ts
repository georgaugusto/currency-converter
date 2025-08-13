export class HttpError extends Error {
  public readonly status: number;
  public readonly statusText: string;

  constructor(status: number, statusText: string, message?: string) {
    super(message || `HTTP ${status}: ${statusText}`);
    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
  }
}

export function ensureOk(response: Response): void {
  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }
}
