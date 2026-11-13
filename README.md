# Electro Diesel · Sumate al equipo

Landing de búsquedas laborales hecha con **Astro** + **Tailwind CSS**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Estructura

- `src/pages/index.astro` – arma la página.
- `src/components/` – Header, Hero, WhySection, Vacancies, JobModal, ApplyForm, Footer.
- `src/data/vacantes.ts` – vacantes, áreas y ciudades (en producción vienen del backoffice).
- `src/data/why.ts` – textos y slides de "¿Por qué Electro Diesel?".
- `src/styles/global.css` – tokens de marca (`@theme`) y componentes.
- `public/assets/` – logo e imágenes.

### Slides de "¿Por qué Electro Diesel?"

Cada slide usa **dos imágenes independientes**, pensadas para subirse desde un backoffice:

| Campo     | Qué es |
|-----------|--------|
| `fondo`   | Foto completa (JPG/WebP, ideal ≥ 1000 px). El front la recorta en el círculo. |
| `foco`    | Opcional. Qué parte del fondo se ve (`object-position`, ej. `'50% 50%'`). |
| `persona` | Recorte con fondo transparente (PNG/WebP), proporción ~720×1018, apoyado abajo. |
| `alt`     | Descripción de la persona. |

El arco rojo es un SVG fijo en el código.

## Deploy

Cada push a `main` publica en GitHub Pages mediante `.github/workflows/deploy.yml`.
