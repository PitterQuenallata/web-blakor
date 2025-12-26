#!/bin/bash

# Performance Check Script
# Verifica que las optimizaciones estén aplicadas

echo "🔍 Verificando optimizaciones de performance..."
echo ""

# Check 1: AOS removido
if grep -q "\"aos\"" package.json; then
  echo "❌ AOS todavía en package.json"
else
  echo "✅ AOS removido correctamente"
fi

# Check 2: Fontsource instalado
if grep -q "@fontsource/outfit" package.json; then
  echo "✅ Fontsource instalado"
else
  echo "❌ Fontsource no encontrado"
fi

# Check 3: IconCloud comentado
if grep -q "<!-- <IconCloud" src/components/sections/TechStack.astro; then
  echo "✅ IconCloud deshabilitado"
else
  echo "⚠️  IconCloud podría estar activo"
fi

# Check 4: Testimonials comentado
if grep -q "<!-- <Testimonials" src/pages/index.astro; then
  echo "✅ Testimonials deshabilitado"
else
  echo "⚠️  Testimonials podría estar activo"
fi

# Check 5: AnimatedShaderBackground con lazy load
if grep -q "client:idle" src/components/sections/Hero.astro; then
  echo "✅ Hero background con lazy load"
else
  echo "⚠️  Hero background podría usar client:load"
fi

# Check 6: Sistema de animaciones custom
if [ -f "src/scripts/animations.ts" ]; then
  echo "✅ Sistema de animaciones custom presente"
else
  echo "❌ Sistema de animaciones custom no encontrado"
fi

echo ""
echo "📊 Análisis de bundle (ejecutar después de build):"
echo "   pnpm build"
echo "   ls -lh dist/_assets/*.js | awk '{print \$5, \$9}'"
echo ""
echo "🚀 Para probar performance:"
echo "   pnpm build && pnpm preview"
echo "   Abrir http://localhost:4321"
echo "   DevTools > Lighthouse > Run"
echo ""
