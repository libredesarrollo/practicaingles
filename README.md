# PracticAIngles - Landing Page

Esta es la landing page oficial de **PracticAIngles**, una aplicación móvil gratuita para aprender inglés y español usando el poder de la Inteligencia Artificial.

## Características de la Landing Page
- **Diseño Moderno & Gamificado**: Implementado siguiendo la paleta de colores oficial de la app (`#7B24A3`, `#D8B4FE`).
- **Responsive & Rápida**: Construida con **Vue 3** y estilizada usando **Tailwind CSS**.
- **Animaciones fluidas**: Carrusel de imágenes CSS infinito ("Marquee") y botones con interactividad de elevación estilo juego.
- **Optimizada para SEO (Search Engine Optimization)**:
  - Metaetiquetas ricas en palabras clave para visibilidad en buscadores.
  - Implementación de Open Graph y Twitter Cards permitiendo vistas previas perfectas al compartir enlaces en redes sociales.
  - Atributos `alt` en imágenes generadas a partir de nombres de archivo puramente descriptivos (`aprender-ingles-ia-app-principal.png` etc.)
- **Iconografía Unificada**: Mismo logo (adaptado a favicons) e identidades visuales que la versión móvil de Android.

## Tecnologías

- [Vue 3](https://vuejs.org/) (Vite Template)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Font [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts)

## Instalación y Desarrollo Local

1. Asegúrate de tener `Node.js` (u otro gestor de paquetes de JS como `npm`) instalado.
2. Clona el repositorio y sitúate en la raíz del proyecto web.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo en caliente usando:
   ```bash
   npm run dev
   ```
5. Abre el navegador web usando la dirección proporcionada por la consola (usualmente `http://localhost:5173`).

## Compilación para Producción

Para compilar el código de esta Single Page Application de Vue puro logrando archivos estáticos minificados:
```bash
npm run build
```
Esto generará una carpeta `dist/` en tu proyecto lista para ser desplegada en un servidor (Vercel, Netlify, Github Pages... etc).
