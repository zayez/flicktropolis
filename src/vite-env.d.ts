declare module "msw/browser"

interface ImportMetaEnv {
  readonly VITE_MOCK_ENABLED: string
  readonly VITE_TMDB_TOKEN: string
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
