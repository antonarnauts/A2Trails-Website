export function getAssetPath(path: string) {
  // Remove leading slash from path if it exists to ensure it's relative to index.html
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the path as-is. Since we use HashRouter, the base URL is always the same 
  // relative to the index.html file, making relative paths robust for GitHub Pages.
  return cleanPath;
}
