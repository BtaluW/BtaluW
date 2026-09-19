// Mirrors `basePath` in next.config.mjs. Only needed for plain <a> links to
// static files in public/ — next/link already handles basePath for routes.
export const BASE_PATH = '/BtaluW'

export function asset(path: string) {
  return `${BASE_PATH}/${path.replace(/^\//, '')}`
}
