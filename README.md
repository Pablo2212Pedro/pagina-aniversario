# Página de aniversario en Next.js

Proyecto romántico de aniversario hecho con Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Lucide React y Vercel Analytics.

## Ejecutar

```bash
pnpm install
pnpm dev
```

Abrir en el navegador:

```txt
http://localhost:3000
```

## Nueva página de galería

La galería está en una página separada:

```txt
http://localhost:3000/galeria
```

Desde la página principal hay un botón **Abrir galería**.

## Cambiar fotos

Las fotos están en:

```txt
public/fotos
```

Puedes reemplazar los archivos `foto-5.svg` hasta `foto-12.svg` por tus fotos reales. Si usas JPG, cambia las rutas en:

```txt
components/photo-gallery.tsx
```

Ejemplo:

```tsx
{ src: '/fotos/foto-5.jpg', title: 'Una tarde contigo' }
```

## Cambiar fecha

Entra a:

```txt
components/love-counter.tsx
```

Cambia:

```ts
const FECHA_INICIO = '2024-01-01T00:00:00'
```


## Fotos de la galería

Las fotos deben estar dentro de:

```txt
public/fotos
```

Este proyecto ya está configurado para leer las imágenes:

```txt
img1.png, img2.jpg, img3.jpg ...
```

Si agregas más fotos, colócalas en `public/fotos` y luego agrega su ruta en `components/photo-gallery.tsx`.
