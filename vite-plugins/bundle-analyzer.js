// Vite plugin para analizar bundle size
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Plugin de análisis de bundle (solo en build)
 * Genera un reporte HTML visual del tamaño de cada dependencia
 * 
 * Uso: pnpm build && open stats.html
 */
export function bundleAnalyzer() {
    return process.env.ANALYZE === 'true'
        ? visualizer({
            filename: './stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        })
        : null;
}
