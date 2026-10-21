# Arq. Pablo Gabriel Ferrando — Portfolio & Leads

Sitio web estático bilingüe (ES / EN) de portfolio y captura de leads para el arquitecto **Pablo Gabriel Ferrando** (Santa Fe, Argentina).

Matrícula profesional **07654** — Colegio de Arquitectos de la Provincia de Santa Fe (CAUPSF).

## Demo / redes

- Instagram: [arqpablo.ferrando](https://www.instagram.com/arqpablo.ferrando/)
- Facebook: [perfil profesional](https://www.facebook.com/profile.php?id=61558146892451)
- Email: arqpabloferrando@gmail.com

## Características

- Diseño corporativo inspirado en sitios institucionales (hero, ticker, cards, filtros)
- **Bilingüe ES/EN** con switch que actualiza todo el contenido desde JSON (sin recargas a medias)
- Portfolio con listado, filtros por tipología y detalle de proyecto
- Formulario de consulta orientado al rubro + botón / FAB de WhatsApp
- Carrusel flotante en el hero (imágenes sin fondo, CSS independiente)
- SEO: `robots.txt`, `sitemap.xml`, `llms.txt`, meta tags, Schema.org
- Páginas legales: Política de privacidad y Términos y condiciones
- Footer completo (navegación, legal, contacto, redes)

## Estructura

```
ferrando-site/
├── index.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── README.md
├── css/
│   ├── styles.css          # base del template
│   ├── ferrando.css        # overrides + footer + componentes
│   └── hero-float.css      # carrusel flotante del hero
├── js/
│   ├── i18n.js             # carga JSON + cambio de idioma
│   └── main.js             # loader, nav, reveal, form, filtros
├── data/
│   ├── content.json        # textos bilingües del sitio
│   └── projects.json       # proyectos del portfolio
├── assets/
│   ├── images/             # fotos de obras + hero-float/
│   └── icons/
└── pages/
    ├── projects.html
    ├── project.html
    ├── services.html
    ├── about.html
    ├── contact.html
    ├── privacy.html
    └── terms.html
```

## Cómo ejecutar en local

Es un sitio estático. Para que el `fetch` de los JSON funcione, hace falta un servidor HTTP (no abrir el `index.html` como `file://`).

```bash
# Opción rápida con Python
cd ferrando-site
python3 -m http.server 8080
# Abrir http://localhost:8080

# O con Node
npx serve .
```

## Personalización

| Qué | Dónde |
|-----|--------|
| Textos UI (ES/EN) | `data/content.json` |
| Proyectos e imágenes | `data/projects.json` + `assets/images/` |
| Número de WhatsApp | Buscar `5493420000000` en HTML y reemplazar |
| Estilos del footer | `css/ferrando.css` (bloque FOOTER) |
| Carrusel del hero | `css/hero-float.css` + `assets/images/hero-float/` |

## Despliegue

Compatible con cualquier hosting estático:

- GitHub Pages
- Netlify / Vercel / Cloudflare Pages
- cPanel / hosting tradicional

Actualizar `canonical`, `sitemap.xml` y el Schema del home con el dominio final.

### GitHub Pages

1. Subir este repositorio a GitHub.
2. Settings → Pages → Source: branch `main` (o `gh-pages`), carpeta `/` (raíz del repo si el contenido es la raíz, o `/ferrando-site` si está en subcarpeta).
3. El sitio quedará en `https://<usuario>.github.io/<repo>/`.

## Créditos

Portfolio profesional — Arq. Pablo Gabriel Ferrando.  
Desarrollo del sitio: estructura estática, i18n y componentes propios del proyecto.

## Licencia

Código del sitio: uso libre para el titular del portfolio.  
Contenidos (textos, fotos, renders): derechos del Arq. Pablo Gabriel Ferrando u otros titulares indicados. No reutilizar sin autorización.
