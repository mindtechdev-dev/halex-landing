# HALEX — Landing

Sitio estático hecho con Astro.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Subir a Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: **Add New → Project** → importa el repo.
3. Vercel detecta Astro automáticamente:
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**.

No hay variables de entorno ni configuración adicional.

## Estructura

```
src/pages/index.astro   la página
src/styles/styles.css   tokens y estilos del design system
public/page.css         estilos de la página
public/app.jsx          componentes de la landing
public/assets/          logo, fotos de servicios y galería
public/assets/trabajos/ fotos y videos de obra
```

## Editar contenido

- **Teléfono de WhatsApp**: en `public/app.jsx`, la constante `PHONE` (formato `56912345678`).
- **Textos y servicios**: en `public/app.jsx`, cada sección es una función (`Servicios`, `PorQue`, `Proceso`, etc.).
- **Fotos**: reemplaza los archivos en `public/assets/` manteniendo el mismo nombre.
