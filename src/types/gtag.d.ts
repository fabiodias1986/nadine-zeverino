interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: Record<string, unknown>
  ) => void
  dataLayer: Array<{
    event?: string
    [key: string]: unknown
  }>
}