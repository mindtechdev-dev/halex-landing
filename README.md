# HALEX — Landing (Astro)

## Correr en local
```bash
npm install
npm run dev
```

## Subir a Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: **New Project** → importa el repo.
3. Vercel detecta Astro solo. Framework Preset: **Astro**. Build: `npm run build`. Output: `dist`.
4. Deploy.

## Estructura
- `src/pages/index.astro` — la landing completa.
- `src/styles/` — tokens y estilos globales del design system.
- `public/assets/` — fotos, logo y videos de obra.
