# Arq. Pablo Gabriel Ferrando — sitio web

Sitio estático bilingüe (español e inglés) para el portfolio y las consultas profesionales del arquitecto Pablo Gabriel Ferrando, en Santa Fe, Argentina.

Website in Spanish and English for architect Pablo Gabriel Ferrando's portfolio and professional inquiries in Santa Fe, Argentina.

**Matrícula profesional / Professional registration:** 07654 — Colegio de Arquitectos de la Provincia de Santa Fe (CAUPSF)

## Contenido / Contents

- [Español](#español)
- [English](#english)

---

## Español

### Sitio y contacto

- Sitio: [pabloferrando.com.ar](https://pabloferrando.com.ar/)
- Instagram: [@arqpablo.ferrando](https://www.instagram.com/arqpablo.ferrando/)
- Facebook: [perfil profesional](https://www.facebook.com/profile.php?id=61558146892451)
- Correo: arqpabloferrando@gmail.com

### Funcionalidades

- Interfaz ES/EN; los textos traducibles se mantienen en `data/content.json`.
- Portfolio con tarjetas, filtros por tipología y páginas de detalle de proyecto.
- Formulario de consulta y enlaces directos a WhatsApp y redes sociales.
- Carrusel de imágenes en el hero, con estilos propios.
- Secciones de inicio, estudio, servicios, contacto, privacidad y términos.
- Metadatos de búsqueda, datos estructurados, `robots.txt`, `sitemap.xml` y `llms.txt`.
- Transiciones y animaciones con soporte para `prefers-reduced-motion`.

### Estructura

```text
├── index.html              # Inicio
├── pages/                  # Páginas internas
├── css/
│   ├── styles.css          # Base compartida y reglas responsivas
│   ├── ferrando.css        # Identidad visual y componentes del sitio
│   └── hero-float.css      # Carrusel del hero
├── js/
│   ├── i18n.js             # Carga de traducciones y cambio de idioma
│   └── main.js             # Navegación, portfolio, formulario e interacciones
├── data/
│   ├── content.json        # Textos en español e inglés
│   └── projects.json       # Datos del portfolio
├── assets/
│   ├── images/             # Imágenes del sitio y del carrusel
│   ├── icons/              # Iconos
│   └── videos/             # Video de proceso
├── robots.txt
├── sitemap.xml
└── llms.txt
```

### Ejecutar localmente

Se necesita un servidor HTTP para que el navegador pueda cargar los archivos JSON; no abras el sitio directamente con `file://`.

**Python:**

```powershell
python -m http.server 8080
```

**Node.js (si tienes `serve` disponible vía npx):**

```powershell
npx serve .
```

Luego visita <http://localhost:8080> (o la URL que indique el servidor).

### Mantener y personalizar

| Contenido | Archivo o ubicación |
|---|---|
| Textos de interfaz ES/EN | `data/content.json` |
| Proyectos, tipologías e imágenes | `data/projects.json` y `assets/images/` |
| Número de WhatsApp | Enlaces `wa.me` de las páginas y el contenido de contacto |
| Estilos base y responsive | `css/styles.css` |
| Paleta, tipografía y componentes | `css/ferrando.css` |
| Carrusel del hero | `css/hero-float.css` y `assets/images/hero-float/` |

Mantén la estructura HTML y las clases CSS compartidas al agregar páginas. Evita estilos inline: los estilos de presentación deben vivir en las hojas CSS. Conserva el orden de carga actual de las hojas para que los estilos propios del sitio tengan prioridad sobre la base.

### Publicación

El proyecto no requiere compilación. Puede alojarse en GitHub Pages, Netlify, Vercel, Cloudflare Pages o en un hosting estático tradicional. Antes de publicar en otro dominio, actualiza las URL canónicas, `sitemap.xml` y los datos estructurados de las páginas.

### Derechos y atribuciones

El código y los contenidos visuales no tienen necesariamente los mismos titulares. Las fotografías, renders, videos, marcas y textos pertenecen a sus respectivos autores o titulares; solicita autorización antes de reutilizarlos fuera de este sitio.

---

## English

### Website and contact

- Website: [pabloferrando.com.ar](https://pabloferrando.com.ar/)
- Instagram: [@arqpablo.ferrando](https://www.instagram.com/arqpablo.ferrando/)
- Facebook: [professional profile](https://www.facebook.com/profile.php?id=61558146892451)
- Email: arqpabloferrando@gmail.com

### Features

- Spanish/English interface; translatable copy is maintained in `data/content.json`.
- Project portfolio with cards, typology filters, and individual project pages.
- Inquiry form and direct links to WhatsApp and social profiles.
- Hero image carousel with dedicated styles.
- Home, studio, services, contact, privacy, and terms pages.
- Search metadata, structured data, `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Transitions and animations that respect `prefers-reduced-motion`.

### Project structure

```text
├── index.html              # Home page
├── pages/                  # Internal pages
├── css/
│   ├── styles.css          # Shared base and responsive rules
│   ├── ferrando.css        # Site identity and components
│   └── hero-float.css      # Hero carousel
├── js/
│   ├── i18n.js             # Translation loading and language switching
│   └── main.js             # Navigation, portfolio, form, and interactions
├── data/
│   ├── content.json        # Spanish and English copy
│   └── projects.json       # Portfolio data
├── assets/
│   ├── images/             # Website and carousel images
│   ├── icons/              # Icons
│   └── videos/            # Process video
├── robots.txt
├── sitemap.xml
└── llms.txt
```

### Run locally

Use an HTTP server so the browser can fetch the JSON files; do not open the site directly with `file://`.

**Python:**

```powershell
python -m http.server 8080
```

**Node.js (if `serve` is available through npx):**

```powershell
npx serve .
```

Then visit <http://localhost:8080> (or the URL printed by the server).

### Maintenance and customization

| Content | File or location |
|---|---|
| Spanish/English interface copy | `data/content.json` |
| Projects, typologies, and images | `data/projects.json` and `assets/images/` |
| WhatsApp number | `wa.me` links in the pages and contact content |
| Base and responsive styles | `css/styles.css` |
| Palette, typography, and components | `css/ferrando.css` |
| Hero carousel | `css/hero-float.css` and `assets/images/hero-float/` |

Preserve the shared HTML structure and CSS classes when adding pages. Avoid inline styles; keep presentation rules in the stylesheets. Keep the existing stylesheet load order so the site-specific styles can override the base rules.

### Deployment

No build step is required. The site can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a traditional static host. When deploying to a different domain, update the canonical URLs, `sitemap.xml`, and structured data on the pages.

### Rights and attribution

Code and visual content may have different owners. Photographs, renders, videos, trademarks, and text belong to their respective authors or rights holders; obtain permission before reusing them outside this website.
