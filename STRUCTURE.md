# 🎨 Estructura del Sitio SyncroTech

## ✅ Completado

### 1. HOME (/)
- ✅ Hero con CTAs primario/secundario
- ✅ Services (3 cards en grid)
- ✅ TechStack (grid responsive + ticker)
- ✅ Testimonials (3 cards)
- ✅ FAQ (lista con cards)
- ✅ Contact (botones de canales)

**IDs de navegación:**
- `#home` → Hero
- `#services` → Servicios
- `#tech` → Tecnologías
- `#testimonials` → Testimonios
- `#faq` → Preguntas frecuentes
- `#contact` → Contacto

---

### 2. CUSTOM DEV (/custom-dev)
- ✅ NavCustomDev (sticky subnav)
- ✅ HeroCustomDev
- ✅ Overview (contenido MD)
- ✅ ProcessSteps (4 pasos en grid)
- ✅ TechGrid (badges de tecnologías)
- ✅ Cases (2 columnas)
- ✅ FAQCustomDev
- ✅ Contact

**IDs de navegación:**
- `#overview` → Resumen
- `#process` → Proceso
- `#tech` → Tecnologías
- `#cases` → Casos
- `#faq` → FAQ
- `#contact` → Contacto

---

### 3. MOBILE APPS (/mobile-apps)
- ✅ NavMobileApps (sticky subnav)
- ✅ HeroMobile
- ✅ Overview (contenido MD)
- ✅ Capabilities (grid 3 columnas)
- ✅ StacksShowcase (opciones de stacks)
- ✅ Process (4 pasos)
- ✅ FAQ
- ✅ Contact

**IDs de navegación:**
- `#overview` → Resumen
- `#capabilities` → Capacidades
- `#stacks` → Stacks
- `#process` → Proceso
- `#faq` → FAQ
- `#contact` → Contacto

---

## 🎨 Sistema de Diseño

### Colores (Tailwind)
- `bg-bg` → #0D0D12
- `bg-surface` → #11131A
- `text-text-primary` → #FFFFFFE6
- `text-text-secondary` → #9CA3AF
- `text-brand-magenta` → #E94EFF
- `text-brand-orange` → #FF7A3D
- `text-brand-blue` → #3D7BFF
- `text-brand-red` → #FF3B55

### Tipografías
- `font-display` → Outfit (títulos)
- `font-sans` → Inter (body)

### Componentes Base
- `.card` → Cards translúcidas con glassmorphism
- `.btn-primary` → Gradiente magenta→naranja
- `.btn-secondary` → Borde azul transparente
- `.text-gradient` → Gradiente azul→magenta

### Espaciado
- Secciones: `8rem 2rem` (padding vertical/horizontal)
- Hero: `6rem 2rem` (más compacto)
- Container: max-width 1280px, centrado
- Navbar: fixed top, 80px altura
- Subnav: sticky, top 80px

---

## 🔗 Rutas y CTAs Verificados

### CTAs principales:
- "Solicitar cotización" → `/#contact`
- "Ver servicios" → `/#services`
- Todos los CTAs de contacto apuntan a `/#contact`

### Navegación:
- Logo → `/#home`
- Navbar global → anclas en home
- Subnavs → anclas en páginas de servicio
- "← Home" en subnavs → `/`

---

## 📦 Próximos Pasos

1. **Animaciones y efectos:**
   - Scroll reveal
   - Parallax suave
   - Hover effects avanzados
   - Orbit animation para tech logos
   - Ticker animado

2. **Interactividad:**
   - FAQ accordion
   - Smooth scroll
   - Active nav states
   - Loading states

3. **Optimizaciones:**
   - Lazy loading
   - Image optimization
   - Performance tuning

---

## 🚀 Comandos

```bash
pnpm dev      # Desarrollo local
pnpm build    # Build producción
pnpm preview  # Preview build
```

---

**Estado:** ✅ Estructura base completa y lista para detalles
