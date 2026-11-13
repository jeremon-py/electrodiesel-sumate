/** Ruta a un archivo de /public respetando el "base" (necesario en GitHub Pages). */
export const asset = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/?$/, '/') + path.replace(/^\//, '');
