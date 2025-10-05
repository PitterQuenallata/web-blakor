# SyncroTech - Sitio Web Corporativo

Sitio web moderno desarrollado con Astro, React y Tailwind CSS. Incluye animaciones con Three.js, componentes interactivos y optimizaciones SEO.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.14.1
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.14
- **Animations**: Framer Motion 12.23.22
- **3D Graphics**: Three.js 0.180.0
- **Icons**: Lucide React 0.544.0
- **Package Manager**: pnpm

## 📦 Dependencias

### Core
```json
"astro": "^5.14.1"
"@astrojs/react": "^4.4.0"
"@astrojs/sitemap": "^3.6.0"
"react": "^19.2.0"
"react-dom": "^19.2.0"
```

### Styling
```json
"tailwindcss": "^4.1.14"
"@tailwindcss/vite": "^4.1.14"
"clsx": "^2.1.1"
"tailwind-merge": "^3.3.1"
"class-variance-authority": "^0.7.1"
```

### UI Components
```json
"lucide-react": "^0.544.0"
"@radix-ui/react-slot": "^1.2.3"
"framer-motion": "^12.23.22"
"react-icon-cloud": "^4.1.7"
"simple-icons": "^15.16.1"
```

### 3D & Graphics
```json
"three": "^0.180.0"
```

## 🛠️ Instalación Local

### Requisitos Previos
- Node.js 18+ o 20+
- pnpm 8+

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/web-syncrotech.git
cd web-syncrotech
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
| `pnpm astro ...` | Ejecuta comandos CLI de Astro |

## 🚀 Despliegue en VPS

### Requisitos del Servidor
- Ubuntu 20.04+ / Debian 11+
- Node.js 18+ o 20+
- pnpm 8+
- Nginx (recomendado)
- PM2 (para proceso persistente)

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
sudo git clone https://github.com/tu-usuario/web-syncrotech.git
cd web-syncrotech
sudo chown -R $USER:$USER .
pnpm install
```

3. **Build de producción**
```bash
pnpm build
```

4. **Configurar Nginx**
```bash
sudo nano /etc/nginx/sites-available/syncrotech
```

Agregar:
```nginx
server {
    listen 80;
    server_name syncrotech.com www.syncrotech.com;
    
    root /var/www/web-syncrotech/dist;
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
sudo ln -s /etc/nginx/sites-available/syncrotech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

6. **SSL con Certbot (opcional pero recomendado)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d syncrotech.com -d www.syncrotech.com
```

### Actualizaciones

```bash
cd /var/www/web-syncrotech
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
│   └── robots.txt      # SEO
├── src/
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
│   └── styles/         # Estilos globales
├── astro.config.mjs   # Configuración Astro
├── tailwind.config.js # Configuración Tailwind
└── package.json       # Dependencias
```

## ✨ Características

- ✅ Diseño responsive
- ✅ Animaciones de scroll reveal
- ✅ Shader animado con Three.js
- ✅ Componentes interactivos con React
- ✅ SEO optimizado (meta tags, sitemap, robots.txt)
- ✅ Performance optimizado (lazy loading, code splitting)
- ✅ Tema oscuro Darkrise
- ✅ Glassmorphism UI

## 📝 Licencia

Propietario - SyncroTech © 2025
