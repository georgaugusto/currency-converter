/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CURRENCYAPI_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
