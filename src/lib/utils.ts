export function getAssetPath(path: string) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's built-in BASE_URL which is set via the 'base' config in vite.config.ts
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Ensure baseUrl ends with a slash and cleanPath does not start with one
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${cleanPath}`;
}
