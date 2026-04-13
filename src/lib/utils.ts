export function getAssetPath(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
