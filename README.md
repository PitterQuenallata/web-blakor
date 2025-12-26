# Blakor - Sitio Web Corporativo

Sitio web moderno desarrollado con Astro, React y Tailwind CSS. Incluye animaciones con Three.js, componentes interactivos y optimizaciones de rendimiento.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x
- **UI Library**: React 19.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Instalación

### Requisitos Previos
- Node.js 18+ o 20+
- pnpm 8+

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/web-blakor.git
cd web-blakor
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo**
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

## 🏗️ Comandos

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instala todas las dependencias |
| `pnpm dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Previsualiza el build de producción localmente |

## 🚀 Despliegue en VPS

### Requisitos del Servidor
- Ubuntu 20.04+ / Debian 11+
- Node.js 18+ o 20+
- pnpm 8+
- Nginx (recomendado)

### Instalación en VPS

1. **Instalar Node.js y pnpm**
```bash
# Instalar Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
```

2. **Clonar y configurar proyecto**
```bash
cd /var/www
sudo git clone https://github.com/tu-usuario/web-blakor.git
cd web-blakor
sudo chown -R $USER:$USER .
pnpm install
```

3. **Build de producción**
```bash
pnpm build
```

4. **Configurar Nginx**
```bash
sudo nano /etc/nginx/sites-available/blakor
```

Agregar:
```nginx
server {
    listen 80;
    server_name blakor.com www.blakor.com;
    
    root /var/www/web-blakor/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Cache estático
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

5. **Activar sitio**
```bash
sudo ln -s /etc/nginx/sites-available/blakor /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

6. **SSL con Certbot**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d blakor.com -d www.blakor.com
```

### Actualizaciones

```bash
cd /var/www/web-blakor
git pull origin main
pnpm install
pnpm build
sudo systemctl reload nginx
```

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
│   ├── home/           # Imágenes del home
│   ├── logo-color-web.webp   # Logo tema oscuro
│   ├── logo-negro-web.webp   # Logo tema claro
│   └── robots.txt      # SEO
├── src/
│   ├── assets/         # Assets procesados por Astro
│   ├── components/     # Componentes reutilizables
│   │   ├── sections/   # Secciones de página
│   │   ├── ui/         # Componentes UI
│   │   ├── nav/        # Navegación
│   │   └── footer/     # Footer
│   ├── content/        # Contenido JSON
│   │   ├── home/       # Contenido del home
│   │   └── site/       # Configuración global
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Páginas del sitio
│   │   ├── legal/      # Páginas legales
│   │   ├── custom-dev.astro
│   │   ├── mobile-apps.astro
│   │   └── index.astro
│   ├── scripts/        # Scripts de animación
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración Astro
└── package.json        # Dependencias
```

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/custom-dev` | Desarrollo Web Personalizado |
| `/mobile-apps` | Aplicaciones Móviles |
| `/legal/privacidad` | Política de Privacidad |
| `/legal/terminos` | Términos de Servicio |

## ✨ Características

- ✅ Diseño responsive
- ✅ Animaciones de scroll optimizadas (sin AOS)
- ✅ Shader animado con Three.js (lazy loaded)
- ✅ Componentes interactivos con React
- ✅ SEO optimizado (meta tags, sitemap, robots.txt)
- ✅ Performance optimizado (lazy loading, code splitting)
- ✅ Tema oscuro premium
- ✅ Glassmorphism UI
- ✅ Testimonios con Framer Motion
- ✅ Imágenes optimizadas con Astro Image

## 🔧 Configuración

### Cambiar información de contacto
Editar `src/content/home/contact.json`

### Cambiar información de marca
Editar `src/content/site/brand.json`

### Cambiar navegación
Editar `src/content/site/navigation.json`

### Cambiar footer
Editar `src/content/home/footer.json`

## 📝 Licencia

Propietario - Blakor © 2025
