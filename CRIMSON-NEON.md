# 🔴 Crimson Neon Design System

## 🎨 Paleta de Colores

### Colores Base
```css
--bg: #0b0b0f           /* Fondo principal - negro profundo */
--surface: #12121a      /* Paneles y cards - gris oscuro */
```

### Colores de Texto
```css
--text-primary: #ffffff     /* Texto principal - blanco puro */
--text-secondary: #a3a3a3   /* Texto secundario - gris medio */
```

### Colores de Marca (Brand)
```css
--brand-primary: #ef4444    /* Rojo fuerte - acentos principales */
--brand-secondary: #a21caf  /* Fucsia oscuro - acentos secundarios */
--brand-accent: #9333ea     /* Violeta intenso - highlights */
```

## 🌈 Gradientes

### Gradiente Principal (Botones, Títulos)
```css
background: linear-gradient(135deg, #dc2626, #a21caf, #7e22ce);
/* red-600 → fuchsia-600 → purple-700 */
```

### Gradiente Hover
```css
background: linear-gradient(135deg, #b91c1c, #86198f);
/* red-700 → fuchsia-800 */
```

### Aurora Background
```css
radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
radial-gradient(circle at 80% 70%, rgba(162, 28, 175, 0.08) 0%, transparent 50%),
radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.06) 0%, transparent 50%);
```

## 💫 Efectos y Sombras

### Glow Effects
```css
box-shadow: 0 0 30px rgba(239, 68, 68, 0.35);  /* glow-red */
box-shadow: 0 0 30px rgba(162, 28, 175, 0.3);  /* glow-fuchsia */
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);  /* inner-card */
```

### Borders
```css
border: 1px solid rgba(239, 68, 68, 0.4);  /* Navbar, Footer */
border: 1px solid rgba(239, 68, 68, 0.3);  /* Subnav */
border: 1px solid rgba(255, 255, 255, 0.1);  /* Cards default */
```

### Hover States
```css
border-color: rgba(239, 68, 68, 0.4);  /* Cards hover */
box-shadow: 0 0 30px rgba(239, 68, 68, 0.35);  /* Cards hover glow */
```

## 🎯 Componentes

### Botones

**Primary Button:**
```css
background: linear-gradient(135deg, #dc2626, #a21caf, #7e22ce);
color: #ffffff;
box-shadow: 0 0 20px rgba(239, 68, 68, 0.35);

/* Hover */
background: linear-gradient(135deg, #b91c1c, #86198f);
box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
```

**Secondary Button:**
```css
background: transparent;
color: #9333ea;
border: 1px solid #9333ea;

/* Hover */
background: rgba(147, 51, 234, 0.1);
box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
```

### Cards
```css
background: #12121a;
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

/* Hover */
background: rgba(255, 255, 255, 0.05);
border-color: rgba(239, 68, 68, 0.4);
box-shadow: 0 0 30px rgba(239, 68, 68, 0.35);
transform: translateY(-5px);
```

### Navbar
```css
background: rgba(18, 18, 26, 0.7);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(239, 68, 68, 0.4);
```

### Footer
```css
background: rgba(18, 18, 26, 0.7);
backdrop-filter: blur(10px);
border-top: 1px solid rgba(239, 68, 68, 0.4);
```

### Subnav (Sticky)
```css
background: rgba(18, 18, 26, 0.8);
backdrop-filter: blur(10px);
border-bottom: 1px solid rgba(239, 68, 68, 0.3);
```

## 📝 Tipografía

### Fuentes
- **Display (Títulos):** Outfit (700, 600, 400)
- **Body (Texto):** Inter (600, 500, 400)

### Tamaños
```css
h1: clamp(2.5rem, 5vw, 4rem);
h2: clamp(2rem, 4vw, 3rem);
h3: clamp(1.5rem, 3vw, 2rem);
body: 16px;
```

## 🎭 Clases Tailwind Disponibles

### Colores
```html
bg-bg
bg-surface
text-text-primary
text-text-secondary
text-brand-primary
text-brand-secondary
text-brand-accent
```

### Sombras
```html
shadow-glow-red
shadow-glow-fuchsia
shadow-inner-card
```

### Utilidades
```html
text-gradient  /* Gradiente rojo→fucsia→violeta */
font-display   /* Outfit */
font-sans      /* Inter */
rounded        /* 12px */
container      /* max-w-1280px, centrado */
```

## 🚀 Uso en Componentes

### Links
```css
color: #ef4444;  /* brand-primary */
hover: #9333ea;  /* brand-accent */
```

### Acentos de Color por Sección
- **Home Services:** `text-brand-primary`
- **Custom Dev Process:** `text-brand-primary`
- **Mobile Apps Stacks:** `text-brand-accent`
- **Mobile Apps Process:** `text-brand-secondary`
- **Testimonials Author:** `text-brand-primary`
- **Cases KPI:** `text-brand-primary`

## 🎨 Filosofía del Diseño

**Crimson Neon** es un sistema visual que transmite:
- ✅ **Energía y potencia** (rojos intensos)
- ✅ **Tecnología avanzada** (neones y glows)
- ✅ **Profesionalismo** (contrastes profundos)
- ✅ **Masculinidad técnica** (sin tonos pastel)
- ✅ **Modernidad** (gradientes y glassmorphism)

El sistema evita:
- ❌ Tonos rosados o pastel
- ❌ Colores apagados o desaturados
- ❌ Exceso de brillo (opacidades controladas)
- ❌ Fondos claros o grises medios

---

**Versión:** 1.0 - Crimson Neon  
**Fecha:** 2024  
**Proyecto:** SyncroTech
